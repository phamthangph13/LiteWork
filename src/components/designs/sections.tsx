import Image from "next/image";
import {
  BadgeCheck,
  CircleDollarSign,
  Clock4,
  FileCheck2,
  ShieldCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { commitments, energy, projects, safety, sectors, whyUs } from "@/data/company";
import { projectImages, sectorImages } from "@/data/media";

/* ------------------------------------------------------------------ */
/*  Media frame                                                       */
/* ------------------------------------------------------------------ */

export function MediaFrame({
  src,
  alt,
  ratio = "aspect-[16/10]",
  className = "",
  imgClassName = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  children,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Project gallery                                                   */
/* ------------------------------------------------------------------ */

export type ProjectGalleryVariant = "card" | "row" | "list" | "mosaic";

export function ProjectGallery({
  variant = "card",
  limit = 6,
  className = "",
}: {
  variant?: ProjectGalleryVariant;
  limit?: number;
  className?: string;
}) {
  const items = projects.slice(0, limit);

  if (variant === "row") {
    return (
      <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {items.map((p, i) => (
          <article key={p.name} className="overflow-hidden rounded-card border border-line bg-surface">
            <MediaFrame
              src={projectImages[i % projectImages.length]}
              alt={p.name}
              ratio="aspect-[16/10]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            >
              <span className="absolute left-3 top-3 rounded bg-canvas/95 px-2.5 py-1 text-[0.7rem] font-semibold text-fg">
                {p.category}
              </span>
            </MediaFrame>
            <div className="p-5">
              <p className="text-[0.72rem] font-medium uppercase tracking-wide text-muted">
                {p.location} · {p.year}
              </p>
              <h3 className="mt-1.5 font-display text-[1rem] font-bold leading-snug">{p.name}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
              <p className="mt-3 text-[0.78rem] font-semibold text-accent">{p.scale}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className={`divide-y divide-line border-y border-line ${className}`}>
        {items.map((p, i) => (
          <article key={p.name} className="grid gap-4 py-5 sm:grid-cols-[120px_1fr] sm:items-center">
            <MediaFrame
              src={projectImages[i % projectImages.length]}
              alt={p.name}
              ratio="aspect-[4/3]"
              className="rounded-card"
              sizes="120px"
            />
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-wide text-muted">
                {p.category} · {p.location} · {p.year}
              </p>
              <h3 className="mt-1 font-display text-[1.02rem] font-bold leading-snug">{p.name}</h3>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  if (variant === "mosaic") {
    return (
      <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {items.map((p, i) => (
          <article
            key={p.name}
            className={`group relative overflow-hidden rounded-card border border-line ${
              i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <MediaFrame
              src={projectImages[i % projectImages.length]}
              alt={p.name}
              ratio={i === 0 ? "aspect-[16/11] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}
              sizes="(max-width: 640px) 100vw, 50vw"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            >
              <div className="absolute inset-0 flex flex-col justify-end bg-black/45 p-5 text-white">
                <span className="text-[0.7rem] font-semibold uppercase tracking-wide opacity-85">
                  {p.category} · {p.year}
                </span>
                <h3 className="mt-1.5 font-display text-[1.05rem] font-bold leading-snug">{p.name}</h3>
                <p className="mt-1.5 line-clamp-2 text-[0.8rem] leading-relaxed opacity-85">{p.scope}</p>
                <span className="mt-3 inline-block text-[0.76rem] font-semibold opacity-90">{p.scale}</span>
              </div>
            </MediaFrame>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((p, i) => (
        <article key={p.name} className="flex flex-col overflow-hidden rounded-card border border-line bg-surface">
          <MediaFrame
            src={projectImages[i % projectImages.length]}
            alt={p.name}
            ratio="aspect-[16/10]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-wide text-muted">
              {p.category} · {p.location} · {p.year}
            </div>
            <h3 className="mt-2 font-display text-[1.02rem] font-bold leading-snug">{p.name}</h3>
            <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line pt-4">
              <span className="rounded bg-accentsoft px-2.5 py-1 text-[0.74rem] font-semibold text-accent">
                {p.scale}
              </span>
              <span className="rounded border border-line px-2.5 py-1 text-[0.74rem] text-muted">
                {p.status}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sector gallery                                                    */
/* ------------------------------------------------------------------ */

export function SectorGallery({
  limit = 8,
  className = "",
  ratio = "aspect-[16/10]",
}: {
  limit?: number;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {sectors.slice(0, limit).map((s) => (
        <div key={s.name} className="group overflow-hidden rounded-card border border-line bg-surface">
          <MediaFrame
            src={sectorImages[s.icon]}
            alt={s.name}
            ratio={ratio}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          >
            <div className="absolute inset-x-0 bottom-0 bg-canvas/95 p-4">
              <p className="font-display text-[0.92rem] font-bold leading-tight">{s.name}</p>
              <p className="mt-1 text-[0.76rem] text-muted">{s.detail}</p>
            </div>
          </MediaFrame>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  B2B blocks                                                        */
/* ------------------------------------------------------------------ */

const whyIcons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  clock: Clock4,
  cost: CircleDollarSign,
  team: Users,
  doc: FileCheck2,
  energy: Zap,
};

export function WhyUsGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {whyUs.map((w) => {
        const Icon = whyIcons[w.icon] ?? BadgeCheck;
        return (
          <article key={w.title} className="flex flex-col rounded-card border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accentsoft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div className="text-right">
                <p className="font-display text-[1.35rem] font-bold leading-none text-accent">
                  {w.metric}
                </p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-wide text-muted">
                  {w.metricLabel}
                </p>
              </div>
            </div>
            <h3 className="mt-5 font-display text-[1rem] font-bold leading-snug">{w.title}</h3>
            <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{w.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function CommitmentTable({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-card border border-line ${className}`}>
      <div className="hidden grid-cols-[1.2fr_0.7fr_1.3fr] gap-4 border-b border-line bg-surface2 px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-wide text-muted lg:grid">
        <span>Cam kết</span>
        <span>Mức cam kết</span>
        <span>Điều kiện áp dụng</span>
      </div>
      {commitments.map((c) => (
        <div
          key={c.label}
          className="grid gap-1 border-b border-line px-5 py-3.5 last:border-b-0 lg:grid-cols-[1.2fr_0.7fr_1.3fr] lg:items-center lg:gap-4"
        >
          <span className="text-[0.85rem] font-medium">{c.label}</span>
          <span className="font-display text-[0.95rem] font-bold text-accent">{c.value}</span>
          <span className="text-[0.8rem] text-muted">{c.detail}</span>
        </div>
      ))}
    </div>
  );
}

export function SafetyList({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {safety.map((s) => (
        <li key={s.title} className="rounded-card border border-line bg-surface p-5">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
            <p className="text-[0.9rem] font-semibold leading-snug">{s.title}</p>
          </div>
          <p className="mt-2.5 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function EnergyList({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {energy.map((e) => (
        <li key={e.title} className="rounded-card border border-line bg-surface p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[0.9rem] font-semibold leading-snug">{e.title}</p>
            <span className="shrink-0 rounded bg-accentsoft px-2 py-0.5 text-[0.72rem] font-bold text-accent">
              {e.saving}
            </span>
          </div>
          <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{e.description}</p>
        </li>
      ))}
    </ul>
  );
}
