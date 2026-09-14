import Image from "next/image";
import Link from "next/link";
import MediaFrame from "@/components/MediaFrame";
import TransparentLogoBanner from "@/components/TransparentLogoBanner";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-bg min-h-[92vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute top-12 left-8 text-5xl float-anim opacity-50 select-none">
          🍰
        </div>
        <div className="absolute top-24 right-10 text-4xl float-anim-2 opacity-50 select-none">
          🎀
        </div>
        <div className="absolute bottom-24 left-16 text-3xl float-anim-3 opacity-50 select-none">
          🍓
        </div>
        <div className="absolute bottom-16 right-16 text-4xl float-anim opacity-50 select-none">
          ✨
        </div>
        <div className="absolute top-1/2 left-4 text-2xl float-anim-2 opacity-30 select-none">
          🌸
        </div>
        <div className="absolute top-1/3 right-4 text-2xl float-anim-3 opacity-30 select-none">
          💜
        </div>
        <div className="absolute top-8 right-1/3 text-3xl float-anim opacity-30 select-none">
          🍪
        </div>
        <div className="absolute bottom-8 left-1/3 text-3xl float-anim-2 opacity-30 select-none">
          🍮
        </div>

        <div className="max-w-3xl mx-auto text-center z-10 w-full">
          {/* Transparent logo on decorated gradient — place public/assets/logo.png for full effect */}
          <TransparentLogoBanner className="mb-8 shadow-2xl" priority />

          {/* Catchcopy */}
          <p className="text-base md:text-lg text-choco-medium font-bold mb-2">
            ここに集まる、ここから繋がる。
          </p>
          <h1 className="text-lg md:text-2xl font-bold text-choco-dark mb-8 leading-relaxed">
            <span className="text-pink-hot">プラムちゃん</span>
            と過ごす甘くて可愛いカフェ＆Bar
          </h1>

          {/* Schedule Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="bg-white/80 border-2 border-pink-sweet rounded-[16px] px-5 py-3 shadow-sm backdrop-blur-sm">
              <p className="text-[10px] text-pink-hot font-bold uppercase tracking-widest">
                ☕ Café
              </p>
              <p className="text-sm font-bold text-choco-dark">
                第1・3・4 火曜日
              </p>
            </div>
            <div className="bg-white/80 border-2 border-lavender-soft rounded-[16px] px-5 py-3 shadow-sm backdrop-blur-sm">
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "#9B59B6" }}
              >
                🍸 Bar
              </p>
              <p className="text-sm font-bold text-choco-dark">第2・5 火曜日</p>
            </div>
            <div className="bg-pink-sweet/70 border-2 border-pink-hot/40 rounded-[16px] px-5 py-3 shadow-sm">
              <p className="text-[10px] text-choco-medium font-bold uppercase tracking-widest">
                🕙 Every Week
              </p>
              <p className="text-sm font-bold text-choco-dark">
                火曜日 22:00〜
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/rules" className="btn-primary text-sm">
              📋 参加方法・ルール
            </Link>
            <Link href="/cast" className="btn-secondary text-sm">
              ✨ キャスト一覧
            </Link>
            <a
              href="https://vrchat.com/home/group/grp_0b78cf5a-d558-44f4-b03c-1ce77d703ea9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              🌐 VRChat Group
            </a>
            <a
              href="https://x.com/melplum_vrc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              𝕏 公式X
            </a>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="overflow-hidden -mt-1">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,40 C240,0 480,60 720,30 C960,0 1200,50 1440,20 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* ===== FEATURES ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
              ✦ Features ✦
            </p>
            <h2 className="text-2xl md:text-3xl font-kiwi font-bold text-choco-dark">
              めるぷらむ 3つの魅力
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🍵",
                title: "1:2でまったりおしゃべり",
                desc: "キャスト1人にゲスト2名のアットホームなローテーション形式（1ローテ15分）。ゆっくり・気軽にお話しできます。",
                color: "#FFF0F5",
              },
              {
                icon: "🎭",
                title: "カフェ＆Barの2つの世界観",
                desc: "可愛くポップなカフェ空間と、少しシックで落ち着いたBar空間の2つの雰囲気でお楽しみいただけます。",
                color: "#F5F0FF",
              },
              {
                icon: "🌸",
                title: "初めてでも安心のコミュニティ",
                desc: "VRChat初心者大歓迎！アバター「プラム」好きが集まり、交流の輪が広がる温かい場所です。",
                color: "#FFF5F0",
              },
            ].map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="cafe-card text-center"
                style={{ backgroundColor: color, borderColor: "#FFC4D6" }}
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-base font-bold text-choco-dark mb-3">
                  {title}
                </h3>
                <p className="text-sm text-choco-medium leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENT SNAPS ===== */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
              ✦ Event Snaps ✦
            </p>
            <h2 className="text-2xl md:text-3xl font-kiwi font-bold text-choco-dark">
              イベントの雰囲気
            </h2>
            <div className="section-divider" />
            <p className="text-sm text-choco-medium mt-3">
              毎週火曜日、みんなで楽しいひとときを過ごしています 📸
            </p>
          </div>

          {/* Asymmetric photo grid — replace MediaFrame src prop with image paths when ready */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
            style={{ gridTemplateRows: "200px 200px" }}
          >
            <div className="col-span-2 row-span-2">
              <MediaFrame
                type="photo"
                aspectRatio="1/1"
                label="カフェ営業の様子"
                badge="☕ カフェ"
                className="h-full [&>div]:h-full"
              />
            </div>
            <MediaFrame
              type="photo"
              aspectRatio="4/3"
              label="集合写真"
              badge="📸 みんな"
            />
            <MediaFrame
              type="photo"
              aspectRatio="4/3"
              label="アバター集合"
              badge="✨ アバター"
            />
            <MediaFrame
              type="video"
              aspectRatio="4/3"
              label="ダイジェスト映像"
              badge="🎬 動画"
            />
            <MediaFrame
              type="photo"
              aspectRatio="4/3"
              label="Bar営業の様子"
              badge="🍸 Bar"
            />
          </div>

          <div className="text-center">
            <Link href="/gallery" className="btn-secondary text-sm">
              📸 ギャラリーをもっと見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE PREVIEW ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
              ✦ Schedule ✦
            </p>
            <h2 className="text-2xl md:text-3xl font-kiwi font-bold text-choco-dark">
              開催スケジュール
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-[20px] border-2 border-pink-sweet p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-sweet/40 flex items-center justify-center text-2xl">
                  ☕
                </div>
                <div>
                  <h3 className="font-bold text-choco-dark text-lg">
                    カフェ営業
                  </h3>
                  <p className="text-xs text-pink-hot font-bold">
                    第1・3・4 火曜日
                  </p>
                </div>
              </div>
              <p className="text-sm text-choco-medium leading-relaxed">
                「カフェめるぷらむ」として可愛いポップなカフェ空間で開催！スイーツモチーフの世界観をお楽しみください🍰
              </p>
            </div>

            <div className="bg-white rounded-[20px] border-2 border-lavender-soft p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "#D8B4F840" }}
                >
                  🍸
                </div>
                <div>
                  <h3 className="font-bold text-choco-dark text-lg">Bar営業</h3>
                  <p className="text-xs font-bold" style={{ color: "#9B59B6" }}>
                    第2・5 火曜日
                  </p>
                </div>
              </div>
              <p className="text-sm text-choco-medium leading-relaxed">
                少しシックで落ち着いたBar空間での開催。ゆったりとした雰囲気の中で会話を楽しみましょう✨
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about" className="btn-primary">
              📅 タイムスケジュール詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
              ✦ Movie ✦
            </p>
            <h2 className="text-2xl md:text-3xl font-kiwi font-bold text-choco-dark">
              イベント動画
            </h2>
            <div className="section-divider" />
            <p className="text-sm text-choco-medium mt-3">
              イベントの様子を動画でもお届けします 🎬
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <MediaFrame
                type="video"
                aspectRatio="16/9"
                label="めるぷらむ ダイジェスト映像"
                badge="🎬 メイン動画"
              />
            </div>
            <div className="flex flex-col gap-4">
              <MediaFrame
                type="video"
                aspectRatio="16/9"
                label="カフェ営業ハイライト"
                badge="☕"
              />
              <MediaFrame
                type="video"
                aspectRatio="16/9"
                label="Bar営業ハイライト"
                badge="🍸"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== POSTER ===== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-sm mx-auto text-center">
          <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-4">
            ✦ Event Poster ✦
          </p>
          <div className="relative rounded-[24px] overflow-hidden shadow-2xl border-4 border-pink-sweet/60">
            <Image
              src="/assets/poster.jpeg"
              alt="めるぷらむ イベントポスター"
              width={500}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(135deg, #FFE8F0 0%, #EEE0FF 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-4">🎀</div>
          <h2 className="text-2xl md:text-3xl font-kiwi font-bold text-choco-dark mb-4">
            一緒に楽しみましょう！
          </h2>
          <p className="text-choco-medium leading-relaxed mb-8">
            VRChatのグループに参加して最新情報をチェック！
            <br />
            公式Xもフォローしてお知らせをお受け取りください🌸
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://vrchat.com/home/group/grp_0b78cf5a-d558-44f4-b03c-1ce77d703ea9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              🌐 VRChat Groupに参加する
            </a>
            <a
              href="https://x.com/melplum_vrc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              𝕏 公式Xをフォローする
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
