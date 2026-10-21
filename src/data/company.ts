export const company = {
  brand: "AEROTECH",
  legalName: "Công ty Cổ phần Công nghệ Điều hoà không khí AEROTECH",
  tagline: "Tổng thầu thiết kế – cung cấp – thi công hệ thống điều hoà không khí & thông gió",
  subline:
    "Giải pháp HVAC cho công trình, thương mại và công nghiệp — từ khảo sát thiết kế đến thi công, nghiệm thu và bảo trì vận hành dài hạn.",
  founded: "2009",
  hotline: "0909 123 456",
  hotline2: "1900 6868",
  email: "info@aerotech.vn",
  website: "aerotech.vn",
  taxCode: "0316 458 921",
  address: "88 Nguyễn Văn Linh, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
  addressShort: "Quận 1, TP. Hồ Chí Minh",
  license: "Giấy chứng nhận đăng ký doanh nghiệp 0316 458 921",
  workingHours: "Thứ 2 – Thứ 7: 08:00 – 18:00 · Hỗ trợ sự cố 24/7",
} as const;

export type Stat = { value: string; unit?: string; label: string; note?: string };

export const stats: Stat[] = [
  { value: "16", unit: "năm", label: "Kinh nghiệm ngành HVAC" },
  { value: "480", unit: "+", label: "Dự án đã bàn giao" },
  { value: "2.4", unit: "triệu m²", label: "Diện tích sàn điều hoà" },
  { value: "320", unit: "+", label: "Kỹ sư – kỹ thuật viên" },
  { value: "18", unit: "tỉnh", label: "Phạm vi triển khai toàn quốc" },
  { value: "99", unit: "%", label: "Khách hàng tiếp tục sử dụng dịch vụ" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: "design" | "supply" | "install" | "maint" | "clean" | "industrial" | "vrf" | "vent";
};

export const services: Service[] = [
  {
    id: "design",
    title: "Tư vấn & thiết kế hệ thống",
    description:
      "Đội ngũ kỹ sư M&E lập phương án thiết kế, dự toán và mô phỏng năng lượng trước khi thi công.",
    points: ["Thiết kế HVAC & phun sương", "Tính toán tải nhiệt chuẩn ASHRAE", "Mô phỏng CFD tiết kiệm điện", "Dự toán BOQ chi tiết"],
    icon: "design",
  },
  {
    id: "supply",
    title: "Cung cấp thiết bị",
    description:
      "Kênh phân phối trực tiếp từ các nhà sản xuất uy tín, có tem, bảo hành và giấy tờ nguồn gốc đầy đủ.",
    points: ["Chiller, AHU, FCU, VRF", "Van, kính, ống gió, phụ kiện", "Tủ điện & thiết bị điều khiển", "Nhập khẩu chính hãng"],
    icon: "supply",
  },
  {
    id: "install",
    title: "Thi công & lắp đặt",
    description:
      "Thi công trọn gói bằng đội thợ của công ty, không thuê ngoài, đảm bảo chất lượng và tiến độ cam kết.",
    points: ["Đường ống gió, ống nước lạnh", "Hệ thống điện & tự động hoá", "Vận hành thử & cân bằng không khí", "Hồ sơ hoàn công đầy đủ"],
    icon: "install",
  },
  {
    id: "maint",
    title: "Bảo trì & bảo dưỡng",
    description:
      "Hợp đồng bảo trì định kỳ 12/24/36 tháng với đội kỹ thuật lưu trú tại từng khu vực.",
    points: ["Bảo trì định kỳ theo lịch", "Sửa chữa khẩn cấp 24/7", "Vệ sinh dàn tải nhiệt", "Báo cáo hiệu suất định kỳ"],
    icon: "maint",
  },
  {
    id: "clean",
    title: "Phòng sạch & điện tử",
    description:
      "Thi công phòng sạch cấp C/D cho bệnh viện, phòng thí nghiệm và nhà máy điện tử theo tiêu chuẩn.",
    points: ["Tường panel & sàn epoxy", "Lọc HEPA & lọc khí", "Áp lực dương âm", "Nghiệm thu theo ISO 14644"],
    icon: "clean",
  },
  {
    id: "industrial",
    title: "Nhà máy & công nghiệp",
    description:
      "Hệ thống làm mát công nghiệp, xử lý nhiệt thải và điều hoà tại các khu sản xuất quy mô lớn.",
    points: ["Làm mát cưỡi ngựa / air cooler", "Hệ thống xử lý khí thải", "Chiller nước vỏ không", "Năng lượng tái tạo heat pump"],
    icon: "industrial",
  },
  {
    id: "vrf",
    title: "Điều hoà trung tâm VRF",
    description:
      "Giải pháp VRF cho tòa nhà văn phòng và chung cư, điều khiển theo vùng, tiết kiệm tới 35% điện năng.",
    points: ["Điều khiển theo từng phòng", "Booster heater & heat recovery", "Kết nối BMS/EMS", "Bảo trì thay thế linh kiện"],
    icon: "vrf",
  },
  {
    id: "vent",
    title: "Thông gió & khử mùi",
    description:
      "Thiết kế và thi công hệ thống thông gió, hút khói, khử mùi cho bếp, phòng máy, hầm và kho.",
    points: ["Thông gió hút – đẩy", "Hệ thống khử mùi ozone", "Phòng máy & hầm xe", "Tính toán tốc độ gió theo ASHRAE 62"],
    icon: "vent",
  },
];

export type Sector = {
  name: string;
  detail: string;
  icon: "factory" | "building" | "landmark" | "health" | "hotel" | "truck" | "server" | "store";
};

export const sectors: Sector[] = [
  { name: "Nhà xưởng & công nghiệp", detail: "Làm mát quy trình sản xuất", icon: "factory" },
  { name: "Thương mại & văn phòng", detail: "Trung tâm thương mại, tòa nhà", icon: "building" },
  { name: "Công trình công cộng", detail: "Hội trường, nhà thi đấu, sân bay", icon: "landmark" },
  { name: "Y tế & giáo dục", detail: "Bệnh viện, trường học, phòng mổ", icon: "health" },
  { name: "Nhà hàng & khách sạn", detail: "Bếp, sảnh, phòng lưu trú", icon: "hotel" },
  { name: "Logistics & kho lạnh", detail: "Kho đông, chuỗi lạnh", icon: "truck" },
  { name: "Trung tâm dữ liệu", detail: "Cooling 2N, tiết kiệm PUE", icon: "server" },
  { name: "Bán lẻ & chuỗi", detail: "Cửa hàng, siêu thị, showroom", icon: "store" },
];

export type Project = {
  name: string;
  category: string;
  location: string;
  year: string;
  scale: string;
  scope: string;
  status: "Hoàn thành" | "Đang thi công" | "Bảo trì";
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Nhà máy bao bì Bình Dương",
    category: "Công nghiệp",
    location: "Bình Dương",
    year: "2024",
    scale: "45.000 m² · 1.800 tấn lạnh",
    scope: "Chiller 2.400 RT, AHU 18.000 m³/h, hệ thống làm mát cưỡi ngựa, đường ống than giá nhiệt.",
    status: "Hoàn thành",
    tags: ["Chiller", "Công nghiệp"],
  },
  {
    name: "Trung tâm thương mại Hải Phong",
    category: "Thương mại",
    location: "Hải Phong",
    year: "2023",
    scale: "86.000 m² · 2.400 tấn lạnh",
    scope: "Hệ thống trung tâm 4 vòng tuần hoàn nước lạnh, 12 AHU, điều khiển theo vùng.",
    status: "Bảo trì",
    tags: ["Trung tâm", "AHU"],
  },
  {
    name: "Khu công nghiệp Long Bình",
    category: "Công nghiệp",
    location: "Long An",
    year: "2023",
    scale: "62.000 m² · 1.500 tấn lạnh",
    scope: "Làm mát nhà xưởng, thông gió hút khói hàn, hệ thống cấp khí tươi cho 6 nhà xưởng.",
    status: "Hoàn thành",
    tags: ["Nhà xưởng", "Hút khói"],
  },
  {
    name: "Bệnh viện Đa khoa Đà Nẵng",
    category: "Y tế",
    location: "Đà Nẵng",
    year: "2024",
    scale: "38.000 m² · 12 phòng mổ",
    scope: "12 phòng mổ phân loại cấp D, hệ thống lọc HEPA, khử mùi, âm thanh y tế.",
    status: "Hoàn thành",
    tags: ["Phòng sạch", "Y tế"],
  },
  {
    name: "Khách sạn Sài Gòn Bay",
    category: "Nhà hàng & khách sạn",
    location: "TP. Hồ Chí Minh",
    year: "2022",
    scale: "320 phòng · 900 tấn lạnh",
    scope: "Hệ thống VRF cho 320 phòng, khu hội nghị và 3 nhà hàng, hệ thống bếp hút mùi.",
    status: "Bảo trì",
    tags: ["VRF", "Khách sạn"],
  },
  {
    name: "Trung tâm logistics Long Hải",
    category: "Logistics & kho lạnh",
    location: "Hải Phong",
    year: "2025",
    scale: "55.000 m² · kho lạnh −25°C",
    scope: "Kho lạnh 3 khoang nhiệt độ, chính 6 chùng xả, cầu cân bằng không khí, 2.000 tấn lạnh.",
    status: "Đang thi công",
    tags: ["Kho lạnh", "Chuỗi lạnh"],
  },
  {
    name: "Tòa nhà văn phòng Keangnam",
    category: "Thương mại & văn phòng",
    location: "Hà Nội",
    year: "2022",
    scale: "28.000 m² · 24 tầng",
    scope: "VRF 4 ngôi, chiller backup, BMS điều khiển theo thang, đường ống gió tầng kỹ thuật.",
    status: "Hoàn thành",
    tags: ["VRF", "BMS"],
  },
  {
    name: "Trường Đại học Bách Khoa",
    category: "Y tế & giáo dục",
    location: "TP. Hồ Chí Minh",
    year: "2023",
    scale: "42.000 m² · 1.100 tấn lạnh",
    scope: "Hệ thống trung tâm cho giảng đường, phòng thí nghiệm, hội trường lớn và nhà thi đấu.",
    status: "Bảo trì",
    tags: ["Trường học", "Chiller"],
  },
  {
    name: "Trung tâm dữ liệu FPT Đà Nẵng",
    category: "Trung tâm dữ liệu",
    location: "Đà Nẵng",
    year: "2024",
    scale: "1.200 m² · cooling 2N",
    scope: "2 chiller 1.200 RT chạy song song, CRAH, UPS nhiệt, PUE mục tiêu dưới 1.25.",
    status: "Hoàn thành",
    tags: ["Data center", "2N"],
  },
  {
    name: "Nhà máy thực phẩm Mộc Châu",
    category: "Công nghiệp",
    location: "Sơn La",
    year: "2023",
    scale: "30.000 m² · 1.400 tấn lạnh",
    scope: "Hệ thống lạnh công nghiệp, kho lạnh dương 8°C, xả nhiệt thải và điều hoà khu sản xuất.",
    status: "Hoàn thành",
    tags: ["Công nghiệp", "Kho lạnh"],
  },
  {
    name: "Trung tâm mua sắm Aeon Hà Nội",
    category: "Thương mại",
    location: "Hà Nội",
    year: "2022",
    scale: "70.000 m² · 2.000 tấn lạnh",
    scope: "8 AHU thay thế, hệ thống điện gia tăng tải, cân bằng không khí và khử mùi khu ăn uống.",
    status: "Hoàn thành",
    tags: ["Bán lẻ", "AHU"],
  },
  {
    name: "Kho lạnh nông sản Đà Lạt",
    category: "Logistics & kho lạnh",
    location: "Lâm Đồng",
    year: "2025",
    scale: "18.000 m² · 650 tấn lạnh",
    scope: "Kho lạnh âm, máy nén tăng áp, cửa xuất kho, hệ thống báo động nhiệt độ theo lô hàng.",
    status: "Đang thi công",
    tags: ["Kho lạnh", "Nông sản"],
  },
];

