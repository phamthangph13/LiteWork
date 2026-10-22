"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
  speed?: number;
  showCaret?: boolean;
  onDone?: () => void;
};

export default function Typewriter({ text, className, speed = 18, showCaret = true, onDone }: Props) {
  const [count, setCount] = useState(0);
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!text) return;
    let timer = 0;
    let cancelled = false;

    const start = () => {
      setCount(0);
      step(1);
    };

    const step = (i: number) => {
      if (cancelled) return;
      setCount(Math.min(i, text.length));
      if (i < text.length) {
        const ch = text[i - 1] ?? "";
        const pause = ch === "." || ch === "," ? speed * 6 : speed;
        timer = window.setTimeout(() => step(i + 1), pause);
      } else {
        timer = window.setTimeout(() => doneRef.current?.(), 40);
      }
    };

    timer = window.setTimeout(start, 220);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [text, speed]);

  return (
    <span className={clsx("whitespace-pre-wrap", showCaret && count < text.length && "caret", className)}>
      {text.slice(0, count)}
    </span>
  );
}
