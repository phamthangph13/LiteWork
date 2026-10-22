"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
  maxScale?: number;
};

export default function TextCursorProximity({ text, className, maxScale = 1.45 }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lettersNode = Array.from(el.children) as HTMLElement[];
    if (!lettersNode.length) return;

    let frame = 0;
    let lastX = 0;
    let lastY = 0;

    const measure = () => {
      frame = 0;
      for (const span of lettersNode) {
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(lastX - cx, lastY - cy);
        const radius = 130;
        const t = Math.max(0, 1 - dist / radius);
        const eased = t * t * (3 - 2 * t);
        span.style.transform = `scale(${1 + (maxScale - 1) * eased})`;
        span.style.fontWeight = `${400 + eased * 350}`;
      }
    };

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!frame) frame = requestAnimationFrame(measure);
    };

    const onLeave = () => {
      for (const span of lettersNode) {
        span.style.transform = "scale(1)";
        span.style.fontWeight = "400";
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [text, maxScale]);

  return (
    <p ref={ref} className={clsx("flex flex-wrap", className)} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className="inline-block transition-[transform,font-weight] duration-150 ease-out will-change-transform"
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </p>
  );
}
