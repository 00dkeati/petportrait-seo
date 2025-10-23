#!/usr/bin/env python3

import os
import requests
import time
import random
from urllib.parse import urljoin, urlparse
from PIL import Image
import io
from typing import List, Dict
import json

class PetPortraitScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
        # Legal sources for pet portrait images
        self.sources = {
            'unsplash': {
                'base_url': 'https://unsplash.com/s/photos',
                'api_url': 'https://api.unsplash.com/search/photos',
                'api_key': os.getenv('UNSPLASH_API_KEY'),  # Optional
                'free': True
            },
            'pexels': {
                'base_url': 'https://www.pexels.com/search',
                'api_url': 'https://api.pexels.com/v1/search',
                'api_key': os.getenv('PEXELS_API_KEY'),  # Optional
                'free': True
            },
            'pixabay': {
                'base_url': 'https://pixabay.com/images/search',
                'api_url': 'https://pixabay.com/api/',
                'api_key': os.getenv('PIXABAY_API_KEY'),  # Optional
                'free': True
            }
        }
        
        # Search terms for different breeds and styles
        self.search_terms = {
            'breeds': {
                'golden-retriever-traditional': ['golden retriever portrait', 'golden retriever drawing', 'golden retriever sketch'],
                'labrador-splash-sketch': ['labrador portrait', 'labrador watercolor', 'labrador art'],
                'german-shepherd-traditional': ['german shepherd portrait', 'german shepherd drawing', 'german shepherd sketch'],
                'french-bulldog-throne': ['french bulldog portrait', 'french bulldog art', 'french bulldog drawing'],
                'persian-cat-traditional': ['persian cat portrait', 'persian cat drawing', 'persian cat sketch'],
                'maine-coon-traditional': ['maine coon portrait', 'maine coon drawing', 'maine coon art'],
                'british-shorthair-traditional': ['british shorthair portrait', 'british shorthair drawing'],
                'ragdoll-traditional': ['ragdoll cat portrait', 'ragdoll cat drawing'],
                'border-collie-traditional': ['border collie portrait', 'border collie drawing'],
                'siberian-husky-traditional': ['siberian husky portrait', 'siberian husky drawing']
            },
            'styles': {
                'traditional-example': ['dog portrait drawing', 'pet portrait sketch', 'animal portrait art'],
                'splash-sketch-example': ['watercolor pet portrait', 'pet art watercolor', 'animal watercolor'],
                'throne-example': ['funny pet portrait', 'pet art humorous', 'cute pet drawing'],
                'halloween-example': ['halloween pet portrait', 'pet halloween art', 'spooky pet drawing']
            },
            'homepage': {
                'hero-showcase': ['pet portraits collection', 'dog cat portraits', 'animal art gallery'],
                'featured-breeds': ['dog breed portraits', 'cat breed portraits', 'pet breed art']
            },
            'services': {
                'portrait-comparison': ['pet portrait before after', 'pet art comparison', 'portrait transformation']
            },
            'gift-guides': {
                'gifts-for-golden-retriever-owners': ['golden retriever gifts', 'dog owner gifts', 'pet gifts'],
                'gifts-for-labrador-owners': ['labrador gifts', 'dog owner gifts', 'pet gifts'],
                'gifts-for-cat-lovers': ['cat lover gifts', 'cat owner gifts', 'feline gifts'],
                'gifts-for-german-shepherd-owners': ['german shepherd gifts', 'dog owner gifts'],
                'gifts-for-french-bulldog-owners': ['french bulldog gifts', 'small dog gifts']
            }
        }

    def search_unsplash(self, query: str, count: int = 5) -> List[Dict]:
        """Search Unsplash for pet portrait images"""
        try:
            if self.sources['unsplash']['api_key']:
                # Use API if key is available
                url = self.sources['unsplash']['api_url']
                params = {
                    'query': query,
                    'per_page': count,
                    'orientation': 'landscape',
                    'client_id': self.sources['unsplash']['api_key']
                }
                response = self.session.get(url, params=params)
                if response.status_code == 200:
                    data = response.json()
                    return [{
                        'url': photo['urls']['regular'],
                        'description': photo['description'] or photo['alt_description'],
                        'source': 'unsplash'
                    } for photo in data['results']]
        except Exception as e:
            print(f"Unsplash API search failed: {e}")
        
        # Fallback to web scraping
        return self._scrape_unsplash_web(query, count)

    def _scrape_unsplash_web(self, query: str, count: int) -> List[Dict]:
        """Scrape Unsplash website for images"""
        try:
            url = f"{self.sources['unsplash']['base_url']}/{query.replace(' ', '-')}"
            response = self.session.get(url)
            if response.status_code == 200:
                # This is a simplified version - in practice, you'd parse the HTML
                # For now, return placeholder data
                return []
        except Exception as e:
            print(f"Unsplash web scraping failed: {e}")
        return []

    def search_pexels(self, query: str, count: int = 5) -> List[Dict]:
        """Search Pexels for pet portrait images"""
        try:
            if self.sources['pexels']['api_key']:
                url = self.sources['pexels']['api_url']
                params = {
                    'query': query,
                    'per_page': count,
                    'orientation': 'landscape'
                }
                headers = {'Authorization': self.sources['pexels']['api_key']}
                response = self.session.get(url, params=params, headers=headers)
                if response.status_code == 200:
                    data = response.json()
                    return [{
                        'url': photo['src']['large'],
                        'description': photo['alt'],
                        'source': 'pexels'
                    } for photo in data['photos']]
        except Exception as e:
            print(f"Pexels API search failed: {e}")
        return []

    def search_pixabay(self, query: str, count: int = 5) -> List[Dict]:
        """Search Pixabay for pet portrait images"""
        try:
            if self.sources['pixabay']['api_key']:
                url = self.sources['pixabay']['api_url']
                params = {
                    'key': self.sources['pixabay']['api_key'],
                    'q': query,
                    'per_page': count,
                    'orientation': 'horizontal',
                    'image_type': 'photo',
                    'category': 'animals'
                }
                response = self.session.get(url, params=params)
                if response.status_code == 200:
                    data = response.json()
                    return [{
                        'url': hit['webformatURL'],
                        'description': hit['tags'],
                        'source': 'pixabay'
                    } for hit in data['hits']]
        except Exception as e:
            print(f"Pixabay API search failed: {e}")
        return []

    def download_image(self, url: str, filename: str, max_size: tuple = (1024, 1024)) -> bool:
        """Download and resize an image"""
        try:
            print(f"📥 Downloading: {url}")
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            
            # Open image with PIL
            img = Image.open(io.BytesIO(response.content))
            
            # Convert to RGB if necessary
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if needed
            if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save image
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            img.save(filename, 'JPEG', quality=85, optimize=True)
            
            print(f"✅ Saved: {filename} ({img.size[0]}x{img.size[1]})")
            return True
            
        except Exception as e:
            print(f"❌ Failed to download {url}: {e}")
            return False

    def scrape_category(self, category: str, subcategory: str) -> bool:
        """Scrape images for a specific category"""
        if category not in self.search_terms or subcategory not in self.search_terms[category]:
            print(f"❌ Unknown category: {category}/{subcategory}")
            return False
        
        search_terms = self.search_terms[category][subcategory]
        filename = f"public/images/{category}/{subcategory}.jpg"
        
        print(f"\n🔍 Searching for: {subcategory}")
        print(f"📝 Search terms: {', '.join(search_terms)}")
        
        # Try different sources
        images_found = []
        
        for term in search_terms:
            # Search Unsplash
            unsplash_results = self.search_unsplash(term, 3)
            images_found.extend(unsplash_results)
            
            # Search Pexels
            pexels_results = self.search_pexels(term, 3)
            images_found.extend(pexels_results)
            
            # Search Pixabay
            pixabay_results = self.search_pixabay(term, 3)
            images_found.extend(pixabay_results)
            
            time.sleep(1)  # Rate limiting
        
        if not images_found:
            print(f"❌ No images found for {subcategory}")
            return False
        
        # Select best image (first one for now)
        best_image = images_found[0]
        print(f"🎯 Selected: {best_image['description']} from {best_image['source']}")
        
        # Download the image
        success = self.download_image(best_image['url'], filename)
        
        if success:
            print(f"✅ Successfully scraped: {subcategory}")
        else:
            print(f"❌ Failed to scrape: {subcategory}")
        
        return success

    def scrape_all(self) -> Dict[str, int]:
        """Scrape images for all categories"""
        print("🕷️ Starting Pet Portrait Image Scraping")
        print("=" * 50)
        
        results = {'success': 0, 'failed': 0}
        
        # Scrape all categories
        for category, subcategories in self.search_terms.items():
            print(f"\n📁 Scraping {category}...")
            for subcategory in subcategories:
                if self.scrape_category(category, subcategory):
                    results['success'] += 1
                else:
                    results['failed'] += 1
                time.sleep(2)  # Rate limiting between downloads
        
        return results