export const clients = [
  "Khang Minh Group",
  "Việt Thịnh Corp",
  "An Phú Industrial",
  "Đại Dương Group",
  "Minh Châu Land",
  "Phương Nam Holding",
  "Hoàng Gia Retail",
  "Thành Đạt JSC",
  "Tân Tiến Logistics",
  "Sao Biển Hotels",
  "Trung Sơn Foods",
  "Đông Á Pharma",
];

export const partners = [
  "Daikin",
  "Carrier",
  "Mitsubishi Electric",
  "Panasonic",
  "Trane",
  "LG",
  "Samsung",
  "Gree",
  "Midea",
  "Danfoss",
  "Johnson Controls",
  "Schneider",
];

export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  focus: string;
};

export const team: TeamMember[] = [
  {
    name: "Nguyễn Văn Hùng",
    role: "Giám đốc điều hành",
    experience: "22 năm",
    focus: "Chiến lược, đầu tư và đối tác",
  },
  {
    name: "Trần Minh Khoa",
    role: "Giám đốc kỹ thuật",
    experience: "18 năm",
    focus: "Thiết kế M&E, tiêu chuẩn ASHRAE",
  },
  {
    name: "Lê Thị Mai",
    role: "Trưởng phòng thiết kế",
    experience: "15 năm",
    focus: "Tính tải nhiệt, mô phỏng CFD",
  },
  {
    name: "Phạm Quốc Dũng",
    role: "Giám đốc thi công",
    experience: "17 năm",
    focus: "Tổ chức thi công, an toàn, tiến độ",
  },
  {
    name: "Đỗ Thanh Hà",
    role: "Trưởng phòng bảo dưỡng",
    experience: "13 năm",
    focus: "Vận hành, bảo trì, báo cáo hiệu suất",
  },
  {
    name: "Vũ Đức Thắng",
    role: "Trưởng phòng vật tư",
    experience: "14 năm",
    focus: "Cung ứng thiết bị, chứng từ nhập khẩu",
  },
];

