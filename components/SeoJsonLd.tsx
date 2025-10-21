"use client";
import React from "react";

type Props = { keyword: string; canonical: string; images: string[] };

export default function SeoJsonLd({ keyword, canonical, images }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonical,
    name: keyword,
    mainEntity: {
      "@type": "Product",
      name: keyword,
      url: canonical,
      image: images.map(src => `https://petportrait.co${src}`),
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: canonical,
        priceCurrency: "GBP"
      }
    },
    publisher: {
      "@type": "Organization",
      name: "PetPortrait.co",
      url: "https://petportrait.co"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

