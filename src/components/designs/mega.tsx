import Link from "next/link";
import { ArrowRight, BadgeCheck, Download, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  documents,
  faqs,
  partners,
  process,
  projects,
  services,
  stats,
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import { MegaMenu } from "@/components/designs/navs";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";


export default function MegaDesign() {
  return (
    <div className="theme-mega min-h-screen bg-canvas font-body text-fg">
      <MegaMenu themeClass="theme-mega" hotline={company.hotline} />

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_0.85fr] lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accentsoft px-3 py-1.5 text-[0.74rem] font-semibold text-accent">
              <BadgeCheck className="h-3.5 w-3.5" />
              Tổng thầu HVAC &amp; thông gió · Thành lập {company.founded}
            </span>
            <h1 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[3.1rem]">
              Hồ sơ năng lực dành cho{" "}
              <span className="text-accent">chủ đầu tư và nhà thầu</span>
            </h1>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted">
              {company.subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.87rem] font-semibold text-accentfg transition-opacity hover:opacity-90"
              >
                Yêu cầu báo giá
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#tai-lieu"
                className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-[0.87rem] font-semibold transition-colors hover:bg-surface2"
              >
                <Download className="h-4 w-4" />
                Tải hồ sơ năng lực
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className="rounded-lg border border-line bg-surface p-4">
                  <dt className="font-display text-[1.4rem] font-extrabold leading-none">
                    {s.value}
                    <span className="ml-0.5 text-[0.72rem] text-accent">{s.unit}</span>
                  </dt>
                  <dd className="mt-1.5 text-[0.74rem] leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <MediaFrame
            src={img.plantInterior}
            alt="Thi công hệ thống điều hoà tại nhà xưởng"
            ratio="aspect-[4/3]"
            className="rounded-xl"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* capabilities */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2.2rem]">
              Năng lực triển khai
            </h2>
            <p className="max-w-md text-[0.88rem] leading-relaxed text-muted">
              Một đầu mối duy nhất chịu trách nhiệm từ khảo sát đến bảo trì vận hành dài hạn.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-xl border border-line bg-surface p-5">
                <p className="text-[0.72rem] font-bold uppercase tracking-wide text-accent">
                  {s.title}
                </p>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 border-t border-line pt-3">
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p} className="py-0.5 text-[0.76rem] text-muted">
                      — {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* why us */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2.2rem]">
            Vì sao chủ đầu tư chọn AEROTECH
          </h2>
          <WhyUsGrid className="mt-8" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2.2rem]">
              Dự án tiêu biểu
            </h2>
            <span className="text-[0.85rem] text-muted">{projects.length} dự án · 18 tỉnh thành</span>
          </div>
          <ProjectGallery variant="row" limit={6} className="mt-8" />
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2.2rem]">
            Quy trình triển khai
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="rounded-xl border border-line bg-surface p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-[0.74rem] font-bold text-accentfg">
                    {s.step}
                  </span>
                  <span className="text-[0.75rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-4 font-display text-[0.98rem] font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* documents */}
      <section id="tai-lieu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2.2rem]">
            Tài liệu cho bộ phận đấu thầu
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((d) => (
              <div key={d.name} className="rounded-xl border border-line bg-surface p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[0.9rem] font-bold leading-snug">{d.name}</p>
                  <Download className="h-4 w-4 shrink-0 text-accent" />
                </div>
                <p className="mt-2 text-[0.78rem] text-muted">{d.note}</p>
                <p className="mt-3 border-t border-line pt-3 text-[0.74rem] text-muted">{d.type}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
              Thiết bị chính hãng
            </span>
            {partners.map((p) => (
              <span key={p} className="text-[0.85rem] font-semibold text-fg/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* clients + faq + contact */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
            Khách hàng tiêu biểu
          </p>
          <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <div key={c} className="bg-canvas px-4 py-5 text-center text-[0.82rem] font-semibold">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-[1.4rem] font-extrabold">Cam kết dịch vụ (SLA)</h2>
            <CommitmentTable className="mt-5" />
            <h3 className="mt-10 font-display text-[1.2rem] font-extrabold">Câu hỏi thường gặp</h3>
            <div className="mt-3 rounded-xl border border-line bg-canvas px-5">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>

          <div id="lien-he" className="scroll-mt-24 rounded-xl border border-line bg-canvas p-7">
            <h2 className="font-display text-[1.5rem] font-extrabold leading-snug">
              Gửi hồ sơ, nhận phương án trong 24 giờ
            </h2>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">
              Chúng tôi phản hồi báo giá sơ bộ trong 24 giờ làm việc và báo giá chi tiết theo BOQ
              trong 7–10 ngày sau khảo sát.
            </p>
            <ul className="mt-6 space-y-3 text-[0.88rem]">
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
            </p>
            <a
              href="#tai-lieu"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.86rem] font-semibold text-accentfg"
            >
              <Download className="h-4 w-4" />
              Tải hồ sơ năng lực
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex flex-col gap-3 border-t border-line pt-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
