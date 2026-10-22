"use client";

import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Marquee from "@/components/fancy/Marquee";
import { Sticker } from "@/components/ui/Stickers";
import { partners, partnersNote } from "@/data/content";

export default function Partners() {
  const cards = partners.map((p) => (
    <a
      key={p.name}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor
      className="group flex w-60 shrink-0 items-center gap-4 rounded-2xl border-2 border-ink bg-surface px-4 py-3.5 shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-pop"
    >
      <span
        className={
          p.tint
            ? "flex size-11 shrink-0 items-center justify-center rounded-xl bg-paper-deep p-2"
            : "flex size-11 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-ink/5"
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.logo}
          alt={`${p.name} — đối tác của DeepSI`}
          width={44}
          height={44}
          draggable={false}
          className={p.tint ? "size-8" : "h-8 w-auto max-w-10 object-contain"}
        />
      </span>
      <span className="font-display text-[16.5px] font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
        {p.name}
      </span>
    </a>
  ));

  return (
    <section id="doi-tac" className="relative overflow-hidden py-24 md:py-32">
      <div className="pattern-net pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_55%_at_50%_10%,black,transparent)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="rise" y={24}>
          <SectionHeader
            index={2}
            align="center"
            label="Đối tác"
            title="Người đồng hành thật, làm việc thật."
            desc={partnersNote}
            className="items-center"
          />
        </Reveal>

        <div className="relative mx-auto mt-4 max-w-6xl">
          <div aria-hidden className="absolute -top-8 left-1/2 z-20 -translate-x-1/2">
            <Sticker kind="link" rot={-8} float="b" className="w-16" ariaHidden />
          </div>

          <div className="relative overflow-x-clip">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent" aria-hidden />
            <Marquee items={cards} duration="28s" plain itemClassName="pr-5 pt-1 pb-1" separator={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
