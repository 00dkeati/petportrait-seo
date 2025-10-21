/**
 * Programmatic SEO generator for petportrait.co
 * Usage:
 *    1. Ensure Next.js App Router (app/ dir) project
 *    2. Put 10–50+ pet images into /public/gallery (jpg/png/webp/avif)
 *    3. node scripts/build-keyword-pages.mjs
 *    4. Build & deploy (Next will statically generate /k/[slug])
 * 
 * Outputs:
 *     • data/keyword-slugs.json           (slugs + keywords)
 *     • data/keyword-data.json            (full content for each keyword)
 *     • app/k/page.tsx                    (keyword directory index)
 *     • app/k/[slug]/page.tsx             (keyword page renderer with metadata)
 *     • app/sitemap.ts                    (site + keyword URLs)
 *     • public/robots.txt                 (disallow drafts, allow /k)
 */
import fs from "fs";
import path from "path";

// ––––– Site config –––––
const SITE_ORIGIN = "https://petportrait.co";
const APP_DIR = path.join(process.cwd(), "app");
const DATA_DIR = path.join(process.cwd(), "data");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const GALLERY_DIR = path.join(PUBLIC_DIR, "gallery");
const KEY_DIR = path.join(APP_DIR, "k");
const KEY_PAGE_DIR = path.join(KEY_DIR, "[slug]");

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(KEY_DIR, { recursive: true });
fs.mkdirSync(KEY_PAGE_DIR, { recursive: true });

