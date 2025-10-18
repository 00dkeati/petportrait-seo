#!/bin/bash

# AI Pet Portrait Generation Setup
echo "🤖 Setting up AI Pet Portrait Generation with OpenAI DALL-E 3"
echo "=" * 60

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
pip3 install -r requirements.txt

# Check if OpenAI API key is set
if [ -z "$OPENAI_API_KEY" ]; then
    echo ""
    echo "❌ Error: OPENAI_API_KEY environment variable not set"
    echo ""
    echo "🔑 To get your OpenAI API key:"
    echo "1. Go to https://platform.openai.com/api-keys"
    echo "2. Create a new API key"
    echo "3. Set it as an environment variable:"
    echo "   export OPENAI_API_KEY='your-api-key-here'"
    echo ""
    echo "💰 Cost estimate: ~$2.00 USD for all 20 images"
    echo "   (DALL-E 3: $0.04 per 1024x1024 image)"
    echo ""
    exit 1
fi

echo "✅ OpenAI API key found"
echo "💰 Estimated cost: ~$2.00 USD for all 20 images"
echo ""

# Ask for confirmation
read -p "🤔 Do you want to proceed with generating AI portraits? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Generation cancelled"
    exit 1
fi

echo ""
echo "🎨 Starting AI portrait generation..."
echo "⏱️  This will take about 2-3 minutes..."
echo ""

# Run the generation script
python3 generate_ai_portraits.py

echo ""
echo "🎉 AI portrait generation complete!"
echo "📋 Next steps:"
echo "1. Review the generated images in public/images/"
echo "2. Run: git add . && git commit -m 'Added AI-generated pet portraits'"
echo "3. Run: git push origin main"
echo "4. Check your live site for the new images!"
