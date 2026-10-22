import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DeepSI — Giải pháp AI Agent cho doanh nghiệp",
    short_name: "DeepSI",
    description:
      "DeepSI cung cấp dịch vụ tư vấn, phát triển và triển khai AI Agent — giúp doanh nghiệp tự động hóa quy trình, khai thác tri thức nội bộ và nâng cao hiệu quả vận hành.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F3ED",
    theme_color: "#F4F3ED",
    lang: "vi_VN",
    icons: [
      { src: "/logo.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
