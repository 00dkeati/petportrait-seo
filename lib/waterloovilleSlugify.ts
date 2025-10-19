export function waterloovilleSlugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getWaterloovilleKeywordFromSlug(slug: string): string | undefined {
  const { waterloovilleKeywords } = require("../data/waterloovilleKeywords");
  
  for (const keyword of waterloovilleKeywords) {
    if (waterloovilleSlugify(keyword) === slug) {
      return keyword;
    }
  }
  return undefined;
}
