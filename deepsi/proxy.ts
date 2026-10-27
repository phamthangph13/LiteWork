import { NextResponse, type NextRequest } from "next/server";

const SITE_URL = "https://deepsi.space";

const MARKDOWN = `# DeepSI — Giải pháp AI Agent cho doanh nghiệp

> DeepSI tư vấn & triển khai AI Agent cho doanh nghiệp — tự động hóa quy trình, khai thác tri thức nội bộ, hiệu quả hơn mỗi ngày.

## DeepSI làm gì

- Tự động hóa quy trình vận hành lặp lại hằng ngày
- Tra cứu tri thức nội bộ (RAG) theo dữ liệu riêng của từng doanh nghiệp
- Tích hợp agent vào hệ thống hiện có (CRM, Google Workspace, hệ thống nội bộ)
- Thiết kế, chạy thử, bàn giao theo từng bước nhỏ — định giá minh bạch

## Hỏi đáp

- AI Agent cho doanh nghiệp là gì, thời gian triển khai, bảo mật dữ liệu và chi phí: xem phần #hoi-dap tại ${SITE_URL}

## Đối tác

- Luméa — lumeavn.com
- ZuneF — zunef.com
- Fansipan Group — fansipan-group.vn

## Liên hệ

- Email: winnieph13@gmail.com
- Điện thoại: 0966 638 105
- Trang chính: ${SITE_URL}
- Chính sách bảo mật: ${SITE_URL}/privacy
- Điều khoản: ${SITE_URL}/terms
`;

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (request.nextUrl.pathname === "/" && accept.includes("text/markdown")) {
    return new NextResponse(MARKDOWN, {
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
