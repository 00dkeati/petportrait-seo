import { Metadata } from 'next';
import Link from 'next/link';
import giftIdeasData from '@/data/gift_ideas.json';

export const metadata: Metadata = {
  title: 'Pet Portrait Gift Ideas | PetPortrait.co',
  description: 'Discover thoughtful pet portrait gift ideas for pet lovers. Perfect gifts for birthdays, anniversaries, and special occasions.',
  alternates: {
    canonical: 'https://petportrait.co/gifts',
  },
  openGraph: {
    title: 'Pet Portrait Gift Ideas | PetPortrait.co',
    description: 'Discover thoughtful pet portrait gift ideas for pet lovers. Perfect gifts for birthdays, anniversaries, and special occasions.',
    url: 'https://petportrait.co/gifts',
    siteName: 'PetPortrait.co',
    type: 'website',
  },
};

export default function GiftsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Portrait Gift Ideas',
    description: 'Thoughtful pet portrait gift ideas for pet lovers',
    url: 'https://petportrait.co/gifts',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: giftIdeasData.length,
      itemListElement: giftIdeasData.map((gift: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: gift.title,
          url: `https://petportrait.co/gifts/${gift.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pet Portrait Gift Ideas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect pet portrait gift for any occasion. From birthdays to memorials, 
            our custom portraits make thoughtful and meaningful presents for pet lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftIdeasData.map((gift: any) => (
            <Link
              key={gift.slug}
              href={`/gifts/${gift.slug}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-48 bg-gray-200">
                {gift.example_image && (
                  <img
                    src={gift.example_image}
                    alt={`${gift.title} gift idea`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {gift.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {gift.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  View Gift Ideas
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfect Gift for Pet Lovers</h2>
          <p className="text-gray-600 mb-6">
            A custom pet portrait is a gift that will be treasured forever. 
            Order today and make someone's day special.
          </p>
          <Link
            href="https://familyportraitcompany.com/products/pet-portrait?utm_source=petportrait.co&utm_medium=gifts-page&utm_campaign=order-cta"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Gift Portrait
          </Link>
        </div>
      </main>
    </>
  );
}



