import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
};

/**
 * Hero logo banner. Replace src with "/assets/logo.png" once the transparent PNG is placed there.
 */
export default function TransparentLogoBanner({
  className = "",
  priority = false,
}: Props) {
  const src = "/assets/rogobanner.jpeg"; // swap to /assets/logo.png after placing transparent PNG
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] ${className}`}
      style={{
        background:
          "linear-gradient(140deg, #FFDCE8 0%, #F0E0FF 45%, #FFE8F5 100%)",
      }}
    >
      {/* Polka-dot texture — shows through transparent areas of the PNG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#FFC4D640 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Subtle inner glow ring */}
      <div className="absolute inset-3 rounded-[18px] border border-white/40 pointer-events-none" />

      {/* Floating corner decorations */}
      <span className="absolute top-3 left-5   text-2xl float-anim   opacity-50 select-none pointer-events-none">
        🍰
      </span>
      <span className="absolute top-4 right-8  text-xl  float-anim-2 opacity-50 select-none pointer-events-none">
        🎀
      </span>
      <span className="absolute bottom-3 left-12 text-xl float-anim-3 opacity-40 select-none pointer-events-none">
        🌸
      </span>
      <span className="absolute bottom-4 right-6 text-2xl float-anim  opacity-40 select-none pointer-events-none">
        ✨
      </span>
      <span className="absolute top-1/2 left-3 -translate-y-1/2 text-lg float-anim-2 opacity-25 select-none pointer-events-none">
        🍓
      </span>
      <span className="absolute top-1/3 right-3 text-lg float-anim-3 opacity-25 select-none pointer-events-none">
        🍮
      </span>
      <span className="absolute bottom-1/3 left-1/4 text-base float-anim opacity-20 select-none pointer-events-none">
        💜
      </span>
      <span className="absolute top-1/4 right-1/4 text-base float-anim-2 opacity-20 select-none pointer-events-none">
        🍪
      </span>

      {/* Logo image — sits above decorations, no blend mode so it displays cleanly */}
      <Image
        src={src}
        alt="めるぷらむ プラムちゃんCAFE"
        width={900}
        height={480}
        className="relative z-10 w-full h-auto"
        priority={priority}
      />
    </div>
  );
}
