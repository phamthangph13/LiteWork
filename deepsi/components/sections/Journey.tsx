"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sticker } from "@/components/ui/Stickers";
import Reveal from "@/components/motion/Reveal";
import { journey } from "@/data/content";
import clsx from "clsx";

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      if (!path) return;
      const length = path.getTotalLength();

      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-list",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
          onUpdate: (self) => {
            const point = path.getPointAtLength(length * self.progress);
            if (dotRef.current) {
              dotRef.current.style.left = `${(point.x / 600) * 100}%`;
              dotRef.current.style.top = `${point.y}px`;
            }
          },
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="tien-trinh" className="relative overflow-hidden py-24 md:py-32">
      <Sticker kind="rocket" rot={10} float="a" className="absolute right-[10%] top-16 hidden w-20 lg:block xl:w-24" ariaHidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index={6}
          label="Cách làm việc cùng DeepSI"
          title="Tiến trình ba giai đoạn — có thể dừng lại ở bất kỳ mốc nào."
          desc="Không ký hợp đồng màu mè. Mỗi giai đoạn có sản phẩm cụ thể để bạn đánh giá trước khi bước tiếp."
          align="center"
          className="mx-auto items-center"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute inset-x-0 hidden lg:block" aria-hidden>
            <svg viewBox="0 0 600 690" className="mx-auto h-[690px] w-full" fill="none">
              <path
                ref={pathRef}
                d="M300 30C300 30 90 120 90 230C90 340 300 320 300 410C300 500 90 480 90 590"
                stroke="currentColor"
                className="text-hairline"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            ref={dotRef}
            aria-hidden
            className="pointer-events-none absolute z-10 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-pop lg:block"
          >
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/40" />
          </div>

          <div className="journey-list flex flex-col gap-8">
            {journey.map((stage, i) => (
              <Reveal key={stage.stage} variant="scale" delay={i * 0.06}>
                <article
                  className={clsx(
                    "group relative rounded-2xl border hairline bg-surface p-6 shadow-card transition-shadow duration-500 hover:shadow-pop md:p-8",
                    i % 2 === 1 && "lg:ml-40",
                    i === 2 && "lg:ml-20",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                      {stage.stage}
                    </span>
                    <span className="flex gap-1.5" aria-hidden>
                      {Array.from({ length:journey.length }).map((_, d) => (
                        <span
                          key={d}
                          className={clsx(
                            "size-1.5 rounded-full",
                            d <= i ? "bg-accent" : "bg-ink/15",
                          )}
                        />
                      ))}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-[21px] font-semibold tracking-tight md:text-[23px]">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-soft">{stage.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stage.chips.map((chip) => (
                      <span key={chip} className="rounded-full bg-accent-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                        {chip}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
