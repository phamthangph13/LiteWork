---
name: fancy-components
description: Ready-to-use playful UI components and microinteractions built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion). Use when building animated text, 3D cards, cursor proximity, physics simulations with Matter.js, particle/pixel trails, or interactive web experiences.
---

# Fancy Components Skill

A comprehensive guide and reference for integrating and building **Fancy Components** — a collection of playful, copy-and-paste microinteractions and UI components inspired by award-winning websites.

Tech stack: **React**, **TypeScript**, **Tailwind CSS**, and **Motion** (`motion/react`, formerly Framer Motion), with optional **Matter.js** for physics.

---

## 1. Installation & Setup

### Core Dependencies
```bash
npm install tailwindcss@latest motion
# Or if using pnpm / yarn / bun
pnpm add tailwindcss@latest motion
```

For physics-based components (`gravity`, `cursor-attractor-and-gravity`, `elastic-line`):
```bash
npm install matter-js
npm install -D @types/matter-js
```

### Shadcn CLI Integration (Recommended)
Fancy Components integrates seamlessly with shadcn's registry system.

In `components.json`, add the `@fancy` registry:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "neutral"
  },
  "registries": {
    "@fancy": "https://fancycomponents.dev/r/{name}.json"
  }
}
```

Add components with a single command:
```bash
npx shadcn add @fancy/letter-swap
npx shadcn add @fancy/vertical-cut-reveal
npx shadcn add @fancy/pixel-trail
npx shadcn add @fancy/gravity
npx shadcn add @fancy/box-carousel
```

---

## 2. Component Catalog by Category

### A. Animated Text & Typography

| Component | Description | Best For |
|---|---|---|
| `vertical-cut-reveal` | Text slides up from a masked horizontal cut line with staggered characters. | Hero headlines, titles, section headers |
| `letter-swap` | Letters flip vertically on hover (top to bottom). | Navigation items, call-to-actions, buttons |
| `letter-3d-swap` | 3D cube rotation effect per letter on hover. | Bold interactive titles, logo accents |
| `random-letter-swap` | Randomly scrambles and replaces letters vertically on hover. | Playful links, interactive badges |
| `scramble-hover` | Scrambles characters into random ASCII symbols on hover before settling. | Cyberpunk / tech aesthetic, interactive buttons |
| `scramble-in` | Initial reveal that streams in with a scrambled leading edge. | Page load animations, AI streaming simulators |
| `typewriter` | Types out text character by character with optional blinking cursor. | Terminal UI, landing page slogans |
| `text-rotate` | Smoothly switches and animates through an array of phrases/words. | Dynamic slogans ("Build [fast / bold / modern] apps") |
| `text-highlighter` | Animated highlighter stroke behind or over keywords. | Emphasizing key value propositions |
| `basic-number-ticker` | Smooth counting animation from zero or previous value to target. | Metrics, counters, KPI stats, pricing tables |
| `breathing-text` | Continuously pulses font variation axes (weight/width) rhythmically. | Ambient accents, loading states (requires variable font) |
| `text-cursor-proximity` | Letters scale, change weight, or shift based on mouse pointer distance. | Engaging landing page titles |
| `text-along-path` | Text animates along an arbitrary SVG curve or loop. | Decorative badges, circular stamps |
| `underline-animation` | SVG or CSS underline slides or draws on hover. | Inline links, navigation headers |
| `underline-to-background` | Underline expands upward into a pill or card background. | Category filters, tabs, pills |

#### Example: Vertical Cut Reveal
```tsx
import React from "react";
import { motion } from "motion/react";

interface VerticalCutRevealProps {
  children: string;
  splitBy?: "words" | "characters" | "lines";
  staggerDuration?: number;
  transition?: { duration: number; ease: string | number[] };
  containerClassName?: string;
  textClassName?: string;
}

