import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone, Sparkles, Zap } from "lucide-react";
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

export default function ContemporaryDesign() {
  return (
    <div className="theme-contemporary min-h-screen bg-canvas font-body text-fg">
      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[0.98rem] font-extrabold tracking-tight">{company.brand}</span>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.84rem] font-medium text-muted transition-colors hover:text-fg">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-[0.82rem] font-bold text-accentfg transition-transform hover:-translate-y-0.5"
          >
            Báo giá
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* bento hero */}
      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="grid gap-3 lg:grid-cols-4">
          <div className="flex flex-col justify-between rounded-[24px] bg-fg p-8 lg:col-span-3">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-[0.72rem] font-bold text-accentfg">
                <Zap className="h-3.5 w-3.5" />
                Từ {company.founded}
              </span>
              <h1 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-[3.2rem]">
                Làm mát
                <br />
                mọi công trình
                <br />
                <span className="text-accent">một cách chuẩn mực.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[0.96rem] leading-relaxed text-muted">{company.subline}</p>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[0.88rem] font-bold text-accentfg transition-transform hover:-translate-y-0.5"
              >
                Nhận báo giá
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#du-an"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[0.88rem] font-semibold transition-colors hover:bg-surface2"
              >
                Dự án
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="relative flex-1 overflow-hidden rounded-[24px] bg-accent text-accentfg">
              <MediaFrame
                src={img.plantInterior}
                alt="Thi công hệ thống điều hoà trong nhà xưởng"
                ratio="absolute inset-0 h-full w-full"
                sizes="(max-width: 1024px) 100vw, 30vw"
                imgClassName="opacity-30"
              />
              <div className="relative p-7">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] opacity-70">
                  Diện tích
                </p>
                <p className="mt-1 font-display text-[2.4rem] font-extrabold leading-none">2.4M m²</p>
                <p className="mt-1 text-[0.8rem] opacity-80">đã được điều hoà</p>
              </div>
            </div>
            <div className="flex-1 rounded-[24px] bg-surface p-7">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">
                Cam kết
              </p>
              <ul className="mt-3 space-y-2.5">
                {highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-2 text-[0.8rem] leading-snug text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.slice(0, 4).map((s) => (
            <div key={s.label} className="rounded-[24px] bg-surface p-6">
              <p className="font-display text-[2rem] font-extrabold leading-none tracking-[-0.03em]">
                {s.value}
                <span className="ml-1 text-[0.82rem] text-accent">{s.unit}</span>
              </p>
              <p className="mt-2 text-[0.8rem] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* capability bento */}
      <section id="nang-luc" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.035em] sm:text-[2.7rem]">
            Năng lực của chúng tôi
          </h2>
          <span className="text-[0.85rem] text-muted">Một đầu mối · Trọn gói EPCI</span>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-4">
          <div className="rounded-[24px] bg-surface p-8 lg:col-span-2">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">Về AEROTECH</p>
            <h3 className="mt-4 font-display text-[1.6rem] font-extrabold leading-tight tracking-[-0.025em]">
              16 năm làm đúng một việc: làm mát công trình.
            </h3>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
              {company.legalName} thực hiện trọn chuỗi EPCI — khảo sát, thiết kế, dự toán, cung cấp
              thiết bị chính hãng, thi công, vận hành thử, nghiệm thu và bảo trì dài hạn. Không phát
              sinh ngoài dự toán.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {highlights.slice(3).map((h) => (
                <div key={h} className="rounded-2xl bg-surface2 px-4 py-3.5 text-[0.8rem] leading-relaxed text-muted">
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] bg-surface2">
            <MediaFrame
              src={img.hvacAhu}
              alt="Hệ thống AHU"
              ratio="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <div className="p-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">Thiết bị</p>
              <p className="mt-4 text-[0.85rem] font-bold">Chiller tới 3.500 tấn lạnh</p>
              <p className="mt-1 text-[0.78rem] text-muted">
                Nhập khẩu trực tiếp, tem &amp; bảo hành đầy đủ
              </p>
            </div>
          </div>

          <div className="rounded-[24px] bg-accentsoft p-8">
            <Sparkles className="h-5 w-5 text-accent" />
            <p className="mt-5 font-display text-[3rem] font-extrabold leading-none text-accent">320+</p>
            <p className="mt-2 text-[0.85rem] font-semibold">Kỹ sư &amp; kỹ thuật viên</p>
            <p className="mt-4 text-[0.8rem] leading-relaxed text-muted">
              18 tỉnh thành có đội lưu trú, phản hồi sự cố trong 24 giờ.
            </p>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16">
        <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.035em] sm:text-[2.7rem]">
          Dịch vụ
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`rounded-[24px] p-6 transition-transform hover:-translate-y-1 ${
                i % 2 === 0 ? "bg-surface" : "bg-surface2"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accentfg">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="text-[0.72rem] font-bold text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-[1.05rem] font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex gap-2 text-[0.78rem] text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
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
              className="inline-flex items-center gap-2 rounded-full bg-surface2 px-4 py-2 text-[0.8rem] font-medium text-muted"
            >
              <SectorIcon name={s.icon} className="h-3.5 w-3.5 text-accent" />
              {s.name}
            </span>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.035em] sm:text-[2.7rem]">
              Dự án tiêu biểu
            </h2>
            <span className="text-[0.85rem] text-muted">{projects.length} dự án nổi bật</span>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <article
                key={p.name}
                className={`rounded-[24px] p-7 ${i === 0 ? "bg-accent text-accentfg lg:row-span-2" : "bg-canvas"}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide ${
                      i === 0 ? "bg-canvas/15" : "bg-accentsoft text-accent"
                    }`}
                  >
                    {p.category}
                  </span>
                  <span className={`text-[0.75rem] ${i === 0 ? "opacity-70" : "text-muted"}`}>{p.year}</span>
                </div>
                <h3 className="mt-5 font-display text-[1.35rem] font-extrabold leading-snug">{p.name}</h3>
                <p className={`mt-2 text-[0.85rem] leading-relaxed ${i === 0 ? "opacity-85" : "text-muted"}`}>
                  {p.scope}
                </p>
                <div className={`mt-6 overflow-hidden rounded-2xl ${i === 0 ? "bg-canvas/10" : "bg-surface2"}`}>
                  <MediaFrame
                    src={img.hvacAhu}
                    alt={p.name}
                    ratio="aspect-[16/9]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <p className={`mt-5 text-[0.8rem] font-bold ${i === 0 ? "opacity-85" : "text-accent"}`}>
                  {p.scale}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(3).map((p) => (
              <div key={p.name} className="rounded-[24px] bg-canvas px-6 py-5">
                <p className="text-[0.72rem] font-bold uppercase tracking-wide text-muted">
                  {p.location} · {p.year}
                </p>
                <p className="mt-2 font-display text-[1rem] font-bold leading-snug">{p.name}</p>
                <p className="mt-1.5 text-[0.78rem] text-muted">{p.scale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.035em] sm:text-[2.7rem]">
          Ngành ứng dụng
        </h2>
        <SectorGallery className="mt-8" />
      </section>

      {/* process */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.035em] sm:text-[2.7rem]">
          Quy trình
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((s) => (
            <div key={s.step} className="rounded-[24px] border border-line p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[0.78rem] font-extrabold text-accentfg">
                  {s.step}
                </span>
                <span className="text-[0.75rem] text-muted">{s.duration}</span>
              </div>
              <h3 className="mt-5 font-display text-[1.05rem] font-bold">{s.title}</h3>
              <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team + trust */}
      <section className="bg-surface2">
        <div className="mx-auto grid max-w-6xl gap-3 px-5 py-16 lg:grid-cols-3">
          <div className="rounded-[24px] bg-canvas p-8 lg:col-span-2">
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.025em]">Đội ngũ điều hành</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {team.map((m) => (
                <div key={m.name} className="rounded-2xl bg-surface2 p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-display text-[0.78rem] font-extrabold text-accentfg">
                      {m.name
                        .split(" ")
                        .slice(-2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-[0.88rem] font-bold leading-tight">{m.name}</p>
                      <p className="text-[0.76rem] text-accent">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[0.78rem] leading-relaxed text-muted">{m.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-[24px] bg-accentsoft p-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-accent">
                Chứng chỉ
              </p>
              <ul className="mt-4 space-y-2">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-baseline justify-between gap-3 text-[0.8rem]">
                    <span className="font-semibold">{c.title}</span>
                    <span className="text-[0.72rem] text-muted">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] bg-canvas p-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">
                Đối tác &amp; khách hàng
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {partners.map((p) => (
                  <span key={p} className="rounded-lg bg-surface2 px-2.5 py-1.5 text-[0.72rem] font-bold text-muted">
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-muted">{clients.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.035em] sm:text-[2.7rem]">
          Vì sao chủ đầu tư chọn AEROTECH
        </h2>
        <WhyUsGrid className="mt-8" />
        <h3 className="mt-12 font-display text-[1.4rem] font-extrabold">Hình ảnh dự án</h3>
        <ProjectGallery variant="mosaic" limit={6} className="mt-5" />
      </section>

      {/* faq */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center font-display text-[1.9rem] font-extrabold tracking-[-0.035em] sm:text-[2.5rem]">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-8">
          <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-[24px] bg-accent p-9 text-accentfg lg:col-span-2">
            <h2 className="font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.5rem]">
              Nhận báo giá trong 24 giờ.
            </h2>
            <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed opacity-85">
              Gửi bản vẽ công trình và yêu cầu vận hành — kỹ sư phụ trách sẽ phản hồi ngay.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-accentfg px-5 py-3 text-[0.86rem] font-bold text-accent transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-canvas/15 px-5 py-3 text-[0.86rem] font-bold text-accentfg transition-colors hover:bg-canvas/25"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
          </div>
          <div className="rounded-[24px] bg-surface p-8">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">Trụ sở</p>
            <p className="mt-3 text-[0.86rem] leading-relaxed text-muted">{company.address}</p>
            <p className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">
              Giờ làm việc
            </p>
            <p className="mt-2 text-[0.84rem] text-muted">{company.workingHours}</p>
          </div>
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
