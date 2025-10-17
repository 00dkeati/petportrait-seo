import { Occasion } from '@/types/gift';

interface OccasionBlocksProps {
  occasions: Occasion[];
}

export default function OccasionBlocks({ occasions }: OccasionBlocksProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perfect for Every Occasion
          </h2>
          <p className="text-lg text-gray-600">
            Find the ideal gift for any special moment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occasion, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {occasion.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{occasion.name}</h3>
                  <p className="text-gray-600">{occasion.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Gifts:</h4>
                  {occasion.gift_suggestions.map((suggestion, suggestionIndex) => (
                    <div key={suggestionIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-6">
              The Family Portrait Company offers personalized recommendations based on 
              your pet's breed and your budget. Their friendly team can help you find 
              the perfect gift for any occasion.
            </p>
            <a
              href="https://familyportraitcompany.com/contact?utm_source=petportrait.co&utm_medium=editorial&utm_campaign=occasion-help"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Personalized Recommendations
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
