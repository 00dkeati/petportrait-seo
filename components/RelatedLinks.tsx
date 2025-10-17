import Link from 'next/link';
import { Breed } from '@/types/breed';

interface RelatedLinksProps {
  breed: Breed;
  relatedBreeds: Breed[];
}

export default function RelatedLinks({ breed, relatedBreeds }: RelatedLinksProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore More Pet Portrait Guides
          </h2>
          <p className="text-lg text-gray-600">
            Discover portrait inspiration for other popular breeds
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBreeds.map((relatedBreed) => (
            <Link
              key={relatedBreed.slug}
              href={`/breeds/${relatedBreed.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">
                    {relatedBreed.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {relatedBreed.name} Portrait Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the perfect portrait styles for {relatedBreed.name.toLowerCase()}s
                </p>
                <div className="flex flex-wrap gap-2">
                  {relatedBreed.traits.slice(0, 2).map((trait, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Looking for Gift Ideas?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out our curated gift guides for pet owners, featuring custom portraits 
              and other thoughtful presents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/gifts/gifts-for-${breed.slug}-owners`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {breed.name} Gift Guide
              </Link>
              <Link
                href="/services/best-pet-portrait-sites-uk"
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Best Pet Portrait Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
