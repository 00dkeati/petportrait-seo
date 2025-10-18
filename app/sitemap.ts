import type { MetadataRoute } from "next";
import data from "../data/keyword-slugs.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://petportrait.co";
  const now = new Date().toISOString();
  const items = (data as Array<{slug:string}>).map(k => ({
    url: base + "/k/" + k.slug,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));
  return [
    { url: base + "/", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/k", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...items
  ];
}
