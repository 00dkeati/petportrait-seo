#!/bin/bash

# Simple Pet Image Scraping Setup
echo "🕷️ Setting up Pet Image Scraping"
echo "=" * 40

# Check if Python 3 is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is required but not installed"
    exit 1
fi

# Check if pip is available
if ! command -v pip3 &> /dev/null; then
    echo "❌ Error: pip3 is required but not installed"
    exit 1
fi

# Install required packages
echo "📦 Installing required Python packages..."
pip3 install requests Pillow

echo "✅ Dependencies installed"
echo ""
echo "📸 Image Sources:"
echo "  • Unsplash (free stock photos)"
echo "  • High-quality pet portraits"
echo "  • No API key required"
echo "  • All images are free to use"
echo ""

# Ask for confirmation
read -p "🤔 Do you want to start scraping pet images? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Scraping cancelled"
    exit 1
fi

echo ""
echo "🕷️ Starting image scraping..."
echo "⏱️  This will take about 2-3 minutes..."
echo ""

# Run the scraping script
python3 simple_image_scraper.py

echo ""
echo "🎉 Image scraping complete!"
echo "📋 Next steps:"
echo "1. Review the scraped images in public/images/"
echo "2. Run: git add . && git commit -m 'Added scraped pet images'"
echo "3. Run: git push origin main"
echo "4. Check your live site for the new images!"




