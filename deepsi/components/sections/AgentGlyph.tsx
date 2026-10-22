"use client";

type Props = {
  kind: string;
};

export default function AgentGlyph({ kind }: Props) {
  if (kind === "agent-dev") {
    return (
      <svg width="132" height="96" viewBox="0 0 132 96" fill="none" aria-hidden className="shrink-0 self-start">
        <g stroke="currentColor" className="text-hairline" strokeWidth="1.4">
          <path d="M28 68c8-18 26-22 38-34M100 30c-10 2-20 6-34 4M28 68c16 10 44 8 72-38" />
        </g>
        <circle cx="28" cy="68" r="7" className="fill-accent-mist stroke-accent" strokeWidth="1.6" />
        <circle cx="66" cy="34" r="9" className="fill-paper stroke-ink/30" strokeWidth="1.6" />
        <rect x="88" y="20" width="26" height="18" rx="5" className="fill-accent stroke-accent" strokeWidth="1.6" />
        <path d="M95 29h2.5l2 4 2-4h1.5l2 4 2-4h2.5l-4 7h-2l-1.5-3-1.5 3h-2z" className="stroke-paper" strokeWidth="1" fill="none" />
        <circle cx="116" cy="76" r="4" className="fill-ink/15" />
        <g className="animate-dash" style={{ strokeDasharray: "4 6" }}>
          <circle cx="116" cy="76" r="10" className="stroke-accent/60" strokeWidth="1.2" fill="none" />
        </g>
      </svg>
    );
  }
  return (
    <svg width="96" height="64" viewBox="0 0 96 64" fill="none" aria-hidden className="shrink-0 self-start opacity-70">
      <rect x="4" y="8" width="18" height="12" rx="4" className="fill-accent-mist stroke-accent/50" />
      <path d="M22 14h16" stroke="currentColor" className="text-hairline" strokeDasharray="3 4" />
      <rect x="42" y="26" width="18" height="12" rx="4" className="fill-surface stroke-hairline" />
      <path d="M60 32h14" stroke="currentColor" className="text-hairline" strokeDasharray="3 4" />
      <rect x="74" y="44" width="18" height="12" rx="4" className="fill-accent stroke-accent" />
      <circle cx="13" cy="40" r="2.5" className="fill-accent/70" />
      <circle cx="51" cy="12" r="2.5" className="fill-ink/20" />
    </svg>
  );
}
