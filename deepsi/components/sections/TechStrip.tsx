"use client";

import { Wrench, Server } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";
import { Sticker } from "@/components/ui/Stickers";
import {
  techToolbox,
  techInfra,
  techToolboxLabel,
  techInfraLabel,
  type TechIcon,
} from "@/data/content";

function Group({
  label,
  desc,
  items,
  icon,
}: {
  label: string;
  desc: string;
  items: TechIcon[];
  icon: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
      <div className="flex items-center gap-3 md:w-[240px] md:shrink-0 md:flex-col md:items-start md:gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-mist text-accent">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
            {label}
          </div>
          <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-ink-soft">{desc}</p>
        </div>
      </div>
      <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-x-6 gap-y-4 md:gap-x-7 md:gap-y-5">
        {items.map((t) => (
          <li key={t.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/tech-icons/${t.id}.svg`}
              alt={t.name}
              title={t.name}
              width={32}
              height={32}
              loading="lazy"
              className="h-7 w-7 opacity-80 transition duration-300 hover:-translate-y-1 hover:opacity-100 md:h-8 md:w-8"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStrip() {
  return (
    <section
      aria-label="Công nghệ và hạ tầng thường dùng"
      className="relative overflow-hidden pb-24 md:pb-32"
    >
      <Sticker
        kind="db"
        rot={-9}
        float="b"
        className="absolute -top-4 right-[8%] hidden w-16 lg:block xl:w-20"
        ariaHidden
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="scale">
          <div className="flex flex-col gap-10 md:gap-12">
            <Group
              label="Toolbox"
              desc={techToolboxLabel}
              items={techToolbox}
              icon={<Wrench size={18} strokeWidth={1.9} aria-hidden />}
            />
            <div className="h-px w-full bg-hairline" aria-hidden />
            <Group
              label="Hạ tầng"
              desc={techInfraLabel}
              items={techInfra}
              icon={<Server size={18} strokeWidth={1.9} aria-hidden />}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
