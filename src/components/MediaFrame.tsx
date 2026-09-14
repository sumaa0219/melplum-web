import Image from "next/image";

type MediaFrameProps = {
  type?: "photo" | "video" | "polaroid";
  src?: string;
  alt?: string;
  caption?: string;
  badge?: string;
  /** CSS aspect-ratio value e.g. "16/9", "4/3", "1/1" */
  aspectRatio?: string;
  label?: string;
  className?: string;
};

const phInfo = {
  photo: { icon: "📷", text: "写真" },
  video: { icon: "🎬", text: "動画" },
  polaroid: { icon: "📸", text: "チェキ" },
} as const;

export default function MediaFrame({
  type = "photo",
  src,
  alt = "",
  caption,
  badge,
  aspectRatio = "4/3",
  label,
  className = "",
}: MediaFrameProps) {
  const isEmpty = !src;
  const info = phInfo[type];
  const isPolaroid = type === "polaroid";

  return (
    <div
      className={`relative overflow-hidden group ${
        isPolaroid
          ? "bg-white rounded-sm shadow-xl p-3 pb-10"
          : "bg-white rounded-[20px] border-2 border-pink-sweet/40 shadow-md"
      } ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-2.5 left-2.5 z-20 bg-white/90 backdrop-blur-sm text-choco-dark text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-pink-sweet/20 select-none">
          {badge}
        </div>
      )}

      {/* Video play overlay (only when src is set) */}
      {type === "video" && !isEmpty && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            ▶️
          </div>
        </div>
      )}

      {/* Media area */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
        {isEmpty ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{
              background:
                type === "video"
                  ? "linear-gradient(135deg, #2D1B4E 0%, #4A1942 100%)"
                  : "linear-gradient(135deg, #FFF0F5 0%, #F5F0FF 100%)",
            }}
          >
            {type === "video" ? (
              <>
                <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <span className="text-3xl text-white/60 ml-1">▶</span>
                </div>
                <p className="text-xs font-bold text-white/50">
                  {label ?? info.text}
                </p>
                <p className="text-[10px] text-white/30">準備中...</p>
              </>
            ) : (
              <>
                <span className="text-4xl opacity-20">{info.icon}</span>
                <p className="text-xs font-bold text-choco-medium/50">
                  {label ?? info.text}
                </p>
                <p className="text-[10px] text-choco-medium/30">準備中...</p>
              </>
            )}
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Caption */}
      {(caption || isPolaroid) && (
        <p
          className={`text-center font-bold ${
            isPolaroid
              ? "text-xs text-choco-medium mt-2 leading-tight"
              : "text-sm text-choco-medium py-3 px-4"
          }`}
        >
          {caption ?? label ?? "\u00a0"}
        </p>
      )}
    </div>
  );
}