export const certifications = [
  { title: "ISO 9001:2015", detail: "Quản lý chất lượng" },
  { title: "ISO 14001:2015", detail: "Quản lý môi trường" },
  { title: "ISO 45001:2018", detail: "An toàn lao động" },
  { title: "ISO 50001", detail: "Quản lý năng lượng" },
  { title: "HACCP", detail: "An toàn thực phẩm" },
  { title: "ISO 14644", detail: "Tiêu chuẩn phòng sạch" },
  { title: "Chứng nhận năng lực", detail: "Thi công lĩnh lực hạng A" },
  { title: "Thành viên ASHRAE", detail: "Hiệp hội điều hoà Hoa Kỳ" },
];

export const process = [
  {
    step: "01",
    title: "Tiếp nhận & khảo sát",
    duration: "2 – 5 ngày",
    description:
      "Đội kỹ sư ra hiện trường đo đạc, kiểm tra nguồn điện, nước, mặt bằng và yêu cầu vận hành.",
  },
  {
    step: "02",
    title: "Thiết kế & báo giá",
    duration: "7 – 10 ngày",
    description:
      "Lập phương án thiết kế, dự toán chi tiết theo BOQ, tối ưu chi phí vận hành và tiến độ.",
  },
  {
    step: "03",
    title: "Ký hợp đồng & cung ứng",
    duration: "15 – 30 ngày",
    description:
      "Ký hợp đồng trọn gói, đặt hàng thiết bị chính hãng, kiểm tra và nhập kho tại công trường.",
  },
  {
    step: "04",
    title: "Thi công lắp đặt",
    duration: "Theo tiến độ dự án",
    description:
      "Thi công đường ống, điện, tự động hoá; nghiệm thu từng hạng mục và ghi hình hồ sơ.",
  },
  {
    step: "05",
    title: "Nghiệm thu & bàn giao",
    duration: "5 – 7 ngày",
    description:
      "Cân bằng không khí, đo năng lượng, chạy thử tải, bàn giao hồ sơ hoàn công và hướng dẫn vận hành.",
  },
  {
    step: "06",
    title: "Bảo hành & bảo trì",
    duration: "12 – 36 tháng",
    description:
      "Bảo hành thiết bị, hỗ trợ kỹ thuật 24/7 và chu kỳ bảo trì định kỳ có báo cáo.",
  },
];

