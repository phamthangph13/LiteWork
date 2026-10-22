# DeepSI — Landing Page

Landing page marketing cho **DeepSI — AI Agent Solutions**, xây dựng theo hướng trải nghiệm tương tác cao: intro rocket-launch, nền 3D biến hình theo scroll (Three.js), pipeline ngang pinned (GSAP ScrollTrigger), sandbox mô phỏng agent, sticker-field ngành nghề với parallax, slider đối tác draggable, form liên hệ soạn mail sẵn.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
npm run lint
```

## Cấu trúc

```
app/
  layout.tsx        # fonts (Inter/Space Grotesk/JetBrains Mono), metadata
  page.tsx          # lắp các section theo thứ tự
  globals.css       # design tokens, pattern classes, keyframes, .sticker / .outline-text / .field
  icon.svg          # favicon tự vẽ
components/
  canvas/
    AgentField.tsx  # nền 3D cố định — particle cloud morph: sphere → torus knot → wave grid → helix, điều khiển bằng ScrollTrigger(toàn trang) + pointer parallax
  fancy/            # micro-interaction kiểu Fancy Components
    LetterSwap.tsx          # chữ lăn từng ký tự khi hover (CTA/nav)
    TextRotate.tsx          # từ ngữ đổi vòng lặp (hero label)
    ScrambleIn.tsx          # giải mã ký tự khi vào viewport
    ScrambleHover.tsx       # scramble khi hover (nav/footer links)
    TextCursorProximity.tsx # chữ phồng theo con trỏ (hero tagline)
    Marquee.tsx             # ticker vô hạn (tape marquee)
    Typewriter.tsx          # gõ chữ (kết quả agent sandbox)
    Magnetic.tsx            # nút hút con trỏ
  motion/
    Reveal.tsx      # scroll-reveal xuất hiện khi kéo xuống, THU VỀ khi kéo lên (toggleActions play reverse play reverse)
  ui/
    CursorDot.tsx   # dot leo theo con trỏ, nở khi trỏ vào phần tử tương tác
    Stickers.tsx    # bộ sticker die-cut SVG vẽ tay (rocket/bot/zap/db/cloud/spark) + hover spring
    Logo.tsx / SectionHeader.tsx
  sections/
    Intro.tsx           # overlay rocket-launch mở trang (~2.3s, bấm/nút để skip, nhớ theo session, tôn trọng reduced-motion)
    Nav.tsx             # nav cố định, scramble-hover links
    Hero.tsx            # headline + sticker cluster + watermark DEEPSI outlined
    TapeMarquee.tsx     # 2 băng chéo chạy ngược nhau
    SolutionsBento.tsx  # bento grid 6 năng lực (icon Lucide)
    Workflow.tsx        # PINNED horizontal pipeline 5 bước (containerAnimation, ease none)
    Sandbox.tsx         # mô phỏng agent xử lý 3 kịch bản (chạy offline)
    Industries.tsx      # sticker-field 12 ngành nghề rải tự do + parallax theo scroll (desktop), grid 2 cột (mobile)
    Partners.tsx        # slider thẻ logo draggable kiểu Lumea (drag + mũi tên, logo simple-icons tinted mực)
    Journey.tsx         # timeline SVG path vẽ theo scroll + dot chạy dọc quỹ đạo
    TechStrip.tsx       # icon công nghệ từ skill-icons (go-skill-icons.vercel.app)
    Contact.tsx         # form liên hệ soạn sẵn mail + thẻ copy email/điện thoại
    Footer.tsx          # footer in-flow tự nhiên + watermark DEEPSI outlined
data/
  content.ts           # toàn bộ copy tiếng Việt, email/điện thoại, 12 industries, 14 nền tảng integrate
public/patterns/       # SVG pattern tự vẽ: dots, plus, diag, grid, net, dots-accent
lib/
  gsap.ts              # đăng ký ScrollTrigger + MotionPath + useGSAP
```

## Điểm thiết kế

- **Palette sáng, không gradient**: giấy ấm `#F4F3ED`, mực `#1C1B15`, xám mềm `#67655B`, một accent indigo `#2D2A80` duy nhất.
- **Scroll đi xuống → hiện; đi lên → ẩn**: mọi section dùng `toggleActions: "play reverse play reverse"`; pipeline ngang scrub 2 chiều.
- **Ngôn ngữ sticker**: die-cut viền mực dày 2–3.5px, tông phẳng, hover spring; dải dùng chung một style-package (giống tinh thần `orbit-task-crew`/`soft-ui-glyphs` của sticker-gen-skill, vẽ lại bằng SVG thuần).
- **Footer tự nhiên**: nằm trong luồng trang, reveal khi lăn tới, không còn kiểu fixed trượt phủ.
- **Không hướng dẫn tương tác**: đã bỏ các nhãn kiểu “Kéo xuống”, “Chọn kịch bản”, “Kéo thẻ để va chạm”.
- **Ngôn từ đúng định vị**: đối tác được diễn đạt là nền tảng thường tích hợp (không giả định khách hàng), footer ghi chú minh bạch; email/điện thoại thật trong `data/content.ts`.
- **Nền 3D morph 4 trạng thái** theo tiến độ cả trang, camera & ánh sáng phản ứng con trỏ.

## Icon

- UI glyph: [Lucide](https://lucide.dev) (`lucide-react`).
- Icon công nghệ: [skill-icons](https://github.com/LelouchFR/skill-icons) qua `go-skill-icons.vercel.app/api/icons?i=...&theme=light`.
- Logo nền tảng: [Simple Icons CDN](https://cdn.simpleicons.org) — các slug đã kiểm tra HTTP 200 trước khi đưa vào `data/content.ts`.

## Library

Next.js 16 (App Router, Turbopack) · Tailwind CSS 4 · GSAP 3 + @gsap/react · three.js + @react-three/fiber + drei · motion · lucide-react.
