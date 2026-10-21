import Link from "next/link";
import { ArrowRight, Headphones, Mail, Phone, ShieldCheck, Timer, Wrench } from "lucide-react";
import {
  clients,
  company,
  commitments,
  faqs,
  partners,
  process,
  services,
  team,
} from "@/data/company";
import { FaqAccordion, ServiceIcon } from "@/components/designs/parts";
import { MegaMenu } from "@/components/designs/navs";
import {
  EnergyList,
  MediaFrame,
  ProjectGallery,
  SafetyList,
  SectorGallery,
} from "@/components/designs/sections";
import { img } from "@/data/media";


const plans = [
  {
    name: "Gói Bảo trì Cơ bản",
    price: "Từ 8% giá trị hệ thống / năm",
    items: ["2 lần bảo trì định kỳ", "Vệ sinh dàn tải nhiệt", "Kiểm tra van & điện", "Báo cáo kết quả bảo trì"],
    featured: false,
  },
  {
    name: "Gói Bảo trì Tiêu chuẩn",
    price: "Từ 12% giá trị hệ thống / năm",
    items: ["4 lần bảo trì định kỳ", "Cân bằng không khí", "Hiệu chỉnh cảm biến", "Báo cáo tiết kiệm điện hằng quý", "Hỗ trợ ưu tiên 24/7"],
    featured: true,
  },
  {
    name: "Gói Bảo trì Toàn diện",
    price: "Theo yêu cầu vận hành",
    items: ["Bảo trì liên tục 24/7", "Kỹ sư lưu trú tại công trường", "Báo cáo hiệu suất tháng", "Cam kết PUE & chỉ tiêu tiết kiệm điện"],
    featured: false,
  },
];

