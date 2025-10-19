import Link from "next/link";
import { waterloovilleKeywords } from "../../data/waterloovilleKeywords";
import { waterloovilleSlugify } from "../../lib/waterloovilleSlugify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waterlooville Information & Guide | Complete Local Guide",
  description: "Complete guide to Waterlooville, Hampshire. Find answers about distances, demographics, history, and local information for this Hampshire market town.",
  alternates: { canonical: "https://petportrait.co/waterlooville" }
};

export default function WaterloovilleIndex() {
  const slugs = waterloovilleKeywords.map(k => ({
    slug: waterloovilleSlugify(k),
    keyword: k
  }));

  // Group keywords by category for better organization
  const categories = {
    "Location & Geography": slugs.filter(s => 
      s.keyword.includes("where") || s.keyword.includes("county") || 
      s.keyword.includes("region") || s.keyword.includes("district")
    ),
    "Distances & Travel": slugs.filter(s => 
      s.keyword.includes("how far") || s.keyword.includes("distance") || 
      s.keyword.includes("miles")
    ),
    "History & Origins": slugs.filter(s => 
      s.keyword.includes("why") || s.keyword.includes("how did") || 
      s.keyword.includes("called")
    ),
    "Demographics & Size": slugs.filter(s => 
      s.keyword.includes("how big") || s.keyword.includes("how many people") || 
      s.keyword.includes("population")
    ),
    "Local Information": slugs.filter(s => 
      s.keyword.includes("what is") || s.keyword.includes("is waterlooville") || 
      s.keyword.includes("famous")
    ),
    "Utilities & Services": slugs.filter(s => 
      s.keyword.includes("water") || s.keyword.includes("council") || 
      s.keyword.includes("hosepipe")
    ),
    "Sports & Entertainment": slugs.filter(s => 
      s.keyword.includes("havant and waterlooville") || s.keyword.includes("swimming pool") || 
      s.keyword.includes("players")
    )
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Waterlooville Information & Guide</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p>
            Welcome to our comprehensive guide to Waterlooville, Hampshire. This market town, 
            named after the famous Battle of Waterloo, offers a unique blend of history, 
            community spirit, and modern amenities. Whether you're planning a visit, 
            considering a move, or just curious about this Hampshire town, you'll find 
            all the information you need here.
          </p>
          <p>
            Our detailed guides cover everything from the town's fascinating origins and 
            current demographics to practical information about distances, local services, 
            and what makes Waterlooville such a special place to live and visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([categoryName, categorySlugs]) => (
            <div key={categoryName} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{categoryName}</h2>
              <ul className="space-y-2">
                {categorySlugs.slice(0, 6).map((item) => (
                  <li key={item.slug}>
                    <Link 
                      href={`/waterlooville/${item.slug}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                    >
                      {item.keyword}
                    </Link>
                  </li>
                ))}
                {categorySlugs.length > 6 && (
                  <li className="text-gray-500 text-sm">
                    +{categorySlugs.length - 6} more topics
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Waterlooville</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Waterlooville is a thriving market town in Hampshire, strategically located 
              between Portsmouth and the South Downs. Founded in the early 19th century 
              and named after the Battle of Waterloo, the town has grown from a planned 
              village into a vibrant community with excellent amenities and transport links.
            </p>
            <p>
              Today, Waterlooville offers the perfect balance of rural charm and urban 
              convenience, making it an attractive destination for families, professionals, 
              and visitors alike. The town's rich history, strong community spirit, and 
              modern facilities create a welcoming environment for all.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Pet Portrait Guides
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
