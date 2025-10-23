import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coffee Shops Waterlooville | Best Cafes & Coffee Houses',
  description: 'Discover the best coffee shops and cafes in Waterlooville. Find great coffee, light meals, and cozy atmospheres for work or relaxation.',
  alternates: {
    canonical: 'https://petportrait.co/coffee-shops',
  },
};

export default function CoffeeShopsPage() {
  const coffeeShops = [
    {
      name: "Waterlooville Coffee House",
      description: "Traditional coffee house with artisan blends and homemade pastries",
      features: ["Specialty coffee", "Fresh pastries", "Free WiFi", "Outdoor seating"],
      rating: "4.5/5"
    },
    {
      name: "The Corner Cafe",
      description: "Family-run cafe serving breakfast, lunch, and afternoon tea",
      features: ["Full breakfast menu", "Light lunches", "Afternoon tea", "Child-friendly"],
      rating: "4.3/5"
    },
    {
      name: "Bean There Coffee",
      description: "Modern coffee shop with locally roasted beans and healthy options",
      features: ["Local roastery", "Healthy options", "Work-friendly", "Loyalty program"],
      rating: "4.7/5"
    }
  ];

  const tips = [
    "Try the house specials and seasonal drinks",
    "Check opening hours as they may vary",
    "Look for loyalty cards and special offers",
    "Ask about dietary requirements and alternatives",
    "Consider booking for larger groups"
  ];

  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Coffee Shops in Waterlooville</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p className="text-xl mb-6">
          Waterlooville offers a variety of coffee shops and cafes, each with its own unique 
          character and specialties. Whether you're looking for a quick coffee on the go, 
          a place to work, or a relaxing spot to catch up with friends, you'll find the 
          perfect coffee shop in the area.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {coffeeShops.map((shop, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{shop.name}</h2>
            <p className="text-gray-600 mb-4">{shop.description}</p>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {shop.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Rating: {shop.rating}</span>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Get Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Look For</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Quality coffee beans and brewing methods</li>
            <li>Fresh food options and pastries</li>
            <li>Comfortable seating and atmosphere</li>
            <li>Free WiFi and work-friendly spaces</li>
            <li>Friendly and knowledgeable staff</li>
            <li>Reasonable prices and good value</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Coffee Shop Visits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coffee Culture in Waterlooville</h2>
        <p className="text-gray-700 mb-6">
          Waterlooville's coffee scene has grown significantly in recent years, with new 
          independent cafes opening alongside established favorites. The town now offers 
          a diverse range of coffee experiences, from traditional British tea rooms to 
          modern specialty coffee shops.
        </p>
        <p className="text-gray-700 mb-6">
          Many local coffee shops source their beans from regional roasters and offer 
          seasonal specials. The community atmosphere in these establishments makes them 
          popular spots for both locals and visitors.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/seo/cafes-waterlooville"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Find More Cafes
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supporting Local Coffee Shops</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Local coffee shops play an important role in the community, providing gathering 
            spaces, supporting local suppliers, and contributing to the town's character. 
            By choosing local coffee shops, you're supporting the local economy and helping 
            to maintain the unique atmosphere of Waterlooville.
          </p>
          <p className="mb-4">
            Many local coffee shops also participate in community events, support local 
            charities, and provide employment opportunities for residents. They often 
            source ingredients locally when possible, further supporting the local economy.
          </p>
          <p>
            Whether you're a coffee connoisseur or just looking for a comfortable place 
            to relax, Waterlooville's coffee shops offer something for everyone. Take 
            time to explore the different options and find your favorite local spot.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/categories"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Categories
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </div>
    </main>
  );
}



