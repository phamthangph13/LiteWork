import Link from "next/link";
import { ArrowRight, Download, Mail, Phone, Sparkles } from "lucide-react";
import {
  clients,
  company,
  faqs,
  highlights,
  process,
  sectors,
  services,
  stats,
  team,
} from "@/data/company";
import { FaqAccordion, ServiceIcon, SectorIcon } from "@/components/designs/parts";
import {
  Counter,
  CursorGlow,
  Float,
  Magnetic,
  Marquee,
  Reveal,
  ScrambleText,
  SplitText,
  Stagger,
  StaggerItem,
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

export default function LumenDesign() {
  return (
    <div className="theme-lumen min-h-screen bg-canvas font-body text-fg">
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
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[0.84rem] font-bold text-accentfg"
            >
              Nhận báo giá
              <ArrowRight className="h-4 w-4" />
            </a>
          </Magnetic>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[900px] -translate-x-1/2 bg-accentsoft" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <ScrambleText
              text="LUMEN / HVAC SYSTEM"
              className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent"
            />
            <h1 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[3.6rem]">
              <SplitText text="Ánh sáng" />
              <br />
              <span className="text-accent">
                <SplitText text="của hệ thống" delay={0.14} />
              </span>
              <br />
              <SplitText text="bắt đầu từ kỹ thuật" delay={0.26} />
            </h1>

            <Reveal delay={0.32}>
              <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-muted">
                {company.subline}
              </p>
            </Reveal>

            <Reveal delay={0.42}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Magnetic className="inline-flex">
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-2 rounded-full bg-fg px-7 py-4 text-[0.9rem] font-bold text-canvas"
                  >
                    Bắt đầu dự án
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-7 py-4 text-[0.9rem] font-semibold"
                >
                  Xem dự án
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Float amplitude={10} duration={6}>
              <div className="rounded-[28px] border border-line bg-surface/80 p-4 backdrop-blur-xl">
                <ThreeScene variant="unit" className="h-[360px] w-full" accent="#6d4aff" body="#dcd6f0" />
              </div>
            </Float>
            <div className="absolute -bottom-7 -left-4 hidden rounded-[18px] border border-line bg-surface px-5 py-4 shadow-lg sm:block">
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">Đội ngũ</p>
              <p className="mt-1 font-display text-[1.6rem] font-extrabold text-accent">
                <Counter value={320} suffix="+" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* marquee */}
      <section className="border-y border-line bg-surface py-6">
        <Marquee speed={36}>
          {clients.map((c) => (
            <span key={c} className="font-display text-[1.15rem] font-bold text-fg/40">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-accent">Năng lực</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.5rem]">
              Minh bạch từ báo giá đến bảo hành.
            </h2>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
              {company.legalName} thực hiện trọn chuỗi EPCI: khảo sát, thiết kế, dự toán, cung cấp
              thiết bị chính hãng, thi công, vận hành thử, nghiệm thu và bảo trì dài hạn.
            </p>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <StaggerItem key={h}>
                  <div className="h-full rounded-[16px] border border-line bg-surface p-4 text-[0.84rem] leading-relaxed text-muted">
                    {h}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-3">
            {stats.slice(0, 4).map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-[20px] border border-line bg-surface p-6">
                  <p className="font-display text-[1.8rem] font-extrabold leading-none text-accent">
                    <Counter value={parseFloat(s.value)} />
                    {s.unit && s.unit.length <= 2 && (
                      <span className="ml-1 text-[0.9rem] font-semibold text-muted">{s.unit}</span>
                    )}
                  </p>
                  {s.unit && s.unit.length > 2 && (
                    <p className="mt-1 text-[0.72rem] font-medium text-muted">{s.unit}</p>
                  )}
                  <p className="mt-2 text-[0.78rem] leading-snug text-muted">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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
                <div className="group h-full rounded-[22px] border border-line bg-canvas p-6 transition-colors hover:border-accent">
                  <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-accentsoft text-accent">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.02rem] font-bold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2 text-[0.8rem] font-medium text-muted"
              >
                <SectorIcon name={s.icon} className="h-3.5 w-3.5 text-accent" />
                {s.name}
              </span>
            ))}
          </div>
          <SectorGallery className="mt-4" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Dự án</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Công trình đã bàn giao
            </h2>
          </Reveal>
          <ProjectGallery variant="mosaic" limit={6} className="mt-12" />
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Quy trình</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Sáu bước đã được chuẩn hoá
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <StaggerItem key={s.step}>
                <div className="h-full rounded-[22px] border border-line bg-canvas p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[0.78rem] font-bold text-accentfg">
                      {s.step}
                    </span>
                    <span className="text-[0.75rem] text-muted">{s.duration}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.02rem] font-bold">{s.title}</h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-14">
            <CommitmentTable />
          </Reveal>
        </div>
      </section>

      {/* why us + team */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Vì sao chọn AEROTECH</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">
              Lợi thế dành cho chủ đầu tư và nhà thầu
            </h2>
          </Reveal>
          <WhyUsGrid className="mt-12" />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <Reveal key={m.name}>
                <div className="rounded-[20px] border border-line bg-surface p-5">
                  <p className="font-display text-[0.98rem] font-bold leading-tight">{m.name}</p>
                  <p className="mt-1 text-[0.8rem] text-accent">{m.role}</p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{m.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
            <div className="rounded-[28px] border border-line bg-canvas p-9">
              <Sparkles className="h-5 w-5 text-accent" />
              <h2 className="mt-4 font-display text-[1.7rem] font-extrabold leading-tight">
                Gửi hồ sơ, nhận phương án trong 24 giờ
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                Kỹ sư phụ trách sẽ khảo sát, tính tải nhiệt và đề xuất phương án tối ưu chi phí vận
                hành dài hạn.
              </p>
              <div className="mt-8 space-y-3 text-[0.9rem] font-semibold">
                <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" />
                  {company.hotline}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-accent">
                  <Mail className="h-4 w-4 text-accent" />
                  {company.email}
                </a>
              </div>
              <p className="mt-7 text-[0.8rem] text-muted">{company.address}</p>
              <MediaFrame
                src={img.hvacAhu}
                alt="Hệ thống AHU"
                ratio="aspect-[16/9]"
                className="mt-6 rounded-[18px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
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
