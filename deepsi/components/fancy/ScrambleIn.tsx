"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%+*=<>/";

type Props = {
  text: string;
  className?: string;
  stepMs?: number;
  once?: boolean;
};

export default function ScrambleIn({ text, className, stepMs = 34, once = true }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.6, once: false });
  const [output, setOutput] = useState(placeholder(text));

  useEffect(() => {
    let raf = 0;
    let last = 0;
    let revealed = 0;
    const tick = (t: number) => {
      if (t - last >= stepMs) {
        last = t;
        revealed = Math.min(revealed + 1, text.length);
        setOutput(scrambleKeepLeft(text, revealed));
      }
      if (revealed < text.length) raf = requestAnimationFrame(tick);
    };

    if (inView) {
      raf = requestAnimationFrame(tick);
    } else if (!once) {
      raf = requestAnimationFrame(() => setOutput(placeholder(text)));
    }
    return () => cancelAnimationFrame(raf);
  }, [inView, text, stepMs, once]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {output}
    </span>
  );
}

function placeholder(text: string) {
  return Array.from(text)
    .map((ch, i) => {
      if (ch === " " || ch === "\n") return ch;
      return GLYPHS[(i * 7 + 3) % GLYPHS.length];
    })
    .join("");
}

function scrambleKeepLeft(text: string, revealed: number) {
  return Array.from(text)
    .map((ch, i) => {
      if (i < revealed || ch === " " || ch === "\n") return ch;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join("");
}
