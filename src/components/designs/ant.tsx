import Link from "next/link";
import {
  LayoutGrid,
  Bell,
  CircleCheckBig,
  Mail,
  Phone,
  Search,
  BadgeCheck,
} from "lucide-react";
import {
  certifications,
  clients,
  company,
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
import { ProjectFilter } from "@/components/designs/ProjectFilter";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function AntDesign() {
  return (
    <div className="theme-ant min-h-screen bg-canvas font-body text-fg">
      {/* app header */}
      <header className="sticky top-0 z-40 border-b border-line bg-surface">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[0.98rem] font-bold tracking-tight">{company.brand}</span>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {[
              ["Tổng quan", "#tong-quan"],
              ["Năng lực", "#nang-luc"],
              ["Dịch vụ", "#dich-vu"],
              ["Dự án", "#du-an"],
              ["Liên hệ", "#lien-he"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded px-3 py-1.5 text-[0.85rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-md border border-line bg-surface2 px-3 py-1.5 md:flex">
              <Search className="h-3.5 w-3.5 text-muted" />
              <span className="text-[0.8rem] text-muted">Tìm dự án, hồ sơ…</span>
            </div>
            <span className="relative grid h-8 w-8 place-items-center rounded-md text-muted">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <a
              href="#lien-he"
              className="rounded-md bg-accent px-3.5 py-2 text-[0.82rem] font-semibold text-accentfg transition-colors hover:bg-accent/85"
            >
              Nhận báo giá
            </a>
          </div>
        </div>
      </header>

      {/* breadcrumb + banner */}
      <section id="tong-quan" className="scroll-mt-16 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-6">
          <nav className="flex items-center gap-2 text-[0.78rem] text-muted">
            <span>Trang chủ</span>
            <span>/</span>
            <span>Hồ sơ năng lực</span>
            <span>/</span>
            <span className="text-fg">Tổng quan</span>
          </nav>

          <div className="mt-6 overflow-hidden rounded-xl bg-accent">
            <div className="grid gap-8 p-8 text-accentfg lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
              <div>
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] opacity-75">
                  {company.legalName}
                </p>
                <h1 className="mt-4 font-display text-[1.9rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
                  Hồ sơ năng lực tổng thầu điều hoà không khí &amp; thông gió
                </h1>
                <p className="mt-4 max-w-2xl text-[0.94rem] leading-relaxed opacity-85">
                  {company.subline}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#du-an"
                    className="rounded-md bg-accentfg px-4 py-2.5 text-[0.85rem] font-semibold text-accent transition-opacity hover:opacity-90"
                  >
                    Xem dự án
                  </a>
                  <a
                    href="#lien-he"
                    className="rounded-md border border-accentfg/40 px-4 py-2.5 text-[0.85rem] font-semibold transition-colors hover:bg-accentfg/10"
                  >
                    Yêu cầu tư vấn
                  </a>
                </div>
              </div>
              <MediaFrame
                src={img.plantInterior}
                alt="Thi công hệ thống điều hoà tại nhà xưởng"
                ratio="aspect-[4/3]"
                className="hidden lg:block"
                priority
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* metrics */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line px-0 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-5">
              <p className="font-display text-[1.5rem] font-bold leading-none">
                {s.value}
                <span className="ml-0.5 text-[0.78rem] font-semibold text-accent">{s.unit}</span>
              </p>
              <p className="mt-2 text-[0.76rem] leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-16 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Giới thiệu công ty</h2>
              <p className="mt-4 text-[0.92rem] leading-[1.8] text-muted">
                Thành lập năm {company.founded}, {company.legalName} hoạt động theo mô hình tổng thầu
                EPC trọn gói. Chúng tôi tự thiết kế, tự cung cấp thiết bị chính hãng và tự thi công
                bằng đội nhân sự có chứng chỉ nghề.
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-muted">
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg border border-line bg-surface p-5">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Thiết bị chính hãng
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {partners.map((p) => (
                    <span
                      key={p}
                      className="rounded border border-line bg-surface2 px-2.5 py-1.5 text-[0.76rem] font-medium text-muted"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-lg border border-line bg-surface p-5">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Quản lý & điều hành
                </p>
                <div className="mt-4 divide-y divide-line">
                  {team.map((m) => (
                    <div key={m.name} className="flex items-center gap-3 py-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accentsoft text-[0.72rem] font-bold text-accent">
                        {m.name
                          .split(" ")
                          .slice(-2)
                          .map((w) => w[0])
                          .join("")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[0.86rem] font-semibold leading-tight">{m.name}</p>
                        <p className="truncate text-[0.76rem] text-muted">{m.role}</p>
                      </div>
                      <span className="shrink-0 text-[0.76rem] text-muted">{m.experience}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-accent" />
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    Chứng chỉ &amp; tiêu chuẩn
                  </p>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {certifications.map((c) => (
                    <li key={c.title} className="rounded border border-line bg-surface2 px-3 py-2.5">
                      <p className="text-[0.8rem] font-semibold">{c.title}</p>
                      <p className="text-[0.72rem] text-muted">{c.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-16 border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Dịch vụ</h2>
            <span className="inline-flex items-center gap-1.5 rounded bg-accentsoft px-2.5 py-1 text-[0.76rem] font-medium text-accent">
              <LayoutGrid className="h-3.5 w-3.5" />
              8 nhóm dịch vụ
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent">
                <div className="grid h-9 w-9 place-items-center rounded-md bg-accentsoft text-accent">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-4 text-[0.95rem] font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 space-y-1">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-[0.78rem] text-muted">
                      <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className="rounded-lg border border-line bg-surface px-4 py-3.5">
                <div className="flex items-center gap-2.5">
                  <SectorIcon name={s.icon} className="h-4 w-4 text-accent" />
                  <span className="text-[0.85rem] font-medium">{s.name}</span>
                </div>
                <p className="mt-1.5 pl-7 text-[0.76rem] text-muted">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Ngành ứng dụng</h2>
            <span className="text-[0.8rem] text-muted">8 ngành · 18 tỉnh thành</span>
          </div>
          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-16 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Dự án tiêu biểu</h2>
            <span className="text-[0.8rem] text-muted">Lọc theo ngành · {projects.length} dự án</span>
          </div>
          <div className="mt-6">
            <ProjectFilter projects={projects} />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <div key={p.name} className="rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-2 text-[0.76rem] text-muted">
                  <span className="rounded bg-accentsoft px-2 py-0.5 font-medium text-accent">
                    {p.category}
                  </span>
                  <span>{p.year}</span>
                </div>
                <p className="mt-3 text-[0.95rem] font-semibold leading-snug">{p.name}</p>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Vì sao chọn AEROTECH</h2>
            <span className="text-[0.8rem] text-muted">Cam kết bằng hợp đồng</span>
          </div>
          <WhyUsGrid className="mt-6" />
          <h3 className="mt-10 font-display text-[1.2rem] font-bold tracking-[-0.01em]">
            Cam kết dịch vụ (SLA)
          </h3>
          <CommitmentTable className="mt-4" />
          <h3 className="mt-10 font-display text-[1.2rem] font-bold tracking-[-0.01em]">
            Dự án tiêu biểu (ảnh thực tế)
          </h3>
          <ProjectGallery variant="row" limit={6} className="mt-4" />
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Quy trình thực hiện</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="rounded-lg border border-line bg-surface p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[0.74rem] font-bold text-accentfg">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-[0.9rem] font-semibold leading-tight">{s.title}</p>
                    <p className="text-[0.74rem] text-muted">{s.duration}</p>
                  </div>
                </div>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* clients */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Khách hàng tiêu biểu</h2>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <div key={c} className="bg-surface px-4 py-5 text-center text-[0.82rem] font-semibold">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq + contact */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em]">Câu hỏi thường gặp</h2>
            <div className="mt-5 rounded-lg border border-line bg-surface px-5">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>

          <div id="lien-he" className="scroll-mt-16 rounded-lg border border-line bg-surface p-6">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted">
              Liên hệ nhanh
            </p>
            <div className="mt-4 space-y-3 text-[0.9rem]">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-md border border-line px-3.5 py-3 transition-colors hover:border-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-semibold">{company.hotline}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 rounded-md border border-line px-3.5 py-3 transition-colors hover:border-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                <span className="font-semibold">{company.email}</span>
              </a>
            </div>
            <p className="mt-5 text-[0.82rem] leading-relaxed text-muted">{company.address}</p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{company.workingHours}</p>
            <div className="mt-5 border-t border-line pt-4 text-[0.78rem] text-muted">
              MST {company.taxCode} · {company.license}
            </div>
            <MediaFrame
              src={img.hvacAhu}
              alt="Hệ thống AHU chuẩn"
              ratio="aspect-[16/9]"
              className="mt-5 rounded-md"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </div>
      </section>

      <footer className="bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
