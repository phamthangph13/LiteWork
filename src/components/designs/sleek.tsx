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
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { AirflowArcs, LogoMark } from "@/components/visuals";

export default function SleekDesign() {
  return (
    <div className="theme-sleek min-h-screen bg-canvas font-body text-fg">
      {/* nav */}
      <header className="sticky top-0 z-40 bg-canvas/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-fg" />
            <span className="font-display text-[0.98rem] font-extrabold tracking-tight">{company.brand}</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-fg">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2.5 text-[0.82rem] font-semibold text-canvas transition-opacity hover:opacity-80"
          >
            Liên hệ
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 lg:pt-24">
        <p className="text-[0.78rem] font-medium text-muted">{company.tagline}</p>
        <h1 className="mt-6 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[3.6rem]">
          Hệ thống điều hoà không khí cho công trình của bạn.
        </h1>
        <p className="mt-7 max-w-2xl text-[1rem] leading-relaxed text-muted">{company.subline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-[0.88rem] font-semibold text-canvas transition-opacity hover:opacity-85"
          >
            Nhận báo giá
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#du-an" className="text-[0.88rem] font-semibold underline underline-offset-4 transition-opacity hover:opacity-60">
            Xem dự án
          </a>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.slice(0, 4).map((s) => (
            <div key={s.label} className="rounded-[18px] bg-surface2 p-6">
              <p className="font-display text-[2rem] font-extrabold leading-none">{s.value}</p>
              <p className="mt-1.5 text-[0.82rem] font-medium text-fg/70">
                {s.unit} {s.label.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* statement */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="font-display text-[1.8rem] font-extrabold leading-tight tracking-[-0.025em] sm:text-[2.4rem]">
              Một đội ngũ, một cam kết: hệ thống vận hành ổn định.
            </h2>
            <p className="mt-6 text-[0.96rem] leading-relaxed text-muted">
              {company.legalName} đồng hành cùng chủ đầu tư từ bản vẽ đầu tiên đến khi hệ thống
              chạy ổn định và bàn giao hồ sơ. Chúng tôi không thuê ngoài bất kỳ hạng mục thi
              công nào.
            </p>
            <a
              href="#nang-luc"
              className="mt-8 inline-flex items-center gap-2 text-[0.88rem] font-semibold underline underline-offset-4 hover:opacity-60"
            >
              Tìm hiểu năng lực
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-4 rounded-[18px] bg-surface2 px-5 py-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-fg" />
                <span className="text-[0.9rem] font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
            Dịch vụ
          </h2>
          <p className="max-w-sm text-[0.9rem] leading-relaxed text-muted">
            Trọn gói từ khảo sát đến bảo trì — không phát sinh ngoài dự toán.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.id} className="group rounded-[18px] border border-line p-6 transition-colors hover:bg-surface2">
              <span className="text-fg">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-[1.02rem] font-bold leading-snug">{s.title}</h3>
              <p className="mt-2.5 text-[0.84rem] leading-relaxed text-muted">{s.description}</p>
              <ul className="mt-5 space-y-1.5">
                {s.points.slice(0, 3).map((p) => (
                  <li key={p} className="text-[0.78rem] text-muted">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {sectors.map((s) => (
            <span
              key={s.name}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[0.8rem] font-medium text-muted"
            >
              <SectorIcon name={s.icon} className="h-3.5 w-3.5" />
              {s.name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16">
        <h2 className="font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
          Ngành ứng dụng
        </h2>
        <SectorGallery className="mt-8" />
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Dự án
            </h2>
            <span className="text-[0.88rem] text-muted">{projects.length} dự án tiêu biểu</span>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <article key={p.name} className="group overflow-hidden rounded-[18px] bg-canvas">
                <div className="relative">
                  <MediaFrame
                    src={img.hvacAhu}
                    alt={p.name}
                    ratio="aspect-[16/9]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-canvas px-3 py-1 text-[0.72rem] font-semibold">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[0.75rem] font-medium text-muted">
                    {p.location} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-[1.05rem] font-bold leading-snug">{p.name}</h3>
                  <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
                  <p className="mt-4 text-[0.8rem] font-semibold">{p.scale}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(6).map((p) => (
              <div key={p.name} className="rounded-[18px] bg-canvas px-6 py-5">
                <p className="text-[0.88rem] font-semibold leading-snug">{p.name}</p>
                <p className="mt-1.5 text-[0.78rem] text-muted">
                  {p.location} · {p.scale}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="nang-luc" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <h2 className="font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
          Quy trình
        </h2>
        <div className="mt-10 space-y-3">
          {process.map((s) => (
            <div
              key={s.step}
              className="grid gap-4 rounded-[18px] bg-surface2 p-6 sm:grid-cols-[60px_1fr_1fr] sm:items-start"
            >
              <span className="font-display text-[0.9rem] font-bold text-muted">{s.step}</span>
              <div>
                <h3 className="font-display text-[1.02rem] font-bold">{s.title}</h3>
                <p className="mt-1 text-[0.78rem] text-muted">{s.duration}</p>
              </div>
              <p className="text-[0.86rem] leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* trust */}
      <section className="bg-fg text-canvas">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-[1.7rem] font-extrabold leading-tight tracking-[-0.025em] sm:text-[2.1rem]">
                320+ kỹ sư. 18 tỉnh thành. Một tiêu chuẩn.
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span key={p} className="rounded-full border border-canvas/25 px-3 py-1.5 text-[0.78rem] opacity-80">
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {certifications.map((c) => (
                  <div key={c.title} className="rounded-[14px] border border-canvas/15 px-4 py-3">
                    <p className="text-[0.82rem] font-bold">{c.title}</p>
                    <p className="mt-0.5 text-[0.72rem] opacity-60">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.78rem] uppercase tracking-[0.16em] opacity-50">Khách hàng</p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                {clients.map((c) => (
                  <p key={c} className="text-[0.95rem] font-semibold opacity-85">
                    {c}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-8 border-t border-canvas/15 pt-8">
                <AirflowArcs className="h-20 w-20 opacity-60" accent="currentColor" />
                <div>
                  <p className="text-[0.78rem] uppercase tracking-[0.16em] opacity-50">Ban lãnh đạo</p>
                  <ul className="mt-2 space-y-1">
                    {team.slice(0, 3).map((m) => (
                      <li key={m.name} className="text-[0.88rem] font-semibold">
                        {m.name} <span className="font-normal opacity-60">— {m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
          Vì sao chủ đầu tư chọn AEROTECH
        </h2>
        <WhyUsGrid className="mt-8" />
        <h3 className="mt-12 font-display text-[1.3rem] font-extrabold">Cam kết dịch vụ</h3>
        <CommitmentTable className="mt-4" />
        <h3 className="mt-12 font-display text-[1.3rem] font-extrabold">Hình ảnh dự án</h3>
        <ProjectGallery variant="row" limit={6} className="mt-5" />
      </section>

      {/* faq */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.2rem]">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-10">
          <FaqAccordion items={faqs} questionClassName="hover:opacity-70" answerClassName="text-muted" />
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20">
        <div className="rounded-[24px] bg-surface2 p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.6rem]">
            Bắt đầu bằng một cuộc khảo sát miễn phí.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            Gửi bản vẽ và quy mô công trình. Chúng tôi phản hồi trong 24 giờ làm việc.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${company.hotline.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-[0.88rem] font-semibold text-canvas transition-opacity hover:opacity-85"
            >
              <Phone className="h-4 w-4" />
              {company.hotline}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[0.88rem] font-semibold transition-colors hover:bg-canvas"
            >
              <Mail className="h-4 w-4" />
              {company.email}
            </a>
          </div>
          <p className="mt-8 text-[0.8rem] text-muted">
            {company.address} · {company.workingHours}
          </p>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-fg hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
