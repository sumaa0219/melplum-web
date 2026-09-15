"use client";

import { useMemo } from "react";

type EventType = "cafe" | "bar";

/** Returns current date/time in JST (UTC+9). */
function nowJST(): Date {
  const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
  return new Date(utc + 9 * 3600000);
}

/** Returns the next Tuesday (or today if it's Tuesday before 22:00 JST). */
function getNextTuesdayJST(): Date {
  const now = nowJST();
  const dayOfWeek = now.getDay(); // 0=Sun … 2=Tue
  const daysUntil = (2 - dayOfWeek + 7) % 7;

  if (daysUntil === 0) {
    // Today is Tuesday; if event hasn't started yet (< 22:00) use today
    if (now.getHours() < 22) return now;
    // After 22:00 → next week
    const d = new Date(now);
    d.setDate(d.getDate() + 7);
    return d;
  }

  const d = new Date(now);
  d.setDate(d.getDate() + daysUntil);
  return d;
}

/** nth Tuesday of its month (1-indexed). */
function nthTuesdayOfMonth(date: Date): number {
  let count = 0;
  const probe = new Date(date.getFullYear(), date.getMonth(), 1);
  while (probe.getDate() <= date.getDate()) {
    if (probe.getDay() === 2) count++;
    probe.setDate(probe.getDate() + 1);
  }
  return count;
}

function getEventType(date: Date): EventType {
  const nth = nthTuesdayOfMonth(date);
  return nth === 2 || nth === 5 ? "bar" : "cafe";
}

const MONTHS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const DAYS = ["日", "月", "火", "水", "木", "金", "土"];

export default function NextEventBanner() {
  const { type, label, isToday } = useMemo(() => {
    const now = nowJST();
    const next = getNextTuesdayJST();
    const type = getEventType(next);
    const isTodayFlag =
      next.getFullYear() === now.getFullYear() &&
      next.getMonth() === now.getMonth() &&
      next.getDate() === now.getDate();

    const m = MONTHS[next.getMonth()];
    const d = next.getDate();
    const dow = DAYS[next.getDay()];
    const label = isTodayFlag ? `今夜（${m}/${d}・${dow}）` : `${m}/${d}（${dow}）`;
    return { type, label, isToday: isTodayFlag };
  }, []);

  const isCafe = type === "cafe";

  return (
    <div
      className="relative w-full max-w-md mx-auto mb-8 rounded-[24px] overflow-hidden shadow-xl"
      style={{
        background: isCafe
          ? "linear-gradient(135deg, #FFE4EF 0%, #FFF0F5 60%, #FFD4E8 100%)"
          : "linear-gradient(135deg, #EDE0FF 0%, #F5F0FF 60%, #D8B4F8 100%)",
        border: `2px solid ${isCafe ? "#FF99B8" : "#B07DE8"}`,
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20"
        style={{ background: isCafe ? "#FF99B8" : "#9B59B6" }}
      />
      <div
        className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-15"
        style={{ background: isCafe ? "#FFB3CC" : "#C084FC" }}
      />

      <div className="relative z-10 px-6 py-5 text-center">
        <p className="text-[11px] font-bold tracking-widest uppercase mb-1"
          style={{ color: isCafe ? "#FF5599" : "#7C3AED" }}>
          ✦ Next Event ✦
        </p>

        <p className="text-sm font-bold text-choco-medium mb-2">
          {isToday ? "今夜開催！" : "次の火曜日は"}
        </p>

        {/* Date */}
        <p className="text-2xl font-kiwi font-bold mb-3"
          style={{ color: isCafe ? "#CC3366" : "#6B21A8" }}>
          {label}
        </p>

        {/* Main badge */}
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-[16px] shadow-md"
          style={{
            background: isCafe ? "#FF5599" : "#7C3AED",
          }}
        >
          <span className="text-3xl">{isCafe ? "☕" : "🍸"}</span>
          <span className="text-xl md:text-2xl font-kiwi font-bold text-white tracking-wide">
            {isCafe ? "カフェ" : "バー"}
          </span>
          <span className="text-3xl">{isCafe ? "☕" : "🍸"}</span>
        </div>

        <p className="text-xs text-choco-medium mt-3 font-medium">
          22:00〜 VRChat
        </p>
      </div>
    </div>
  );
}
