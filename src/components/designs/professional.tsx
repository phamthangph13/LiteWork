import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
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

export default function ProfessionalDesign() {
  return (
    <div className="theme-professional min-h-screen bg-canvas font-body text-fg">
      {/* top utility bar */}
      <div className="bg-inverse text-inversefg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2 text-[0.76rem]">
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">{company.license}</span>
            <span className="hidden md:inline">MST {company.taxCode}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 opacity-85 hover:opacity-100">
              <Mail className="h-3.5 w-3.5" />
              {company.email}
            </a>
            <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-1.5 font-semibold">
              <Phone className="h-3.5 w-3.5" />
              {company.hotline}
            </a>
          </div>
        </div>
      </div>

      {/* header */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[1.02rem] font-extrabold tracking-tight">{company.brand}</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                Điều hoà không khí · Thông gió
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 lg:flex">
            {[
              ["Giới thiệu", "#gioi-thieu"],
              ["Năng lực", "#nang-luc"],
              ["Dịch vụ", "#dich-vu"],
              ["Dự án", "#du-an"],
              ["Quy trình", "#quy-trinh"],
              ["Tài liệu", "#tai-lieu"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-[0.85rem] font-medium text-muted transition-colors hover:text-accent">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="rounded-md bg-accent px-4 py-2.5 text-[0.84rem] font-semibold text-accentfg transition-colors hover:bg-accent/90"
          >
            Yêu cầu báo giá
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accentsoft px-3 py-1.5 text-[0.74rem] font-bold text-accent">
              <BadgeCheck className="h-3.5 w-3.5" />
              Tổng thầu EPC · Thành lập {company.founded}
            </span>
            <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-[3rem]">
              Giải pháp điều hoà không khí &amp; thông gió cho công trình
            </h1>
            <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-muted">{company.subline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#du-an"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.86rem] font-semibold text-accentfg transition-colors hover:bg-accent/90"
              >
                Xem dự án tiêu biểu
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#tai-lieu"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-canvas px-5 py-3 text-[0.86rem] font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <Download className="h-4 w-4" />
                Tải hồ sơ năng lực
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-canvas p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-muted">
                Chỉ số hoạt động
              </span>
              <span className="rounded bg-accentsoft px-2 py-1 text-[0.7rem] font-semibold text-accent">
                2026
              </span>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-surface2 px-4 py-3.5">
                  <dt className="font-display text-[1.3rem] font-extrabold leading-none text-accent">
                    {s.value}
                    <span className="text-[0.72rem]">{s.unit}</span>
                  </dt>
                  <dd className="mt-2 text-[0.74rem] leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
            <MediaFrame
              src={img.plantInterior}
              alt="Thi công hệ thống điều hoà tại nhà xưởng"
              ratio="aspect-[16/10]"
              className="mt-4 rounded-lg"
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </div>
      </section>

      {/* clients strip */}
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5">
          <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-muted">
            Khách hàng tiêu biểu
          </span>
          {clients.map((c) => (
            <span key={c} className="text-[0.85rem] font-bold text-fg/70">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* about + capability */}
      <section id="gioi-thieu" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Giới thiệu công ty
            </h2>
            <p className="mt-4 text-[0.93rem] leading-[1.85] text-muted">
              {company.legalName} thành lập năm {company.founded}, hoạt động theo mô hình tổng thầu
              EPC trọn gói. Chúng tôi tự thiết kế, tự cung cấp thiết bị chính hãng và tự thi công
              bằng đội nhân sự có chứng chỉ nghề — không thuê ngoài bất kỳ hạng mục nào.
            </p>
            <p className="mt-4 text-[0.93rem] leading-[1.85] text-muted">
              Mỗi dự án được quản lý bằng bộ hồ sơ kỹ thuật đầy đủ: bản vẽ thiết kế, dự toán BOQ,
              biên bản nghiệm thu từng hạng mục, hồ sơ hoàn công và chương trình bảo hành.
            </p>

            <ul className="mt-6 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[0.87rem] leading-relaxed text-muted">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div id="nang-luc" className="scroll-mt-24 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <MediaFrame
                src={img.hvacAhu}
                alt="Hệ thống AHU do AEROTECH lắp đặt"
                ratio="aspect-[16/10]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="p-5">
              <p className="text-[0.88rem] font-bold">Năng lực thiết kế</p>
              <p className="mt-1 text-[0.8rem] leading-relaxed text-muted">
                32 kỹ sư M&amp;E · tính tải nhiệt ASHRAE · mô phỏng CFD tiết kiệm điện.
              </p>
              </div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-muted">
                Chứng chỉ năng lực
              </p>
              <ul className="mt-3 space-y-1.5">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-baseline justify-between gap-3 text-[0.8rem]">
                    <span className="font-medium">{c.title}</span>
                    <span className="text-[0.72rem] text-muted">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-surface p-5 sm:col-span-2">
              <p className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-muted">
                Ban quản lý &amp; kỹ thuật
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((m) => (
                  <div key={m.name} className="rounded-lg bg-surface2 px-4 py-3">
                    <p className="text-[0.85rem] font-bold leading-tight">{m.name}</p>
                    <p className="mt-0.5 text-[0.76rem] text-accent">{m.role}</p>
                    <p className="mt-1 text-[0.72rem] text-muted">{m.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Dịch vụ chuyên nghiệp
            </h2>
            <span className="text-[0.84rem] text-muted">Trọn gói · 8 nhóm</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-xl border border-line bg-canvas p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accentsoft text-accent">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="mt-4 font-display text-[0.98rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 border-t border-line pt-3">
                  {s.points.map((p) => (
                    <li key={p} className="py-0.5 text-[0.76rem] text-muted">
                      — {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className="rounded-lg border border-line bg-canvas px-4 py-3.5">
                <div className="flex items-center gap-2.5">
                  <SectorIcon name={s.icon} className="h-4 w-4 text-accent" />
                  <span className="text-[0.84rem] font-semibold">{s.name}</span>
                </div>
                <p className="mt-1 pl-7 text-[0.74rem] text-muted">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Ngành ứng dụng
            </h2>
            <span className="text-[0.84rem] text-muted">8 ngành · 18 tỉnh thành</span>
          </div>
          <SectorGallery className="mt-8" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Dự án tiêu biểu
            </h2>
            <span className="text-[0.84rem] text-muted">18 tỉnh thành · 480+ hợp đồng</span>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <article key={p.name} className="overflow-hidden rounded-xl border border-line bg-surface">
                <div className="flex items-center justify-between bg-surface2 px-5 py-3">
                  <span className="text-[0.72rem] font-bold uppercase tracking-wide text-accent">
                    {p.category}
                  </span>
                  <span className="text-[0.74rem] text-muted">{p.year}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[1.02rem] font-bold leading-snug">{p.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[0.76rem] text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location}
                  </p>
                  <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
                  <p className="mt-4 rounded-md bg-accentsoft px-3 py-2 text-[0.78rem] font-semibold text-accent">
                    {p.scale}
                  </p>
                </div>
                <div className="border-t border-line px-5 py-3 text-[0.74rem] text-muted">
                  Trạng thái: {p.status} · Mã dự án AT-{2024 + i}0{i}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[680px] border-collapse text-left text-[0.82rem]">
              <thead>
                <tr className="bg-surface2 text-[0.78rem] text-muted">
                  <th className="px-4 py-3 font-semibold">Dự án</th>
                  <th className="px-4 py-3 font-semibold">Ngành</th>
                  <th className="px-4 py-3 font-semibold">Địa điểm</th>
                  <th className="px-4 py-3 font-semibold">Quy mô</th>
                  <th className="px-4 py-3 font-semibold">Năm</th>
                </tr>
              </thead>
              <tbody>
                {projects.slice(3).map((p) => (
                  <tr key={p.name} className="border-t border-line">
                    <td className="px-4 py-3 font-medium">{p.name}</td>
                    <td className="px-4 py-3 text-muted">{p.category}</td>
                    <td className="px-4 py-3 text-muted">{p.location}</td>
                    <td className="px-4 py-3 text-muted">{p.scale}</td>
                    <td className="px-4 py-3 text-muted">{p.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
            Quy trình làm việc
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="rounded-xl border border-line bg-canvas p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-[0.76rem] font-bold text-accentfg">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-[0.9rem] font-bold leading-tight">{s.title}</p>
                    <p className="text-[0.74rem] text-muted">{s.duration}</p>
                  </div>
                </div>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Vì sao chủ đầu tư chọn AEROTECH
            </h2>
            <span className="text-[0.84rem] text-muted">Cam kết bằng hợp đồng</span>
          </div>
          <WhyUsGrid className="mt-8" />
          <h3 className="mt-10 font-display text-[1.2rem] font-extrabold">Cam kết dịch vụ (SLA)</h3>
          <CommitmentTable className="mt-4" />
          <h3 className="mt-10 font-display text-[1.2rem] font-extrabold">Hình ảnh dự án tiêu biểu</h3>
          <ProjectGallery variant="row" limit={6} className="mt-4" />
        </div>
      </section>

      {/* documents */}
      <section id="tai-lieu" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
            Tài liệu &amp; hồ sơ năng lực
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((d) => (
              <div
                key={d.name}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface2 text-accent">
                  <FileText className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[0.92rem] font-bold leading-snug">{d.name}</p>
                <p className="mt-1.5 text-[0.78rem] text-muted">{d.note}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="text-[0.74rem] text-muted">{d.type}</span>
                  <Download className="h-4 w-4 text-accent transition-transform group-hover:translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {partners.map((p) => (
              <span key={p} className="rounded-md border border-line bg-surface2 px-2.5 py-1.5 text-[0.76rem] font-semibold text-muted">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* faq + contact */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Câu hỏi thường gặp
            </h2>
            <div className="mt-6 rounded-xl border border-line bg-canvas px-5">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>

          <div id="lien-he" className="scroll-mt-24 rounded-xl border border-line bg-canvas p-7">
            <h2 className="font-display text-[1.35rem] font-extrabold leading-snug">
              Liên hệ nhận báo giá &amp; hồ sơ năng lực
            </h2>
            <ul className="mt-5 space-y-3.5 text-[0.87rem]">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="font-semibold hover:text-accent">
                  {company.hotline}
                </a>
                <span className="text-muted">/ {company.hotline2}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="font-semibold hover:text-accent">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-muted">{company.address}</span>
              </li>
            </ul>
            <div className="mt-6 border-t border-line pt-5 text-[0.8rem] leading-relaxed text-muted">
              <p className="font-semibold text-fg">{company.workingHours}</p>
              <p className="mt-1">{company.license}</p>
            </div>
            <a
              href="#tai-lieu"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.86rem] font-semibold text-accentfg transition-colors hover:bg-accent/90"
            >
              <Download className="h-4 w-4" />
              Tải hồ sơ năng lực 2026
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-inverse text-inversefg">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-[0.8rem] sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold opacity-80 hover:opacity-100">
            Quay lại thư viện mẫu →
          </Link>
        </div>
      </footer>
    </div>
  );
}
