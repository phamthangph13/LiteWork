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
import { LogoMark, SectionRule } from "@/components/visuals";

export default function EditorialDesign() {
  return (
    <div className="theme-editorial min-h-screen bg-canvas font-body text-fg">
      {/* masthead */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center justify-between border-b border-line py-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            <span>Số 04 · Mùa xây dựng 2026</span>
            <span className="hidden sm:inline">{company.addressShort} · {company.hotline}</span>
            <span>{company.founded} — 2026</span>
          </div>

          <div className="flex items-center justify-between gap-6 py-6">
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-9 text-accent" />
              <div className="leading-none">
                <p className="font-display text-[1.3rem] font-bold tracking-tight">{company.brand}</p>
                <p className="mt-1 text-[0.58rem] uppercase tracking-[0.26em] text-muted">
                  Điều hoà không khí &amp; Thông gió
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-7 md:flex">
              {["Hồ sơ", "Dịch vụ", "Dự án", "Quy trình", "Liên hệ"].map((i) => (
                <a key={i} href="#du-an" className="text-[0.82rem] font-medium text-muted transition-colors hover:text-accent">
                  {i}
                </a>
              ))}
            </nav>
            <a
              href="#lien-he"
              className="border border-fg px-4 py-2.5 text-[0.8rem] font-semibold transition-colors hover:bg-fg hover:text-canvas"
            >
              Báo giá
            </a>
          </div>
        </div>
      </header>

      {/* cover story */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionRule className="h-2 w-28" accent="#b4530a" />
              <p className="mt-6 text-[0.72rem] uppercase tracking-[0.24em] text-accent">
                Chuyên đề · Năng lực triển khai
              </p>
              <h1 className="mt-4 font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.025em] sm:text-[4.2rem]">
                Không khí tốt
                <br />
                bắt đầu từ
                <br />
                <span className="italic text-accent">hệ thống.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.8] text-muted">
                {company.subline}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-2 bg-fg px-6 py-3.5 text-[0.85rem] font-semibold text-canvas transition-colors hover:bg-accent hover:text-accentfg"
                >
                  Đọc hồ sơ năng lực
                  <ArrowRight className="h-4 w-4" />
                </a>
                <span className="text-[0.82rem] text-muted">18 tỉnh thành · 480+ dự án</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-line bg-surface2 p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">Một thoáng nhìn</p>
                <MediaFrame
                  src={img.hvacAhu}
                  alt="Hệ thống AHU do AEROTECH thi công"
                  ratio="aspect-[4/3]"
                  className="mt-4"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <p className="mt-5 border-t border-line pt-4 text-[0.82rem] leading-relaxed text-muted">
                  Mặt bằng thiết kế điển hình cho nhà xưởng 45.000 m² — khu vực làm mát quy trình,
                  khu lạnh và khu văn phòng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stat strip */}
      <section className="border-b border-line bg-fg text-canvas">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-7 lg:px-6">
              <p className="font-display text-[1.9rem] font-bold leading-none">
                {s.value}
                <span className="ml-1 text-[0.78rem] font-normal opacity-60">{s.unit}</span>
              </p>
              <p className="mt-2 text-[0.74rem] leading-snug opacity-65">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* article: nang luc */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-fg pb-4">
            <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              Hồ sơ năng lực
            </h2>
            <span className="font-display text-[1.1rem] italic text-accent">01</span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:border-r lg:border-line lg:pr-10">
              <p className="text-[1.05rem] leading-[1.85] text-fg">
                <span className="float-left mr-3 mt-1 font-display text-[3.4rem] font-bold leading-none text-accent">
                  {company.founded}
                </span>
                {company.legalName} thành lập năm {company.founded}, chuyên thiết kế, cung cấp và thi
                công hệ thống điều hoà không khí &amp; thông gió cho công trình, thương mại và
                công nghiệp. Chúng tôi hoạt động theo mô hình tổng thầu EPC, toàn bộ khối lượng
                thi công do đội nhân sự trực thuộc đảm nhận.
              </p>

              <p className="mt-6 text-[0.98rem] leading-[1.85] text-muted">
                Mỗi dự án đều được quản lý bằng hồ sơ kỹ thuật chi tiết: bản vẽ thiết kế, dự toán
                BOQ, biên bản nghiệm thu từng hạng mục, hồ sơ hoàn công và chương trình bảo hành.
                Khách hàng luôn biết chính xác hệ thống đang ở trạng thái nào.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="border-t border-line pt-3 text-[0.88rem] leading-relaxed text-muted">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">Ban điều hành</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {team.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-4 py-3.5">
                    <div>
                      <p className="font-display text-[1rem] font-semibold leading-tight">{m.name}</p>
                      <p className="text-[0.78rem] text-muted">{m.role}</p>
                    </div>
                    <span className="shrink-0 text-[0.75rem] uppercase tracking-[0.12em] text-accent">
                      {m.experience}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[0.68rem] uppercase tracking-[0.2em] text-muted">Chứng chỉ</p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {certifications.map((c) => (
                  <li key={c.title} className="border border-line px-3 py-2.5">
                    <p className="text-[0.8rem] font-semibold">{c.title}</p>
                    <p className="text-[0.72rem] text-muted">{c.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-fg pb-4">
            <h2 className="font-display text-[1.7rem] font-bold tracking-[-0.02em]">Ngành ứng dụng</h2>
            <span className="font-display text-[1.1rem] italic text-accent">01</span>
          </div>
          <SectorGallery className="mt-8" />
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-fg pb-4">
            <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              Dịch vụ
            </h2>
            <span className="font-display text-[1.1rem] italic text-accent">02</span>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.id} className="border-b border-line py-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-accent">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.2rem] font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{s.description}</p>
                    <p className="mt-3 text-[0.78rem] italic text-accent">{s.points.join(" · ")}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 border border-line bg-canvas px-4 py-2 text-[0.8rem] font-medium"
              >
                <SectorIcon name={s.icon} className="h-3.5 w-3.5 text-accent" />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* projects contents */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-fg pb-4">
            <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              Mục lục dự án
            </h2>
            <span className="font-display text-[1.1rem] italic text-accent">03</span>
          </div>

          <ol className="mt-6">
            {projects.map((p, i) => (
              <li key={p.name} className="border-b border-line">
                <article className="grid gap-4 py-6 lg:grid-cols-[70px_1.2fr_1fr_0.7fr] lg:items-baseline lg:gap-6">
                  <span className="font-display text-[0.9rem] italic text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.25rem] font-semibold leading-snug">{p.name}</h3>
                    <p className="mt-1 text-[0.76rem] uppercase tracking-[0.14em] text-muted">
                      {p.category} · {p.location} · {p.year}
                    </p>
                  </div>
                  <p className="text-[0.88rem] leading-relaxed text-muted">{p.scope}</p>
                  <p className="text-[0.85rem] font-semibold lg:text-right">{p.scale}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-fg pb-4">
            <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              Vì sao chọn AEROTECH
            </h2>
            <span className="font-display text-[1.1rem] italic text-accent">05</span>
          </div>
          <WhyUsGrid className="mt-10" />
          <h3 className="mt-12 font-display text-[1.4rem] font-bold">Hình ảnh dự án tiêu biểu</h3>
          <ProjectGallery variant="list" limit={6} className="mt-6" />
        </div>
      </section>

      {/* process */}
      <section className="border-b border-line bg-fg text-canvas">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-canvas pb-4">
            <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              Quy trình
            </h2>
            <span className="font-display text-[1.1rem] italic text-accent">04</span>
          </div>

          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <li key={s.step} className="border-t border-canvas/25 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[1.1rem] italic text-accent">{s.step}</span>
                  <span className="text-[0.72rem] uppercase tracking-[0.14em] opacity-55">
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1.15rem] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[0.87rem] leading-relaxed opacity-70">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* clients */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between gap-6 border-b-2 border-fg pb-4">
            <h2 className="font-display text-[1.9rem] font-bold tracking-[-0.02em] sm:text-[2.5rem]">
              Bản quyền niềm tin
            </h2>
            <span className="font-display text-[1.1rem] italic text-accent">05</span>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <p key={c} className="border-b border-line pb-3 font-display text-[1.2rem] font-semibold">
                {c}
              </p>
            ))}
          </div>

          <p className="mt-8 text-[0.8rem] leading-relaxed text-muted">
            Thiết bị chính hãng: {partners.join(" · ")}
          </p>
        </div>
      </section>

      {/* faq + contact */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="flex items-end justify-between gap-6 border-b-2 border-fg pb-4">
              <h2 className="font-display text-[1.7rem] font-bold tracking-[-0.02em]">Hỏi &amp; đáp</h2>
              <span className="font-display text-[1.1rem] italic text-accent">06</span>
            </div>
            <div className="mt-4">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>

          <div id="lien-he" className="scroll-mt-24 border border-line bg-canvas p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-accent">Trang cuối</p>
            <h2 className="mt-4 font-display text-[1.9rem] font-bold leading-tight">
              Bắt đầu bài viết tiếp theo.
            </h2>
            <p className="mt-4 text-[0.92rem] leading-[1.8] text-muted">
              Gửi bản vẽ công trình và yêu cầu vận hành. Ban biên tập — tức là đội kỹ sư của chúng
              tôi — sẽ phản hồi trong 24 giờ.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="flex items-center gap-3 font-display text-[1.15rem] font-semibold hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 font-display text-[1.15rem] font-semibold hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
            <p className="mt-8 border-t border-line pt-5 text-[0.82rem] leading-relaxed text-muted">
              {company.address}
              <br />
              {company.workingHours}
              <br />
              MST {company.taxCode}
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex flex-col gap-3 border-t border-line pt-6 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
