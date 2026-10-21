"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Factory,
  FileText,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";
import { sectors, services } from "@/data/company";
import { ServiceIcon } from "@/components/designs/parts";

/* ================================================================== */
/*  MEGA MENU — enterprise dropdown panel                               */
/* ================================================================== */

const megaColumns = [
  {
    title: "Dịch vụ",
    items: services.map((s) => ({ label: s.title, icon: s.icon as string })),
  },
  {
    title: "Ngành ứng dụng",
    items: sectors.slice(0, 6).map((s) => ({ label: s.name, icon: s.name })),
  },
  {
    title: "Hồ sơ & tài liệu",
    items: [
      { label: "Hồ sơ năng lực 2026", icon: "download" },
      { label: "Danh mục dự án", icon: "file" },
      { label: "Catalogue thiết bị", icon: "file" },
      { label: "Mẫu hợp đồng EPC", icon: "file" },
    ],
  },
];

export function MegaMenu({
  themeClass = "",
  hotline,
}: {
  themeClass?: string;
  hotline: string;
}) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <div className={`${themeClass} relative z-50`}>
      <nav className="border-b border-line bg-canvas">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-3.5">
          <Link href="/" className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-muted">
            AEROTECH
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <a href="#nang-luc" className="rounded-md px-3 py-2 text-[0.85rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg">
              Năng lực
            </a>

            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-[0.85rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg"
                aria-expanded={open}
              >
                Dịch vụ &amp; ngành
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
              </button>

              {open && (
                <div className="absolute left-0 top-full w-[min(92vw,920px)] overflow-hidden rounded-b-xl border border-t-0 border-line bg-surface shadow-2xl">
                  <div className="grid gap-0 md:grid-cols-3">
                    {megaColumns.map((col) => (
                      <div key={col.title} className="border-line p-5 md:border-r md:last:border-r-0">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
                          {col.title}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {col.items.map((it) => (
                            <li key={it.label}>
                              <a
                                href="#dich-vu"
                                className="flex items-center gap-2.5 rounded-md px-2 py-2 text-[0.84rem] text-fg transition-colors hover:bg-surface2"
                              >
                                {it.icon === "download" ? (
                                  <Download className="h-4 w-4 text-accent" />
                                ) : it.icon === "file" ? (
                                  <FileText className="h-4 w-4 text-accent" />
                                ) : col.title === "Dịch vụ" ? (
                                  <ServiceIcon name={it.icon} className="h-4 w-4 text-accent" />
                                ) : (
                                  <Factory className="h-4 w-4 text-accent" />
                                )}
                                {it.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-surface2 px-5 py-4">
                    <p className="text-[0.82rem] text-muted">
                      Cần tư vấn theo ngành cụ thể? Kỹ sư phản hồi trong 24 giờ.
                    </p>
                    <a
                      href="#lien-he"
                      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[0.82rem] font-semibold text-accentfg"
                    >
                      Nhận tư vấn
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#du-an" className="rounded-md px-3 py-2 text-[0.85rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg">
              Dự án
            </a>
            <a href="#quy-trinh" className="rounded-md px-3 py-2 text-[0.85rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg">
              Quy trình
            </a>
            <a href="#tai-lieu" className="rounded-md px-3 py-2 text-[0.85rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg">
              Tài liệu
            </a>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a href={`tel:${hotline.replace(/\s/g, "")}`} className="hidden items-center gap-2 text-[0.85rem] font-semibold md:flex">
              <Phone className="h-4 w-4 text-accent" />
              {hotline}
            </a>
            <a
              href="#lien-he"
              className="hidden rounded-md bg-accent px-4 py-2.5 text-[0.83rem] font-semibold text-accentfg md:inline-flex"
            >
              Yêu cầu báo giá
            </a>
            <button
              onClick={() => setMobile(true)}
              className="grid h-9 w-9 place-items-center rounded-md border border-line lg:hidden"
              aria-label="Mở menu"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-fg" />
                <span className="block h-0.5 w-4 bg-fg" />
                <span className="block h-0.5 w-4 bg-fg" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {mobile && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-canvas lg:hidden">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="text-[0.8rem] font-semibold uppercase tracking-[0.2em]">AEROTECH</span>
            <button onClick={() => setMobile(false)} aria-label="Đóng menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-5 py-8">
            {["Năng lực", "Dịch vụ & ngành", "Dự án", "Quy trình", "Tài liệu", "Liên hệ"].map((i) => (
              <a
                key={i}
                href="#dich-vu"
                onClick={() => setMobile(false)}
                className="block border-b border-line py-4 font-display text-xl font-semibold"
              >
                {i}
              </a>
            ))}
            <a
              href="#lien-he"
              onClick={() => setMobile(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.85rem] font-semibold text-accentfg"
            >
              Nhận báo giá
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/*  BRACKET MENU — corner-bracket navigation                            */
/* ================================================================== */

export function BracketMenu({
  items,
  className = "",
}: {
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <nav className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          className="group relative px-3 py-2 text-[0.82rem] font-medium text-muted transition-colors hover:text-fg"
        >
          <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-accent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-accent opacity-0 transition-opacity group-hover:opacity-100" />
          {it.label}
        </a>
      ))}
    </nav>
  );
}

/** Khung góc dùng để trang trí ảnh / thẻ */
export function BracketFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l-2 border-t-2 border-accent" />
      <span className="pointer-events-none absolute right-0 top-0 z-10 h-6 w-6 border-r-2 border-t-2 border-accent" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-6 w-6 border-b-2 border-l-2 border-accent" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-6 w-6 border-b-2 border-r-2 border-accent" />
      {children}
    </div>
  );
}

/* ================================================================== */
/*  FULLSCREEN MENU — overlay navigation                                */
/* ================================================================== */

export function FullscreenMenu({
  items,
  brand = "AEROTECH",
}: {
  items: { label: string; meta: string; href: string }[];
  brand?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-3 text-[0.82rem] font-semibold uppercase tracking-[0.16em]"
        aria-label="Mở menu"
      >
        <span className="flex flex-col gap-1">
          <span className="block h-px w-6 bg-current transition-all group-hover:w-9" />
          <span className="block h-px w-6 bg-current transition-all group-hover:w-9" />
        </span>
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-inverse text-inversefg">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
            <span className="font-display text-[0.95rem] font-bold uppercase tracking-[0.2em]">
              {brand}
            </span>
            <button onClick={() => setOpen(false)} aria-label="Đóng menu" className="text-2xl leading-none">
              ×
            </button>
          </div>

          <nav className="mx-auto max-w-6xl px-5 pb-16">
            {items.map((it, i) => (
              <a
                key={it.label}
                href={it.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between gap-6 border-b border-inversefg/15 py-6 transition-colors hover:text-accent"
              >
                <span className="font-display text-[2rem] font-semibold tracking-[-0.03em] sm:text-[3.2rem]">
                  {it.label}
                </span>
                <span className="shrink-0 text-[0.72rem] uppercase tracking-[0.14em] opacity-50">
                  {String(i + 1).padStart(2, "0")} — {it.meta}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

/* ================================================================== */
/*  SIDE RAIL — fixed vertical navigation with scroll spy                */
/* ================================================================== */

export function SideRail({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-between border-r border-line bg-canvas py-6 lg:flex">
      <a href="#top" className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-[0.7rem] font-bold text-accentfg">
        AT
      </a>
      <ul className="flex flex-col items-center gap-5">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              title={it.label}
              className={`grid h-8 w-8 place-items-center rounded-md text-[0.65rem] font-bold transition-colors ${
                active === it.id ? "bg-accent text-accentfg" : "text-muted hover:bg-surface2"
              }`}
            >
              {it.label.slice(0, 2).toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">2026</span>
    </nav>
  );
}

/* ================================================================== */
/*  ICON MAP                                                           */
/* ================================================================== */

export const menuIcons: Record<string, LucideIcon> = {
  Factory,
  FileText,
  Download,
};
