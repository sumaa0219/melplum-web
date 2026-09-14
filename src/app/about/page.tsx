import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "イベント概要・スケジュール | めるぷらむ",
};

const timeSchedule = [
  { time: "22:00〜", event: "ジョイン＆整列", icon: "🚪", accent: "#FFC4D6" },
  {
    time: "22:03〜22:05",
    event: "注意事項説明",
    icon: "📢",
    accent: "#D8B4F8",
  },
  {
    time: "22:05〜22:20",
    event: "第1ローテーション（15分）",
    icon: "1️⃣",
    accent: "#FFC4D6",
  },
  {
    time: "22:25〜22:40",
    event: "第2ローテーション（15分）",
    icon: "2️⃣",
    accent: "#D8B4F8",
  },
  {
    time: "22:45〜23:00",
    event: "第3ローテーション（15分）",
    icon: "3️⃣",
    accent: "#FFC4D6",
  },
  {
    time: "23:00〜",
    event: "集合写真撮影・解散（アフターワールドへ自由移動）",
    icon: "📸",
    accent: "#D8B4F8",
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
            ✦ About & Schedule ✦
          </p>
          <h1 className="text-3xl md:text-4xl font-kiwi font-bold text-choco-dark">
            イベント概要・スケジュール
          </h1>
          <div className="section-divider" />
          <p className="text-choco-medium mt-4">
            めるぷらむのイベント情報をご確認ください
          </p>
        </div>

        {/* Basic Info */}
        <div className="cafe-card mb-8">
          <h2 className="text-xl font-bold text-choco-dark mb-6 flex items-center gap-2">
            <span className="text-2xl">📋</span> 基本情報
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "グランドオープン", value: "2026年3月24日" },
              { label: "開催日", value: "毎週火曜日" },
              { label: "開始時刻", value: "22:00〜" },
              { label: "会場", value: "VRChat内（専用ワールド）" },
              { label: "PC環境", value: "PC (SteamVR) 限定" },
              { label: "対応言語", value: "日本語" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-pink-sweet/10 rounded-[12px] px-4 py-3"
              >
                <span className="text-xs font-bold text-choco-medium min-w-[110px]">
                  {label}
                </span>
                <span className="text-sm font-bold text-choco-dark">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cafe / Bar */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="cafe-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-pink-sweet/40 flex items-center justify-center text-3xl">
                ☕
              </div>
              <div>
                <h2 className="text-lg font-bold text-choco-dark">
                  カフェ営業
                </h2>
                <p className="text-sm text-pink-hot font-bold">
                  第1・3・4 火曜日
                </p>
              </div>
            </div>
            <p className="text-sm text-choco-medium leading-relaxed mb-3">
              「カフェめるぷらむ」として開催。可愛くポップなカフェ空間でほっこりお話し♪スイーツモチーフの世界観をお楽しみください。
            </p>
            <div className="bg-pink-sweet/20 rounded-[12px] p-3 text-xs text-choco-medium font-bold">
              🎀 スイーツ・カフェテーマの可愛い空間
            </div>
          </div>

          <div className="cafe-card" style={{ borderColor: "#D8B4F8" }}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
                style={{ background: "#D8B4F840" }}
              >
                🍸
              </div>
              <div>
                <h2 className="text-lg font-bold text-choco-dark">Bar営業</h2>
                <p className="text-sm font-bold" style={{ color: "#9B59B6" }}>
                  第2・5 火曜日
                </p>
              </div>
            </div>
            <p className="text-sm text-choco-medium leading-relaxed mb-3">
              少しシックで落ち着いたBar空間での開催。ゆったりとした雰囲気の中で会話を楽しみましょう。
            </p>
            <div
              className="rounded-[12px] p-3 text-xs text-choco-medium font-bold"
              style={{ background: "#D8B4F820" }}
            >
              ✨ シックで落ち着いた大人の空間
            </div>
          </div>
        </div>

        {/* Rotation System */}
        <div className="cafe-card mb-8">
          <h2 className="text-xl font-bold text-choco-dark mb-6 flex items-center gap-2">
            <span className="text-2xl">🔄</span> 交流スタイル
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: "👥",
                title: "少人数グループ",
                desc: "キャスト1人にゲスト2名のアットホームな雰囲気で話しやすい！",
              },
              {
                icon: "⏱️",
                title: "15分ローテーション",
                desc: "1ローテ15分×3回転。様々なキャストと交流できます。",
              },
              {
                icon: "💬",
                title: "フリートーク",
                desc: "テーマなし！好きな話題でおしゃべりを楽しめます。",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="text-center bg-pink-sweet/10 rounded-[16px] p-4"
              >
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-bold text-choco-dark text-sm mb-1">
                  {title}
                </h3>
                <p className="text-xs text-choco-medium leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Time Schedule */}
        <div className="cafe-card mb-8">
          <h2 className="text-xl font-bold text-choco-dark mb-6 flex items-center gap-2">
            <span className="text-2xl">🕙</span> 当日のタイムスケジュール
            <span className="text-xs font-normal text-choco-medium bg-pink-sweet/30 px-2 py-1 rounded-full">
              カフェ営業時
            </span>
          </h2>
          <div className="space-y-2">
            {timeSchedule.map(({ time, event, icon, accent }) => (
              <div
                key={time}
                className="flex items-center gap-4 rounded-[12px] p-3"
                style={{ background: `${accent}25` }}
              >
                <span className="text-xl min-w-[28px] text-center">{icon}</span>
                <span
                  className="text-xs font-bold min-w-[105px] shrink-0"
                  style={{ color: "#FF99B8" }}
                >
                  {time}
                </span>
                <span className="text-sm font-bold text-choco-dark">
                  {event}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* World Links */}
        <div className="cafe-card mb-10">
          <h2 className="text-xl font-bold text-choco-dark mb-4 flex items-center gap-2">
            <span className="text-2xl">🌐</span> ワールド情報
          </h2>
          <p className="text-sm text-choco-medium mb-5">
            当日のワールドリンクは公式XまたはVRChatグループからご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://vrchat.com/home/group/grp_0b78cf5a-d558-44f4-b03c-1ce77d703ea9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-pink-sweet/15 hover:bg-pink-sweet/30 transition rounded-[14px] p-4 group"
            >
              <span className="text-2xl">🏠</span>
              <div>
                <p className="font-bold text-choco-dark text-sm group-hover:text-pink-hot transition">
                  VRChat グループ
                </p>
              </div>
            </a>
            <a
              href="https://x.com/melplum_vrc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:bg-lavender-soft/20 transition rounded-[14px] p-4 group"
              style={{ background: "#D8B4F815" }}
            >
              <span className="text-2xl">𝕏</span>
              <div>
                <p className="font-bold text-choco-dark text-sm group-hover:text-pink-hot transition">
                  公式X (@melplum_vrc)
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/rules" className="btn-primary">
            📋 参加ルールを確認する
          </Link>
          <Link href="/cast" className="btn-secondary">
            ✨ キャストを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
