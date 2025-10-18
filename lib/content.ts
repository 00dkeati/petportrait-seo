type FAQ = { q: string; a: string };

export function getCopy(keyword: string) {
  const title = `${keyword} | PetPortrait.co`;
  const h1 = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const metaDescription = `Discover ${keyword} crafted from your favourite photos. Beautiful, gift-ready pet art with fast turnaround and 5-star care.`;

  const introHtml = `<p>At PetPortrait.co, we turn your favourite photos into heartfelt ${keyword}. From cosy living rooms to milestone gifts, our portraits capture personality, quirks, and the bond you share. Choose a style that suits you and enjoy a friendly, fuss-free process from upload to delivery. Thousands of pet parents trust us for keepsake artwork they're proud to display.</p>`;

  const featureList = [
    "Custom artwork from your photo",
    "Clear, friendly guidance on images",
    "Fast turnarounds and great value",
    "UK-friendly sizes and gifting options",
    "Satisfaction-focused support",
    "Secure checkout"
  ];

  const sectionHtml = `<p>Our team specialises in thoughtful, tasteful pet art across classic pencil, vibrant watercolor, and soft pastel looks. Whether you need a birthday surprise, a memorial portrait, or a centrepiece for your hallway, we'll help you get it right. Every piece is designed to feel personal—true to markings, fur texture, and expression. If you're exploring ${keyword}, you'll find our process simple: upload a photo, confirm details, and we'll take care of the rest. Many customers also ask about framing and print options; we offer guidance so your custom pet art fits your space perfectly.</p><p>Looking for ideas? Dog lovers often choose a clean, gallery-ready composition while cat owners prefer a cosy, close-up style. You can keep it timeless in monochrome or add a splash of colour for extra character. However you choose to style your portrait, we'll ensure the finished piece feels like them—because that's what matters most.</p>`;

  const ctaHtml = `<p>Ready to begin? Upload a photo now and we'll start crafting a beautiful portrait you'll love. It only takes a minute to get started.</p>`;

  const faqs: FAQ[] = [
    {
      q: "What photo works best?",
      a: "Natural daylight with the pet facing the camera usually gives the best result. Avoid heavy filters and very dark or blurry images. If you're unsure, upload your favourite options and we'll advise the strongest choice."
    },
    {
      q: "How long does it take?",
      a: "Most digital proofs are ready in 24–72 hours depending on style and season. If you have a specific date in mind, let us know and we'll do our best to accommodate."
    },
    {
      q: "Can I request changes?",
      a: "Yes. We welcome small adjustments to make sure markings, colours, and expression feel true. Share your notes and we'll refine before finalising."
    },
    {
      q: "Do you offer prints and frames?",
      a: "Yes. Many customers choose digital delivery for speed, and then order prints locally. If you prefer, we can advise sizes and framing options to suit UK standard frames."
    },
    {
      q: "Is this suitable as a gift?",
      a: "Absolutely. Pet portraits are one of the most loved gift ideas for birthdays, anniversaries, housewarmings, and memorials. We can help with wording and presentation tips."
    }
  ];

  return {
    title,
    h1,
    metaDescription,
    introHtml,
    featureList,
    sectionHtml,
    ctaHtml,
    faqs,
    wordCountHint: 240
  };
}
