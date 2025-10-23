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
  
  // Country-specific detection
  const isUsa = lowerKeyword.includes('usa') || lowerKeyword.includes('us') || lowerKeyword.includes('united states');
  const isCanada = lowerKeyword.includes('canada') || lowerKeyword.includes('toronto') || lowerKeyword.includes('vancouver');
  const isAustralia = lowerKeyword.includes('australia') || lowerKeyword.includes('melbourne') || lowerKeyword.includes('sydney');
  const isNewZealand = lowerKeyword.includes('new zealand') || lowerKeyword.includes('nz') || lowerKeyword.includes('auckland') || lowerKeyword.includes('wellington');
  const isEngland = lowerKeyword.includes('england') || lowerKeyword.includes('london') || lowerKeyword.includes('manchester') || lowerKeyword.includes('birmingham');
  const isScotland = lowerKeyword.includes('scotland') || lowerKeyword.includes('edinburgh') || lowerKeyword.includes('glasgow');
  const isWales = lowerKeyword.includes('wales') || lowerKeyword.includes('cardiff');
  const isIreland = lowerKeyword.includes('ireland') || lowerKeyword.includes('dublin') || lowerKeyword.includes('belfast');
  
  // Platform and service detection
  const isEtsy = lowerKeyword.includes('etsy');
  const isReddit = lowerKeyword.includes('reddit');
  const isTattoo = lowerKeyword.includes('tattoo');
  const isGenerator = lowerKeyword.includes('generator') || lowerKeyword.includes('ai');
  const isOrnaments = lowerKeyword.includes('ornaments') || lowerKeyword.includes('christmas') || lowerKeyword.includes('holiday');
  const isJewelry = lowerKeyword.includes('jewelry') || lowerKeyword.includes('necklace') || lowerKeyword.includes('pendant') || lowerKeyword.includes('keychain');
  const isPaintings = lowerKeyword.includes('paintings') || lowerKeyword.includes('oil') || lowerKeyword.includes('acrylic') || lowerKeyword.includes('watercolor');
  const isCommissions = lowerKeyword.includes('commissions') || lowerKeyword.includes('commission');
  const isCost = lowerKeyword.includes('cost') || lowerKeyword.includes('price');
  const isNearMe = lowerKeyword.includes('near me');
  const isRoyalty = lowerKeyword.includes('king') || lowerKeyword.includes('queen') || lowerKeyword.includes('royalty');
  
  // Determine country
  let country = 'UK';
  if (isUsa) country = 'USA';
  else if (isCanada) country = 'Canada';
  else if (isAustralia) country = 'Australia';
  else if (isNewZealand) country = 'New Zealand';
  else if (isEngland) country = 'England';
  else if (isScotland) country = 'Scotland';
  else if (isWales) country = 'Wales';
  else if (isIreland) country = 'Ireland';
  
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
    isOil,
    country,
    isUsa,
    isCanada,
    isAustralia,
    isNewZealand,
    isEngland,
    isScotland,
    isWales,
    isIreland,
    isEtsy,
    isReddit,
    isTattoo,
    isGenerator,
    isOrnaments,
    isJewelry,
    isPaintings,
    isCommissions,
    isCost,
    isNearMe,
    isRoyalty
  };
}

