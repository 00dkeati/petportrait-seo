import { Breed } from '@/types/breed';

interface BreedOverviewProps {
  breed: Breed;
}

export default function BreedOverview({ breed }: BreedOverviewProps) {
  const { overview } = breed;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About {breed.name}s
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Origin</h3>
            <p className="text-gray-600">{overview.origin}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Temperament</h3>
            <p className="text-gray-600">{overview.temperament}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Coat</h3>
            <p className="text-gray-600">{overview.coat}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
            <p className="text-gray-600">{overview.size}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Lifespan</h3>
            <p className="text-gray-600">{overview.lifespan}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Category</h3>
            <p className="text-gray-600 capitalize">{breed.category}</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            {breed.name}s are known for their {breed.traits.join(', ')} nature, 
            making them wonderful companions and excellent subjects for pet portraits. 
            Their unique characteristics and personality traits make each portrait truly special.
          </p>
        </div>
      </div>
    </section>
  );
}
