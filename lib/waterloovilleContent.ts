import { waterloovilleKeywords } from "../data/waterloovilleKeywords";

type FAQ = { q: string; a: string };

export function getWaterloovilleCopy(keyword: string) {
  const title = `${keyword} | Waterlooville Guide & Information`;
  const h1 = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const metaDescription = `Find answers about ${keyword}. Complete guide to Waterlooville, Hampshire with local information, distances, and facts.`;

  // Categorize the keyword to generate appropriate content
  const category = categorizeKeyword(keyword);
  
  const introHtml = generateIntro(keyword, category);
  const featureList = generateFeatureList(keyword, category);
  const sectionHtml = generateSectionContent(keyword, category);
  const ctaHtml = generateCTA(keyword, category);
  const faqs = generateFAQs(keyword, category);

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

function categorizeKeyword(keyword: string) {
  const kw = keyword.toLowerCase();
  
  if (kw.includes("why") && kw.includes("called")) return "name_origin";
  if (kw.includes("why") && kw.includes("closed")) return "business_info";
  if (kw.includes("how far") || kw.includes("distance")) return "distance";
  if (kw.includes("how much") && kw.includes("water")) return "utilities";
  if (kw.includes("how much") && kw.includes("worth")) return "business_value";
  if (kw.includes("how much") && kw.includes("paid")) return "salary_info";
  if (kw.includes("how big") || kw.includes("how many people")) return "demographics";
  if (kw.includes("how long") && kw.includes("pool")) return "facilities";
  if (kw.includes("how many") && kw.includes("reservoirs")) return "geography";
  if (kw.includes("how did") && kw.includes("name")) return "name_origin";
  if (kw.includes("is waterlooville in")) return "location";
  if (kw.includes("is waterlooville a")) return "classification";
  if (kw.includes("is waterlooville on")) return "restrictions";
  if (kw.includes("is waterlooville nice") || kw.includes("what is waterlooville like")) return "lifestyle";
  if (kw.includes("what county") || kw.includes("what council") || kw.includes("what region")) return "administration";
  if (kw.includes("what is waterlooville famous")) return "attractions";
  
  return "general";
}

function generateIntro(keyword: string, category: string): string {
  const intros: Record<string, string> = {
    name_origin: `<p>Waterlooville's name has a fascinating history that dates back to the early 19th century. The town was named after the famous Battle of Waterloo, which took place in 1815. Local landowners, inspired by the victory, decided to name their new settlement "Waterlooville" as a tribute to the Duke of Wellington's triumph.</p>`,
    
    distance: `<p>Waterlooville is strategically located in Hampshire, making it easily accessible from many major cities and towns across southern England. Whether you're planning a visit, considering a move, or just curious about distances, here's everything you need to know about getting to and from Waterlooville.</p>`,
    
    demographics: `<p>Waterlooville is a thriving market town in Hampshire with a rich community spirit and growing population. Understanding the town's size, demographics, and characteristics helps paint a picture of what makes Waterlooville such a special place to live, work, and visit.</p>`,
    
    location: `<p>Waterlooville's location within Hampshire and its relationship to surrounding areas is often a topic of interest for visitors, potential residents, and those planning their journey. Let's clarify exactly where Waterlooville is situated and what makes its location so appealing.</p>`,
    
    lifestyle: `<p>Waterlooville offers a unique blend of traditional market town charm and modern amenities, making it an attractive place for families, professionals, and retirees alike. The town's character, facilities, and community spirit create a welcoming environment that many find appealing.</p>`,
    
    administration: `<p>Understanding Waterlooville's administrative structure, local government, and regional classification is important for residents, businesses, and anyone interested in the town's governance and services.</p>`,
    
    attractions: `<p>Waterlooville may be a relatively young town, but it has developed its own unique character and attractions that make it worth visiting and living in. From historical connections to modern amenities, the town has much to offer.</p>`,
    
    general: `<p>Waterlooville is a vibrant market town in Hampshire that offers the perfect balance of rural charm and urban convenience. Whether you're interested in its history, location, amenities, or community life, there's always something fascinating to discover about this growing town.</p>`
  };
  
  return intros[category] || intros.general;
}

function generateFeatureList(keyword: string, category: string): string[] {
  const baseFeatures = [
    "Comprehensive local information and facts",
    "Accurate distances and travel information", 
    "Up-to-date community insights",
    "Historical context and background",
    "Practical guidance for visitors and residents"
  ];
  
  const categoryFeatures: Record<string, string[]> = {
    distance: [
      "Accurate driving distances and times",
      "Public transport connections",
      "Alternative route suggestions",
      "Traffic considerations and tips"
    ],
    demographics: [
      "Current population statistics",
      "Demographic breakdown and trends",
      "Community characteristics",
      "Growth and development patterns"
    ],
    location: [
      "Precise geographical location",
      "Administrative boundaries",
      "Regional context and connections",
      "Local area relationships"
    ],
    lifestyle: [
      "Quality of life indicators",
      "Local amenities and facilities",
      "Community atmosphere",
      "Residential appeal factors"
    ]
  };
  
  return categoryFeatures[category] || baseFeatures;
}

function generateSectionContent(keyword: string, category: string): string {
  const sections: Record<string, string> = {
    name_origin: `<p>The name "Waterlooville" was chosen by local landowners in the early 19th century as a tribute to the Duke of Wellington's victory at the Battle of Waterloo in 1815. The town was originally planned as a model village, with the name reflecting the patriotic sentiment of the time. This historical connection gives Waterlooville a unique identity among Hampshire towns.</p><p>Today, the town's name serves as a reminder of its origins and the vision of its founders. The Waterloo connection is still celebrated locally, with various references throughout the town's development and community life.</p>`,
    
    distance: `<p>Waterlooville's central location in Hampshire makes it an excellent base for exploring the South Coast and beyond. The town is well-connected by road and rail, with easy access to major cities and attractions. Whether you're commuting to work, planning a day trip, or considering relocation, understanding these distances is crucial for planning.</p><p>The A3(M) motorway provides direct access to London and the South Coast, while local roads connect to Portsmouth, Southampton, and other Hampshire towns. Public transport options include regular bus services and nearby railway stations for longer journeys.</p>`,
    
    demographics: `<p>Waterlooville has grown significantly since its establishment, evolving from a planned village into a thriving market town. The population reflects a diverse mix of families, professionals, and retirees, creating a balanced community atmosphere. The town's growth has been carefully managed to maintain its character while accommodating new residents.</p><p>Recent developments have brought new housing, shopping facilities, and community amenities, contributing to the town's appeal as a residential destination. The demographic profile shows a healthy mix of age groups and backgrounds, fostering a strong sense of community.</p>`,
    
    location: `<p>Waterlooville is located in the heart of Hampshire, approximately 8 miles north of Portsmouth and 12 miles east of Southampton. The town sits within the Borough of Havant and is part of the South Hampshire conurbation. Its strategic position makes it an ideal location for those who want to enjoy both rural and urban amenities.</p><p>The town's location offers excellent access to the South Coast, the South Downs National Park, and major transport links. This positioning has contributed to Waterlooville's growth and popularity as a residential and commercial center.</p>`,
    
    lifestyle: `<p>Waterlooville offers an excellent quality of life with its combination of traditional market town atmosphere and modern conveniences. The town center features a mix of independent shops, national retailers, and essential services, while the surrounding area provides access to beautiful countryside and coastal attractions.</p><p>The community spirit is strong, with numerous local groups, events, and activities bringing residents together. Schools, healthcare facilities, and recreational amenities are well-established, making it an attractive place for families and individuals of all ages.</p>`,
    
    administration: `<p>Waterlooville falls under the administrative jurisdiction of Havant Borough Council, which provides local government services including planning, waste collection, and community facilities. The town is also part of Hampshire County Council's area, which handles education, highways, and social services.</p><p>Politically, Waterlooville is represented at various levels of government, ensuring local interests are considered in regional and national decision-making. The administrative structure supports the town's continued development and maintenance of services.</p>`,
    
    attractions: `<p>While Waterlooville may not have the ancient history of some Hampshire towns, it has developed its own attractions and points of interest. The town center offers shopping, dining, and entertainment options, while the surrounding area provides access to beautiful countryside and coastal attractions.</p><p>Local landmarks include the Waterloo Monument, which commemorates the town's namesake, and various community facilities that serve residents and visitors. The town's proximity to Portsmouth, Southampton, and the South Downs makes it an excellent base for exploring the wider region.</p>`,
    
    general: `<p>Waterlooville represents the best of modern Hampshire living, combining the convenience of urban amenities with the charm of a market town. The town's planned origins have resulted in a well-organized community with good infrastructure and services.</p><p>Whether you're interested in the town's history, its current amenities, or its future development, Waterlooville offers plenty to discover. The community continues to evolve while maintaining its distinctive character and appeal.</p>`
  };
  
  return sections[category] || sections.general;
}

function generateCTA(keyword: string, category: string): string {
  const ctas: Record<string, string> = {
    distance: `<p>Planning a visit to Waterlooville? Our comprehensive distance guide helps you plan your journey with confidence. Whether you're coming from London, Portsmouth, or anywhere else in the region, we've got the information you need.</p>`,
    
    lifestyle: `<p>Considering a move to Waterlooville? The town offers an excellent quality of life with its mix of amenities, community spirit, and beautiful surroundings. It's no wonder so many people choose to call Waterlooville home.</p>`,
    
    general: `<p>Waterlooville continues to grow and develop while maintaining its unique character. Whether you're a visitor, potential resident, or just curious about this Hampshire town, there's always something new to discover.</p>`
  };
  
  return ctas[category] || ctas.general;
}

function generateFAQs(keyword: string, category: string): FAQ[] {
  const baseFAQs = [
    {
      q: "What makes Waterlooville special?",
      a: "Waterlooville combines the charm of a traditional market town with modern amenities and excellent transport links. Its planned origins, community spirit, and strategic location make it an attractive place to live and visit."
    },
    {
      q: "How do I get to Waterlooville?",
      a: "Waterlooville is easily accessible by car via the A3(M) motorway and local roads. Public transport options include regular bus services and nearby railway stations at Havant and Petersfield."
    },
    {
      q: "What facilities does Waterlooville have?",
      a: "The town offers a comprehensive range of facilities including shopping centers, restaurants, schools, healthcare services, and recreational amenities. The town center provides most daily needs while larger facilities are available in nearby Portsmouth and Southampton."
    }
  ];
  
  const categoryFAQs: Record<string, FAQ[]> = {
    distance: [
      {
        q: "What's the quickest route to Waterlooville?",
        a: "The A3(M) motorway provides the fastest route from London and the South Coast. From Portsmouth, the A3 and local roads offer direct access, while from Southampton, the M27 and A27 provide good connections."
      },
      {
        q: "Is there public transport to Waterlooville?",
        a: "Yes, regular bus services connect Waterlooville to Portsmouth, Havant, and other local areas. The nearest railway stations are at Havant (3 miles) and Petersfield (8 miles), providing connections to London and the South Coast."
      }
    ],
    
    demographics: [
      {
        q: "How has Waterlooville's population changed?",
        a: "Waterlooville has experienced steady growth since its establishment, with recent developments bringing new residents and facilities. The population reflects a diverse mix of families, professionals, and retirees."
      },
      {
        q: "What age groups live in Waterlooville?",
        a: "The town attracts a balanced demographic with families, working professionals, and retirees. This mix creates a vibrant community with activities and services for all age groups."
      }
    ],
    
    location: [
      {
        q: "Which county is Waterlooville in?",
        a: "Waterlooville is located in Hampshire, specifically within the Borough of Havant. It's part of the South Hampshire conurbation and sits between Portsmouth and the South Downs."
      },
      {
        q: "Is Waterlooville near the coast?",
        a: "Waterlooville is approximately 8 miles from Portsmouth and the South Coast, making it easy to access beaches and coastal attractions while enjoying a more inland location."
      }
    ]
  };
  
  return categoryFAQs[category] || baseFAQs;
}
