"use client";

import { useCallback, useRef, useState } from "react";
import { CircleDot, RotateCcw, Search, ListChecks, Workflow } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sticker } from "@/components/ui/Stickers";
import Reveal from "@/components/motion/Reveal";
import Typewriter from "@/components/fancy/Typewriter";
import { sandboxScenarios } from "@/data/content";
import clsx from "clsx";

const STEP_ICONS = [CircleDot, Search, ListChecks] as const;

const INK = "#1C1B15";
const INK_SOFT = "#67655B";
const MIST = "#E4E3F1";
const ACCENT = "#2D2A80";
const HAIR = "#DDDBCF";

type NodeSpec = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  accent?: boolean;
};

const nodes: NodeSpec[] = [
  { id: "in", x: 24, y: 158, w: 150, h: 88, title: "YÊU CẦU VÀO", sub: "chat · zalo · email" },
  { id: "n1", x: 298, y: 52, w: 196, h: 72, title: "TIẾP NHẬN", sub: "chuẩn hoá · phân loại" },
  { id: "n2", x: 288, y: 168, w: 216, h: 84, title: "AGENT XỬ LÝ", sub: "rag · công cụ · guardrails", accent: true },
  { id: "n3", x: 298, y: 296, w: 196, h: 72, title: "SOẠN & KIỂM TRA", sub: "trích dẫn nguồn" },
  { id: "out", x: 792, y: 156, w: 168, h: 92, title: "PHẢN HỒI", sub: "kênh ban đầu · log" },
];

