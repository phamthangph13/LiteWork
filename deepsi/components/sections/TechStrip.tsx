"use client";

import { Wrench } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { Sticker } from "@/components/ui/Stickers";
import { techLabel } from "@/data/content";

export default function TechStrip() {
  return (
    <section aria-label="Công nghệ thường dùng" className="relative overflow-hidden pb-24 md:pb-32">
      <Sticker kind="db" rot={-9} float="b" className="absolute -top-4 right-[8%] hidden w-16 lg:block xl:w-20" ariaHidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="scale">
          <div className="overflow-hidden rounded-2xl border hairline bg-surface shadow-card">
            <div className="flex flex-col items-center gap-5 px-6 py-8 md:flex-row md:gap-8 md:px-10">
              <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-start">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-mist text-accent">
                  <Wrench size={18} strokeWidth={1.9} aria-hidden />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  Toolbox
                </span>
              </div>
              <p className="max-w-xs text-[13px] leading-relaxed text-ink-soft md:max-w-[230px]">
                {techLabel}
              </p>
              <div className="min-w-0 flex-1 overflow-x-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/tech-strip.svg"
                  alt="Các công nghệ thường dùng: Python, TypeScript, Next.js, Node.js, FastAPI, LangChain, Docker, PostgreSQL và hơn nữa"
                  width={835}
                  height={104}
                  className="h-9 max-w-none md:h-10"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
