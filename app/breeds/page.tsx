import { Metadata } from 'next';
import Link from 'next/link';
import breedsData from '@/data/breeds.json';

export const metadata: Metadata = {
  title: 'Pet Breed Guides | PetPortrait.co',
  description: 'Explore our comprehensive guides for different pet breeds including Golden Retrievers, Labradors, German Shepherds, and more. Get portrait ideas and photo tips.',
  alternates: {
    canonical: 'https://petportrait.co/breeds',
  },
  openGraph: {
    title: 'Pet Breed Guides | PetPortrait.co',
    description: 'Explore our comprehensive guides for different pet breeds including Golden Retrievers, Labradors, German Shepherds, and more.',
    url: 'https://petportrait.co/breeds',
    siteName: 'PetPortrait.co',
    type: 'website',
  },
};

export default function BreedsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Breed Guides',
    description: 'Comprehensive guides for different pet breeds with portrait ideas and photo tips',
    url: 'https://petportrait.co/breeds',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: breedsData.length,
      itemListElement: breedsData.map((breed: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: `${breed.name} Portrait Guide`,
          url: `https://petportrait.co/breeds/${breed.slug}`,
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pet Breed Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover portrait ideas, photo tips, and style recommendations for your pet's breed. 
            Each guide is tailored to showcase the unique characteristics of different breeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breedsData.map((breed: any) => (
            <Link
              key={breed.slug}
              href={`/breeds/${breed.slug}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-48 bg-gray-200">
                {breed.example_image && (
                  <img
                    src={breed.example_image}
                    alt={`${breed.name} portrait example`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {breed.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {breed.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  View Guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Pet's Portrait?</h2>
          <p className="text-gray-600 mb-6">
            Get a custom portrait of your pet, regardless of breed. Our artists work with all types of pets.
          </p>
          <Link
            href="https://familyportraitcompany.com/products/pet-portrait?utm_source=petportrait.co&utm_medium=breeds-page&utm_campaign=order-cta"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Your Pet Portrait
          </Link>
        </div>
      </main>
    </>
  );
}



