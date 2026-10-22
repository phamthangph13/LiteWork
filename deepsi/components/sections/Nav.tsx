"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { Sticker } from "@/components/ui/Stickers";
import LetterSwap from "@/components/fancy/LetterSwap";
import ScrambleHover from "@/components/fancy/ScrambleHover";
import { nav, brand } from "@/data/content";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="transition-opacity hover:opacity-70" data-cursor>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Chính">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent"
            >
              <ScrambleHover>{item.label}</ScrambleHover>
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${brand.email}`}
          data-cursor
          className="group relative inline-flex items-center gap-2 rounded-full border hairline bg-surface px-4 py-2 text-[13px] font-medium transition-all hover:bg-accent hover:text-paper hover:shadow-pop"
        >
          <Sticker kind="zap" rot={14} float="a" inline className="pointer-events-none absolute -right-3.5 -top-4 w-7" ariaHidden />
          <LetterSwap text={brand.cta} stepMs={16} />
          <ArrowUpRight size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
