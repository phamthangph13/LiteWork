"use client";

const STROKE = "stroke-current";

export default function StepArt({ index }: { index: number }) {
  const cls = `${STROKE} text-accent`;
  const faint = `${STROKE} text-ink/25`;

  if (index === 0) {
    return (
      <svg viewBox="0 0 260 120" fill="none" aria-hidden className="my-5 w-full max-w-[240px] self-start">
        <g className={faint} strokeWidth="1.5">
          <rect x="8" y="46" width="58" height="30" rx="8" />
          <rect x="98" y="14" width="58" height="30" rx="8" />
          <rect x="98" y="78" width="58" height="30" rx="8" />
          <rect x="192" y="46" width="58" height="30" rx="14" />
        </g>
        <g className={faint} strokeWidth="1.5" strokeDasharray="4 5">
          <path d="M66 61h24M156 32l36 24M156 92l36-26" />
        </g>
        <circle cx="120" cy="61" r="34" className={cls} strokeWidth="2.2" opacity="0.9" />
        <path d="M146 87l22 22" className={cls} strokeWidth="3" strokeLinecap="round" />
        <path d="M108 61l7 8 15-16" className={cls} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 260 120" fill="none" aria-hidden className="my-5 w-full max-w-[240px] self-start">
        <g className={faint} strokeWidth="1.5">
          <rect x="10" y="10" width="240" height="100" rx="10" />
          <path d="M10 34h240" />
          <circle cx="24" cy="22" r="3" />
          <circle cx="36" cy="22" r="3" />
        </g>
        <rect x="28" y="52" width="86" height="40" rx="8" className={`${cls} fill-accent-mist`} strokeWidth="2" />
        <rect x="130" y="52" width="102" height="40" rx="8" className={faint} strokeWidth="1.6" />
        <g strokeDasharray="5 6" strokeWidth="1.8">
          <path d="M114 72h16" className={cls} />
        </g>
        <path d="M44 72h18m8 0h18" className={cls} strokeWidth="2.4" strokeLinecap="round" opacity="0.75" />
        <path d="M146 62h60M146 74h40m8 0h16" className={faint} strokeWidth="2" strokeLinecap="round" />
        <path d="M146 84h54" className={faint} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 260 120" fill="none" aria-hidden className="my-5 w-full max-w-[240px] self-start">
        <g className={faint} strokeWidth="1.5">
          <rect x="10" y="16" width="110" height="88" rx="10" />
          <path d="M10 40h110M24 54h60M24 68h80M24 82h52" />
          <rect x="150" y="52" width="70" height="16" rx="8" />
          <rect x="150" y="80" width="94" height="16" rx="8" />
        </g>
        <rect x="150" y="24" width="94" height="16" rx="8" className={`${cls} fill-accent`} strokeWidth="1.6" />
        <g className="animate-dash" strokeDasharray="5 7">
          <path d="M120 60c14 0 24-12 30-28" className={cls} strokeWidth="1.8" fill="none" />
          <path d="M120 60c16 14 40 20 50-4" className={cls} strokeWidth="1.8" fill="none" />
        </g>
        <circle cx="65" cy="28" r="5" className="fill-accent" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 260 120" fill="none" aria-hidden className="my-5 w-full max-w-[240px] self-start">
        <g className={faint} strokeWidth="1.5">
          <rect x="10" y="24" width="118" height="72" rx="10" />
          <path d="M26 44h70M26 58h56M26 72h64" />
          <circle cx="204" cy="60" r="34" />
        </g>
        <circle cx="204" cy="60" r="20" className={cls} strokeWidth="2" />
        <path d="M204 60l14-14" className={cls} strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="196" cy="52" r="3" className="fill-accent" />
        <path d="M204 26v14M204 80v14M170 60h14M224 60h14" className={faint} strokeWidth="1.6" />
        <path d="M26 92l14-8" className={cls} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 120" fill="none" aria-hidden className="my-5 w-full max-w-[240px] self-start">
      <g className={faint} strokeWidth="1.5">
        <rect x="10" y="14" width="112" height="92" rx="10" />
        <path d="M28 90V64M48 90V50M68 90V72M88 90V58M108 90V42" strokeLinecap="round" strokeDasharray="0" />
        <circle cx="190" cy="60" r="4" />
      </g>
      <g className="animate-dash" strokeDasharray="6 8">
        <path d="M122 34c26-8 42 4 46 26M122 60h30M122 86c26 8 42-4 46-26" className={cls} strokeWidth="1.8" fill="none" />
      </g>
      <circle cx="190" cy="60" r="16" className={cls} strokeWidth="2" />
      <circle cx="190" cy="60" r="4" className="fill-accent" />
      <path d="M212 44l12-10" className={cls} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
