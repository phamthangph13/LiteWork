"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Building2, LayoutGrid, Sparkles } from "lucide-react";
import { designs, type DesignMeta } from "@/lib/designs";
import { LogoMark } from "@/components/visuals";

const filters = [
  { key: "all", label: "Tất cả" },
  { key: "light", label: "Nền sáng" },
  { key: "dark", label: "Nền tối" },
  { key: "warm", label: "Tông ấm" },
] as const;

function MiniPreview({ design }: { design: DesignMeta }) {
  return (
    <div
      className={`${design.themeClass} relative h-full w-full overflow-hidden`}
      style={{ color: "var(--fg)" }}
    >
      <Image
        src={design.preview}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-canvas/35" />
      <div className="relative flex h-full flex-col gap-2 p-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <div className="h-1.5 w-10 rounded-full bg-fg/40" />
          <div className="ml-auto flex gap-1">
            <div className="h-1.5 w-4 rounded-full bg-fg/25" />
            <div className="h-1.5 w-4 rounded-full bg-fg/25" />
            <div className="h-1.5 w-6 rounded-full bg-accent/90" />
          </div>
        </div>
        <div className="mt-1 h-3 w-3/4 rounded-sm bg-fg/90" />
        <div className="h-1.5 w-1/2 rounded-sm bg-fg/45" />
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded-sm border border-fg/25 bg-canvas/60" />
          <div className="h-8 rounded-sm bg-accent/80" />
          <div className="h-8 rounded-sm border border-fg/25 bg-canvas/60" />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [filter, setFilter] = useState<string>("all");

  const visible = useMemo(
    () => (filter === "all" ? designs : designs.filter((d) => d.tone === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="text-white">
              <LogoMark className="h-9 w-9" />
            </span>
            <div className="leading-tight">
              <p className="text-[0.95rem] font-bold tracking-tight">LiteWork Studio</p>
              <p className="text-[0.72rem] text-white/50">Bộ sưu tập mẫu website HVAC</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/70 md:flex">
            <Sparkles className="h-3.5 w-3.5" />
            30 mẫu · Next.js · Tailwind · GSAP · Three.js
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-white/40">Danh mục thiết kế · 2026 · 30 mẫu</p>
          <h1 className="mt-4 text-[2.4rem] font-black leading-[1.05] tracking-[-0.03em] sm:text-[3.4rem]">
            Mẫu website landing page
            <span className="block text-white/45">cho doanh nghiệp điều hoà không khí</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-white/60">
            Mỗi mẫu là một landing page hoàn chỉnh dành cho công ty HVAC doanh nghiệp: hồ sơ năng
            lực, dự án tiêu biểu, đối tác, thiết bị, cam kết SLA, tài liệu đấu thầu và biểu mẫu
            liên hệ. Các mẫu đều dùng ảnh thực tế, có menu hiện đại, hiệu ứng cuộn GSAP và các mẫu
            cao cấp có scene 3D.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                filter === f.key
                  ? "border-white bg-white text-black"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-white/35">
            {visible.length} mẫu đang hiển thị
          </span>
        </div>
      </section>

      <main className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((design) => (
            <Link
              key={design.slug}
              href={`/design/${design.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <MiniPreview design={design} />
                <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-0.5 font-mono text-[0.65rem] tracking-widest text-white/80 backdrop-blur">
                  {design.index}
                </div>
                <div className="absolute bottom-3 right-3 flex gap-1">
                  {design.palette.map((c) => (
                    <span
                      key={c}
                      className="h-4 w-4 rounded-full border border-white/25"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-white">{design.name}</h2>
                    <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.14em] text-white/40">
                      {design.style}
                    </p>
                  </div>
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-3 flex-1 text-[0.83rem] leading-relaxed text-white/55">
                  {design.description}
                </p>

                <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3 text-[0.7rem] text-white/45">
                  <span className="inline-flex items-center gap-1.5">
                    <LayoutGrid className="h-3.5 w-3.5" />
                    {design.fonts}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5" />
                    {design.mood}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>LiteWork · Mẫu website dành cho doanh nghiệp HVAC — dữ liệu trong bản mẫu là dữ liệu giả lập.</p>
          <p>Next.js 16 · React 19 · Tailwind CSS v4 · lucide-react</p>
        </div>
      </footer>
    </div>
  );
}