// ––––– Keywords (exact paste) –––––
const RAW = `pet portraits
pet portrait
pet portraits artist
pet portrait uk
pet portraits uk
pet portraits custom
dog portrait uk
dog portraits uk
pet portrait photo
pet portrait artists uk
pet portrait from photo
pet portraits from photos
pet portraits in watercolor
pet paintings uk
pet portraits art
pet portrait art
pet portrait gifts
pet portraits by hercule
pet portrait funny
pet portraits commissions
pet portraits tattoo
pet portrait drawing
dog portrait drawing
pet portraits pastel
pet portraits photography
pet portraits yorkshire
pet portrait canvas
pet portraits in pastel
pet portrait photography
pet portraits from photos prices uk
pet portraits pencil
pet portrait generator free
pet portraits in pencil
pet portrait prices uk
pet portraits by hercule facebook
pet portrait embroidered
pet portrait jumper
pet portrait necklace
pet portrait tattoo artist near me
pet portraits uk pencil
zara's pet portraits & wildlife art
pet portrait cost
animal portrait drawing
pet portrait tattoo artist uk
pet photography uk
pet portrait hoodie
pet portrait illustration
pet photography london
pet portrait template
pet xmas photos
zara's pet portraits & wildlife art patreon
pet portrait artists near me
pet portraits app
pet portraits colored pencil
pet portraits in oil
pet photography ideas
pet portraits oil painting
pet portraits tattoo near me
animal portraits uk
pet portraits victorian
pet photography glasgow
pet portrait app
pet portrait cat
pet portraits in acrylic
pet portraits in colored pencil
pet portrait oil painting
pet portrait oil
pet portrait victorian
pet portraits in costume
pet portraits devon
pet portraits london
pet portraits glasgow
pet portrait gift voucher
pet photography logo
pet portraits northern ireland
pet portraits pop art
pet portraits royal
pet portraits renaissance
pet portraits scotland
pet portrait t shirt
pet portrait voucher
pet portraits wales
pet portrait backgrounds
pet portrait bauble
pet portrait fun
pet portrait london
pet portrait print
pet portrait royal
pet portrait sweatshirt
pet portraits 3d
pet portraits for charity
pet portraits for christmas
pet portraits austin
pet portraits belfast
pet portraits chicago
pet portraits disney
pet portrait drawing prices
pet portrait embroidery book
pet portrait embroidery tutorial
pet photos into art
pet portrait jobs
pet photography jobs
pet painting kit
pet kraft photos
pet portrait logo
pet photography los angeles
pet photography las vegas
pet portrait maker
pet portraits new orleans
pet portraits perth
pet portraits philadelphia
pet portraits south africa
pet portraits sydney
pet portraits san diego
pet portrait singapore
pet portrait studio
pet portrait stamp
pet portrait tattoo placement
pet portrait template free
pet portraits uk funny
pet portraits uk etsy
pet photography vancouver
pet portrait with flowers
pet zone photos
pet zoo photos
petz photos
pet photography jobs near me
pet portrait artist jobs
pet portrait artist australia
pet portrait digital
pet portrait digital art
pet portrait disney
pet portrait diy
pet portrait flyer
pet portrait frame
pet portrait galaxy
pet portrait gift certificate
pet portrait human body
pet portrait india
pet portrait king
pet portrait lighting setup
pet portrait mug
pet portrait old fashioned
pet portrait on bottle
dog portrait queen
dog portrait quotes
pet portrait renaissance
pet portraits by zoe
pet portraits 2 cats
dog portraits 2 dogs
pet photo 2024
pet portraits 2 pets
pet portrait competition 2025
trekell pet portrait 2024
trekell pet portrait 2025
trekell pet portrait 2023
trekell pet portrait 2024 winners
custom pet portrait 2 dogs
pet portraits kids art 28 sep
pet portraits 3 dogs
dog portraits 3 dogs
dog portraits 3d
animal portraits 3d
custom pet portraits 3d
pet portraits 3 pets
pet 360 photos
pet 3d painting
3d pet portraits felt
3d pet portraits uk
custom pet portraits 3 pets
pet photos 4k
pet portraits for nursery
pet portraits for beginners
pet portraits for bathroom
pet portraits for kids
pet portraits for wall
pet portraits for collar
pet portraits for cats
pet portraits 4 pets
custom pet portraits 4 pets
ugly pet portraits $5
pet portraits 5 pets
pet portrait camera settings
pet portrait cards
pet portraits £6
pet portrait 80s
80's pet portraits
90s pet portraits
pet portraits at disney world
pet portraits at fishs eddy
pet portraits bathroom
pet portraits by reebok
pet portraits birmingham
pet portraits by pam
pet portraits chatgpt
pet portraits cardiff
pet portraits chewy
pet portraits disney style
pet portraits dubai
pet portraits drawn
pet portraits digital art
pet portraits ennis
pet portraits easy
pet portraits etsy uk
pet portrait entrepreneur bachelorette
pet portrait embroidered sweatshirt
pet portraits flyer
pet portraits free
pet portraits framebridge
pet portraits felt
pet portraits from photos online
pet portraits from chewy
pet portraits geelong
pet portraits greenville sc
pet portrait glass
pet portrait gouache
pet portrait generator ai
pet portraits hobart
pet portraits how to
pet portraits handmade
pet portraits halloween
pet portrait human
pet portrait harry potter
pet portraits inverness
pet portraits in pastel pencil
pet portraits ideas
pet portraits jcpenney
pet portraits joe brewer
pet portrait jumper uk
pet photos jcpenney
pet photography jcpenney
dog portraits jcpenney
pet junction photos
pet portraits kansas city
pet photography kelowna
pet portraits lexington ky
pet portraits magic kingdom
pet kingdom photos
pet portrait locket
pet portrait line art
pet portrait light up
pet portrait lego
pet portraits mixtiles
pet portraits milford photo
pet portraits medieval
pet portrait mastery
pet portrait malaysia
pet portrait my picture
pet portraits nw
pet portraits northumberland
pet portrait needle felting
pet portraits on slate
pet portraits on procreate
pet portrait on whiskey bottle
pet portrait on bag
pet portrait outline
pet portraits porlock weir
pet portraits paintings near me
pet portraits painting from photo
pet portraits personalised
pet portraits queenstown
pet portrait quilt
pet portrait quilt class
pet portrait quotes
pet photography questionnaire
pet photography quezon city
pet photography qualifications
custom pet portraits queen
pet qasr photos
pet quarters photos
pet quietus photos
pet portrait art quilts
pet portraits remembrance
pet portraits reebok
pet portraits regina
pet portraits rochester ny
pet portraits rhode island
pet portraits realistic
pet portraits rabbit
pet portraits sunshine coast
pet portraits silly
pet portrait tattoo denver
pet portrait tattoo nyc
pet portrait tattoo toronto
pet portraits unique
pet portraits uae
pet portraits uk free
pet portraits using ai
pet portrait urn
pet portrait using canva
pet portraits victoria
pet portraits vintage
pet portrait vector
pet portrait viking
pet portrait vogue
dog portraits victorian
dog portraits vintage
pet portraits with holes for collar
pet portraits with collar
pet portraits wool
pet portraits with ai
pet portraits with people
pet portrait whiskey bottle
pet xi photos
pet xpert photos
pet xchange photos
pet xtras photos
pet portraits york
pet portraits youtube
pet photos yorkdale
pet photography youtube
pet photography york
pet photography yorkdale
zara's pet portraits youtube
pet portraits new york city
pet yard photos
your pet portraits
pet zoofari photos
zara's pet portraits & wildlife art youtube
zann pet portraits
zara's pet portraits pastel tier
zara's pet portraits & wildlife art reviews
zara's pet portraits & wildlife art patreon price
pet portrait tattoo uk
pet portrait emporium
dog portrait 1800s
11x14 pet portrait
16x20 pet portrait
pet portrait 2 dogs
dog portrait 2 dogs
animal portrait 2 clipper
pet portrait two cats
pet 2025 photo size
pet 2025 photo and signature size
pet 2025 photo and signature
pet portrait 3d
pet portrait 3 dogs
dog portrait 3d
animal portrait 3d
pet photo 3d
pet picture 3d
dog portrait 3 dogs
custom pet portrait 3d
pet portrait 3 pets
3d pet portrait felt
3 pet portrait tattoo
animal portrait 4k
pet picture 4k
pet portrait for nursery
pet portrait for sale
pet 4x6 photo frame
4x4 pet portrait
5x7 pet portrait
6x6 pet portrait
7 pet portrait
70s pet portrait
8x10 pet portrait
80s pet portrait
pet portrait generator 80s
pet portrait background
pet portrait photography 98072
90s pet portrait
pet portrait artist devon
pet portrait ai free
pet portrait ai prompt
pet portrait bag
pet portrait bathroom
pet portrait book
pet portrait brisbane
pet portrait black background
pet portrait by hannah
pet portrait black and white
pet portrait commissions uk
pet portrait clothing
pet portrait course
pet portrait chatgpt
pet portrait chatgpt prompt
pet portrait dubai
pet portrait disney world
pet portrait disneyland
pet portrait disney style
pet portrait dressed up
pet portrait editor
pet portrait fabric collage
pet portrait from chewy
pet portrait felting
pet portrait fleece
pet portrait football
pet portrait flowers
pet portrait galaxy etsy
pet portrait good pizza
pet portrait gift ideas
pet portrait gallery
pet portrait gift card
pet portrait hoodie uk
pet portrait hand drawn
pet portrait handbag
pet portrait hand painted
pet portrait hat
pet portrait how to
pet portrait hong kong
pet portrait horse
pet portrait hawaiian shirt
pet portrait in frame
pet portrait in procreate
pet portrait in bathroom
pet portrait jcpenney
pet portrait japan
pet portrait jedi
pet portrait jigsaw puzzle
pet portrait jester
pet portrait jacket
pet portraits jersey channel islands
pet portraits jacksonville fl
pet portrait kit
pet portrait knight
pet portrait keepsake
pet portraits kelowna
pet portraits kart
pet portraits kingston
pet portrait link
pet portrait locket tattoo
pet portrait light
pet portrait luggage tag
pet portrait lens
pet portrait lessons
pet portrait los angeles
pet portrait magic kingdom
pet portrait mastery reviews
pet portrait mastery reviews complaints
pet portrait medieval
pet portrait made by hannah
pet portrait memorial gift
pet portrait napkins
pet portrait necklace silver
pet portrait napoleon
pet portrait necklace gold
pet portrait nails
pet portrait needlepoint
pet portrait name
pet portrait on glass
pet portrait on liquor bottle
pet portrait on toilet
pet portrait on sweatshirt
dog portrait quilt
pet photos quotes
animal portrait quilts
pet portrait realistic
pet portrait rabbit
pet portrait rates
pet portrait rainbow bridge
pet portrait rainbow
pet portrait realism
pet portrait styles
pet portrait sizes
pet portrait suncatcher
pet portrait sleeve tattoo
pet portrait studio near me
pet portrait tattoo bristol
pet portrait tattoo london
pet portrait tattoo glasgow
pet portrait us
pet portrait using ai
pet portrait unique
pet portrait vancouver
pet portrait video
pet portraits vermont
pet portraits vancouver wa
pet portraits vancouver island
pet portrait with collar
pet portrait with collar holes
pet portrait with ashes
pet portrait workshop
pet portrait wall
pet portrait with background
pet portrait website
pet portrait with owner
pet portrait wallpaper
pet portrait with fur
pet xmas photo
pet photo yorkdale
pet your picture
pet your photo
yorkshire pet portrait awards
pet portrait new zealand
zara's pet portrait
zoe pet portrait
pet photo zone
8x8 pet portrait
pet portrait academy
pet portrait vector art
pet portrait tattoo manchester
pet portrait punch needle kit
pet portrait new york
pet yearbook photo
pet portrait drawing near me
1800s pet portrait
pet portrait hiring`.trim().split("\n").map(s => s.trim()).filter(Boolean);

