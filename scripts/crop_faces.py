#!/usr/bin/env python3
"""
Face-centered crop script for cast images.
Usage: python3 scripts/crop_faces.py

Detects faces using YuNet (ONNX) with Haar cascade fallback.
Outputs cropped 400x500 images to public/assets/casts/cropped/
Saves face detection results to scripts/face-crop-results.json for review.
"""

import cv2
import json
import os
import sys
import urllib.request
from pathlib import Path
from PIL import Image
import numpy as np

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
INPUT_DIR = PROJECT_ROOT / "public" / "assets" / "casts"
OUTPUT_DIR = INPUT_DIR / "cropped"
RESULTS_FILE = SCRIPT_DIR / "face-crop-results.json"
YUNET_MODEL = SCRIPT_DIR / "face_detection_yunet_2023mar.onnx"

# Crop output size (portrait, good for cards)
CROP_W, CROP_H = 400, 500

# --- YuNet model download ---

def download_yunet():
    url = (
        "https://github.com/opencv/opencv_zoo/raw/main/models/"
        "face_detection_yunet/face_detection_yunet_2023mar.onnx"
    )
    print(f"Downloading YuNet model from opencv_zoo...")
    try:
        urllib.request.urlretrieve(url, YUNET_MODEL)
        print(f"  Saved to {YUNET_MODEL}")
        return True
    except Exception as e:
        print(f"  Download failed: {e}")
        return False

# --- Face detection ---

def detect_faces_yunet(img_bgr):
    """Use YuNet ONNX detector. Returns list of (x, y, w, h) or empty list."""
    if not YUNET_MODEL.exists():
        if not download_yunet():
            return []
    h, w = img_bgr.shape[:2]
    try:
        detector = cv2.FaceDetectorYN_create(str(YUNET_MODEL), "", (w, h), 0.6, 0.3, 5000)
        _, faces = detector.detect(img_bgr)
        if faces is None:
            return []
        # YuNet returns [x, y, w, h, ...landmarks..., confidence]
        return [(int(f[0]), int(f[1]), int(f[2]), int(f[3])) for f in faces]
    except Exception as e:
        print(f"    YuNet error: {e}")
        return []

def detect_faces_haar(gray):
    """Multi-cascade Haar fallback. Returns list of (x, y, w, h)."""
    ih, iw = gray.shape
    names = [
        "haarcascade_frontalface_default.xml",
        "haarcascade_frontalface_alt.xml",
        "haarcascade_frontalface_alt2.xml",
    ]
    best, best_area = None, 0
    min_face_pixels = (min(iw, ih) * 0.08) ** 2  # at least 8% of shorter dim
    for name in names:
        path = cv2.data.haarcascades + name
        cascade = cv2.CascadeClassifier(path)
        detections = cascade.detectMultiScale(
            gray, scaleFactor=1.05, minNeighbors=4, minSize=(40, 40)
        )
        if len(detections) > 0:
            for (x, y, w, h) in detections:
                cx_pct = (x + w / 2) / iw
                cy_pct = (y + h / 2) / ih
                # Sanity: reject detections in bottom 55%, extreme sides, or tiny
                if cy_pct > 0.55 or cx_pct < 0.08 or cx_pct > 0.92:
                    continue
                if w * h < min_face_pixels:
                    continue
                if w * h > best_area:
                    best_area = w * h
                    best = (x, y, w, h)
    return [best] if best else []

