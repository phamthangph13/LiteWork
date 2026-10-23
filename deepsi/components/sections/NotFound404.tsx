"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ArrowUpRight, CircleDot, RotateCcw, Search, Workflow } from "lucide-react";
import CursorDot from "@/components/ui/CursorDot";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/fancy/Magnetic";
import Marquee from "@/components/fancy/Marquee";
import LetterSwap from "@/components/fancy/LetterSwap";
import ScrambleIn from "@/components/fancy/ScrambleIn";
import Typewriter from "@/components/fancy/Typewriter";
import { Sticker } from "@/components/ui/Stickers";

const noopSubscribe = () => () => {};

const marqueeItems = [
  "404 · route_not_found",
  "agent đã quét toàn bộ sơ đồ site",
  "không tìm thấy route khớp",
  "quay về trang chủ",
  "hoặc báo lỗi cho DeepSI",
];

const trace = [
  { no: "01", label: "quét sơ đồ site", status: "xong", done: true, Icon: Search },
  { no: "02", label: "đối chiếu routing table", status: "404 · không khớp", done: false, Icon: Workflow },
  { no: "03", label: "đề xuất hành động", status: "đã gợi ý", done: true, Icon: RotateCcw },
];

export default function NotFound404() {
  const href = useSyncExternalStore(
    noopSubscribe,
    () => window.location.pathname || "/",
    () => null,
  );

  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden">
      <div
        className="pattern-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(62%_55%_at_50%_30%,black,transparent)]"
        aria-hidden
      />
      <CursorDot />

      <Sticker kind="db" rot={-8} float="b" className="absolute right-[6%] top-[12%] hidden w-16 lg:block xl:w-20" ariaHidden />
      <Sticker kind="spark" rot={9} float="c" className="absolute bottom-[24%] left-[5%] hidden w-14 xl:block" ariaHidden />
      <Sticker kind="zap" rot={-6} float="a" className="absolute left-[10%] top-[16%] hidden w-12 lg:block" ariaHidden />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 py-16 md:px-8 md:py-24">
        <Reveal variant="fade" duration={0.5}>
          <p className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
            <span className="relative inline-flex size-2.5">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex size-2.5 rounded-full border-2 border-accent bg-paper" />
            </span>
            <ScrambleIn text="ERROR 404 · ROUTE_NOT_FOUND" stepMs={24} />
          </p>
        </Reveal>

        <Reveal variant="scale" delay={0.06}>
          <div className="relative select-none" aria-hidden>
            <span className="font-display text-[clamp(6.5rem,25vw,14rem)] font-bold leading-[0.9] tracking-tighter">
              4<span className="outline-text">0</span>4
            </span>
            <Sticker kind="compass" rot={10} float="b" className="absolute -right-7 top-4 w-12 sm:-right-12 sm:w-16" />
          </div>
        </Reveal>

        <Reveal variant="clip" delay={0.12} duration={0.6}>
          <h1 className="mt-2 max-w-3xl text-center font-display text-[clamp(1.6rem,4.4vw,2.5rem)] font-semibold leading-[1.08] tracking-tight text-balance">
            Route này không có trong sơ đồ map của agent.
          </h1>
        </Reveal>

        <Reveal variant="rise" delay={0.16} duration={0.6}>
          <p className="mt-3 max-w-xl text-center text-[15px] leading-relaxed text-ink-soft">
            Agent đã quét toàn bộ sơ đồ site nhưng không tìm thấy địa chỉ bạn vừa truy cập. Quay về trang chủ, hoặc
            nhắn email cho DeepSI nếu bạn nghĩ đây là lỗi hệ thống.
          </p>
        </Reveal>

        <Reveal variant="rise" delay={0.2} y={30} className="mt-10 w-full max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-surface shadow-card pattern-dots">
            <Sticker kind="bot" rot={7} float="a" className="absolute -right-5 -top-7 z-20 w-14 sm:w-16" ariaHidden />

            <div className="relative flex items-center gap-3 border-b hairline px-5 py-3.5">
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-mist text-accent">
                <CircleDot size={15} aria-hidden />
              </span>
              <p className="min-w-0 flex-1 truncate font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                trace.log — deepsi.agent
              </p>
              <span className="hidden shrink-0 rounded-full bg-accent px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-paper sm:inline-flex">
                status 404
              </span>
            </div>

            <div className="flex flex-col gap-3 p-5 sm:p-6">
              <p className="font-mono text-[12px] leading-relaxed text-ink md:text-[12.5px]">
                <span className="mr-2 text-accent">&gt;</span>
                {href === null ? (
                  <span className="caret font-mono text-ink-soft" />
                ) : (
                  <Typewriter
                    key={href}
                    text={`agent scan --route "${href}" --site deepsi.space`}
                    speed={16}
                  />
                )}
              </p>

              <ol className="flex flex-col rounded-2xl border hairline bg-surface p-4 shadow-card">
                {trace.map(({ no, label, status, done, Icon }) => (
                  <li key={no} className="flex items-center gap-3 border-b hairline py-2.5 first:pt-1 last:border-b-0">
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-accent text-paper">
                      <Icon size={12} aria-hidden />
                    </span>
                    <span className="font-mono text-[10px] text-ink-soft">{no}</span>
                    <span className="min-w-0 flex-1 truncate font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink">
                      {label}
                    </span>
                    <span
                      className={
                        done
                          ? "shrink-0 rounded-full bg-accent-mist px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent"
                          : "shrink-0 rounded-full bg-paper-deep px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-soft"
                      }
                    >
                      {status}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="flex-1 rounded-2xl border hairline bg-paper p-4">
                <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  <span className="inline-block size-1.5 bg-accent" aria-hidden />
                  đầu ra agent
                </p>
                <p className="text-[13.5px] leading-relaxed text-ink">
                  {href === null ? (
                    <span className="caret font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft/50">
                      đang chạy luồng…
                    </span>
                  ) : (
                    <Typewriter
                      key={href}
                      text={`Địa chỉ "${href}" không có trong sơ đồ site của DeepSI — quét tới đâu cũng thấy trắng trơn minh bạch. Gợi ý nhanh nhất: quay về trang chủ.`}
                      speed={14}
                    />
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t hairline px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-soft">
              <span>00 · terminal</span>
              <span className="text-accent">01 · agent scan</span>
              <span>02 · tra cứu map</span>
              <span>03 · bị lạc</span>
            </div>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.28} duration={0.6}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <Magnetic strength={0.25}>
              <Link
                href="/"
                data-cursor
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[14px] font-medium text-paper transition-shadow hover:shadow-pop"
              >
                <LetterSwap text="Về trang chủ" stepMs={18} />
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Magnetic>
            <Link
              href="/#giai-phap"
              data-cursor
              className="group inline-flex items-center gap-2.5 rounded-full border hairline bg-surface px-6 py-3.5 text-[14px] font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <LetterSwap text="Xem giải pháp" stepMs={16} />
            </Link>
          </div>

          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            hoặc email winnieph13@gmail.com để báo lỗi
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 border-y-2 border-ink bg-paper-deep py-3.5">
        <Marquee
          items={marqueeItems}
          duration="30s"
          plain
          itemClassName="px-6 font-mono text-[11.5px] uppercase tracking-[0.2em] text-ink-soft"
        />
      </div>
    </main>
  );
}
