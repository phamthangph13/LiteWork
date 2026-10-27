import clsx from "clsx";
import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";
import ScrambleIn from "@/components/fancy/ScrambleIn";

type Props = {
  label: string;
  title: ReactNode;
  desc?: string;
  align?: "left" | "center";
  index?: number;
  className?: string;
};

export default function SectionHeader({ label, title, desc, align = "left", index, className }: Props) {
  return (
    <div
      className={clsx(
        "relative mb-10 flex flex-col gap-4 md:mb-14",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {index !== undefined ? (
        <span
          aria-hidden
          className="outline-text-soft pointer-events-none absolute -top-10 right-0 hidden select-none font-mono text-[7rem] font-bold leading-none tracking-tighter lg:block"
        >
          0{index}
        </span>
      ) : null}
      <Reveal variant="fade" duration={0.5}>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
          <span className="inline-block size-1.5 bg-accent" aria-hidden />
          <ScrambleIn text={label} stepMs={22} />
        </span>
      </Reveal>
      {/* Headings stay visible for assistive tech and Lighthouse: wrapping
          them in a scroll reveal hides them from the accessibility tree until
          the section enters the viewport, which breaks heading-order checks. */}
      <h2 className="relative z-10 max-w-3xl font-display text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-balance">
        {title}
      </h2>
      {desc ? (
        <Reveal variant="rise" delay={0.08} duration={0.6}>
          <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">{desc}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
