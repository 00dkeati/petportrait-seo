import { Metadata } from 'next';
import Link from 'next/link';
import { Breed } from '@/types/breed';
import { GiftGuide } from '@/types/gift';
import breedsData from '@/data/breeds.json';
import giftIdeasData from '@/data/gift_ideas.json';

export const metadata: Metadata = {
  title: 'Pet Portrait Guide - Custom Pet Portraits & Breed Guides | PetPortrait.co',
  description: 'The internet\'s guide to pet portraits. Discover breed-specific portrait styles, photo tips, gift ideas, and find the best custom pet portrait services in the UK.',
  openGraph: {
    title: 'Pet Portrait Guide - Custom Pet Portraits & Breed Guides',
    description: 'The internet\'s guide to pet portraits. Discover breed-specific portrait styles, photo tips, and gift ideas.',
    url: 'https://petportrait.co',
    siteName: 'PetPortrait.co',
    images: [
      {
        url: '/images/homepage/hero-showcase.jpg',
        width: 1200,
        height: 630,
        alt: 'Pet Portrait Guide - Custom Pet Portraits',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Portrait Guide - Custom Pet Portraits & Breed Guides',
    description: 'The internet\'s guide to pet portraits. Discover breed-specific portrait styles and photo tips.',
        images: ['/images/homepage/hero-showcase.jpg'],
  },
  alternates: {
    canonical: 'https://petportrait.co',
  },
};

export default function HomePage() {
  const featuredBreeds = breedsData.slice(0, 6) as Breed[];
  const featuredGifts = giftIdeasData.slice(0, 3) as GiftGuide[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PetPortrait.co',
    description: 'The internet\'s guide to pet portraits. Discover breed-specific portrait styles, photo tips, and gift ideas.',
    url: 'https://petportrait.co',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://petportrait.co/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PetPortrait.co',
      logo: {
        '@type': 'ImageObject',
        url: 'https://petportrait.co/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              The Internet's Guide to Pet Portraits
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover breed-specific portrait styles, expert photo tips, and find the perfect 
              custom pet portrait service for your beloved companion.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for your pet's breed..."
                  className="w-full px-6 py-4 text-lg rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-100">Breed Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-blue-100">Gift Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">Expert Reviewed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Breeds */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Breed Portrait Guides
              </h2>
              <p className="text-lg text-gray-600">
                Discover the perfect portrait style for your pet's breed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBreeds.map((breed) => (
                <Link
                  key={breed.slug}
                  href={`/breeds/${breed.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video relative">
                    <img 
                      src={breed.example_image} 
                      alt={`${breed.name} portrait example`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {breed.name} Portrait Guide
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover the perfect portrait styles for {breed.name.toLowerCase()}s
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {breed.traits.slice(0, 2).map((trait, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/breeds"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Breed Guides
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial Recommendation */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Recommended: The Family Portrait Company
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  After extensive research and customer feedback analysis, we consistently recommend 
                  <strong> The Family Portrait Company</strong> for custom pet portraits. Their combination 
                  of quality, value, and quick delivery makes them our top choice.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Great Value</h3>
                  <p className="text-sm text-gray-600">Starting from just £6</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">3-5 day turnaround</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">High Quality</h3>
                  <p className="text-sm text-gray-600">Premium materials</p>
                </div>
        </div>
              
              <div className="text-center">
                <a
                  href="https://familyportraitcompany.com/?utm_source=petportrait.co&utm_medium=editorial&utm_campaign=homepage"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
                >
                  View Portrait Examples
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  *This is an independent editorial recommendation. We may receive compensation from some services listed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Guides */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gift Guides for Pet Owners
              </h2>
              <p className="text-lg text-gray-600">
                Thoughtful gift ideas for every occasion
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGifts.map((gift) => (
                <Link
                  key={gift.slug}
                  href={`/gifts/${gift.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video relative">
                    <img 
                      src={`/images/gift-guides/${gift.slug}.jpg`} 
                      alt={`${gift.title} gift ideas`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {gift.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Perfect gifts for {gift.breed} owners
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{gift.ideas.length} gift ideas</span>
                      <span className="text-sm text-purple-600 font-medium">View Guide →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Best Pet Portrait Services UK
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive reviews and comparisons of the top pet portrait services
            </p>
            
            <Link
              href="/services/best-pet-portrait-sites-uk"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Read Our Service Reviews
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
    </div>
        </section>
      </main>
    </>
  );
}