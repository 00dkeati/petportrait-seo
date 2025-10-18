import type { Metadata } from "next";
import all from "../../../data/keyword-data.json";
import Link from "next/link";

type Item = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  images: string[];
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  related: { slug: string; keyword: string }[];
};

const ITEMS: Item[] = all as Item[];

export async function generateStaticParams() {
  return ITEMS.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = ITEMS.find(i => i.slug === params.slug);
  if (!item) return {};
  const url = "https://petportrait.co/k/" + item.slug;
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: url },
    openGraph: {
      title: item.title,
      description: item.description,
      url,
      siteName: "PetPortrait.co",
      images: item.images.length ? item.images.map(src => ({ url: src })) : undefined,
      type: "website"
    }
  };
}

export default function KeywordPage({ params }: { params: { slug: string }}) {
  const item = ITEMS.find(i => i.slug === params.slug);
  if (!item) return <div>Not found</div>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": item.title,
    "description": item.description,
    "url": "https://petportrait.co/k/" + item.slug,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://petportrait.co" },
        { "@type": "ListItem", "position": 2, "name": "Topics", "item": "https://petportrait.co/k" },
        { "@type": "ListItem", "position": 3, "name": item.keyword, "item": "https://petportrait.co/k/" + item.slug }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "name": item.keyword + " FAQs",
      "mainEntity": item.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> /{" "}
        <Link href="/k">Topics</Link> /{" "}
        {item.keyword}
      </nav>

      <h1 className="text-3xl font-bold mb-3">{item.keyword}</h1>
      <p className="text-gray-700 mb-6">{item.description}</p>

      {item.images.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {item.images.map((src, i) => (
            <img key={i} src={src} alt={item.keyword + " example " + (i+1)} className="w-full h-40 object-cover rounded-lg" loading="lazy" />
          ))}
        </div>
      ) : null}

      <article className="prose max-w-none mb-10">
        {item.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </article>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">FAQs</h2>
        <div className="space-y-3">
          {item.faqs.map((f, i) => (
            <details key={i} className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">{f.q}</summary>
              <div className="mt-2 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <Link href="https://familyportraitcompany.com/products/pet-portrait?utm_source=petportrait.co&utm_medium=keyword-page&utm_campaign=order-cta" className="inline-block px-5 py-3 rounded-xl bg-black text-white hover:opacity-90">Order Your Portrait</Link>
      </div>

      {item.related?.length ? (
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-3">Related pages</h3>
          <ul className="list-disc pl-5 space-y-1">
            {item.related.map(r => (
              <li key={r.slug}>
                <Link href={"/k/" + r.slug} className="underline">{r.keyword}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </main>
  );
}
