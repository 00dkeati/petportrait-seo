#!/usr/bin/env python3

import os
from PIL import Image, ImageDraw, ImageFont
import random

def create_simple_image(width, height, filename, color):
    """Create a simple colored placeholder image"""
    
    # Create image with solid color
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 32)
    except:
        try:
            font = ImageFont.truetype("arial.ttf", 32)
        except:
            font = ImageFont.load_default()
    
    # Add text
    text = filename.split('/')[-1].replace('.jpg', '').replace('-', ' ').title()
    
    # Calculate text position (center)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text with white color and black outline
    draw.text((x, y), text, fill=(255, 255, 255), font=font, stroke_width=2, stroke_fill=(0, 0, 0))
    
    # Save image
    img.save(filename, 'JPEG', quality=90)
    print(f"Created: {filename}")

def main():
    print("🎨 Creating simple colored placeholder images...")
    
    # Create directories
    os.makedirs("public/images/breeds", exist_ok=True)
    os.makedirs("public/images/styles", exist_ok=True)
    os.makedirs("public/images/homepage", exist_ok=True)
    os.makedirs("public/images/services", exist_ok=True)
    os.makedirs("public/images/gift-guides", exist_ok=True)
    
    # Define colors for different categories
    breed_colors = [
        (255, 200, 150),  # Golden
        (150, 200, 255),  # Blue
        (200, 255, 150),  # Green
        (255, 150, 200),  # Pink
        (200, 150, 255),  # Purple
        (255, 255, 150),  # Yellow
        (150, 255, 200),  # Mint
        (255, 200, 200),  # Rose
        (200, 200, 255),  # Light Blue
        (255, 150, 150),  # Coral
    ]
    
    print("🖼️ Creating breed portrait images...")
    
    # Breed images (800x450 - 16:9 aspect ratio)
    breeds = [
        "breeds/golden-retriever-traditional.jpg",
        "breeds/labrador-splash-sketch.jpg", 
        "breeds/german-shepherd-traditional.jpg",
        "breeds/french-bulldog-throne.jpg",
        "breeds/persian-cat-traditional.jpg",
        "breeds/maine-coon-traditional.jpg",
        "breeds/british-shorthair-traditional.jpg",
        "breeds/ragdoll-traditional.jpg",
        "breeds/border-collie-traditional.jpg",
        "breeds/siberian-husky-traditional.jpg"
    ]
    
    for i, breed in enumerate(breeds):
        create_simple_image(800, 450, f"public/images/{breed}", breed_colors[i % len(breed_colors)])
    
    print("🎨 Creating style example images...")
    
    # Style examples (600x400)
    styles = [
        "styles/traditional-example.jpg",
        "styles/splash-sketch-example.jpg",
        "styles/throne-example.jpg",
        "styles/halloween-example.jpg"
    ]
    
    style_colors = [(200, 200, 200), (255, 200, 100), (150, 100, 200), (255, 100, 50)]
    
    for i, style in enumerate(styles):
        create_simple_image(600, 400, f"public/images/{style}", style_colors[i])
    
    print("🏠 Creating homepage images...")
    
    # Homepage images
    create_simple_image(1200, 630, "public/images/homepage/hero-showcase.jpg", (100, 150, 255))
    create_simple_image(800, 450, "public/images/homepage/featured-breeds.jpg", (150, 200, 255))
    
    print("🔧 Creating services images...")
    
    # Services images
    create_simple_image(1200, 630, "public/images/services/portrait-comparison.jpg", (200, 200, 200))
    
    print("🎁 Creating gift guide images...")
    
    # Gift guide images
    gift_guides = [
        "gift-guides/gifts-for-golden-retriever-owners.jpg",
        "gift-guides/gifts-for-labrador-owners.jpg",
        "gift-guides/gifts-for-cat-lovers.jpg",
        "gift-guides/gifts-for-german-shepherd-owners.jpg",
        "gift-guides/gifts-for-french-bulldog-owners.jpg"
    ]
    
    gift_colors = [(255, 220, 150), (150, 220, 255), (220, 150, 255), (255, 150, 220), (150, 255, 220)]
    
    for i, gift in enumerate(gift_guides):
        create_simple_image(800, 450, f"public/images/{gift}", gift_colors[i])
    
    print("✅ Created 20 simple colored placeholder images!")
    print("These should display correctly in all browsers.")

if __name__ == "__main__":
    main()


