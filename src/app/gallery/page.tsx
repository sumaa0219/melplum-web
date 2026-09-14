import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "ギャラリー | めるぷらむ",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
