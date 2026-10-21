import Link from "next/link";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import {
  clients,
  company,
  faqs,
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
import { img } from "@/data/media";
import { LogoMark } from "@/components/visuals";

const splitSections = [
  {
    id: "thiet-ke",
    kicker: "Dịch vụ 01",
    title: "Thiết kế & báo giá chi tiết theo BOQ",
    body: "Đội kỹ sư M&E tính tải nhiệt theo ASHRAE, mô phỏng CFD và lập dự toán khối lượng thi công chi tiết. Bạn nhận được bản vẽ, bảng tính và báo giá có điều khoản — trước khi ký hợp đồng.",
    bullets: ["Tính tải nhiệt & chọn thiết bị", "Bản vẽ thiết kế & bảng BOQ", "Phương án tiết kiệm điện 3 mức"],
    image: img.blueprintDrafting,
  },
  {
    id: "thi-cong",
    kicker: "Dịch vụ 02",
    title: "Thi công bằng đội của công ty",
    body: "Không thuê ngoài. Toàn bộ đường ống gió, ống nước lạnh, hệ điện và tự động hoá do đội AEROTECH thực hiện, có nhật ký thi công, hình ảnh và biên bản nghiệm thu từng hạng mục.",
    bullets: ["An toàn lao động theo ISO 45001", "Nghiệm thu từng hạng mục", "Hồ sơ hoàn công & bàn giao"],
    image: img.plantInterior,
  },
  {
    id: "van-hanh",
    kicker: "Dịch vụ 03",
    title: "Vận hành & bảo trì dài hạn",
    body: "Đội kỹ thuật lưu trú tại 18 tỉnh thành xử lý sự cố trong 24–48 giờ và gửi báo cáo hiệu suất hằng quý kèm đề xuất tối ưu điện năng.",
    bullets: ["Hợp đồng bảo trì 12/24/36 tháng", "Xử lý sự cố 24/7", "Báo cáo hiệu suất định kỳ"],
    image: img.technician,
  },
];

export default function SplitDesign() {
  return (
    <div className="theme-split min-h-screen bg-canvas font-body text-fg">
      {/* header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-accent" />
            <span className="font-display text-[1.05rem] font-bold tracking-tight">AEROTECH</span>
          </div>
          <nav className="hidden items-center gap-7 md:flex">
            {["Năng lực", "Dịch vụ", "Dự án", "Quy trình"].map((i) => (
              <a key={i} href="#dich-vu" className="text-[0.85rem] font-medium text-muted transition-colors hover:text-accent">
                {i}
              </a>
            ))}
          </nav>
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

      {/* split hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Công ty cổ phần · HVAC &amp; thông gió
            </p>
            <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[3.4rem]">
              Không khí tốt
              <br />
              bắt đầu từ một
              <br />
              <span className="italic text-accent">hệ thống đúng.</span>
            </h1>
            <p className="mt-7 max-w-lg text-[0.98rem] leading-[1.8] text-muted">{company.subline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[0.87rem] font-bold text-accentfg transition-opacity hover:opacity-85"
              >
                Nhận báo giá
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-[0.85rem] text-muted">18 tỉnh thành · 480+ dự án</span>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-[1.9rem] font-bold leading-none text-accent">
                    {s.value}
                    <span className="text-[0.8rem]">{s.unit}</span>
                  </dt>
                  <dd className="mt-2 text-[0.78rem] leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <MediaFrame
            src={img.hvacSpiralDuct}
            alt="Hệ thống đường ống gió trong tòa nhà thương mại"
            ratio="aspect-[4/5]"
            className="rounded-lg"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* split sections */}
      {splitSections.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <MediaFrame
                src={s.image}
                alt={s.title}
                ratio="aspect-[4/3]"
                className="rounded-lg"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
                {s.kicker}
              </p>
              <h2 className="mt-4 font-display text-[1.7rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.2rem]">
                {s.title}
              </h2>
              <p className="mt-4 text-[0.94rem] leading-[1.8] text-muted">{s.body}</p>
              <ul className="mt-6 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[0.88rem] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* services grid */}
      <section id="dich-vu" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-[1.8rem] font-bold tracking-[-0.02em] sm:text-[2.4rem]">
            Tám nhóm dịch vụ
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-lg border border-line bg-canvas p-5">
                <h3 className="font-display text-[1rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{s.description}</p>
              </article>
            ))}
          </div>
          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-[1.8rem] font-bold tracking-[-0.02em] sm:text-[2.4rem]">
            Dự án tiêu biểu
          </h2>
          <div className="mt-10 space-y-px bg-line">
            {projects.slice(0, 6).map((p, i) => (
              <article key={p.name} className="grid gap-5 bg-canvas py-6 sm:grid-cols-[160px_1fr] sm:items-center">
                <MediaFrame
                  src={[img.plantInterior, img.mallEscalator, img.warehouse, img.hospitalCorridor, img.hotelSuite, img.serverRoom][i]}
                  alt={p.name}
                  ratio="aspect-[4/3]"
                  className="rounded-md"
                  sizes="160px"
                />
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    {p.category} · {p.location} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-[1.25rem] font-bold leading-snug">{p.name}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{p.scope}</p>
                  <p className="mt-3 text-[0.82rem] font-bold">{p.scale}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* why us */}
      <section id="nang-luc" className="scroll-mt-24 border-b border-line bg-surface2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-[1.8rem] font-bold tracking-[-0.02em] sm:text-[2.4rem]">
            Cam kết với chủ đầu tư
          </h2>
          <WhyUsGrid className="mt-10" />
          <CommitmentTable className="mt-10" />
        </div>
      </section>

      {/* team + faq */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[1.6rem] font-bold">Ban điều hành</h2>
            <div className="mt-8 space-y-4">
              {team.map((m) => (
                <div key={m.name} className="flex items-center gap-4 border-b border-line pb-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accentsoft font-display text-[0.85rem] font-bold text-accent">
                    {m.name
                      .split(" ")
                      .slice(-2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-[0.95rem] font-bold leading-tight">{m.name}</p>
                    <p className="text-[0.8rem] text-accent">{m.role}</p>
                  </div>
                  <span className="ml-auto text-[0.78rem] text-muted">{m.experience}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[0.82rem] leading-relaxed text-muted">
              Khách hàng: {clients.join(" · ")}
            </p>
            <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
              Thiết bị: {partners.join(" · ")}
            </p>
          </div>

          <div>
            <h2 className="font-display text-[1.6rem] font-bold">Câu hỏi thường gặp</h2>
            <div className="mt-6">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="lien-he" className="scroll-mt-24 bg-accent">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-accentfg">
            <h2 className="font-display text-[2rem] font-bold leading-tight sm:text-[2.6rem]">
              Gửi hồ sơ công trình — nhận phương án trong 24 giờ.
            </h2>
            <p className="mt-4 max-w-xl text-[0.94rem] leading-relaxed opacity-85">
              Kỹ sư phụ trách sẽ khảo sát, tính tải nhiệt và đề xuất phương án tối ưu chi phí vận
              hành dài hạn.
            </p>
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
          <div className="rounded-lg bg-canvas p-7 text-fg">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">Trụ sở</p>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">{company.address}</p>
            <p className="mt-5 text-[0.82rem] text-muted">{company.workingHours}</p>
            <a
              href="#du-an"
              className="mt-6 inline-flex items-center gap-2 text-[0.85rem] font-bold text-accent"
            >
              <Download className="h-4 w-4" />
              Xem hồ sơ dự án
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="font-bold text-accent hover:underline">
            Quay lại thư viện mẫu
          </Link>
        </div>
      </footer>
    </div>
  );
}
