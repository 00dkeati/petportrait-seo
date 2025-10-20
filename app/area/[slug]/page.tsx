import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

const areas = {
  waterlooville: {
    name: "Waterlooville",
    description: "A thriving market town in Hampshire with excellent transport links and local amenities",
    population: "Approximately 64,000",
    postcode: "PO7, PO8",
    features: [
      "Historic market town center",
      "Excellent transport links via A3(M)",
      "Comprehensive shopping facilities",
      "Strong community spirit",
      "Good schools and healthcare"
    ],
    attractions: [
      "Waterlooville Town Centre",
      "Local parks and green spaces",
      "Community events and festivals",
      "Historic Waterloo connections"
    ]
  },
  cowplain: {
    name: "Cowplain",
    description: "A residential area with good local services and family-friendly atmosphere",
    population: "Approximately 8,000",
    postcode: "PO8",
    features: [
      "Family-oriented community",
      "Local shopping facilities",
      "Good schools and nurseries",
      "Parks and recreation areas",
      "Community center activities"
    ],
    attractions: [
      "Local shops and services",
      "Community parks",
      "Family-friendly facilities",
      "Regular community events"
    ]
  },
  denmead: {
    name: "Denmead",
    description: "A village community with rural charm and local character",
    population: "Approximately 6,000",
    postcode: "PO7",
    features: [
      "Traditional village atmosphere",
      "Local independent businesses",
      "Rural setting with countryside access",
      "Strong community spirit",
      "Historic village center"
    ],
    attractions: [
      "Village center and local shops",
      "Countryside walks and trails",
      "Historic buildings",
      "Local pubs and restaurants"
    ]
  },
  purbrook: {
    name: "Purbrook",
    description: "A residential area with good access to Portsmouth and local facilities",
    population: "Approximately 5,000",
    postcode: "PO7",
    features: [
      "Convenient location near Portsmouth",
      "Local amenities and services",
      "Good transport connections",
      "Recreation facilities",
      "Community activities"
    ],
    attractions: [
      "Local shopping areas",
      "Recreation and sports facilities",
      "Community events",
      "Easy access to Portsmouth"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = areas[params.slug as keyof typeof areas];
  
  if (!area) {
    return {
      title: 'Area Not Found | PetPortrait.co',
    };
  }

  return {
    title: `${area.name} Area Guide | Pet Portrait Services & Local Information`,
    description: `Complete guide to ${area.name} including local services, pet portrait options, and area information. ${area.description}`,
    alternates: {
      canonical: `https://petportrait.co/area/${params.slug}`,
    },
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = areas[params.slug as keyof typeof areas];

  if (!area) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: area.name,
    description: area.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "Hampshire",
      addressCountry: "UK"
    }
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{area.name} Area Guide</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p className="text-xl mb-6">{area.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Area Information</h2>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-900">Population:</span>
              <span className="ml-2 text-gray-700">{area.population}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Postcode:</span>
              <span className="ml-2 text-gray-700">{area.postcode}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {area.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Attractions & Amenities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {area.attractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pet Portrait Services in {area.name}</h2>
        <p className="text-gray-700 mb-6">
          Looking for pet portrait services in {area.name}? We can help you find local artists 
          and services that create beautiful custom portraits of your beloved pets.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/seo/pet-portraits-${params.slug}`}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Find Local Pet Portrait Services
          </Link>
          <Link
            href="/services/best-pet-portrait-sites-uk"
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About {area.name}</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            {area.name} offers a unique blend of local charm and modern amenities, making it an 
            attractive place to live, work, and visit. The area benefits from excellent transport 
            links while maintaining its distinctive character and community spirit.
          </p>
          <p className="mb-4">
            Whether you're a resident looking for local services or a visitor exploring the area, 
            {area.name} has much to offer. From local businesses and community facilities to 
            recreational opportunities and cultural attractions, there's something for everyone.
          </p>
          <p>
            The area's location in Hampshire provides easy access to larger cities like Portsmouth 
            and Southampton, while offering a more relaxed pace of life and strong community connections.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/areas"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to All Areas
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