export function VerticalCutReveal({
  children,
  splitBy = "characters",
  staggerDuration = 0.025,
  transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  containerClassName = "",
  textClassName = "",
}: VerticalCutRevealProps) {
  const items = splitBy === "words" ? children.split(" ") : children.split("");

  return (
    <span className={`inline-flex flex-wrap overflow-hidden ${containerClassName}`}>
      {items.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${textClassName}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              ...transition,
              delay: index * staggerDuration,
            }}
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
```

#### Example: Letter Swap on Hover
```tsx
import React, { useState } from "react";
import { motion } from "motion/react";

interface LetterSwapProps {
  label: string;
  className?: string;
}

export function LetterSwap({ label, className = "" }: LetterSwapProps) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = label.split("");

  return (
    <span
      className={`relative inline-flex overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="flex">
        {letters.map((char, i) => (
          <span key={i} className="relative inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              animate={{ y: isHovered ? "-100%" : "0%" }}
              transition={{ duration: 0.3, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 inline-block"
              initial={{ y: "100%" }}
              animate={{ y: isHovered ? "0%" : "100%" }}
              transition={{ duration: 0.3, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
}
```

---

### B. Blocks, Layouts & Cards

| Component | Description | Best For |
|---|---|---|
| `stacking-cards` | Overlapping cards that stack and lock into place as user scrolls. | Feature showcases, case studies, story sections |
| `box-carousel` | 3D rotating box/cube holding 4 faces with drag and swipe gestures. | Product highlights, portfolio showcases |
| `3d-css-box` | CSS-only 3D transform container responding to perspective. | Card flip effects, lightweight 3D banners |
| `circling-elements` | Orbiting icons or avatars in a 2D or perspective circle. | Partner logos, integrations, tech stack wheels |
| `drag-elements` | Free-form draggable items bounded or unbounded within a canvas. | Interactive mood boards, canvas playground |
| `float` | Continuous gentle levitation with subtle rotation and sine movement. | Background floating badges, 3D icons |
| `screensaver` | DVD screensaver bounce physics that deflects off container walls. | 404 pages, playful easter eggs, idle screens |
| `simple-marquee` | Seamless infinite scrolling ribbon with pause-on-hover. | Logo clouds, testimonials, ticker lines |
| `marquee-along-svg-path` | Elements follow any complex curved SVG vector path. | Creative branding, wavy banners |
| `media-between-text` | Hovering over text opens a preview image/video split in between words. | Editorial portfolios, case study links |
| `sticky-footer` | Page content rolls up to reveal a fixed bottom footer underneath. | Dramatic footer reveals, contact CTA |

#### Example: Stacking Cards Pattern
```tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface CardProps {
  title: string;
  description: string;
  index: number;
  total: number;
  color: string;
}

export function StackingCard({ title, description, index, total, color }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.04]);

  return (
    <div ref={ref} className="h-screen sticky top-12 flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className={`w-full max-w-xl p-8 rounded-3xl shadow-2xl border border-white/10 ${color}`}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-300">{description}</p>
      </motion.div>
    </div>
  );
}
```

---

### C. Backgrounds, Trails & Physics

| Component | Description | Dependencies |
|---|---|---|
| `pixel-trail` | Grid of interactive square pixels that lighten/recolor on cursor contact. | `motion` |
| `image-trail` | Staggered sequence of images generated wherever the mouse pointer moves. | `motion` |
| `parallax-floating` | Multi-layer floating assets with variable depth responding to mouse move. | `motion` |
| `gravity` | Physics playground with dropping objects and realistic gravity using Matter.js. | `matter-js` |
| `cursor-attractor-and-gravity` | Matter.js bodies attracted or repelled by the cursor position. | `matter-js` |
| `elastic-line` | Interactive SVG cord that stretches like a rubber band when pulled. | `motion` |
| `gooey-svg-filter` | SVG filter that blends adjacent shapes into organic liquid drops. | Native SVG filter |
| `pixelate-svg-filter` | SVG pixelation mosaic effect for retro or distortion transitions. | Native SVG filter |

#### Example: Pixel Trail Background
```tsx
import React, { useRef, useState } from "react";

interface PixelTrailProps {
  pixelSize?: number;
  trailDurationMs?: number;
  activeColor?: string;
}

export function PixelTrail({
  pixelSize = 32,
  trailDurationMs = 600,
  activeColor = "rgba(147, 51, 234, 0.4)",
}: PixelTrailProps) {
  const [activePixels, setActivePixels] = useState<{ [key: string]: number }>({});
  const timeoutMap = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / pixelSize);
    const y = Math.floor((e.clientY - rect.top) / pixelSize);
    const key = `${x},${y}`;

    if (timeoutMap.current[key]) clearTimeout(timeoutMap.current[key]);

    setActivePixels((prev) => ({ ...prev, [key]: Date.now() }));

    timeoutMap.current[key] = setTimeout(() => {
      setActivePixels((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
      delete timeoutMap.current[key];
    }, trailDurationMs);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: `${pixelSize}px ${pixelSize}px`,
      }}
    >
      {Object.keys(activePixels).map((key) => {
        const [x, y] = key.split(",").map(Number);
        return (
          <div
            key={key}
            className="absolute rounded-sm transition-opacity duration-500 ease-out pointer-events-none"
            style={{
              left: x * pixelSize,
              top: y * pixelSize,
              width: pixelSize,
              height: pixelSize,
              backgroundColor: activeColor,
            }}
          />
        );
      })}
    </div>
  );
}
```

---

## 3. Best Practices & Do's / Don'ts

### DO:
1. **Prefer `motion/react` imports**: Use `import { motion, AnimatePresence } from "motion/react"` in modern Motion v11+.
2. **Respect `prefers-reduced-motion`**: Wrap rapid continuous loops or disable physics simulations if `useReducedMotion()` is true.
3. **Handle touch vs mouse cleanly**: For trails and proximity effects, ensure fallback states for touch devices where hover/cursor coords are unavailable.
4. **Use GPU-accelerated properties**: Animate `transform` (`x`, `y`, `scale`, `rotate`) and `opacity` rather than `width`, `height`, `left`, `top`.
5. **Clean up physics instances**: When using Matter.js or requestAnimationFrame, always cancel animation frames and destroy Matter.Runner / World on component unmount.

### DON'T:
1. Don't trigger reflow by animating CSS `filter: blur()` across dozens of elements simultaneously on low-power devices.
2. Don't leave physics bodies unconstrained outside viewport bounds; always add walls or floor sensors.
3. Don't nest heavy drag elements inside interactive buttons without handling drag propagation stops.
