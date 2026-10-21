import Link from "next/link";
import { ArrowRight, BadgeCheck, Mail, Phone, Sparkles } from "lucide-react";
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
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function BentoDesign() {
  return (
    <div className="theme-bento min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="mx-auto max-w-6xl px-5 pt-6">
        <div className="flex items-center justify-between gap-6 rounded-[22px] bg-surface px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[1.02rem] font-extrabold tracking-tight">{company.brand}</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
                HVAC &amp; Ventilation
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-accent">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="rounded-full bg-accent px-4 py-2 text-[0.82rem] font-bold text-accentfg transition-transform hover:-translate-y-0.5"
          >
            Liên hệ
          </a>
        </div>
      </header>

      {/* bento hero */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-[22px] bg-surface p-8 lg:col-span-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accentsoft px-3 py-1.5 text-[0.72rem] font-bold text-accent">
                <BadgeCheck className="h-3.5 w-3.5" />
                Từ {company.founded} · 480+ dự án
              </span>
              <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[2.9rem]">
                Không gian mát mẻ
                <br />
                cho mọi quy mô
                <br />
                <span className="text-accent">công trình.</span>
              </h1>
              <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted">
                {company.subline}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-bold text-canvas transition-transform hover:-translate-y-0.5"
              >
                Nhận báo giá
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#du-an"
                className="inline-flex items-center gap-2 rounded-full bg-surface2 px-5 py-3 text-sm font-bold transition-colors hover:bg-accentsoft"
              >
                Dự án tiêu biểu
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative flex-1 overflow-hidden rounded-[22px] bg-accent p-7 text-accentfg">
              <MediaFrame
                src={img.hvacAhu}
                alt="Hệ thống AHU do AEROTECH lắp đặt"
                ratio="absolute inset-0 h-full w-full"
                sizes="(max-width: 1024px) 100vw, 33vw"
                imgClassName="opacity-40"
              />
              <div className="relative">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] opacity-70">
                  Năng lực thiết kế
                </p>
                <p className="mt-2 font-display text-[2.6rem] font-extrabold leading-none">2.4M m²</p>
                <p className="mt-1 text-[0.82rem] opacity-80">diện tích sàn đã điều hoà</p>
              </div>
            </div>
            <div className="flex-1 rounded-[22px] bg-surface p-7">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
                Cam kết
              </p>
              <ul className="mt-3 space-y-2.5">
                {highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-2 text-[0.8rem] leading-snug text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.slice(0, 4).map((s, i) => (
            <div
              key={s.label}
              className={`rounded-[22px] p-6 ${i % 2 === 0 ? "bg-surface" : "bg-surface2"}`}
            >
              <p className="font-display text-[1.9rem] font-extrabold leading-none">
                {s.value}
                <span className="ml-1 text-[0.8rem] font-bold text-accent">{s.unit}</span>
              </p>
              <p className="mt-2 text-[0.8rem] leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* about */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[22px] bg-fg p-8 text-canvas lg:col-span-2">
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] opacity-60">
              Về chúng tôi
            </span>
            <h2 className="mt-4 font-display text-[1.7rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.2rem]">
              Một đầu mối cho toàn bộ hệ thống điều hoà của công trình.
            </h2>
            <p className="mt-4 max-w-2xl text-[0.93rem] leading-relaxed opacity-75">
              {company.legalName} thực hiện chuỗi EPCI trọn gói: khảo sát hiện trường, thiết kế và
              dự toán, cung cấp thiết bị chính hãng, thi công lắp đặt, vận hành thử, nghiệm thu và
              bảo trì dài hạn. Không phát sinh ngoài dự toán.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.slice(3).map((h) => (
                <div key={h} className="rounded-2xl bg-canvas/10 px-4 py-3.5">
                  <p className="text-[0.82rem] leading-relaxed opacity-85">{h}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-[22px] bg-surface">
              <MediaFrame
                src={img.plantInterior}
                alt="Thi công hệ thống điều hoà nhà xưởng"
                ratio="aspect-[16/10]"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="p-7">
                <p className="text-[0.8rem] font-bold">Chiller tới 3.500 tấn lạnh</p>
                <p className="mt-1 text-[0.78rem] text-muted">Nhập khẩu trực tiếp từ nhà sản xuất</p>
              </div>
            </div>
            <div className="rounded-[22px] bg-accentsoft p-7">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-accent">
                Đội ngũ
              </p>
              <p className="mt-2 font-display text-[2rem] font-extrabold leading-none text-accent">
                320+
              </p>
              <p className="mt-1 text-[0.8rem] text-muted">kỹ sư và kỹ thuật viên toàn quốc</p>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2.2rem]">
            Dịch vụ của chúng tôi
          </h2>
          <span className="text-[0.85rem] text-muted">8 nhóm · trọn gói EPCI</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`rounded-[22px] p-6 transition-transform hover:-translate-y-1 ${
                i % 3 === 0 ? "bg-surface" : i % 3 === 1 ? "bg-surface2" : "bg-accentsoft"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-canvas text-accent">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="text-[0.72rem] font-bold text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 font-display text-[1rem] font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex gap-2 text-[0.76rem] leading-snug text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* sectors */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="rounded-[22px] bg-surface p-8">
          <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
            Chúng tôi phục vụ ngành nào?
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 rounded-2xl bg-surface2 px-4 py-4 transition-colors hover:bg-accentsoft"
              >
                <span className="text-accent">
                  <SectorIcon name={s.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.85rem] font-bold leading-tight">{s.name}</p>
                  <p className="mt-0.5 text-[0.74rem] text-muted">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <SectorGallery className="mt-4" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2.2rem]">
            Dự án tiêu biểu
          </h2>
          <span className="text-[0.85rem] text-muted">{projects.length} dự án trong danh mục</span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-[22px] p-7 ${
                i === 0 ? "bg-accent text-accentfg lg:row-span-2" : "bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide ${
                    i === 0 ? "bg-canvas/15" : "bg-accentsoft text-accent"
                  }`}
                >
                  {p.category}
                </span>
                <span className={`text-[0.75rem] ${i === 0 ? "opacity-70" : "text-muted"}`}>{p.year}</span>
              </div>
              <h3 className="mt-5 font-display text-[1.25rem] font-extrabold leading-snug">{p.name}</h3>
              <p className={`mt-2 text-[0.84rem] leading-relaxed ${i === 0 ? "opacity-80" : "text-muted"}`}>
                {p.scope}
              </p>
              <div className={`mt-6 rounded-2xl p-4 ${i === 0 ? "bg-canvas/10" : "bg-surface2"}`}>
                {i === 0 ? (
                  <MediaFrame
                    src={img.hvacAhu}
                    alt={p.name}
                    ratio="aspect-[16/9]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ) : (
                  <MediaFrame
                    src={img.hvacSpiralDuct}
                    alt={p.name}
                    ratio="aspect-[16/9]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                )}
              </div>
              <div
                className={`mt-auto flex flex-wrap gap-2 pt-5 text-[0.74rem] font-semibold ${
                  i === 0 ? "opacity-80" : "text-muted"
                }`}
              >
                <span>{p.location}</span>
                <span>·</span>
                <span>{p.scale}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(3, 9).map((p) => (
            <div
              key={p.name}
              className="rounded-[22px] bg-surface px-6 py-5 transition-colors hover:bg-accentsoft"
            >
              <div className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-wide text-muted">
                {p.location} · {p.year}
              </div>
              <p className="mt-2 font-display text-[0.98rem] font-bold leading-snug">{p.name}</p>
              <p className="mt-1.5 text-[0.78rem] text-muted">{p.scale}</p>
            </div>
          ))}
        </div>
      </section>

      {/* why us */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="rounded-[22px] bg-surface p-8">
          <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
            Lý do chủ đầu tư chọn AEROTECH
          </h2>
          <WhyUsGrid className="mt-6" />
        </div>
      </section>

      {/* process */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="rounded-[22px] bg-surface2 p-8">
          <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
            Quy trình làm việc
          </h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s, i) => (
              <li key={s.step} className="rounded-2xl bg-canvas p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accentsoft text-[0.75rem] font-extrabold text-accent">
                    {s.step}
                  </span>
                  <span className="text-[0.72rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-4 font-display text-[0.98rem] font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="mt-4 h-4 w-4 text-accent lg:hidden" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* team + certificates */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[22px] bg-surface p-8 lg:col-span-2">
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Ban lãnh đạo &amp; đội kỹ thuật
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {team.map((m) => (
                <div key={m.name} className="rounded-2xl bg-surface2 p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent font-display text-[0.8rem] font-extrabold text-accentfg">
                      {m.name
                        .split(" ")
                        .slice(-2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-[0.88rem] font-bold leading-tight">{m.name}</p>
                      <p className="text-[0.76rem] text-accent">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[0.78rem] leading-relaxed text-muted">{m.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-[22px] bg-fg p-8 text-canvas">
              <Sparkles className="h-5 w-5" />
              <h3 className="mt-4 font-display text-[1.15rem] font-extrabold">Chứng chỉ &amp; tiêu chuẩn</h3>
              <ul className="mt-4 space-y-2">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-center justify-between gap-3 text-[0.8rem]">
                    <span className="font-semibold">{c.title}</span>
                    <span className="text-[0.72rem] opacity-55">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[22px] bg-surface p-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
                Đối tác thiết bị
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {partners.map((p) => (
                  <span key={p} className="rounded-lg bg-surface2 px-2.5 py-1.5 text-[0.72rem] font-bold text-muted">
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
                Khách hàng tiêu biểu
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{clients.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="rounded-[22px] bg-surface p-8">
          <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
            Câu hỏi thường gặp
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[22px] bg-accent p-9 text-accentfg lg:col-span-2">
            <h2 className="font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.5rem]">
              Nhận báo giá trong 24 giờ
            </h2>
            <p className="mt-4 max-w-lg text-[0.93rem] leading-relaxed opacity-80">
              Gửi bản vẽ công trình và yêu cầu vận hành. Kỹ sư phụ trách sẽ khảo sát và đề xuất
              phương án tối ưu chi phí vận hành dài hạn.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-accentfg px-5 py-3 text-sm font-bold text-accent transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-canvas/15 px-5 py-3 text-sm font-bold text-accentfg transition-colors hover:bg-canvas/25"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
          </div>
          <div className="rounded-[22px] bg-surface p-8">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">Trụ sở</p>
            <p className="mt-3 text-[0.87rem] leading-relaxed text-muted">{company.address}</p>
            <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
              Giờ làm việc
            </p>
            <p className="mt-2 text-[0.85rem] text-muted">{company.workingHours}</p>
            <p className="mt-5 text-[0.72rem] text-muted">MST {company.taxCode}</p>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-3 border-t border-line pt-6 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-bold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
