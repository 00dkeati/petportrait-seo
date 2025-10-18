import fs from "fs";
import path from "path";

export type PublicImage = { src: string; alt: string };

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

export async function listPublicGallery(max = 24): Promise<PublicImage[]> {
  try {
    if (!fs.existsSync(GALLERY_DIR)) return fallback(max);
    const files = fs.readdirSync(GALLERY_DIR).filter(f => f.match(/\.(jpe?g|png|webp|avif)$/i));
    if (files.length === 0) return fallback(max);
    return files.slice(0, max).map(f => ({ 
      src: `/images/gallery/${f}`, 
      alt: generateAltText(f)
    }));
  } catch {
    return fallback(max);
  }
}

function generateAltText(filename: string): string {
  // Extract breed/style info from filename
  const name = filename.toLowerCase().replace(/\.(jpe?g|png|webp|avif)$/i, '');
  
  // Common breed and style keywords
  const breeds = ['golden-retriever', 'labrador', 'german-shepherd', 'french-bulldog', 'border-collie', 'cat', 'dog'];
  const styles = ['pencil', 'watercolor', 'charcoal', 'digital', 'pastel', 'sketch'];
  
  let breed = '';
  let style = '';
  
  // Detect breed
  for (const b of breeds) {
    if (name.includes(b)) {
      breed = b.replace('-', ' ');
      break;
    }
  }
  
  // Detect style
  for (const s of styles) {
    if (name.includes(s)) {
      style = s;
      break;
    }
  }
  
  // Build SEO-optimized alt text
  let altText = 'Custom pet portrait';
  if (breed) altText += ` of ${breed}`;
  if (style) altText += ` in ${style} style`;
  altText += ' by The Family Portrait Company';
  
  return altText;
}

function fallback(n: number): PublicImage[] {
  const base = [
    { src: "/images/pet-portrait-1.jpg", alt: "Custom pet portrait by The Family Portrait Company" },
    { src: "/images/pet-portrait-2.jpg", alt: "Professional pet portrait by The Family Portrait Company" }
  ];
  const out: PublicImage[] = [];
  for (let i = 0; i < n; i++) out.push(base[i % base.length]);
  return out;
}
