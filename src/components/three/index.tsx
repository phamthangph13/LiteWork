"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("./SceneCanvas"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full" aria-hidden="true">
      <div className="h-full w-full animate-pulse rounded-[24px] bg-surface2" />
    </div>
  ),
});

export function ThreeScene({
  variant = "unit",
  className = "",
  accent = "#2f6df6",
  body = "#cfd8e3",
}: {
  variant?: "unit" | "air";
  className?: string;
  accent?: string;
  body?: string;
}) {
  return (
    <SceneCanvas variant={variant} className={className} accent={accent} body={body} />
  );
}
