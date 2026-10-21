import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import {
  certifications,
  clients,
  company,
  documents,
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

export default function BasicDesign() {
  return (
    <div className="theme-basic min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line bg-canvas">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[1rem] font-bold tracking-tight">{company.brand}</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
                HVAC &amp; Ventilation
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 lg:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-accent">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="border border-line bg-accent px-4 py-2.5 text-[0.83rem] font-bold text-accentfg transition-opacity hover:opacity-85"
          >
            Báo giá
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-px bg-line lg:grid-cols-3">
            <div className="col-span-2 bg-canvas p-8 lg:p-12">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-accent">
                01 / Điều hoà không khí &amp; thông gió
              </p>
              <h1 className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[3.2rem]">
                Tổng thầu thiết kế, cung cấp và thi công hệ thống điều hoà không khí
              </h1>
              <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted">{company.subline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 bg-fg px-5 py-3 text-[0.86rem] font-bold text-canvas transition-opacity hover:opacity-80"
                >
                  Nhận báo giá
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 border border-line px-5 py-3 text-[0.86rem] font-bold transition-colors hover:bg-surface2"
                >
                  Dự án
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-px bg-line">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className="flex-1 bg-canvas p-6">
                  <p className="font-display text-[1.7rem] font-extrabold leading-none">
                    {s.value}
                    <span className="ml-1 text-[0.8rem] text-accent">{s.unit}</span>
                  </p>
                  <p className="mt-2 text-[0.78rem] text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* logos */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-6">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-muted">
            Đối tác &amp; khách hàng
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="text-[0.88rem] font-bold">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-[0.78rem] font-bold text-accent">02</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Hồ sơ năng lực
            </h2>
          </div>

          <div className="mt-8 grid gap-px bg-line lg:grid-cols-3">
            <div className="bg-canvas p-8 lg:col-span-2">
              <p className="text-[0.98rem] leading-[1.85] text-muted">
                {company.legalName} thành lập năm {company.founded}. Chúng tôi thực hiện trọn gói
                chuỗi EPCI: khảo sát, thiết kế, dự toán, cung cấp thiết bị chính hãng, thi công,
                vận hành thử, nghiệm thu và bảo trì. Toàn bộ khối lượng thi công do đội của công ty
                đảm nhận.
              </p>
              <ul className="mt-7 grid gap-px bg-line sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="bg-canvas px-4 py-3.5 text-[0.86rem] leading-relaxed text-muted">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-px bg-line">
              <div className="bg-canvas">
                <MediaFrame
                  src={img.plantInterior}
                  alt="Thi công hệ thống điều hoà trong nhà xưởng"
                  ratio="aspect-[16/10]"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="p-6">
                <p className="text-[0.85rem] font-bold">Năng lực thiết kế</p>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">
                  32 kỹ sư M&amp;E · tính tải nhiệt ASHRAE · mô phỏng CFD.
                </p>
                </div>
              </div>
              <div className="bg-canvas p-6">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
                  Chứng chỉ
                </p>
                <ul className="mt-3 space-y-1.5">
                  {certifications.map((c) => (
                    <li key={c.title} className="flex items-baseline justify-between gap-3 border-b border-line pb-1.5 text-[0.8rem]">
                      <span className="font-semibold">{c.title}</span>
                      <span className="text-[0.72rem] text-muted">{c.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-px grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-6">
            {team.map((m) => (
              <div key={m.name} className="bg-canvas p-5">
                <p className="text-[0.88rem] font-bold leading-tight">{m.name}</p>
                <p className="mt-1 text-[0.76rem] text-accent">{m.role}</p>
                <p className="mt-2 text-[0.74rem] text-muted">{m.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-[0.78rem] font-bold text-accent">03</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Dịch vụ
            </h2>
          </div>

          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="bg-canvas p-6">
                <div className="flex items-center justify-between">
                  <span className="text-accent">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[0.72rem] font-bold text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-[1rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 border-t border-line pt-3">
                  {s.points.map((p) => (
                    <li key={p} className="py-0.5 text-[0.76rem] text-muted">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-px grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.name} className="flex items-center gap-2.5 bg-canvas px-4 py-3.5">
                <SectorIcon name={s.icon} className="h-4 w-4 text-accent" />
                <span className="text-[0.83rem] font-semibold">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-[0.78rem] font-bold text-accent">05</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Ngành ứng dụng
            </h2>
          </div>
          <SectorGallery className="mt-8" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-[0.78rem] font-bold text-accent">04</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Dự án
            </h2>
            <span className="ml-auto text-[0.78rem] text-muted">{projects.length} bản ghi</span>
          </div>

          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <article key={p.name} className="bg-canvas p-6">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span className="text-[0.72rem] font-bold uppercase tracking-wide text-accent">
                    {p.category}
                  </span>
                  <span className="text-[0.74rem] text-muted">{p.year}</span>
                </div>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold leading-snug">{p.name}</h3>
                <p className="mt-1.5 text-[0.78rem] text-muted">{p.location}</p>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{p.scope}</p>
                <div className="mt-4 border-t border-line pt-3">
                  <MediaFrame
                    src={img.hvacAhu}
                    alt={p.name}
                    ratio="aspect-[16/9]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-3 text-[0.78rem] font-bold">{p.scale}</p>
              </article>
            ))}
          </div>

          <div className="mt-px overflow-x-auto bg-line">
            <table className="w-full min-w-[640px] border-collapse bg-canvas text-left text-[0.82rem]">
              <tbody>
                {projects.slice(6).map((p) => (
                  <tr key={p.name} className="border-b border-line">
                    <td className="px-4 py-3 font-semibold">{p.name}</td>
                    <td className="px-4 py-3 text-muted">{p.location}</td>
                    <td className="px-4 py-3 text-muted">{p.scale}</td>
                    <td className="px-4 py-3 text-muted">{p.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-[0.78rem] font-bold text-accent">05</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Quy trình
            </h2>
          </div>
          <ol className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="bg-canvas p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[1.2rem] font-extrabold text-accent">{s.step}</span>
                  <span className="text-[0.74rem] text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-3 font-display text-[1rem] font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="text-[0.78rem] font-bold text-accent">08</span>
            <h2 className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em] sm:text-[1.9rem]">
              Vì sao chọn AEROTECH
            </h2>
          </div>
          <WhyUsGrid className="mt-8" />
          <h3 className="mt-10 font-display text-[1.2rem] font-extrabold">Cam kết dịch vụ (SLA)</h3>
          <CommitmentTable className="mt-4" />
          <h3 className="mt-10 font-display text-[1.2rem] font-extrabold">Hình ảnh dự án</h3>
          <ProjectGallery variant="row" limit={6} className="mt-4" />
        </div>
      </section>

      {/* documents + faq */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-px bg-line lg:grid-cols-2">
          <div className="bg-canvas p-8">
            <div className="flex items-center gap-4 border-b border-line pb-4">
              <span className="text-[0.78rem] font-bold text-accent">06</span>
              <h2 className="font-display text-[1.3rem] font-extrabold tracking-[-0.02em]">
                Tài liệu
              </h2>
            </div>
            <ul className="mt-6">
              {documents.map((d) => (
                <li
                  key={d.name}
                  className="flex items-center justify-between gap-4 border-b border-line py-3.5"
                >
                  <div>
                    <p className="text-[0.88rem] font-bold">{d.name}</p>
                    <p className="text-[0.76rem] text-muted">
                      {d.note} · {d.type}
                    </p>
                  </div>
                  <Download className="h-4 w-4 shrink-0 text-accent" />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.8rem] leading-relaxed text-muted">
              Thiết bị chính hãng: {partners.join(" · ")}
            </p>
          </div>

          <div className="bg-canvas p-8">
            <div className="flex items-center gap-4 border-b border-line pb-4">
              <span className="text-[0.78rem] font-bold text-accent">07</span>
              <h2 className="font-display text-[1.3rem] font-extrabold tracking-[-0.02em]">
                Câu hỏi
              </h2>
            </div>
            <div className="mt-2">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="lien-he" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-px bg-line lg:grid-cols-2">
            <div className="bg-fg p-8 text-canvas">
              <p className="text-[0.74rem] font-bold uppercase tracking-[0.18em] opacity-50">08 / Liên hệ</p>
              <h2 className="mt-4 font-display text-[1.8rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.3rem]">
                Gửi hồ sơ công trình — nhận báo giá trong 24 giờ.
              </h2>
              <p className="mt-4 max-w-lg text-[0.9rem] leading-relaxed opacity-70">
                Báo giá sơ bộ trong 24 giờ làm việc. Báo giá chi tiết theo BOQ trong 7–10 ngày sau
                khảo sát hiện trường.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.hotline.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-[0.86rem] font-bold text-accentfg"
                >
                  <Phone className="h-4 w-4" />
                  {company.hotline}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 border border-canvas/30 px-5 py-3 text-[0.86rem] font-bold"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
            </div>

            <div className="bg-canvas p-8">
              <dl className="space-y-5 text-[0.88rem]">
                <div>
                  <dt className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">Trụ sở</dt>
                  <dd className="mt-1.5 text-muted">{company.address}</dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">
                    Giờ làm việc
                  </dt>
                  <dd className="mt-1.5 text-muted">{company.workingHours}</dd>
                </div>
                <div>
                  <dt className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted">
                    Pháp lý
                  </dt>
                  <dd className="mt-1.5 text-muted">
                    {company.license} · MST {company.taxCode}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-bold text-fg hover:text-accent">
            Quay lại thư viện mẫu →
          </Link>
        </div>
      </footer>
    </div>
  );
}
