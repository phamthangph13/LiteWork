# LiteWork — Bộ sưu tập mẫu website cho doanh nghiệp điều hoà không khí

Bộ sưu tập **30 landing page mẫu** dành cho công ty HVAC / thông gió (công trình, thương mại, công nghiệp).
Mỗi mẫu là một landing page B2B hoàn chỉnh: hồ sơ năng lực, dự án tiêu biểu, đối tác, thiết bị,
cam kết SLA, tài liệu đấu thầu, quy trình và biểu mẫu liên hệ.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
npm run start    # chạy production
npm run lint     # eslint
npm run typecheck
```

## Cấu trúc

```
src/
  app/
    page.tsx                 # Trang thư viện mẫu (gallery, lọc theo nền sáng/tối/ấm)
    design/[slug]/page.tsx   # Router render 30 mẫu + nút chuyển mẫu
    globals.css              # 30 theme token (mỗi mẫu 1 theme), không dùng gradient
    layout.tsx               # Font (next/font) + biến CSS
  components/
    designs/                 # 30 file mẫu, mỗi file 1 layout riêng
      parts.tsx              # Icon, accordion, switcher mẫu
      sections.tsx           # Khối dùng chung: gallery dự án, ngành, SLA, why-us
      navs.tsx               # Mega menu, bracket menu, fullscreen menu, side rail
      registry.ts            # map slug -> component
    fancy/                   # Thư viện animation (GSAP + Motion)
    three/                   # Scene three.js (máy AHU 3D, luồng gió hạt)
  data/
    company.ts               # Toàn bộ nội dung dùng chung
    media.ts                 # Thư viện ảnh
public/img/                  # 49 ảnh thực tế (Unsplash License) tối ưu ~8MB
```

## Danh sách 30 mẫu

| # | Mẫu | Đặc điểm |
|---|-----|-----------|
| 01 | Clean Corp | Sáng, xanh dương, layout doanh nghiệp tiêu chuẩn |
| 02 | Mono Blank | Đen trắng tối giản, pill, kiểu tài liệu kỹ thuật |
| 03 | Bento Grid | Lưới ô vuông, nền kem ấm |
| 04 | Enterprise Dark | Console tối, KPI, bảng dữ liệu |
| 05 | Modern Editorial | Serif hiện đại, nền giấy ấm |
| 06 | Ant Structured | App-style: tab, bảng, breadcrumb |
| 07 | Sleek Studio | Minimal bo góc lớn |
| 08 | Magazine | Lưới tạp chí in, màu ocher |
| 09 | Premium Dark | Nền đen, điểm nhấn champagne |
| 10 | Tech Blueprint | Nền xanh than, chữ mono, sơ đồ kỹ thuật |
| 11 | Contemporary Bento | Bento tối, điểm nhấn chanh |
| 12 | Corporate Pro | Navy nghiêm túc, bảng biểu, tài liệu |
| 13 | Terracotta | Nền kem nung, serif ấm |
| 14 | Basic Grid | Viền đen sắc, lưới in ấn |
| 15 | Impeccable | Poster xen kẽ kem / cam nướng |
| 16 | Utility Mono | Đơn sắc, thành phần rõ ràng (shadcn) |
| 17 | **Mega Menu Corp** | Mega menu 3 cột, chuẩn doanh nghiệp lớn |
| 18 | **Bracket Tech** | Khung góc, mono, nền đen |
| 19 | **Split Focus** | Hero đôi 50/50, section xen kẽ, menu overlay |
| 20 | **Index Document** | Landing kiểu mục lục tài liệu đấu thầu |
| 21 | **Horizon Scroll** | Các mục vuốt ngang (scroll-snap) |
| 22 | **Glass Console** | Panel kính mờ, KPI dạng dashboard |
| 23 | **Factory Grid** | Công nghiệp, chữ siêu lớn, điểm nhấn chanh |
| 24 | **Service First** | Trọng tâm dịch vụ sau bán hàng, gói bảo trì |
| 25 | **Media Mosaic** | Mosaic ảnh bất đối xứng |
| 26 | **Side Rail Portal** | Thanh điều hướng dọc + scroll-spy |
| 27 | **Aura Premium** | GSAP + three.js, chữ tách ký tự, nút hút chuột (sáng) |
| 28 | **Flux Motion** | Scrollytelling: thẻ xếp chồng, marquee, tilt 3D (sáng) |
| 29 | **Atlas Premium** | Scramble chữ, luồng gió 3D, parallax (sáng) |
| 30 | **Lumen Light** | Con trỏ ánh sáng, panel kính, máy 3D (sáng) |

## Thư viện animation (src/components/fancy)

- `Reveal` / `Stagger` — hiệu ứng xuất hiện theo scroll (GSAP ScrollTrigger)
- `SplitText` — tách chữ từng ký tự, mở theo chiều dọc
- `ScrambleText` — chữ giải mã khi cuộn tới
- `Counter` — đếm số động
- `Parallax` — ảnh chuyển động theo scroll
- `Magnetic` — nút hút theo con trỏ (Motion)
- `Marquee` — dải chạy vô hạn
- `Float` — bay nhẹ liên tục
- `StickyStack` — thẻ xếp chồng theo scroll
- `CursorGlow` — vòng sáng theo con trỏ
- `LineDraw` — vẽ đường SVG khi cuộn
- `Tilt` — nghiêng 3D theo con trỏ

Tất cả đều tôn trọng `prefers-reduced-motion`.

## Scene 3D (src/components/three)

- `variant="unit"` — máy AHU 3D xoay, có quạt và ống gió (flat shading, không gradient)
- `variant="air"` — luồng gió hạt 3D mô phỏng dòng khí

## Quy tắc thiết kế đã áp dụng

- Không dùng gradient màu — chỉ màu đặc + nền hình ảnh
- Icon dùng thư viện `lucide-react`
- Ảnh thực tế từ Unsplash (Unsplash License), lưu trong `public/img`
- Font tự host qua `next/font` (hỗ trợ đầy đủ tiếng Việt)
- Responsive, có `prefers-reduced-motion`, focus state rõ ràng

## Ghi chú

Toàn bộ nội dung (tên công ty `AEROTECH`, số liệu, dự án, đối tác, nhân sự) là **dữ liệu giả lập**
dùng để demo giao diện. Khi triển khai thật, chỉ cần sửa `src/data/company.ts`.
