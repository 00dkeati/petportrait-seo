export interface Breed {
  slug: string;
  name: string;
  category: 'dog' | 'cat';
  traits: string[];
  portrait_styles: string[];
  photo_tips: string[];
  overview: {
    origin: string;
    temperament: string;
    coat: string;
    size: string;
    lifespan: string;
  };
  example_image: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

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

export interface ServiceEntry {
  rank: number;
  name: string;
  url: string;
  summary: string;
  pros: string[];
  cons: string[];
  price_range: string;
  delivery_time: string;
  rating: number;
  review_count: number;
  specialties: string[];
}

export interface ServicesData {
  country: string;
  title: string;
  description: string;
  last_updated: string;
  entries: ServiceEntry[];
  comparison_criteria: string[];
  methodology: string;
  disclaimer: string;
}