// ––––– Utilities –––––
const slugify = (str) =>
  str.toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

function seedRng(seed) {
  // xorshift32
  let x = 0;
  for (let i = 0; i < seed.length; i++) x ^= seed.charCodeAt(i) << (i % 8);
  return () => {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    return ((x >>> 0) % 1e9) / 1e9;
  };
}
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];
const pickN = (rng, arr, n) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
};

// ––––– Image picker –––––
function galleryImages(rng, min = 4, max = 8) {
  try {
    const files = fs.readdirSync(GALLERY_DIR).filter(f => /\.(jpg|jpeg|png|webp|avif)$/i.test(f));
    if (!files.length) return [];
    const count = Math.max(min, Math.min(max, 3 + Math.floor(rng() * (max - min + 1))));
    return pickN(rng, files, Math.min(count, files.length)).map(f => `/gallery/${f}`);
  } catch {
    return [];
  }
}

// ––––– Content engines (unique per keyword) –––––
const openers = [
  k => `Searching for ${k}? You're in the right place. At PetPortrait.co we create attention-grabbing pet portraits from your photo, made to look fantastic online and in print.`,
  k => `If ${k} brought you here, it's because you want a portrait that actually looks like your pet — lively eyes, real texture, and the tiny quirks you love.`,
  k => `Welcome — this page is dedicated to ${k}. We turn the moments on your camera roll into artwork you'll want on the wall, on a gift, or saved forever.`
];