def find_face_center(img_bgr):
    """
    Returns (cx_pct, cy_pct, method) where cx/cy are face center as % of image.
    method: 'yunet' | 'haar' | 'heuristic'
    """
    h, w = img_bgr.shape[:2]
    gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)

    # 1. Try YuNet
    faces = detect_faces_yunet(img_bgr)
    method = "yunet"
    # Sanity: filter YuNet faces in bottom half or extreme sides
    h, w = img_bgr.shape[:2]
    faces = [f for f in faces if (f[1] + f[3] / 2) / h < 0.60 and 0.05 < (f[0] + f[2] / 2) / w < 0.95]

    # 2. Haar fallback
    if not faces:
        faces = detect_faces_haar(gray)
        method = "haar"

    if faces:
        # Pick largest face
        fx, fy, fw, fh = max(faces, key=lambda f: f[2] * f[3])
        cx = fx + fw / 2
        cy = fy + fh / 2
        return cx / w * 100, cy / h * 100, method

    # 3. Heuristic: upper-center (face typically in top ~35% of portrait photos)
    return 50.0, 32.0, "heuristic"

# --- Cropping ---

def crop_face_centered(img_path: Path, output_path: Path):
    """Crop image with face centered. Returns result dict."""
    img_bgr = cv2.imread(str(img_path))
    if img_bgr is None:
        return {"file": img_path.name, "error": "Could not read image"}

    ih, iw = img_bgr.shape[:2]
    cx_pct, cy_pct, method = find_face_center(img_bgr)

    # Absolute face center in original image
    cx = iw * cx_pct / 100
    cy = ih * cy_pct / 100

    # Desired crop aspect ratio
    aspect = CROP_W / CROP_H  # 0.8  (portrait)

    # Calculate crop dimensions that fit in the image
    # We want the face to be in the upper-center of the crop
    # Use ~65% of the shorter dimension as crop height basis
    crop_h = min(ih, iw / aspect) * 0.85
    crop_w = crop_h * aspect

    # Position: face center at ~30% from top of crop (leaves headroom)
    face_y_in_crop = crop_h * 0.30
    top = cy - face_y_in_crop
    left = cx - crop_w / 2

    # Clamp to image bounds
    top = max(0, min(top, ih - crop_h))
    left = max(0, min(left, iw - crop_w))
    bottom = top + crop_h
    right = left + crop_w

    # Crop and resize with PIL for quality
    pil_img = Image.open(img_path).convert("RGB")
    cropped = pil_img.crop((int(left), int(top), int(right), int(bottom)))
    resized = cropped.resize((CROP_W, CROP_H), Image.LANCZOS)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    resized.save(output_path, "JPEG", quality=92, optimize=True)

    return {
        "file": img_path.name,
        "method": method,
        "face_center_pct": {"x": round(cx_pct, 1), "y": round(cy_pct, 1)},
        "crop": {"left": int(left), "top": int(top), "right": int(right), "bottom": int(bottom)},
        "original_size": {"w": iw, "h": ih},
        "output": str(output_path.relative_to(PROJECT_ROOT)),
    }

# --- Main ---

def main():
    jpg_files = sorted(INPUT_DIR.glob("*.jpg")) + sorted(INPUT_DIR.glob("*.png"))
    # Exclude already-cropped images
    jpg_files = [f for f in jpg_files if f.parent.name != "cropped"]

    if not jpg_files:
        print(f"No images found in {INPUT_DIR}")
        sys.exit(1)

    print(f"Processing {len(jpg_files)} images → {OUTPUT_DIR}\n")

    results = []
    counts = {"yunet": 0, "haar": 0, "heuristic": 0, "error": 0}

    for img_path in jpg_files:
        output_path = OUTPUT_DIR / img_path.name
        print(f"  {img_path.name}", end=" ... ", flush=True)
        result = crop_face_centered(img_path, output_path)
        results.append(result)

        if "error" in result:
            print(f"ERROR: {result['error']}")
            counts["error"] += 1
        else:
            print(f"{result['method']:9s}  face@({result['face_center_pct']['x']:.0f}%, {result['face_center_pct']['y']:.0f}%)")
            counts[result["method"]] += 1

    print(f"\nDone! YuNet:{counts['yunet']}  Haar:{counts['haar']}  Heuristic:{counts['heuristic']}  Error:{counts['error']}")
    print(f"Results saved to: {RESULTS_FILE}")
    print(f"Cropped images in: {OUTPUT_DIR}")

    with open(RESULTS_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
