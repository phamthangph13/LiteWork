import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
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
  SafetyList,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

const nav = ["Năng lực", "Dịch vụ", "Dự án", "Quy trình", "Liên hệ"];

export default function CleanDesign() {
  return (
    <div className="theme-clean min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[1.02rem] font-bold tracking-tight">{company.brand}</p>
              <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted">
                HVAC &amp; Ventilation
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item === "Năng lực" ? "gioi-thieu" : item === "Dịch vụ" ? "dich-vu" : item === "Dự án" ? "du-an" : item === "Quy trình" ? "quy-trinh" : "lien-he"}`}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="hidden items-center gap-2 text-sm font-semibold lg:flex">
              <Phone className="h-4 w-4 text-accent" />
              {company.hotline}
            </a>
            <a
              href="#lien-he"
              className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accentfg transition-colors hover:bg-accent/90"
            >
              Nhận báo giá
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1.5 text-[0.72rem] font-semibold text-muted">
              <BadgeCheck className="h-3.5 w-3.5 text-accent" />
              Từ {company.founded} · 480+ dự án đã bàn giao
            </span>

            <h1 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-[3rem]">
              Điều hoà không khí cho{" "}
              <span className="text-accent">công trình, thương mại và công nghiệp</span>
            </h1>

            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted">
              {company.subline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accentfg transition-colors hover:bg-accent/90"
              >
                Yêu cầu báo giá
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#du-an"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Xem dự án tiêu biểu
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-extrabold text-fg">
                    {s.value}
                    <span className="ml-1 text-sm font-bold text-accent">{s.unit}</span>
                  </dt>
                  <dd className="mt-1 text-[0.76rem] leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-line bg-canvas">
              <MediaFrame
                src={img.hvacAhu}
                alt="Hệ thống AHU do AEROTECH thi công trong nhà xưởng"
                ratio="aspect-[4/3]"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              >
                <div className="absolute inset-x-0 bottom-0 bg-canvas/95 p-5">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-muted">Hồ sơ năng lực 2026</span>
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[0.68rem] font-semibold text-accentfg">
                      12 mục
                    </span>
                  </div>
                </div>
              </MediaFrame>

              <div className="p-6">
                <ul className="space-y-2.5">
                  {highlights.slice(0, 4).map((h) => (
                    <li key={h} className="flex gap-2.5 text-[0.83rem] leading-relaxed text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-[0.72rem] font-medium text-muted">
                    <Download className="h-3.5 w-3.5" /> Hồ sơ năng lực PDF
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-[0.72rem] font-medium text-muted">
                    <ShieldCheck className="h-3.5 w-3.5" /> ISO 9001:2015
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-line bg-canvas px-4 py-3 shadow-lg lg:block">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted">
                Tiết kiệm điện
              </p>
              <p className="font-display text-xl font-extrabold text-accent">35%</p>
            </div>
          </div>
        </div>
      </section>

      {/* trust bar */}
      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <p className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Đơn vị đã tin tưởng và đối tác thiết bị
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-6">
            {clients.slice(0, 6).map((c) => (
              <div
                key={c}
                className="flex items-center justify-center rounded-lg border border-line px-3 py-3 text-center text-[0.72rem] font-bold uppercase tracking-wide text-muted"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section id="gioi-thieu" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="eyebrow text-accent">Về AEROTECH</span>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.4rem]">
              Hồ sơ năng lực của một tổng thầu HVAC
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
              {company.legalName} hoạt động từ năm {company.founded}. Chúng tôi thực hiện trọn gói
              chuỗi EPCI — khảo sát, thiết kế, cung cấp thiết bị, thi công lắp đặt, vận hành thử,
              nghiệm thu và bảo trì. Đội ngũ kỹ sư trực thuộc công ty đảm nhận toàn bộ phần thi
              công, không thuê ngoài.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
              Mỗi dự án đều có hồ sơ hoàn công, biên bản nghiệm thu và chương trình bảo hành rõ
              ràng. Chúng tôi phục vụ 18 tỉnh thành với đội kỹ thuật lưu trú tại khu vực.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[0.85rem] leading-relaxed text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface2">
              <MediaFrame
                src={img.plantInterior}
                alt="Thi công hệ thống điều hoà trong nhà xưởng"
                ratio="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Thi công công nghiệp
                </p>
                <p className="mt-1 font-display text-[1rem] font-bold">Đường ống gió &amp; nước lạnh</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-canvas">
              <MediaFrame
                src={img.officeModern}
                alt="Văn phòng, tòa nhà thương mại sử dụng điều hoà trung tâm"
                ratio="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Thương mại &amp; văn phòng
                </p>
                <p className="mt-1 font-display text-[1rem] font-bold">Chiller &amp; VRF tiết kiệm điện</p>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-canvas p-6 sm:col-span-2">
              <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.slice(2).map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-xl font-extrabold text-accent">
                      {s.value}
                      <span className="ml-0.5 text-xs">{s.unit}</span>
                    </dt>
                    <dd className="mt-1 text-[0.74rem] leading-snug text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* why us */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent">Vì sao chọn AEROTECH</span>
            <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.02em] sm:text-[2.4rem]">
              Lợi thế dành cho chủ đầu tư và đơn vị đấu thầu
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
              Chúng tôi tổ chức công việc theo tiêu chuẩn doanh nghiệp: hợp đồng rõ ràng, tiến độ
              cam kết bằng văn bản, hồ sơ đúng quy định và trách nhiệm bảo hành xuyên suốt vòng đời
              hệ thống.
            </p>
          </div>
          <WhyUsGrid className="mt-12" />
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-accent">Dịch vụ</span>
              <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.02em] sm:text-[2.4rem]">
                8 nhóm dịch vụ trọn gói
              </h2>
            </div>
            <p className="max-w-md text-[0.9rem] leading-relaxed text-muted">
              Từ tư vấn thiết kế đến bảo trì vận hành dài hạn — một đầu mối duy nhất chịu trách
              nhiệm toàn bộ hệ thống điều hoà của công trình.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.id}
                className="group rounded-xl border border-line bg-canvas p-5 transition-colors hover:border-accent"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accentsoft text-accent">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-4 font-display text-[0.98rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p} className="flex gap-2 text-[0.76rem] leading-snug text-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {p}
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
        <div className="mx-auto max-w-6xl px-5 py-16">
          <span className="eyebrow text-accent">Ngành nghề</span>
          <h2 className="mt-4 font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
            Giải pháp theo từng ngành
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div
                key={s.name}
                className="flex items-start gap-3 rounded-xl border border-line px-4 py-4 transition-colors hover:bg-surface2"
              >
                <span className="mt-0.5 text-accent">
                  <SectorIcon name={s.icon} />
                </span>
                <div>
                  <p className="text-[0.88rem] font-semibold leading-snug">{s.name}</p>
                  <p className="mt-0.5 text-[0.76rem] text-muted">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-accent">Dự án tiêu biểu</span>
              <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.02em] sm:text-[2.4rem]">
                480+ công trình đã bàn giao
              </h2>
            </div>
            <span className="text-sm text-muted">Cập nhật tháng 10/2026</span>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article key={p.name} className="flex flex-col overflow-hidden rounded-2xl border border-line">
                <MediaFrame
                  src={img.hvacAhu}
                  alt={p.name}
                  ratio="aspect-[16/10]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                >
                  <span className="absolute left-4 top-4 rounded-md bg-accent px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-wide text-accentfg">
                    {p.category}
                  </span>
                </MediaFrame>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-wide text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location} · {p.year}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug">{p.name}</h3>
                  <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line pt-4">
                    <span className="rounded-md bg-accentsoft px-2.5 py-1 text-[0.72rem] font-semibold text-accent">
                      {p.scale}
                    </span>
                    <span className="rounded-md border border-line px-2.5 py-1 text-[0.72rem] font-medium text-muted">
                      {p.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <ProjectGallery variant="row" limit={6} className="mt-5" />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(3, 9).map((p) => (
              <div
                key={p.name}
                className="flex items-start gap-3 rounded-xl border border-line px-4 py-4 transition-colors hover:bg-surface2"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accentsoft text-[0.7rem] font-bold text-accent">
                  {p.year.slice(2)}
                </span>
                <div>
                  <p className="text-[0.86rem] font-semibold leading-snug">{p.name}</p>
                  <p className="mt-1 text-[0.74rem] text-muted">
                    {p.location} · {p.scale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="quy-trinh" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
          <span className="eyebrow text-accent">Quy trình</span>
          <h2 className="mt-4 font-display text-[1.9rem] font-extrabold tracking-[-0.02em] sm:text-[2.4rem]">
            Sáu bước từ khảo sát đến bảo trì
          </h2>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <li key={step.step} className="relative rounded-xl border border-line bg-canvas p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-accentsoft">{step.step}</span>
                  <span className="rounded-md bg-surface2 px-2.5 py-1 text-[0.7rem] font-medium text-muted">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1rem] font-bold">{step.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{step.description}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 bg-surface2 text-line lg:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* team + certificates */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow text-accent">Đội ngũ</span>
            <h2 className="mt-4 font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              320+ kỹ sư, kỹ thuật viên
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {team.map((m) => (
                <div key={m.name} className="rounded-xl border border-line p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accentsoft font-display text-sm font-bold text-accent">
                      {m.name
                        .split(" ")
                        .slice(-2)
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-[0.9rem] font-semibold leading-tight">{m.name}</p>
                      <p className="text-[0.74rem] text-accent">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[0.78rem] leading-relaxed text-muted">{m.focus}</p>
                  <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
                    Kinh nghiệm {m.experience}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow text-accent">Chứng chỉ &amp; năng lực</span>
            <h2 className="mt-4 font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Đạt chuẩn quốc tế
            </h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-center gap-3 py-3.5">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-[0.86rem] font-semibold">{c.title}</span>
                  <span className="ml-auto text-[0.75rem] text-muted">{c.detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-accentsoft p-6">
              <p className="text-[0.82rem] font-semibold text-accent">Đối tác thiết bị chính hãng</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="rounded-md border border-line bg-canvas px-2.5 py-1.5 text-[0.72rem] font-semibold text-muted"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* commitments */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow text-accent">Cam kết dịch vụ</span>
            <h2 className="mt-4 font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              SLA ghi rõ trong hợp đồng
            </h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
              Các mốc cam kết dưới đây được quy định trong hợp đồng, kèm điều khoản đền bù và
              biện pháp bảo đảm. Bộ phận vận hành của chủ đầu tư theo dõi bằng báo cáo định kỳ.
            </p>
            <SafetyList className="mt-8" />
          </div>
          <CommitmentTable />
        </div>
      </section>

      {/* faq */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow text-accent">Giải đáp</span>
            <h2 className="mt-4 font-display text-[1.7rem] font-extrabold tracking-[-0.02em] sm:text-[2rem]">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
              Không tìm thấy câu trả lời? Gọi trực tiếp {company.hotline} để được tư vấn trong 15
              phút.
            </p>
          </div>
          <FaqAccordion
            items={faqs}
            questionClassName="text-fg hover:text-accent"
            answerClassName="text-muted"
          />
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="scroll-mt-24 bg-accent">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="text-accentfg">
            <span className="eyebrow opacity-70">Bắt đầu dự án</span>
            <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
              Gửi hồ sơ công trình, nhận báo giá trong 24 giờ
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed opacity-80">
              Gửi bản vẽ, quy mô và yêu cầu vận hành. Kỹ sư phụ trách sẽ khảo sát và đề xuất phương
              án tối ưu chi phí vận hành dài hạn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accentfg px-5 py-3 text-sm font-semibold text-accent transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-accentfg/40 px-5 py-3 text-sm font-semibold text-accentfg transition-colors hover:bg-accentfg/10"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-canvas p-7">
            <h3 className="font-display text-lg font-bold">Thông tin liên hệ</h3>
            <ul className="mt-5 space-y-4 text-[0.85rem] text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {company.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {company.hotline} · {company.hotline2}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {company.email}
              </li>
            </ul>
            <div className="mt-6 border-t border-line pt-5 text-[0.78rem] leading-relaxed text-muted">
              <p className="font-semibold text-fg">{company.license}</p>
              <p className="mt-1">MST: {company.taxCode}</p>
              <p className="mt-1">{company.workingHours}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-canvas">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            ← Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
