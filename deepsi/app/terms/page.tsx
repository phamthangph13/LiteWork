import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng — DeepSI",
  description:
    "Điều khoản sử dụng website DeepSI: mục đích của nội dung, quyền sở hữu, giới hạn trách nhiệm và cách giải quyết tranh chấp.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    h: "Mục đích của website",
    p: "Website DeepSI giới thiệu dịch vụ tư vấn, phát triển và triển khai AI Agent. Nội dung mang tính tham khảo — mỗi giải pháp được thiết kế theo hệ thống và dữ liệu hiện có của từng doanh nghiệp, nên phạm vi, chi phí và hiệu quả được chốt riêng trong tư vấn 1-1.",
  },
  {
    h: "Quyền sở hữu",
    p: "Toàn bộ thương hiệu, hình ảnh, biểu tượng và nội dung hiển thị trên website thuộc về DeepSI trừ khi ghi chú khác. Logo của Luméa và ZuneF là tài sản của các bên tương ứng, chỉ dùng để minh họa quan hệ hợp tác.",
  },
  {
    h: "Giới hạn trách nhiệm",
    p: "DeepSI cố gắng giữ thông tin chính xác và cập nhật nhưng không cam kết website không có sai sót hoặc gián đoạn. DeepSI không chịu trách nhiệm với thiệt hại phát sinh từ việc sử dụng website cho mục đích khác ngoài tra cứu thông tin.",
  },
  {
    h: "Tranh chấp",
    p: "Bất kỳ vấn đề nào liên quan tới website hoặc nội dung này được giải quyết trước bằng trao đổi trực tiếp qua winnieph13@gmail.com; chúng tôi phản hồi trong giờ làm việc (GMT+7).",
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-16 md:px-8">
      <Link href="/" className="inline-flex items-center gap-3 text-[13px] text-ink-soft transition-colors hover:text-accent">
        <LogoMark size={26} />
        Về trang chính
      </Link>
      <h1 className="mt-10 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-semibold tracking-tight">
        Điều khoản sử dụng
      </h1>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
        Cập nhật lần cuối: <time dateTime="2026-10-23">tháng 10, 2026</time>
      </p>
      <div className="mt-10 flex flex-col gap-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-lg font-semibold tracking-tight">{s.h}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.p}</p>
          </section>
        ))}
      </div>
      <p className="mt-14 border-t hairline pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
        <Link href="/" className="text-accent">
          deepsi.space
        </Link>{" "}
        — giải pháp AI Agent cho doanh nghiệp
      </p>
    </main>
  );
}
