"use client";

import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import LetterSwap from "@/components/fancy/LetterSwap";
import TextRotate from "@/components/fancy/TextRotate";
import TextCursorProximity from "@/components/fancy/TextCursorProximity";
import Magnetic from "@/components/fancy/Magnetic";
import { Sticker } from "@/components/ui/Stickers";
import { brand, rotating, heroCaption } from "@/data/content";

const scrollToId = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden">
      <span
        aria-hidden
        className="outline-text-soft pointer-events-none absolute -right-8 bottom-10 select-none font-display text-[24vw] font-bold leading-none tracking-tighter xl:text-[15rem]"
      >
        DEEPSI
      </span>

      <div className="pattern-plus pointer-events-none absolute right-[6%] top-24 h-40 w-40 opacity-70 [mask-image:radial-gradient(closest-side,black,transparent)]" aria-hidden />
      <div className="pattern-dots pointer-events-none absolute left-[2%] bottom-[14%] h-48 w-64 opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]" aria-hidden />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-[16%] hidden w-44 lg:block xl:w-52"
      >
        <Reveal variant="rise" delay={0.35} y={40} className="w-full">
          <div className="relative">
            <Sticker kind="rocket" rot={-6} float="b" className="w-full" />
            <Sticker kind="spark" rot={0} float="c" className="absolute -right-6 -top-6 w-14 xl:w-16" />
          </div>
        </Reveal>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[24%] top-[46%] hidden w-40 lg:block xl:w-44"
      >
        <Reveal variant="rise" delay={0.5} y={40} className="w-full">
          <div className="relative">
            <Sticker kind="bot" rot={6} float="c" />
            <Sticker kind="zap" rot={-10} float="b" className="absolute -left-10 -top-8 w-16 xl:w-20" />
          </div>
        </Reveal>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-[46%] bottom-[16%] hidden w-24 lg:block"
      >
        <Reveal variant="rise" delay={0.6} y={30} className="w-full">
          <Sticker kind="db" rot={-7} float="a" className="w-full" />
        </Reveal>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pb-24 pt-[30svh] md:px-8">
        <Reveal variant="fade" duration={0.5}>
          <p className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-soft">
            <span className="inline-flex items-center gap-2 rounded-full border hairline bg-surface px-3 py-1">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-accent" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              AI Solutions for Business
            </span>
            <span className="hidden items-baseline gap-1 font-mono text-[11px] uppercase tracking-[0.24em] text-ink sm:inline-flex">Chuyên về
              <TextRotate
                items={rotating}
                className="rounded-sm bg-accent-mist px-2 py-0.5 font-medium text-accent"
              />
            </span>
          </p>
        </Reveal>

        <Reveal variant="clip" duration={0.85}>
          <h1 className="relative z-10 max-w-4xl font-display text-[clamp(2.5rem,7vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-balance">
            Biến AI thành{" "}
            <span className="relative inline-block">
              <span className="relative z-10">năng lực</span>
              <svg
                className="absolute -bottom-1 left-0 z-0 w-full text-accent"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
                preserveAspectRatio="none"
              >
                <path d="M2 9C60 3 140 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            vận hành thực tế.
          </h1>
        </Reveal>

        <Reveal variant="rise" delay={0.12} duration={0.7} y={36}>
          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-ink-soft md:text-[17px]">
            {brand.intro}
          </p>
        </Reveal>

        <Reveal variant="rise" delay={0.22} duration={0.7} y={30}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${brand.email}`}
                data-cursor
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[14px] font-medium text-paper transition-shadow hover:shadow-pop"
              >
                <Sticker kind="spark" rot={-14} float="a" inline className="pointer-events-none absolute -left-5 -top-5 w-8" ariaHidden />
                <LetterSwap text={brand.cta} stepMs={18} />
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={() => scrollToId("#quy-trinh")}
              data-cursor
              className="group inline-flex items-center gap-2.5 rounded-full border hairline bg-surface px-6 py-3.5 text-[14px] font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <LetterSwap text={brand.ctaSecondary} stepMs={16} />
              <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal variant="rise" delay={0.3} y={22}>
            <TextCursorProximity
              text={heroCaption}
              className="font-display max-w-md text-[19px] font-medium leading-snug tracking-tight md:text-[21px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
