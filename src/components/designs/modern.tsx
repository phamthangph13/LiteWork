import Link from "next/link";
import { ArrowDown, ArrowRight, Mail, Phone } from "lucide-react";
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
import { AirflowArcs, LogoMark } from "@/components/visuals";

export default function ModernDesign() {
  return (
    <div className="theme-modern min-h-screen bg-canvas font-body text-fg">
      {/* nav */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[1.05rem] font-semibold italic">{company.brand}</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {["Hồ sơ", "Dịch vụ", "Dự án", "Đội ngũ", "Liên hệ"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.8rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent">
                {i}
              </a>
            ))}
          </nav>
          <a href="#lien-he" className="text-[0.82rem] font-semibold text-accent underline underline-offset-4">
            Liên hệ
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Công ty cổ phần · Điều hoà không khí &amp; thông gió
              </p>
              <h1 className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[4rem]">
                Không gian mát mẻ
                <br />
                <span className="italic text-accent">cho mọi công trình.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[1rem] leading-[1.75] text-muted">{company.subline}</p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 bg-fg px-6 py-3.5 text-[0.85rem] font-semibold text-canvas transition-opacity hover:opacity-85"
                >
                  Nhận báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#gioi-thieu" className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-fg">
                  <ArrowDown className="h-4 w-4" />
                  Xem hồ sơ năng lực
                </a>
              </div>
            </div>

            <div className="relative">
              <MediaFrame
                src={img.hvacSpiralDuct}
                alt="Hệ thống đường ống gió trong tòa nhà thương mại"
                ratio="aspect-4/5"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute -bottom-6 -left-4 w-44 bg-fg p-5 text-canvas">
                <p className="font-display text-[2.4rem] font-semibold leading-none">16</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] opacity-70">
                  năm trong ngành
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* statement */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-display text-[1.7rem] font-normal leading-[1.45] tracking-[-0.01em] sm:text-[2.4rem]">
            “Chúng tôi không bán thiết bị. Chúng tôi cam kết một công trình vận hành ổn định,
            <span className="italic text-accent"> tiết kiệm năng lượng </span>
            và có hồ sơ hoàn công đầy đủ.”
          </p>
          <p className="mt-6 text-[0.78rem] uppercase tracking-[0.18em] text-muted">
            Nguyễn Văn Hùng — Giám đốc điều hành
          </p>
        </div>
      </section>

      {/* about */}
      <section id="gioi-thieu" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Hồ sơ năng lực
            </p>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
              Một đầu mối, trọn gói trách nhiệm.
            </h2>
            <p className="mt-6 text-[0.95rem] leading-[1.8] text-muted">
              {company.legalName} thành lập năm {company.founded}. Chúng tôi thực hiện trọn chuỗi
              EPCI — khảo sát, thiết kế, dự toán, cung cấp thiết bị, thi công, vận hành thử, nghiệm
              thu và bảo trì. Toàn bộ khối lượng thi công do đội của công ty đảm nhận.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
              {stats.slice(0, 6).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[2rem] font-semibold leading-none">
                    {s.value}
                    <span className="ml-1 text-[0.85rem] text-accent">{s.unit}</span>
                  </p>
                  <p className="mt-2 text-[0.78rem] leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ul className="space-y-5">
              {highlights.map((h, i) => (
                <li key={h} className="flex gap-5 border-b border-line pb-5">
                  <span className="font-display text-[0.95rem] italic text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  Ban điều hành
                </p>
                <ul className="mt-4 space-y-3">
                  {team.slice(0, 4).map((m) => (
                    <li key={m.name}>
                      <p className="text-[0.9rem] font-semibold">{m.name}</p>
                      <p className="text-[0.78rem] text-muted">
                        {m.role} · {m.experience}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  Chứng chỉ
                </p>
                <ul className="mt-4 space-y-2">
                  {certifications.map((c) => (
                    <li key={c.title} className="flex items-baseline justify-between gap-3 border-b border-line pb-2">
                      <span className="text-[0.86rem] font-medium">{c.title}</span>
                      <span className="text-[0.72rem] text-muted">{c.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[2rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
              Dịch vụ
            </h2>
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-muted">
              Tám nhóm dịch vụ, một đầu mối liên lạc, một báo giá duy nhất.
            </p>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="grid gap-4 py-7 sm:grid-cols-[70px_1.1fr_1fr] sm:items-center lg:grid-cols-[70px_1fr_1fr_120px]"
              >
                <span className="font-display text-[0.9rem] italic text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-accent">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="font-display text-[1.15rem] font-semibold leading-snug">{s.title}</h3>
                </div>
                <p className="text-[0.88rem] leading-relaxed text-muted">{s.description}</p>
                <span className="hidden text-[0.78rem] leading-relaxed text-muted lg:block">
                  {s.points[0]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className="flex items-center gap-3 border border-line px-4 py-3.5">
                <SectorIcon name={s.icon} className="h-4 w-4 text-accent" />
                <span className="text-[0.85rem] font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-[1.7rem] font-semibold tracking-[-0.02em] sm:text-[2.2rem]">
            Chúng tôi phục vụ ngành nào
          </h2>
          <SectorGallery className="mt-8" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-20 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[2rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
              Dự án tiêu biểu
            </h2>
            <span className="text-[0.8rem] uppercase tracking-[0.16em] text-muted">
              {projects.length} dự án tiêu biểu / 480 dự án
            </span>
          </div>

          <div className="mt-12 space-y-px bg-line">
            {projects.slice(0, 6).map((p) => (
              <article
                key={p.name}
                className="group grid gap-6 bg-canvas py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div className="relative">
                  <MediaFrame
                    src={img.hvacAhu}
                    alt={p.name}
                    ratio="aspect-16/10"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <span className="absolute left-4 top-4 bg-accent px-3 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-accentfg">
                    {p.category}
                  </span>
                </div>
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                    {p.location} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-[1.5rem] font-semibold leading-snug">{p.name}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.75] text-muted">{p.scope}</p>
                  <p className="mt-5 font-display text-[0.95rem] italic text-accent">{p.scale}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(6).map((p) => (
              <div key={p.name} className="border-t border-line pt-4">
                <p className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                  {p.location} · {p.year}
                </p>
                <p className="mt-2 font-display text-[1.05rem] font-semibold leading-snug">{p.name}</p>
                <p className="mt-1.5 text-[0.8rem] text-muted">{p.scale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Vì sao chọn AEROTECH
          </p>
          <h2 className="mt-5 font-display text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
            Cam kết dành cho chủ đầu tư
          </h2>
          <WhyUsGrid className="mt-10" />
          <h3 className="mt-14 font-display text-[1.4rem] font-semibold">Hình ảnh dự án</h3>
          <ProjectGallery variant="row" limit={6} className="mt-6" />
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-[2rem] font-semibold tracking-[-0.02em] sm:text-[2.6rem]">
            Quy trình
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <div key={s.step}>
                <div className="flex items-baseline gap-3 border-b border-line pb-3">
                  <span className="font-display text-[1.1rem] italic text-accent">{s.step}</span>
                  <span className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[1.15rem] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-[1.75] text-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* partners */}
      <section className="border-b border-line bg-fg text-canvas">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.72rem] uppercase tracking-[0.22em] opacity-50">Đối tác &amp; khách hàng</p>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <p key={c} className="font-display text-[1.05rem] italic opacity-85">
                {c}
              </p>
            ))}
          </div>
          <p className="mt-10 text-[0.8rem] uppercase tracking-[0.16em] opacity-50">
            Thiết bị: {partners.join(" · ")}
          </p>
        </div>
      </section>

      {/* faq + contact */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[1.8rem] font-semibold tracking-[-0.02em] sm:text-[2.2rem]">
              Câu hỏi thường gặp
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>

          <div id="lien-he" className="scroll-mt-20 bg-surface2 p-9">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-accent">Bắt đầu</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-semibold leading-tight">
              Gửi hồ sơ, nhận phương án trong 24 giờ.
            </h2>
            <p className="mt-4 text-[0.92rem] leading-[1.75] text-muted">
              Kỹ sư phụ trách sẽ khảo sát, tính tải nhiệt và đề xuất phương án tối ưu chi phí vận
              hành dài hạn cho công trình của bạn.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="flex items-center gap-3 font-display text-[1.15rem] font-semibold transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 font-display text-[1.15rem] font-semibold transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
            <p className="mt-8 border-t border-line pt-5 text-[0.8rem] leading-relaxed text-muted">
              {company.address}
              <br />
              {company.workingHours}
            </p>
            <div className="mt-8 flex items-center gap-6 text-muted">
              <AirflowArcs className="h-20 w-20" accent="#8a3324" />
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-3 border-t border-line pt-6 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
