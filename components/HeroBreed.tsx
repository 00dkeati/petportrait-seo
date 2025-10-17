import Image from 'next/image';
import { Breed } from '@/types/breed';

interface HeroBreedProps {
  breed: Breed;
}

export default function HeroBreed({ breed }: HeroBreedProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {breed.name} Portrait Guide
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the perfect portrait style for your {breed.name.toLowerCase()}. 
                From classic pencil sketches to vibrant colour portraits, find inspiration 
                for capturing your pet's unique personality.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {breed.traits.map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={breed.example_image}
                alt={`Beautiful ${breed.name} portrait example`}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
              <p className="text-sm text-gray-600 font-medium">
                Perfect portrait inspiration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
