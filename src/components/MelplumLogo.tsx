import Image from "next/image";

export default function MelplumLogo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/assets/icon.jpeg"
      alt="めるぷらむ"
      width={size}
      height={size}
      className="rounded-full object-cover"
    />
  );
}
