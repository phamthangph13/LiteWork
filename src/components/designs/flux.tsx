import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  faqs,
  process,
  projects,
  services,
  stats,
  team,
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import {
  Counter,
  LineDraw,
  Magnetic,
  Marquee,
  Parallax,
  Reveal,
  SplitText,
  Stagger,
  StaggerItem,
  StickyStack,
  Tilt,
} from "@/components/fancy";
import {
  CommitmentTable,
  MediaFrame,
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img, projectImages } from "@/data/media";
import { LogoMark } from "@/components/visuals";

const stackItems = [
  {
    meta: "Chương 01",
    title: "Hồ sơ năng lực & năng lực nhân sự",
    body: "32 kỹ sư M&E, 320+ kỹ thuật viên có chứng chỉ nghề, đội thi công và đội bảo trì đều trực thuộc công ty. Hồ sơ năng lực cập nhật theo Nghị định 06/2022/NĐ-CP.",
    image: "/img/team-working.jpg",
  },
  {
    meta: "Chương 02",
    title: "Năng lực thiết kế & tư vấn kỹ thuật",
    body: "Tính tải nhiệt chuẩn ASHRAE, mô phỏng CFD để tối ưu phân bổ gió, lập dự toán BOQ chi tiết và phương án tiết kiệm năng lượng cho từng hạng mục.",
    image: "/img/blueprint-drafting.jpg",
  },
  {
    meta: "Chương 03",
    title: "Năng lực thi công & cung ứng thiết bị",
    body: "Đội thi công của công ty thực hiện toàn bộ đường ống gió, ống nước lạnh, hệ điện và tự động hoá. Thiết bị nhập khẩu trực tiếp, có tem và giấy tờ nguồn gốc.",
    image: "/img/plant-interior.jpg",
  },
  {
    meta: "Chương 04",
    title: "Năng lực vận hành & bảo hành",
    body: "Đội kỹ thuật lưu trú tại 18 tỉnh thành, xử lý sự cố trong 24–48 giờ, báo cáo hiệu suất hằng quý kèm đề xuất tối ưu điện năng cho từng hệ thống.",
    image: "/img/technician-respirator.jpg",
  },
];

export default function FluxDesign() {
  return (
    <div className="theme-flux min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[0.98rem] font-bold tracking-tight">AEROTECH</span>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {["Hồ sơ", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#ho-so" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-fg">
                {i}
              </a>
            ))}
          </nav>
          <Magnetic className="inline-flex">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[0.84rem] font-bold text-accentfg"
            >
              Liên hệ
              <ArrowRight className="h-4 w-4" />
            </a>
          </Magnetic>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center lg:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[0.75rem] font-medium text-muted">
              Hồ sơ năng lực · 2026
            </span>
          </Reveal>

          <h1 className="mx-auto mt-8 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[4rem]">
            <SplitText text="Hệ thống điều hoà" />
            <br />
            <span className="text-accent">
              <SplitText text="đúng chuẩn" delay={0.14} />
            </span>
            <br />
            <SplitText text="cho mọi công trình" delay={0.26} />
          </h1>

          <Reveal delay={0.32}>
            <p className="mx-auto mt-8 max-w-2xl text-[1rem] leading-relaxed text-muted">
              {company.subline}
            </p>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic className="inline-flex">
                <a
                  href="#ho-so"
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-7 py-4 text-[0.9rem] font-bold text-canvas"
                >
                  Khám phá hồ sơ
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Magnetic>
              <a
                href="#du-an"
                className="rounded-full border border-line bg-surface px-7 py-4 text-[0.9rem] font-semibold"
              >
                Dự án tiêu biểu
              </a>
            </div>
          </Reveal>

          <Stagger className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.slice(0, 4).map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-[22px] border border-line bg-surface p-5">
                  <p className="font-display text-[1.7rem] font-extrabold leading-none text-accent">
                    <Counter value={parseFloat(s.value)} />
                    {s.unit && s.unit.length <= 2 && (
                      <span className="ml-1 text-[0.9rem] font-semibold text-muted">{s.unit}</span>
                    )}
                  </p>
                  {s.unit && s.unit.length > 2 && (
                    <p className="mt-1 text-[0.72rem] font-medium text-muted">{s.unit}</p>
                  )}
                  <p className="mt-1.5 text-[0.76rem] leading-snug text-muted">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Parallax distance={36} className="mx-auto max-w-6xl px-5 pb-16">
          <MediaFrame
            src={img.hvacSpiralDuct}
            alt="Hệ thống đường ống gió trong tòa nhà thương mại"
            ratio="aspect-[21/9]"
            className="rounded-[32px]"
            priority
            sizes="100vw"
          />
        </Parallax>
      </section>

      {/* client marquee */}
      <section className="border-y border-line bg-surface py-6">
        <Marquee speed={32} reverse>
          {clients.map((c) => (
            <span key={c} className="font-display text-[1.15rem] font-bold text-fg/40">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* stacking story */}
      <section id="ho-so" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow text-accent">Hồ sơ năng lực</p>
            <h2 className="mt-4 max-w-2xl font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.6rem]">
              Bốn chương, một cam kết: hệ thống vận hành ổn định.
            </h2>
          </Reveal>

          <StickyStack items={stackItems} className="mt-14" />
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
              Dịch vụ trọn gói
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <Tilt max={6} className="h-full">
                  <div className="h-full rounded-[24px] border border-line bg-canvas p-6">
                    <h3 className="font-display text-[1.02rem] font-bold leading-snug">{s.title}</h3>
                    <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
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
          <Reveal>
            <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
              Dự án tiêu biểu
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <article className="group overflow-hidden rounded-[24px] border border-line bg-surface">
                  <MediaFrame
                    src={projectImages[i % projectImages.length]}
                    alt={p.name}
                    ratio="aspect-[16/10]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  >
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-bold text-accentfg">
                      {p.category}
                    </span>
                  </MediaFrame>
                  <div className="p-6">
                    <p className="text-[0.73rem] font-medium uppercase tracking-[0.14em] text-muted">
                      {p.location} · {p.year}
                    </p>
                    <h3 className="mt-2 font-display text-[1.05rem] font-bold leading-snug">{p.name}</h3>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
                    <p className="mt-4 text-[0.82rem] font-bold text-accent">{p.scale}</p>
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
            <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
              Quy trình triển khai
            </h2>
          </Reveal>

          <div className="mt-8 text-accent">
            <LineDraw className="h-14 w-full" />
          </div>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <StaggerItem key={s.step}>
                <div className="h-full rounded-[24px] border border-line bg-canvas p-6">
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
            <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
              Vì sao chủ đầu tư chọn AEROTECH
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
                  <p className="mt-3 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    {m.experience}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq + cta */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-[1.6rem] font-extrabold">Câu hỏi thường gặp</h2>
            </Reveal>
            <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[28px] bg-accent p-9 text-accentfg">
              <h2 className="font-display text-[1.7rem] font-extrabold leading-tight">
                Bắt đầu bằng một bản vẽ.
              </h2>
              <p className="mt-4 text-[0.9rem] leading-relaxed opacity-85">
                Gửi hồ sơ công trình — đội kỹ sư phản hồi trong 24 giờ làm việc.
              </p>
              <div className="mt-8 space-y-3 text-[0.9rem] font-semibold">
                <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4" />
                  {company.hotline}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
              <p className="mt-7 text-[0.8rem] opacity-70">{company.address}</p>
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
