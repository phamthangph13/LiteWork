import type { NextConfig } from "next";

// STATIC_EXPORT=1 → build tĩnh dùng cho GitHub Pages (out/), bỏ headers() server-only.
const STATIC_EXPORT = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(STATIC_EXPORT
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        // cacheComponents không tương thích output: "export" — dùng pipeline tĩnh thuần.
        cacheComponents: false as const,
        partialPrefetching: false as const,
      }
    : {
        cacheComponents: true as const,
        partialPrefetching: true as const,
      }),
  poweredByHeader: false,
  ...(STATIC_EXPORT
    ? { output: "export" as const, images: { unoptimized: true } }
    : {}),
  ...(STATIC_EXPORT
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
                { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=31536000; includeSubDomains; preload",
                },
              ],
            },
            {
              source: "/patterns/:path*",
              headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
            },
            {
              source: "/partners/:path*",
              headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
            },
            {
              source: "/tech-icons/:path*",
              headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
            },
          ];
        },
      }),
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
