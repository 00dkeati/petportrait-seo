import Link from "next/link";
import Image from "next/image";
import { waterloovilleKeywords } from "../../../data/waterloovilleKeywords";
import { waterloovilleSlugify, getWaterloovilleKeywordFromSlug } from "../../../lib/waterloovilleSlugify";
import { getWaterloovilleCopy } from "../../../lib/waterloovilleContent";
import { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  return waterloovilleKeywords.map(k => ({ slug: waterloovilleSlugify(k) }));
}

function relatedWaterloovilleSlugs(currentSlug: string) {
  const tokens = currentSlug.split("-");
  const scored = waterloovilleKeywords
    .map(k => {
      const s = waterloovilleSlugify(k);
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const keyword = getWaterloovilleKeywordFromSlug(params.slug) ?? "Waterlooville information";
  const { title, metaDescription } = getWaterloovilleCopy(keyword);
  const url = `https://petportrait.co/waterlooville/${params.slug}`;
  
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
      images: ["/images/waterlooville-1.jpg"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: ["/images/waterlooville-1.jpg"]
    }
  };
}

export default function WaterloovillePage({ params }: { params: { slug: string } }) {
  const keyword = getWaterloovilleKeywordFromSlug(params.slug) ?? "Waterlooville information";
  const copy = getWaterloovilleCopy(keyword);
  const canonical = `https://petportrait.co/waterlooville/${params.slug}`;
  const rel = relatedWaterloovilleSlugs(params.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonical,
    name: keyword,
    mainEntity: {
      "@type": "Place",
      name: "Waterlooville",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Waterlooville",
        addressRegion: "Hampshire",
        addressCountry: "UK"
      }
    },
    publisher: {
      "@type": "Organization",
      name: "PetPortrait.co",
      url: "https://petportrait.co"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{copy.h1}</h1>

      <div dangerouslySetInnerHTML={{ __html: copy.introHtml }} className="text-lg text-gray-700 mb-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {copy.featureList.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden mb-8">
        <Image
          src="/images/waterlooville-1.jpg"
          alt={`${keyword} - Waterlooville information`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">About {keyword}</h2>
      <div dangerouslySetInnerHTML={{ __html: copy.sectionHtml }} className="text-gray-700 mb-8" />

      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6 mb-8">
        {copy.faqs.map((faq, i) => (
          <div key={i} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
      <div dangerouslySetInnerHTML={{ __html: copy.ctaHtml }} className="mb-4" />
      
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Explore More Pet Portrait Guides
      </Link>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl font-semibold mb-4">Related Waterlooville Topics</h3>
        <ul className="space-y-2">
          {rel.map(s => (
            <li key={s}>
              <Link href={`/waterlooville/${s}`} className="underline text-blue-600 hover:text-blue-800">
                {s.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
