import Link from "next/link";
import { ArrowRight, ChevronRight, CircleDot, Mail, Phone, Terminal } from "lucide-react";
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
import { ChillerSchematic, LogoMark } from "@/components/visuals";

const specs = [
  ["Hệ thống", "Chiller nước vỏ không / VRF / DX"],
  ["Công suất", "150 RT — 3.500 RT"],
  ["Lưu lượng gió", "Đến 60.000 m³/h mỗi AHU"],
  ["Tiêu chuẩn thiết kế", "ASHRAE 62.1 / 90.1 / 15/2"],
  ["Nhiệt độ thiết kế", "24°C — 26°C (nhạy cảm)"],
  ["Độ ẩm tương đối", "40% — 60% RH"],
  ["Phạm vi", "Toàn quốc — 18 tỉnh thành"],
  ["Bảo hành", "Thi công 24 tháng · Thiết bị 12–36 tháng"],
];

export default function MonoDesign() {
  return (
    <div className="theme-mono min-h-screen bg-canvas font-body text-fg">
      {/* top bar */}
      <header className="border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7 text-accent" />
            <span className="text-[0.85rem] font-bold tracking-tight">aerotech.lv</span>
            <span className="hidden text-[0.7rem] text-muted sm:inline">~/hồ-sơ-năng-lực</span>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["nang-luc", "#nang-luc"],
              ["dich-vu", "#dich-vu"],
              ["du-an", "#du-an"],
              ["quy-trinh", "#quy-trinh"],
              ["lien-he", "#lien-he"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="px-2.5 py-1 text-[0.75rem] text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#lien-he"
            className="border border-accent px-3 py-1.5 text-[0.75rem] font-bold text-accent transition-colors hover:bg-accent hover:text-accentfg"
          >
            GET_QUOTE
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-paper opacity-40" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="flex items-center gap-2 text-[0.75rem] text-accent">
            <Terminal className="h-3.5 w-3.5" />
            <span>root@aerotech:~$</span> <span className="text-muted">cat hồ-sơ-năng-lực.md</span>
          </p>

          <h1 className="mt-7 max-w-4xl text-[1.75rem] font-bold leading-[1.25] tracking-tight sm:text-[2.6rem]">
            <span className="text-accent">#</span> GIỚI THIỆU — ĐIỀU HOÀ KHÔNG KHÍ &amp; THÔNG GIÓ CHO
            CÔNG TRÌNH, THƯƠNG MẠI, CÔNG NGHIỆP
          </h1>

          <p className="mt-6 max-w-3xl text-[0.92rem] leading-relaxed text-muted">{company.subline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-[0.82rem] font-bold text-accentfg transition-opacity hover:opacity-85"
            >
              khởi-tạo dự án
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#du-an"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-[0.82rem] font-bold transition-colors hover:border-accent hover:text-accent"
            >
              xem danh mục dự án
            </a>
          </div>

          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-canvas px-5 py-5">
                <p className="text-[1.5rem] font-bold leading-none text-accent">
                  {s.value}
                  <span className="ml-1 text-[0.72rem] font-normal text-muted">{s.unit}</span>
                </p>
                <p className="mt-2 text-[0.72rem] leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* spec sheet */}
      <section id="nang-luc" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-2 text-[0.78rem] text-muted">
            <ChevronRight className="h-3.5 w-3.5 text-accent" />
            <span className="text-accent">01</span>
            <span>/</span>
            <span>hồ-sơ-năng-lực</span>
          </div>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-[1.5rem] font-bold tracking-tight sm:text-[1.9rem]">
                THÔNG SỐ KỸ THUẬT THAM CHIẾU
              </h2>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-muted">
                {company.legalName} — năm thành lập {company.founded}. Chuỗi EPCI trọn gói: khảo sát →
                thiết kế → dự toán → cung cấp → thi công → nghiệm thu → bảo trì.
              </p>

              <div className="mt-7 border border-line">
                {specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[150px_1fr] gap-4 border-b border-line px-4 py-3 last:border-b-0">
                    <span className="text-[0.74rem] text-muted">{k}</span>
                    <span className="text-[0.82rem] font-medium">{v}</span>
                  </div>
                ))}
              </div>

              <ul className="mt-7 space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-muted">
                    <span className="text-accent">+</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="border border-line bg-surface p-5">
                <p className="text-[0.72rem] text-muted">{"// HINH_ANH_HIEM_TRUONG"}</p>
                <MediaFrame
                  src={img.hvacAhu}
                  alt="Hệ thống AHU đang lắp đặt tại công trường"
                  ratio="aspect-[16/10]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="border border-line bg-surface p-5">
                <p className="text-[0.72rem] text-muted">{"// SCHEMATIC_CHILLER"}</p>
                <ChillerSchematic className="mt-3 h-40 w-full text-muted" />
              </div>
              <div className="border border-line bg-surface p-5">
                <p className="text-[0.72rem] text-muted">{"// TEAM"}</p>
                <div className="mt-3 space-y-2">
                  {team.map((m) => (
                    <div key={m.name} className="flex items-baseline justify-between gap-3 text-[0.78rem]">
                      <span className="font-medium">{m.name}</span>
                      <span className="text-muted">{m.role}</span>
                      <span className="text-accent">{m.experience}</span>
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
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-2 text-[0.78rem] text-muted">
            <ChevronRight className="h-3.5 w-3.5 text-accent" />
            <span className="text-accent">02</span>
            <span>/</span>
            <span>dịch-vụ</span>
          </div>
          <h2 className="mt-5 text-[1.5rem] font-bold tracking-tight sm:text-[1.9rem]">DỊCH VỤ</h2>

          <div className="mt-7 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article key={s.id} className="bg-canvas p-5">
                <div className="flex items-center justify-between">
                  <span className="text-accent">
                    <ServiceIcon name={s.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-[0.68rem] text-muted">
                    mod_{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-[0.9rem] font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-4 border-t border-line pt-3">
                  {s.points.map((p) => (
                    <li key={p} className="py-0.5 text-[0.72rem] text-muted">
                      <span className="text-accent">-</span> {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 border border-line px-3 py-1.5 text-[0.75rem] text-muted"
              >
                <SectorIcon name={s.icon} className="h-3.5 w-3.5 text-accent" />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="du-an" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-2 text-[0.78rem] text-muted">
            <ChevronRight className="h-3.5 w-3.5 text-accent" />
            <span className="text-accent">03</span>
            <span>/</span>
            <span>danh-mục-dự-án</span>
          </div>
          <h2 className="mt-5 text-[1.5rem] font-bold tracking-tight sm:text-[1.9rem]">
            DANH MỤC DỰ ÁN <span className="text-muted">({projects.length}/480)</span>
          </h2>

          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-[0.78rem]">
              <thead>
                <tr className="border-b border-line text-muted">
                  <th className="py-2.5 pr-4 font-normal">#</th>
                  <th className="py-2.5 pr-4 font-normal">Tên dự án</th>
                  <th className="py-2.5 pr-4 font-normal">Ngành</th>
                  <th className="py-2.5 pr-4 font-normal">Địa điểm</th>
                  <th className="py-2.5 pr-4 font-normal">Quy mô</th>
                  <th className="py-2.5 font-normal">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr key={p.name} className="border-b border-line align-top">
                    <td className="py-3 pr-4 text-muted">{String(i + 1).padStart(3, "0")}</td>
                    <td className="py-3 pr-4">
                      <span className="font-medium">{p.name}</span>
                      <span className="mt-1 block text-[0.72rem] text-muted">{p.scope}</span>
                    </td>
                    <td className="py-3 pr-4 text-muted">{p.category}</td>
                    <td className="py-3 pr-4 text-muted">{p.location}</td>
                    <td className="py-3 pr-4 text-muted">{p.scale}</td>
                    <td className="py-3">
                      <span className="inline-flex items-center gap-1.5 text-accent">
                        <CircleDot className="h-3 w-3" />
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.72rem] text-muted">{"// NGANH_UNG_DUNG"}</p>
          <h2 className="mt-3 text-[1.5rem] font-bold tracking-tight sm:text-[1.9rem]">NGÀNH ỨNG DỤNG</h2>
          <SectorGallery className="mt-7" />
        </div>
      </section>

      {/* pipeline */}
      <section id="quy-trinh" className="scroll-mt-20 border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex items-center gap-2 text-[0.78rem] text-muted">
            <ChevronRight className="h-3.5 w-3.5 text-accent" />
            <span className="text-accent">04</span>
            <span>/</span>
            <span>quy-trình</span>
          </div>
          <h2 className="mt-5 text-[1.5rem] font-bold tracking-tight sm:text-[1.9rem]">PIPELINE</h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((s) => (
              <div key={s.step} className="border border-line bg-canvas p-5">
                <div className="flex items-center justify-between text-[0.72rem]">
                  <span className="text-accent">{s.step}</span>
                  <span className="text-muted">{s.duration}</span>
                </div>
                <h3 className="mt-3 text-[0.9rem] font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">{s.description}</p>
                <div className="mt-4 h-1 w-full bg-line">
                  <div className="h-1 bg-accent" style={{ width: `${(Number(s.step) / 6) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-[0.72rem] text-muted">{"// HINH_ANH_DU_AN"}</p>
          <ProjectGallery variant="list" limit={6} className="mt-6" />
          <p className="mt-12 text-[0.72rem] text-muted">{"// UUU_DIEM"}</p>
          <WhyUsGrid className="mt-6" />
        </div>
      </section>

      {/* clients + certs */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] text-muted">{"// CLIENTS"}</p>
            <div className="mt-4 grid grid-cols-2 gap-px bg-line">
              {clients.map((c) => (
                <div key={c} className="bg-canvas px-4 py-3.5 text-[0.8rem] font-medium">
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.72rem] text-muted">{"// CERTIFICATIONS &amp; PARTNERS"}</p>
            <div className="mt-4 space-y-2">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="flex items-baseline justify-between gap-3 border-b border-line pb-2 text-[0.8rem]"
                >
                  <span className="font-medium">{c.title}</span>
                  <span className="text-muted">{c.detail}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.75rem] leading-relaxed text-muted">
              vendors: {partners.join(" | ")}
            </p>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <p className="text-[0.72rem] text-muted">{"// FAQ"}</p>
          <div className="mt-4">
            <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="lien-he" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="border border-accent bg-surface p-7">
            <p className="text-[0.78rem] text-accent">aerotech@aerotech:~$ khởi-tạo dự án</p>
            <h2 className="mt-5 text-[1.5rem] font-bold tracking-tight sm:text-[2rem]">
              GỬI HỒ SƠ CÔNG TRÌNH — NHẬN PHƯƠNG ÁN TRONG 24 GIỜ
            </h2>
            <p className="mt-4 max-w-2xl text-[0.88rem] leading-relaxed text-muted">
              Báo giá sơ bộ trong 24 giờ làm việc. Báo giá chi tiết theo BOQ trong 7–10 ngày sau
              khảo sát hiện trường.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${company.hotline.replace(/\s/g, "")}`}
                className="flex items-center gap-3 border border-line px-4 py-3.5 text-[0.85rem] transition-colors hover:border-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                {company.hotline}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 border border-line px-4 py-3.5 text-[0.85rem] transition-colors hover:border-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                {company.email}
              </a>
            </div>

            <div className="mt-6 border-t border-line pt-5 text-[0.8rem] leading-relaxed text-muted">
              <p>{company.address}</p>
              <p className="mt-1">{company.workingHours}</p>
              <p className="mt-1">MST: {company.taxCode}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[0.72rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.legalName}</p>
          <Link href="/" className="text-accent hover:underline">
            cd /thu-vien-mau →
          </Link>
        </div>
      </footer>
    </div>
  );
}
