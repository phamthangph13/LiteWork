import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
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
import { LogoMark } from "@/components/visuals";

export default function CodexDesign() {
  return (
    <div className="theme-codex min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-fg" />
            <span className="font-display text-[0.95rem] font-bold tracking-tight">{company.brand}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden text-[0.78rem] text-muted md:inline">{company.addressShort}</span>
            <a
              href={`tel:${company.hotline.replace(/\s/g, "")}`}
              className="rounded-full bg-fg px-4 py-2 text-[0.8rem] font-semibold text-canvas transition-opacity hover:opacity-80"
            >
              {company.hotline}
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <div className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
            <span className="h-2 w-2 rounded-full bg-fg" />
            Hồ sơ năng lực — {company.founded}–2026
          </div>

          <h1 className="mt-8 font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[4.2rem]">
            Điều hoà không khí
            <br />
            cho công trình,
            <br />
            <span className="text-muted">thương mại và công nghiệp.</span>
          </h1>

          <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="max-w-xl text-[1rem] leading-relaxed text-muted">{company.subline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-canvas transition-opacity hover:opacity-80"
                >
                  Nhận báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface2"
                >
                  Dự án tiêu biểu
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden border border-line bg-surface2">
              <MediaFrame
                src={img.hvacSpiralDuct}
                alt="Đường ống gió spiral trong tòa nhà thương mại do AEROTECH thi công"
                ratio="aspect-[4/3]"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                imgClassName="grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 border-t border-line bg-canvas p-4">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                  Hình ảnh thực tế tại công trường
                </p>
                <p className="mt-1 font-display text-[0.95rem] font-bold">
                  Tòa nhà thương mại — hệ thống đường ống gió
                </p>
              </div>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-none border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-canvas p-5">
                <dt className="font-display text-[1.8rem] font-bold leading-none">
                  {s.value}
                  <span className="ml-1 text-[0.8rem] font-semibold text-muted">{s.unit}</span>
                </dt>
                <dd className="mt-2 text-[0.74rem] leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* capability index */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-baseline gap-6 border-b border-line pb-5">
            <span className="font-mono text-[0.78rem] text-muted">01</span>
            <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Năng lực
            </h2>
            <span className="ml-auto hidden text-[0.78rem] text-muted sm:inline">
              {highlights.length} cam kết
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[0.95rem] leading-relaxed text-muted">
                {company.legalName} là tổng thầu thiết kế, cung cấp và thi công hệ thống điều hoà
                không khí &amp; thông gió. Toàn bộ khối lượng thi công do đội của công ty thực hiện.
              </p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {highlights.map((h, i) => (
                  <li key={h} className="flex items-start gap-4 py-3.5">
                    <span className="font-mono text-[0.72rem] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.88rem] leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="border border-line">
                <MediaFrame
                  src={img.plantInterior}
                  alt="Thi công hệ thống điều hoà trong nhà xưởng"
                  ratio="aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {team.slice(0, 4).map((m) => (
                  <div key={m.name} className="border border-line p-4">
                    <p className="text-[0.85rem] font-semibold leading-tight">{m.name}</p>
                    <p className="mt-1 text-[0.75rem] text-muted">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-baseline gap-6 border-b border-line pb-5">
            <span className="font-mono text-[0.78rem] text-muted">02</span>
            <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Dịch vụ
            </h2>
          </div>

          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="bg-canvas p-6">
                <div className="flex items-center justify-between">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                  <span className="font-mono text-[0.7rem] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[1rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="text-[0.76rem] text-muted">
                      — {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* sectors */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-baseline gap-6 border-b border-line pb-5">
            <span className="font-mono text-[0.78rem] text-muted">03</span>
            <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Ngành nghề
            </h2>
          </div>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <li key={s.name} className="flex items-center gap-3 bg-canvas px-5 py-5">
                <SectorIcon name={s.icon} className="h-4 w-4 text-muted" />
                <span className="text-[0.86rem] font-medium">{s.name}</span>
              </li>
            ))}
          </ul>

          <SectorGallery className="mt-8" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-baseline gap-6 border-b border-line pb-5">
            <span className="font-mono text-[0.78rem] text-muted">04</span>
            <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Dự án tiêu biểu
            </h2>
            <span className="ml-auto text-[0.78rem] text-muted">{projects.length} / 480 dự án</span>
          </div>

          <div className="mt-8 divide-y divide-line border-y border-line">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group grid gap-3 py-6 transition-colors sm:grid-cols-[90px_1.3fr_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-[0.78rem] text-muted">{p.year}</span>
                <div>
                  <h3 className="font-display text-[1.05rem] font-bold leading-snug">{p.name}</h3>
                  <p className="mt-1 text-[0.76rem] text-muted">
                    {p.category} · {p.location}
                  </p>
                </div>
                <p className="text-[0.8rem] leading-relaxed text-muted">{p.scope}</p>
                <span className="justify-self-start rounded-full border border-line px-3 py-1.5 text-[0.72rem] font-medium text-muted sm:justify-self-end">
                  {p.scale}
                </span>
              </article>
            ))}
          </div>

          <h3 className="mt-14 font-mono text-[0.8rem] uppercase tracking-[0.16em] text-muted">
            Hình ảnh thực tế tại công trường
          </h3>
          <ProjectGallery variant="list" limit={6} className="mt-5" />
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-baseline gap-6 border-b border-line pb-5">
            <span className="font-mono text-[0.78rem] text-muted">05</span>
            <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Quy trình
            </h2>
          </div>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="border-t-2 border-fg pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.78rem]">{s.step}</span>
                  <span className="text-[0.72rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-3 font-display text-[1rem] font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* clients + certificates */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-2">
          <div>
            <div className="flex items-baseline gap-6 border-b border-line pb-5">
              <span className="font-mono text-[0.78rem] text-muted">06</span>
              <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em]">Đối tác</h2>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-px bg-line">
              {clients.map((c) => (
                <div key={c} className="bg-canvas px-4 py-5 text-[0.8rem] font-semibold">
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-6 text-[0.8rem] text-muted">
              Thiết bị chính hãng: {partners.join(" · ")}
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-6 border-b border-line pb-5">
              <span className="font-mono text-[0.78rem] text-muted">07</span>
              <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em]">Chứng chỉ</h2>
            </div>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-[0.88rem] font-semibold">{c.title}</span>
                  <span className="text-[0.78rem] text-muted">{c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* why us + sla */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-baseline gap-6 border-b border-line pb-5">
            <span className="font-mono text-[0.78rem] text-muted">09</span>
            <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Lý do chọn AEROTECH
            </h2>
          </div>
          <WhyUsGrid className="mt-10" />

          <h3 className="mt-14 font-mono text-[0.8rem] uppercase tracking-[0.16em] text-muted">
            Cam kết dịch vụ (SLA)
          </h3>
          <CommitmentTable className="mt-5" />
        </div>
      </section>

      {/* faq */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-baseline gap-6 border-b border-line pb-5">
            <span className="font-mono text-[0.78rem] text-muted">08</span>
            <h2 className="font-display text-[1.6rem] font-bold tracking-[-0.02em]">Câu hỏi</h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={faqs} questionClassName="hover:opacity-70" answerClassName="text-muted" />
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="lien-he" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="border border-line p-8 sm:p-12">
            <h2 className="font-display text-[2rem] font-bold leading-tight tracking-[-0.03em] sm:text-[2.8rem]">
              Bắt đầu bằng một
              <br />
              bản vẽ công trình.
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              Gửi hồ sơ để nhận phương án thiết kế và báo giá chi tiết trong 7 ngày làm việc.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">Hotline</p>
                <a
                  href={`tel:${company.hotline.replace(/\s/g, "")}`}
                  className="mt-2 flex items-center gap-2 font-display text-[1.1rem] font-bold"
                >
                  <Phone className="h-4 w-4" />
                  {company.hotline}
                </a>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 flex items-center gap-2 font-display text-[1.1rem] font-bold"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">Tài liệu</p>
                <span className="mt-2 flex items-center gap-2 font-display text-[1.1rem] font-bold">
                  <Download className="h-4 w-4" />
                  Hồ sơ năng lực
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName} · {company.address}</p>
          <Link href="/" className="font-semibold text-fg hover:underline">
            Quay lại thư viện mẫu →
          </Link>
        </div>
      </footer>
    </div>
  );
}
