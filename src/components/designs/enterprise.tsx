import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  Cpu,
  Gauge,
  Mail,
  Phone,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
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

const modules = [
  { label: "Thiết kế hệ thống", value: 98, unit: "%", icon: Cpu },
  { label: "Đúng tiến độ", value: 96, unit: "%", icon: Gauge },
  { label: "Tiết kiệm điện", value: 35, unit: "%", icon: Activity },
  { label: "Sẵn sàng vận hành", value: 99, unit: "%", icon: Server },
];

export default function EnterpriseDesign() {
  return (
    <div className="theme-enterprise min-h-screen bg-canvas font-body text-fg">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[0.95rem] font-semibold tracking-tight">{company.brand}</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                HVAC · Ventilation · EPC
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {[
              ["Tổng quan", "#tong-quan"],
              ["Năng lực", "#nang-luc"],
              ["Dịch vụ", "#dich-vu"],
              ["Dự án", "#du-an"],
              ["Vận hành", "#van-hanh"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-md px-3 py-1.5 text-[0.82rem] font-medium text-muted transition-colors hover:bg-surface2 hover:text-fg"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-md border border-line px-2.5 py-1.5 font-mono text-[0.68rem] text-muted sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SYSTEM ONLINE
            </span>
            <a
              href="#lien-he"
              className="rounded-md bg-accent px-3.5 py-2 text-[0.8rem] font-semibold text-accentfg transition-colors hover:bg-accent/85"
            >
              Báo giá
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section id="tong-quan" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                {"// Nền tảng HVAC cho công trình"}
              </p>
              <h1 className="mt-5 font-display text-[2.3rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[3.1rem]">
                Vận hành điều hoà không khí
                <br />
                <span className="text-muted">cho công trình, thương mại</span>
                <br />
                và công nghiệp.
              </h1>
              <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                {company.subline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[0.85rem] font-semibold text-accentfg transition-colors hover:bg-accent/85"
                >
                  Khởi tạo dự án
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-[0.85rem] font-semibold text-fg transition-colors hover:bg-surface2"
                >
                  Xem dự án
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {modules.map((m) => (
                  <div key={m.label} className="rounded-lg border border-line bg-surface p-4">
                    <div className="flex items-center justify-between">
                      <m.icon className="h-4 w-4 text-accent" />
                      <span className="font-mono text-[0.65rem] text-muted">LIVE</span>
                    </div>
                    <p className="mt-4 font-display text-[1.6rem] font-semibold leading-none">
                      {m.value}
                      <span className="text-[0.8rem] text-muted">{m.unit}</span>
                    </p>
                    <p className="mt-2 text-[0.72rem] leading-snug text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-line bg-surface p-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  Capability snapshot
                </span>
                <Terminal className="h-4 w-4 text-muted" />
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-line bg-surface2 px-4 py-3.5">
                    <dt className="font-display text-[1.35rem] font-semibold leading-none">
                      {s.value}
                      <span className="text-[0.72rem] text-accent">{s.unit}</span>
                    </dt>
                    <dd className="mt-2 text-[0.72rem] leading-snug text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-lg border border-line bg-surface2 p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Triển khai gần đây
                </p>
                <ul className="mt-3 space-y-2.5">
                  {projects.slice(0, 3).map((p) => (
                    <li key={p.name} className="flex items-start gap-2.5 text-[0.78rem]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="flex-1 leading-snug text-fg">{p.name}</span>
                      <span className="font-mono text-[0.68rem] text-muted">{p.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <MediaFrame
            src={img.plantInterior}
            alt="Hệ thống điều hoà do AEROTECH thi công trong nhà xưởng"
            ratio="aspect-[21/9]"
            sizes="100vw"
            priority
          >
            <div className="absolute inset-0 flex items-end bg-black/35 p-6">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white/70">
                  Hiện trường thi công
                </p>
                <p className="mt-1 font-display text-[1.15rem] font-semibold text-white">
                  Hệ thống AHU &amp; đường ống gió tại nhà xưởng 45.000 m²
                </p>
              </div>
            </div>
          </MediaFrame>
        </div>
      </section>

      {/* clients ticker */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
              Clients
            </span>
            {clients.map((c) => (
              <span key={c} className="text-[0.82rem] font-semibold text-muted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">{"// Năng lực"}</p>
              <h2 className="mt-4 font-display text-[1.9rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.4rem]">
                Hồ sơ năng lực chuẩn doanh nghiệp EPC
              </h2>
              <p className="mt-5 text-[0.93rem] leading-relaxed text-muted">
                {company.legalName} hoạt động từ {company.founded}. Toàn bộ khối lượng thi công do
                đội kỹ thuật trực thuộc công ty đảm nhận, có chứng chỉ nghề và hồ sơ hoàn công
                đầy đủ cho từng hạng mục.
              </p>
              <ul className="mt-7 space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-muted">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span
                    key={c.title}
                    className="rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-[0.68rem] text-muted"
                    title={c.detail}
                  >
                    {c.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface p-5">
                <MediaFrame
                  src={img.hvacAhu}
                  alt="Hệ thống AHU đang được lắp đặt"
                  ratio="aspect-[16/9]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <p className="mt-4 text-[0.8rem] font-semibold">Năng lực thiết kế</p>
                <p className="mt-1 text-[0.76rem] leading-relaxed text-muted">
                  32 kỹ sư M&amp;E · mô phỏng CFD · tính tải nhiệt chuẩn ASHRAE
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-5">
                <p className="text-[0.72rem] font-mono uppercase tracking-[0.16em] text-muted">
                  Thiết bị chính hãng
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {partners.map((p) => (
                    <span key={p} className="rounded border border-line px-2 py-1 text-[0.7rem] font-medium text-muted">
                      {p}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[0.76rem] leading-relaxed text-muted">
                  Xuất xứ, tem, bảo hành và giấy tờ nguồn gốc đầy đủ cho từng thiết bị.
                </p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-5 sm:col-span-2">
                <p className="text-[0.72rem] font-mono uppercase tracking-[0.16em] text-muted">
                  Ban lãnh đạo
                </p>
                <div className="mt-4 divide-y divide-line">
                  {team.map((m) => (
                    <div key={m.name} className="flex items-center gap-4 py-3">
                      <span className="w-40 text-[0.85rem] font-semibold">{m.name}</span>
                      <span className="flex-1 text-[0.78rem] text-muted">{m.role}</span>
                      <span className="font-mono text-[0.7rem] text-accent">{m.experience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-20 border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                {"// Dịch vụ"}
              </p>
              <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-[2.3rem]">
                8 module triển khai
              </h2>
            </div>
            <span className="font-mono text-[0.72rem] text-muted">SLA · 24/7 support</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="group rounded-lg border border-line bg-canvas p-5 transition-colors hover:border-accent">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-accentsoft text-accent">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span className="font-mono text-[0.66rem] text-muted">mod.{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-[0.98rem] font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 border-t border-line pt-3">
                  {s.points.map((p) => (
                    <li key={p} className="py-0.5 font-mono text-[0.7rem] text-muted">
                      → {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className="flex items-center gap-3 rounded-lg border border-line bg-canvas px-4 py-3.5">
                <SectorIcon name={s.icon} className="h-4 w-4 text-accent" />
                <span className="text-[0.82rem] font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">{"// Ngành"}</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-[2.3rem]">
            Phạm vi triển khai
          </h2>
          <SectorGallery className="mt-8" />
        </div>
      </section>

      {/* projects table */}
      <section id="du-an" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">{"// Dự án"}</p>
              <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-[2.3rem]">
                Portfolio đã bàn giao
              </h2>
            </div>
            <span className="font-mono text-[0.72rem] text-muted">
              {projects.length} bản ghi · 18 tỉnh thành
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-line">
            <div className="hidden grid-cols-[1.1fr_0.7fr_0.6fr_0.8fr_0.7fr] gap-4 border-b border-line bg-surface2 px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted lg:grid">
              <span>Dự án</span>
              <span>Ngành</span>
              <span>Địa điểm</span>
              <span>Quy mô</span>
              <span>Trạng thái</span>
            </div>
            {projects.map((p) => (
              <div
                key={p.name}
                className="grid gap-2 border-b border-line px-5 py-4 last:border-b-0 lg:grid-cols-[1.1fr_0.7fr_0.6fr_0.8fr_0.7fr] lg:items-center lg:gap-4"
              >
                <div>
                  <p className="text-[0.88rem] font-semibold leading-tight">{p.name}</p>
                  <p className="mt-1 text-[0.74rem] leading-snug text-muted lg:hidden">
                    {p.category} · {p.location} · {p.scale}
                  </p>
                </div>
                <span className="text-[0.8rem] text-muted">{p.category}</span>
                <span className="text-[0.8rem] text-muted">{p.location}</span>
                <span className="text-[0.8rem] text-muted">{p.scale}</span>
                <span className="justify-self-start rounded border border-line px-2 py-1 font-mono text-[0.66rem] text-muted lg:justify-self-end">
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">{"// Lợi thế"}</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-[2.3rem]">
            Vì sao chủ đầu tư chọn AEROTECH
          </h2>
          <WhyUsGrid className="mt-8" />
          <p className="mt-12 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
            {"// Cam kết dịch vụ"}
          </p>
          <CommitmentTable className="mt-5" />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">{"// Hình ảnh"}</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-[2.3rem]">
            Dự án tiêu biểu
          </h2>
          <ProjectGallery variant="row" limit={6} className="mt-8" />
        </div>
      </section>

      {/* process */}
      <section id="van-hanh" className="scroll-mt-20 border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">{"// Vận hành"}</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-[2.3rem]">
            Quy trình triển khai
          </h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="rounded-lg border border-line bg-canvas p-5">
                <div className="flex items-center justify-between font-mono text-[0.7rem]">
                  <span className="text-accent">STEP {s.step}</span>
                  <span className="text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-4 font-display text-[0.98rem] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-line bg-canvas p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                {"// Câu hỏi thường gặp"}
              </p>
              <div className="mt-4">
                <FaqAccordion items={faqs.slice(0, 4)} questionClassName="hover:text-accent" answerClassName="text-muted" />
              </div>
            </div>
            <div id="lien-he" className="scroll-mt-20 rounded-lg border border-accent bg-accentsoft p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
                {"// Khởi tạo dự án"}
              </p>
              <h3 className="mt-3 font-display text-[1.5rem] font-semibold leading-snug">
                Gửi hồ sơ, nhận phương án trong 24 giờ
              </h3>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">
                Chúng tôi phản hồi báo giá sơ bộ trong 24 giờ làm việc và báo giá chi tiết theo BOQ
                trong 7–10 ngày sau khảo sát.
              </p>
              <div className="mt-6 space-y-3 text-[0.85rem]">
                <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-2.5 font-semibold">
                  <Phone className="h-4 w-4 text-accent" />
                  {company.hotline}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 font-semibold">
                  <Mail className="h-4 w-4 text-accent" />
                  {company.email}
                </a>
                <p className="flex items-center gap-2.5 text-muted">
                  <Building2 className="h-4 w-4 text-accent" />
                  {company.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 font-mono text-[0.7rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName} · MST {company.taxCode}</p>
          <Link href="/" className="text-accent hover:underline">
            / QUAY LẠI THƯ VIỆN MẪU
          </Link>
        </div>
      </footer>
    </div>
  );
}
