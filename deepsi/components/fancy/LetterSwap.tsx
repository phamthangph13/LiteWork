"use client";

import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
  stepMs?: number;
  as?: "span" | "div";
};

export default function LetterSwap({ text, className, stepMs = 22, as = "span" }: Props) {
  const Tag = as;
  const letters = Array.from(text);

  return (
    <Tag
      className={clsx(
        "group/swap inline-flex overflow-hidden align-middle",
        className,
      )}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="relative inline-block h-[1em] w-[0.62em] overflow-hidden"
          style={{ width: ch === " " ? "0.32em" : undefined }}
        >
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.72,0,0.18,1)] group-hover/swap:-translate-y-full"
            style={{ transitionDelay: `${i * stepMs}ms` }}
          >
            <span className="flex h-[1em] items-center justify-center">{ch === " " ? "\u00A0" : ch}</span>
            <span className="flex h-[1em] items-center justify-center">{ch === " " ? "\u00A0" : ch}</span>
          </span>
        </span>
      ))}
    </Tag>
  );
}
