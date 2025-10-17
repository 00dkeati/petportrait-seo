import { GiftIdea } from '@/types/gift';

interface GiftIdeasProps {
  giftIdeas: GiftIdea[];
}

export default function GiftIdeas({ giftIdeas }: GiftIdeasProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perfect Gift Ideas
          </h2>
          <p className="text-lg text-gray-600">
            Thoughtful presents that any pet owner will love
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftIdeas.map((idea, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{idea.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {idea.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{idea.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-green-600">{idea.price_range}</span>
                  <a
                    href={idea.cta_url}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    View Details
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Custom Pet Portraits?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Custom pet portraits are the perfect gift because they're personal, meaningful, 
              and create lasting memories. Unlike generic gifts, a custom portrait captures 
              the unique personality of their beloved pet.
            </p>
            <a
              href="https://familyportraitcompany.com/?utm_source=petportrait.co&utm_medium=editorial&utm_campaign=gift-guides"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Browse All Portrait Styles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
