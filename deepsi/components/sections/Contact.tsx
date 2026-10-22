"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Phone } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ScrambleIn from "@/components/fancy/ScrambleIn";
import LetterSwap from "@/components/fancy/LetterSwap";
import { Sticker } from "@/components/ui/Stickers";
import clsx from "clsx";
import { brand } from "@/data/content";

const needs = ["Tự động hoá quy trình", "Tra cứu tri thức (RAG)", "Tích hợp hệ thống", "Nhân bản nội dung", "Chưa rõ — muốn tư vấn"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  need: string[];
  message: string;
};

const initial: FormState = { name: "", email: "", phone: "", need: [], message: "" };

const fieldCls =
  "w-full border-b-2 border-ink/30 bg-transparent px-0 py-2.5 text-[15.5px] text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-accent";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const copyTimer = useRef<number>(0);

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  const toggleNeed = (n: string) =>
    setForm((f) => ({
      ...f,
      need: f.need.includes(n) ? f.need.filter((x) => x !== n) : [...f.need, n],
    }));

  const copy = (what: "email" | "phone") => {
    const value = what === "email" ? brand.email : brand.phone;
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(what);
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(null), 1600);
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent(`[DeepSI] ${form.name} — trao đổi giải pháp AI`);
    const bodyLines = [
      `Tên: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Điện thoại: ${form.phone}` : "",
      form.need.length ? `Nhu cầu: ${form.need.join(", ")}` : "",
      "",
      form.message,
    ].filter(Boolean);
    return `mailto:${brand.email}?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    try {
      if (key) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: key,
            name: form.name,
            email: form.email,
            phone: form.phone,
            need: form.need.join(", "),
            message: form.message,
            subject: `[DeepSI] ${form.name} — trao đổi giải pháp AI`,
            from_name: "DeepSI Website",
            company: "",
          }),
        });
        const data = (await res.json()) as { success?: boolean };
        if (!res.ok || !data.success) throw new Error("web3forms failed");
      } else {
        window.location.href = mailtoHref();
        await new Promise((r) => window.setTimeout(r, 400));
      }
      setStatus("sent");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return (
    <section id="lien-he" className="relative overflow-hidden pb-16 pt-8 md:pb-24">
      <span
        aria-hidden
        className="outline-text-soft pointer-events-none absolute -left-6 top-10 select-none font-display text-[22vw] font-bold leading-none tracking-tighter xl:text-[12rem]"
      >
        LIÊN HỆ
      </span>
      <div className="pattern-net pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(65%_55%_at_80%_30%,black,transparent)]" aria-hidden />
      <Sticker kind="bot" rot={8} float="b" className="absolute right-[6%] top-14 hidden w-20 lg:block xl:w-24" ariaHidden />
      <Sticker kind="spark" rot={-12} float="c" className="absolute bottom-24 left-[46%] hidden w-12 lg:block" ariaHidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-16 md:px-8 md:pt-24 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-5">
          <Reveal variant="fade">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              <span className="inline-block size-1.5 bg-accent" aria-hidden />
              <ScrambleIn text="Bước tiếp theo" stepMs={24} />
            </span>
          </Reveal>

          <Reveal variant="clip">
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-balance">
              Sẵn sàng bàn về{" "}
              <span className="relative inline-block text-accent">
                bài toán
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 120 10" fill="none" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 8C40 2 80 2 118 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              của bạn chưa?
            </h2>
          </Reveal>

          <Reveal variant="rise" y={26} delay={0.08}>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Điền vài dòng ngắn bên phải — DeepSI nhận thông tin ngay và phản hồi trong giờ làm
              việc. Hoặc liên hệ trực tiếp:
            </p>
          </Reveal>

          <Reveal variant="rise" y={26} delay={0.14}>
            <div className="mt-8 flex flex-col">
              <a
                href={`mailto:${brand.email}`}
                data-cursor
                className="group flex items-center gap-3 border-b hairline py-4 transition-colors hover:border-accent"
              >
                <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Email</span>
                <span className="min-w-0 flex-1 truncate text-[14.5px] font-medium">
                  <ScrambleIn text={brand.email} stepMs={14} />
                </span>
                <span
                  role="button"
                  tabIndex={0}
                  data-cursor
                  aria-label="Sao chép email"
                  onClick={() => copy("email")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      copy("email");
                    }
                  }}
                  className="inline-flex size-8 items-center justify-center rounded-full border hairline text-ink-soft transition-colors hover:text-accent"
                >
                  {copied === "email" ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
                </span>
              </a>
              <a
                href={brand.phoneHref}
                data-cursor
                className="group flex items-center gap-3 border-b hairline py-4 transition-colors hover:border-accent"
              >
                <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Điện thoại</span>
                <span className="flex min-w-0 flex-1 items-center gap-2 text-[14.5px] font-medium tracking-wide">
                  <Phone size={14} className="text-accent" aria-hidden />
                  {brand.phone}
                </span>
                <span
                  role="button"
                  tabIndex={0}
                  data-cursor
                  aria-label="Sao chép số điện thoại"
                  onClick={() => copy("phone")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      copy("phone");
                    }
                  }}
                  className="inline-flex size-8 items-center justify-center rounded-full border hairline text-ink-soft transition-colors hover:text-accent"
                >
                  {copied === "phone" ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
                </span>
              </a>
              <p className="pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                Phản hồi trong giờ làm việc · GMT+7
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="rise" y={30} delay={0.1} className="lg:col-span-7">
          <form onSubmit={submit} method="post" action="/api/contact" className="flex flex-col">
            <input
              type="text"
              name="company"
              value={""}
              onChange={() => {}}
              tabIndex={-1}
              autoComplete="off"
              aria-label="Trường chống spam — không cần điền"
              className="pointer-events-none absolute h-0 w-0 opacity-0"
            />
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink">Tên *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => set({ name: e.target.value })}
                  placeholder="Tên của bạn"
                  className={fieldCls}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink">Email *</span>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set({ email: e.target.value })}
                  placeholder="you@to-chuc.vn"
                  className={fieldCls}
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink">Số điện thoại</span>
                <input
                  value={form.phone}
                  onChange={(e) => set({ phone: e.target.value })}
                  placeholder="09…"
                  inputMode="tel"
                  autoComplete="tel"
                  className={fieldCls}
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink">Nhu cầu</span>
              <div className="flex flex-wrap gap-2">
                {needs.map((n) => {
                  const active = form.need.includes(n);
                  return (
                    <button
                      key={n}
                      type="button"
                      data-cursor
                      onClick={() => toggleNeed(n)}
                      className={clsx(
                        "rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors",
                        active
                          ? "border-accent bg-accent text-paper"
                          : "hairline bg-surface text-ink hover:text-ink",
                      )}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="mt-8 flex flex-col gap-2">
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink">Tình huống của bạn</span>
              <textarea
                value={form.message}
                onChange={(e) => set({ message: e.target.value })}
                rows={3}
                placeholder="Vài dòng mô tả quy trình đang làm thủ công hoặc bài toán muốn agent xử lý…"
                className={clsx(fieldCls, "resize-none")}
              />
            </label>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <p aria-live="polite" className="max-w-[300px] font-mono text-[10.5px] leading-relaxed tracking-[0.04em] text-ink-soft">
                {status === "idle" &&
                  "Bấm gửi — thông tin đi thẳng tới DeepSI qua email, bạn không cần mở trình mail."}
                {status === "sending" && "Đang gửi…"}
                {status === "sent" && "Đã gửi tới DeepSI. Phản hồi sẽ tới email của bạn trong giờ làm việc."}
                {status === "error" && (
                  <>
                    Gửi không thành công —{" "}
                    <a href={mailtoHref()} data-cursor className="text-accent underline underline-offset-2">
                      gửi bằng trình mail thay thế
                    </a>
                    .
                  </>
                )}
              </p>
              <button
                type="submit"
                data-cursor
                disabled={status === "sending"}
                onClick={status === "sent" || status === "error" ? reset : undefined}
                className={clsx(
                  "group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-medium text-paper transition-shadow hover:shadow-pop",
                  status === "sent" ? "bg-emerald-600" : "bg-accent",
                  status === "sending" && "opacity-60",
                )}
              >
                <Sticker kind="zap" rot={16} float="b" inline className="pointer-events-none absolute -right-5 -top-5 w-8" ariaHidden />
                <LetterSwap
                  text={status === "sending" ? "Đang gửi…" : status === "sent" ? "Đã gửi" : "Gửi cho DeepSI"}
                  stepMs={16}
                />
                {status === "sent" ? (
                  <Check size={16} />
                ) : (
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
