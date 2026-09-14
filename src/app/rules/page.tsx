import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "参加ルール・ガイド | めるぷらむ",
};

const rules = [
  {
    icon: "🗣️",
    title: "日本語話者限定",
    desc: "このイベントは日本語でのコミュニケーションを基本としています。",
    note: "This event is for Japanese speakers only.",
    bg: "#FFF0F5",
  },
  {
    icon: "💻",
    title: "PC版限定",
    desc: "PC（SteamVR）環境のみ対応です。",
    note: "Quest単体・スタンドアロン環境はご参加いただけません。",
    bg: "#F0F5FF",
  },
  {
    icon: "📦",
    title: "アバター容量 50MB未満",
    desc: "アバターの容量は50MB未満に設定してください。",
    note: "容量が超過している場合はご参加いただけません。",
    bg: "#F0FFF5",
  },
  {
    icon: "🚫",
    title: "版権・ギミック禁止",
    desc: "版権キャラクターのアバターはNGです。アバターギミックの使用も禁止です。",
    note: "ポーズシステム等の便利系ツールは使用可能です。",
    bg: "#FFF5F0",
  },
  {
    icon: "🤝",
    title: "フレンド申請はイベント外で",
    desc: "イベント中のフレンド申請はご遠慮ください。",
    note: "イベント終了後のアフターワールドにてお願いします。",
    bg: "#FFF0F5",
  },
  {
    icon: "📸",
    title: "撮影ルール",
    desc: "各ローテーション内の写真撮影・集合写真以外でのフライングカメラは禁止です。",
    note: "写真タイムのタイミングをお待ちください。",
    bg: "#F0F5FF",
  },
  {
    icon: "🎥",
    title: "動画・配信禁止",
    desc: "配信・動画撮影はイベント中を通じて禁止です。",
    note: "事前承認制。希望の方は公式XのDMよりお問い合わせください。",
    bg: "#FFF8F0",
  },
  {
    icon: "⚖️",
    title: "公序良俗の遵守",
    desc: "マナーを守り、みんなが楽しめる空間を一緒に作りましょう。",
    note: "不快な言動や行為はお控えください。",
    bg: "#F5F0FF",
  },
];

const faqs = [
  {
    q: "プラムちゃんアバター以外でも参加できますか？",
    a: "プラムちゃんアバター以外でもご参加いただけます。ただし版権キャラクターのアバター・容量50MB以上のアバターはご遠慮ください。",
  },
  {
    q: "チェキ（写真撮影）のタイミングはいつですか？",
    a: "注文後すぐが撮影タイミングです。オムライス等の注文の場合はスムーズに進みます。各ローテーション中に担当キャストにお声がけください。",
  },
  {
    q: "ローテーション最後の写真タイムはどんな形式ですか？",
    a: "そのローテーションで一緒だったキャスト＆ゲスト全員で集合写真を撮影します。素敵な思い出になりますよ🌸",
  },
  {
    q: "VRChat初心者でも参加できますか？",
    a: "もちろんです！VRChat初心者の方も大歓迎です。不安な点があればキャストが丁寧にサポートしますので、気軽にご参加ください。",
  },
  {
    q: "グループへの参加方法を教えてください。",
    a: "「リンク」ページのVRChatグループリンクからグループページにアクセスし、参加してください。",
  },
];

export default function RulesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
            ✦ Rules & Guide ✦
          </p>
          <h1 className="text-3xl md:text-4xl font-kiwi font-bold text-choco-dark">
            参加ルール・ガイド
          </h1>
          <div className="section-divider" />
          <p className="text-choco-medium mt-4">
            みんなが楽しく過ごせるよう、ルールをご確認ください 🎀
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {rules.map(({ icon, title, desc, note, bg }) => (
            <div
              key={title}
              className="rounded-[20px] p-5 border-2 transition-all hover:shadow-md"
              style={{ backgroundColor: bg, borderColor: "#FFC4D640" }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-0.5 shrink-0">{icon}</span>
                <div>
                  <h3 className="font-bold text-choco-dark mb-1 text-sm">
                    {title}
                  </h3>
                  <p className="text-sm text-choco-dark mb-2 leading-relaxed">
                    {desc}
                  </p>
                  <p className="text-xs text-choco-medium/80 italic leading-relaxed">
                    {note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="cafe-card mb-10">
          <h2 className="text-xl font-bold text-choco-dark mb-6 flex items-center gap-2">
            <span className="text-2xl">❓</span> よくある質問（Q&A）
          </h2>
          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="border-b border-pink-sweet/30 pb-5 last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-pink-hot flex items-center justify-center text-white font-bold text-xs shrink-0">
                    Q
                  </span>
                  <p className="font-bold text-choco-dark text-sm pt-0.5">
                    {q}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-lavender-soft flex items-center justify-center text-white font-bold text-xs shrink-0">
                    A
                  </span>
                  <p className="text-sm text-choco-medium leading-relaxed pt-0.5">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Notice */}
        <div
          className="rounded-[20px] p-6 mb-10 text-center border-2 border-dashed border-pink-hot/40"
          style={{ background: "linear-gradient(135deg, #FFF0F5, #F5F0FF)" }}
        >
          <p className="text-choco-dark font-bold mb-2">
            ⚠️ ルールに関するご質問・ご不明点
          </p>
          <p className="text-sm text-choco-medium mb-4">
            公式X (<span className="font-bold">@melplum_vrc</span>)
            のDMまでお気軽にお問い合わせください。
          </p>
          <a
            href="https://x.com/melplum_vrc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            𝕏 公式XへDMする
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="btn-secondary">
            📅 イベント概要を見る
          </Link>
          <Link href="/cast" className="btn-primary">
            ✨ キャストを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
