import { Breed } from '@/types/breed';

interface PopularQuestionsProps {
  breed: Breed;
}

export default function PopularQuestions({ breed }: PopularQuestionsProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about {breed.name} portraits
          </p>
        </div>
        
        <div className="space-y-6">
          {breed.faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Have More Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              The Family Portrait Company's friendly team is always happy to help 
              with any questions about creating the perfect {breed.name.toLowerCase()} portrait.
            </p>
            <a
              href={`https://familyportraitcompany.com/contact?utm_source=petportrait.co&utm_medium=editorial&utm_campaign=faq&utm_content=${breed.slug}`}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Us
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
