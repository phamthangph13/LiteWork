"use client";

import Marquee from "@/components/fancy/Marquee";
import { EcoIcon } from "@/components/ui/EcoLogos";

// Nền tảng DeepSI thường kết nối cho khách Việt (Simple Icons, CC0).
const ECO: { slug: string; name: string }[] = [
  { slug: "zalo", name: "Zalo" },
  { slug: "shopee", name: "Shopee" },
  { slug: "hubspot", name: "HubSpot" },
  { slug: "google", name: "Google Workspace" },
  { slug: "gmail", name: "Gmail" },
  { slug: "googlesheets", name: "Google Sheets" },
  { slug: "googledrive", name: "Google Drive" },
  { slug: "googlecalendar", name: "Google Calendar" },
  { slug: "telegram", name: "Telegram" },
  { slug: "notion", name: "Notion" },
  { slug: "airtable", name: "Airtable" },
  { slug: "stripe", name: "Stripe" },
  { slug: "discord", name: "Discord" },
  { slug: "tiktok", name: "TikTok" },
  { slug: "facebook", name: "Facebook" },
];

export default function EcoTicker({
  className,
}: {
  className?: string;
}) {
  const pills = ECO.map((e) => (
    <span
      key={e.slug}
      className="flex items-center gap-2.5 rounded-full border border-ink/15 bg-surface px-4.5 py-2.5"
    >
      <EcoIcon slug={e.slug} className="size-[17px] text-ink" ariaHidden />
      <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink">{e.name}</span>
    </span>
  ));

  return (
    <section aria-label="Hệ sinh thái thường kết nối" className={`relative z-10 py-10 md:py-12 ${className ?? ""}`}>
      <p className="mb-6 flex items-center justify-center gap-2.5 text-center font-mono text-[11.5px] uppercase tracking-[0.2em] text-ink-soft">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden className="text-accent">
          <path d="M7 1v12M1.8 4l10.4 6M12.2 4L1.8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        Hệ sinh thái thường kết nối
      </p>
      <div className="relative -mx-5 overflow-x-clip md:-mx-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-paper to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-paper to-transparent" aria-hidden />
        <Marquee items={pills} duration="46s" plain itemClassName="pr-4" separator={false} />
      </div>
    </section>
  );
}
