"use client";

import { useRef, useState } from "react";
import clsx from "clsx";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>+*";

type Props = {
  children: string;
  className?: string;
  stepMs?: number;
};

export default function ScrambleHover({ children, className, stepMs = 30 }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(children);
  const runningRef = useRef(false);

  const run = () => {
    if (runningRef.current) return;
    runningRef.current = true;
    for (let i = 0; i <= children.length; i++) {
      window.setTimeout(() => {
        setDisplay(
          Array.from(children)
            .map((ch, j) => {
              if (j < i || ch === " ") return ch;
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join(""),
        );
        if (i === children.length) runningRef.current = false;
      }, i * stepMs);
    }
  };

  return (
    <span
      ref={spanRef}
      onMouseEnter={run}
      className={clsx("inline-block", className)}
    >
      {display}
    </span>
  );
}
