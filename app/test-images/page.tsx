export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Golden Retriever Test</h2>
          <img 
            src="/images/breeds/golden-retriever-traditional.jpg" 
            alt="Golden Retriever Test"
            className="w-64 h-36 object-cover border"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Homepage Hero Test</h2>
          <img 
            src="/images/homepage/hero-showcase.jpg" 
            alt="Homepage Hero Test"
            className="w-64 h-36 object-cover border"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Direct File Test</h2>
          <img 
            src="/images/breeds/labrador-splash-sketch.jpg" 
            alt="Labrador Test"
            className="w-64 h-36 object-cover border"
          />
        </div>
      </div>
    </div>
  );
}




