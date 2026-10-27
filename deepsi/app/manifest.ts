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
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
