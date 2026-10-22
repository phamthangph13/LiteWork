"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(1);
  const sx = useSpring(x, { stiffness: 520, damping: 42, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 520, damping: 42, mass: 0.35 });
  const sScale = useSpring(scale, { stiffness: 420, damping: 28 });

  useEffect(() => {
    const fine =
      !window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    let live = false;
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest?.(
        "[data-cursor], a, button, input, select, textarea",
      );
      x.set(e.clientX);
      y.set(e.clientY);
      scale.set(interactive ? 3.1 : 1);
      if (!live) {
        live = true;
        opacity.set(1);
      }
    };
    const onLeave = () => {
      live = false;
      opacity.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y, scale, opacity]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 size-2 rounded-full bg-accent/35 mix-blend-multiply"
      style={{ x: sx, y: sy, scale: sScale, opacity }}
    />
  );
}
