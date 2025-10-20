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
  
  // General pages
  const generalPages = [
    { url: base + "/about", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/contact", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: base + "/blog", lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: base + "/privacy", lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: base + "/terms", lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 }
  ];

  // Area pages
  const areaPages = [
    { url: base + "/areas", lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: base + "/area/waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: base + "/area/cowplain", lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: base + "/area/denmead", lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: base + "/area/purbrook", lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 }
  ];

  // Business category pages
  const categoryPages = [
    { url: base + "/categories", lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: base + "/coffee-shops", lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 }
  ];

  // SEO service pages
  const seoServicePages = [
    { url: base + "/seo/beauty-salon-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/seo/boiler-service-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/seo/cafes-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/seo/dentist-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/seo/electrician-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/seo/hairdresser-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/seo/massage-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/seo/plumber-waterlooville", lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 }
  ];

  return [
    { url: base + "/", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/k", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: base + "/waterlooville", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...generalPages,
    ...areaPages,
    ...categoryPages,
    ...seoServicePages,
    ...petItems,
    ...waterloovilleItems
  ];
}