export const faqs = [
  {
    q: "Thời gian phản hồi báo giá là bao lâu?",
    a: "Với báo giá sơ bộ, chúng tôi phản hồi trong 24 giờ làm việc. Báo giá chi tiết theo BOQ và bản vẽ thiết kế được gửi trong 7 – 10 ngày sau khảo sát hiện trường.",
  },
  {
    q: "Bảo hành thiết bị và thi công trong bao lâu?",
    a: "Thiết bị được bảo hành theo chính sách của nhà sản xuất (12 – 36 tháng). Phần thi công và hệ thống do AEROTECH thực hiện được bảo hành 24 tháng kể từ ngày nghiệm thu.",
  },
  {
    q: "Công ty có nhận thi công trọn gói (EPC) không?",
    a: "Có. Chúng tôi thực hiện đầy đủ chuỗi EPCI: thiết kế, cung cấp, thi công, vận hành thử, nghiệm thu và bảo trì sau bàn giao.",
  },
  {
    q: "Phạm vi dịch vụ có rộng trên toàn quốc không?",
    a: "Chúng tôi triển khai tại 18 tỉnh thành với đội kỹ thuật lưu trú. Các dự án lớn được bổ sung nhân sự từ vùng miền Trung và miền Nam.",
  },
  {
    q: "Quy trình báo giá có cam kết rõ ràng không?",
    a: "Hợp đồng luôn ghi rõ khối lượng, chất lượng thiết bị, tiến độ từng hạng mục, điều khoản thanh toán và tiêu chuẩn nghiệm thu. Không phát sinh ngoài dự toán.",
  },
  {
    q: "Có hỗ trợ tư vấn tiết kiệm năng lượng không?",
    a: "Có. Đội ngũ kỹ sư tính toán tải nhiệt, so sánh phương án VRF – chiller – heat pump và lập báo cáo hoàn vốn đầu tư trước khi khách hàng quyết định.",
  },
];

