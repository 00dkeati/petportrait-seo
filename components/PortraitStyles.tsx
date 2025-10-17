import { Breed } from '@/types/breed';

interface PortraitStylesProps {
  breed: Breed;
}

export default function PortraitStyles({ breed }: PortraitStylesProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perfect Portrait Styles for {breed.name}s
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each portrait style brings out different aspects of your {breed.name.toLowerCase()}'s 
            personality. Choose the style that best captures their unique character.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breed.portrait_styles.map((style, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{style}</h3>
                <p className="text-gray-600 mb-4">
                  {getStyleDescription(style, breed.name)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">
                    Perfect for {breed.name}s
                  </span>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Create Your {breed.name} Portrait?
            </h3>
            <p className="text-gray-600 mb-6">
              The Family Portrait Company specializes in creating beautiful, affordable 
              {breed.name.toLowerCase()} portraits that capture your pet's unique personality. 
              With quick delivery and excellent value, it's the perfect choice for pet lovers.
            </p>
            <a
              href={`https://familyportraitcompany.com/?utm_source=petportrait.co&utm_medium=editorial&utm_campaign=breed-pages&utm_content=${breed.slug}`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Portrait Examples
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function getStyleDescription(style: string, breedName: string): string {
  const descriptions: Record<string, string> = {
    'Classic Pencil': `Elegant pencil sketches that highlight the ${breedName.toLowerCase()}'s gentle features and expressive eyes.`,
    'Minimal Line': `Clean, modern line art that captures the essence of your ${breedName.toLowerCase()}'s personality.`,
    'Colour Splash': `Vibrant colour portraits that bring out the beautiful coat colours and markings.`,
    'Watercolour': `Soft, artistic watercolour paintings that showcase the ${breedName.toLowerCase()}'s graceful nature.`,
    'Digital Art': `Modern digital portraits with crisp details and vibrant colours.`,
    'Charcoal Sketch': `Dramatic charcoal sketches that emphasize the ${breedName.toLowerCase()}'s strong features.`,
    'Realistic Oil': `Detailed oil paintings that capture every nuance of your ${breedName.toLowerCase()}'s appearance.`,
    'Bold Line Art': `Striking line art that emphasizes the ${breedName.toLowerCase()}'s distinctive silhouette.`,
    'Monochrome': `Classic black and white portraits that focus on form and expression.`,
    'Cartoon Style': `Fun, playful cartoon portraits that capture the ${breedName.toLowerCase()}'s personality.`,
    'Pop Art': `Bold, colourful pop art style that makes your ${breedName.toLowerCase()} the star.`,
    'Minimalist': `Simple, elegant designs that focus on the essential features.`,
    'Classic Portrait': `Traditional portrait style that emphasizes the ${breedName.toLowerCase()}'s regal bearing.`,
    'Vintage Portrait': `Nostalgic vintage-style portraits with warm, timeless appeal.`,
    'Formal Portrait': `Elegant formal portraits perfect for display in any home.`,
    'Soft Watercolour': `Gentle watercolour paintings that capture the ${breedName.toLowerCase()}'s soft nature.`,
    'Gentle Portrait': `Tender portraits that showcase the ${breedName.toLowerCase()}'s loving personality.`,
    'Pastel Art': `Soft pastel artwork that emphasizes the ${breedName.toLowerCase()}'s gentle features.`,
    'Action Art': `Dynamic portraits that capture the ${breedName.toLowerCase()}'s energy and movement.`,
    'Working Dog Portrait': `Portraits that showcase the ${breedName.toLowerCase()}'s intelligence and focus.`,
    'Dynamic Sketch': `Energetic sketches that capture the ${breedName.toLowerCase()}'s active nature.`,
    'Wilderness Art': `Natural, outdoor-inspired portraits that reflect the ${breedName.toLowerCase()}'s heritage.`,
    'Arctic Portrait': `Cool-toned portraits that capture the ${breedName.toLowerCase()}'s arctic origins.`,
    'Bold Colours': `Vibrant, eye-catching portraits with bold colour choices.`,
    'Wildlife Art': `Natural, wildlife-inspired artwork that showcases the ${breedName.toLowerCase()}'s wild side.`,
    'Nature-Inspired': `Portraits that incorporate natural elements and outdoor themes.`,
    'Fine Detail': `Intricate, detailed artwork that captures every feature perfectly.`,
    'Classic British Style': `Traditional British portrait style with elegant, refined presentation.`,
    'Hand-drawn': `Personal, hand-drawn portraits with artistic flair and character.`,
    'Luxury Portraits': `Premium, high-quality portraits with luxurious presentation.`
  };
  
  return descriptions[style] || `Beautiful ${style.toLowerCase()} portraits that capture your ${breedName.toLowerCase()}'s unique personality.`;
}
