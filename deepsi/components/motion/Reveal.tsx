"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export type RevealVariant = "rise" | "clip" | "fade" | "scale";

type Props = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  hidden?: boolean;
};

export default function Reveal({
  children,
  variant = "rise",
  delay = 0,
  y,
  duration,
  className,
  style,
  hidden = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !hidden) return;
      const from: gsap.TweenVars =
        variant === "rise"
          ? { y: y ?? 56, opacity: 0, rotate: 0.2 }
          : variant === "clip"
            ? { clipPath: "inset(0% 0% 100% 0%)", y: y ?? 20, opacity: 0 }
            : variant === "scale"
              ? { scale: 0.92, y: y ?? 28, opacity: 0 }
              : { opacity: 0 };

      gsap.set(el, { ...from, visibility: "hidden" });
      gsap.to(el, {
        scale: 1,
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        visibility: "visible",
        delay,
        duration: duration ?? 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: ref, dependencies: [variant, delay, hidden] },
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ visibility: hidden ? "hidden" : "visible", ...style }}
    >
      {children}
    </div>
  );
}
