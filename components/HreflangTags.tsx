import React from 'react';

interface HreflangTagsProps {
  currentSlug: string;
  baseUrl?: string;
}

export default function HreflangTags({ currentSlug, baseUrl = 'https://petportrait.co' }: HreflangTagsProps) {
  // Define country-specific variations of the same keyword
  const countryVariations = [
    { country: 'pet-portrait', lang: 'en', region: 'GB' },
    { country: 'pet-portrait-usa', lang: 'en', region: 'US' },
    { country: 'pet-portrait-us', lang: 'en', region: 'US' },
    { country: 'pet-portrait-united-states', lang: 'en', region: 'US' },
    { country: 'pet-portrait-canada', lang: 'en', region: 'CA' },
    { country: 'pet-portrait-australia', lang: 'en', region: 'AU' },
    { country: 'pet-portrait-new-zealand', lang: 'en', region: 'NZ' },
    { country: 'pet-portrait-nz', lang: 'en', region: 'NZ' },
    { country: 'pet-portrait-england', lang: 'en', region: 'GB' },
    { country: 'pet-portrait-scotland', lang: 'en', region: 'GB' },
    { country: 'pet-portrait-wales', lang: 'en', region: 'GB' },
    { country: 'pet-portrait-ireland', lang: 'en', region: 'IE' },
  ];

  // Check if current slug is a country-specific variation
  const isCountryVariation = countryVariations.some(variation => variation.country === currentSlug);
  
  if (!isCountryVariation) {
    return null; // Only add hreflang for country-specific pages
  }

  return (
    <>
      {countryVariations.map((variation) => (
        <link
          key={`${variation.lang}-${variation.region}`}
          rel="alternate"
          hrefLang={`${variation.lang}-${variation.region}`}
          href={`${baseUrl}/${variation.country}`}
        />
      ))}
      {/* Add x-default for the main keyword */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/pet-portrait`}
      />
    </>
  );
}
