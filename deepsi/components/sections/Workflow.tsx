"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sticker } from "@/components/ui/Stickers";
import StepArt from "@/components/sections/StepArt";
import StepRail from "@/components/sections/StepRail";
import { workflow } from "@/data/content";

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 860px)", () => {
        const track = trackRef.current;
        const viewport = viewportRef.current;
        if (!track || !viewport) return;

        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

        const topTween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-step-card]").forEach((card) => {
          gsap.fromTo(
            card,
            { y: 64, opacity: 0, visibility: "hidden" },
            {
              y: 0,
              opacity: 1,
              visibility: "visible",
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                containerAnimation: topTween,
                trigger: card,
                start: "left 92%",
                end: "right 8%",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        });

        gsap.fromTo(
          barRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => "+=" + distance(),
              scrub: true,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="quy-trinh" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        <SectionHeader
          index={3}
          label="Cách một agent ra đời"
          title="Pipeline 5 bước — từ bài toán nghiệp vụ đến agent vận hành."
          desc="Mỗi bước đều kết thúc bằng một sản phẩm kiểm chứng được, không có bước nào 'tin là ổn'."
        />
        <Sticker kind="cog" rot={-9} float="c" className="absolute -top-4 right-6 hidden w-20 lg:block xl:w-24" ariaHidden />
      </div>

      <div ref={viewportRef} className="relative overflow-hidden px-5 pb-16 md:px-8 md:pb-24">
        <div
          ref={trackRef}
          className="flex w-max snap-x gap-5 md:snap-none md:gap-7"
        >
          {workflow.map((step, i) => (
            <article
              key={step.no}
              data-step-card
              className="group relative flex w-[84vw] max-w-[430px] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border hairline bg-surface p-6 shadow-card transition-shadow duration-500 hover:shadow-pop md:w-[30rem] md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[64px] font-medium leading-none tracking-tighter text-accent/60 transition-colors duration-500 group-hover:text-accent/80">
                  {step.no}
                </span>
                <span className="rounded-full border hairline px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                  Bước {i + 1}/5
                </span>
              </div>

              <StepArt index={i} />

              <h3 className="mt-auto pt-4 font-display text-[21px] font-semibold tracking-tight md:text-[23px]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{step.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2 border-t hairline pt-4">
                {step.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-accent-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            </article>
          ))}

          <div className="relative hidden w-[24rem] shrink-0 flex-col justify-center rounded-2xl border hairline bg-paper-deep p-8 md:items-start md:p-10">
            <StepRail />
            <p className="font-display text-[24px] font-semibold leading-snug tracking-tight">
              Bài toán của bạn
              <br />
              là bước 0 của pipeline.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
              Trước 01 luôn là một buổi trao đổi ngắn — để xem bài toán có đáng giải bằng AI Agent hay không.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-7xl px-5 pb-16 md:block md:px-8">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-ink/10">
          <div ref={barRef} className="h-full w-full origin-left scale-x-0 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
