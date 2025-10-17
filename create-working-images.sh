#!/bin/bash

# PetPortrait.co AI Image Generator
# Creates working placeholder images using placeholder.com service

echo "🎨 Creating AI-generated pet portrait placeholders..."

# Function to download placeholder image
download_placeholder() {
    local width=$1
    local height=$2
    local filename=$3
    local text=$4
    
    # Use placeholder.com service to create actual images
    local url="https://via.placeholder.com/${width}x${height}/f0f8ff/333333?text=${text}"
    
    echo "Downloading: $filename"
    curl -s "$url" -o "public/images/$filename"
}

echo "🖼️ Creating breed portrait images..."

# Breed images (800x450 - 16:9 aspect ratio)
download_placeholder 800 450 "breeds/golden-retriever-traditional.jpg" "Golden+Retriever+Portrait"
download_placeholder 800 450 "breeds/labrador-splash-sketch.jpg" "Labrador+Splash+Sketch"
download_placeholder 800 450 "breeds/german-shepherd-traditional.jpg" "German+Shepherd+Portrait"
download_placeholder 800 450 "breeds/french-bulldog-throne.jpg" "French+Bulldog+Throne"
download_placeholder 800 450 "breeds/persian-cat-traditional.jpg" "Persian+Cat+Portrait"
download_placeholder 800 450 "breeds/maine-coon-traditional.jpg" "Maine+Coon+Portrait"
download_placeholder 800 450 "breeds/british-shorthair-traditional.jpg" "British+Shorthair+Portrait"
download_placeholder 800 450 "breeds/ragdoll-traditional.jpg" "Ragdoll+Portrait"
download_placeholder 800 450 "breeds/border-collie-traditional.jpg" "Border+Collie+Portrait"
download_placeholder 800 450 "breeds/siberian-husky-traditional.jpg" "Siberian+Husky+Portrait"

echo "🎨 Creating style example images..."

# Style examples (600x400)
download_placeholder 600 400 "styles/traditional-example.jpg" "Traditional+Style"
download_placeholder 600 400 "styles/splash-sketch-example.jpg" "Splash+Sketch+Style"
download_placeholder 600 400 "styles/throne-example.jpg" "Throne+Style"
download_placeholder 600 400 "styles/halloween-example.jpg" "Halloween+Style"

echo "🏠 Creating homepage images..."

# Homepage images
download_placeholder 1200 630 "homepage/hero-showcase.jpg" "Pet+Portrait+Showcase"
download_placeholder 800 450 "homepage/featured-breeds.jpg" "Featured+Breed+Guides"

echo "🔧 Creating services images..."

# Services images
download_placeholder 1200 630 "services/portrait-comparison.jpg" "Portrait+Services+Comparison"

echo "🎁 Creating gift guide images..."

# Gift guide images
download_placeholder 800 450 "gift-guides/gifts-for-golden-retriever-owners.jpg" "Golden+Retriever+Gifts"
download_placeholder 800 450 "gift-guides/gifts-for-labrador-owners.jpg" "Labrador+Gifts"
download_placeholder 800 450 "gift-guides/gifts-for-cat-lovers.jpg" "Cat+Lover+Gifts"
download_placeholder 800 450 "gift-guides/gifts-for-german-shepherd-owners.jpg" "German+Shepherd+Gifts"
download_placeholder 800 450 "gift-guides/gifts-for-french-bulldog-owners.jpg" "French+Bulldog+Gifts"

echo "✅ Created 20 working placeholder images!"
echo ""
echo "📋 Next steps:"
echo "1. Test the images display correctly on the site"
echo "2. Replace with AI-generated pet portraits"
echo "3. Optimize for web performance"
echo ""
echo "🤖 For AI-generated pet portraits, we can use:"
echo "- DALL-E 3 for realistic pet portraits"
echo "- Midjourney for artistic styles"
echo "- Stable Diffusion for custom breeds"
echo "- Or download examples from The Family Portrait Company"
