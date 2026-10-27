import type { MetadataRoute } from "next";
import { SITE_LAST_MODIFIED } from "@/data/content";

const base = "https://deepsi.space";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: SITE_LAST_MODIFIED,
    },
    {
      url: `${base}/privacy`,
      lastModified: SITE_LAST_MODIFIED,
    },
    {
      url: `${base}/terms`,
      lastModified: SITE_LAST_MODIFIED,
    },
  ];
}