export default function Sandbox() {
  const [activeId, setActiveId] = useState<string>(sandboxScenarios[0]!.id);
  const [replayToken, setReplayToken] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [answerToken, setAnswerToken] = useState(0);
  const [answered, setAnswered] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const scenario = sandboxScenarios.find((s) => s.id === activeId) ?? sandboxScenarios[0]!;

  const runScenario = useCallback((id: string) => {
    setActiveId(id);
    setReplayToken((t) => t + 1);
  }, []);

  useGSAP(
    () => {
      const svg = svgRef.current;
      if (!svg) return;

      const dMain = svg.querySelector("#sb-dot");
      const dBack = svg.querySelector("#sb-dot-back");
      const ring = svg.querySelector("#sb-ring");
      const lits = svg.querySelectorAll("[data-lit]");

      if (prefersReducedMotion()) {
        const boot = window.setTimeout(() => {
          setStepIndex(scenario.steps.length);
          setAnswered(true);
        }, 0);
        return () => window.clearTimeout(boot);
      }

      gsap.set(lits, { opacity: 0 });
      gsap.set([dMain, dBack, ring], { opacity: 0 });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.7 });

      const resetRun = () => {
        setStepIndex(0);
        setAnswered(false);
        gsap.set(lits, { opacity: 0 });
      };
      tl.call(resetRun, [], 0);
      tl.call(() => setStepIndex(1), [], 1.62);
      tl.call(() => setStepIndex(2), [], 3.1);
      tl.call(() => setStepIndex(3), [], 4.0);
      tl.call(() => {
        setAnswered(true);
        setAnswerToken((t) => t + 1);
      }, [], 4.95);

      tl.to("#sb-heart-in", { scale: 1.06, svgOrigin: "99 202", duration: 0.3, yoyo: true, repeat: 1, ease: "power2.out" }, 0.25);
      tl.to(dMain, { opacity: 1, duration: 0.15 }, 0.3);
      tl.to(dMain, { motionPath: { path: "#sb-p0", align: "#sb-p0", alignOrigin: [0.5, 0.5] }, duration: 0.85, ease: "power1.inOut" }, 0.35);
      tl.to(dMain, { motionPath: { path: "#sb-p1", align: "#sb-p1", alignOrigin: [0.5, 0.5] }, duration: 0.4, ease: "none" }, 1.2);
      tl.to("#sb-lit-n1", { opacity: 1, duration: 0.3 }, 1.35);
      tl.to(dMain, { motionPath: { path: "#sb-p2", align: "#sb-p2", alignOrigin: [0.5, 0.5] }, duration: 0.4, ease: "none" }, 1.62);
      tl.to("#sb-lit-n2", { opacity: 1, duration: 0.3 }, 1.85);
      tl.to(ring, { scale: 1.5, svgOrigin: "396 210", duration: 1.05, ease: "power1.out" }, 1.95)
        .fromTo(ring, { opacity: 0.75 }, { opacity: 0, duration: 1.05, ease: "power2.in" }, 1.95);
      tl.to(dMain, { opacity: 0, duration: 0.25 }, 2.0);
      tl.to(dMain, { opacity: 1, duration: 0.2 }, 4.15);
      tl.to(dMain, { motionPath: { path: "#sb-p3", align: "#sb-p3", alignOrigin: [0.5, 0.5] }, duration: 0.75, ease: "power1.inOut" }, 4.3);
      tl.to("#sb-lit-n3", { opacity: 1, duration: 0.3 }, 3.85);
      tl.to("#sb-lit-out", { opacity: 1, duration: 0.3 }, 4.85);
      tl.to("#sb-heart-out", { scale: 1.07, svgOrigin: "876 202", duration: 0.28, yoyo: true, repeat: 1, ease: "power2.out" }, 4.9);
      tl.to(dBack, { opacity: 1, duration: 0.25 }, 5.0);
      tl.to(dBack, { motionPath: { path: "#sb-p6", align: "#sb-p6", alignOrigin: [0.5, 0.5] }, duration: 1.05, ease: "power1.inOut" }, 5.05);
      tl.to(dBack, { opacity: 0, duration: 0.25 }, 6.1);
      tl.to(dMain, { opacity: 0, duration: 0.2 }, 6.35);
    },
    { scope: svgRef, dependencies: [activeId, replayToken] },
  );

  return (
    <section id="thu-nghiem" className="relative overflow-hidden py-24 md:py-32">
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_55%_at_50%_35%,black,transparent)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index={4}
          label="Luồng một agent xử lý"
          title="Xem dữ liệu chạy qua từng lớp — từ yêu cầu đến phản hồi."
          desc="Mỗi kịch bản chạy theo đúng luồng thật: nhận yêu cầu, tra tri thức / hệ thống, soạn trả lời có kiểm tra, rồi gửi về đúng kênh + ghi log. Minh hoạ chạy hoàn toàn trên máy bạn."
        />

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal variant="rise" y={30} className="lg:col-span-8">
            <div className="relative h-full overflow-hidden rounded-3xl border-2 border-ink bg-surface shadow-card pattern-dots">
              <Sticker kind="zap" rot={-12} float="a" className="absolute -right-5 -top-6 z-20 w-14 sm:w-16" ariaHidden />
              <div className="relative flex items-center gap-3 border-b hairline px-5 py-3.5">
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent-mist text-accent">
                  <Workflow size={15} aria-hidden />
                </span>
                <p className="min-w-0 flex-1 truncate font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                  {scenario.trigger}
                </p>
                <span className="hidden shrink-0 rounded-full bg-accent px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-paper sm:inline-flex">
                  mô phỏng
                </span>
              </div>

              <div className="p-3 sm:p-5">
                <svg
                  ref={svgRef}
                  viewBox="0 0 980 420"
                  className="h-auto w-full"
                  role="img"
                  aria-label="Sơ đồ luồng: yêu cầu vào → tiếp nhận → agent xử lý → soạn & kiểm tra → phản hồi về kênh và log"
                >
                  <path id="sb-p6" d="M876 156 C 876 40, 99 40, 99 156" fill="none" stroke={INK_SOFT} strokeWidth="1.6" strokeDasharray="3 7" strokeLinecap="round" opacity="0.5" />
                  <path id="sb-p0" d="M174 202 C 246 202, 238 88, 298 88" fill="none" stroke={HAIR} strokeWidth="2" strokeLinecap="round" />
                  <path id="sb-p1" d="M396 124 L396 168" fill="none" stroke={HAIR} strokeWidth="2" strokeLinecap="round" />
                  <path id="sb-p2" d="M396 252 L396 296" fill="none" stroke={HAIR} strokeWidth="2" strokeLinecap="round" />
                  <path id="sb-p3" d="M494 332 C 620 358, 700 262, 792 202" fill="none" stroke={HAIR} strokeWidth="2" strokeLinecap="round" />

                  {nodes.map((n) => (
                    <g key={n.id}>
                      <g id={`sb-heart-${n.id}`}>
                        <rect
                          x={n.x}
                          y={n.y}
                          width={n.w}
                          height={n.h}
                          rx={14}
                          fill={n.accent ? ACCENT : "#FFFFFF"}
                          stroke={INK}
                          strokeWidth={n.accent ? 2.5 : 2}
                        />
                      </g>
                      <rect
                        data-lit
                        id={`sb-lit-${n.id}`}
                        x={n.x + 3}
                        y={n.y + 3}
                        width={n.w - 6}
                        height={n.h - 6}
                        rx={11}
                        fill={n.accent ? "#4A47A8" : MIST}
                        stroke="none"
                      />
                      <text
                        x={n.x + n.w / 2}
                        y={n.y + n.h / 2 - 2}
                        textAnchor="middle"
                        fill={n.accent ? "#F4F3ED" : INK}
                        style={{ font: "600 15px var(--font-grotesk, sans-serif)", letterSpacing: "-0.01em" }}
                      >
                        {n.title}
                      </text>
                      <text
                        x={n.x + n.w / 2}
                        y={n.y + n.h / 2 + 18}
                        textAnchor="middle"
                        fill={n.accent ? "#D8D7EC" : INK_SOFT}
                        style={{ font: "500 10px var(--font-mono-jet, monospace)", letterSpacing: "0.14em", textTransform: "uppercase" }}
                      >
                        {n.sub}
                      </text>
                    </g>
                  ))}

                  <circle id="sb-ring" cx="396" cy="210" r="46" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0" />
                  <circle id="sb-dot" r="6.5" fill={ACCENT} stroke="#FFFFFF" strokeWidth="2.5" opacity="0" />
                  <circle id="sb-dot-back" r="4.5" fill={INK_SOFT} opacity="0" />
                </svg>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t hairline px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-soft">
                <span>00 · tiếp nhận</span>
                <span className="text-accent">01 · agent + guardrails</span>
                <span>02 · soạn & kiểm tra</span>
                <span>03 · phản hồi + log</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="rise" y={30} delay={0.08} className="lg:col-span-4">
            <div className="flex h-full flex-col gap-4">
              <div className="flex flex-col gap-2">
                {sandboxScenarios.map((s) => {
                  const active = s.id === activeId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      data-cursor
                      onClick={() => runScenario(s.id)}
                      className={clsx(
                        "group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-[13.5px] font-medium transition-all duration-300",
                        active
                          ? "border-accent bg-accent text-paper shadow-pop"
                          : "hairline bg-surface text-ink hover:border-accent/50",
                      )}
                    >
                      {s.label}
                      <Search
                        size={14}
                        className={clsx("shrink-0 transition-transform duration-300", active ? "" : "-rotate-45 group-hover:rotate-0")}
                        aria-hidden
                      />
                    </button>
                  );
                })}
              </div>

              <ol className="flex flex-col rounded-2xl border hairline bg-surface p-4 shadow-card">
                {scenario.steps.map((s, i) => {
                  const Icon = STEP_ICONS[i % STEP_ICONS.length]!;
                  const done = stepIndex > i;
                  return (
                    <li
                      key={s}
                      className={clsx(
                        "flex items-center gap-2.5 border-b hairline py-2.5 text-[12.5px] last:border-b-0 last:pb-1 first:pt-1 transition-colors",
                        done ? "text-ink" : "text-ink-soft/60",
                      )}
                    >
                      <span
                        className={clsx(
                          "inline-flex size-6 shrink-0 items-center justify-center rounded-md",
                          done ? "bg-accent text-paper" : "bg-paper-deep text-ink-soft",
                        )}
                      >
                        <Icon size={12} aria-hidden />
                      </span>
                      <span className={clsx(done && "font-medium")}>{s}</span>
                    </li>
                  );
                })}
              </ol>

              <div className="flex-1 rounded-2xl border hairline bg-paper p-4">
                <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  Đầu ra
                </p>
                {answered ? (
                  <p className="text-[13.5px] leading-relaxed text-ink">
                    <Typewriter
                      key={`${scenario.id}-${answerToken}`}
                      text={scenario.answer}
                      speed={14}
                      showCaret
                    />
                  </p>
                ) : (
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft/50">
                    đang chạy luồng…
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setReplayToken((t) => t + 1)}
                data-cursor
                className="group inline-flex items-center justify-center gap-2 rounded-full border hairline bg-surface px-5 py-3 text-[13px] font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <RotateCcw size={14} className="transition-transform duration-500 group-hover:-rotate-180" aria-hidden />
                Chạy lại luồng
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
