import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Chính sách bảo mật — DeepSI",
  description:
    "DeepSI thu thập và xử lý thông tin liên hệ của bạn như thế nào: dữ liệu nào được dùng, lưu ở đâu, và bạn yêu cầu xóa dữ liệu ra sao.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "Thông tin chúng tôi thu thập",
    p: "Khi bạn gửi mẫu liên hệ hoặc email cho DeepSI, chúng tôi nhận các thông tin bạn tự điền: họ tên, email, số điện thoại (không bắt buộc), nhu cầu quan tâm và nội dung trao đổi. Chúng tôi không dùng cookie theo dõi hoặc quảng cáo trên website này.",
  },
  {
    h: "Dữ liệu được lưu ở đâu",
    p: "Nội dung bạn gửi được chuyển thẳng tới hộp thư winnieph13@gmail.com của DeepSI qua đường truyền SMTP mã hóa. Chúng tôi không lưu bản sao trên cơ sở dữ liệu của website. Website này không nhúng công cụ phân tích hành vi người dùng.",
  },
  {
    h: "Mục đích sử dụng",
    p: "Thông tin chỉ dùng để liên hệ, tư vấn và trao đổi về nhu cầu giải pháp AI Agent của bạn. Chúng tôi không bán, chia sẻ hoặc dùng thông tin cho các chiến dịch marketing khác.",
  },
  {
    h: "Quyền của bạn",
    p: "Bạn có thể yêu cầu xem, sửa hoặc xóa thông tin đã gửi bất cứ lúc nào — chỉ cần email cho winnieph13@gmail.com với chủ đề “Xóa dữ liệu” và chúng tôi xử lý trong vòng 5 ngày làm việc.",
  },
  {
    h: "Liên hệ",
    p: "Về chính sách bảo mật này, liên hệ qua email winnieph13@gmail.com hoặc gọi 0966 638 105 trong giờ làm việc (GMT+7).",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-16 md:px-8">
      <Link href="/" className="inline-flex items-center gap-3 text-[13px] text-ink-soft transition-colors hover:text-accent">
        <LogoMark size={26} />
        Về trang chính
      </Link>
      <h1 className="mt-10 font-display text-[clamp(1.9rem,4vw,2.6rem)] font-semibold tracking-tight">
        Chính sách bảo mật
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
