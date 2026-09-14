"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MelplumLogo from "./MelplumLogo";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "イベント概要" },
  { href: "/rules", label: "参加ルール" },
  { href: "/cast", label: "キャスト" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/links", label: "リンク" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-pink-sweet/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-sweet to-lavender-soft p-1 shadow-sm">
            <MelplumLogo size={36} />
          </div>
          <div>
            <p className="text-[10px] text-choco-medium font-bold leading-none tracking-wide">
              プラムちゃんCAFE
            </p>
            <p className="text-base font-kiwi font-bold text-choco-dark leading-tight">
              めるぷらむ
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-all ${
                pathname === href
                  ? "bg-pink-sweet text-choco-dark shadow-sm"
                  : "text-choco-medium hover:bg-pink-sweet/40 hover:text-choco-dark"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 rounded-xl hover:bg-pink-sweet/30 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 bg-choco-dark rounded transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-choco-dark rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-choco-dark rounded transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        } bg-white border-t border-pink-sweet/30`}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-6 py-3 font-bold text-sm transition-all ${
                pathname === href
                  ? "bg-pink-sweet/60 text-choco-dark"
                  : "text-choco-medium hover:bg-pink-sweet/20"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
