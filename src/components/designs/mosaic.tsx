import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  faqs,
  highlights,
  partners,
  projects,
  services,
  stats,
  team,
} from "@/data/company";
import { FaqAccordion } from "@/components/designs/parts";
import { FullscreenMenu } from "@/components/designs/navs";
import {
  CommitmentTable,
  MediaFrame,
  SectorGallery,
  WhyUsGrid,
} from "@/components/designs/sections";
import { img, projectImages } from "@/data/media";
import { LogoMark } from "@/components/visuals";

export default function MosaicDesign() {
  return (
    <div className="theme-mosaic min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <div className="leading-none">
              <p className="font-display text-[1.05rem] font-extrabold tracking-tight">AEROTECH</p>
              <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-muted">
                Điều hoà không khí &amp; Thông gió
              </p>
            </div>
          </div>
          <FullscreenMenu
            items={[
              { label: "Năng lực", meta: "hồ sơ", href: "#nang-luc" },
              { label: "Dịch vụ", meta: "8 nhóm", href: "#dich-vu" },
              { label: "Dự án", meta: "480+", href: "#du-an" },
              { label: "Quy trình", meta: "6 bước", href: "#quy-trinh" },
              { label: "Liên hệ", meta: "24/7", href: "#lien-he" },
            ]}
          />
        </div>
      </header>

      {/* hero mosaic */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="grid gap-3 lg:grid-cols-4">
            <div className="flex flex-col justify-between rounded-xl bg-accent p-8 text-accentfg lg:col-span-2 lg:row-span-2">
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] opacity-70">
                  Công trình của bạn, đúng chuẩn
                </p>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[3rem]">
                  Hệ thống điều hoà
                  <br />
                  cho công trình,
                  <br />
                  thương mại và
                  <br />
                  công nghiệp.
                </h1>
                <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed opacity-85">
                  {company.subline}
                </p>
              </div>
              <a
                href="#lien-he"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accentfg px-6 py-3.5 text-[0.87rem] font-bold text-accent"
              >
                Nhận báo giá
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <MediaFrame
              src={img.hvacSpiralDuct}
              alt="Hệ thống đường ống gió"
              ratio="aspect-[4/3] lg:aspect-auto lg:h-full"
              className="rounded-xl"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
                Diện tích đã điều hoà
              </p>
              <p className="mt-2 font-display text-[2.4rem] font-extrabold leading-none text-accent">
                2.4M m²
              </p>
              <p className="mt-2 text-[0.8rem] text-muted">18 tỉnh thành triển khai</p>
            </div>
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.slice(0, 4).map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-surface p-5">
                <dt className="font-display text-[1.7rem] font-extrabold leading-none">
                  {s.value}
                  <span className="ml-1 text-[0.75rem] text-accent">{s.unit}</span>
                </dt>
                <dd className="mt-2 text-[0.78rem] text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* capability */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-accent">
                Về AEROTECH
              </p>
              <h2 className="mt-4 font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.6rem]">
                Mười sáu năm làm đúng một việc.
              </h2>
              <p className="mt-5 text-[0.95rem] leading-[1.85] text-muted">
                {company.legalName} thực hiện trọn chuỗi EPCI — khảo sát, thiết kế, dự toán, cung cấp
                thiết bị chính hãng, thi công, vận hành thử, nghiệm thu và bảo trì dài hạn.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="rounded-xl bg-surface p-4 text-[0.84rem] leading-relaxed text-muted">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MediaFrame
                src={img.plantInterior}
                alt="Thi công tại nhà xưởng"
                ratio="aspect-[4/3]"
                className="rounded-xl"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <MediaFrame
                src={img.officeModern}
                alt="Tòa nhà văn phòng"
                ratio="aspect-[4/3]"
                className="rounded-xl"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="rounded-xl bg-surface2 p-6 sm:col-span-2">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">
                  Ban điều hành
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {team.slice(0, 4).map((m) => (
                    <div key={m.name}>
                      <p className="text-[0.85rem] font-bold leading-tight">{m.name}</p>
                      <p className="text-[0.75rem] text-accent">{m.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <WhyUsGrid className="mt-12" />
        </div>
      </section>

      {/* services */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
            Dịch vụ
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-xl bg-canvas p-6">
                <h3 className="font-display text-[1.02rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p} className="text-[0.78rem] text-muted">
                      — {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <SectorGallery className="mt-4" />
        </div>
      </section>

      {/* projects mosaic */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.8rem] font-extrabold tracking-[-0.03em] sm:text-[2.4rem]">
              Dự án
            </h2>
            <span className="text-[0.84rem] text-muted">{projects.length} dự án</span>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <article
                key={p.name}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 || i === 5 ? "lg:col-span-2" : ""
                }`}
              >
                <MediaFrame
                  src={projectImages[i % projectImages.length]}
                  alt={p.name}
                  ratio={i === 0 || i === 5 ? "aspect-[16/9]" : "aspect-[4/3]"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                >
                  <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-5 text-white">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] opacity-85">
                      {p.category} · {p.year}
                    </span>
                    <h3 className="mt-1.5 font-display text-[1.05rem] font-bold leading-snug">{p.name}</h3>
                    <span className="mt-2 text-[0.78rem] opacity-85">{p.scale}</span>
                  </div>
                </MediaFrame>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(6).map((p) => (
              <div key={p.name} className="rounded-xl border border-line bg-surface p-5">
                <p className="text-[0.74rem] font-bold uppercase tracking-[0.12em] text-muted">
                  {p.location} · {p.year}
                </p>
                <p className="mt-2 font-display text-[0.98rem] font-bold leading-snug">{p.name}</p>
                <p className="mt-1.5 text-[0.78rem] text-muted">{p.scale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* commitments + faq */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-[1.6rem] font-extrabold">Cam kết dịch vụ</h2>
            <CommitmentTable className="mt-6" />
            <p className="mt-6 text-[0.82rem] leading-relaxed text-muted">
              {clients.join(" · ")}
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.6rem] font-extrabold">Câu hỏi thường gặp</h2>
            <div className="mt-4">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-3 lg:grid-cols-3">
            <div className="rounded-xl bg-accent p-9 text-accentfg lg:col-span-2">
              <h2 className="font-display text-[1.9rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2.6rem]">
                Gửi hồ sơ công trình — nhận phương án trong 24 giờ.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.hotline.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accentfg px-6 py-3.5 text-[0.87rem] font-bold text-accent"
                >
                  <Phone className="h-4 w-4" />
                  {company.hotline}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-accentfg/35 px-6 py-3.5 text-[0.87rem] font-bold text-accentfg"
                >
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted">Trụ sở</p>
              <p className="mt-3 text-[0.86rem] leading-relaxed text-muted">{company.address}</p>
              <p className="mt-5 text-[0.8rem] text-muted">{company.workingHours}</p>
              <p className="mt-3 text-[0.78rem] text-muted">Thiết bị: {partners.slice(0, 5).join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-semibold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
