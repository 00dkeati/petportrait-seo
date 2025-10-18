#!/usr/bin/env python3

import os
import requests
import time
import random
from PIL import Image
import io
from typing import List, Dict

class SimplePetImageScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        })
        
        # Free stock photo URLs with pet portraits
        self.free_images = {
            'golden-retriever-traditional': [
                'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=450&fit=crop'
            ],
            'labrador-splash-sketch': [
                'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=450&fit=crop'
            ],
            'german-shepherd-traditional': [
                'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=450&fit=crop'
            ],
            'french-bulldog-throne': [
                'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=450&fit=crop'
            ],
            'persian-cat-traditional': [
                'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=450&fit=crop'
            ],
            'maine-coon-traditional': [
                'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=450&fit=crop'
            ],
            'british-shorthair-traditional': [
                'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=450&fit=crop'
            ],
            'ragdoll-traditional': [
                'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=450&fit=crop'
            ],
            'border-collie-traditional': [
                'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=450&fit=crop'
            ],
            'siberian-husky-traditional': [
                'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=450&fit=crop'
            ]
        }
        
        # Homepage and other images
        self.homepage_images = {
            'hero-showcase': [
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=630&fit=crop',
                'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=1200&h=630&fit=crop'
            ],
            'featured-breeds': [
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=450&fit=crop',
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=450&fit=crop'
            ]
        }
        
        # Style examples
        self.style_images = {
            'traditional-example': [
                'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop'
            ],
            'splash-sketch-example': [
                'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop'
            ],
            'throne-example': [
                'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop'
            ],
            'halloween-example': [
                'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop',
                'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=400&fit=crop'
            ]
        }

    def download_image(self, url: str, filename: str) -> bool:
        """Download an image from URL"""
        try:
            print(f"📥 Downloading: {url}")
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            
            # Open image with PIL
            img = Image.open(io.BytesIO(response.content))
            
            # Convert to RGB if necessary
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Save image
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            img.save(filename, 'JPEG', quality=85, optimize=True)
            
            print(f"✅ Saved: {filename} ({img.size[0]}x{img.size[1]})")
            return True
            
        except Exception as e:
            print(f"❌ Failed to download {url}: {e}")
            return False

    def scrape_breed_images(self) -> int:
        """Scrape breed-specific images"""
        print("🐕 Scraping breed images...")
        success_count = 0
        
        for breed, urls in self.free_images.items():
            print(f"\n🔍 Processing: {breed}")
            filename = f"public/images/breeds/{breed}.jpg"
            
            # Try each URL until one works
            for url in urls:
                if self.download_image(url, filename):
                    success_count += 1
                    break
                time.sleep(1)  # Rate limiting
            
            time.sleep(2)  # Rate limiting between breeds
        
        return success_count

    def scrape_homepage_images(self) -> int:
        """Scrape homepage images"""
        print("🏠 Scraping homepage images...")
        success_count = 0
        
        for image_type, urls in self.homepage_images.items():
            print(f"\n🔍 Processing: {image_type}")
            filename = f"public/images/homepage/{image_type}.jpg"
            
            for url in urls:
                if self.download_image(url, filename):
                    success_count += 1
                    break
                time.sleep(1)
            
            time.sleep(2)
        
        return success_count

    def scrape_style_images(self) -> int:
        """Scrape style example images"""
        print("🎨 Scraping style images...")
        success_count = 0
        
        for style, urls in self.style_images.items():
            print(f"\n🔍 Processing: {style}")
            filename = f"public/images/styles/{style}.jpg"
            
            for url in urls:
                if self.download_image(url, filename):
                    success_count += 1
                    break
                time.sleep(1)
            
            time.sleep(2)
        
        return success_count

    def scrape_all(self) -> Dict[str, int]:
        """Scrape all images"""
        print("🕷️ Starting Simple Pet Image Scraping")
        print("=" * 50)
        
        results = {'success': 0, 'failed': 0}
        
        # Scrape breed images
        breed_success = self.scrape_breed_images()
        results['success'] += breed_success
        results['failed'] += (len(self.free_images) - breed_success)
        
        # Scrape homepage images
        homepage_success = self.scrape_homepage_images()
        results['success'] += homepage_success
        results['failed'] += (len(self.homepage_images) - homepage_success)
        
        # Scrape style images
        style_success = self.scrape_style_images()
        results['success'] += style_success
        results['failed'] += (len(self.style_images) - style_success)
        
        return results

def main():
    print("🕷️ Simple Pet Image Scraper")
    print("=" * 40)
    print("📸 Using free stock photos from Unsplash")
    print("💰 All images are free to use")
    print("")
    
    scraper = SimplePetImageScraper()
    results = scraper.scrape_all()
    
    print("\n" + "=" * 50)
    print(f"🎉 Scraping Complete!")
    print(f"✅ Successfully scraped: {results['success']} images")
    print(f"❌ Failed to scrape: {results['failed']} images")
    print(f"📁 Images saved to: public/images/")
    
    print("\n📋 Next steps:")
    print("1. Review the scraped images")
    print("2. Run: git add . && git commit -m 'Added scraped pet images'")
    print("3. Run: git push origin main")
    print("4. Test on live site")

if __name__ == "__main__":
    main()

