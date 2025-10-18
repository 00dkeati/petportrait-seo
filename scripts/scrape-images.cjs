const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const crypto = require('crypto');
const cheerio = require('cheerio');
const xml2js = require('xml2js');
const sharp = require('sharp');
const { glob } = require('globby');

// Configuration
const BASE_URL = 'https://familyportraitcompany.com';
const MAX_PAGES = 150;
const MAX_IMAGES = 120;
const GALLERY_DIR = path.join(__dirname, '../public/images/gallery');
const GALLERY_DATA_FILE = path.join(__dirname, '../data/gallery.json');

// Image filtering patterns
const INCLUDE_PATTERNS = [
  /pet/i, /dog/i, /cat/i, /portrait/i, /art/i, /canvas/i, /drawing/i, /sketch/i, /print/i
];
const EXCLUDE_PATTERNS = [
  /logo/i, /icon/i, /sprite/i, /\.svg$/i, /\.gif$/i, /avatar/i, /profile/i, /banner/i
];

// Track downloaded images to avoid duplicates
const downloadedHashes = new Set();
const imageManifest = [];

// Ensure directories exist
if (!fs.existsSync(GALLERY_DIR)) {
  fs.mkdirSync(GALLERY_DIR, { recursive: true });
}

if (!fs.existsSync(path.dirname(GALLERY_DATA_FILE))) {
  fs.mkdirSync(path.dirname(GALLERY_DATA_FILE), { recursive: true });
}

// Utility functions
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

function getFileHash(filepath) {
  const fileBuffer = fs.readFileSync(filepath);
  return crypto.createHash('md5').sum(fileBuffer).toString('hex');
}

function isValidImageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  
  // Must be an image file
  if (!/\.(jpg|jpeg|png|webp)$/i.test(url)) return false;
  
  // Check exclude patterns first
  const hasExcludePattern = EXCLUDE_PATTERNS.some(pattern => pattern.test(url));
  if (hasExcludePattern) return false;
  
  // Check include patterns (more lenient - if no include patterns match, still include if it's a reasonable image)
  const hasIncludePattern = INCLUDE_PATTERNS.some(pattern => pattern.test(url));
  
  // If it has include patterns, definitely include
  if (hasIncludePattern) return true;
  
  // If no include patterns but it's a reasonable image size/format, include it
  // This helps catch images that might not have obvious keywords in the URL
  if (url.includes('upload') || url.includes('media') || url.includes('image') || url.includes('photo')) {
    return true;
  }
  
  return false;
}

