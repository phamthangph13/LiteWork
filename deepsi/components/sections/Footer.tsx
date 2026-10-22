"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import LetterSwap from "@/components/fancy/LetterSwap";
import ScrambleHover from "@/components/fancy/ScrambleHover";
import { Sticker } from "@/components/ui/Stickers";
import Logo from "@/components/ui/Logo";
import { brand, navFooter } from "@/data/content";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [year, setYear] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setYear(String(new Date().getFullYear())), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const items = ref.current?.querySelectorAll("[data-foot-rise]");
      items?.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            delay: i * 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none none" },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <footer ref={ref} className="relative z-10 overflow-hidden border-t-2 border-ink bg-paper-deep">
      <div className="pattern-plus pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]" aria-hidden />
      <Sticker kind="bot" rot={-10} float="b" className="absolute right-[4%] top-8 hidden w-24 lg:block xl:w-28" ariaHidden />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-10 pt-14 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5" data-foot-rise>
          <Logo />
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-ink-soft">
            DeepSI cung cấp dịch vụ tư vấn, phát triển và triển khai AI Agent — làm cùng doanh nghiệp để tự động hóa trở thành năng lực vận hành thực tế.
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">{brand.legalNote}</p>
        </div>

        <div className="md:col-span-3" data-foot-rise>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Điều hướng</p>
          <ul className="space-y-2">
            {navFooter.map((item) => (
              <li key={item.href}>
                <a href={item.href} data-cursor className="text-[13px] text-ink transition-colors hover:text-accent">
                  <ScrambleHover>{item.label}</ScrambleHover>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 md:text-right" data-foot-rise>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Trao đổi về giải pháp AI</p>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href={`mailto:${brand.email}`}
              data-cursor
              className="group inline-flex max-w-full items-center gap-2 rounded-full border hairline bg-surface px-5 py-3 text-[13.5px] font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <LetterSwap text={brand.email} stepMs={14} className="font-mono text-[13px]" />
              <ArrowUpRight size={14} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={brand.phoneHref}
              data-cursor
              className="group inline-flex items-center gap-2 rounded-full border hairline bg-surface px-5 py-3 text-[13.5px] font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Phone size={14} aria-hidden />
              <span className="tracking-wide">{brand.phone}</span>
            </a>
            <a
              href={brand.fanpage}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="group inline-flex items-center gap-2 rounded-full border hairline bg-surface px-5 py-3 text-[13.5px] font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden>
                <path d="M10.6 2.5H9.3c-1.5 0-2.4 1-2.4 2.6v1.8H5.4v2.5h1.5v4.1h2.6V9.4h2l.4-2.5H9.5V5.4c0-.4.2-.6.6-.6h1.1z" />
              </svg>
              <span className="tracking-wide">Fanpage trên Facebook</span>
              <ArrowUpRight size={14} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-1 flex items-center gap-2 md:justify-end">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-soft">Chia sẻ</span>
              {[
                {
                  label: "Chia sẻ trên X",
                  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent("DeepSI — Giải pháp AI Agent cho doanh nghiệp")}&url=${encodeURIComponent("https://deepsi.space")}`,
                  glyph: (
                    <svg viewBox="0 0 16 16" className="size-3" fill="currentColor" aria-hidden>
                      <path d="M11.4 2.2h2l-4.4 5 5.2 6.6H9.9l-3-3.9-3.5 3.9H2.2l4.7-5.3L2.3 2.2h4.5l2.7 3.6z" />
                    </svg>
                  ),
                },
                {
                  label: "Chia sẻ qua LinkedIn",
                  href: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fdeepsi.space",
                  glyph: (
                    <svg viewBox="0 0 16 16" className="size-3" fill="currentColor" aria-hidden>
                      <path d="M3.4 6.2h2.2v7H3.4zM4.5 3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM7.3 6.2h2.1v1c.3-.6 1-1.2 2.1-1.2 1.6 0 2.7 1 2.7 3v4.2h-2.2V9.7c0-1-.5-1.6-1.3-1.6-.7 0-1.2.5-1.2 1.5v3.8H7.3z" />
                    </svg>
                  ),
                },
                {
                  label: "Chia sẻ qua Facebook",
                  href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdeepsi.space",
                  glyph: (
                    <svg viewBox="0 0 16 16" className="size-3" fill="currentColor" aria-hidden>
                      <path d="M10.6 2.5H9.3c-1.5 0-2.4 1-2.4 2.6v1.8H5.4v2.5h1.5v4.1h2.6V9.4h2l.4-2.5H9.5V5.4c0-.4.2-.6.6-.6h1.1z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-cursor
                  className="inline-flex size-8 items-center justify-center rounded-full border hairline bg-surface text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  {s.glyph}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t hairline">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-3.5 md:px-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
            © <time dateTime={year ? year : "2026"}>{year || "2026"}</time> DeepSI ·{" "}
            <Link href="/privacy" data-cursor className="transition-colors hover:text-accent">
              Chính sách bảo mật
            </Link>{" "}
            ·{" "}
            <Link href="/terms" data-cursor className="transition-colors hover:text-accent">
              Điều khoản
            </Link>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">{brand.footerLine}</span>
        </div>
      </div>

      <div className="pointer-events-none relative z-0 -mb-4 flex justify-center select-none md:-mb-8" aria-hidden>
        <span className="outline-text-soft font-display text-[18vw] font-bold leading-[0.75] tracking-tighter xl:text-[13rem]">
          DEEPSI
        </span>
      </div>
    </footer>
  );
}
