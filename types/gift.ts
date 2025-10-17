export interface GiftIdea {
  title: string;
  type: string;
  description: string;
  price_range: string;
  cta_url: string;
}

export interface Occasion {
  name: string;
  description: string;
  gift_suggestions: string[];
}

export interface GiftGuide {
  slug: string;
  title: string;
  breed: string;
  category: string;
  ideas: GiftIdea[];
  occasions: Occasion[];
}
