import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Portrait Services | PetPortrait.co',
  description: 'Explore our pet portrait services including custom portraits, gift options, and professional artwork. Find the best pet portrait services in the UK.',
  alternates: {
    canonical: 'https://petportrait.co/services',
  },
  openGraph: {
    title: 'Pet Portrait Services | PetPortrait.co',
    description: 'Explore our pet portrait services including custom portraits, gift options, and professional artwork.',
    url: 'https://petportrait.co/services',
    siteName: 'PetPortrait.co',
    type: 'website',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Best Pet Portrait Sites UK',
      description: 'Discover the top-rated pet portrait services in the UK, including reviews and recommendations.',
      slug: 'best-pet-portrait-sites-uk',
      icon: '🏆',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pet Portrait Services',
    description: 'Professional pet portrait services and recommendations',
    url: 'https://petportrait.co/services',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: service.title,
          url: `https://petportrait.co/services/${service.slug}`,
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pet Portrait Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive pet portrait services and find the best options for your needs. 
            From custom artwork to service recommendations, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  View Service
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Order your custom pet portrait today and experience our professional service.
          </p>
          <Link
            href="https://familyportraitcompany.com/products/pet-portrait?utm_source=petportrait.co&utm_medium=services-page&utm_campaign=order-cta"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Your Portrait
          </Link>
        </div>
      </main>
    </>
  );
}


