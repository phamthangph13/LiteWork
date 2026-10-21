import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
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
import { SideRail } from "@/components/designs/navs";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

const railItems = [
  { id: "top", label: "Tổng quan" },
  { id: "gioi-thieu", label: "Giới thiệu" },
  { id: "dich-vu", label: "Dịch vụ" },
  { id: "du-an", label: "Dự án" },
  { id: "quy-trinh", label: "Quy trình" },
  { id: "lien-he", label: "Liên hệ" },
];

export default function PortalDesign() {
  return (
    <div className="theme-portal min-h-screen bg-canvas font-body text-fg">
      <SideRail items={railItems} />

      <div className="lg:pl-16">
        {/* header */}
        <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8 text-accent" />
              <div className="leading-none">
                <p className="text-[0.95rem] font-semibold tracking-tight">AEROTECH</p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                  Hồ sơ năng lực 2026
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              {railItems.slice(1, 5).map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className="text-[0.85rem] font-medium text-muted transition-colors hover:text-accent"
                >
                  {it.label}
                </a>
              ))}
            </nav>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-[0.83rem] font-semibold text-accentfg"
            >
              Nhận báo giá
            </a>
          </div>
        </header>

        {/* hero */}
        <section id="top" className="scroll-mt-20 border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accentsoft px-3 py-1.5 text-[0.74rem] font-semibold text-accent">
                Tổng thầu HVAC · Thông gió · EPC
              </span>
              <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[3rem]">
                Hồ sơ năng lực
                <br />
                <span className="text-muted">cho chủ đầu tư</span> và đơn vị đấu thầu
              </h1>
              <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-muted">
                {company.subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.87rem] font-semibold text-accentfg"
                >
                  Yêu cầu báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-[0.87rem] font-semibold transition-colors hover:bg-surface2"
                >
                  Dự án tiêu biểu
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MediaFrame
                src={img.hvacAhu}
                alt="Hệ thống AHU"
                ratio="aspect-[4/3]"
                className="rounded-xl sm:col-span-2"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-surface p-5">
                  <p className="text-[1.5rem] font-bold leading-none text-accent">
                    {s.value}
                    <span className="ml-0.5 text-[0.72rem] text-muted">{s.unit}</span>
                  </p>
                  <p className="mt-2 text-[0.78rem] text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* about */}
        <section id="gioi-thieu" className="scroll-mt-20 border-b border-line bg-surface2">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Giới thiệu công ty</h2>
                <p className="mt-4 text-[0.94rem] leading-[1.85] text-muted">
                  {company.legalName} thành lập năm {company.founded}, hoạt động theo mô hình tổng thầu
                  EPC trọn gói với đội kỹ sư có chứng chỉ nghề. Mọi hạng mục đều có hồ sơ hoàn công,
                  biên bản nghiệm thu và chương trình bảo hành rõ ràng.
                </p>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {highlights.map((h) => (
                    <li key={h} className="rounded-lg border border-line bg-canvas px-4 py-3 text-[0.82rem] leading-relaxed text-muted">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.slice(2, 6).map((s) => (
                    <div key={s.label} className="rounded-lg border border-line bg-canvas p-4">
                      <p className="text-[1.2rem] font-bold leading-none text-accent">
                        {s.value}
                        <span className="text-[0.68rem] text-muted">{s.unit}</span>
                      </p>
                      <p className="mt-1.5 text-[0.72rem] text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-canvas p-5 sm:col-span-2">
                  <p className="text-[0.8rem] font-semibold">Ban quản lý &amp; kỹ thuật</p>
                  <div className="mt-4 divide-y divide-line">
                    {team.map((m) => (
                      <div key={m.name} className="flex items-center gap-3 py-2.5">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accentsoft text-[0.7rem] font-bold text-accent">
                          {m.name
                            .split(" ")
                            .slice(-2)
                            .map((w) => w[0])
                            .join("")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[0.85rem] font-semibold leading-tight">{m.name}</p>
                          <p className="truncate text-[0.74rem] text-muted">{m.role}</p>
                        </div>
                        <span className="shrink-0 text-[0.72rem] text-muted">{m.experience}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <MediaFrame
                  src={img.technician}
                  alt="Kỹ thuật viên bảo trì"
                  ratio="aspect-[4/3]"
                  className="rounded-xl"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <MediaFrame
                  src={img.blueprintDrafting}
                  alt="Bản vẽ thiết kế"
                  ratio="aspect-[4/3]"
                  className="rounded-xl"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            </div>
            <WhyUsGrid className="mt-12" />
          </div>
        </section>

        {/* services */}
        <section id="dich-vu" className="scroll-mt-20 border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Dịch vụ</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.id} className="rounded-xl border border-line bg-surface p-5">
                  <h3 className="text-[0.92rem] font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
                </article>
              ))}
            </div>
            <SectorGallery className="mt-6" />
          </div>
        </section>

        {/* projects */}
        <section id="du-an" className="scroll-mt-20 border-b border-line bg-surface2">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Dự án tiêu biểu</h2>
              <span className="text-[0.82rem] text-muted">{projects.length} dự án</span>
            </div>
            <ProjectGallery variant="row" limit={6} className="mt-8" />
          </div>
        </section>

        {/* process */}
        <section id="quy-trinh" className="scroll-mt-20 border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-[1.5rem] font-bold tracking-[-0.02em]">Quy trình</h2>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((s) => (
                <li key={s.step} className="rounded-xl border border-line bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[0.7rem] font-bold text-accentfg">
                      {s.step}
                    </span>
                    <span className="text-[0.74rem] text-muted">{s.duration}</span>
                  </div>
                  <h3 className="mt-4 text-[0.92rem] font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
                </li>
              ))}
            </ol>
            <CommitmentTable className="mt-8" />
          </div>
        </section>

        {/* faq + contact */}
        <section className="border-b border-line bg-surface2">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-[1.3rem] font-bold">Câu hỏi thường gặp</h2>
              <div className="mt-4">
                <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
              </div>
              <p className="mt-6 text-[0.8rem] leading-relaxed text-muted">{clients.join(" · ")}</p>
            </div>

            <div id="lien-he" className="scroll-mt-20 rounded-xl border border-line bg-canvas p-7">
              <h2 className="text-[1.3rem] font-bold">Liên hệ &amp; nhận hồ sơ</h2>
              <ul className="mt-5 space-y-3 text-[0.88rem]">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="font-semibold hover:text-accent">
                    {company.hotline}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={`mailto:${company.email}`} className="font-semibold hover:text-accent">
                    {company.email}
                  </a>
                </li>
              </ul>
              <p className="mt-6 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-muted">
                {company.address}
                <br />
                {company.workingHours}
                <br />
                MST {company.taxCode}
              </p>
              <p className="mt-4 text-[0.78rem] text-muted">Thiết bị: {partners.join(", ")}</p>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-6xl px-5 py-8">
          <div className="flex flex-col gap-2 border-t border-line pt-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {company.founded}–2026 {company.legalName}</p>
            <Link href="/" className="font-semibold text-accent hover:underline">
              Quay lại thư viện mẫu
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
