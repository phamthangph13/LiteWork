import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  faqs,
  process,
  projects,
  sectors,
  services,
  stats,
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import {
  CommitmentTable,
  MediaFrame,
  WhyUsGrid,
} from "@/components/designs/sections";
import { projectImages, sectorImages } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function HorizonDesign() {
  return (
    <div className="theme-horizon min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line bg-canvas/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[0.98rem] font-bold tracking-tight">AEROTECH</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#dich-vu" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-fg">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="rounded-full bg-accent px-5 py-2.5 text-[0.83rem] font-bold text-accentfg"
          >
            Nhận báo giá
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.74rem] font-bold uppercase tracking-[0.2em] text-accent">
            Điều hoà không khí · Thông gió · EPC
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[3.6rem]">
            Trải ngang mọi ngành — một chuẩn kỹ thuật duy nhất.
          </h1>
          <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-muted">{company.subline}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#du-an"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[0.87rem] font-bold text-accentfg"
            >
              Xem dự án
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="inline-flex items-center gap-2 text-[0.8rem] text-muted">
              <ArrowLeft className="h-4 w-4" />
              Vuốt ngang để xem thêm
            </span>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.slice(0, 4).map((s) => (
              <div key={s.label} className="rounded-[18px] border border-line bg-surface p-5">
                <dt className="font-display text-[1.6rem] font-extrabold leading-none text-accent">
                  {s.value}
                  <span className="ml-0.5 text-[0.75rem] text-muted">{s.unit}</span>
                </dt>
                <dd className="mt-1.5 text-[0.78rem] leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* horizontal sectors */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
              Ngành ứng dụng — vuốt ngang
            </h2>
            <span className="text-[0.82rem] text-muted">8 ngành · 18 tỉnh thành</span>
          </div>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
          {sectors.map((s) => (
            <article
              key={s.name}
              className="w-[78vw] shrink-0 snap-start overflow-hidden rounded-[18px] border border-line bg-surface sm:w-[420px]"
            >
              <MediaFrame
                src={sectorImages[s.icon]}
                alt={s.name}
                ratio="aspect-[16/10]"
                sizes="(max-width: 640px) 78vw, 420px"
              >
                <div className="absolute inset-x-0 bottom-0 bg-canvas/95 p-5">
                  <p className="font-display text-[1.05rem] font-bold">{s.name}</p>
                  <p className="mt-1 text-[0.8rem] text-muted">{s.detail}</p>
                </div>
              </MediaFrame>
            </article>
          ))}
          <div className="w-1 shrink-0" />
        </div>
      </section>

      {/* horizontal projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
              Dự án tiêu biểu — vuốt ngang
            </h2>
            <span className="text-[0.82rem] text-muted">{projects.length} dự án</span>
          </div>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
          {projects.slice(0, 8).map((p, i) => (
            <article
              key={p.name}
              className="w-[82vw] shrink-0 snap-start overflow-hidden rounded-[18px] border border-line bg-surface sm:w-[460px]"
            >
              <MediaFrame
                src={projectImages[i % projectImages.length]}
                alt={p.name}
                ratio="aspect-[16/10]"
                sizes="(max-width: 640px) 82vw, 460px"
              >
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-bold text-accentfg">
                  {p.category}
                </span>
              </MediaFrame>
              <div className="p-6">
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  {p.location} · {p.year}
                </p>
                <h3 className="mt-2 font-display text-[1.15rem] font-bold leading-snug">{p.name}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-muted">{p.scope}</p>
                <p className="mt-4 text-[0.82rem] font-bold text-accent">{p.scale}</p>
              </div>
            </article>
          ))}
          <div className="w-1 shrink-0" />
        </div>
      </section>

      {/* services */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
            Dịch vụ trọn gói
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-[18px] border border-line bg-canvas p-5">
                <h3 className="font-display text-[1rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </article>
            ))}
          </div>
          <WhyUsGrid className="mt-8" />
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
            Quy trình
          </h2>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {process.map((s) => (
              <article
                key={s.step}
                className="w-[78vw] shrink-0 snap-start rounded-[18px] border border-line bg-surface p-6 sm:w-[330px]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[0.78rem] font-bold text-accentfg">
                    {s.step}
                  </span>
                  <span className="text-[0.76rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-5 font-display text-[1.05rem] font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
              </article>
            ))}
            <div className="w-1 shrink-0" />
          </div>
          <CommitmentTable className="mt-6" />
        </div>
      </section>

      {/* faq + cta */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-[1.5rem] font-extrabold">Câu hỏi thường gặp</h2>
            <div className="mt-5">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
            <p className="mt-6 text-[0.82rem] leading-relaxed text-muted">
              {clients.join(" · ")}
            </p>
          </div>

          <div id="lien-he" className="scroll-mt-24 rounded-[18px] bg-accent p-8 text-accentfg">
            <h2 className="font-display text-[1.6rem] font-extrabold leading-tight">
              Nhận báo giá trong 24 giờ
            </h2>
            <p className="mt-3 text-[0.88rem] leading-relaxed opacity-85">
              Gửi bản vẽ công trình — đội kỹ sư sẽ phản hồi ngay.
            </p>
            <div className="mt-7 space-y-3">
              <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-2.5 font-bold">
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 font-bold">
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
            <p className="mt-6 text-[0.8rem] opacity-70">{company.address}</p>
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
