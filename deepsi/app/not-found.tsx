import type { Metadata } from "next";
import NotFound404 from "@/components/sections/NotFound404";

export const metadata: Metadata = {
  title: "404 — Không tìm thấy trang | DeepSI",
  description:
    "Agent đã quét toàn bộ sơ đồ site của DeepSI nhưng không tìm thấy route này. Quay về trang chủ hoặc xem các giải pháp AI Agent.",
};

export default function NotFound() {
  return <NotFound404 />;
}
