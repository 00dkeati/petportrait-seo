import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroBreed from '@/components/HeroBreed';
import BreedOverview from '@/components/BreedOverview';
import PortraitStyles from '@/components/PortraitStyles';
import PhotoTips from '@/components/PhotoTips';
import PopularQuestions from '@/components/PopularQuestions';
import EditorialRecommendation from '@/components/EditorialRecommendation';
import RelatedLinks from '@/components/RelatedLinks';
import PublicGallery from '@/components/PublicGallery';
import { listPublicGallery } from '@/lib/publicGallery';
import breedsData from '@/data/breeds.json';

export const runtime = "nodejs";

interface BreedPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return breedsData.map((breed) => ({
    slug: breed.slug,
  }));
}

export async function generateMetadata({ params }: BreedPageProps): Promise<Metadata> {
  const { slug } = await params;
  const breed = breedsData.find((b) => b.slug === slug);
  
  if (!breed) {
    return {
      title: 'Breed Not Found',
    };
  }

  const title = `${breed.name} Portrait Guide - Best Styles & Photo Tips | PetPortrait.co`;
  const description = `Discover the perfect portrait styles for ${breed.name}s. Expert photo tips, portrait ideas, and recommendations for capturing your ${breed.name.toLowerCase()}'s unique personality.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://petportrait.co/breeds/${breed.slug}`,
      siteName: 'PetPortrait.co',
      images: [
        {
          url: breed.example_image,
          width: 1200,
          height: 630,
          alt: `${breed.name} portrait example`,
        },
      ],
      locale: 'en_GB',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [breed.example_image],
    },
    alternates: {
      canonical: `https://petportrait.co/breeds/${breed.slug}`,
    },
  };
}

export default async function BreedPage({ params }: BreedPageProps) {
  const { slug } = await params;
  const breed = breedsData.find((b) => b.slug === slug) as any;
  
  if (!breed) {
    notFound();
  }

  const images = await listPublicGallery(24);

  // Get related breeds (same category, excluding current breed)
  const relatedBreeds = breedsData
    .filter((b) => b.category === breed.category && b.slug !== breed.slug)
    .slice(0, 3) as any[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${breed.name} Portrait Guide`,
    description: `Complete guide to ${breed.name} portraits including styles, photo tips, and recommendations.`,
    image: breed.example_image,
    author: {
      '@type': 'Organization',
      name: 'PetPortrait.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PetPortrait.co',
      logo: {
        '@type': 'ImageObject',
        url: 'https://petportrait.co/logo.png',
      },
    },
    datePublished: '2024-01-15',
    dateModified: '2024-01-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://petportrait.co/breeds/${breed.slug}`,
    },
    about: {
      '@type': 'Thing',
      name: `${breed.name} Pet Portraits`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        <HeroBreed breed={breed} />
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Recent Pet Portraits
            </h2>
            <PublicGallery sources={images} />
          </div>
        </section>
        
        <BreedOverview breed={breed} />
        <PortraitStyles breed={breed} />
        <PhotoTips breed={breed} />
        <PopularQuestions breed={breed} />
        <EditorialRecommendation breed={breed} />
        <RelatedLinks breed={breed} relatedBreeds={relatedBreeds} />
      </main>
    </>
  );
}
