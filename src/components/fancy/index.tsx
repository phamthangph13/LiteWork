"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValue, useSpring } from "motion/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EASE = "power3.out";

/* ------------------------------------------------------------------ */
/*  Reveal — fade + rise on scroll                                     */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  y = 42,
  delay = 0,
  duration = 0.9,
  className = "",
  once = true,
}: {
  children: ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            ease: EASE,
            scrollTrigger: { trigger: el, start: "top 88%", once },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger — reveal children in sequence                              */
/* ------------------------------------------------------------------ */

export function Stagger({
  children,
  className = "",
  stagger = 0.09,
  y = 36,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = ref.current?.querySelectorAll("[data-stagger-item]");
      if (!items?.length) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          items,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger,
            ease: EASE,
            scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div data-stagger-item className={className}>
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/*  SplitText — vertical cut reveal per character                     */
/* ------------------------------------------------------------------ */

export function SplitText({
  text,
  className = "",
  charClassName = "",
  stagger = 0.022,
  delay = 0,
}: {
  text: string;
  className?: string;
  charClassName?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const chars = ref.current?.querySelectorAll("[data-char]");
      if (!chars?.length) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          chars,
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 1,
            delay,
            stagger,
            ease: "expo.out",
            scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span data-char className={`inline-block ${charClassName}`}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  ScrambleText — characters resolve when scrolled into view          */
/* ------------------------------------------------------------------ */

export function ScrambleText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*&%";
        const proxy = { i: 0 };
        const state = { text: "" };
        const build = () => {
          let out = "";
          for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") out += " ";
            else if (i < proxy.i) out += text[i];
            else out += chars[Math.floor(Math.random() * chars.length)];
          }
          state.text = out;
          el.textContent = state.text;
        };
        build();
        const tween = gsap.to(proxy, {
          i: text.length,
          duration: 1.1,
          delay,
          ease: "none",
          onUpdate: build,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
        return () => tween.kill();
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Counter — number ticker                                           */
/* ------------------------------------------------------------------ */

export function Counter({
  value,
  decimals,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const digits = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const proxy = { v: 0 };
        gsap.to(proxy, {
          v: value,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${proxy.v.toFixed(digits)}${suffix}`;
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(digits)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Parallax — translate on scroll                                     */
/* ------------------------------------------------------------------ */

export function Parallax({
  children,
  className = "",
  distance = 70,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { y: -distance },
          {
            y: distance,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Magnetic — cursor attracted button                                 */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  className = "",
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 160, damping: 16, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className={className}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee — seamless infinite ribbon                                */
/* ------------------------------------------------------------------ */

export function Marquee({
  children,
  className = "",
  speed = 42,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const distance = el.scrollWidth / 2;
        const tween = gsap.to(el, {
          x: reverse ? distance : -distance,
          duration: distance / speed,
          ease: "none",
          repeat: -1,
        });
        return () => tween.kill();
      });
      return () => mm.revert();
    },
    { scope: wrap },
  );

  return (
    <div ref={wrap} className={`overflow-hidden ${className}`}>
      <div ref={track} className="flex w-max items-center gap-10">
        <div className="flex items-center gap-10">{children}</div>
        <div className="flex items-center gap-10" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Float — continuous levitation                                      */
/* ------------------------------------------------------------------ */

export function Float({
  children,
  className = "",
  amplitude = 10,
  duration = 4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.to(el, {
          y: amplitude,
          duration,
          delay,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        return () => tween.kill();
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  StickyStack — cards stack while scrolling                          */
/* ------------------------------------------------------------------ */

export function StickyStack({
  items,
  className = "",
}: {
  items: { title: string; body: string; meta?: string; image?: string }[];
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = wrap.current?.querySelectorAll("[data-stack-card]");
      if (!cards?.length) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        cards.forEach((card, i) => {
          gsap.to(card, {
            scale: 1 - (cards.length - 1 - i) * 0.035,
            opacity: 1 - (cards.length - 1 - i) * 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=120",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: wrap },
  );

  return (
    <div ref={wrap} className={className}>
      {items.map((it, i) => (
        <div
          key={it.title}
          data-stack-card
          className="sticky top-24 mb-6 overflow-hidden rounded-[28px] border border-line bg-surface shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
          style={{ zIndex: i + 1 }}
        >
          {it.image && (
            <div className="relative h-52 w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
            </div>
          )}
          <div className="p-8">
            {it.meta && (
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
                {it.meta}
              </p>
            )}
            <h3 className="mt-2 font-display text-[1.4rem] font-bold leading-snug">{it.title}</h3>
            <p className="mt-2 max-w-xl text-[0.9rem] leading-relaxed text-muted">{it.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CursorGlow — soft cursor halo                                     */
/* ------------------------------------------------------------------ */

export function CursorGlow({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed z-50 hidden h-40 w-40 rounded-full border border-accent/40 transition-opacity duration-300 md:block ${visible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ transform: `translate3d(${pos.x - 80}px, ${pos.y - 80}px, 0)` }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  LineDraw — SVG line drawing on scroll                              */
/* ------------------------------------------------------------------ */

export function LineDraw({
  className = "",
  points = "0,60 200,20 400,70 600,30 800,60",
  viewBox = "0 0 800 80",
}: {
  className?: string;
  points?: string;
  viewBox?: string;
}) {
  const ref = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const path = ref.current;
      if (!path) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const len = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut",
            scrollTrigger: { trigger: path, start: "top 88%", once: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <svg viewBox={viewBox} className={className} fill="none" aria-hidden="true">
      <path ref={ref} d={`M ${points}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Tilt — 3D tilt on pointer                                         */
/* ------------------------------------------------------------------ */

export function Tilt({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 140, damping: 18 });

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        ry.set(px * max * 2);
        rx.set(-py * max * 2);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  useIsomorphicLayout (helper)                                       */
/* ------------------------------------------------------------------ */

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
