import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "リンク集 | めるぷらむ",
};

const externalLinks = [
  {
    href: "https://vrchat.com/home/group/grp_0b78cf5a-d558-44f4-b03c-1ce77d703ea9",
    icon: "🌐",
    title: "VRChat グループ",
    desc: "めるぷらむ公式VRChatグループ。ワールドリンク・イベント情報はこちら。",
    color: "#FFF0F5",
    border: "#FFC4D6",
  },
  {
    href: "https://x.com/melplum_vrc",
    icon: "𝕏",
    title: "公式X (Twitter)",
    desc: "@melplum_vrc — 最新情報・ワールドリンク・お知らせを発信中！",
    color: "#F5F0FF",
    border: "#D8B4F8",
  },
];

const internalLinks = [
  { href: "/about",   icon: "📅", label: "イベント概要" },
  { href: "/rules",   icon: "📋", label: "参加ルール"   },
  { href: "/cast",    icon: "✨", label: "キャスト紹介" },
  { href: "/gallery", icon: "📸", label: "ギャラリー"   },
];

export default function LinksPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">✦ Links ✦</p>
          <h1 className="text-3xl md:text-4xl font-kiwi font-bold text-choco-dark">リンク集</h1>
          <div className="section-divider" />
          <p className="text-choco-medium mt-4">めるぷらむ関連リンクはこちらから 🌸</p>
        </div>

        {/* External Links */}
        <div className="space-y-4 mb-10">
          {externalLinks.map(({ href, icon, title, desc, color, border }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-[20px] p-5 border-2 transition-all hover:shadow-lg hover:-translate-y-1 group"
              style={{ backgroundColor: color, borderColor: border }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm shrink-0"
                style={{ background: `linear-gradient(135deg, ${border}, #D8B4F8)`, color: "white" }}
              >
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-choco-dark group-hover:text-pink-hot transition text-base">{title}</h3>
                <p className="text-sm text-choco-medium leading-relaxed">{desc}</p>
              </div>
              <span className="text-pink-hot text-xl font-bold group-hover:translate-x-1 transition-transform shrink-0">→</span>
            </a>
          ))}
        </div>

        {/* Internal Links */}
        <div className="cafe-card">
          <h2 className="font-bold text-choco-dark text-base mb-5 text-center">📌 サイト内リンク</h2>
          <div className="grid grid-cols-2 gap-3">
            {internalLinks.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 bg-pink-sweet/20 hover:bg-pink-sweet/40 transition rounded-[14px] p-4 text-sm font-bold text-choco-dark group"
              >
                <span>{icon}</span>
                <span className="group-hover:text-pink-hot transition">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-pink-sweet/30 text-choco-dark text-xs font-bold px-4 py-2 rounded-full">
            <span>🎀</span>
            <span>VRChat 毎週火曜日 22:00〜開催</span>
            <span>🎀</span>
          </div>
        </div>
      </div>
    </div>
  );
}