const trustPillars = [
  "accurate likeness (we work from clear, high-resolution photos)",
  "fast delivery for digital files (usually 24–72 hours)",
  "simple ordering with upfront pricing",
  "friendly edits if you need tweaks",
  "multi-pet options and gift vouchers",
  "seasonal bundles to keep costs down"
];

const useCases = [
  "thoughtful gifts for birthdays, anniversaries, and new-pet days",
  "rainbow-bridge memorials that feel respectful and kind",
  "gallery-wall updates that actually match your decor",
  "surprise prints for the family (and the kids!)",
  "pet-friendly office or shop decor with personality"
];

const styleAngles = [
  "clean, modern styling that flatters every breed",
  "classic pencil-inspired detail with soft shading",
  "bold colour with tidy edges that print beautifully",
  "minimal backgrounds that keep focus on your pet",
  "subtle retouching to remove harnesses or messy floors"
];

const geoHints = ["uk","london","glasgow","cardiff","belfast","scotland","wales","york","devon","northern ireland","perth","sydney","chicago","austin","philadelphia","new orleans","los angeles","las vegas","vancouver","queenstown","new york","rochester","rhode island","hobart","greenville","lexington"];

const faqPool = [
  {q: k => `How do I order ${k}?`, a: "Tap \"Order Your Portrait\", upload a clear photo, add notes, and check out. We'll email a proof before final delivery."},
  {q: k => `What kind of photo is best for ${k}?`, a: "Eye-level, sharp, and well-lit images are ideal. Avoid heavy filters and extreme angles. Upload a few if you're unsure."},
  {q: k => `How fast will I receive my portrait?`, a: "Digital portraits are typically ready within 24–72 hours. Add a note if you have a deadline and we'll prioritise where possible."},
  {q: k => `Can you remove backgrounds or collars?`, a: "Yes. Use the notes box to request removals (backgrounds, leads, tags) or to keep special accessories like bow ties."},
  {q: k => `Can I print the file later?`, a: "Absolutely. Files are sized for high-quality printing. You can frame, canvas, or gift-wrap whenever you're ready."},
  {q: k => `Do you do multiple pets?`, a: "Yes — we support multi-pet compositions. Upload photos for each pet and we'll arrange them naturally."},
  {q: k => `Do you ship physical prints?`, a: "We specialise in digital delivery. Many customers print locally to save time and postage."},
];

