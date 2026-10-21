"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/company";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ["Tất cả", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );
  const [active, setActive] = useState(categories[0]);

  const filtered = active === "Tất cả" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 border-b border-line">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`-mb-px border-b-2 px-4 py-2.5 text-[0.85rem] font-medium transition-colors ${
              active === c
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-fg"
            }`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto self-center text-[0.78rem] text-muted">
          {filtered.length} dự án
        </span>
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-line bg-surface">
        <div className="hidden grid-cols-[1.4fr_0.6fr_0.6fr_0.8fr_auto] gap-4 border-b border-line bg-surface2 px-4 py-2.5 text-[0.76rem] font-semibold text-muted lg:grid">
          <span>Dự án</span>
          <span>Địa điểm</span>
          <span>Năm</span>
          <span>Quy mô</span>
          <span>Trạng thái</span>
        </div>
        {filtered.map((p) => (
          <div
            key={p.name}
            className="grid gap-2 border-b border-line px-4 py-3.5 last:border-b-0 lg:grid-cols-[1.4fr_0.6fr_0.6fr_0.8fr_auto] lg:items-center lg:gap-4"
          >
            <div>
              <p className="text-[0.88rem] font-semibold leading-tight">{p.name}</p>
              <p className="mt-1 text-[0.78rem] text-muted lg:hidden">
                {p.category} · {p.location} · {p.year} · {p.scale}
              </p>
            </div>
            <span className="hidden text-[0.82rem] text-muted lg:block">{p.location}</span>
            <span className="hidden text-[0.82rem] text-muted lg:block">{p.year}</span>
            <span className="hidden text-[0.82rem] text-muted lg:block">{p.scale}</span>
            <span className="justify-self-start rounded bg-accentsoft px-2 py-0.5 text-[0.76rem] font-medium text-accent lg:justify-self-end">
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
