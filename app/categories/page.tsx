import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Categories | Local Services in Waterlooville',
  description: 'Browse local business categories in Waterlooville including restaurants, services, shops, and professional services.',
  alternates: {
    canonical: 'https://petportrait.co/categories',
  },
};

export default function CategoriesPage() {
  const categories = [
    {
      name: "Coffee Shops",
      slug: "coffee-shops",
      description: "Local cafes and coffee shops for your daily caffeine fix",
      icon: "☕",
      services: ["Coffee", "Tea", "Pastries", "Light meals", "WiFi"]
    },
    {
      name: "Estate Agents",
      slug: "estate-agents",
      description: "Property buying, selling, and rental services",
      icon: "🏠",
      services: ["Property sales", "Rentals", "Valuations", "Property management"]
    },
    {
      name: "Men's Barbers",
      slug: "mens-barbers",
      description: "Professional grooming services for men",
      icon: "✂️",
      services: ["Haircuts", "Beard trimming", "Styling", "Traditional shaves"]
    },
    {
      name: "Carpenters",
      slug: "carpenters",
      description: "Skilled woodworking and carpentry services",
      icon: "🔨",
      services: ["Custom furniture", "Repairs", "Installations", "Restorations"]
    },
    {
      name: "Web Designers",
      slug: "web-designers",
      description: "Professional web design and development services",
      icon: "💻",
      services: ["Website design", "Development", "SEO", "Maintenance"]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Categories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore local business categories in Waterlooville and surrounding areas. 
          Find the services you need from trusted local professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {categories.map((category) => (
          <div key={category.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{category.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
            </div>
            
            <p className="text-gray-600 mb-4 text-center">{category.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Services Include:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {category.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Link
                href={`/${category.slug}`}
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Local Businesses?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
            <p className="text-gray-700">
              Supporting local businesses helps strengthen the community and keeps money 
              circulating locally, benefiting everyone in the area.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Service</h3>
            <p className="text-gray-700">
              Local businesses often provide more personalized service and build lasting 
              relationships with their customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Knowledge</h3>
            <p className="text-gray-700">
              Local businesses understand the area, its needs, and can provide relevant 
              advice and solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Convenience</h3>
            <p className="text-gray-700">
              Easy access to services without long travel times, often with flexible 
              scheduling and quick response times.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Finding the Right Service</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            When looking for local services, consider factors like reputation, experience, 
            pricing, and customer reviews. Take time to research and compare options to 
            find the best fit for your needs.
          </p>
          <p className="mb-4">
            Don't hesitate to ask for recommendations from friends, family, or neighbors 
            who have used similar services. Word-of-mouth recommendations are often the 
            most reliable way to find quality local businesses.
          </p>
          <p>
            Many local businesses offer free consultations or quotes, so take advantage 
            of these opportunities to meet with potential service providers and discuss 
            your requirements in detail.
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

