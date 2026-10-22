"use client";

import { useRef } from "react";
import {
  Truck,
  Coins,
  ShoppingCart,
  Factory,
  HeartPulse,
  Building2,
  BookOpen,
  UtensilsCrossed,
  Umbrella,
  ShoppingBag,
  Users,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/motion/Reveal";
import { Sticker } from "@/components/ui/Stickers";
import { industries } from "@/data/content";
import clsx from "clsx";
import type { CSSProperties } from "react";

const icons: Record<string, LucideIcon> = {
  truck: Truck,
  coins: Coins,
  cart: ShoppingCart,
  factory: Factory,
  heartpulse: HeartPulse,
  building: Building2,
  book: BookOpen,
  utensils: UtensilsCrossed,
  umbrella: Umbrella,
  bag: ShoppingBag,
  users: Users,
  megaphone: Megaphone,
};

type Placement = {
  x: string;
  y: string;
  w: string;
  rot: number;
  float: "a" | "b" | "c";
  speed: number;
  accent?: boolean;
};

const placements: Placement[] = [
  { x: "3%", y: "6%", w: "w-40 lg:w-44", rot: -5, float: "b", speed: 26 },
  { x: "26%", y: "10%", w: "w-40 lg:w-44", rot: 3, float: "a", speed: -18 },
  { x: "50%", y: "2%", w: "w-40 lg:w-40", rot: -2, float: "c", speed: 12 },
  { x: "73%", y: "9%", w: "w-40 lg:w-44", rot: 4, float: "b", speed: -24, accent: true },
  { x: "12%", y: "40%", w: "w-40 lg:w-40", rot: 2, float: "c", speed: -14 },
  { x: "37%", y: "36%", w: "w-40 lg:w-48", rot: -4, float: "a", speed: 20, accent: true },
  { x: "63%", y: "40%", w: "w-40 lg:w-40", rot: 3, float: "b", speed: -10 },
  { x: "82%", y: "34%", w: "w-40 lg:w-44", rot: -3, float: "c", speed: 16 },
  { x: "5%", y: "72%", w: "w-40 lg:w-40", rot: 4, float: "a", speed: -20, accent: true },
  { x: "28%", y: "76%", w: "w-40 lg:w-44", rot: -2, float: "b", speed: 10 },
  { x: "53%", y: "70%", w: "w-40 lg:w-40", rot: 3, float: "c", speed: -16 },
  { x: "77%", y: "74%", w: "w-40 lg:w-44", rot: -4, float: "a", speed: 22 },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const items = fieldRef.current?.querySelectorAll<HTMLElement>("[data-speed]");
        items?.forEach((el) => {
          const speed = Number(el.dataset.speed ?? 0);
          gsap.fromTo(
            el,
            { y: -speed },
            {
              y: speed,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="linh-vuc" className="relative overflow-hidden py-24 md:py-36">
      <Sticker kind="compass" rot={-10} float="b" className="absolute right-[8%] top-16 hidden w-20 lg:block xl:w-24" ariaHidden />
      <div className="pattern-net pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_45%,black,transparent)]" aria-hidden />
      <span
        aria-hidden
        className="outline-text-soft pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none whitespace-nowrap font-display text-[19vw] font-bold leading-none tracking-tighter xl:text-[11rem]"
      >
        LĨNH VỰC
      </span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index={5}
          label="Những nơi agent ghé qua"
          title="Mỗi lĩnh vực — một cách làm agent."
          desc="12 lĩnh vực thường gặp. Mỗi thẻ là một ví dụ về bài toán mà agent thường được yêu cầu xử lý — và không có công thức chung: bài toán gì cần khảo sát nấy."
        />
      </div>

      <div
        ref={fieldRef}
        className="field relative mx-auto mt-6 grid max-w-7xl grid-cols-2 gap-5 px-5 md:px-8 lg:mt-10 lg:block lg:h-[640px] lg:gap-0"
        data-cursor
      >
        {industries.map((item, i) => {
          const Icon = icons[item.art] ?? Truck;
          const p = placements[i % placements.length];
          return (
            <Reveal
              key={item.name}
              variant="rise"
              delay={0.04 * (i % 4)}
              y={26}
              className="field-item"
              style={
                {
                  "--fx": p.x,
                  "--fy": p.y,
                } as CSSProperties
              }
            >
              <div data-speed={p.speed} className="lg:will-change-transform">
                <Sticker
                  float={p.float}
                  rot={p.rot}
                  className={p.w}
                >
                  <div
                    className={clsx(
                      "flex h-full flex-col gap-2.5 rounded-[22px] p-4 text-left",
                      p.accent
                        ? "border-2 border-accent-deep bg-accent text-paper shadow-card"
                        : "border-2 border-ink bg-surface text-ink shadow-card",
                    )}
                  >
                    <span
                      className={clsx(
                        "inline-flex size-9 items-center justify-center rounded-xl",
                        p.accent ? "bg-paper/15 text-paper" : "bg-accent-mist text-accent",
                      )}
                    >
                      <Icon size={18} strokeWidth={1.9} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[13px] font-semibold leading-tight tracking-tight">{item.name}</h3>
                      <p className={clsx("mt-1.5 text-[11px] leading-snug", p.accent ? "text-paper/75" : "text-ink-soft")}>
                        {item.note}
                      </p>
                    </div>
                  </div>
                </Sticker>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="relative mx-auto mt-12 flex max-w-7xl items-center gap-3 px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft md:mt-14 md:px-8">
        <span className="h-px w-10 bg-ink/20" aria-hidden />
        {industries.length} lĩnh vực · danh sách mở — nơi khác có bài toán tương tự thì agent vẫn làm được
      </div>
    </section>
  );
}
