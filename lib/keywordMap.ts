import { seoKeywords } from "../data/seoKeywords";
import { slugify } from "./slugify";

const entries = seoKeywords.map(k => [slugify(k), k] as const);
export const slugToKeyword = new Map(entries);

export function getKeywordFromSlug(slug: string): string | undefined {
  return slugToKeyword.get(slug);
}


