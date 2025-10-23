import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Areas | Pet Portrait Services by Location',
  description: 'Find pet portrait services and local information for areas around Waterlooville including Cowplain, Denmead, Purbrook, and more.',
  alternates: {
    canonical: 'https://petportrait.co/areas',
  },
};

export default function AreasPage() {
  const areas = [
    {
      name: "Waterlooville",
      slug: "waterlooville",
      description: "The main market town with excellent transport links and local amenities",
      features: ["Town center", "Shopping facilities", "Transport hub", "Community events"]
    },
    {
      name: "Cowplain",
      slug: "cowplain",
      description: "A residential area with good local services and family-friendly atmosphere",
      features: ["Local shops", "Schools", "Parks", "Community center"]
    },
    {
      name: "Denmead",
      slug: "denmead",
      description: "A village community with rural charm and local character",
      features: ["Village center", "Local businesses", "Rural setting", "Community spirit"]
    },
    {
      name: "Purbrook",
      slug: "purbrook",
      description: "A residential area with good access to Portsmouth and local facilities",
      features: ["Local amenities", "Transport links", "Schools", "Recreation facilities"]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Areas</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore pet portrait services and local information for areas around Waterlooville. 
          Each area offers unique characteristics and local amenities for residents and visitors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {areas.map((area) => (
          <div key={area.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{area.name}</h2>
            <p className="text-gray-600 mb-4">{area.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {area.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/area/${area.slug}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href={`/seo/pet-portraits-${area.slug}`}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Pet Portrait Services
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Pet Portrait Services?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Whether you're in Waterlooville, Cowplain, Denmead, or Purbrook, we can help you find 
          the best local pet portrait services for your needs.
        </p>
        <Link
          href="/services/best-pet-portrait-sites-uk"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Find Local Services
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">About These Areas</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            The areas around Waterlooville each offer their own unique character and amenities. 
            From the bustling market town center to the peaceful village communities, there's 
            something for everyone in this part of Hampshire.
          </p>
          <p className="mb-6">
            All areas benefit from excellent transport links to Portsmouth, Southampton, and London, 
            making them ideal locations for commuters while maintaining their local charm and 
            community spirit.
          </p>
          <p>
            Whether you're looking for local services, community activities, or just want to 
            explore the area, each location has its own distinct personality and offerings 
            that make it special.
          </p>
        </div>
      </div>
    </main>
  );
}



