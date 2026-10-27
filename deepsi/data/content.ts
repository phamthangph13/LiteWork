export const brand = {
  name: "DeepSI",
  tagline: "AI Agent Solutions",
  shortDesc: "Giải pháp AI Agent cho doanh nghiệp",
  intro:
    "DeepSI cung cấp dịch vụ tư vấn, phát triển và triển khai AI Agent — giúp doanh nghiệp tự động hóa quy trình, khai thác tri thức nội bộ và nâng cao hiệu quả vận hành.",
  cta: "Trao đổi về giải pháp AI",
  ctaSecondary: "Xem quy trình triển khai",
  footerLine: "DeepSI — Thương hiệu cung cấp giải pháp AI",
  legalNote:
    "DeepSI là thương hiệu do cá nhân sáng lập và vận hành.",
  email: "winnieph13@gmail.com",
  fanpage: "https://www.facebook.com/deepsi.vn/",
  phone: "0966 638 105",
  phoneHref: "tel:+84966638105",
};

export const nav = [
  { label: "Giải pháp", href: "#giai-phap" },
  { label: "Đối tác", href: "#doi-tac" },
  { label: "Thử nghiệm", href: "#thu-nghiem" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const navFooter = [
  { label: "Giải pháp", href: "#giai-phap" },
  { label: "Đối tác", href: "#doi-tac" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Thử nghiệm", href: "#thu-nghiem" },
  { label: "Lĩnh vực", href: "#linh-vuc" },
  { label: "Tiến trình", href: "#tien-trinh" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const rotating = [
  "AI Agent Development",
  "Workflow Automation",
  "AI Integration",
  "Tri thức nội bộ (RAG)",
  "Tư vấn & khảo sát",
];

export const heroCaption = "Từ bài toán thực tế đến giải pháp AI có thể vận hành.";

export const marqueeItems = [
  "AI Agent Development",
  "Workflow Automation",
  "AI Integration",
  "RAG & Tri thức nội bộ",
  "API-first Architecture",
  "Human-in-the-loop",
  "Guardrails & Logging",
  "Dashboard & Metrics",
];

export const solutions = [
  {
    id: "agent-dev",
    span: "md:col-span-7",
    title: "AI Agent Development",
    desc: "Thiết kế và phát triển agent chuyên trách theo đúng quy trình nghiệp vụ của bạn — không phải chatbot kiểu nhanh, mà agent có vùng trách nhiệm rõ ràng.",
    points: ["Định vị vai trò agent", "Kịch bản xử lý theo nghiệp vụ", "Có giới hạn và phạm vi rõ ràng"],
    tags: [],
  },
  {
    id: "workflow",
    span: "md:col-span-5",
    title: "Workflow Automation",
    desc: "Kết nối các bước thủ công thành một luồng vận hành tự động, có kiểm soát điểm chạm của con người.",
    points: ["Chuẩn hóa quy trình trước khi tự động hóa"],
    tags: [],
  },
  {
    id: "integration",
    span: "md:col-span-4",
    title: "AI Integration",
    desc: "Gắn agent vào hệ thống bạn đang dùng, theo hướng API-first.",
    points: [],
    tags: ["CRM", "ERP", "Website", "Zalo", "Email", "Data Lake"],
  },
  {
    id: "rag",
    span: "md:col-span-4",
    title: "Tri thức nội bộ",
    desc: "Biến tài liệu, sổ tay và kho dữ liệu của bạn thành trợ lý tra cứu tức thời, trả lời kèm trích dẫn nguồn.",
    points: [],
    tags: ["RAG", "Citations", "No vendor lock-in"],
  },
  {
    id: "guardrails",
    span: "md:col-span-4",
    title: "Guardrails & Monitoring",
    desc: "Agent chạy trong rào chắn: log đầy đủ, dashboard theo dõi, cảnh báo khi kết quả lệch chuẩn.",
    points: [],
    tags: ["Log", "Dashboard", "Alert"],
  },
  {
    id: "hitl",
    span: "md:col-span-12",
    title: "Human-in-the-loop",
    desc: "Điểm duyệt của con người được đặt tại những bước quan trọng — agent đề xuất, nghiệp vụ quyết định.",
    points: [],
    tags: ["Phê duyệt", "Xem lại", "Ghi nhận quyết định"],
  },
];

export const workflow = [
  {
    no: "01",
    title: "Khảo sát bài toán",
    desc: "Phỏng vấn quy trình hiện tại, xác định dữ liệu sẵn có và tiêu chí thành công. Kết quả là bản mô tả bài toán mà cả hai bên cùng hiểu như nhau.",
    chips: ["Phỏng vấn", "Dữ liệu", "KPI"],
  },
  {
    no: "02",
    title: "Thiết kế giải pháp",
    desc: "Chọn kiến trúc phù hợp, vẽ sơ đồ luồng xử lý, phân định agent làm gì và con người quyết định gì.",
    chips: ["Architecture", "Scope", "Phạm vi dữ liệu"],
  },
  {
    no: "03",
    title: "Phát triển Agent",
    desc: "Xây agent, pipeline dữ liệu và tích hợp API vào hệ thống hiện hành — triển khai theo mảng nhỏ để kiểm chứng sớm.",
    chips: ["Agent", "Pipeline", "API"],
  },
  {
    no: "04",
    title: "Thử nghiệm & tinh chỉnh",
    desc: "Chạy thử trên dữ liệu thật, đo chất lượng đầu ra, siết guardrails và sửa lại kịch bản cho khớp nghiệp vụ.",
    chips: ["Đánh giá", "Guardrails", "Số đo"],
  },
  {
    no: "05",
    title: "Vận hành & đo lường",
    desc: "Triển khai thật với dashboard, log và quy trình tiếp nhận phản hồi — cải tiến theo số đo, không theo cảm tính.",
    chips: ["Dashboard", "Log", "Cải tiến"],
  },
];

export const sandboxScenarios = [
  {
    id: "policy",
    label: "Tra cứu chính sách nội bộ",
    trigger: "Nhân viên hỏi trong chat nội bộ: “Quy trình tạm ứng công tác phí thế nào?”",
    steps: [
      "Nhận yêu cầu từ kênh chat",
      "Tra cứu sổ tay & chính sách (RAG)",
      "Tổng hợp & trả lời kèm trích dẫn",
    ],
    answer:
      "Tạm ứng tối đa 70% kinh phí theo mục 4.2 · Sổ tay Tài chính. Điền mẫu TR-07, người quản lý trực tiếp phê duyệt trước khi kế toán xuất tiền.",
  },
  {
    id: "orders",
    label: "Báo cáo đơn hàng",
    trigger: "Giám đốc vận hành muốn biết: “Tuần này có đơn nào chậm xử lý?”",
    steps: [
      "Đọc trạng thái từ hệ thống đơn hàng",
      "So khớp SLA & phát hiện ngoại lệ",
      "Gửi báo cáo tổng hợp",
    ],
    answer:
      "3 đơn vượt SLA 48h (đơn DH-1041, DH-1042, DH-1063). Nguyên nhân phổ biến: thiếu thông tin địa chỉ. Agent đã gửi yêu cầu bổ sung cho 3 đơn.",
  },
  {
    id: "lead",
    label: "Tiếp nhận yêu cầu khách",
    trigger: "Khách điền form website: “muốn biết giá giải pháp cho-store quy mô nhỏ”",
    steps: [
      "Phân loại & tóm tắt yêu cầu",
      "Hỏi lại thông tin còn thiếu",
      "Tạo ghi nhận & hẹn giờ liên hệ",
    ],
    answer:
      "Đã ghi nhận yêu cầu (Phân loại: Bán lẻ · Quy mô nhỏ). Agent gửi câu hỏi làm rõ về số lượng ca vận hành. Ưu tiên: tạo liên hệ trong 1 ngày làm việc.",
  },
];

export const industries = [
  { name: "Logistics", note: "Theo dõi đơn, tra cứu trạng thái vận chuyển", art: "truck" },
  { name: "Tài chính — Ngân hàng", note: "Tổng hợp báo cáo, tra cứu quy định nội bộ", art: "coins" },
  { name: "Bán lẻ & FMCG", note: "Tư vấn sản phẩm, xử lý yêu cầu đơn hàng", art: "cart" },
  { name: "Sản xuất", note: "Báo cáo trạng thái sản xuất, cảnh báo bất thường", art: "factory" },
  { name: "Y tế & Sức khỏe", note: "Đặt lịch, nhắc hẹn, tra cứu thông tin dịch vụ", art: "heartpulse" },
  { name: "Bất động sản", note: "Thu thập nhu cầu khách, hẹn lịch xem nhà", art: "building" },
  { name: "Giáo dục", note: "Trợ lý trả lời học viên, quản lý lớp & lịch học", art: "book" },
  { name: "Nhà hàng — Khách sạn", note: "Nhận đơn, đặt bàn, gợi ý thực đơn", art: "utensils" },
  { name: "Bảo hiểm", note: "Tiếp nhận hồ sơ, tra cứu quyền lợi & điều khoản", art: "umbrella" },
  { name: "Thương mại điện tử", note: "Đồng bộ đơn, trả lời khách, cảnh báo tồn kho", art: "bag" },
  { name: "Nhân sự & Hành chính", note: "Onboarding, trả lời chính sách, duyệt đề xuất", art: "users" },
  { name: "Truyền thông & Nội dung", note: "Lên ý tưởng, soạn thảo, review theo brand voice", art: "megaphone" },
];

export const partners = [
  {
    name: "Luméa",
    url: "https://lumeavn.com",
    logo: "/partners/lumea-mark.svg",
    note: "Quản lý thương hiệu Việt — process & nền tảng số",
    tint: true,
  },
  {
    name: "ZuneF",
    url: "https://zunef.com",
    logo: "/partners/zunef-logo.webp",
    note: "Tài khoản bản quyền chính hãng giá tốt",
    tint: false,
  },
  {
    name: "Fansipan Group",
    url: "https://fansipan-group.vn",
    logo: "/partners/fansipan-group-mark.png",
    note: "Công ty Cổ phần FANSIPAN GROUP — Cơ điện M&E, HVAC & tháp giải nhiệt",
    tint: false,
  },
];

export const partnersNote =
  "Ba đối tác hiện đang cùng DeepSI làm việc thật — thẻ trượt tự động, rê chuột để dừng lại và bấm để ghé thăm website của họ.";

export const journey = [
  {
    stage: "GIAI ĐOẠN 01",
    title: "Khám phá & định phạm vi",
    desc: "Cùng nhìn lại bài toán, dữ liệu hiện có và tiêu chí thành công. Không có giải pháp trước khi có bài toán.",
    chips: ["Bản đồ quy trình", "Danh mục dữ liệu"],
  },
  {
    stage: "GIAI ĐOẠN 02",
    title: "Triển khai theo nhịp",
    desc: "Phát triển theo mảng nhỏ, kiểm chứng từng bước với dữ liệu thật — mỗi bước đều có thể dừng lại để đánh giá.",
    chips: ["Mốc kiểm chứng", "Bản chạy thử"],
  },
  {
    stage: "GIAI ĐOẠN 03",
    title: "Vận hành & mở rộng",
    desc: "Đo bằng dashboard, bảo trì theo log, và nhân rộng agent sang quy trình kế tiếp khi quy trình đầu đã ổn.",
    chips: ["Dashboard", "Nhân rộng"],
  },
];

export type TechIcon = { id: string; name: string };

export const techToolbox: TechIcon[] = [
  { id: "python", name: "Python" },
  { id: "typescript", name: "TypeScript" },
  { id: "nextdotjs", name: "Next.js" },
  { id: "react", name: "React" },
  { id: "nodedotjs", name: "Node.js" },
  { id: "fastapi", name: "FastAPI" },
  { id: "langchain", name: "LangChain" },
  { id: "git", name: "Git" },
  { id: "playwright", name: "Playwright" },
  { id: "gsap", name: "GSAP" },
  { id: "threedotjs", name: "Three.js" },
  { id: "tailwindcss", name: "Tailwind CSS" },
  { id: "claude", name: "Claude" },
  { id: "googlegemini", name: "Gemini" },
  { id: "mistralai", name: "Mistral" },
  { id: "ollama", name: "Ollama" },
];

export const techInfra: TechIcon[] = [
  { id: "docker", name: "Docker" },
  { id: "kubernetes", name: "Kubernetes" },
  { id: "n8n", name: "n8n" },
  { id: "postgresql", name: "PostgreSQL" },
  { id: "supabase", name: "Supabase" },
  { id: "pinecone", name: "Pinecone" },
  { id: "qdrant", name: "Qdrant" },
  { id: "redis", name: "Redis" },
  { id: "cloudflare", name: "Cloudflare" },
  { id: "vercel", name: "Vercel" },
  { id: "nginx", name: "Nginx" },
  { id: "githubactions", name: "GitHub Actions" },
  { id: "prometheus", name: "Prometheus" },
  { id: "grafana", name: "Grafana" },
];

export const techToolboxLabel =
  "Ngôn ngữ, framework và công cụ thường được chọn cho từng bài toán — linh hoạt theo hệ thống hiện có của bạn.";

export const techInfraLabel =
  "Hạ tầng chạy agent: container, cơ sở dữ liệu, vector store, CI/CD và monitoring để mọi thứ chạy ổn định, đo được.";
