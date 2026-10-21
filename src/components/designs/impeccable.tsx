import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
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
import {
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function ImpeccableDesign() {
  return (
    <div className="theme-impeccable min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[1.05rem] font-extrabold tracking-tight">{company.brand}</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.84rem] font-semibold text-fg/70 transition-colors hover:text-accent">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="inline-flex items-center gap-1.5 bg-accent px-4 py-2.5 text-[0.82rem] font-bold text-accentfg transition-transform hover:-translate-y-0.5"
          >
            Báo giá
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* poster hero */}
      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <div className="grid gap-px bg-line lg:grid-cols-4">
            <div className="bg-fg p-9 text-canvas lg:col-span-3">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
                Điều hoà không khí · Thông gió · EPC
              </p>
              <h1 className="mt-6 font-display text-[2.4rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] sm:text-[3.6rem]">
                Làm mát
                <br />
                công trình
                <br />
                <span className="text-accent">đúng chuẩn</span>
              </h1>
              <p className="mt-7 max-w-xl text-[0.96rem] leading-relaxed opacity-75">{company.subline}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-[0.87rem] font-extrabold text-accentfg transition-transform hover:-translate-y-0.5"
                >
                  Nhận báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-[0.87rem] font-bold transition-colors hover:bg-canvas/10"
                >
                  Dự án
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-px bg-line">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="flex-1 bg-accent px-6 py-7 text-accentfg">
                  <p className="font-display text-[2.2rem] font-extrabold uppercase leading-none tracking-[-0.03em]">
                    {s.value}
                    <span className="ml-1 text-[0.8rem]">{s.unit}</span>
                  </p>
                  <p className="mt-2 text-[0.78rem] font-semibold opacity-85">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* statement band */}
      <section className="border-b border-line bg-accent">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <p className="font-display text-[1.5rem] font-extrabold uppercase leading-tight tracking-[-0.02em] text-accentfg sm:text-[2.1rem]">
            480+ công trình · 18 tỉnh thành · 320+ kỹ sư · 16 năm kinh nghiệm
          </p>
        </div>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
                01 — Hồ sơ năng lực
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem]">
                Một đội ngũ chịu trách nhiệm từ bản vẽ đến bàn giao
              </h2>
              <p className="mt-6 text-[0.98rem] leading-[1.85] text-muted">
                {company.legalName} thực hiện trọn chuỗi EPCI: khảo sát, thiết kế, dự toán, cung cấp
                thiết bị chính hãng, thi công, vận hành thử, nghiệm thu và bảo trì dài hạn.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="border-l-2 border-accent bg-surface2 px-4 py-3.5 text-[0.85rem] leading-relaxed text-muted">
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
                {team.map((m) => (
                  <div key={m.name} className="bg-canvas p-5">
                    <p className="text-[0.9rem] font-extrabold leading-tight">{m.name}</p>
                    <p className="mt-1 text-[0.76rem] font-bold uppercase tracking-wide text-accent">
                      {m.role}
                    </p>
                    <p className="mt-2 text-[0.74rem] text-muted">{m.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden bg-fg text-canvas">
                <MediaFrame
                  src={img.hvacAhu}
                  alt="Hệ thống AHU"
                  ratio="aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="p-8">
                <p className="text-[0.88rem] font-extrabold uppercase tracking-wide">
                  Hệ thống AHU · Chiller · VRF
                </p>
                <p className="mt-2 text-[0.82rem] leading-relaxed opacity-70">
                  Công suất đến 3.500 tấn lạnh, 60.000 m³/h mỗi AHU. Thiết kế theo ASHRAE 62.1 và
                  90.1.
                </p>
                </div>
              </div>
              <div className="bg-surface2 p-8">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted">
                  Chứng chỉ &amp; tiêu chuẩn
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {certifications.map((c) => (
                    <li key={c.title} className="bg-canvas px-3.5 py-3">
                      <p className="text-[0.82rem] font-extrabold">{c.title}</p>
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
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-fg text-canvas">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">02 — Dịch vụ</p>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem]">
            Tám nhóm dịch vụ trọn gói
          </h2>

          <div className="mt-10 grid gap-px bg-canvas/15 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="bg-fg p-6">
                <div className="flex items-center justify-between">
                  <span className="text-accent">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[0.85rem] font-extrabold opacity-40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.05rem] font-extrabold uppercase leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed opacity-70">{s.description}</p>
                <ul className="mt-4 border-t border-canvas/15 pt-3">
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p} className="py-0.5 text-[0.76rem] opacity-60">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 border border-canvas/25 px-4 py-2 text-[0.8rem] font-semibold opacity-80"
              >
                <SectorIcon name={s.icon} className="h-3.5 w-3.5 text-accent" />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
            02 — Ngành ứng dụng
          </p>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem]">
            Chúng tôi phục vụ ai
          </h2>
          <SectorGallery className="mt-10" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
                03 — Dự án
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem]">
                Công trình đã bàn giao
              </h2>
            </div>
            <span className="text-[0.84rem] font-bold text-muted">{projects.length} dự án tiêu biểu</span>
          </div>

          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <article key={p.name} className="bg-canvas p-6">
                <div className="flex items-center justify-between">
                  <span className="bg-accent px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-accentfg">
                    {p.category}
                  </span>
                  <span className="text-[0.74rem] font-bold text-muted">{p.year}</span>
                </div>
                <h3 className="mt-4 font-display text-[1.1rem] font-extrabold leading-snug">{p.name}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
                <div className="mt-4 overflow-hidden">
                  <MediaFrame
                    src={img.hvacAhu}
                    alt={p.name}
                    ratio="aspect-[16/9]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-3 text-[0.78rem] font-extrabold uppercase tracking-wide text-accent">
                  {p.scale}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-px grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(6).map((p) => (
              <div key={p.name} className="bg-canvas px-5 py-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-wide text-muted">
                  {p.location} · {p.year}
                </p>
                <p className="mt-1.5 text-[0.9rem] font-extrabold leading-snug">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
            06 — Vì sao chọn AEROTECH
          </p>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem]">
            Cam kết với chủ đầu tư
          </h2>
          <WhyUsGrid className="mt-10" />
          <h3 className="mt-12 font-display text-[1.4rem] font-extrabold uppercase">
            Hình ảnh dự án
          </h3>
          <ProjectGallery variant="mosaic" limit={6} className="mt-6" />
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line bg-accent">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accentfg/70">
            04 — Quy trình
          </p>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-accentfg sm:text-[2.9rem]">
            Sáu bước rõ ràng
          </h2>
          <ol className="mt-10 grid gap-px bg-accentfg/20 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="bg-accent p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[1.6rem] font-extrabold leading-none text-accentfg">
                    {s.step}
                  </span>
                  <span className="text-[0.74rem] font-bold text-accentfg/70">{s.duration}</span>
                </div>
                <h3 className="mt-3 font-display text-[1.05rem] font-extrabold uppercase leading-snug text-accentfg">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-accentfg/80">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* trust + faq */}
      <section className="border-b border-line bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
              05 — Đối tác
            </p>
            <h2 className="mt-5 font-display text-[1.7rem] font-extrabold uppercase leading-tight tracking-[-0.02em] sm:text-[2.2rem]">
              Khách hàng và nhà sản xuất
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-2">
              {clients.map((c) => (
                <p key={c} className="bg-surface2 px-4 py-3.5 text-[0.85rem] font-extrabold">
                  {c}
                </p>
              ))}
            </div>
            <p className="mt-6 text-[0.8rem] leading-relaxed text-muted">
              Thiết bị: {partners.join(" · ")}
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
              06 — Hỏi đáp
            </p>
            <h2 className="mt-5 font-display text-[1.7rem] font-extrabold uppercase leading-tight tracking-[-0.02em] sm:text-[2.2rem]">
              Câu hỏi thường gặp
            </h2>
            <div className="mt-5">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="scroll-mt-24 bg-fg text-canvas">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
                07 — Bắt đầu
              </p>
              <h2 className="mt-5 font-display text-[2.2rem] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] sm:text-[3.2rem]">
                Gửi hồ sơ —
                <br />
                nhận báo giá
                <br />
                trong 24 giờ
              </h2>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.hotline.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-[0.87rem] font-extrabold text-accentfg transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  {company.hotline}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 border border-canvas/30 px-6 py-3.5 text-[0.87rem] font-bold transition-colors hover:bg-canvas/10"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
            </div>
            <div className="border border-canvas/15 p-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] opacity-50">Trụ sở</p>
              <p className="mt-3 text-[0.88rem] leading-relaxed opacity-75">{company.address}</p>
              <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] opacity-50">
                Giờ làm việc
              </p>
              <p className="mt-2 text-[0.84rem] opacity-75">{company.workingHours}</p>
              <p className="mt-5 text-[0.78rem] opacity-50">MST {company.taxCode}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-bold text-fg hover:text-accent">
            Quay lại thư viện mẫu →
          </Link>
        </div>
      </footer>
    </div>
  );
}
