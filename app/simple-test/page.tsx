export default function SimpleImageTest() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Simple Image Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Golden Retriever</h2>
          <img 
            src="/images/breeds/golden-retriever-traditional.jpg" 
            alt="Golden Retriever"
            width="400"
            height="225"
            className="border"
          />
          <p className="text-sm text-gray-600 mt-2">
            Direct URL: <a href="/images/breeds/golden-retriever-traditional.jpg" target="_blank" className="text-blue-600">Click to open image</a>
          </p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Homepage Hero</h2>
          <img 
            src="/images/homepage/hero-showcase.jpg" 
            alt="Hero Showcase"
            width="400"
            height="225"
            className="border"
          />
          <p className="text-sm text-gray-600 mt-2">
            Direct URL: <a href="/images/homepage/hero-showcase.jpg" target="_blank" className="text-blue-600">Click to open image</a>
          </p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Labrador</h2>
          <img 
            src="/images/breeds/labrador-splash-sketch.jpg" 
            alt="Labrador"
            width="400"
            height="225"
            className="border"
          />
          <p className="text-sm text-gray-600 mt-2">
            Direct URL: <a href="/images/breeds/labrador-splash-sketch.jpg" target="_blank" className="text-blue-600">Click to open image</a>
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-100 rounded">
        <h3 className="font-semibold mb-2">Troubleshooting:</h3>
        <ul className="text-sm space-y-1">
          <li>• If images don't show, try clicking the direct links above</li>
          <li>• Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)</li>
          <li>• Try opening the site in an incognito/private window</li>
          <li>• Check browser console for any error messages</li>
        </ul>
      </div>
    </div>
  );
}
