#!/bin/bash

# Download actual working placeholder images from a reliable service
echo "🖼️ Downloading working placeholder images..."

# Function to download a working placeholder image
download_working_image() {
    local width=$1
    local height=$2
    local filename=$3
    local text=$4
    
    # Use picsum.photos for reliable placeholder images
    local url="https://picsum.photos/${width}/${height}?random=${RANDOM}"
    
    echo "Downloading: $filename"
    curl -s "$url" -o "public/images/$filename"
    
    # Add a text overlay using ImageMagick if available, otherwise just use the random image
    if command -v convert &> /dev/null; then
        convert "public/images/$filename" -pointsize 24 -fill white -stroke black -strokewidth 2 -gravity center -annotate +0+0 "$text" "public/images/$filename"
    fi
}

echo "🎨 Creating breed portrait images..."

# Breed images (800x450 - 16:9 aspect ratio)
download_working_image 800 450 "breeds/golden-retriever-traditional.jpg" "Golden Retriever"
download_working_image 800 450 "breeds/labrador-splash-sketch.jpg" "Labrador"
download_working_image 800 450 "breeds/german-shepherd-traditional.jpg" "German Shepherd"
download_working_image 800 450 "breeds/french-bulldog-throne.jpg" "French Bulldog"
download_working_image 800 450 "breeds/persian-cat-traditional.jpg" "Persian Cat"
download_working_image 800 450 "breeds/maine-coon-traditional.jpg" "Maine Coon"
download_working_image 800 450 "breeds/british-shorthair-traditional.jpg" "British Shorthair"
download_working_image 800 450 "breeds/ragdoll-traditional.jpg" "Ragdoll"
download_working_image 800 450 "breeds/border-collie-traditional.jpg" "Border Collie"
download_working_image 800 450 "breeds/siberian-husky-traditional.jpg" "Siberian Husky"

echo "🎨 Creating style example images..."

# Style examples (600x400)
download_working_image 600 400 "styles/traditional-example.jpg" "Traditional"
download_working_image 600 400 "styles/splash-sketch-example.jpg" "Splash Sketch"
download_working_image 600 400 "styles/throne-example.jpg" "Throne Style"
download_working_image 600 400 "styles/halloween-example.jpg" "Halloween"

echo "🏠 Creating homepage images..."

# Homepage images
download_working_image 1200 630 "homepage/hero-showcase.jpg" "Pet Portrait Showcase"
download_working_image 800 450 "homepage/featured-breeds.jpg" "Featured Breeds"

echo "🔧 Creating services images..."

# Services images
download_working_image 1200 630 "services/portrait-comparison.jpg" "Portrait Services"

echo "🎁 Creating gift guide images..."

# Gift guide images
download_working_image 800 450 "gift-guides/gifts-for-golden-retriever-owners.jpg" "Golden Retriever Gifts"
download_working_image 800 450 "gift-guides/gifts-for-labrador-owners.jpg" "Labrador Gifts"
download_working_image 800 450 "gift-guides/gifts-for-cat-lovers.jpg" "Cat Lover Gifts"
download_working_image 800 450 "gift-guides/gifts-for-german-shepherd-owners.jpg" "German Shepherd Gifts"
download_working_image 800 450 "gift-guides/gifts-for-french-bulldog-owners.jpg" "French Bulldog Gifts"

echo "✅ Created 20 working placeholder images from picsum.photos!"
echo ""
echo "These are real JPEG images that should display correctly in all browsers."


