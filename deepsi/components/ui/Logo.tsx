import clsx from "clsx";

const ACCENT = "#2D2A80";
const INK = "#1C1B15";
const PAPER = "#F4F3ED";

type Props = {
  className?: string;
  compact?: boolean;
};

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden className="shrink-0">
      <rect x="2.5" y="2.5" width="59" height="59" rx="18" fill={ACCENT} stroke={INK} strokeWidth="2.4" />
      <path
        d="M43.5 17.6 C37 11.8 24.6 13 23 20.6 C21.6 27 29.4 28.8 33.2 30.2 C37.6 31.8 43.4 34.4 41.6 41.2 C39.6 48.2 27.4 49 23.4 44.2"
        stroke={PAPER}
        strokeWidth="4.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="43.5" cy="17.6" r="3.6" fill={PAPER} />
      <circle cx="23.4" cy="44.2" r="3.6" fill={PAPER} />
      <circle cx="20.3" cy="52.2" r="2.1" fill={PAPER} opacity="0.8" />
      <circle cx="17.4" cy="57.4" r="1.6" fill={PAPER} opacity="0.55" />
      <path d="M52.2 7.8 v6.8 M48.8 11.2 h6.8" stroke={PAPER} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ className, compact = false }: Props) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <LogoMark size={34} />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[18.5px] font-semibold tracking-tight">
            Deep<span className="text-accent">SI</span>
          </span>
          <span className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.24em] text-ink-soft">
            AI Agent Solutions
          </span>
        </span>
      )}
    </span>
  );
}
