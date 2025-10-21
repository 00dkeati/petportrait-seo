import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | PetPortrait.co - Get in Touch',
  description: 'Contact PetPortrait.co for questions about pet portraits, breed guides, or local services. We\'re here to help with your pet portrait needs.',
  alternates: {
    canonical: 'https://petportrait.co/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-xl mb-6">
          Have questions about pet portraits, need help finding the right service, or want to share 
          your experience? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">hello@petportrait.co</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Response Time</h3>
                <p className="text-gray-700">We typically respond within 24-48 hours</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Can Help</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Pet portrait service recommendations</li>
              <li>Breed-specific portrait advice</li>
              <li>Photo tips and guidance</li>
              <li>Local service information</li>
              <li>General pet portrait questions</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I choose the right pet portrait service?</h3>
            <p className="text-gray-700">
              Check our comprehensive service reviews and breed guides. We provide detailed information 
              about pricing, quality, delivery times, and customer satisfaction to help you make an 
              informed decision.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What photo works best for a pet portrait?</h3>
            <p className="text-gray-700">
              We recommend clear, well-lit photos taken at eye level with your pet facing the camera. 
              Avoid heavy filters and ensure good focus on the eyes and facial features.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer pet portrait services?</h3>
            <p className="text-gray-700">
              We're an information and review site that helps you find the best pet portrait services. 
              We don't create portraits ourselves, but we can recommend trusted providers.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Share Your Experience</h2>
        <p className="mb-6">
          Have you used a pet portrait service we've reviewed? We'd love to hear about your experience! 
          Your feedback helps other pet owners make informed decisions and helps us keep our reviews 
          accurate and up-to-date.
        </p>

        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Inquiries</h3>
          <p className="text-gray-700 mb-4">
            Are you a pet portrait artist or service provider? We'd love to learn about your services 
            and potentially feature you in our reviews and recommendations.
          </p>
          <p className="text-gray-700">
            Contact us at <strong>business@petportrait.co</strong> for partnership opportunities.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

