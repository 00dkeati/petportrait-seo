# PetPortrait.co - Programmatic SEO Site

A comprehensive programmatic SEO site for pet portraits, built with Next.js 14, TypeScript, and Tailwind CSS. This site serves as an authority content site that naturally links back to The Family Portrait Company.

**🚀 DEPLOYMENT STATUS: READY FOR VERCEL**

## 🚀 Features

### Content Pages
- **Breed Guides** (`/breeds/[slug]`) - 10+ comprehensive breed portrait guides
- **Gift Guides** (`/gifts/[slug]`) - 5+ curated gift idea collections
- **Service Reviews** (`/services/best-pet-portrait-sites-uk`) - Detailed service comparisons

### SEO Optimization
- ✅ Complete metadata for all pages (title, description, canonical URLs)
- ✅ JSON-LD structured data (Article, WebSite, Organization schemas)
- ✅ OpenGraph and Twitter Card meta tags
- ✅ Automatic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration (`/robots.txt`)
- ✅ Static site generation with ISR (revalidate: 86400)

### Editorial Integration
- ✅ Contextual links to The Family Portrait Company with UTM tracking
- ✅ Editorial recommendation blocks on every page
- ✅ Natural, non-spammy link integration
- ✅ Service comparison with The Family Portrait Company as #1 choice

### Performance
- ✅ Static site generation for optimal performance
- ✅ Optimized images with Next.js Image component
- ✅ Tailwind CSS for efficient styling
- ✅ TypeScript for type safety
- ✅ Lighthouse-optimized structure

## 📁 Project Structure

```
petportrait-seo/
├── app/
│   ├── breeds/[slug]/page.tsx     # Dynamic breed pages
│   ├── gifts/[slug]/page.tsx      # Dynamic gift pages
│   ├── services/best-pet-portrait-sites-uk/page.tsx
│   ├── page.tsx                   # Homepage
│   ├── layout.tsx                 # Root layout
│   ├── sitemap.ts                 # Sitemap generation
│   └── robots.txt/route.ts        # Robots.txt
├── components/
│   ├── HeroBreed.tsx              # Breed page hero section
│   ├── BreedOverview.tsx          # Breed information
│   ├── PortraitStyles.tsx         # Portrait style recommendations
│   ├── PhotoTips.tsx              # Photography tips
│   ├── PopularQuestions.tsx       # FAQ section
│   ├── EditorialRecommendation.tsx # Main store recommendations
│   ├── RelatedLinks.tsx           # Cross-linking
│   ├── GiftIdeas.tsx              # Gift suggestions
│   ├── OccasionBlocks.tsx         # Occasion-based gifts
│   ├── ServiceRankingCard.tsx     # Service comparison cards
│   └── ComparisonTable.tsx        # Service comparison table
├── data/
│   ├── breeds.json                # Breed data (10+ breeds)
│   ├── gift_ideas.json            # Gift guide data
│   └── services.json              # Service comparison data
├── types/
│   ├── breed.ts                   # TypeScript interfaces
│   ├── gift.ts
│   └── service.ts
└── public/images/                 # Placeholder images
```

## 🎯 SEO Strategy

### Content Strategy
- **Breed-specific content**: Each breed gets a dedicated page with unique content
- **Gift guides**: Targeted content for pet owners looking for gifts
- **Service reviews**: Authority content comparing pet portrait services
- **Internal linking**: Strategic cross-linking between related content

### Link Building
- **Editorial recommendations**: Natural mentions of The Family Portrait Company
- **UTM tracking**: All external links include proper UTM parameters
- **Contextual placement**: Links appear naturally within content flow
- **Anchor text variety**: Diverse anchor text to avoid over-optimization

### Technical SEO
- **Structured data**: Rich snippets for better search visibility
- **Canonical URLs**: Proper canonicalization to avoid duplicate content
- **Meta descriptions**: Unique, compelling descriptions for each page
- **Image optimization**: Proper alt text and image optimization

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
cd petportrait-seo
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Static Export
The site is configured for static export and can be deployed to any static hosting service.

## 📊 Content Overview

### Breeds Covered
- Golden Retriever
- Labrador Retriever  
- German Shepherd
- French Bulldog
- Persian Cat
- Maine Coon
- British Shorthair
- Ragdoll
- Border Collie
- Siberian Husky

### Gift Guides
- Gifts for Golden Retriever Owners
- Gifts for Labrador Owners
- Gifts for Cat Lovers
- Gifts for German Shepherd Owners
- Gifts for French Bulldog Owners

### Service Reviews
- Comprehensive comparison of 5 UK pet portrait services
- The Family Portrait Company ranked #1
- Detailed pros/cons analysis
- Price and delivery time comparisons

## 🔗 UTM Tracking

All links to The Family Portrait Company include UTM parameters:
- `utm_source=petportrait.co`
- `utm_medium=editorial` (or specific medium)
- `utm_campaign=breed-pages` (or specific campaign)
- `utm_content=[page-slug]` (specific content identifier)

## 🚀 Deployment

The site is ready for deployment to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Deploy with default settings
3. Update domain to `petportrait.co`

## 📈 Performance Metrics

- **Build Time**: ~1 second
- **Static Pages**: 23 pages generated
- **Bundle Size**: Optimized for performance
- **SEO Score**: 95+ (estimated)
- **Performance Score**: 90+ (estimated)

## 🔄 Content Updates

To add new content:
1. Update JSON files in `/data/`
2. Add new images to `/public/images/`
3. Run `npm run build` to regenerate static pages
4. Deploy updated site

## 📝 License

This project is created for The Family Portrait Company as a programmatic SEO solution.

---

**Domain**: petportrait.co  
**Main Store**: https://familyportraitcompany.com/  
**Purpose**: Authority content site with natural editorial links