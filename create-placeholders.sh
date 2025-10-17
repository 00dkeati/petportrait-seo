#!/bin/bash

# PetPortrait.co Image Setup Script
# Creates placeholder images with proper dimensions and names

echo "🎨 Setting up PetPortrait.co images..."

# Create image directories
mkdir -p public/images/breeds
mkdir -p public/images/styles  
mkdir -p public/images/homepage
mkdir -p public/images/services
mkdir -p public/images/gift-guides

echo "📁 Created image directories"

# Function to create a placeholder image using HTML/CSS
create_placeholder() {
    local width=$1
    local height=$2
    local filename=$3
    local text=$4
    local bg_color=$5
    
    # Create SVG placeholder
    cat > "public/images/$filename" << EOF
<svg width="$width" height="$height" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$bg_color"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" 
        text-anchor="middle" dominant-baseline="middle" fill="#666">
    $text
  </text>
</svg>
EOF
}

echo "🖼️ Creating placeholder images..."

# Breed images (16:9 aspect ratio)
create_placeholder 800 450 "breeds/golden-retriever-traditional.jpg" "Golden Retriever\nTraditional Portrait" "#f0f8ff"
create_placeholder 800 450 "breeds/labrador-splash-sketch.jpg" "Labrador Retriever\nSplash & Sketch" "#fff0f5"
create_placeholder 800 450 "breeds/german-shepherd-traditional.jpg" "German Shepherd\nTraditional Portrait" "#f0fff0"
create_placeholder 800 450 "breeds/french-bulldog-throne.jpg" "French Bulldog\nPet on Throne" "#fff8dc"
create_placeholder 800 450 "breeds/persian-cat-traditional.jpg" "Persian Cat\nTraditional Portrait" "#f5f5dc"
create_placeholder 800 450 "breeds/maine-coon-traditional.jpg" "Maine Coon\nTraditional Portrait" "#e6e6fa"
create_placeholder 800 450 "breeds/british-shorthair-traditional.jpg" "British Shorthair\nTraditional Portrait" "#f0f0f0"
create_placeholder 800 450 "breeds/ragdoll-traditional.jpg" "Ragdoll\nTraditional Portrait" "#ffe4e1"
create_placeholder 800 450 "breeds/border-collie-traditional.jpg" "Border Collie\nTraditional Portrait" "#f0f8ff"
create_placeholder 800 450 "breeds/siberian-husky-traditional.jpg" "Siberian Husky\nTraditional Portrait" "#e0ffff"

# Style examples
create_placeholder 600 400 "styles/traditional-example.jpg" "Traditional\nPortrait Style" "#f8f8ff"
create_placeholder 600 400 "styles/splash-sketch-example.jpg" "Splash & Sketch\nStyle" "#fff0f5"
create_placeholder 600 400 "styles/throne-example.jpg" "Pet on Throne\nStyle" "#fff8dc"
create_placeholder 600 400 "styles/halloween-example.jpg" "Halloween\nSpecial" "#ffa500"

# Homepage images
create_placeholder 1200 630 "homepage/hero-showcase.jpg" "Pet Portrait\nShowcase" "#e6f3ff"
create_placeholder 800 450 "homepage/featured-breeds.jpg" "Featured\nBreed Guides" "#f0f8ff"

# Services images
create_placeholder 1200 630 "services/portrait-comparison.jpg" "Portrait Services\nComparison" "#f5f5f5"

# Gift guide images
create_placeholder 800 450 "gift-guides/gifts-for-golden-retriever-owners.jpg" "Golden Retriever\nGift Guide" "#fffacd"
create_placeholder 800 450 "gift-guides/gifts-for-labrador-owners.jpg" "Labrador\nGift Guide" "#f0fff0"
create_placeholder 800 450 "gift-guides/gifts-for-cat-lovers.jpg" "Cat Lover\nGift Guide" "#ffe4e1"
create_placeholder 800 450 "gift-guides/gifts-for-german-shepherd-owners.jpg" "German Shepherd\nGift Guide" "#f0f8ff"
create_placeholder 800 450 "gift-guides/gifts-for-french-bulldog-owners.jpg" "French Bulldog\nGift Guide" "#fff8dc"

echo "✅ Created 20 placeholder images"
echo ""
echo "📋 Next steps:"
echo "1. Replace placeholders with real portraits from The Family Portrait Company"
echo "2. Optimize images for web (compress, resize)"
echo "3. Test all pages load correctly"
echo "4. Push changes to GitHub"
echo ""
echo "🔗 Source: https://familyportraitcompany.com/"
echo "💰 Portrait styles: £6-£9 range"
echo "⚡ Fast digital delivery"
