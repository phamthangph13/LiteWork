"use client";

export default function StepRail() {
  return (
    <svg viewBox="0 0 220 64" fill="none" aria-hidden className="mb-6 w-56 self-start">
      <path d="M6 44c30-30 54 6 84-16" stroke="currentColor" className="text-accent" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 8" />
      <circle cx="6" cy="44" r="4" className="fill-accent" />
      <g className="animate-spin-slow" style={{ transformOrigin: "196px 14px" }}>
        <rect x="180" y="4" width="28" height="28" rx="8" stroke="currentColor" className="text-ink/25" strokeWidth="2" />
        <path d="M194 12v16M186 20h16" stroke="currentColor" className="text-accent" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path d="M90 28c34-4 66 22 104 8" stroke="currentColor" className="text-ink/20" strokeWidth="2" strokeLinecap="round" />
      <circle cx="94" cy="28" r="3" className="fill-ink/30" />
    </svg>
  );
}
