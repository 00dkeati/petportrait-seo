import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GiftIdeas from '@/components/GiftIdeas';
import OccasionBlocks from '@/components/OccasionBlocks';
import giftIdeasData from '@/data/gift_ideas.json';

interface GiftPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return giftIdeasData.map((gift) => ({
    slug: gift.slug,
  }));
}

export async function generateMetadata({ params }: GiftPageProps): Promise<Metadata> {
  const { slug } = await params;
  const giftGuide = giftIdeasData.find((g) => g.slug === slug);
  
  if (!giftGuide) {
    return {
      title: 'Gift Guide Not Found',
    };
  }

  const title = `${giftGuide.title} - Perfect Gifts & Custom Portraits | PetPortrait.co`;
  const description = `Discover the best gift ideas for ${giftGuide.breed} owners. Custom portraits, accessories, and thoughtful presents for every occasion.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://petportrait.co/gifts/${giftGuide.slug}`,
      siteName: 'PetPortrait.co',
      images: [
        {
          url: '/images/gift-guides/default.jpg',
          width: 1200,
          height: 630,
          alt: `${giftGuide.title} gift ideas`,
        },
      ],
      locale: 'en_GB',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/gift-guides/default.jpg'],
    },
    alternates: {
      canonical: `https://petportrait.co/gifts/${giftGuide.slug}`,
    },
  };
}

export default async function GiftPage({ params }: GiftPageProps) {
  const { slug } = await params;
  const giftGuide = giftIdeasData.find((g) => g.slug === slug) as any;
  
  if (!giftGuide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: giftGuide.title,
    description: `Gift ideas and recommendations for ${giftGuide.breed} owners, including custom portraits and accessories.`,
    image: '/images/gift-guides/default.jpg',
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
      '@id': `https://petportrait.co/gifts/${giftGuide.slug}`,
    },
    about: {
      '@type': 'Thing',
      name: `${giftGuide.breed} Gift Ideas`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {giftGuide.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find the perfect gifts for {giftGuide.breed} owners. From custom portraits 
              to thoughtful accessories, discover presents that celebrate the special bond 
              between pet and owner.
            </p>
          </div>
        </section>
        
        <GiftIdeas giftIdeas={giftGuide.ideas} />
        <OccasionBlocks occasions={giftGuide.occasions} />
      </main>
    </>
  );
}
