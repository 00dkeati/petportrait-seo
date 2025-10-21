import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | PetPortrait.co - Your Pet Portrait Experts',
  description: 'Learn about PetPortrait.co, your trusted source for pet portrait guides, breed information, and custom artwork recommendations.',
  alternates: {
    canonical: 'https://petportrait.co/about',
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About PetPortrait.co</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-xl mb-6">
          Welcome to PetPortrait.co, the internet's most comprehensive resource for pet portrait information, 
          breed guides, and custom artwork recommendations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          We believe every pet deserves to be celebrated through beautiful, personalized artwork. Our mission 
          is to help pet owners discover the perfect portrait style for their beloved companions, whether 
          they're playful Golden Retrievers, elegant Persian cats, or any other breed.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Breed-Specific Guides:</strong> Detailed information about portrait styles that work best for different pet breeds</li>
          <li><strong>Photo Tips:</strong> Professional advice on capturing the perfect reference photo for your portrait</li>
          <li><strong>Service Reviews:</strong> Honest, detailed reviews of pet portrait services across the UK</li>
          <li><strong>Gift Ideas:</strong> Thoughtful suggestions for pet-related gifts and occasions</li>
          <li><strong>Local Information:</strong> Comprehensive guides to local areas and services</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Expertise</h2>
        <p className="mb-6">
          Our team consists of pet portrait experts, professional photographers, and local area specialists 
          who understand what makes a great pet portrait. We've tested services, researched breeds, and 
          gathered insights to provide you with the most accurate and helpful information available.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Trust Us</h2>
        <p className="mb-6">
          We're not just another review site. We're pet lovers who understand the emotional connection 
          between owners and their pets. Every recommendation we make is based on thorough research, 
          real customer experiences, and a genuine desire to help you create lasting memories of your 
          beloved companions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          Have questions about pet portraits or need help finding the right service? We'd love to hear 
          from you. Reach out to us through our contact page or follow us for the latest updates and tips.
        </p>

        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Create Your Pet Portrait?</h3>
          <p className="text-gray-700 mb-4">
            Browse our comprehensive guides to find the perfect portrait style for your pet, 
            or check out our recommended services to get started today.
          </p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Our Guides
          </a>
        </div>
      </div>
    </main>
  );
}


