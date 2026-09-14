import Link from "next/link";
import Image from "next/image";
import { castMembers, type CastMember } from "@/data/cast";

function CastCard({ member }: { member: CastMember }) {
  return (
    <Link
      href={`/cast/${member.id}`}
      className="group block relative overflow-hidden rounded-[16px] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-2 border-white/60"
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden bg-pink-sweet/20">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold"
            style={{ background: `linear-gradient(135deg, ${member.color}, #D8B4F8)` }}
          >
            {member.name.charAt(0)}
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />

        {/* Role badge */}
        {member.role && (
          <span className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full text-white shadow-sm"
            style={{ background: member.generation === 1 ? "#FF99B8CC" : "#9B59B6CC" }}>
            {member.role}
          </span>
        )}

        {/* Name */}
        <div className="absolute inset-x-0 bottom-0 px-3 pb-2.5">
          <p className="text-white font-bold text-sm leading-tight drop-shadow-md truncate">
            {member.name}
          </p>
          <p className="text-white/70 text-[10px] font-medium truncate">{member.twitter}</p>
        </div>
      </div>
    </Link>
  );
}

function GenerationSection({ gen, label }: { gen: 1 | 2; label: string }) {
  const members = castMembers.filter((m) => m.generation === gen);
  const color = gen === 1 ? "#FF99B8" : "#9B59B6";

  return (
    <section className="mb-16">
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${color}60)` }} />
        <div className="flex items-center gap-2.5 px-2">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
            style={{ background: color }}
          >
            {gen}
          </span>
          <h2 className="text-xl font-kiwi font-bold text-choco-dark">{label}</h2>
          <span className="text-sm text-choco-medium/60">({members.length}名)</span>
        </div>
        <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${color}60)` }} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {members.map((m) => (
          <CastCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  );
}

export default function CastPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">✦ Cast ✦</p>
          <h1 className="text-3xl md:text-4xl font-kiwi font-bold text-choco-dark">キャスト紹介</h1>
          <div className="section-divider" />
          <p className="text-choco-medium mt-4 text-sm">
            めるぷらむを彩るキャストたちをご紹介します 🌸
          </p>
        </div>

        <GenerationSection gen={1} label="1期生" />
        <GenerationSection gen={2} label="2期生" />
      </div>
    </div>
  );
}
