import Link from "next/link";
import { ArrowRight, BadgeCheck, Download, Mail, Phone, Settings2 } from "lucide-react";
import {
  certifications,
  clients,
  company,
  documents,
  faqs,
  highlights,
  partners,
  process,
  projects,
  sectors,
  services,
  stats,
  team,
} from "@/data/company";
import { FaqAccordion, ServiceIcon, SectorIcon } from "@/components/designs/parts";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function ShadcnDesign() {
  return (
    <div className="theme-shadcn min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[0.96rem] font-semibold tracking-tight">{company.brand}</p>
              <p className="mt-1 text-[0.62rem] text-muted">Hồ sơ năng lực</p>
            </div>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["Năng lực", "#nang-luc"],
              ["Dịch vụ", "#dich-vu"],
              ["Dự án", "#du-an"],
              ["Quy trình", "#quy-trinh"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-md px-3 py-1.5 text-[0.83rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${company.hotline.replace(/\s/g, "")}`}
              className="hidden rounded-md border border-line px-3 py-2 text-[0.8rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg sm:inline-flex"
            >
              {company.hotline}
            </a>
            <a
              href="#lien-he"
              className="rounded-md bg-accent px-3.5 py-2 text-[0.8rem] font-medium text-accentfg transition-opacity hover:opacity-90"
            >
              Báo giá
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface2 px-2.5 py-1 text-[0.75rem] text-muted">
                <BadgeCheck className="h-3.5 w-3.5" />
                Thành lập {company.founded} · 480+ dự án
              </div>
              <h1 className="mt-5 font-display text-[2rem] font-bold leading-tight tracking-[-0.03em] sm:text-[2.9rem]">
                Hồ sơ năng lực điều hoà không khí và thông gió
              </h1>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                {company.subline}
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <a
                  href="#lien-he"
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-[0.85rem] font-medium text-accentfg transition-opacity hover:opacity-90"
                >
                  Yêu cầu báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-4 text-[0.85rem] font-medium transition-colors hover:bg-surface2"
                >
                  Xem dự án
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.slice(0, 6).map((s) => (
                  <div key={s.label} className="rounded-lg border border-line bg-surface p-4">
                    <dt className="font-display text-[1.35rem] font-bold leading-none">
                      {s.value}
                      <span className="ml-0.5 text-[0.74rem] font-medium text-muted">{s.unit}</span>
                    </dt>
                    <dd className="mt-1.5 text-[0.74rem] leading-snug text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-lg border border-line bg-surface p-5">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="text-[0.8rem] font-medium">Tổng quan năng lực</span>
                <Settings2 className="h-4 w-4 text-muted" />
              </div>
              <MediaFrame
                src={img.hvacAhu}
                alt="Hệ thống AHU"
                ratio="aspect-[16/10]"
                className="mt-4 rounded-md"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <ul className="mt-4 space-y-2">
                {highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex gap-2 text-[0.8rem] leading-relaxed text-muted">
                    <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {certifications.slice(0, 4).map((c) => (
                  <span
                    key={c.title}
                    className="rounded-md border border-line bg-surface2 px-2 py-1 text-[0.72rem] text-muted"
                  >
                    {c.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">Giới thiệu</h2>
              <p className="mt-4 text-[0.9rem] leading-[1.8] text-muted">
                {company.legalName} hoạt động theo mô hình tổng thầu EPC trọn gói, tự thiết kế, tự
                cung cấp thiết bị chính hãng và tự thi công bằng đội nhân sự có chứng chỉ nghề.
              </p>
              <p className="mt-3 text-[0.9rem] leading-[1.8] text-muted">
                Mọi hạng mục đều có hồ sơ hoàn công, biên bản nghiệm thu và chương trình bảo hành
                rõ ràng. Hỗ trợ kỹ thuật 24/7 trong suốt thời gian bảo hành.
              </p>

              <div className="mt-6 rounded-lg border border-line bg-surface p-4">
                <p className="text-[0.8rem] font-medium">Thiết bị chính hãng</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {partners.map((p) => (
                    <span
                      key={p}
                      className="rounded border border-line bg-surface2 px-2 py-1 text-[0.72rem] text-muted"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-surface p-5">
              <p className="text-[0.8rem] font-medium">Đội ngũ điều hành</p>
              <div className="mt-4 divide-y divide-line">
                {team.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 py-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface2 text-[0.72rem] font-semibold">
                      {m.name
                        .split(" ")
                        .slice(-2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.85rem] font-medium leading-tight">{m.name}</p>
                      <p className="truncate text-[0.76rem] text-muted">{m.role}</p>
                    </div>
                    <span className="shrink-0 rounded border border-line px-1.5 py-0.5 text-[0.7rem] text-muted">
                      {m.experience}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-line pt-4 text-[0.78rem] text-muted">
                {company.license} · MST {company.taxCode}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">Dịch vụ</h2>
            <span className="rounded-md border border-line px-2 py-0.5 text-[0.72rem] text-muted">
              8 nhóm
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.id}
                className="rounded-lg border border-line bg-surface p-4 transition-colors hover:bg-surface2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-muted">
                    <ServiceIcon name={s.icon} className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-3 text-[0.9rem] font-medium leading-snug">{s.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-3 border-t border-line pt-3">
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p} className="text-[0.74rem] text-muted">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-3.5 py-3">
                <SectorIcon name={s.icon} className="h-3.5 w-3.5 text-muted" />
                <span className="text-[0.82rem] font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">Ngành ứng dụng</h2>
          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">Dự án tiêu biểu</h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-line bg-surface">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.7fr_0.9fr_auto] gap-4 border-b border-line bg-surface2 px-4 py-2.5 text-[0.76rem] font-medium text-muted">
              <span>Dự án</span>
              <span>Ngành</span>
              <span>Địa điểm</span>
              <span>Quy mô</span>
              <span>Năm</span>
            </div>
            {projects.map((p) => (
              <div
                key={p.name}
                className="grid grid-cols-[1.4fr_0.8fr_0.7fr_0.9fr_auto] gap-4 border-b border-line px-4 py-3 last:border-b-0"
              >
                <div className="min-w-0">
                  <p className="truncate text-[0.84rem] font-medium">{p.name}</p>
                  <p className="mt-0.5 truncate text-[0.74rem] text-muted">{p.scope}</p>
                </div>
                <span className="truncate text-[0.8rem] text-muted">{p.category}</span>
                <span className="truncate text-[0.8rem] text-muted">{p.location}</span>
                <span className="truncate text-[0.8rem] text-muted">{p.scale}</span>
                <span className="text-[0.8rem] text-muted">{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">Quy trình</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="rounded-lg border border-line bg-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-[0.7rem] font-semibold text-accentfg">
                    {s.step}
                  </span>
                  <span className="text-[0.74rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-3 text-[0.88rem] font-medium">{s.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">
            Vì sao chọn AEROTECH
          </h2>
          <WhyUsGrid className="mt-6" />
          <h3 className="mt-10 font-display text-[1.2rem] font-bold tracking-[-0.02em]">
            Cam kết dịch vụ (SLA)
          </h3>
          <CommitmentTable className="mt-4" />
          <h3 className="mt-10 font-display text-[1.2rem] font-bold tracking-[-0.02em]">
            Hình ảnh dự án
          </h3>
          <ProjectGallery variant="row" limit={6} className="mt-4" />
        </div>
      </section>

      {/* documents + clients */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[1.3rem] font-bold tracking-[-0.02em]">Tài liệu</h2>
            <div className="mt-4 space-y-2">
              {documents.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[0.85rem] font-medium">{d.name}</p>
                    <p className="truncate text-[0.74rem] text-muted">
                      {d.note} · {d.type}
                    </p>
                  </div>
                  <Download className="h-4 w-4 shrink-0 text-muted" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-[1.3rem] font-bold tracking-[-0.02em]">Khách hàng</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {clients.map((c) => (
                <div key={c} className="rounded-lg border border-line bg-surface px-3.5 py-3 text-[0.82rem] font-medium">
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.78rem] text-muted">
              Chứng chỉ: {certifications.map((c) => c.title).join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">Câu hỏi thường gặp</h2>
          <div className="mt-5 rounded-lg border border-line bg-surface px-4">
            <FaqAccordion items={faqs} questionClassName="hover:text-fg" answerClassName="text-muted" />
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="lien-he" className="scroll-mt-24 bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="font-display text-[1.45rem] font-bold tracking-[-0.02em]">
              Liên hệ &amp; yêu cầu báo giá
            </h2>
            <p className="mt-3 max-w-2xl text-[0.88rem] leading-relaxed text-muted">
              Gửi bản vẽ công trình và yêu cầu vận hành. Chúng tôi phản hồi báo giá sơ bộ trong 24
              giờ làm việc và báo giá chi tiết theo BOQ trong 7–10 ngày sau khảo sát.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-4 text-[0.85rem] font-medium transition-colors hover:bg-surface2"
              >
                <Phone className="h-4 w-4 text-muted" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-4 text-[0.85rem] font-medium transition-colors hover:bg-surface2"
              >
                <Mail className="h-4 w-4 text-muted" />
                {company.email}
              </a>
            </div>
            <div className="mt-6 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-muted">
              <p>{company.address}</p>
              <p className="mt-1">{company.workingHours}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-medium text-fg hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
