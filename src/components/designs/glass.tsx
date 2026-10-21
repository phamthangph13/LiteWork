import Link from "next/link";
import { Activity, ArrowRight, Gauge, Mail, Phone, Server, ShieldCheck } from "lucide-react";
import {
  clients,
  company,
  faqs,
  process,
  projects,
  services,
  stats,
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

const panels = [
  { icon: Gauge, label: "Đúng tiến độ hợp đồng", value: "98%", detail: "Cam kết bằng điều khoản đền bù" },
  { icon: Activity, label: "Tiết kiệm điện kỳ vọng", value: "35%", detail: "So sánh phương án VRF – chiller – heat pump" },
  { icon: Server, label: "Hệ thống đang vận hành", value: "480+", detail: "Công trình đã bàn giao và bảo trì" },
  { icon: ShieldCheck, label: "An toàn lao động", value: "0", detail: "Sự cố lao động trong 3 năm qua" },
];

export default function GlassDesign() {
  return (
    <div className="theme-glass min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="text-[0.95rem] font-semibold tracking-tight">AEROTECH</p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                Operations Console
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["Console", "#console"],
              ["Services", "#dich-vu"],
              ["Projects", "#du-an"],
              ["Runbook", "#quy-trinh"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-lg px-3 py-2 text-[0.85rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="rounded-lg bg-accent px-4 py-2.5 text-[0.83rem] font-semibold text-accentfg"
          >
            Liên hệ
          </a>
        </div>
      </header>

      {/* hero */}
      <section id="console" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="rounded-2xl border border-line bg-surface/70 p-8 backdrop-blur-xl sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface2 px-3 py-1.5 text-[0.74rem] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  SYSTEM ONLINE · 18 tỉnh thành
                </div>
                <h1 className="mt-6 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[2.9rem]">
                  Bảng điều khiển năng lực
                  <br />
                  <span className="text-muted">hệ thống điều hoà</span>
                </h1>
                <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-muted">
                  {company.subline}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.86rem] font-semibold text-accentfg"
                  >
                    Khởi tạo dự án
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#du-an"
                    className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-[0.86rem] font-semibold transition-colors hover:bg-surface2"
                  >
                    Xem portfolio
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {panels.map((p) => (
                  <div key={p.label} className="rounded-xl border border-line bg-surface2/70 p-5 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <p.icon className="h-4 w-4 text-accent" />
                      <span className="text-[0.6rem] uppercase tracking-[0.16em] text-muted">LIVE</span>
                    </div>
                    <p className="mt-4 text-[1.7rem] font-bold leading-none">{p.value}</p>
                    <p className="mt-2 text-[0.78rem] font-medium">{p.label}</p>
                    <p className="mt-1 text-[0.72rem] leading-snug text-muted">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-surface/60 p-4 backdrop-blur">
                <dt className="text-[1.3rem] font-bold leading-none text-accent">
                  {s.value}
                  <span className="ml-0.5 text-[0.7rem] text-muted">{s.unit}</span>
                </dt>
                <dd className="mt-1.5 text-[0.72rem] leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Module triển khai</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur transition-colors hover:border-accent">
                <div className="flex items-center justify-between">
                  <span className="text-[0.7rem] uppercase tracking-[0.14em] text-accent">
                    mod_{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.68rem] text-muted">{s.points.length} hạng mục</span>
                </div>
                <h3 className="mt-4 text-[0.95rem] font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
              </article>
            ))}
          </div>
          <SectorGallery className="mt-4" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-20 border-b border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Portfolio đã bàn giao</h2>
            <span className="text-[0.82rem] text-muted">{projects.length} bản ghi</span>
          </div>
          <ProjectGallery variant="row" limit={6} className="mt-8" />
        </div>
      </section>

      {/* why us */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Vì sao chủ đầu tư chọn AEROTECH</h2>
          <WhyUsGrid className="mt-8" />
          <CommitmentTable className="mt-6" />
        </div>
      </section>

      {/* runbook */}
      <section id="quy-trinh" className="scroll-mt-20 border-b border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Runbook triển khai</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="rounded-xl border border-line bg-surface/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[0.7rem] font-bold text-accentfg">
                    {s.step}
                  </span>
                  <span className="text-[0.74rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-4 text-[0.92rem] font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* faq + contact */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[1.3rem] font-bold">FAQ</h2>
            <div className="mt-4">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
            <p className="mt-6 text-[0.8rem] leading-relaxed text-muted">{clients.join(" · ")}</p>
          </div>

          <div id="lien-he" className="scroll-mt-20 rounded-xl border border-line bg-surface/70 p-7 backdrop-blur-xl">
            <h2 className="text-[1.3rem] font-bold">Khởi tạo dự án</h2>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">
              Phản hồi báo giá sơ bộ trong 24 giờ làm việc.
            </p>
            <div className="mt-6 space-y-3 text-[0.88rem]">
              <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-2.5 font-semibold hover:text-accent">
                <Phone className="h-4 w-4 text-accent" />
                {company.hotline}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 font-semibold hover:text-accent">
                <Mail className="h-4 w-4 text-accent" />
                {company.email}
              </a>
            </div>
            <div className="mt-6 border-t border-line pt-5 text-[0.8rem] leading-relaxed text-muted">
              <p>{company.address}</p>
              <p className="mt-1">{company.workingHours}</p>
            </div>
            <MediaFrame
              src={img.hvacAhu}
              alt="Hệ thống AHU"
              ratio="aspect-[16/9]"
              className="mt-6 rounded-lg"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-fg hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