function classifyKeyword(k) {
  const kw = k.toLowerCase();
  const out = {
    intent: "informational",
    category: "general",
    geo: geoHints.find(g => kw.includes(g)) || null
  };
  if (kw.includes("price") || kw.includes("cost") || kw.includes("prices")) out.intent = "commercial";
  if (kw.includes("near me") || kw.includes("london") || kw.includes("uk") || kw.includes("glasgow") || kw.includes("belfast") || kw.includes("cardiff")) out.intent = "local";
  if (kw.includes("tattoo")) out.category = "tattoo";
  else if (kw.includes("photography") || kw.includes("photo")) out.category = "photo";
  else if (kw.includes("pencil") || kw.includes("drawing") || kw.includes("sketch")) out.category = "pencil";
  else if (kw.includes("oil") || kw.includes("acrylic") || kw.includes("watercolor") || kw.includes("gouache")) out.category = "painting";
  else if (kw.includes("digital")) out.category = "digital";
  else if (kw.includes("3d")) out.category = "3d";
  else if (kw.includes("voucher") || kw.includes("gift")) out.category = "gift";
  return out;
}

function uniqueParagraphsFor(keyword, rng) {
  const { intent, category, geo } = classifyKeyword(keyword);
  const sentences = [];

  // Opener
  sentences.push(pick(rng, openers)(keyword));

  // Angle based on category
  if (category === "pencil") {
    sentences.push("Our pencil-inspired approach focuses on expression and fine fur detail without harsh outlines, so the final portrait feels natural and true to life.");
  } else if (category === "painting") {
    sentences.push("Prefer a painterly finish? We build colour and tone in layers so coats, markings, and eyes read beautifully both on screen and in print.");
  } else if (category === "photo") {
    sentences.push("If your search is photography-leaning, we still start from your favourite photo and transform it into artwork that's made for framing.");
  } else if (category === "digital") {
    sentences.push("Digital delivery keeps everything fast and flexible — share instantly, print locally, or reuse for gifts whenever you're ready.");
  } else if (category === "3d") {
    sentences.push("For 3D-flavoured requests, we prioritise depth and contour so your pet looks dimensional without drifting into uncanny territory.");
  } else if (category === "gift") {
    sentences.push("Buying as a gift? Add a message at checkout — we'll include a neat note in the proof email so the recipient knows it's from you.");
  } else if (category === "tattoo") {
    sentences.push("Planning a tattoo reference? Tell us your preferred pose and simplify the background — we'll deliver a clean file your artist can trace.");
  } else {
    sentences.push(pick(rng, [
      "Everything is tailored to your pet: we keep favourite collars, tidy up fur, and enhance eyes so they sparkle.",
      "We match the mood of your reference: bright and playful, calm and elegant, or a classic timeless look.",
      "You'll get a focused composition with clean edges and a background that won't fight your frame or decor."
    ]));
  }

  // Trust & benefits (randomised)
  const pillars = pickN(rng, trustPillars, 3);
  sentences.push(`Why people choose us for ${keyword}: ${pillars.join(", ")}.`);

  // Local reassurance (if geo)
  if (geo) {
    sentences.push(`Although we serve customers worldwide, we handle a high volume of ${keyword} orders in and around ${geo.toUpperCase()} — with quick responses and reliable support.`);
  }

  // Use cases (randomised)
  sentences.push(`Popular ways to use your portrait include ${pickN(rng, useCases, 3).join(", ")}.`);

  // Style angle (randomised)
  sentences.push(`Our default look favours ${pick(rng, styleAngles)}, but add a note if you want a different vibe.`);

  // Photo tips
  sentences.push("Photo tip: pick an image taken at eye level in good light. Avoid heavy filters and zoomed-in screenshots. If you're unsure, upload a few and we'll help you choose.");

  // CTA
  sentences.push(`Ready to start your ${keyword}? Tap "Order Your Portrait". We'll take it from there.`);

  // Combine into 3–5 paragraphs of ~60–120 words each
  const text = sentences.join(" ");
  // Split into paragraphs roughly
  const parts = [];
  let chunk = [];
  const words = text.split(" ");
  for (const w of words) {
    chunk.push(w);
    if (chunk.join(" ").length > 360 && parts.length < 3) {
      parts.push(chunk.join(" "));
      chunk = [];
    }
  }
  if (chunk.length) parts.push(chunk.join(" "));

  // Ensure min length
  const totalWords = words.length;
  if (totalWords < 220) {
    parts.push("Extras: You can request background cleanup, accessory removal, or subtle colour tweaks at no extra fuss. Multi-pet scenes and gift vouchers are available, and we'll guide you if you're not sure which photo is best. Our files are designed to print crisply on common sizes like 8x10, 11x14, and A4.");
  }

  return parts.slice(0, 5);
}