export const highlights = [
  "Hồ sơ năng lực đầy đủ theo Nghị định 06/2022/NĐ-CP",
  "Nhân sự kỹ thuật có chứng chỉ nghề do Bộ Xây dựng cấp",
  "Báo giá minh bạch, không phát sinh ngoài dự toán",
  "Thi công bằng đội của công ty, không thuê ngoài",
  "Bảo hành thi công 24 tháng, thiết bị theo nhà sản xuất",
  "Hỗ trợ kỹ thuật 24/7 trong suốt thời gian bảo hành",
];

export const documents = [
  { name: "Hồ sơ năng lực 2026", type: "PDF · 8.4 MB", note: "Giới thiệu, năng lực nhân sự, biểu mẫu" },
  { name: "Danh mục dự án tiêu biểu", type: "PDF · 5.1 MB", note: "14 dự án có ảnh thực tế" },
  { name: "Catalogue thiết bị", type: "PDF · 3.8 MB", note: "Chiller, AHU, FCU, VRF và phụ kiện" },
  { name: "Báo giá mẫu & hợp đồng", type: "DOCX · 120 KB", note: "Mẫu hợp đồng trọn gói EPC" },
  { name: "Báo cáo tiết kiệm năng lượng", type: "PDF · 2.6 MB", note: "Phân tích PUE và phương án tiết kiệm điện" },
  { name: "Quy trình nghiệm thu & bảo hành", type: "PDF · 1.2 MB", note: "Biểu mẫu, tiêu chuẩn và cam kết SLA" },
];

