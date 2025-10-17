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
