#!/usr/bin/env python3

import os
import openai
import requests
import time
from typing import Dict, List

# OpenAI API configuration
openai.api_key = os.getenv('OPENAI_API_KEY')

def generate_pet_portrait(prompt: str, filename: str, size: str = "1024x1024") -> bool:
    """
    Generate a pet portrait using DALL-E 3 and save it to the specified filename
    """
    try:
        print(f"🎨 Generating: {filename}")
        print(f"📝 Prompt: {prompt}")
        
        # Generate image using DALL-E 3
        response = openai.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size=size,
            quality="standard",
            n=1,
        )
        
        # Get the image URL
        image_url = response.data[0].url
        
        # Download the image
        img_response = requests.get(image_url)
        img_response.raise_for_status()
        
        # Save the image
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        with open(filename, 'wb') as f:
            f.write(img_response.content)
        
        print(f"✅ Saved: {filename}")
        return True
        
    except Exception as e:
        print(f"❌ Error generating {filename}: {str(e)}")
        return False

def create_portrait_prompts() -> Dict[str, List[str]]:
    """
    Create optimized prompts for different pet portrait styles
    """
    return {
        "breeds": {
            "golden-retriever-traditional": "Professional pencil sketch portrait of a golden retriever dog, detailed fur texture, gentle expression, classical art style, high quality, black and white",
            "labrador-splash-sketch": "Artistic watercolor splash background with detailed pencil sketch of a labrador retriever dog, vibrant colors mixed with black pencil details, modern art style",
            "german-shepherd-traditional": "Noble pencil portrait of a german shepherd dog, detailed coat texture, dignified expression, classical art style, black and white, professional quality",
            "french-bulldog-throne": "Humorous pencil sketch of a french bulldog sitting on a royal throne, cartoon-style illustration, adorable bat ears, playful expression, detailed drawing",
            "persian-cat-traditional": "Elegant pencil portrait of a persian cat, luxurious long fur details, regal expression, classical art style, black and white, high quality",
            "maine-coon-traditional": "Majestic pencil sketch of a maine coon cat, large size, tufted ears, detailed fur texture, classical art style, black and white",
            "british-shorthair-traditional": "Classic pencil portrait of a british shorthair cat, round face, dense coat texture, traditional art style, black and white",
            "ragdoll-traditional": "Gentle pencil sketch of a ragdoll cat, blue eyes, soft fur texture, relaxed pose, classical art style, black and white",
            "border-collie-traditional": "Intelligent pencil portrait of a border collie dog, focused expression, detailed coat pattern, classical art style, black and white",
            "siberian-husky-traditional": "Striking pencil sketch of a siberian husky, wolf-like features, detailed fur texture, classical art style, black and white"
        },
        "styles": {
            "traditional-example": "Classic pencil portrait of a mixed breed dog, detailed fur texture, traditional art style, black and white, professional quality",
            "splash-sketch-example": "Artistic watercolor splash background with pencil sketch of a cat, vibrant colors with detailed pencil work, modern art style",
            "throne-example": "Humorous pencil sketch of a small dog on a royal throne, cartoon-style illustration, adorable expression, detailed drawing",
            "halloween-example": "Halloween-themed pencil sketch of a black cat with pumpkins, autumn colors, festive atmosphere, detailed art style"
        },
        "homepage": {
            "hero-showcase": "Multiple pet portraits showcase, various breeds of dogs and cats in pencil sketch style, classical art arrangement, black and white, professional quality",
            "featured-breeds": "Collection of different dog breeds in pencil portrait style, classical art arrangement, black and white, high quality"
        },
        "services": {
            "portrait-comparison": "Before and after comparison of pet photos and pencil portraits, professional art style, black and white, high quality"
        },
        "gift-guides": {
            "gifts-for-golden-retriever-owners": "Gift ideas for golden retriever owners, custom portrait examples, pencil sketch style, black and white",
            "gifts-for-labrador-owners": "Gift ideas for labrador owners, custom portrait examples, pencil sketch style, black and white",
            "gifts-for-cat-lovers": "Gift ideas for cat lovers, custom portrait examples, pencil sketch style, black and white",
            "gifts-for-german-shepherd-owners": "Gift ideas for german shepherd owners, custom portrait examples, pencil sketch style, black and white",
            "gifts-for-french-bulldog-owners": "Gift ideas for french bulldog owners, custom portrait examples, pencil sketch style, black and white"
        }
    }

def main():
    print("🤖 Starting AI Pet Portrait Generation with OpenAI DALL-E 3")
    print("=" * 60)
    
    # Check if API key is set
    if not os.getenv('OPENAI_API_KEY'):
        print("❌ Error: OPENAI_API_KEY environment variable not set")
        print("Please set your OpenAI API key:")
        print("export OPENAI_API_KEY='your-api-key-here'")
        return
    
    # Get prompts
    prompts = create_portrait_prompts()
    
    # Generate images
    success_count = 0
    total_count = 0
    
    # Breed portraits (1024x1024)
    print("\n🐕 Generating Breed Portraits...")
    for breed, prompt in prompts["breeds"].items():
        filename = f"public/images/breeds/{breed}.jpg"
        total_count += 1
        if generate_pet_portrait(prompt, filename, "1024x1024"):
            success_count += 1
        time.sleep(2)  # Rate limiting
    
    # Style examples (1024x1024)
    print("\n🎨 Generating Style Examples...")
    for style, prompt in prompts["styles"].items():
        filename = f"public/images/styles/{style}.jpg"
        total_count += 1
        if generate_pet_portrait(prompt, filename, "1024x1024"):
            success_count += 1
        time.sleep(2)
    
    # Homepage images (1792x1024 for wide format)
    print("\n🏠 Generating Homepage Images...")
    for page, prompt in prompts["homepage"].items():
        filename = f"public/images/homepage/{page}.jpg"
        total_count += 1
        if generate_pet_portrait(prompt, filename, "1792x1024"):
            success_count += 1
        time.sleep(2)
    
    # Services images (1792x1024)
    print("\n🔧 Generating Services Images...")
    for service, prompt in prompts["services"].items():
        filename = f"public/images/services/{service}.jpg"
        total_count += 1
        if generate_pet_portrait(prompt, filename, "1792x1024"):
            success_count += 1
        time.sleep(2)
    
    # Gift guide images (1024x1024)
    print("\n🎁 Generating Gift Guide Images...")
    for gift, prompt in prompts["gift-guides"].items():
        filename = f"public/images/gift-guides/{gift}.jpg"
        total_count += 1
        if generate_pet_portrait(prompt, filename, "1024x1024"):
            success_count += 1
        time.sleep(2)
    
    print("\n" + "=" * 60)
    print(f"🎉 Generation Complete!")
    print(f"✅ Successfully generated: {success_count}/{total_count} images")
    print(f"💰 Estimated cost: ~${total_count * 0.04:.2f} USD")
    print("\n📋 Next steps:")
    print("1. Review the generated images")
    print("2. Commit and push to GitHub")
    print("3. Deploy to Vercel")
    print("4. Test on live site")

if __name__ == "__main__":
    main()