function normalizeUrl(url, baseUrl) {
  if (url.startsWith('//')) {
    return 'https:' + url;
  } else if (url.startsWith('/')) {
    return new URL(url, baseUrl).href;
  } else if (url.startsWith('http')) {
    return url;
  } else {
    return new URL(url, baseUrl).href;
  }
}

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    protocol.get(url, (response) => {
      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function parseSitemap(sitemapUrl) {
  try {
    console.log(`📋 Fetching sitemap: ${sitemapUrl}`);
    const sitemapXml = await fetchPage(sitemapUrl);
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(sitemapXml);
    
    const urls = [];
    if (result.urlset && result.urlset.url) {
      for (const url of result.urlset.url) {
        if (url.loc && url.loc[0]) {
          urls.push(url.loc[0]);
        }
      }
    }
    
    console.log(`📋 Found ${urls.length} URLs in sitemap`);
    return urls.slice(0, MAX_PAGES);
  } catch (error) {
    console.log(`⚠️  Could not parse sitemap: ${error.message}`);
    return [];
  }
}

async function scrapePageImages(url) {
  try {
    console.log(`🔍 Scraping: ${url}`);
    const html = await fetchPage(url);
    const $ = cheerio.load(html);
    
    const images = [];
    const allImgSrcs = [];
    
    // Find all img tags
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      const alt = $(el).attr('alt') || '';
      const dataSrc = $(el).attr('data-src');
      const dataLazy = $(el).attr('data-lazy-src');
      const dataOriginal = $(el).attr('data-original');
      
      [src, dataSrc, dataLazy, dataOriginal].forEach(imgSrc => {
        if (imgSrc) {
          allImgSrcs.push(imgSrc);
          if (isValidImageUrl(imgSrc)) {
            const fullUrl = normalizeUrl(imgSrc, url);
            images.push({
              url: fullUrl,
              alt: alt,
              page: url
            });
          }
        }
      });
    });
    
    // Also look for images in script tags and other data attributes
    $('*[data-src*=".jpg"], *[data-src*=".png"], *[data-src*=".webp"], *[data-src*=".jpeg"]').each((i, el) => {
      const dataSrc = $(el).attr('data-src');
      if (dataSrc && isValidImageUrl(dataSrc)) {
        const fullUrl = normalizeUrl(dataSrc, url);
        images.push({
          url: fullUrl,
          alt: 'Pet portrait',
          page: url
        });
      }
    });
    
    // Find background images in style attributes
    $('[style*="background-image"]').each((i, el) => {
      const style = $(el).attr('style');
      const match = style.match(/url\(['"]?([^'"]+)['"]?\)/);
      if (match) {
        allImgSrcs.push(match[1]);
        if (isValidImageUrl(match[1])) {
          const fullUrl = normalizeUrl(match[1], url);
          images.push({
            url: fullUrl,
            alt: 'Background image',
            page: url
          });
        }
      }
    });
    
    // Search for image URLs in the entire HTML content using regex
    const imageUrlRegex = /https?:\/\/[^\s"'<>]+\.(jpg|jpeg|png|webp)(\?[^\s"'<>]*)?/gi;
    const matches = html.match(imageUrlRegex);
    if (matches) {
      console.log(`🔍 Regex found ${matches.length} image URLs in HTML`);
      matches.forEach(match => {
        allImgSrcs.push(match);
        if (isValidImageUrl(match)) {
          images.push({
            url: match,
            alt: 'Pet portrait',
            page: url
          });
        }
      });
    } else {
      console.log(`🔍 No image URLs found via regex in HTML`);
    }
    
    // Debug: show some of the image URLs found
    if (allImgSrcs.length > 0) {
      console.log(`🔍 Found ${allImgSrcs.length} total image sources, showing first 10:`);
      allImgSrcs.slice(0, 10).forEach((src, i) => {
        console.log(`  ${i + 1}. ${src} ${isValidImageUrl(src) ? '✅' : '❌'}`);
      });
    } else {
      console.log(`🔍 No image sources found on ${url}`);
    }
    
    console.log(`🖼️  Found ${images.length} valid images on ${url}`);
    return images;
  } catch (error) {
    console.log(`❌ Error scraping ${url}: ${error.message}`);
    return [];
  }
}

async function processImage(imageData, index) {
  try {
    const url = imageData.url;
    const alt = imageData.alt || `Pet portrait ${index + 1}`;
    
    // Create filename from URL
    const urlPath = new URL(url).pathname;
    const ext = path.extname(urlPath) || '.jpg';
    const baseName = path.basename(urlPath, ext) || `image-${index}`;
    const safeName = baseName.replace(/[^a-zA-Z0-9-_]/g, '-');
    
    // Download original image
    const originalPath = path.join(GALLERY_DIR, `${safeName}${ext}`);
    await downloadFile(url, originalPath);
    
    // Check for duplicates by hash
    const hash = getFileHash(originalPath);
    if (downloadedHashes.has(hash)) {
      console.log(`🔄 Duplicate image detected, removing: ${safeName}`);
      fs.unlinkSync(originalPath);
      return null;
    }
    downloadedHashes.add(hash);
    
    // Get image dimensions
    const metadata = await sharp(originalPath).metadata();
    const { width, height } = metadata;
    
    // Create variants
    const variants = {};
    const sizes = [400, 800, 1200];
    
    for (const size of sizes) {
      const variantPath = path.join(GALLERY_DIR, `${safeName}-${size}.webp`);
      await sharp(originalPath)
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(variantPath);
      
      variants[size] = `/images/gallery/${path.basename(variantPath)}`;
    }
    
    // Remove original file to save space
    fs.unlinkSync(originalPath);
    
    const imageRecord = {
      id: `gallery-${index + 1}`,
      alt: alt,
      original: url,
      src: variants[800], // Default to 800px
      width: width,
      height: height,
      variants: variants
    };
    
    console.log(`✅ Processed: ${safeName} (${width}x${height})`);
    return imageRecord;
    
  } catch (error) {
    console.log(`❌ Error processing image: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image scraping from familyportraitcompany.com');
  console.log(`📁 Gallery directory: ${GALLERY_DIR}`);
  
  // Try to get sitemap first
  let urls = [];
  const sitemapUrls = [
    `${BASE_URL}/sitemap.xml`,
    `${BASE_URL}/sitemap_index.xml`,
    `${BASE_URL}/robots.txt`
  ];
  
  for (const sitemapUrl of sitemapUrls) {
    if (sitemapUrl.endsWith('robots.txt')) {
      try {
        const robotsTxt = await fetchPage(sitemapUrl);
        const sitemapMatch = robotsTxt.match(/Sitemap:\s*(.+)/i);
        if (sitemapMatch) {
          urls = await parseSitemap(sitemapMatch[1].trim());
          break;
        }
      } catch (error) {
        console.log(`⚠️  Could not fetch robots.txt: ${error.message}`);
      }
    } else {
      urls = await parseSitemap(sitemapUrl);
      if (urls.length > 0) break;
    }
  }
  
  // If no sitemap, use common page patterns
  if (urls.length === 0) {
    console.log('📋 No sitemap found, using common page patterns');
    urls = [
      `${BASE_URL}/`,
      `${BASE_URL}/products/`,
      `${BASE_URL}/collections/`,
      `${BASE_URL}/gallery/`,
      `${BASE_URL}/portfolio/`,
      `${BASE_URL}/examples/`,
      `${BASE_URL}/about/`,
      `${BASE_URL}/contact/`,
      `${BASE_URL}/shop/`,
      `${BASE_URL}/pet-portraits/`,
      `${BASE_URL}/dog-portraits/`,
      `${BASE_URL}/cat-portraits/`,
      `${BASE_URL}/custom-portraits/`,
      `${BASE_URL}/order/`,
      `${BASE_URL}/pricing/`
    ];
  }
  
  // Scrape images from all pages
  const allImages = [];
  for (const url of urls.slice(0, MAX_PAGES)) {
    const pageImages = await scrapePageImages(url);
    allImages.push(...pageImages);
    
    // Stop if we have enough images
    if (allImages.length >= MAX_IMAGES * 2) break;
  }
  
  console.log(`🖼️  Found ${allImages.length} total images`);
  
  // Process images
  let processedCount = 0;
  for (let i = 0; i < Math.min(allImages.length, MAX_IMAGES); i++) {
    const imageRecord = await processImage(allImages[i], i);
    if (imageRecord) {
      imageManifest.push(imageRecord);
      processedCount++;
    }
  }
  
  // Save manifest
  fs.writeFileSync(GALLERY_DATA_FILE, JSON.stringify(imageManifest, null, 2));
  
  console.log(`✅ Scraping complete!`);
  console.log(`📊 Processed ${processedCount} unique images`);
  console.log(`📁 Images saved to: ${GALLERY_DIR}`);
  console.log(`📄 Manifest saved to: ${GALLERY_DATA_FILE}`);
}

// Run the scraper
main().catch(console.error);
