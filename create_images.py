#!/usr/bin/env python3

import os
from PIL import Image, ImageDraw, ImageFont

def create_pet_portrait_image(width, height, filename, text, bg_color=(240, 248, 255)):
    """Create a pet portrait placeholder image"""
    
    # Create image
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 24)
    except:
        try:
            font = ImageFont.truetype("arial.ttf", 24)
        except:
            font = ImageFont.load_default()
    
    # Calculate text position (center)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text
    draw.text((x, y), text, fill=(51, 51, 51), font=font)
    
    # Save image
    img.save(filename, 'JPEG', quality=85)
    print(f"Created: {filename}")

def main():
    print("🎨 Creating AI-ready pet portrait images...")
    
    # Create directories
    os.makedirs("public/images/breeds", exist_ok=True)
    os.makedirs("public/images/styles", exist_ok=True)
    os.makedirs("public/images/homepage", exist_ok=True)
    os.makedirs("public/images/services", exist_ok=True)
    os.makedirs("public/images/gift-guides", exist_ok=True)
    
    print("🖼️ Creating breed portrait images...")
    
    # Breed images (800x450 - 16:9 aspect ratio)
    create_pet_portrait_image(800, 450, "public/images/breeds/golden-retriever-traditional.jpg", "Golden Retriever\nTraditional Portrait", (240, 248, 255))
    create_pet_portrait_image(800, 450, "public/images/breeds/labrador-splash-sketch.jpg", "Labrador Retriever\nSplash & Sketch", (255, 240, 245))
    create_pet_portrait_image(800, 450, "public/images/breeds/german-shepherd-traditional.jpg", "German Shepherd\nTraditional Portrait", (240, 255, 240))
    create_pet_portrait_image(800, 450, "public/images/breeds/french-bulldog-throne.jpg", "French Bulldog\nPet on Throne", (255, 248, 220))
    create_pet_portrait_image(800, 450, "public/images/breeds/persian-cat-traditional.jpg", "Persian Cat\nTraditional Portrait", (245, 245, 220))
    create_pet_portrait_image(800, 450, "public/images/breeds/maine-coon-traditional.jpg", "Maine Coon\nTraditional Portrait", (230, 230, 250))
    create_pet_portrait_image(800, 450, "public/images/breeds/british-shorthair-traditional.jpg", "British Shorthair\nTraditional Portrait", (240, 240, 240))
    create_pet_portrait_image(800, 450, "public/images/breeds/ragdoll-traditional.jpg", "Ragdoll\nTraditional Portrait", (255, 228, 225))
    create_pet_portrait_image(800, 450, "public/images/breeds/border-collie-traditional.jpg", "Border Collie\nTraditional Portrait", (240, 248, 255))
    create_pet_portrait_image(800, 450, "public/images/breeds/siberian-husky-traditional.jpg", "Siberian Husky\nTraditional Portrait", (224, 255, 255))
    
    print("🎨 Creating style example images...")
    
    # Style examples (600x400)
    create_pet_portrait_image(600, 400, "public/images/styles/traditional-example.jpg", "Traditional\nPortrait Style", (248, 248, 255))
    create_pet_portrait_image(600, 400, "public/images/styles/splash-sketch-example.jpg", "Splash & Sketch\nStyle", (255, 240, 245))
    create_pet_portrait_image(600, 400, "public/images/styles/throne-example.jpg", "Pet on Throne\nStyle", (255, 248, 220))
    create_pet_portrait_image(600, 400, "public/images/styles/halloween-example.jpg", "Halloween\nSpecial", (255, 165, 0))
    
    print("🏠 Creating homepage images...")
    
    # Homepage images
    create_pet_portrait_image(1200, 630, "public/images/homepage/hero-showcase.jpg", "Pet Portrait\nShowcase", (230, 243, 255))
    create_pet_portrait_image(800, 450, "public/images/homepage/featured-breeds.jpg", "Featured\nBreed Guides", (240, 248, 255))
    
    print("🔧 Creating services images...")
    
    # Services images
    create_pet_portrait_image(1200, 630, "public/images/services/portrait-comparison.jpg", "Portrait Services\nComparison", (245, 245, 245))
    
    print("🎁 Creating gift guide images...")
    
    # Gift guide images
    create_pet_portrait_image(800, 450, "public/images/gift-guides/gifts-for-golden-retriever-owners.jpg", "Golden Retriever\nGift Guide", (255, 250, 205))
    create_pet_portrait_image(800, 450, "public/images/gift-guides/gifts-for-labrador-owners.jpg", "Labrador\nGift Guide", (240, 255, 240))
    create_pet_portrait_image(800, 450, "public/images/gift-guides/gifts-for-cat-lovers.jpg", "Cat Lover\nGift Guide", (255, 228, 225))
    create_pet_portrait_image(800, 450, "public/images/gift-guides/gifts-for-german-shepherd-owners.jpg", "German Shepherd\nGift Guide", (240, 248, 255))
    create_pet_portrait_image(800, 450, "public/images/gift-guides/gifts-for-french-bulldog-owners.jpg", "French Bulldog\nGift Guide", (255, 248, 220))
    
    print("✅ Created 20 working JPG images!")
    print("")
    print("🤖 Ready for AI-generated pet portraits!")
    print("These placeholders can now be replaced with:")
    print("- DALL-E 3 generated pet portraits")
    print("- Midjourney artistic styles")
    print("- Real examples from The Family Portrait Company")

if __name__ == "__main__":
    main()
