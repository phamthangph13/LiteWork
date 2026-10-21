import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  documents,
  faqs,
  highlights,
  partners,
  projects,
  services,
  stats,
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import { FullscreenMenu } from "@/components/designs/navs";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

const indexItems = [
  { no: "01", label: "Tổng quan công ty", meta: "16 năm · 480 dự án", href: "#muc-01" },
  { no: "02", label: "Năng lực chuyên môn", meta: "8 nhóm dịch vụ", href: "#muc-02" },
  { no: "03", label: "Ngành ứng dụng", meta: "8 ngành", href: "#muc-03" },
  { no: "04", label: "Dự án tiêu biểu", meta: "480+ hợp đồng", href: "#muc-04" },
  { no: "05", label: "Cam kết & SLA", meta: "Bằng hợp đồng", href: "#muc-05" },
  { no: "06", label: "Tài liệu đấu thầu", meta: "Sẵn sàng nộp", href: "#muc-06" },
];

export default function IndexDesign() {
  return (
    <div className="theme-index min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="text-[0.98rem] font-bold tracking-tight">AEROTECH</p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                Hồ sơ năng lực · Bản chỉ mục
              </p>
            </div>
          </div>
          <FullscreenMenu
            items={indexItems.map((i) => ({ label: i.label, meta: i.meta, href: i.href }))}
          />
        </div>
      </header>

      {/* hero / index */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Mục lục
              </p>
              <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[3rem]">
                Hồ sơ năng lực
                <br />
                <span className="text-muted">Công ty cổ phần</span>
                <br />
                Điều hoà không khí AEROTECH
              </h1>
              <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                {company.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-[0.86rem] font-semibold text-accentfg"
                >
                  Yêu cầu báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#muc-06"
                  className="inline-flex items-center gap-2 border border-line px-5 py-3 text-[0.86rem] font-semibold transition-colors hover:bg-surface2"
                >
                  <Download className="h-4 w-4" />
                  Tải hồ sơ (PDF)
                </a>
              </div>
            </div>

            <div>
              <ol className="border-t border-line">
                {indexItems.map((it) => (
                  <li key={it.no}>
                    <a
                      href={it.href}
                      className="group flex items-center gap-4 border-b border-line py-3.5 transition-colors hover:bg-surface2"
                    >
                      <span className="text-[0.72rem] font-bold text-accent">{it.no}</span>
                      <span className="flex-1 text-[0.92rem] font-semibold group-hover:text-accent">
                        {it.label}
                      </span>
                      <span className="text-[0.76rem] text-muted">{it.meta}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 01 */}
      <section id="muc-01" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-5 border-b border-line pb-4">
            <span className="text-[1.6rem] font-bold text-accent">01</span>
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] sm:text-[1.9rem]">
              Tổng quan công ty
            </h2>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.95rem] leading-[1.85] text-muted">
                {company.legalName} thành lập năm {company.founded}, hoạt động theo mô hình tổng thầu
                EPC trọn gói. Toàn bộ khối lượng thi công do đội kỹ sư có chứng chỉ nghề của công
                ty đảm nhận, hồ sơ hoàn công đầy đủ cho từng hạng mục.
              </p>
              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="border-l-2 border-accent bg-surface2 px-3.5 py-2.5 text-[0.82rem] leading-relaxed text-muted">
                    {h}
                  </li>
                ))}
              </ul>
              <dl className="mt-8 grid grid-cols-3 gap-6">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <dt className="text-[1.7rem] font-bold leading-none">
                      {s.value}
                      <span className="text-[0.75rem] text-accent">{s.unit}</span>
                    </dt>
                    <dd className="mt-1.5 text-[0.76rem] text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <MediaFrame
              src={img.plantInterior}
              alt="Thi công tại nhà xưởng"
              ratio="aspect-[4/3]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* 02 */}
      <section id="muc-02" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-5 border-b border-line pb-4">
            <span className="text-[1.6rem] font-bold text-accent">02</span>
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] sm:text-[1.9rem]">
              Năng lực chuyên môn
            </h2>
          </div>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="bg-canvas p-5">
                <p className="text-[0.88rem] font-bold leading-snug">{s.title}</p>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
                <p className="mt-3 text-[0.74rem] text-accent">{s.points[0]}</p>
              </article>
            ))}
          </div>
          <WhyUsGrid className="mt-6" />
        </div>
      </section>

      {/* 03 */}
      <section id="muc-03" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-5 border-b border-line pb-4">
            <span className="text-[1.6rem] font-bold text-accent">03</span>
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] sm:text-[1.9rem]">
              Ngành ứng dụng
            </h2>
          </div>
          <SectorGallery className="mt-8" />
        </div>
      </section>

      {/* 04 */}
      <section id="muc-04" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-5 border-b border-line pb-4">
            <span className="text-[1.6rem] font-bold text-accent">04</span>
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] sm:text-[1.9rem]">
              Dự án tiêu biểu
            </h2>
            <span className="ml-auto text-[0.8rem] text-muted">{projects.length} dự án</span>
          </div>
          <ProjectGallery variant="list" limit={8} className="mt-8" />
        </div>
      </section>

      {/* 05 */}
      <section id="muc-05" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-5 border-b border-line pb-4">
            <span className="text-[1.6rem] font-bold text-accent">05</span>
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] sm:text-[1.9rem]">
              Cam kết &amp; SLA
            </h2>
          </div>
          <CommitmentTable className="mt-8" />
        </div>
      </section>

      {/* 06 */}
      <section id="muc-06" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-5 border-b border-line pb-4">
            <span className="text-[1.6rem] font-bold text-accent">06</span>
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] sm:text-[1.9rem]">
              Tài liệu đấu thầu
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((d) => (
              <div key={d.name} className="flex items-start justify-between gap-3 border border-line bg-canvas p-5">
                <div>
                  <p className="text-[0.88rem] font-bold leading-snug">{d.name}</p>
                  <p className="mt-1 text-[0.78rem] text-muted">{d.note}</p>
                  <p className="mt-2 text-[0.74rem] text-muted">{d.type}</p>
                </div>
                <Download className="h-4 w-4 shrink-0 text-accent" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Đối tác thiết bị
            </span>
            {partners.map((p) => (
              <span key={p} className="text-[0.85rem] font-semibold text-fg/70">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Khách hàng
            </span>
            {clients.map((c) => (
              <span key={c} className="text-[0.85rem] font-semibold text-fg/70">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* faq + contact */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[1.3rem] font-bold">Câu hỏi thường gặp</h2>
            <div className="mt-4">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>
          <div id="lien-he" className="scroll-mt-24 border border-line p-7">
            <h2 className="text-[1.35rem] font-bold">Liên hệ</h2>
            <ul className="mt-5 space-y-3 text-[0.88rem]">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="font-semibold hover:text-accent">
                  {company.hotline}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="font-semibold hover:text-accent">
                  {company.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-muted">
              {company.address}
              <br />
              {company.workingHours}
              <br />
              MST {company.taxCode}
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
