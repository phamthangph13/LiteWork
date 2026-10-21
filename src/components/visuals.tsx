import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Logo                                                              */
/* ------------------------------------------------------------------ */

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="10" fill="currentColor" />
      <path
        d="M11 27 L18.5 12 h3 L29 27 h-4.2 l-1.5-3.2h-7L14.8 27H11Z"
        fill="var(--mark-fg, #fff)"
      />
      <path d="M17.6 21.2h4.8L20 15.8l-2.4 5.4Z" fill="var(--mark-fg, #fff)" opacity="0.55" />
    </svg>
  );
}

export function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 text-accent" />
      <div className="leading-none">
        <div className="font-display text-[1.05rem] font-extrabold tracking-tight">AEROTECH</div>
        <div className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-muted">
          HVAC &amp; Ventilation
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Technical illustrations                                            */
/* ------------------------------------------------------------------ */

export function UnitSchematic({
  className = "",
  accent = "var(--accent)",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 420 260" className={className} fill="none" aria-hidden="true">
      <rect x="20" y="30" width="240" height="130" rx="4" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <rect x="28" y="38" width="44" height="114" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1={32 + i * 5}
          y1={40}
          x2={32 + i * 5}
          y2={150}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.28"
        />
      ))}
      <rect x="82" y="38" width="58" height="114" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path
        d="M88 44 l24 26 -24 26 24 26 -24 24"
        stroke={accent}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="188" cy="95" r="34" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <circle cx="188" cy="95" r="8" stroke={accent} strokeWidth="1.6" />
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d={`M188 95 c 14 -6 22 4 8 10`}
          stroke="currentColor"
          strokeWidth="1.1"
          opacity="0.5"
          transform={`rotate(${i * 60} 188 95)`}
        />
      ))}
      <rect x="236" y="66" width="16" height="58" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M260 95 h34" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <path d="M294 95 h30 v-40" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <path d="M260 95 h34" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <path d="M20 30 v-14 h240" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="140" cy="205" r="5" stroke={accent} strokeWidth="1.6" />
      <path d="M140 205 H330" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M140 205 h190" stroke="currentColor" strokeWidth="0.8" opacity="0.25" strokeDasharray="4 6" />
      <text x="146" y="200" fill="currentColor" fontSize="9" opacity="0.5" letterSpacing="1.6">
        AHU-2400
      </text>
      <text x="296" y="86" fill="currentColor" fontSize="9" opacity="0.5" letterSpacing="1.6">
        DUCT
      </text>
    </svg>
  );
}

export function ChillerSchematic({
  className = "",
  accent = "var(--accent)",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 420 220" className={className} fill="none" aria-hidden="true">
      <rect x="24" y="52" width="372" height="120" rx="6" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      <rect x="44" y="72" width="96" height="80" rx="4" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <ellipse cx="92" cy="112" rx="30" ry="26" stroke={accent} strokeWidth="1.6" />
      <ellipse cx="92" cy="112" rx="10" ry="8" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <rect x="166" y="72" width="86" height="80" rx="4" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1={170 + i * 9}
          y1={76}
          x2={170 + i * 9}
          y2={148}
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.3"
        />
      ))}
      <rect x="278" y="72" width="98" height="80" rx="4" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M286 112 h82" stroke="currentColor" strokeWidth="1.1" opacity="0.35" />
      <path d="M286 126 h82" stroke="currentColor" strokeWidth="1.1" opacity="0.35" />
      <path d="M92 52 V28 h-44" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M250 152 v22 h96" stroke={accent} strokeWidth="1.4" />
      <circle cx="48" cy="28" r="4" fill={accent} />
      <circle cx="346" cy="174" r="4" fill={accent} />
      <text x="54" y="200" fill="currentColor" fontSize="9" opacity="0.45" letterSpacing="1.4">
        WATER IN
      </text>
      <text x="276" y="200" fill="currentColor" fontSize="9" opacity="0.45" letterSpacing="1.4">
        WATER OUT
      </text>
    </svg>
  );
}

