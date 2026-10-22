"use client";

import Marquee from "@/components/fancy/Marquee";
import { marqueeItems } from "@/data/content";

export default function TapeMarquee() {
  return (
    <div className="relative z-10 -my-2 select-none overflow-x-clip py-6" aria-hidden>
      <div className="-mx-6 -rotate-[1.4deg]">
        <div className="border-y-2 border-ink bg-accent py-2.5 text-paper shadow-pop">
          <Marquee
            items={marqueeItems}
            duration="34s"
            itemClassName="font-mono text-[12px] uppercase tracking-[0.18em]"
          />
        </div>
      </div>
      <div className="-mx-6 mt-[-14px] rotate-[0.9deg]">
        <div className="border-y hairline bg-surface py-2.5 text-ink-soft">
          <Marquee
            items={[...marqueeItems].reverse()}
            duration="44s"
            reverse
            itemClassName="font-mono text-[11px] uppercase tracking-[0.18em]"
          />
        </div>
      </div>
    </div>
  );
}