export type WhyUs = {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: "shield" | "clock" | "cost" | "team" | "doc" | "energy";
};

/** Lý do doanh nghiệp chọn AEROTECH — góc nhìn B2B */
export const whyUs: WhyUs[] = [
  {
    title: "Trọn gói EPCI, một đầu mối chịu trách nhiệm",
    description:
      "Một hợp đồng duy nhất cho thiết kế, cung cấp, thi công, nghiệm thu và bảo trì. Không phát sinh do phân chia hạng mục, không tranh chấp trách nhiệm giữa các nhà thầu.",
    metric: "1",
    metricLabel: "Hợp đồng duy nhất",
    icon: "shield",
  },
  {
    title: "Cam kết tiến độ bằng hợp đồng",
    description:
      "Hợp đồng ghi rõ mốc bàn giao từng hạng mục, đền bù và biện pháp bảo đảm. Chúng tôi cam kết hoàn thành đúng hạn hoặc chịu trách nhiệm theo điều khoản.",
    metric: "98%",
    metricLabel: "Đúng hạn cam kết",
    icon: "clock",
  },
  {
    title: "Báo giá minh bạch, khóa chi phí",
    description:
      "Báo giá theo BOQ chi tiết, giá thiết bị và thi công tách riêng, giữ nguyên 12 tháng. Không phát sinh ngoài dự toán trừ khi có phê duyệt bằng văn bản.",
    metric: "0",
    metricLabel: "Phát sinh ngoài dự toán",
    icon: "cost",
  },
  {
    title: "Đội kỹ thuật của công ty, không thuê ngoài",
    description:
      "320+ kỹ sư, kỹ thuật viên có chứng chỉ nghề do cơ quan có thẩm quyền cấp. Cùng đội thi công và bảo trì nên vấn đề sau bàn giao được xử lý nhanh.",
    metric: "320+",
    metricLabel: "Kỹ sư có chứng chỉ",
    icon: "team",
  },
  {
    title: "Hồ sơ đấu thầu đầy đủ, đúng quy định",
    description:
      "Hồ sơ năng lực theo Nghị định 06/2022/NĐ-CP, báo giá theo biểu mẫu B02-B05, kèm hồ sơ năng lực tài chính và bảo lãnh dự thầu. Hỗ trợ giải trình khi cần.",
    metric: "100%",
    metricLabel: "Hồ sơ theo biểu mẫu",
    icon: "doc",
  },
  {
    title: "Tư vấn tối ưu chi phí vận hành",
    description:
      "Mô phỏng CFD và phân tích PUE giúp chủ đầu tư chọn phương án thiết bị phù hợp nhất với điều kiện thực tế của công trình.",
    metric: "35%",
    metricLabel: "Tiết kiệm điện kỳ vọng",
    icon: "energy",
  },
];

export type Commitment = { label: string; value: string; detail: string };

/** Cam kết dịch vụ (SLA) — thông tin dành cho bộ phận đấu thầu / vận hành */
export const commitments: Commitment[] = [
  {
    label: "Phản hồi báo giá sơ bộ",
    value: "24 giờ",
    detail: "Tính từ thời điểm nhận đủ hồ sơ đầu vào",
  },
  {
    label: "Báo giá chi tiết theo BOQ",
    value: "7 – 10 ngày",
    detail: "Sau khảo sát hiện trường có bản vẽ sơ bộ",
  },
  {
    label: "Bảo hành phần thi công",
    value: "24 tháng",
    detail: "Kể từ ngày nghiệm thu và bàn giao",
  },
  {
    label: "Bảo hành thiết bị",
    value: "12 – 36 tháng",
    detail: "Theo chính sách bảo hành của nhà sản xuất",
  },
  {
    label: "Xử lý sự cố khẩn cấp",
    value: "24 – 48 giờ",
    detail: "Tại khu vực triển khai có đội lưu trú",
  },
  {
    label: "Báo cáo hiệu suất vận hành",
    value: "Hằng quý",
    detail: "Kèm đề xuất tối ưu điện năng và điều hoà",
  },
];