export function AirflowArcs({
  className = "",
  accent = "var(--accent)",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <circle
          key={i}
          cx="150"
          cy="150"
          r={26 + i * 20}
          stroke={i % 3 === 0 ? accent : "currentColor"}
          strokeWidth={i % 3 === 0 ? 1.6 : 1}
          opacity={0.65 - i * 0.07}
        />
      ))}
      <circle cx="150" cy="150" r="10" fill={accent} />
    </svg>
  );
}

export function PlantSilhouette({
  className = "",
  accent = "var(--accent)",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 420 240" className={className} fill="none" aria-hidden="true">
      <rect x="20" y="150" width="380" height="4" fill="currentColor" opacity="0.35" />
      <rect x="52" y="96" width="78" height="54" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <rect x="66" y="112" width="50" height="38" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <rect x="152" y="66" width="52" height="84" stroke={accent} strokeWidth="1.6" />
      <path d="M166 78 h24 M166 90 h24 M166 102 h24" stroke={accent} strokeWidth="1" opacity="0.5" />
      <rect x="226" y="110" width="70" height="40" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <path d="M236 122 h50 M236 134 h50" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <rect x="318" y="120" width="82" height="30" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <path d="M330 132 h58 M330 140 h58" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M178 66 V40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M170 40 q8 -10 16 0" stroke={accent} strokeWidth="1.4" />
      <circle cx="92" cy="96" r="3" fill={accent} />
      <circle cx="330" cy="120" r="3" fill={accent} />
    </svg>
  );
}

export function FloorPlan({
  className = "",
  accent = "var(--accent)",
  variant = 0,
}: {
  className?: string;
  accent?: string;
  variant?: number;
}) {
  const layouts = [
    [
      "M10 10 H150 V90 H10 Z",
      "M150 10 H230 V90 H150 Z",
      "M10 90 H230 V150 H10 Z",
      "M40 24 h50 v30 h-50 z",
      "M170 26 h40 v40 h-40 z",
      "M30 104 h60 v32 h-60 z",
      "M110 104 h100 v32 h-100 z",
    ],
    [
      "M10 10 H230 V150 H10 Z",
      "M10 10 H230 V70 H10 Z",
      "M10 90 H120 V150 H10 Z",
      "M140 90 H230 V150 H140 Z",
      "M30 26 h60 v28 h-60 z",
      "M110 26 h100 v28 h-100 z",
      "M160 100 h50 v40 h-50 z",
    ],
    [
      "M10 10 H120 V150 H10 Z",
      "M120 10 H230 V80 H120 Z",
      "M120 100 H230 V150 H120 Z",
      "M26 26 h34 v34 h-34 z",
      "M70 26 h34 v34 h-34 z",
      "M26 74 h78 v58 h-78 z",
      "M136 26 h78 v38 h-78 z",
    ],
  ];
  return (
    <svg viewBox="0 0 240 160" className={className} fill="none" aria-hidden="true">
      {layouts[variant % layouts.length].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={i === 0 ? accent : "currentColor"}
          strokeWidth={i === 0 ? 1.6 : 1}
          opacity={i === 0 ? 1 : 0.4}
        />
      ))}
    </svg>
  );
}

export function SectionRule({
  className = "",
  accent = "var(--accent)",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 200 8" className={className} fill="none" aria-hidden="true">
      <rect x="0" y="3" width="64" height="2" fill={accent} />
      <rect x="74" y="3" width="32" height="2" fill="currentColor" opacity="0.3" />
      <rect x="116" y="3" width="16" height="2" fill="currentColor" opacity="0.18" />
      <rect x="142" y="3" width="8" height="2" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative blocks for gallery previews                            */
/* ------------------------------------------------------------------ */

export function PreviewArt({
  variant = 0,
  className = "",
}: {
  variant?: number;
  className?: string;
}) {
  const arts = [
    <UnitSchematic key="a" className="h-full w-full" />,
    <PlantSilhouette key="b" className="h-full w-full" />,
    <AirflowArcs key="c" className="h-full w-full" />,
    <FloorPlan key="d" className="h-full w-full" variant={1} />,
    <ChillerSchematic key="e" className="h-full w-full" />,
  ];
  return <div className={className}>{arts[variant % arts.length]}</div>;
}

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

export function Wordmark({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      style={style}
      className={`font-display text-[0.95rem] font-bold uppercase tracking-[0.06em] ${className}`}
    >
      {children}
    </span>
  );
}
