import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

const seoServices = {
  "beauty-salon-waterlooville": {
    title: "Beauty Salon Waterlooville",
    service: "Beauty Salons",
    location: "Waterlooville",
    description: "Find the best beauty salons in Waterlooville offering professional hair, nail, and beauty treatments.",
    features: [
      "Professional hair styling and coloring",
      "Manicures and pedicures",
      "Facial treatments and skincare",
      "Eyebrow and eyelash services",
      "Wedding and special occasion packages"
    ],
    tips: [
      "Book appointments in advance, especially for weekends",
      "Check reviews and ask for recommendations",
      "Discuss your desired look before treatment",
      "Ask about aftercare and maintenance"
    ]
  },
  "boiler-service-waterlooville": {
    title: "Boiler Service Waterlooville",
    service: "Boiler Services",
    location: "Waterlooville",
    description: "Professional boiler servicing and repair in Waterlooville. Keep your heating system running efficiently.",
    features: [
      "Annual boiler servicing and maintenance",
      "Emergency boiler repairs",
      "Boiler installation and replacement",
      "Gas safety checks and certification",
      "Central heating system maintenance"
    ],
    tips: [
      "Schedule annual servicing before winter",
      "Choose Gas Safe registered engineers",
      "Keep service records for warranty purposes",
      "Address issues promptly to avoid bigger problems"
    ]
  },
  "cafes-waterlooville": {
    title: "Cafes Waterlooville",
    service: "Cafes",
    location: "Waterlooville",
    description: "Discover the best cafes in Waterlooville for coffee, light meals, and relaxed dining experiences.",
    features: [
      "Specialty coffee and tea selection",
      "Fresh pastries and light meals",
      "Comfortable seating and atmosphere",
      "Free WiFi and work-friendly spaces",
      "Local and seasonal menu options"
    ],
    tips: [
      "Try local favorites and specialties",
      "Check opening hours and availability",
      "Look for outdoor seating options",
      "Ask about dietary requirements and options"
    ]
  },
  "dentist-waterlooville": {
    title: "Dentist Waterlooville",
    service: "Dental Services",
    location: "Waterlooville",
    description: "Quality dental care in Waterlooville. Find experienced dentists for routine checkups and treatments.",
    features: [
      "Routine checkups and cleanings",
      "Cosmetic dentistry and whitening",
      "Orthodontic treatments",
      "Emergency dental care",
      "Preventive care and education"
    ],
    tips: [
      "Schedule regular checkups every 6 months",
      "Check if they accept your insurance",
      "Ask about payment plans if needed",
      "Read reviews and ask for recommendations"
    ]
  },
  "electrician-waterlooville": {
    title: "Electrician Waterlooville",
    service: "Electrical Services",
    location: "Waterlooville",
    description: "Professional electricians in Waterlooville for all your electrical needs and safety requirements.",
    features: [
      "Electrical installations and repairs",
      "Safety inspections and testing",
      "Emergency electrical services",
      "Lighting design and installation",
      "Smart home electrical solutions"
    ],
    tips: [
      "Choose qualified and certified electricians",
      "Get multiple quotes for major work",
      "Check for insurance and guarantees",
      "Ask about emergency availability"
    ]
  },
  "hairdresser-waterlooville": {
    title: "Hairdresser Waterlooville",
    service: "Hair Salons",
    location: "Waterlooville",
    description: "Professional hairdressers in Waterlooville offering cuts, colors, and styling for all hair types.",
    features: [
      "Hair cutting and styling",
      "Coloring and highlights",
      "Perms and chemical treatments",
      "Wedding and special occasion styling",
      "Hair care advice and products"
    ],
    tips: [
      "Bring photos of desired styles",
      "Discuss maintenance requirements",
      "Ask about color longevity and care",
      "Book consultations for major changes"
    ]
  },
  "massage-waterlooville": {
    title: "Massage Waterlooville",
    service: "Massage Therapy",
    location: "Waterlooville",
    description: "Relaxing and therapeutic massage services in Waterlooville for wellness and stress relief.",
    features: [
      "Swedish and deep tissue massage",
      "Sports massage and injury recovery",
      "Prenatal and postnatal massage",
      "Aromatherapy and relaxation treatments",
      "Couples and group massage sessions"
    ],
    tips: [
      "Book in advance for popular time slots",
      "Communicate pressure preferences",
      "Arrive early to relax before treatment",
      "Ask about package deals and memberships"
    ]
  },
  "plumber-waterlooville": {
    title: "Plumber Waterlooville",
    service: "Plumbing Services",
    location: "Waterlooville",
    description: "Reliable plumbers in Waterlooville for repairs, installations, and emergency plumbing services.",
    features: [
      "Emergency plumbing repairs",
      "Bathroom and kitchen installations",
      "Leak detection and repair",
      "Drain cleaning and unblocking",
      "Boiler and heating system work"
    ],
    tips: [
      "Keep emergency contact numbers handy",
      "Choose licensed and insured plumbers",
      "Get written quotes for major work",
      "Ask about warranties and guarantees"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(seoServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = seoServices[params.slug as keyof typeof seoServices];
  
  if (!service) {
    return {
      title: 'Service Not Found | PetPortrait.co',
    };
  }

  return {
    title: `${service.title} | Best ${service.service} in ${service.location}`,
    description: `${service.description} Find trusted professionals and quality services in your area.`,
    alternates: {
      canonical: `https://petportrait.co/seo/${params.slug}`,
    },
  };
}

export default function SeoServicePage({ params }: { params: { slug: string } }) {
  const service = seoServices[params.slug as keyof typeof seoServices];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: service.title,
    description: service.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: service.location,
      addressRegion: "Hampshire",
      addressCountry: "UK"
    },
    serviceType: service.service
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p className="text-xl mb-6">{service.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Available</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Choosing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {service.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Finding the Right {service.service}</h2>
        <p className="text-gray-700 mb-6">
          When looking for {service.service.toLowerCase()} in {service.location}, consider factors like 
          experience, qualifications, customer reviews, and pricing. Take time to research and 
          compare options to find the best fit for your needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Recommendations
          </Link>
          <Link
            href="/areas"
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Explore Local Areas
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About {service.service} in {service.location}</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            {service.location} offers a range of quality {service.service.toLowerCase()} to meet 
            local needs. Whether you're looking for routine services or specialized treatments, 
            you'll find experienced professionals who understand the local market and community.
          </p>
          <p className="mb-4">
            The area benefits from a mix of established businesses and newer services, providing 
            residents with choice and competition that helps maintain quality standards and 
            competitive pricing.
          </p>
          <p>
            When choosing a {service.service.toLowerCase()} provider, consider their reputation, 
            experience, and how well they understand your specific requirements. Local knowledge 
            and community connections can make a significant difference in service quality.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Home
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
