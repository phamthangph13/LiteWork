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
  Float,
  LineDraw,
  Magnetic,
  Parallax,
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
import { img, projectImages } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function AtlasDesign() {
  return (
    <div className="theme-atlas min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[1.15rem] font-bold tracking-tight">{company.brand}</p>
              <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-muted">
                Điều hoà không khí &amp; Thông gió
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {["Hồ sơ", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#ho-so" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-accent">
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
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div>
            <ScrambleText
              text="ATLAS OF CLIMATE"
              className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-accent"
            />
            <h1 className="mt-6 font-display text-[2.3rem] font-bold leading-[1.04] tracking-[-0.02em] sm:text-[3.6rem]">
              <SplitText text="Bản đồ" />
              <br />
              <span className="italic text-accent">
                <SplitText text="không khí" delay={0.12} />
              </span>
              <br />
              <SplitText text="cho công trình" delay={0.24} />
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-xl text-[0.98rem] leading-[1.85] text-muted">
                {company.subline}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 bg-accent px-7 py-4 text-[0.9rem] font-bold text-accentfg"
                >
                  Nhận báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#ho-so" className="text-[0.88rem] font-semibold underline underline-offset-4">
                  Đọc hồ sơ năng lực
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-line bg-surface">
              <ThreeScene variant="air" className="h-[380px] w-full" accent="#b06a2c" />
            </div>
            <Float amplitude={8} duration={4.5} className="absolute -bottom-6 -left-5 hidden sm:block">
              <div className="rounded-[18px] border border-line bg-surface px-5 py-4 shadow-lg">
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">Lưu lượng gió</p>
                <p className="mt-1 font-display text-[1.6rem] font-bold text-accent">
                  <Counter value={60} suffix="K m³/h" />
                </p>
              </div>
            </Float>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-7">
              <p className="font-display text-[1.9rem] font-bold leading-none text-accent">
                <Counter value={parseFloat(s.value)} />
                {s.unit && <span className="ml-1.5 text-[0.9rem] font-medium text-muted">{s.unit}</span>}
              </p>
              <p className="mt-2 text-[0.76rem] leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* story */}
      <section id="ho-so" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-accent">Hồ sơ năng lực</p>
              <h2 className="mt-5 font-display text-[1.9rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
                Chúng tôi vẽ bản đồ khí hậu cho từng công trình.
              </h2>
              <p className="mt-6 text-[0.96rem] leading-[1.85] text-muted">
                {company.legalName} thực hiện trọn chuỗi EPCI trọn gói. Mỗi dự án bắt đầu bằng một
                bản vẽ và kết thúc bằng hồ sơ hoàn công đầy đủ, cùng chương trình bảo hành 24 tháng.
              </p>
            </Reveal>

            <Stagger className="mt-8 space-y-3">
              {highlights.map((h) => (
                <StaggerItem key={h}>
                  <div className="flex items-start gap-3 border-b border-line pb-3 text-[0.88rem] leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Parallax distance={40}>
            <MediaFrame
              src={img.officeCityView}
              alt="Tòa nhà văn phòng sử dụng hệ thống điều hoà trung tâm"
              ratio="aspect-[3/4]"
              className="rounded-[24px]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Parallax>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Dịch vụ</p>
            <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
              Tám nhóm dịch vụ
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <div className="h-full rounded-[18px] border border-line bg-canvas p-6">
                  <h3 className="font-display text-[1.05rem] font-bold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
                  <p className="mt-4 text-[0.75rem] italic text-accent">{s.points[0]}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Dự án</p>
            <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
              Những công trình đã bàn giao
            </h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <article className="grid gap-6 overflow-hidden rounded-[22px] border border-line bg-surface lg:grid-cols-[1fr_1.2fr]">
                  <MediaFrame
                    src={projectImages[i % projectImages.length]}
                    alt={p.name}
                    ratio="aspect-[16/10] lg:aspect-auto lg:h-full"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="p-8">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      {p.category} · {p.location} · {p.year}
                    </p>
                    <h3 className="mt-3 font-display text-[1.5rem] font-bold leading-snug">{p.name}</h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{p.scope}</p>
                    <p className="mt-5 font-display text-[0.98rem] font-bold text-accent">{p.scale}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <ProjectGallery variant="list" limit={6} className="mt-6" />
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Quy trình</p>
            <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
              Từ bản vẽ đến cam kết vận hành
            </h2>
          </Reveal>

          <div className="mt-10 text-accent">
            <LineDraw className="h-14 w-full" />
          </div>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <StaggerItem key={s.step}>
                <div className="h-full rounded-[18px] border border-line bg-canvas p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[1.5rem] font-bold text-accent">{s.step}</span>
                    <span className="text-[0.75rem] text-muted">{s.duration}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[1.05rem] font-bold">{s.title}</h3>
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

      {/* why us + clients */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Vì sao chọn AEROTECH</p>
            <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
              Cam kết dành cho chủ đầu tư
            </h2>
          </Reveal>
          <WhyUsGrid className="mt-12" />

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-8">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Khách hàng
            </span>
            {clients.map((c) => (
              <span key={c} className="font-display text-[1rem] font-semibold text-fg/65">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[0.82rem] text-muted">
            Thiết bị chính hãng: {partners.join(" · ")}
          </p>
        </div>
      </section>

      {/* faq + cta */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-[1.6rem] font-bold">Câu hỏi thường gặp</h2>
            </Reveal>
            <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
          </div>

          <Reveal delay={0.1}>
            <div id="lien-he" className="scroll-mt-24 rounded-[24px] border border-line bg-canvas p-9">
              <p className="eyebrow text-accent">Bắt đầu</p>
              <h2 className="mt-4 font-display text-[1.7rem] font-bold leading-tight">
                Gửi hồ sơ, nhận phương án trong 24 giờ.
              </h2>
              <div className="mt-7 space-y-3 text-[0.9rem] font-semibold">
                <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" />
                  {company.hotline}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-accent">
                  <Mail className="h-4 w-4 text-accent" />
                  {company.email}
                </a>
              </div>
              <p className="mt-7 border-t border-line pt-5 text-[0.84rem] leading-relaxed text-muted">
                {company.address}
                <br />
                {company.workingHours}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-4 border-t border-line pt-6 text-[0.82rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <div className="flex items-center gap-5">
            <a href="#du-an" className="inline-flex items-center gap-1.5 hover:text-fg">
              <Download className="h-3.5 w-3.5" /> Hồ sơ năng lực
            </a>
            <Link href="/" className="font-semibold text-accent hover:underline">
              Quay lại thư viện mẫu
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
