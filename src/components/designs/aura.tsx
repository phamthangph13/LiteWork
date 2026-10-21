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
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import {
  Counter,
  CursorGlow,
  Float,
  LineDraw,
  Magnetic,
  Marquee,
  Parallax,
  Reveal,
  SplitText,
  Stagger,
  StaggerItem,
  Tilt,
} from "@/components/fancy";
import { ThreeScene } from "@/components/three";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function AuraDesign() {
  return (
    <div className="theme-aura min-h-screen bg-canvas font-body text-fg">
      <CursorGlow />

      {/* header */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[0.98rem] font-bold tracking-tight">AEROTECH</span>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#dich-vu" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-fg">
                {i}
              </a>
            ))}
          </nav>
          <Magnetic className="inline-flex">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-[0.84rem] font-semibold text-canvas"
            >
              Nhận báo giá
              <ArrowRight className="h-4 w-4" />
            </a>
          </Magnetic>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-accentsoft" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.75rem] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Tổng thầu HVAC &amp; thông gió · {company.founded}–2026
              </span>
            </Reveal>

            <h1 className="mt-7 font-display text-[2.3rem] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[3.5rem]">
              <SplitText text="Không khí chuẩn" />
              <br />
              <SplitText text="cho công trình" delay={0.12} />
              <br />
              <span className="text-accent">
                <SplitText text="của bạn" delay={0.24} />
              </span>
            </h1>

            <Reveal delay={0.3}>
              <p className="mt-7 max-w-xl text-[1rem] leading-relaxed text-muted">
                {company.subline}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Magnetic className="inline-flex">
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-[0.9rem] font-bold text-accentfg"
                  >
                    Nhận báo giá trong 24 giờ
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                <a href="#du-an" className="text-[0.88rem] font-semibold text-fg underline underline-offset-4">
                  Xem dự án
                </a>
              </div>
            </Reveal>

            <Stagger className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.slice(0, 4).map((s) => (
                <StaggerItem key={s.label}>
                  <div className="rounded-[18px] border border-line bg-surface p-4">
                    <p className="font-display text-[1.5rem] font-extrabold leading-none">
                      <Counter value={parseFloat(s.value)} />
                      {s.unit && s.unit.length <= 2 && (
                        <span className="ml-1 text-[0.9rem] font-semibold text-muted">{s.unit}</span>
                      )}
                    </p>
                    {s.unit && s.unit.length > 2 && (
                      <p className="mt-1 text-[0.72rem] font-medium text-muted">{s.unit}</p>
                    )}
                    <p className="mt-1 text-[0.72rem] leading-snug text-muted">{s.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="relative">
            <Float amplitude={12} duration={5}>
              <div className="rounded-[28px] border border-line bg-surface p-4 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.5)]">
                <ThreeScene variant="unit" className="h-[380px] w-full" accent="#2f6df6" body="#cfd8e3" />
              </div>
            </Float>
            <div className="absolute -bottom-6 -left-4 hidden rounded-[18px] border border-line bg-surface px-5 py-4 shadow-lg sm:block">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                Hiệu suất chiller
              </p>
              <p className="mt-1 font-display text-[1.8rem] font-extrabold text-accent">
                <Counter value={2.8} decimals={1} suffix=" kW/kW" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* marquee */}
      <section className="border-y border-line bg-surface py-5">
        <Marquee speed={38}>
          {partners.map((p) => (
            <span key={p} className="font-display text-[1.1rem] font-bold text-fg/45">
              {p}
            </span>
          ))}
        </Marquee>
      </section>

      {/* capability with parallax */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-accent">Năng lực</p>
              <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.5rem]">
                Chuyên môn đã được kiểm chứng bằng 480 công trình.
              </h2>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
                {company.legalName} thực hiện trọn chuỗi EPCI — khảo sát, thiết kế, dự toán, cung cấp
                thiết bị chính hãng, thi công, vận hành thử, nghiệm thu và bảo trì dài hạn.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <StaggerItem key={h}>
                  <div className="h-full rounded-[16px] border border-line bg-surface p-4 text-[0.84rem] leading-relaxed text-muted">
                    {h}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Parallax distance={44}>
            <MediaFrame
              src={img.plantInterior}
              alt="Thi công hệ thống điều hoà tại nhà xưởng"
              ratio="aspect-[4/3]"
              className="rounded-[28px]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Parallax>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Dịch vụ</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Tám nhóm dịch vụ
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <Tilt className="h-full" max={5}>
                  <div className="h-full rounded-[20px] border border-line bg-canvas p-6">
                    <h3 className="font-display text-[1rem] font-bold leading-snug">{s.title}</h3>
                    <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
                    <ul className="mt-5 space-y-1.5">
                      {s.points.slice(0, 3).map((p) => (
                        <li key={p} className="text-[0.76rem] text-muted">
                          — {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>

          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-accent">Dự án</p>
              <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
                Những công trình đã bàn giao
              </h2>
            </Reveal>
            <span className="text-[0.85rem] text-muted">{projects.length} dự án tiêu biểu</span>
          </div>

          <ProjectGallery variant="mosaic" limit={6} className="mt-12" />
        </div>
      </section>

      {/* process with line */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Quy trình</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Sáu bước, cam kết bằng hợp đồng
            </h2>
          </Reveal>

          <div className="mt-10 text-accent">
            <LineDraw className="h-14 w-full" />
          </div>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <StaggerItem key={s.step}>
                <div className="h-full rounded-[20px] border border-line bg-canvas p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[1.6rem] font-extrabold text-accent">
                      {s.step}
                    </span>
                    <span className="text-[0.75rem] text-muted">{s.duration}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[1.02rem] font-bold">{s.title}</h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-14">
            <h3 className="font-display text-[1.3rem] font-extrabold">Cam kết dịch vụ</h3>
            <CommitmentTable className="mt-5" />
          </Reveal>
        </div>
      </section>

      {/* why us */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Vì sao chọn AEROTECH</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Lợi thế dành cho chủ đầu tư
            </h2>
          </Reveal>
          <WhyUsGrid className="mt-12" />
        </div>
      </section>

      {/* faq + cta */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-[1.6rem] font-extrabold">Câu hỏi thường gặp</h2>
            </Reveal>
            <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[28px] bg-fg p-9 text-canvas">
              <p className="eyebrow opacity-60">Bắt đầu</p>
              <h2 className="mt-4 font-display text-[1.8rem] font-extrabold leading-tight">
                Gửi hồ sơ, nhận phương án trong 24 giờ
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed opacity-70">
                Kỹ sư phụ trách sẽ khảo sát, tính tải nhiệt và đề xuất phương án tối ưu chi phí vận
                hành dài hạn.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.hotline.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[0.86rem] font-bold text-accentfg"
                >
                  <Phone className="h-4 w-4" />
                  {company.hotline}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-canvas/25 px-5 py-3 text-[0.86rem] font-semibold"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
              <p className="mt-7 text-[0.82rem] opacity-60">
                {clients.slice(0, 6).join(" · ")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="lien-he" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-4 border-t border-line pt-6 text-[0.82rem] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {company.founded}–2026 {company.legalName}</p>
            <div className="flex items-center gap-5">
              <a href="#du-an" className="inline-flex items-center gap-1.5 hover:text-fg">
                <Download className="h-3.5 w-3.5" /> Hồ sơ năng lực
              </a>
              <Link href="/" className="font-semibold text-fg hover:underline">
                Quay lại thư viện mẫu
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
