import Link from "next/link";
import MelplumLogo from "./MelplumLogo";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-pink-sweet/50 mt-16">
      {/* Decorative top stripe */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(to right, #FFC4D6, #D8B4F8, #FF99B8, #FFC4D6)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-sweet to-lavender-soft p-1.5 shadow-sm">
                <MelplumLogo size={44} />
              </div>
              <div>
                <p className="text-xs text-choco-medium font-bold">
                  プラムちゃんCAFE
                </p>
                <p className="text-xl font-kiwi font-bold text-choco-dark">
                  めるぷらむ
                </p>
              </div>
            </Link>
            <p className="text-sm text-choco-medium text-center md:text-left max-w-[220px] leading-relaxed">
              ここに集まる、ここから繋がる。
              <br />
              VRChatで毎週火曜日 22:00〜🌸
            </p>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {[
              { href: "/", label: "ホーム" },
              { href: "/about", label: "イベント概要" },
              { href: "/rules", label: "参加ルール" },
              { href: "/cast", label: "キャスト" },
              { href: "/gallery", label: "ギャラリー" },
              { href: "/links", label: "リンク" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-choco-medium hover:text-pink-hot font-bold transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-stretch gap-3 min-w-[180px]">
            <a
              href="https://vrchat.com/home/group/grp_0b78cf5a-d558-44f4-b03c-1ce77d703ea9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm text-center px-4 py-2.5"
            >
              🌐 VRChat Group
            </a>
            <a
              href="https://x.com/melplum_vrc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm text-center px-4 py-2.5"
            >
              𝕏 公式X (Twitter)
            </a>
          </div>
        </div>

        <div className="section-divider my-8" />

        <p className="text-center text-xs text-choco-medium/70">
          © 2026 めるぷらむ All rights reserved. 🎀
        </p>
      </div>
    </footer>
  );
}
