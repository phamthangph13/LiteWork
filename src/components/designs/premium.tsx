import Link from "next/link";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
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

export default function PremiumDesign() {
  return (
    <div className="theme-premium min-h-screen bg-canvas font-body text-fg">
      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[0.95rem] font-bold tracking-tight">{company.brand}</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.84rem] font-medium text-muted transition-colors hover:text-fg">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="rounded-full bg-accent px-4.5 py-2.5 text-[0.82rem] font-semibold text-accentfg transition-opacity hover:opacity-80"
          >
            Báo giá
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 text-center lg:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-[0.75rem] font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {company.founded} — 480+ công trình đã bàn giao
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl font-display text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[4rem]">
          Điều hoà không khí,
          <br />
          chuẩn mực cho mọi công trình.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[1rem] leading-relaxed text-muted">{company.subline}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[0.88rem] font-semibold text-accentfg transition-opacity hover:opacity-85"
          >
            Nhận báo giá
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#du-an"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-[0.88rem] font-semibold transition-colors hover:bg-surface2"
          >
            Xem dự án
          </a>
        </div>

        <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.slice(0, 4).map((s) => (
            <div key={s.label} className="rounded-[20px] border border-line bg-surface p-7 text-left">
              <p className="font-display text-[2.1rem] font-bold leading-none tracking-[-0.03em]">{s.value}</p>
              <p className="mt-2 text-[0.8rem] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* showcase */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[20px] bg-surface2">
              <MediaFrame
                src={img.hvacSpiralDuct}
                alt="Hệ thống đường ống gió"
                ratio="aspect-[4/3]"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute bottom-8 left-8 rounded-[16px] bg-canvas px-5 py-4">
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                  Tiết kiệm điện
                </p>
                <p className="mt-1 font-display text-[2rem] font-bold tracking-[-0.03em] text-accent">35%</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-[1.9rem] font-bold leading-tight tracking-[-0.03em] sm:text-[2.5rem]">
                Đội ngũ nhỏ hơn. Trách nhiệm lớn hơn.
              </h2>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
                {company.legalName} là đơn vị thiết kế, cung cấp và thi công hệ thống điều hoà
                không khí &amp; thông gió trọn gói. Chúng tôi trực tiếp chịu trách nhiệm từ bản vẽ
                đầu tiên đến khi công trình vận hành ổn định.
              </p>
              <ul className="mt-8 space-y-3.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-muted">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accentsoft text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-9 grid grid-cols-2 gap-3">
                {stats.slice(4).map((s) => (
                  <div key={s.label} className="rounded-[16px] border border-line px-5 py-4">
                    <p className="font-display text-[1.4rem] font-bold leading-none">
                      {s.value}
                      <span className="ml-1 text-[0.78rem] font-medium text-accent">{s.unit}</span>
                    </p>
                    <p className="mt-1.5 text-[0.78rem] text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <h2 className="text-center font-display text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.6rem]">
          Dịch vụ của chúng tôi
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-[0.93rem] leading-relaxed text-muted">
          Tám nhóm dịch vụ được thiết kế để khách hàng chỉ cần làm việc với một đầu mối duy nhất.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.id}
              className="rounded-[20px] border border-line p-6 transition-colors duration-300 hover:bg-surface2"
            >
              <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-accentsoft text-accent">
                <ServiceIcon name={s.icon} />
              </span>
              <h3 className="mt-6 font-display text-[1.02rem] font-bold leading-snug">{s.title}</h3>
              <p className="mt-2.5 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {sectors.map((s) => (
            <span
              key={s.name}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[0.8rem] text-muted"
            >
              <SectorIcon name={s.icon} className="h-3.5 w-3.5" />
              {s.name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <h2 className="text-center font-display text-[1.8rem] font-bold tracking-[-0.03em] sm:text-[2.4rem]">
          Ngành ứng dụng
        </h2>
        <SectorGallery className="mt-10" />
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.6rem]">
              Dự án tiêu biểu
            </h2>
            <span className="text-[0.86rem] text-muted">{projects.length} dự án trong danh mục</span>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <article key={p.name} className="rounded-[20px] bg-canvas p-6">
                <div className="overflow-hidden rounded-[16px]">
                  <MediaFrame
                    src={img.hvacAhu}
                    alt={p.name}
                    ratio="aspect-[16/9]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-5 text-[0.74rem] uppercase tracking-[0.14em] text-muted">
                  {p.category} · {p.year}
                </p>
                <h3 className="mt-2 font-display text-[1.1rem] font-bold leading-snug">{p.name}</h3>
                <p className="mt-2.5 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
                <p className="mt-4 text-[0.8rem] font-semibold text-accent">{p.scale}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(6).map((p) => (
              <div key={p.name} className="rounded-[16px] border border-line px-5 py-4">
                <p className="text-[0.88rem] font-semibold leading-snug">{p.name}</p>
                <p className="mt-1 text-[0.78rem] text-muted">
                  {p.location} · {p.scale}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.6rem]">Quy trình</h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((s) => (
            <div key={s.step} className="rounded-[20px] border border-line p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[0.78rem] font-bold text-accentfg">
                  {s.step}
                </span>
                <span className="text-[0.75rem] text-muted">{s.duration}</span>
              </div>
              <h3 className="mt-5 font-display text-[1.02rem] font-bold">{s.title}</h3>
              <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* trust */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-[1.7rem] font-bold tracking-[-0.03em]">Đội ngũ điều hành</h2>
              <div className="mt-8 space-y-3">
                {team.map((m) => (
                  <div key={m.name} className="flex items-center gap-4 rounded-[16px] border border-line px-5 py-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accentsoft font-display text-[0.8rem] font-bold text-accent">
                      {m.name
                        .split(" ")
                        .slice(-2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <div className="flex-1">
                      <p className="text-[0.9rem] font-semibold leading-tight">{m.name}</p>
                      <p className="text-[0.78rem] text-muted">{m.role}</p>
                    </div>
                    <span className="text-[0.78rem] text-muted">{m.experience}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-[1.7rem] font-bold tracking-[-0.03em]">Chứng chỉ &amp; đối tác</h2>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {certifications.map((c) => (
                  <div key={c.title} className="rounded-[16px] border border-line px-4 py-3.5">
                    <p className="text-[0.85rem] font-semibold">{c.title}</p>
                    <p className="mt-0.5 text-[0.75rem] text-muted">{c.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                Thiết bị chính hãng
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span key={p} className="rounded-full border border-line px-3 py-1.5 text-[0.78rem] text-muted">
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-[0.78rem] uppercase tracking-[0.14em] text-muted">Khách hàng</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {clients.map((c) => (
                  <span key={c} className="rounded-full bg-surface2 px-3 py-1.5 text-[0.78rem] font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.03em] sm:text-[2.4rem]">
          Vì sao chủ đầu tư chọn AEROTECH
        </h2>
        <WhyUsGrid className="mt-8" />
        <h3 className="mt-12 font-display text-[1.3rem] font-bold">Cam kết dịch vụ</h3>
        <CommitmentTable className="mt-4" />
        <h3 className="mt-12 font-display text-[1.3rem] font-bold">Hình ảnh dự án</h3>
        <ProjectGallery variant="row" limit={6} className="mt-5" />
      </section>

      {/* faq */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center font-display text-[1.9rem] font-bold tracking-[-0.03em] sm:text-[2.4rem]">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-10">
          <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-accent px-8 py-16 text-center text-accentfg sm:px-16">
          <AirflowArcs className="absolute -left-16 -top-16 h-56 w-56 opacity-15" accent="currentColor" />
          <h2 className="relative font-display text-[2rem] font-bold leading-tight tracking-[-0.03em] sm:text-[2.8rem]">
            Bắt đầu bằng một cuộc khảo sát miễn phí.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed opacity-85">
            Gửi bản vẽ công trình — chúng tôi phản hồi trong 24 giờ làm việc.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${company.hotline.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-accentfg px-7 py-3.5 text-[0.88rem] font-semibold text-accent transition-opacity hover:opacity-85"
            >
              <Phone className="h-4 w-4" />
              {company.hotline}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-accentfg/35 px-7 py-3.5 text-[0.88rem] font-semibold text-accentfg transition-colors hover:bg-accentfg/10"
            >
              <Mail className="h-4 w-4" />
              {company.email}
            </a>
          </div>
          <p className="relative mt-8 text-[0.8rem] opacity-70">
            {company.address} · {company.workingHours}
          </p>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-fg hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
