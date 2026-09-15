import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { castMembers, getCroppedImage } from "@/data/cast";
import type { Metadata } from "next";

export function generateStaticParams() {
  return castMembers.map((m) => ({ id: String(m.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const member = castMembers.find((m) => m.id === Number(id));
  if (!member) return { title: "キャスト | めるぷらむ" };
  return { title: `${member.name} | めるぷらむ キャスト` };
}

export default async function CastMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const memberFound = castMembers.find((m) => m.id === Number(id));
  if (!memberFound) notFound();
  const member = memberFound!;

  const genColor = member.generation === 1 ? "#FF99B8" : "#9B59B6";
  const genBg =
    member.generation === 1
      ? "linear-gradient(135deg, #FFF0F5, #FFE4EF)"
      : "linear-gradient(135deg, #F5F0FF, #EDE0FF)";

  const prev = castMembers.find((m) => m.id === member.id - 1);
  const next = castMembers.find((m) => m.id === member.id + 1);
  const croppedSrc = getCroppedImage(member);

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/cast"
          className="inline-flex items-center gap-2 text-sm text-choco-medium hover:text-pink-hot transition font-bold mb-8"
        >
          &larr; キャスト一覧に戻る
        </Link>

        <div className="bg-white rounded-[24px] overflow-hidden shadow-xl border-2 border-pink-sweet/30">
          {/* Wide hero — original image */}
          <div className="relative w-full aspect-video bg-pink-sweet/10 overflow-hidden">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-center"
                priority
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${member.color}, #D8B4F8)`,
                }}
              >
                {member.name.charAt(0)}
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            {/* Avatar + name row */}
            <div className="flex items-end gap-5 mb-4 -mt-16 relative z-10">
              {/* Circular face-cropped avatar */}
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${member.color}, #D8B4F8)`,
                }}
              >
                {croppedSrc ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={croppedSrc}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <span className="flex items-center justify-center w-full h-full text-white text-3xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="pb-1">
                <div className="flex flex-wrap gap-2 mb-1">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm"
                    style={{ background: genColor }}
                  >
                    {member.generation}期生
                  </span>
                  {member.role && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-sweet/50 text-choco-dark">
                      {member.role}
                    </span>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-kiwi font-bold text-choco-dark leading-tight">
                  {member.name}
                </h1>
              </div>
            </div>

            <a
              href={`https://x.com/${member.twitter.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lavender-soft hover:text-pink-hot transition font-bold text-sm mb-6"
            >
              𝕏 {member.twitter}
            </a>

            <div
              className="rounded-[16px] p-5 mb-6 relative"
              style={{ background: genBg }}
            >
              <span
                className="absolute -top-3 left-5 text-3xl font-serif leading-none opacity-30"
                style={{ color: genColor }}
              >
                &ldquo;
              </span>
              <p className="text-choco-dark font-bold leading-relaxed text-sm md:text-base pl-2">
                {member.message}
              </p>
              <span
                className="absolute -bottom-4 right-5 text-3xl font-serif leading-none opacity-30"
                style={{ color: genColor }}
              >
                &rdquo;
              </span>
            </div>

            <div className="rounded-[16px] border-2 border-pink-sweet/30 p-4 mb-6">
              <p className="text-xs font-bold text-choco-medium mb-2">
                ♡ 好きなこと・もの
              </p>
              <p className="text-sm text-choco-dark leading-relaxed">
                {member.likes}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://x.com/${member.twitter.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                𝕏 {member.twitter} をフォロー
              </a>
              <Link href="/cast" className="btn-secondary text-sm">
                キャスト一覧
              </Link>
            </div>
          </div>
        </div>

        {(prev || next) && (
          <div className="flex justify-between mt-8 gap-4">
            <div>
              {prev && (
                <Link
                  href={`/cast/${prev.id}`}
                  className="flex items-center gap-2 text-sm text-choco-medium hover:text-pink-hot transition font-bold"
                >
                  &larr; {prev.name}
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link
                  href={`/cast/${next.id}`}
                  className="flex items-center gap-2 text-sm text-choco-medium hover:text-pink-hot transition font-bold"
                >
                  {next.name} &rarr;
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
