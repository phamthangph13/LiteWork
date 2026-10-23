// Build GitHub Pages (output: "export" → out/):
// 1) tạm gỡ phần chỉ chạy trên Node server: nodemailer API route + proxy/middleware;
// 2) tạm thêm `export const dynamic = "force-static"` cho robots/sitemap/manifest
//    (bắt buộc khi export, nhưng bị cấm bởi cacheComponents ở build thường);
// 3) build, rồi trả lại mọi thứ như cũ.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const PARKED = [
  ["app/api/contact/route.ts", "route.server.ts"],
  ["proxy.ts", "proxy.server.ts"],
];

const FORCE_STATIC = ["app/robots.ts", "app/sitemap.ts", "app/manifest.ts"];
const DYNAMIC_LINE = 'export const dynamic = "force-static";';
const ANCHOR = 'import type { MetadataRoute } from "next";';

const moved = [];

for (const [from, to] of PARKED) {
  const src = join(root, from);
  const dst = join(root, to);
  if (existsSync(src)) {
    renameSync(src, dst);
    moved.push([src, dst]);
  }
}

const patchedFiles = [];

for (const file of FORCE_STATIC) {
  const path = join(root, file);
  const original = readFileSync(path, "utf8");
  if (original.includes(DYNAMIC_LINE) || !original.includes(ANCHOR)) continue;
  writeFileSync(path, original.replace(ANCHOR, `${ANCHOR}\n\n${DYNAMIC_LINE}`));
  patchedFiles.push([path, original]);
}

try {
  // Kiểu route sinh từ dev/validation cũ có thể tham chiếu file tạm thời đã gỡ.
  rmSync(join(root, ".next", "dev"), { recursive: true, force: true });
  rmSync(join(root, ".next", "types"), { recursive: true, force: true });
  const res = spawnSync("npx", ["next", "build"], {
    cwd: root,
    stdio: "inherit",
    // Windows: npx là file .cmd — bắt buộc shell:true, khi không spawn trả ENOENT âm thầm.
    shell: process.platform === "win32",
    env: {
      ...process.env,
      STATIC_EXPORT: "1",
      NEXT_PUBLIC_WEB3FORMS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      NEXT_TELEMETRY_DISABLED: "1",
    },
  });
  process.exitCode = res.status ?? 1;
} finally {
  for (const [src, dst] of moved) {
    if (existsSync(dst)) renameSync(dst, src);
  }
  for (const [path, original] of patchedFiles) {
    writeFileSync(path, original);
  }
}
