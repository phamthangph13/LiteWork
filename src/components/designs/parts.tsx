"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Boxes,
  Building2,
  DraftingCompass,
  Factory,
  FlaskConical,
  HeartPulse,
  Landmark,
  Network,
  Package,
  ShieldCheck,
  Snowflake,
  Store,
  Truck,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

const serviceIcons: Record<string, LucideIcon> = {
  design: DraftingCompass,
  supply: Package,
  install: Boxes,
  maint: Wrench,
  clean: FlaskConical,
  industrial: Factory,
  vrf: Network,
  vent: Wind,
};

const sectorIcons: Record<string, LucideIcon> = {
  factory: Factory,
  building: Building2,
  landmark: Landmark,
  health: HeartPulse,
  hotel: Building2,
  truck: Truck,
  server: ShieldCheck,
  store: Store,
};

export function ServiceIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Icon = serviceIcons[name] ?? Snowflake;
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}

export function SectorIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Icon = sectorIcons[name] ?? Building2;
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/*  Generic atoms                                                      */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M3 13 13 3M6 3h7v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ accordion (client)                                             */
/* ------------------------------------------------------------------ */

export function FaqAccordion({
  items,
  itemClassName = "",
  questionClassName = "",
  answerClassName = "",
}: {
  items: { q: string; a: string }[];
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={itemClassName}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-start justify-between gap-6 py-5 text-left transition-colors ${questionClassName}`}
            >
              <span className="font-display text-base font-semibold">{item.q}</span>
              <ChevronDown
                className={`mt-1 h-4 w-4 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`pb-5 pr-10 text-sm leading-relaxed ${answerClassName}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Design switcher (client)                                           */
/* ------------------------------------------------------------------ */

export function DesignSwitcher({
  designs,
  current,
  themeClass,
}: {
  designs: { slug: string; index: string; name: string; style: string; themeClass: string }[];
  current: string;
  themeClass: string;
}) {
  const [open, setOpen] = useState(false);
  const active = designs.find((d) => d.slug === current);

  return (
    <div className={`${themeClass} fixed bottom-5 right-5 z-50`}>
      {open && (
        <>
          <button
            aria-label="Đóng bảng chọn mẫu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/40 backdrop-blur-[2px]"
          />
          <div className="absolute bottom-16 right-0 z-50 w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="eyebrow text-muted">Chuyển mẫu thiết kế</span>
              <span className="text-xs text-muted">{designs.length} mẫu</span>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {designs.map((d) => (
                <Link
                  key={d.slug}
                  href={`/design/${d.slug}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 border-b border-line px-4 py-2.5 transition-colors last:border-b-0 hover:bg-surface2 ${
                    d.slug === current ? "bg-accentsoft" : ""
                  }`}
                >
                  <span className="font-mono text-[0.65rem] text-muted">{d.index}</span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-fg">{d.name}</span>
                    <span className="block text-[0.68rem] text-muted">{d.style}</span>
                  </span>
                  {d.slug === current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-fg shadow-lg transition-colors hover:bg-surface2"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-accent font-mono text-[0.6rem] font-bold text-accentfg">
          {active?.index}
        </span>
        <span className="hidden sm:inline">{active?.name}</span>
        <span className="sm:hidden">Mẫu</span>
      </button>
    </div>
  );
}