export type SafetyItem = { title: string; description: string };

/** An toàn lao động & quản lý chất lượng */
export const safety: SafetyItem[] = [
  {
    title: "An toàn lao động theo ISO 45001",
    description:
      "Nội quy an toàn tại công trường, hồ sơ nhật ký thi công, huấn luyện định kỳ cho 100% kỹ sư và công nhân.",
  },
  {
    title: "Quản lý chất lượng ISO 9001",
    description:
      "Kiểm soát vật tư đầu vào, quy trình lắp đặt, kiểm thử từng hạng mục và lưu hồ sơ theo yêu cầu hợp đồng.",
  },
  {
    title: "Nghiệm thu từng hạng mục",
    description:
      "Biên bản nghiệm thu kèm hình ảnh, đo kiểm và xác nhận của đại diện chủ đầu tư trước khi chuyển tiếp.",
  },
  {
    title: "Hồ sơ hoàn công & bàn giao",
    description:
      "Bàn giao đầy đủ bản vẽ as-built, biên bản thử nghiệm, hướng dẫn vận hành và cung cấp đào tạo cho đội vận hành của chủ đầu tư.",
  },
];

export type EnergyItem = { title: string; description: string; saving: string };

export const energy: EnergyItem[] = [
  {
    title: "Chiller biến tần & điều khiển theo tải",
    description:
      "Tự điều chỉnh công suất theo tải thực tế thay vì chạy định kỳ, tránh lãng phí phần công suất dư.",
    saving: "15 – 25%",
  },
  {
    title: "Heat recovery & tái sử dụng nhiệt",
    description:
      "Thu hồi nhiệt từ hệ thống điều hoà để cấp nước nóng sinh hoạt hoặc sản xuất.",
    saving: "20 – 30%",
  },
  {
    title: "Cân bằng không khí & tối ưu tải",
    description:
      "Đo cân bằng không khí, hiệu chuẩn cảm biến và điều chỉnh phân bổ gió theo từng khu vực sử dụng thực tế.",
    saving: "10 – 15%",
  },
  {
    title: "Vận hành & bảo trì theo chu kỳ",
    description:
      "Bảo trì định kỳ làm sạch dàn tải nhiệt, kiểm tra hiệu suất chiller và hiệu chỉnh thiết bị vận hành.",
    saving: "5 – 10%",
  },
];

/** Quy trình làm việc với nhà thầu / đơn vị đấu thầu */
export const procurement: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Tiếp nhận hồ sơ mời thầu",
    description:
      "Nhận hồ sơ mời thầu, làm rõ yêu cầu kỹ thuật, khảo sát hiện trường và lập bảng đối chiếu yêu cầu.",
  },
  {
    step: "02",
    title: "Lập phương án kỹ thuật",
    description:
      "Thiết kế phương án, tính toán tải nhiệt, chọn thiết bị và lập dự toán chi tiết theo biểu mẫu B03/B04.",
  },
  {
    step: "03",
    title: "Nộp hồ sơ dự thầu",
    description:
      "Hoàn thiện hồ sơ năng lực, bảo lãnh dự thầu, thuyết trình giải trình và làm rõ thẩm định.",
  },
  {
    step: "04",
    title: "Ký hợp đồng & khởi công",
    description:
      "Lập hợp đồng, biên bản khởi công, lập tiến độ chi tiết và huy động nhân lực thiết bị tại công trường.",
  },
  {
    step: "05",
    title: "Thi công & nghiệm thu",
    description:
      "Thi công theo tiến độ, nghiệm thu từng hạng mục, lắp đặt hệ thống tự động và hoàn thành hồ sơ hoàn công.",
  },
  {
    step: "06",
    title: "Bàn giao & bảo hành",
    description:
      "Vận hành thử, đo kiểm năng lượng, bàn giao hồ sơ, đào tạo vận hành và áp dụng SLA bảo hành.",
  },
];
