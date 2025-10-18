import Link from "next/link";
import data from "../../data/keyword-slugs.json";

export const metadata = {
  title: "Explore Pet Portrait Topics | PetPortrait.co",
  description: "Browse our most-searched pet portrait keywords and local pages. Learn what we offer and how to order.",
  alternates: { canonical: "https://petportrait.co/k" }
};

export default function KeywordIndex() {
  const slugs = (data as Array<{slug:string; keyword:string}>);
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Pet Portrait Topics & Local Pages</h1>
      <p className="text-lg text-gray-600 mb-8">
        Each page includes helpful info, FAQs, and a quick way to order from your favourite photo.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slugs.map(({slug, keyword}) => (
          <Link key={slug} href={"/k/" + slug} className="border rounded-lg p-4 hover:shadow-sm">
            <h3 className="font-semibold mb-2">{keyword}</h3>
            <p className="text-sm text-gray-500">https://petportrait.co/k/{/* show path for reassurance */}{slug}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
