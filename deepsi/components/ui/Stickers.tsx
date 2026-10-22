"use client";

import { clsx } from "clsx";
import type { CSSProperties, ReactNode } from "react";

const INK = "#1C1B15";
const ACCENT = "#2D2A80";
const MIST = "#E4E3F1";
const SURFACE = "#FFFFFF";
const DEEP = "#ECEBE2";

const stroke = {
  stroke: INK,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type StickerKind =
  | "rocket"
  | "bot"
  | "zap"
  | "db"
  | "cloud"
  | "spark"
  | "cog"
  | "link"
  | "compass";

type OuterProps = {
  kind?: StickerKind;
  className?: string;
  rot?: number;
  float?: "a" | "b" | "c" | "none";
  children?: ReactNode;
  ariaHidden?: boolean;
  inline?: boolean;
};

export function Sticker({ kind, className, rot = 0, float = "b", children, ariaHidden, inline }: OuterProps) {
  const outerCls = clsx(
    "select-none",
    inline && "inline-block",
    float !== "none" && `animate-float-${float}`,
    className,
  );
  const innerCls = clsx("sticker", inline ? "inline-block h-auto w-full" : "block h-full w-full");
  return inline ? (
    <span aria-hidden={ariaHidden ?? undefined} className={outerCls} style={{ "--sticker-rot": `${rot}deg`, position: "relative" } as CSSProperties}>
      <span className={innerCls} style={{ "--sticker-rot": `${rot}deg` } as CSSProperties}>
        {kind ? <StickerArt kind={kind} /> : null}
        {children}
      </span>
    </span>
  ) : (
    <div aria-hidden={ariaHidden ?? undefined} className={outerCls} style={{ "--sticker-rot": `${rot}deg`, position: "relative" } as CSSProperties}>
      <div className={innerCls} style={{ "--sticker-rot": `${rot}deg` } as CSSProperties}>
        {kind ? <StickerArt kind={kind} /> : null}
        {children}
      </div>
    </div>
  );
}

function StickerArt({ kind }: { kind: StickerKind }) {
  switch (kind) {
    case "rocket":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <circle cx="13" cy="55" r="3.2" fill={DEEP} strokeWidth="2" stroke={INK} />
          <circle cx="20" cy="60" r="2.1" fill={DEEP} strokeWidth="2" stroke={INK} />
          <path
            d="M26 50 L32 61 L38 50 Z"
            fill={ACCENT}
            strokeWidth="3"
            {...stroke}
          />
          <path d="M22 42 L13 47 L22 49 Z" fill={ACCENT} strokeWidth="3" {...stroke} />
          <path d="M42 42 L51 47 L42 49 Z" fill={ACCENT} strokeWidth="3" {...stroke} />
          <path
            d="M32 4 C38.5 10 42 18 42 28 L42 44 C42 47 40 50 32 50 C24 50 22 47 22 44 L22 28 C22 18 25.5 10 32 4 Z"
            fill={SURFACE}
            strokeWidth="3.2"
            {...stroke}
          />
          <circle cx="32" cy="25" r="5.4" fill={MIST} strokeWidth="2.6" stroke={INK} />
          <path d="M22 42 L42 42 L42 44 C42 47 40 50 32 50 C24 50 22 47 22 44 Z" fill={DEEP} strokeWidth="2.8" {...stroke} />
        </svg>
      );
    case "bot":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <path d="M32 12 L32 6" strokeWidth="2.8" {...stroke} />
          <circle cx="32" cy="5" r="2.6" fill={ACCENT} strokeWidth="2" {...stroke} />
          <rect x="4" y="27" width="4.5" height="10" rx="2" fill={MIST} strokeWidth="2.2" {...stroke} />
          <rect x="55.5" y="27" width="4.5" height="10" rx="2" fill={MIST} strokeWidth="2.2" {...stroke} />
          <rect x="8" y="12" width="48" height="42" rx="11" fill={MIST} strokeWidth="3" {...stroke} />
          <rect x="20" y="25" width="6.5" height="11" rx="3.2" fill={INK} />
          <rect x="37.5" y="25" width="6.5" height="11" rx="3.2" fill={INK} />
          <path d="M23 45 H41" strokeWidth="3" {...stroke} />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <path
            d="M37 3 L13 37 L27 37 L24 61 L51 25 L35 25 Z"
            fill={ACCENT}
            strokeWidth="3.4"
            {...stroke}
          />
          <path
            d="M10 12 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 Z"
            fill={SURFACE}
            strokeWidth="2"
            {...stroke}
          />
        </svg>
      );
    case "db":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <ellipse cx="30" cy="16" rx="16" ry="7" fill={SURFACE} strokeWidth="3" {...stroke} />
          <path
            d="M14 16 L14 44 C14 47.9 21.2 51 30 51 C38.8 51 46 47.9 46 44 L46 16"
            fill={SURFACE}
            strokeWidth="3"
            {...stroke}
          />
          <path d="M14 30 C14 33.9 21.2 37 30 37 C38.8 37 46 33.9 46 30" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M14 44 C14 47.9 21.2 51 30 51 C38.8 51 46 47.9 46 44" fill={MIST} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="52" cy="10" r="3.6" fill={ACCENT} strokeWidth="2.2" {...stroke} />
          <path d="M44 13 L49 11.5" strokeWidth="2" strokeDasharray="3 3" {...stroke} />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <path
            d="M19 46 A10.5 10.5 0 0 1 17 25.2 A13.2 13.2 0 0 1 42.6 21.9 A9.6 9.6 0 0 1 45.5 40.7 L45.5 46 Z"
            fill={SURFACE}
            strokeWidth="3.2"
            {...stroke}
          />
          <circle cx="27" cy="36" r="2.8" fill={ACCENT} strokeWidth="2" {...stroke} />
          <circle cx="39" cy="36" r="2.8" fill={MIST} strokeWidth="2" {...stroke} />
          <path d="M27 36 H39" strokeWidth="2" strokeDasharray="3 3" {...stroke} />
          <path d="M33 42 V49 M30 46.5 L33 50 L36 46.5" strokeWidth="2.2" {...stroke} />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <ellipse cx="32" cy="34" rx="27" ry="10.5" stroke={INK} strokeWidth="2" fill="none" strokeDasharray="5 5" transform="rotate(-16 32 34)" />
          <path
            d="M32 7 C34.2 20 44 29.8 57 32 C44 34.2 34.2 44 32 57 C29.8 44 20 34.2 7 32 C20 29.8 29.8 20 32 7 Z"
            fill={ACCENT}
            strokeWidth="3"
            {...stroke}
          />
          <circle cx="53" cy="18" r="3.2" fill={DEEP} strokeWidth="2" {...stroke} />
        </svg>
      );
    case "cog":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect key={deg} x="28.5" y="5" width="7" height="11" rx="2.5" fill={MIST} strokeWidth="2.4" {...stroke} transform={`rotate(${deg} 32 32)`} />
          ))}
          <circle cx="32" cy="32" r="15" fill={MIST} strokeWidth="3" {...stroke} />
          <circle cx="32" cy="32" r="6" fill={SURFACE} strokeWidth="2.4" {...stroke} />
          <circle cx="32" cy="32" r="1.9" fill={ACCENT} />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <circle cx="24" cy="34" r="13" fill={MIST} strokeWidth="3" {...stroke} />
          <circle cx="41" cy="34" r="13" fill="none" strokeWidth="3" stroke={INK} />
          <circle cx="24" cy="34" r="5" fill={SURFACE} strokeWidth="2.4" {...stroke} />
          <circle cx="41" cy="34" r="5" fill="none" strokeWidth="2.4" stroke={INK} />
          <circle cx="32.5" cy="20.5" r="3.4" fill={ACCENT} strokeWidth="2" stroke={INK} />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="h-auto w-full">
          <circle cx="32" cy="34" r="25" fill={SURFACE} strokeWidth="3.2" {...stroke} />
          <path d="M32 17 L37.8 32 L26.2 32 Z" fill={ACCENT} strokeWidth="2" {...stroke} />
          <path d="M32 47 L37.8 32 L26.2 32 Z" fill={DEEP} strokeWidth="2" {...stroke} />
          <circle cx="32" cy="33" r="3" fill={SURFACE} strokeWidth="2.2" {...stroke} />
          <path d="M32 7 v4 M54.5 12 l-2.8 2.8 M58 34 h-4 M6 34 h4 M9.5 12 l2.8 2.8" strokeWidth="2.2" {...stroke} />
        </svg>
      );
  }
}
