type FAQ = { q: string; a: string };

// Enhanced content generation for high-volume keywords
function getKeywordContext(keyword: string) {
  const lowerKeyword = keyword.toLowerCase();
  
  // Determine keyword category and style
  const isCustom = lowerKeyword.includes('custom');
  const isDrawing = lowerKeyword.includes('drawing');
  const isUk = lowerKeyword.includes('uk');
  const isArtist = lowerKeyword.includes('artist');
  const isService = lowerKeyword.includes('service');
  const isGift = lowerKeyword.includes('gift');
  const isMemorial = lowerKeyword.includes('memorial');
  const isHandDrawn = lowerKeyword.includes('hand drawn') || lowerKeyword.includes('pencil');
  const isWatercolor = lowerKeyword.includes('watercolor');
  const isDigital = lowerKeyword.includes('digital');
  const isOil = lowerKeyword.includes('oil');
  
  return {
    isCustom,
    isDrawing,
    isUk,
    isArtist,
    isService,
    isGift,
    isMemorial,
    isHandDrawn,
    isWatercolor,
    isDigital,
    isOil
  };
}

export function getCopy(keyword: string) {
  const context = getKeywordContext(keyword);
  const title = `${keyword} | PetPortrait.co`;
  const h1 = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  
  // Enhanced meta description based on keyword context
  let metaDescription = `Discover ${keyword} crafted from your favourite photos. Beautiful, gift-ready pet art with fast turnaround and 5-star care.`;
  
  if (context.isCustom) {
    metaDescription = `Professional ${keyword} from your photos. Custom artwork with fast delivery, UK-friendly sizes, and satisfaction guarantee.`;
  } else if (context.isDrawing) {
    metaDescription = `Expert ${keyword} artists create beautiful hand-drawn portraits from your photos. Fast delivery and custom sizing available.`;
  } else if (context.isUk) {
    metaDescription = `Leading ${keyword} service in the UK. Custom portraits from your photos with fast delivery and professional quality.`;
  } else if (context.isGift) {
    metaDescription = `Perfect ${keyword} for pet lovers. Custom artwork from your photos, ideal for birthdays, anniversaries, and special occasions.`;
  }

  // Enhanced intro based on keyword context
  let introHtml = `<p>At PetPortrait.co, we turn your favourite photos into heartfelt ${keyword}. From cosy living rooms to milestone gifts, our portraits capture personality, quirks, and the bond you share. Choose a style that suits you and enjoy a friendly, fuss-free process from upload to delivery. Thousands of pet parents trust us for keepsake artwork they're proud to display.</p>`;
  
  if (context.isCustom) {
    introHtml = `<p>At PetPortrait.co, we specialise in creating beautiful ${keyword} from your favourite photos. Our experienced artists work with you to capture your pet's unique personality and create a truly custom piece of art. Whether you're looking for a special gift or a personal keepsake, our custom portraits are designed to last a lifetime.</p>`;
  } else if (context.isDrawing) {
    introHtml = `<p>Our skilled artists create stunning ${keyword} using traditional techniques and modern tools. Each portrait is hand-crafted with attention to detail, capturing your pet's unique features and personality. From pencil sketches to detailed drawings, we offer a range of styles to suit your preferences.</p>`;
  } else if (context.isUk) {
    introHtml = `<p>As the UK's leading ${keyword} service, we're proud to serve pet owners across the country. Our local artists understand British preferences and create portraits that fit perfectly in UK homes. With fast delivery and UK-friendly sizing, we make it easy to get the perfect pet portrait.</p>`;
  }

  const featureList = [
    "Custom artwork from your photo",
    "Clear, friendly guidance on images",
    "Fast turnarounds and great value",
    "UK-friendly sizes and gifting options",
    "Satisfaction-focused support",
    "Secure checkout"
  ];

  // Enhanced section content based on keyword context
  let sectionHtml = `<p>Our team specialises in thoughtful, tasteful pet art across classic pencil, vibrant watercolor, and soft pastel looks. Whether you need a birthday surprise, a memorial portrait, or a centrepiece for your hallway, we'll help you get it right. Every piece is designed to feel personal—true to markings, fur texture, and expression. If you're exploring ${keyword}, you'll find our process simple: upload a photo, confirm details, and we'll take care of the rest. Many customers also ask about framing and print options; we offer guidance so your custom pet art fits your space perfectly.</p><p>Looking for ideas? Dog lovers often choose a clean, gallery-ready composition while cat owners prefer a cosy, close-up style. You can keep it timeless in monochrome or add a splash of colour for extra character. However you choose to style your portrait, we'll ensure the finished piece feels like them—because that's what matters most.</p>`;
  
  if (context.isCustom) {
    sectionHtml = `<p>Our custom ${keyword} service is designed to create truly unique artwork that reflects your pet's personality. We work closely with you throughout the process, from initial consultation to final delivery. Our artists use high-quality materials and techniques to ensure your portrait will last for generations. Whether you prefer a realistic style or something more artistic, we can create exactly what you're looking for.</p><p>Many customers choose our custom service for special occasions like birthdays, anniversaries, or memorials. We understand how important these moments are, and we're committed to creating something truly special. Our custom portraits make perfect gifts and are often passed down through families as treasured heirlooms.</p>`;
  } else if (context.isDrawing) {
    sectionHtml = `<p>Our ${keyword} service combines traditional artistic techniques with modern convenience. Each portrait is carefully hand-drawn by our skilled artists, who pay close attention to your pet's unique features and personality. We offer a range of drawing styles, from detailed pencil sketches to minimalist line art, ensuring we can create something that perfectly matches your vision.</p><p>Drawing portraits requires skill and patience, which is why we only work with experienced artists who have a passion for pet portraiture. The result is a beautiful, one-of-a-kind piece of art that captures your pet's essence in a way that photographs simply can't match.</p>`;
  }

  const ctaHtml = `<p>Ready to begin? Upload a photo now and we'll start crafting a beautiful portrait you'll love. It only takes a minute to get started.</p><p><strong>Special Offer:</strong> Get your custom digital pet portrait for just £6 (usually £29.99) - delivered to your inbox in 3-5 days!</p>`;

  // Enhanced FAQs based on keyword context
  let faqs: FAQ[] = [
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

  // Add context-specific FAQs
  if (context.isCustom) {
    faqs.push({
      q: "What makes your custom portraits special?",
      a: "Our custom portraits are created by experienced artists who work closely with you to capture your pet's unique personality. Each piece is one-of-a-kind and created specifically for you."
    });
  }
  
  if (context.isDrawing) {
    faqs.push({
      q: "What drawing styles do you offer?",
      a: "We offer pencil sketches, charcoal drawings, and detailed illustrations. Our artists can work in various styles from realistic to artistic, depending on your preferences."
    });
  }
  
  if (context.isUk) {
    faqs.push({
      q: "Do you deliver throughout the UK?",
      a: "Yes, we deliver digital portraits instantly and can arrange physical delivery throughout the UK. We also offer UK-friendly sizing options for easy framing."
    });
  }

  return {
    title,
    h1,
    metaDescription,
    introHtml,
    featureList,
    sectionHtml,
    ctaHtml,
    faqs,
    wordCountHint: 280
  };
}
