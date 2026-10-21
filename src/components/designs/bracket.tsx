import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  documents,
  faqs,
  highlights,
  partners,
  process,
  projects,
  services,
  stats,
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import { BracketFrame, BracketMenu } from "@/components/designs/navs";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function BracketDesign() {
  return (
    <div className="theme-bracket min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[0.95rem] font-extrabold tracking-tight">AEROTECH</p>
              <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                M&amp;E / HVAC / EPC
              </p>
            </div>
          </div>
          <BracketMenu
            className="hidden md:flex"
            items={[
              { label: "Năng lực", href: "#nang-luc" },
              { label: "Dịch vụ", href: "#dich-vu" },
              { label: "Dự án", href: "#du-an" },
              { label: "Quy trình", href: "#quy-trinh" },
            ]}
          />
          <a
            href="#lien-he"
            className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[0.78rem] font-bold text-accentfg"
          >
            GET_QUOTE
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
                {"// Hồ sơ năng lực 2026"}
              </p>
              <h1 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-[3.2rem]">
                Hệ thống HVAC
                <br />
                cho công trình
                <br />
                <span className="text-accent">công nghiệp</span>
              </h1>
              <p className="mt-6 max-w-xl text-[0.92rem] leading-relaxed text-muted">
                {company.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[0.82rem] font-bold text-accentfg"
                >
                  khởi-tạo dự án
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[0.82rem] font-bold transition-colors hover:border-accent hover:text-accent"
                >
                  xem danh mục
                </a>
              </div>
            </div>

            <BracketFrame>
              <MediaFrame
                src={img.hvacAhu}
                alt="Hệ thống AHU đang lắp đặt"
                ratio="aspect-[4/3]"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute -bottom-5 left-5 bg-accent px-3 py-1.5 font-mono text-[0.7rem] font-bold text-accentfg">
                AHU-2400 / DUCT
              </div>
            </BracketFrame>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-canvas p-4">
                <dt className="font-display text-[1.4rem] font-extrabold leading-none text-accent">
                  {s.value}
                  <span className="ml-0.5 text-[0.7rem] text-muted">{s.unit}</span>
                </dt>
                <dd className="mt-1.5 text-[0.72rem] leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-4 border-b border-line pb-4">
            <span className="font-mono text-[0.78rem] text-accent">01</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Năng lực
            </h2>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.92rem] leading-relaxed text-muted">
                {company.legalName} thực hiện trọn chuỗi EPCI: khảo sát → thiết kế → dự toán →
                cung cấp thiết bị → thi công → nghiệm thu → bảo trì. Không phát sinh ngoài dự
                toán.
              </p>
              <ul className="mt-7 grid gap-px bg-line sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="bg-canvas px-4 py-3.5 text-[0.84rem] leading-relaxed text-muted">
                    <span className="text-accent">+</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <BracketFrame className="sm:col-span-2">
                <MediaFrame
                  src={img.plantInterior}
                  alt="Thi công trong nhà xưởng"
                  ratio="aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </BracketFrame>
              <div className="border border-line p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  Team
                </p>
                <p className="mt-2 font-display text-[1.3rem] font-extrabold text-accent">320+</p>
                <p className="text-[0.76rem] text-muted">kỹ sư &amp; kỹ thuật viên</p>
              </div>
              <div className="border border-line p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                  Coverage
                </p>
                <p className="mt-2 font-display text-[1.3rem] font-extrabold text-accent">18</p>
                <p className="text-[0.76rem] text-muted">tỉnh thành triển khai</p>
              </div>
            </div>
          </div>

          <WhyUsGrid className="mt-12" />
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-4 border-b border-line pb-4">
            <span className="font-mono text-[0.78rem] text-accent">02</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Dịch vụ
            </h2>
          </div>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="bg-canvas p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] text-accent">
                    mod_{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[0.68rem] text-muted">{s.points.length} items</span>
                </div>
                <h3 className="mt-4 font-display text-[0.98rem] font-extrabold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
              </article>
            ))}
          </div>
          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-4 border-b border-line pb-4">
            <span className="font-mono text-[0.78rem] text-accent">03</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Dự án
            </h2>
            <span className="ml-auto font-mono text-[0.72rem] text-muted">
              {projects.length}/480
            </span>
          </div>
          <ProjectGallery variant="mosaic" limit={6} className="mt-8" />
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-baseline gap-4 border-b border-line pb-4">
            <span className="font-mono text-[0.78rem] text-accent">04</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Pipeline
            </h2>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="border border-line p-5">
                <div className="flex items-center justify-between font-mono text-[0.7rem]">
                  <span className="text-accent">STEP {s.step}</span>
                  <span className="text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-3 font-display text-[0.98rem] font-extrabold">{s.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 font-mono text-[0.78rem] uppercase tracking-[0.16em] text-muted">
            {"// SLA"}
          </h3>
          <CommitmentTable className="mt-4" />
        </div>
      </section>

      {/* docs + clients */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <div className="flex items-baseline gap-4 border-b border-line pb-4">
              <span className="font-mono text-[0.78rem] text-accent">05</span>
              <h2 className="font-display text-[1.4rem] font-extrabold">Tài liệu</h2>
            </div>
            <ul className="mt-4">
              {documents.map((d) => (
                <li key={d.name} className="flex items-center justify-between gap-4 border-b border-line py-3.5">
                  <div>
                    <p className="text-[0.88rem] font-bold">{d.name}</p>
                    <p className="font-mono text-[0.72rem] text-muted">{d.type}</p>
                  </div>
                  <Download className="h-4 w-4 text-accent" />
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[0.74rem] leading-relaxed text-muted">
              vendors: {partners.join(" | ")}
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-4 border-b border-line pb-4">
              <span className="font-mono text-[0.78rem] text-accent">06</span>
              <h2 className="font-display text-[1.4rem] font-extrabold">Đối tác</h2>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-px bg-line">
              {clients.map((c) => (
                <div key={c} className="bg-canvas px-4 py-3.5 font-mono text-[0.78rem]">
                  {c}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-mono text-[0.74rem] uppercase tracking-[0.16em] text-muted">
                {"// FAQ"}
              </h3>
              <div className="mt-3">
                <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="lien-he" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <BracketFrame>
            <div className="bg-accent p-8 text-accentfg">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] opacity-70">
                07 / Khởi tạo dự án
              </p>
              <h2 className="mt-4 font-display text-[1.8rem] font-extrabold leading-tight sm:text-[2.4rem]">
                Gửi hồ sơ — nhận phương án trong 24 giờ
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.hotline.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-accentfg px-5 py-3 font-mono text-[0.82rem] font-bold text-accent"
                >
                  <Phone className="h-4 w-4" />
                  {company.hotline}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 border border-accentfg/35 px-5 py-3 font-mono text-[0.82rem] font-bold text-accentfg"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
              <p className="mt-6 font-mono text-[0.76rem] leading-relaxed opacity-80">
                {company.address}
              </p>
            </div>
          </BracketFrame>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 font-mono text-[0.72rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="text-accent hover:underline">
            cd /thu-vien-mau →
          </Link>
        </div>
      </footer>
    </div>
  );
}
