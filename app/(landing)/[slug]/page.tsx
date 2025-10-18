import Link from "next/link";
import Image from "next/image";
import { seoKeywords } from "../../../data/seoKeywords";
import { slugify } from "../../../lib/slugify";
import { getKeywordFromSlug } from "../../../lib/keywordMap";
import { getCopy } from "../../../lib/content";
import SeoJsonLd from "../../../components/SeoJsonLd";
import Gallery from "../../../components/Gallery";
import galleryData from "../../../data/gallery.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return seoKeywords.map(k => ({ slug: slugify(k) }));
}

function relatedSlugs(currentSlug: string) {
  const tokens = currentSlug.split("-");
  const scored = seoKeywords
    .map(k => {
      const s = slugify(k);
      if (s === currentSlug) return null;
      const score = tokens.filter(t => s.includes(t)).length;
      return { s, score };
    })
    .filter(Boolean) as { s: string; score: number }[];
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(x => x.s);
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const keyword = getKeywordFromSlug(params.slug) ?? "Pet portraits";
  const { title, metaDescription } = getCopy(keyword);
  const url = `https://petportrait.co/${params.slug}`;
  return {
    title,
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: metaDescription,
      url,
      siteName: "PetPortrait.co",
      type: "website",
      images: ["/images/pet-portrait-1.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: ["/images/pet-portrait-1.jpg"]
    }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const keyword = getKeywordFromSlug(params.slug) ?? "Pet portraits";
  const copy = getCopy(keyword);
  const canonical = `https://petportrait.co/${params.slug}`;
  const rel = relatedSlugs(params.slug);

  return (
    <>
      <SeoJsonLd keyword={keyword} canonical={canonical} images={["/images/pet-portrait-1.jpg","/images/pet-portrait-2.jpg"]} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{copy.h1}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: copy.introHtml }} className="text-lg mb-8" />
        
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          {copy.featureList.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="mb-8">
          <Image
            src="/images/pet-portrait-1.jpg"
            alt={`${keyword} example`}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">About Our {keyword}</h2>
        <div dangerouslySetInnerHTML={{ __html: copy.sectionHtml }} className="mb-8" />
        
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-8">
          {copy.faqs.map((f, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Recent Pet Portraits</h2>
        <p className="text-gray-600 mb-6">
          Explore a few of our favourite recent pieces from real customer photos.
        </p>
        <Gallery images={galleryData} initialLoad={6} loadMoreCount={6} />

        <h2 className="text-2xl font-semibold mb-4 mt-12">Order Your Portrait</h2>
        <div dangerouslySetInnerHTML={{ __html: copy.ctaHtml }} className="mb-4" />
        <Link 
          href="https://familyportraitcompany.com/products/pet-portrait?utm_source=petportrait.co&utm_medium=seo-landing&utm_campaign=pencil-portrait-cta" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Order Your Pet Portrait - £6
        </Link>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">Related Pages</h3>
          <ul className="space-y-2">
            {rel.map(s => (
              <li key={s}>
                <Link href={`/${s}`} className="underline text-blue-600 hover:text-blue-800">
                  {s.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