function makeFaqs(keyword, rng) {
  const faqs = pickN(rng, faqPool, 3).map(f => ({ q: f.q(keyword), a: f.a }));
  // Always include timeline Q
  faqs.push({ q: `How long does ${keyword} take from order to delivery?`, a: "Most digital files are ready in 24–72 hours. We'll email a proof for approval to make sure you're happy."});
  return faqs;
}

function mkTitle(keyword) {
  const base = keyword.replace(/\b\w/g, c => c.toUpperCase());
  return `${base} | Pet Portraits That Actually Look Like Your Pet`;
}

function mkDescription(keyword) {
  return `Order ${keyword} made from your photo. Fast digital delivery (24–72h), accurate likeness, simple ordering, and multi-pet options. Start your portrait today.`;
}

// Find related keywords by token overlap
function relatedFor(slug, all) {
  const baseTokens = new Set(slug.split("-").filter(Boolean));
  const scored = all.filter(s => s.slug !== slug).map(s => {
    const tokens = new Set(s.slug.split("-"));
    let score = 0;
    for (const t of tokens) if (baseTokens.has(t)) score++;
    return { slug: s.slug, keyword: s.keyword, score };
  }).filter(x => x.score > 0);
  scored.sort((a,b) => b.score - a.score);
  return scored.slice(0, 3);
}

