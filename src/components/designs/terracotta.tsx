import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
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
  ProjectGallery,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img } from "@/data/media";
import { AirflowArcs, LogoMark } from "@/components/visuals";

export default function TerracottaDesign() {
  return (
    <div className="theme-terracotta min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[1.15rem] font-bold tracking-tight">{company.brand}</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
                Điều hoà không khí &amp; Thông gió
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {["Câu chuyện", "Năng lực", "Dịch vụ", "Dự án", "Liên hệ"].map((i) => (
              <a key={i} href="#du-an" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-accent">
                {i}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="rounded-full bg-accent px-5 py-2.5 text-[0.83rem] font-bold text-accentfg transition-opacity hover:opacity-85"
          >
            Nhận báo giá
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Từ {company.founded} · Tổng thầu HVAC
              </p>
              <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[3.6rem]">
                Không khí tốt
                <br />
                bắt đầu từ một
                <br />
                <span className="italic text-accent">hệ thống tốt.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.85] text-muted">{company.subline}</p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[0.87rem] font-bold text-accentfg transition-opacity hover:opacity-85"
                >
                  Bắt đầu dự án
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#nang-luc" className="text-[0.87rem] font-semibold text-fg underline underline-offset-4 hover:text-accent">
                  Đọc hồ sơ năng lực
                </a>
              </div>
            </div>

            <div className="relative">
              <MediaFrame
                src={img.hvacSpiralDuct}
                alt="Hệ thống đường ống gió trong tòa nhà thương mại"
                ratio="aspect-[4/5]"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute -bottom-7 -left-5 w-52 rounded-[12px] bg-fg p-6 text-canvas">
                <p className="font-display text-[2.6rem] font-bold leading-none">16</p>
                <p className="mt-1.5 text-[0.75rem] uppercase tracking-[0.14em] opacity-70">
                  năm đồng hành cùng chủ đầu tư
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* numbers */}
      <section className="border-b border-line bg-fg text-canvas">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 px-5 py-12 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[2rem] font-bold leading-none">
                {s.value}
                <span className="ml-1 text-[0.8rem] font-normal opacity-60">{s.unit}</span>
              </p>
              <p className="mt-2 text-[0.75rem] leading-snug opacity-65">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* story */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Câu chuyện của chúng tôi
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[1.9rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
            Chúng tôi tin rằng hệ thống điều hoà tốt là nền móng của mọi công trình bền vững.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.98rem] leading-[1.85] text-muted">
                {company.legalName} khởi đầu từ một đội kỹ sư trẻ tại TP. Hồ Chí Minh năm{" "}
                {company.founded}, chuyên thiết kế và thi công hệ thống điều hoà không khí cho nhà
                xưởng. Mười sáu năm sau, chúng tôi phục vụ 18 tỉnh thành với 480+ công trình đã
                bàn giao — từ nhà máy 45.000 m² đến phòng mổ cấp D.
              </p>
              <p className="mt-5 text-[0.98rem] leading-[1.85] text-muted">
                Điều chúng tôi giữ nguyên từ ngày đầu là cách làm việc: báo giá minh bạch, thi công
                bằng đội của công ty, hồ sơ hoàn công đầy đủ và chăm sóc sau bàn giao.
              </p>

              <ul className="mt-9 space-y-4">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-4 border-b border-line pb-4 text-[0.92rem] leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-[12px] border border-line bg-surface p-6">
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  Ban điều hành
                </p>
                <ul className="mt-4 divide-y divide-line">
                  {team.map((m) => (
                    <li key={m.name} className="flex items-baseline justify-between gap-3 py-3">
                      <div>
                        <p className="text-[0.92rem] font-semibold leading-tight">{m.name}</p>
                        <p className="text-[0.78rem] text-muted">{m.role}</p>
                      </div>
                      <span className="shrink-0 text-[0.74rem] uppercase tracking-[0.12em] text-accent">
                        {m.experience}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[12px] bg-accentsoft p-6">
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Chứng chỉ &amp; tiêu chuẩn
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {certifications.map((c) => (
                    <li key={c.title} className="rounded-[8px] bg-canvas px-3.5 py-2.5">
                      <p className="text-[0.82rem] font-semibold">{c.title}</p>
                      <p className="text-[0.72rem] text-muted">{c.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">Dịch vụ</p>
          <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
            Tám nhóm dịch vụ, một đầu mối
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-[12px] bg-canvas p-6">
                <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-accentsoft text-accent">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="mt-5 font-display text-[1.05rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p} className="flex gap-2 text-[0.78rem] text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
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
        </div>
      </section>

      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Ngành ứng dụng
          </p>
          <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
            Chúng tôi phục vụ ai
          </h2>
          <SectorGallery className="mt-10" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Dự án tiêu biểu
              </p>
              <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
                Những công trình đã bàn giao
              </h2>
            </div>
            <span className="text-[0.85rem] text-muted">{projects.length} dự án tiêu biểu</span>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <article key={p.name} className="overflow-hidden rounded-[12px] border border-line bg-surface">
                <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
                  <div>
                    <MediaFrame
                      src={img.hvacAhu}
                      alt={p.name}
                      ratio="aspect-[16/10]"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">
                      {p.category} · {p.location} · {p.year}
                    </p>
                    <h3 className="mt-2 font-display text-[1.2rem] font-bold leading-snug">{p.name}</h3>
                    <p className="mt-2.5 text-[0.85rem] leading-relaxed text-muted">{p.scope}</p>
                    <p className="mt-4 text-[0.82rem] font-bold">{p.scale}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(4).map((p) => (
              <div key={p.name} className="rounded-[12px] bg-surface2 p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  {p.location} · {p.year}
                </p>
                <p className="mt-2 font-display text-[1rem] font-bold leading-snug">{p.name}</p>
                <p className="mt-1.5 text-[0.78rem] text-muted">{p.scale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Vì sao chọn AEROTECH
          </p>
          <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
            Cam kết dành cho chủ đầu tư
          </h2>
          <WhyUsGrid className="mt-10" />
          <h3 className="mt-12 font-display text-[1.4rem] font-bold">Hình ảnh dự án</h3>
          <ProjectGallery variant="row" limit={6} className="mt-6" />
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line bg-fg text-canvas">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">Quy trình</p>
          <h2 className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.6rem]">
            Sáu bước, minh bạch tuyệt đối
          </h2>
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="border-t border-canvas/25 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[1.15rem] font-bold text-accent">{s.step}</span>
                  <span className="text-[0.72rem] uppercase tracking-[0.12em] opacity-55">
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1.15rem] font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed opacity-70">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* partners + faq */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Đối tác
            </p>
            <h2 className="mt-5 font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Khách hàng và nhà sản xuất
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {clients.map((c) => (
                <p key={c} className="rounded-[8px] bg-surface2 px-4 py-3.5 text-[0.85rem] font-semibold">
                  {c}
                </p>
              ))}
            </div>
            <p className="mt-7 text-[0.82rem] leading-relaxed text-muted">
              Thiết bị chính hãng: {partners.join(" · ")}
            </p>
          </div>

          <div>
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-accent">Hỏi đáp</p>
            <h2 className="mt-5 font-display text-[1.6rem] font-bold tracking-[-0.02em] sm:text-[2rem]">
              Câu hỏi thường gặp
            </h2>
            <div className="mt-5">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[12px] bg-accent p-10 text-accentfg lg:col-span-2">
            <h2 className="font-display text-[2rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
              Gửi hồ sơ, nhận phương án trong 24 giờ.
            </h2>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed opacity-85">
              Kỹ sư phụ trách sẽ khảo sát, tính tải nhiệt và đề xuất phương án tối ưu chi phí vận
              hành dài hạn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-accentfg px-6 py-3.5 text-[0.87rem] font-bold text-accent transition-opacity hover:opacity-85"
              >
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-accentfg/35 px-6 py-3.5 text-[0.87rem] font-bold text-accentfg transition-colors hover:bg-accentfg/10"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
          </div>

          <div className="rounded-[12px] border border-line bg-surface p-8">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-muted">Trụ sở</p>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">{company.address}</p>
            <p className="mt-6 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Giờ làm việc
            </p>
            <p className="mt-2 text-[0.85rem] text-muted">{company.workingHours}</p>
            <div className="mt-6 flex justify-center border-t border-line pt-6">
              <AirflowArcs className="h-24 w-24 text-fg/40" accent="#c05b28" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
