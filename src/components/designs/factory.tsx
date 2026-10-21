import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  faqs,
  highlights,
  partners,
  process,
  projects,
  services,
  stats,
  team,
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

export default function FactoryDesign() {
  return (
    <div className="theme-factory min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[1rem] font-extrabold tracking-tight">AEROTECH</span>
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
            className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-[0.83rem] font-extrabold text-accentfg"
          >
            Báo giá
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-accent">
                Nhà máy · Nhà xưởng · Tòa nhà
              </p>
              <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[4.4rem]">
                HỆ THỐNG
                <br />
                ĐIỀU HOÀ
                <br />
                <span className="text-accent">KHÔNG GIỚI HẠN</span>
              </h1>
              <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-muted">
                {company.subline}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-[0.88rem] font-extrabold text-accentfg transition-transform hover:-translate-y-0.5"
                >
                  Nhận báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 border border-line px-6 py-3.5 text-[0.88rem] font-bold transition-colors hover:border-accent hover:text-accent"
                >
                  Dự án
                </a>
              </div>
            </div>

            <BracketFrame>
              <MediaFrame
                src={img.factoryCooling}
                alt="Nhà máy công nghiệp với hệ thống làm mát"
                ratio="aspect-[4/3]"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </BracketFrame>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-canvas p-5">
                <p className="font-display text-[1.9rem] font-extrabold leading-none text-accent">
                  {s.value}
                  <span className="ml-1 text-[0.75rem] text-muted">{s.unit}</span>
                </p>
                <p className="mt-2 text-[0.76rem] leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-accent">
                01 — Năng lực
              </p>
              <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[2.8rem]">
                Chúng tôi không thuê ngoài. Tất cả là của công ty.
              </h2>
              <p className="mt-5 text-[0.94rem] leading-relaxed text-muted">
                {company.legalName} thực hiện trọn chuỗi EPCI trọn gói. Hồ sơ hoàn công, biên bản
                nghiệm thu và chương trình bảo hành rõ ràng cho từng hạng mục.
              </p>
              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="bg-surface2 px-4 py-3 text-[0.82rem] leading-relaxed text-muted">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <BracketFrame className="sm:col-span-2">
                <MediaFrame
                  src={img.plantInterior}
                  alt="Thi công trong nhà xưởng"
                  ratio="aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </BracketFrame>
              {team.slice(0, 4).map((m) => (
                <div key={m.name} className="border border-line p-4">
                  <p className="text-[0.85rem] font-bold leading-tight">{m.name}</p>
                  <p className="mt-1 text-[0.75rem] text-accent">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
          <WhyUsGrid className="mt-12" />
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-accent">
            02 — Dịch vụ
          </p>
          <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.035em] sm:text-[2.6rem]">
            8 nhóm dịch vụ trọn gói
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="bg-canvas p-5">
                <span className="font-display text-[0.8rem] font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[1.02rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </article>
            ))}
          </div>
          <SectorGallery className="mt-4" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-accent">
              03 — Dự án
            </p>
            <span className="text-[0.84rem] text-muted">{projects.length} dự án tiêu biểu</span>
          </div>
          <ProjectGallery variant="mosaic" limit={7} className="mt-8" />
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-accent">
            04 — Quy trình
          </p>
          <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.035em] sm:text-[2.6rem]">
            6 bước, cam kết bằng hợp đồng
          </h2>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="bg-canvas p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[1.6rem] font-extrabold leading-none text-accent">
                    {s.step}
                  </span>
                  <span className="text-[0.74rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-3 font-display text-[1rem] font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
          <CommitmentTable className="mt-8" />
        </div>
      </section>

      {/* trust + faq */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-accent">
              05 — Đối tác
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {clients.map((c) => (
                <div key={c} className="bg-surface2 px-4 py-3 text-[0.82rem] font-bold">
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.8rem] leading-relaxed text-muted">
              Thiết bị: {partners.join(" · ")}
            </p>
          </div>
          <div>
            <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-accent">
              06 — Hỏi đáp
            </p>
            <div className="mt-4">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="scroll-mt-24 bg-accent">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-accentfg">
            <p className="text-[0.74rem] font-extrabold uppercase tracking-[0.2em] opacity-70">
              07 — Bắt đầu
            </p>
            <h2 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[3.2rem]">
              GỬI HỒ SƠ —
              <br />
              NHẬN BÁO GIÁ
              <br />
              TRONG 24 GIỜ
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-accentfg px-6 py-3.5 text-[0.88rem] font-extrabold text-accent"
              >
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 border border-accentfg/35 px-6 py-3.5 text-[0.88rem] font-bold text-accentfg"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
          </div>
          <div className="border border-accentfg/25 p-7 text-accentfg">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] opacity-70">Trụ sở</p>
            <p className="mt-3 text-[0.88rem] leading-relaxed opacity-85">{company.address}</p>
            <p className="mt-5 text-[0.82rem] opacity-75">{company.workingHours}</p>
            <a
              href="#du-an"
              className="mt-6 inline-flex items-center gap-2 text-[0.84rem] font-bold"
            >
              <Download className="h-4 w-4" />
              Xem hồ sơ dự án
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-bold text-fg hover:text-accent">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