// ––––– Build dataset –––––
const items = [];
const seenSlugs = new Set();

for (const k of RAW) {
  const slug = slugify(k);
  if (!slug || seenSlugs.has(slug)) continue;
  seenSlugs.add(slug);

  const rng = seedRng(slug);
  const paragraphs = uniqueParagraphsFor(k, rng);
  const imgs = galleryImages(rng, 4, 8);
  const faqs = makeFaqs(k, rng);

  items.push({
    slug,
    keyword: k,
    title: mkTitle(k),
    description: mkDescription(k),
    images: imgs,
    paragraphs,
    faqs
  });
}

// Now that we have all slugs, compute related links
for (const it of items) {
  it.related = relatedFor(it.slug, items);
}

// Write data files
const slugsMinimal = items.map(({slug, keyword}) => ({slug, keyword}));
fs.writeFileSync(path.join(DATA_DIR, "keyword-slugs.json"), JSON.stringify(slugsMinimal, null, 2));
fs.writeFileSync(path.join(DATA_DIR, "keyword-data.json"), JSON.stringify(items, null, 2));

// ––––– Create /k index page –––––
const kIndex = `import Link from "next/link";
import data from "../../data/keyword-slugs.json";

export const metadata = {
  title: "Explore Pet Portrait Topics | PetPortrait.co",
  description: "Browse our most-searched pet portrait keywords and local pages. Learn what we offer and how to order.",
  alternates: { canonical: "${SITE_ORIGIN}/k" }
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
            <p className="text-sm text-gray-500">${SITE_ORIGIN}/k/{/* show path for reassurance */}{slug}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
`;
fs.writeFileSync(path.join(KEY_DIR, "page.tsx"), kIndex);

// ––––– Create /k/[slug] page (renderer + metadata) –––––
const kSlugPage = `import type { Metadata } from "next";
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
  const url = "${SITE_ORIGIN}/k/" + item.slug;
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
    "url": "${SITE_ORIGIN}/k/" + item.slug,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${SITE_ORIGIN}" },
        { "@type": "ListItem", "position": 2, "name": "Topics", "item": "${SITE_ORIGIN}/k" },
        { "@type": "ListItem", "position": 3, "name": item.keyword, "item": "${SITE_ORIGIN}/k/" + item.slug }
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
`;
fs.writeFileSync(path.join(KEY_PAGE_DIR, "page.tsx"), kSlugPage);

// ––––– Create sitemap –––––
const sitemapTs = `import type { MetadataRoute } from "next";
import data from "../data/keyword-slugs.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "${SITE_ORIGIN}";
  const now = new Date().toISOString();
  const items = (data as Array<{slug:string}>).map(k => ({
    url: base + "/k/" + k.slug,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));
  return [
    { url: base + "/", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/k", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...items
  ];
}
`;
fs.writeFileSync(path.join(APP_DIR, "sitemap.ts"), sitemapTs);

// ––––– Ensure robots.txt –––––
const robotsPath = path.join(PUBLIC_DIR, "robots.txt");
let robots = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
if (fs.existsSync(robotsPath)) {
  const current = fs.readFileSync(robotsPath, "utf8");
  if (!/Sitemap:/i.test(current)) {
    robots = current.trim() + `

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
  } else {
    robots = current;
  }
}
fs.writeFileSync(robotsPath, robots);

console.log("✅ Generated keyword data and pages for", items.length, "keywords.");
console.log("➡  Data:", path.relative(process.cwd(), path.join(DATA_DIR, "keyword-data.json")));
console.log("➡  Index: /k");
console.log("➡  Pages: /k/[slug]");
console.log("➡  Sitemap: /sitemap.xml (auto) and robots.txt updated");
console.log("ℹ️  Tip: add 20–50 pet images to /public/gallery for rich page media.");


