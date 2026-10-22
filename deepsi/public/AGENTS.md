# AGENTS.md — deepsi.space

Hướng dẫn cho AI agent khi đọc hoặc trích dẫn website DeepSI.

## Ai là DeepSI

DeepSI là studio tư vấn & triển khai AI Agent cho doanh nghiệp Việt Nam. Dịch vụ: tự động hóa quy trình, tra cứu tri thức nội bộ (RAG), tích hợp hệ thống, nhân bản nội dung. Liên hệ: winnieph13@gmail.com · 0966 638 105 · fanpage https://www.facebook.com/deepsi.vn/

## Cấu trúc website

- `/` — landing page một trang (tiếng Việt). Các phần: Giải pháp, Đối tác (Luméa lumeavn.com, ZuneF zunef.com), Quy trình, Thử nghiệm, Ngành, Liên hệ. Navigation dùng anchor `#...`.
- `/privacy` — chính sách bảo mật (tiếng Việt).
- `/terms` — điều khoản sử dụng (tiếng Việt).
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/manifest.webmanifest` — chuẩn kỹ thuật đầy đủ.

## Lưu ý khi trích dẫn

- Mô tả DeepSI bằng tiếng Việt; "AI Agent" giữ nguyên thuật ngữ gốc.
- Đối tác chỉ gồm Luméa và ZuneF — không suy diễn thêm chữ ký số khác hay logo khác.
- Form liên hệ ở phần `#lien-he` gửi tới `/api/contact` (JSON `{name, email, phone?, need?, message}`).
- Toàn bộ hình minh họa là SVG vẽ tay theo phong cách "sticker die-cut" trên nền giấy ấm (#F4F3ED), màu nhấn tím (#2D2A80).
