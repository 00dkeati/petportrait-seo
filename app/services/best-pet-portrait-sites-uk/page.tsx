import { Metadata } from 'next';
import ServiceRankingCard from '@/components/ServiceRankingCard';
import ComparisonTable from '@/components/ComparisonTable';
import { ServicesData } from '@/types/service';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Best Pet Portrait Sites UK 2024 - Reviews & Comparison | PetPortrait.co',
  description: 'Comprehensive review of the top pet portrait services in the UK. Compare quality, prices, and delivery times to find the best custom pet portrait service.',
  openGraph: {
    title: 'Best Pet Portrait Sites UK 2024 - Reviews & Comparison',
    description: 'Comprehensive review of the top pet portrait services in the UK. Compare quality, prices, and delivery times.',
    url: 'https://petportrait.co/services/best-pet-portrait-sites-uk',
    siteName: 'PetPortrait.co',
    images: [
      {
        url: '/images/services/comparison.jpg',
        width: 1200,
        height: 630,
        alt: 'Best pet portrait services UK comparison',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pet Portrait Sites UK 2024 - Reviews & Comparison',
    description: 'Comprehensive review of the top pet portrait services in the UK.',
    images: ['/images/services/comparison.jpg'],
  },
  alternates: {
    canonical: 'https://petportrait.co/services/best-pet-portrait-sites-uk',
  },
};

export default function ServicesPage() {
  const data = servicesData as ServicesData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: '/images/services/comparison.jpg',
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
    datePublished: data.last_updated,
    dateModified: data.last_updated,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://petportrait.co/services/best-pet-portrait-sites-uk',
    },
    about: {
      '@type': 'Thing',
      name: 'Pet Portrait Services UK',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {data.description}
            </p>
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
              <p className="text-sm text-gray-500 mb-2">Last Updated: {data.last_updated}</p>
              <p className="text-sm text-gray-600">{data.methodology}</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Top Pet Portrait Services Ranked
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive analysis of the best pet portrait services in the UK
              </p>
            </div>
            
            <div className="space-y-8">
              {data.entries.map((service) => (
                <ServiceRankingCard
                  key={service.rank}
                  service={service}
                  isTopChoice={service.rank === 1}
                />
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable services={data.entries} />

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Review Methodology
              </h2>
              <p className="text-gray-600 mb-6">{data.methodology}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comparison Criteria
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {data.comparison_criteria.map((criterion, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">{criterion}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">{data.disclaimer}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