export function getCopy(keyword: string) {
  const context = getKeywordContext(keyword);
  const title = `${keyword} | PetPortrait.co`;
  const h1 = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  
  // Enhanced meta description based on keyword context
  let metaDescription = `Discover ${keyword} crafted from your favourite photos. Beautiful, gift-ready pet art with fast turnaround and 5-star care.`;
  
  if (context.isCustom) {
    metaDescription = `Professional ${keyword} from your photos. Custom artwork with fast delivery, ${context.country}-friendly sizes, and satisfaction guarantee.`;
  } else if (context.isDrawing) {
    metaDescription = `Expert ${keyword} artists create beautiful hand-drawn portraits from your photos. Fast delivery and custom sizing available.`;
  } else if (context.isUk || context.isEngland || context.isScotland || context.isWales || context.isIreland) {
    metaDescription = `Leading ${keyword} service in the UK. Custom portraits from your photos with fast delivery and professional quality.`;
  } else if (context.isUsa) {
    metaDescription = `Professional ${keyword} service in the USA. Custom pet portraits from your photos with fast delivery across America.`;
  } else if (context.isCanada) {
    metaDescription = `Expert ${keyword} artists in Canada. Custom pet portraits from your photos with fast delivery nationwide.`;
  } else if (context.isAustralia) {
    metaDescription = `Leading ${keyword} service in Australia. Custom pet portraits from your photos with fast delivery across Australia.`;
  } else if (context.isNewZealand) {
    metaDescription = `Professional ${keyword} service in New Zealand. Custom pet portraits from your photos with fast delivery nationwide.`;
  } else if (context.isGift) {
    metaDescription = `Perfect ${keyword} for pet lovers. Custom artwork from your photos, ideal for birthdays, anniversaries, and special occasions.`;
  } else if (context.isEtsy) {
    metaDescription = `Find the best ${keyword} on Etsy. Custom pet portraits from talented artists with fast delivery and satisfaction guarantee.`;
  } else if (context.isReddit) {
    metaDescription = `Discover ${keyword} recommendations on Reddit. Real reviews and experiences from pet owners who've commissioned custom portraits.`;
  } else if (context.isTattoo) {
    metaDescription = `Professional ${keyword} artists create beautiful pet tattoos. Custom designs from your photos with expert artistry and care.`;
  } else if (context.isGenerator) {
    metaDescription = `Free ${keyword} tools and AI generators. Create custom pet portraits instantly from your photos with professional results.`;
  } else if (context.isOrnaments) {
    metaDescription = `Beautiful ${keyword} for Christmas and holidays. Custom pet ornaments made from your photos, perfect for tree decorations.`;
  } else if (context.isJewelry) {
    metaDescription = `Elegant ${keyword} jewelry and accessories. Custom pet necklaces, pendants, and keychains made from your favorite photos.`;
  } else if (context.isPaintings) {
    metaDescription = `Professional ${keyword} artists create stunning oil and acrylic paintings. Custom pet artwork from your photos with museum quality.`;
  } else if (context.isCommissions) {
    metaDescription = `Commission custom ${keyword} from professional artists. Personalized pet artwork created from your photos with expert craftsmanship.`;
  } else if (context.isCost) {
    metaDescription = `Affordable ${keyword} pricing and costs. Professional pet portraits from your photos with transparent pricing and great value.`;
  } else if (context.isNearMe) {
    metaDescription = `Find ${keyword} artists near you. Local pet portrait services with convenient locations and personalized service.`;
  } else if (context.isRoyalty) {
    metaDescription = `Royal ${keyword} designs fit for kings and queens. Fun pet portraits with crowns, thrones, and regal styling from your photos.`;
  }

  // Enhanced intro based on keyword context
  let introHtml = `<p>At PetPortrait.co, we turn your favourite photos into heartfelt ${keyword}. From cosy living rooms to milestone gifts, our portraits capture personality, quirks, and the bond you share. Choose a style that suits you and enjoy a friendly, fuss-free process from upload to delivery. Thousands of pet parents trust us for keepsake artwork they're proud to display.</p>`;
  
  if (context.isCustom) {
    introHtml = `<p>At PetPortrait.co, we specialise in creating beautiful ${keyword} from your favourite photos. Our experienced artists work with you to capture your pet's unique personality and create a truly custom piece of art. Whether you're looking for a special gift or a personal keepsake, our custom portraits are designed to last a lifetime.</p>`;
  } else if (context.isDrawing) {
    introHtml = `<p>Our skilled artists create stunning ${keyword} using traditional techniques and modern tools. Each portrait is hand-crafted with attention to detail, capturing your pet's unique features and personality. From pencil sketches to detailed drawings, we offer a range of styles to suit your preferences.</p>`;
  } else if (context.isUk || context.isEngland || context.isScotland || context.isWales || context.isIreland) {
    introHtml = `<p>As the UK's leading ${keyword} service, we're proud to serve pet owners across the United Kingdom. Our local artists understand British preferences and create portraits that fit perfectly in UK homes. With fast delivery and UK-friendly sizing, we make it easy to get the perfect pet portrait.</p>`;
  } else if (context.isUsa) {
    introHtml = `<p>At PetPortrait.co, we're proud to serve pet owners across the United States with our professional ${keyword} service. Our experienced artists create beautiful custom portraits that capture your pet's unique personality. With fast delivery nationwide and American-friendly sizing options, we make it easy to get the perfect pet portrait.</p>`;
  } else if (context.isCanada) {
    introHtml = `<p>At PetPortrait.co, we're proud to serve pet owners across Canada with our expert ${keyword} service. Our skilled artists create beautiful custom portraits that capture your pet's unique personality. With fast delivery nationwide and Canadian-friendly sizing options, we make it easy to get the perfect pet portrait.</p>`;
  } else if (context.isAustralia) {
    introHtml = `<p>At PetPortrait.co, we're proud to serve pet owners across Australia with our leading ${keyword} service. Our experienced artists create beautiful custom portraits that capture your pet's unique personality. With fast delivery nationwide and Australian-friendly sizing options, we make it easy to get the perfect pet portrait.</p>`;
  } else if (context.isNewZealand) {
    introHtml = `<p>At PetPortrait.co, we're proud to serve pet owners across New Zealand with our professional ${keyword} service. Our skilled artists create beautiful custom portraits that capture your pet's unique personality. With fast delivery nationwide and New Zealand-friendly sizing options, we make it easy to get the perfect pet portrait.</p>`;
  } else if (context.isEtsy) {
    introHtml = `<p>Discover the best ${keyword} on Etsy! Our curated selection features talented artists who specialize in creating beautiful custom pet portraits from your photos. Whether you're looking for traditional paintings, digital art, or unique styles, you'll find amazing options on Etsy with fast shipping and excellent customer service.</p>`;
  } else if (context.isReddit) {
    introHtml = `<p>Get real insights about ${keyword} from the Reddit community! Pet owners share their experiences, recommendations, and honest reviews about custom pet portrait services. Discover which artists deliver quality work, learn about pricing, and find trusted recommendations from fellow pet lovers.</p>`;
  } else if (context.isTattoo) {
    introHtml = `<p>Transform your pet's photo into a stunning ${keyword}! Our skilled tattoo artists specialize in creating beautiful pet designs that capture your furry friend's unique personality. From realistic portraits to stylized designs, we'll work with you to create the perfect tattoo that honors your pet.</p>`;
  } else if (context.isGenerator) {
    introHtml = `<p>Create amazing ${keyword} instantly with our free AI tools! Upload your pet's photo and watch as our advanced generator creates beautiful custom portraits in seconds. Perfect for quick gifts, social media posts, or just having fun with your pet's image.</p>`;
  } else if (context.isOrnaments) {
    introHtml = `<p>Make your holidays extra special with beautiful ${keyword}! Our custom ornaments feature your pet's photo transformed into festive decorations perfect for your Christmas tree. Each ornament is carefully crafted to capture your pet's personality and create lasting holiday memories.</p>`;
  } else if (context.isJewelry) {
    introHtml = `<p>Wear your love for your pet with elegant ${keyword}! Our custom jewelry features your pet's photo transformed into beautiful necklaces, pendants, and keychains. Each piece is carefully crafted to capture your pet's unique features and create a meaningful keepsake you can wear every day.</p>`;
  } else if (context.isPaintings) {
    introHtml = `<p>Commission stunning ${keyword} from professional artists! Our skilled painters create beautiful oil and acrylic paintings that capture your pet's personality and unique features. Each painting is a one-of-a-kind masterpiece created from your favorite photos.</p>`;
  } else if (context.isCommissions) {
    introHtml = `<p>Commission custom ${keyword} from our talented artists! We specialize in creating personalized pet artwork that captures your pet's unique personality and features. Our commission process is simple and collaborative, ensuring you get exactly the portrait you envision.</p>`;
  } else if (context.isCost) {
    introHtml = `<p>Get transparent pricing for ${keyword}! We believe in fair, upfront pricing with no hidden fees. Our cost-effective services deliver professional quality pet portraits at prices that fit your budget, with various options to suit different needs and preferences.</p>`;
  } else if (context.isNearMe) {
    introHtml = `<p>Find the best ${keyword} artists in your area! Our local artist network provides convenient, personalized service with face-to-face consultations. Whether you're looking for traditional paintings, digital art, or unique styles, we'll connect you with talented artists near you.</p>`;
  } else if (context.isRoyalty) {
    introHtml = `<p>Give your pet the royal treatment with fun ${keyword}! Our artists create hilarious and adorable portraits featuring your pet as kings, queens, and royalty. Complete with crowns, thrones, and regal styling, these portraits are perfect for pet owners who want something fun and unique.</p>`;
  }

  const featureList = [
    "Custom artwork from your photo",
    "Clear, friendly guidance on images",
    "Fast turnarounds and great value",
    `${context.country}-friendly sizes and gifting options`,
    "Satisfaction-focused support",
    "Secure checkout"
  ];

  // Enhanced section content based on keyword context
  let sectionHtml = `<p>Our team specialises in thoughtful, tasteful pet art across classic pencil, vibrant watercolor, and soft pastel looks. Whether you need a birthday surprise, a memorial portrait, or a centrepiece for your hallway, we'll help you get it right. Every piece is designed to feel personal—true to markings, fur texture, and expression. If you're exploring ${keyword}, you'll find our process simple: upload a photo, confirm details, and we'll take care of the rest. Many customers also ask about framing and print options; we offer guidance so your custom pet art fits your space perfectly.</p><p>Looking for ideas? Dog lovers often choose a clean, gallery-ready composition while cat owners prefer a cosy, close-up style. You can keep it timeless in monochrome or add a splash of colour for extra character. However you choose to style your portrait, we'll ensure the finished piece feels like them—because that's what matters most.</p>`;
  
  if (context.isCustom) {
    sectionHtml = `<p>Our custom ${keyword} service is designed to create truly unique artwork that reflects your pet's personality. We work closely with you throughout the process, from initial consultation to final delivery. Our artists use high-quality materials and techniques to ensure your portrait will last for generations. Whether you prefer a realistic style or something more artistic, we can create exactly what you're looking for.</p><p>Many customers choose our custom service for special occasions like birthdays, anniversaries, or memorials. We understand how important these moments are, and we're committed to creating something truly special. Our custom portraits make perfect gifts and are often passed down through families as treasured heirlooms.</p>`;
  } else if (context.isDrawing) {
    sectionHtml = `<p>Our ${keyword} service combines traditional artistic techniques with modern convenience. Each portrait is carefully hand-drawn by our skilled artists, who pay close attention to your pet's unique features and personality. We offer a range of drawing styles, from detailed pencil sketches to minimalist line art, ensuring we can create something that perfectly matches your vision.</p><p>Drawing portraits requires skill and patience, which is why we only work with experienced artists who have a passion for pet portraiture. The result is a beautiful, one-of-a-kind piece of art that captures your pet's essence in a way that photographs simply can't match.</p>`;
  } else if (context.isUsa) {
    sectionHtml = `<p>Our ${keyword} service is designed specifically for American pet owners who want beautiful, custom artwork for their homes. We understand American preferences for sizing, framing, and presentation, ensuring your portrait fits perfectly in your space. Whether you're in New York, California, Texas, or anywhere in between, we deliver nationwide with fast shipping and excellent customer service.</p><p>American pet owners often choose our service for special occasions like Memorial Day, Independence Day, or family reunions. We're proud to serve pet families across all 50 states, creating lasting memories that celebrate the special bond between Americans and their pets.</p>`;
  } else if (context.isCanada) {
    sectionHtml = `<p>Our ${keyword} service is designed specifically for Canadian pet owners who want beautiful, custom artwork for their homes. We understand Canadian preferences for sizing, framing, and presentation, ensuring your portrait fits perfectly in your space. Whether you're in Toronto, Vancouver, Montreal, or anywhere in Canada, we deliver nationwide with fast shipping and excellent customer service.</p><p>Canadian pet owners often choose our service for special occasions like Canada Day, Thanksgiving, or family gatherings. We're proud to serve pet families across all provinces and territories, creating lasting memories that celebrate the special bond between Canadians and their pets.</p>`;
  } else if (context.isAustralia) {
    sectionHtml = `<p>Our ${keyword} service is designed specifically for Australian pet owners who want beautiful, custom artwork for their homes. We understand Australian preferences for sizing, framing, and presentation, ensuring your portrait fits perfectly in your space. Whether you're in Sydney, Melbourne, Brisbane, or anywhere in Australia, we deliver nationwide with fast shipping and excellent customer service.</p><p>Australian pet owners often choose our service for special occasions like Australia Day, ANZAC Day, or family gatherings. We're proud to serve pet families across all states and territories, creating lasting memories that celebrate the special bond between Australians and their pets.</p>`;
  } else if (context.isNewZealand) {
    sectionHtml = `<p>Our ${keyword} service is designed specifically for New Zealand pet owners who want beautiful, custom artwork for their homes. We understand New Zealand preferences for sizing, framing, and presentation, ensuring your portrait fits perfectly in your space. Whether you're in Auckland, Wellington, Christchurch, or anywhere in New Zealand, we deliver nationwide with fast shipping and excellent customer service.</p><p>New Zealand pet owners often choose our service for special occasions like Waitangi Day, ANZAC Day, or family gatherings. We're proud to serve pet families across both islands, creating lasting memories that celebrate the special bond between New Zealanders and their pets.</p>`;
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
  
  if (context.isUk || context.isEngland || context.isScotland || context.isWales || context.isIreland) {
    faqs.push({
      q: "Do you deliver throughout the UK?",
      a: "Yes, we deliver digital portraits instantly and can arrange physical delivery throughout the UK. We also offer UK-friendly sizing options for easy framing."
    });
  }
  
  if (context.isUsa) {
    faqs.push({
      q: "Do you deliver throughout the USA?",
      a: "Yes, we deliver digital portraits instantly and can arrange physical delivery throughout all 50 states. We also offer American-friendly sizing options for easy framing."
    });
  }
  
  if (context.isCanada) {
    faqs.push({
      q: "Do you deliver throughout Canada?",
      a: "Yes, we deliver digital portraits instantly and can arrange physical delivery throughout all provinces and territories. We also offer Canadian-friendly sizing options for easy framing."
    });
  }
  
  if (context.isAustralia) {
    faqs.push({
      q: "Do you deliver throughout Australia?",
      a: "Yes, we deliver digital portraits instantly and can arrange physical delivery throughout all states and territories. We also offer Australian-friendly sizing options for easy framing."
    });
  }
  
  if (context.isNewZealand) {
    faqs.push({
      q: "Do you deliver throughout New Zealand?",
      a: "Yes, we deliver digital portraits instantly and can arrange physical delivery throughout both islands. We also offer New Zealand-friendly sizing options for easy framing."
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
