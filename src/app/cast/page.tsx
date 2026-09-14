"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { castMembers, type CastMember } from "@/data/cast";

function CastCard({ member }: { member: CastMember }) {
  const initial = member.name.charAt(0);

  return (
    <div className="bg-white rounded-[20px] border-2 border-pink-sweet/40 shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <div
          className="h-1.5 w-full"
          style={{
            background:
              member.generation === 1
                ? "linear-gradient(to right, #FF99B8, #FFC4D6)"
                : "linear-gradient(to right, #D8B4F8, #C084FC)",
          }}
        />
        <div className="flex justify-center pt-4 pb-2 px-4 relative">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-white text-3xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${member.color}, #D8B4F8)`,
                }}
              >
                {initial}
              </div>
            )}
          </div>
          <span
            className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
            style={{
              background: member.generation === 1 ? "#FF99B8" : "#9B59B6",
            }}
          >
            {member.generation}期生
          </span>
        </div>
      </div>

      <div className="px-4 pb-2 text-center flex flex-col gap-1">
        <h3 className="font-bold text-choco-dark text-sm leading-tight">
          {member.name}
        </h3>
        {member.role && (
          <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-sweet/40 text-choco-dark mx-auto">
            {member.role}
          </span>
        )}
        <a
          href={`https://x.com/${member.twitter.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-lavender-soft hover:text-pink-hot transition font-bold"
        >
          {member.twitter}
        </a>
        <p className="text-[11px] text-choco-medium/70 leading-relaxed line-clamp-3">
          💬 {member.message}
        </p>
        <details className="text-left mt-1">
          <summary className="text-[10px] text-choco-medium/50 cursor-pointer hover:text-pink-hot transition select-none">
            ♡ 好きなこと
          </summary>
          <p className="text-[10px] text-choco-medium/70 mt-1 pl-2 border-l-2 border-pink-sweet/40 leading-relaxed">
            {member.likes}
          </p>
        </details>
      </div>
    </div>
  );
}

type GenFilter = "all" | 1 | 2;

export default function CastPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"default" | "asc">("default");
  const [gen, setGen] = useState<GenFilter>("all");

  const displayed = useMemo(() => {
    let result = castMembers.filter((c) => {
      const q = search.toLowerCase();
      const matchText =
        c.name.toLowerCase().includes(q) || c.twitter.toLowerCase().includes(q);
      const matchGen = gen === "all" || c.generation === gen;
      return matchText && matchGen;
    });
    if (sort === "asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, "ja"));
    }
    return result;
  }, [search, sort, gen]);

  const gen1Count = castMembers.filter((c) => c.generation === 1).length;
  const gen2Count = castMembers.filter((c) => c.generation === 2).length;

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs text-pink-hot font-bold tracking-widest uppercase mb-1">
            ✦ Cast ✦
          </p>
          <h1 className="text-3xl md:text-4xl font-kiwi font-bold text-choco-dark">
            キャスト紹介
          </h1>
          <div className="section-divider" />
          <p className="text-choco-medium mt-4">
            めるぷらむを彩るキャストたちをご紹介します 🌸
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[
            {
              id: "all" as const,
              label: `全員 (${castMembers.length}名)`,
              icon: "🌸",
            },
            { id: 1 as const, label: `1期生 (${gen1Count}名)`, icon: "☕" },
            { id: 2 as const, label: `2期生 (${gen2Count}名)`, icon: "🍸" },
          ].map(({ id, label, icon }) => (
            <button
              key={String(id)}
              onClick={() => setGen(id)}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                gen === id
                  ? "bg-gradient-to-r from-pink-hot to-lavender-soft text-white shadow-md"
                  : "bg-white border-2 border-pink-sweet/50 text-choco-medium hover:border-pink-hot"
              }`}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4 max-w-lg mx-auto">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-sweet text-sm">
              🔍
            </span>
            <input
              type="search"
              placeholder="名前・アカウントで検索..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full border-2 border-pink-sweet bg-white text-choco-dark placeholder:text-pink-sweet/70 text-sm outline-none focus:border-pink-hot transition"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "default" | "asc")}
            className="px-4 py-2.5 rounded-full border-2 border-pink-sweet bg-white text-choco-dark text-sm outline-none focus:border-pink-hot transition font-bold"
          >
            <option value="default">登録順</option>
            <option value="asc">五十音順</option>
          </select>
        </div>

        <p className="text-center text-sm text-choco-medium mb-8">
          {displayed.length} 名のキャストが見つかりました
        </p>

        {displayed.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {displayed.map((c) => (
              <CastCard key={c.id} member={c} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-choco-medium">
              「{search}」に一致するキャストは見つかりませんでした
            </p>
            <button
              onClick={() => {
                setSearch("");
                setGen("all");
              }}
              className="btn-secondary mt-4 text-sm"
            >
              リセット
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
