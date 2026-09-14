"use client";

import { useState } from "react";
import Image from "next/image";
import MediaFrame from "@/components/MediaFrame";

type Tab = "all" | "photo" | "video" | "cheki";

const officialArt = [
  {
    src: "/assets/poster.jpeg",
    alt: "めるぷらむ イベントポスター",
    caption: "イベントポスター",
  },
];

// Photo placeholders — replace with real src/alt when images are available
const photos: { label: string; badge?: string }[] = [
  { label: "カフェ営業の様子", badge: "☕ カフェ" },
  { label: "アバター集合写真", badge: "✨ アバター" },
  { label: "キャスト紹介", badge: "🌸 キャスト" },
  { label: "Bar営業の様子", badge: "🍸 Bar" },
  { label: "集合写真", badge: "📸 みんな" },
  { label: "カフェワールド全景", badge: "🏠 ワールド" },
  { label: "ローテーション中", badge: "💬 トーク" },
  { label: "アフターワールド", badge: "🎉 アフター" },
];

// Video placeholders
const videos: { label: string; badge?: string }[] = [
  { label: "めるぷらむ ダイジェスト", badge: "🎬 メイン" },
  { label: "カフェ営業ハイライト Vol.1", badge: "☕" },
  { label: "Bar営業ハイライト", badge: "🍸" },
  { label: "集合写真タイム", badge: "📸" },
  { label: "キャスト紹介映像", badge: "✨" },
  { label: "イベント告知CM", badge: "📢" },
];

// Polaroid/Cheki placeholders
const cheki: { label: string }[] = [
  { label: "ないちぃ with ゲスト" },
  { label: "澄々すぅ with ゲスト" },
  { label: "ぷらむ with ゲスト" },
  { label: "コメット with ゲスト" },
  { label: "きりゆめ with ゲスト" },
  { label: "ニャンツァー with ゲスト" },
  { label: "水城こいも with ゲスト" },
  { label: "結咲甘音 with ゲスト" },
];

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "all", label: "すべて", icon: "🌸" },
  { id: "photo", label: "写真", icon: "📷" },
  { id: "video", label: "動画", icon: "🎬" },
  { id: "cheki", label: "チェキ", icon: "📸" },
];

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
            ✦ Gallery ✦
          </p>
          <h1 className="text-3xl md:text-4xl font-kiwi font-bold text-choco-dark">
            ギャラリー
          </h1>
          <div className="section-divider" />
          <p className="text-choco-medium mt-4">
            めるぷらむの世界をご覧ください 📸
          </p>
        </div>

        {/* ── Official Art ── */}
        <div className="mb-14">
          <h2 className="text-base font-bold text-choco-dark mb-5 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-pink-sweet/40 flex items-center justify-center text-sm">
              🎨
            </span>
            オフィシャルアート
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {officialArt.map(({ src, alt, caption }) => (
              <div key={src} className="cafe-card p-0 overflow-hidden group">
                <div className="bg-pink-sweet/10 overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-sm text-choco-medium py-3 font-bold px-4">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === id
                  ? "bg-gradient-to-r from-pink-hot to-lavender-soft text-white shadow-md"
                  : "bg-white border-2 border-pink-sweet/50 text-choco-medium hover:border-pink-hot/60 hover:text-choco-dark"
              }`}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </div>

        {/* ── All Tab ── */}
        {activeTab === "all" && (
          <div className="space-y-10">
            {/* Featured + grid */}
            <div>
              <h3 className="text-sm font-bold text-choco-medium mb-4 flex items-center gap-2">
                <span>📷</span> 写真
              </h3>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
                style={{ gridAutoRows: "180px" }}
              >
                <div className="col-span-2 row-span-2">
                  <MediaFrame
                    type="photo"
                    aspectRatio="1/1"
                    label={photos[0].label}
                    badge={photos[0].badge}
                    className="h-full [&>div]:h-full"
                  />
                </div>
                {photos.slice(1, 5).map((p) => (
                  <MediaFrame
                    key={p.label}
                    type="photo"
                    aspectRatio="4/3"
                    label={p.label}
                    badge={p.badge}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-choco-medium mb-4 flex items-center gap-2">
                <span>🎬</span> 動画
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <MediaFrame
                    type="video"
                    aspectRatio="16/9"
                    label={videos[0].label}
                    badge={videos[0].badge}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <MediaFrame
                    type="video"
                    aspectRatio="16/9"
                    label={videos[1].label}
                    badge={videos[1].badge}
                  />
                  <MediaFrame
                    type="video"
                    aspectRatio="16/9"
                    label={videos[2].label}
                    badge={videos[2].badge}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-choco-medium mb-4 flex items-center gap-2">
                <span>📸</span> チェキ
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {cheki.slice(0, 4).map((c, i) => (
                  <div
                    key={c.label}
                    style={{
                      transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})`,
                    }}
                  >
                    <MediaFrame
                      type="polaroid"
                      aspectRatio="3/4"
                      caption={c.label}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Photo Tab ── */}
        {activeTab === "photo" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <MediaFrame
                key={p.label}
                type="photo"
                aspectRatio={i === 0 ? "1/1" : "4/3"}
                label={p.label}
                badge={p.badge}
              />
            ))}
          </div>
        )}

        {/* ── Video Tab ── */}
        {activeTab === "video" && (
          <div className="grid md:grid-cols-2 gap-5">
            {videos.map((v) => (
              <MediaFrame
                key={v.label}
                type="video"
                aspectRatio="16/9"
                label={v.label}
                badge={v.badge}
              />
            ))}
          </div>
        )}

        {/* ── Cheki Tab ── */}
        {activeTab === "cheki" && (
          <div>
            <p className="text-center text-sm text-choco-medium mb-8">
              各ローテーション後に撮影した思い出のチェキ風ショット 🎀
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {cheki.map((c, i) => (
                <div
                  key={c.label}
                  style={{
                    transform: `rotate(${i % 4 === 0 ? "-2deg" : i % 4 === 1 ? "1.5deg" : i % 4 === 2 ? "-1deg" : "2deg"})`,
                  }}
                >
                  <MediaFrame
                    type="polaroid"
                    aspectRatio="3/4"
                    caption={c.label}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div
          className="text-center rounded-[20px] p-8 mt-14"
          style={{ background: "linear-gradient(135deg, #FFE8F0, #EEE0FF)" }}
        >
          <p className="text-lg font-bold text-choco-dark mb-2">
            📷 最新のイベント写真はこちら
          </p>
          <p className="text-sm text-choco-medium mb-6">
            公式X (<span className="font-bold">@melplum_vrc</span>)
            で毎回のイベント写真を公開しています。
          </p>
          <a
            href="https://x.com/melplum_vrc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            𝕏 公式X (@melplum_vrc) を見る
          </a>
        </div>
      </div>
    </div>
  );
}