export default function ServiceDesign() {
  return (
    <div className="theme-service min-h-screen bg-canvas font-body text-fg">
      <MegaMenu themeClass="theme-service" hotline={company.hotline} />

      {/* hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accentsoft px-3 py-1.5 text-[0.74rem] font-semibold text-accent">
              <Headphones className="h-3.5 w-3.5" />
              Dịch vụ sau bán hàng · Hỗ trợ 24/7
            </span>
            <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[3rem]">
              Hệ thống được bàn giao là
              <span className="text-accent"> lúc bắt đầu trách nhiệm</span>
            </h1>
            <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-muted">
              {company.subline} Với đội kỹ thuật lưu trú tại 18 tỉnh thành, mỗi hệ thống đều được
              bảo hành và bảo trì theo cam kết bằng văn bản.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.87rem] font-semibold text-accentfg"
              >
                Đăng ký bảo trì
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#goi-dich-vu"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-[0.87rem] font-semibold transition-colors hover:bg-surface2"
              >
                Xem các gói bảo trì
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Timer, label: "Phản hồi sự cố", value: "24h" },
                { icon: ShieldCheck, label: "Bảo hành thi công", value: "24 tháng" },
                { icon: Wrench, label: "Đội lưu trú", value: "18 tỉnh" },
                { icon: Headphones, label: "Hỗ trợ", value: "24/7" },
              ].map((k) => (
                <div key={k.label} className="rounded-xl border border-line bg-surface p-4">
                  <k.icon className="h-4 w-4 text-accent" />
                  <p className="mt-3 font-display text-[1.15rem] font-bold leading-none">{k.value}</p>
                  <p className="mt-1.5 text-[0.72rem] text-muted">{k.label}</p>
                </div>
              ))}
            </div>
          </div>

          <MediaFrame
            src={img.technician}
            alt="Kỹ thuật viên bảo trì hệ thống điều hoà"
            ratio="aspect-[4/3]"
            className="rounded-xl"
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
      </section>

      {/* packages */}
      <section id="goi-dich-vu" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2.1rem]">
              Gói bảo trì &amp; bảo hành
            </h2>
            <span className="text-[0.84rem] text-muted">Chọn theo quy mô và mức độ vận hành</span>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  p.featured ? "border-accent bg-accentsoft" : "border-line bg-surface"
                }`}
              >
                {p.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[0.7rem] font-bold text-accentfg">
                    Được đề xuất
                  </span>
                )}
                <h3 className="font-display text-[1.1rem] font-extrabold">{p.name}</h3>
                <p className="mt-2 text-[0.85rem] font-semibold text-accent">{p.price}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[0.84rem] leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#lien-he"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[0.85rem] font-semibold ${
                    p.featured ? "bg-accent text-accentfg" : "border border-line bg-surface2"
                  }`}
                >
                  Đăng ký
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-line bg-surface">
            <div className="grid grid-cols-[1.2fr_0.7fr_1.3fr] gap-4 border-b border-line bg-surface2 px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-wide text-muted">
              <span>Cam kết</span>
              <span>Mức</span>
              <span>Điều kiện</span>
            </div>
            {commitments.map((c) => (
              <div key={c.label} className="grid gap-1 border-b border-line px-5 py-3.5 last:border-b-0 lg:grid-cols-[1.2fr_0.7fr_1.3fr] lg:items-center lg:gap-4">
                <span className="text-[0.85rem] font-medium">{c.label}</span>
                <span className="font-display text-[0.95rem] font-bold text-accent">{c.value}</span>
                <span className="text-[0.8rem] text-muted">{c.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* quality */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2.1rem]">
            An toàn &amp; chất lượng
          </h2>
          <SafetyList className="mt-8" />
          <h3 className="mt-12 font-display text-[1.2rem] font-extrabold">Giải pháp tiết kiệm năng lượng</h3>
          <EnergyList className="mt-5" />
        </div>
      </section>

      {/* services + projects */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-display text-[1.6rem] font-extrabold tracking-[-0.02em] sm:text-[2.1rem]">
            Dịch vụ trọn gói
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.id} className="rounded-xl border border-line bg-surface p-5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accentsoft text-accent">
                  <ServiceIcon name={s.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-[0.92rem] font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-14 font-display text-[1.2rem] font-extrabold">Dự án đang được bảo trì</h3>
          <ProjectGallery variant="row" limit={6} className="mt-5" />
          <SectorGallery className="mt-6" />
        </div>
      </section>

      {/* process + team */}
      <section className="border-b border-line bg-surface2">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[1.4rem] font-extrabold">Quy trình bảo trì</h2>
            <ol className="mt-6 space-y-3">
              {process.slice(3).map((s) => (
                <li key={s.step} className="rounded-xl border border-line bg-canvas p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.8rem] font-bold">{s.title}</span>
                    <span className="text-[0.74rem] text-muted">{s.duration}</span>
                  </div>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{s.description}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[0.82rem] leading-relaxed text-muted">{clients.join(" · ")}</p>
          </div>

          <div>
            <h2 className="font-display text-[1.4rem] font-extrabold">Đội kỹ thuật phụ trách</h2>
            <div className="mt-6 space-y-3">
              {team.slice(3).map((m) => (
                <div key={m.name} className="flex items-center gap-4 rounded-xl border border-line bg-canvas p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accentsoft text-[0.78rem] font-bold text-accent">
                    {m.name
                      .split(" ")
                      .slice(-2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-[0.88rem] font-semibold leading-tight">{m.name}</p>
                    <p className="text-[0.78rem] text-accent">{m.role}</p>
                  </div>
                  <span className="ml-auto text-[0.76rem] text-muted">{m.experience}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[0.82rem] leading-relaxed text-muted">
              Thiết bị bảo hành: {partners.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* faq + contact */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-[1.4rem] font-extrabold">Câu hỏi thường gặp</h2>
            <div className="mt-4">
              <FaqAccordion items={faqs} questionClassName="hover:text-accent" answerClassName="text-muted" />
            </div>
          </div>

          <div id="lien-he" className="scroll-mt-24 rounded-2xl bg-accent p-8 text-accentfg">
            <h2 className="font-display text-[1.5rem] font-extrabold leading-snug">
              Đăng ký tư vấn bảo trì
            </h2>
            <p className="mt-3 text-[0.88rem] leading-relaxed opacity-85">
              Kỹ sư sẽ kiểm tra hiện trạng hệ thống và đề xuất gói bảo trì phù hợp.
            </p>
            <div className="mt-6 space-y-3 text-[0.9rem] font-semibold">
              <a href={`tel:${company.hotline.replace(/\s/g, "")}`} className="flex items-center gap-2.5">
                <Phone className="h-4 w-4" />
                {company.hotline}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5">
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
            <p className="mt-6 text-[0.8rem] opacity-75">{company.address}</p>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 py-8">
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
