export const runtime = "nodejs";
import PublicGallery from "../../components/PublicGallery";
import { listPublicGallery } from "../../lib/publicGallery";

export default async function Page() {
  const images = await listPublicGallery(48);
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Pet Portrait Gallery
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Browse our collection of custom pet portraits by The Family Portrait Company. 
        Each piece is hand-crafted to capture your pet's unique personality and charm.
      </p>
      <PublicGallery sources={images} />
    </div>
  );
}



