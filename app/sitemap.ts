import type { MetadataRoute } from "next";
import data from "../data/keyword-slugs.json";
import { waterloovilleKeywords } from "../data/waterloovilleKeywords";
import { waterloovilleSlugify } from "../lib/waterloovilleSlugify";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://petportrait.co";
  const now = new Date().toISOString();
  
  // Pet portrait keyword pages
  const petItems = (data as Array<{slug:string}>).map(k => ({
    url: base + "/k/" + k.slug,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));
  
  // Waterlooville pages
  const waterloovilleItems = waterloovilleKeywords.map(k => ({
    url: base + "/waterlooville/" + waterloovilleSlugify(k),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5
  }));
  
  return [
    { url: base + "/", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/k", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: base + "/waterlooville", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...petItems,
    ...waterloovilleItems
  ];
}
