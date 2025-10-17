import { Breed } from '@/types/breed';

interface PhotoTipsProps {
  breed: Breed;
}

export default function PhotoTips({ breed }: PhotoTipsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Photo Tips for Perfect {breed.name} Portraits
          </h2>
          <p className="text-lg text-gray-600">
            Capture the perfect photo of your {breed.name.toLowerCase()} with these professional tips
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {breed.photo_tips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{index + 1}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">{tip}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Pro Tip: Get Professional Results
          </h3>
          <p className="text-gray-600 mb-6">
            While these tips will help you capture great photos, nothing beats a professional 
            pet portrait artist. The Family Portrait Company can transform your best photo 
            into a stunning custom portrait that you'll treasure forever.
          </p>
          <a
            href={`https://familyportraitcompany.com/?utm_source=petportrait.co&utm_medium=editorial&utm_campaign=photo-tips&utm_content=${breed.slug}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Custom Portrait
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