def main():
    print("🕷️ Pet Portrait Image Scraper")
    print("=" * 40)
    
    # Check for API keys (optional)
    api_keys = {
        'UNSPLASH_API_KEY': os.getenv('UNSPLASH_API_KEY'),
        'PEXELS_API_KEY': os.getenv('PEXELS_API_KEY'),
        'PIXABAY_API_KEY': os.getenv('PIXABAY_API_KEY')
    }
    
    print("🔑 API Keys Status:")
    for key, value in api_keys.items():
        status = "✅ Set" if value else "❌ Not set (optional)"
        print(f"  {key}: {status}")
    
    print("\n💡 Note: API keys are optional but recommended for better results")
    print("💰 All scraped images are free to use (from Unsplash, Pexels, Pixabay)")
    
    # Create scraper instance
    scraper = PetPortraitScraper()
    
    # Start scraping
    results = scraper.scrape_all()
    
    print("\n" + "=" * 50)
    print(f"🎉 Scraping Complete!")
    print(f"✅ Successfully scraped: {results['success']} images")
    print(f"❌ Failed to scrape: {results['failed']} images")
    print(f"📁 Images saved to: public/images/")
    
    print("\n📋 Next steps:")
    print("1. Review the scraped images")
    print("2. Run: git add . && git commit -m 'Added scraped pet portrait images'")
    print("3. Run: git push origin main")
    print("4. Test on live site")

if __name__ == "__main__":
    main()




