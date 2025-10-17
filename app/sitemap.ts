import { MetadataRoute } from 'next';
import breedsData from '@/data/breeds.json';
import giftIdeasData from '@/data/gift_ideas.json';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://petportrait.co';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services/best-pet-portrait-sites-uk`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Breed pages
  const breedPages = breedsData.map((breed: { slug: string }) => ({
    url: `${baseUrl}/breeds/${breed.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Gift pages
  const giftPages = giftIdeasData.map((gift: { slug: string }) => ({
    url: `${baseUrl}/gifts/${gift.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...breedPages, ...giftPages];
}
