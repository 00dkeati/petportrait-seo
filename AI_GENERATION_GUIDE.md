# 🤖 AI Pet Portrait Generation Guide

## Overview
This system uses OpenAI's DALL-E 3 to generate professional-quality pencil portraits of pets for your PetPortrait.co SEO site.

## 🚀 Quick Start

### Step 1: Get OpenAI API Key
1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. Set it as an environment variable:
   ```bash
   export OPENAI_API_KEY='your-api-key-here'
   ```

### Step 2: Run Generation
```bash
./setup_ai_generation.sh
```

## 💰 Cost Estimate
- **DALL-E 3**: $0.04 per 1024x1024 image
- **Total for 20 images**: ~$2.00 USD
- **Rate limiting**: 2-second delay between requests

## 🎨 Generated Images

### Breed Portraits (10 images)
- **Golden Retriever**: Traditional pencil sketch, detailed fur texture
- **Labrador**: Watercolor splash with pencil sketch overlay
- **German Shepherd**: Noble pencil portrait, dignified expression
- **French Bulldog**: Humorous throne-style illustration
- **Persian Cat**: Elegant pencil portrait, luxurious fur
- **Maine Coon**: Majestic sketch, large size details
- **British Shorthair**: Classic portrait, round face
- **Ragdoll**: Gentle sketch, blue eyes
- **Border Collie**: Intelligent portrait, focused expression
- **Siberian Husky**: Striking sketch, wolf-like features

### Style Examples (4 images)
- **Traditional**: Classic pencil portrait style
- **Splash Sketch**: Watercolor + pencil combination
- **Throne Style**: Humorous royal illustration
- **Halloween**: Seasonal themed portrait

### Homepage Images (2 images)
- **Hero Showcase**: Multiple breeds showcase
- **Featured Breeds**: Breed collection display

### Services Images (1 image)
- **Portrait Comparison**: Before/after comparison

### Gift Guide Images (5 images)
- **Golden Retriever Gifts**: Gift ideas showcase
- **Labrador Gifts**: Gift ideas showcase
- **Cat Lover Gifts**: Gift ideas showcase
- **German Shepherd Gifts**: Gift ideas showcase
- **French Bulldog Gifts**: Gift ideas showcase

## 🔧 Technical Details

### Image Specifications
- **Breed/Style/Gift images**: 1024x1024 pixels
- **Homepage/Services images**: 1792x1024 pixels (wide format)
- **Format**: JPEG
- **Quality**: Standard (DALL-E 3)

### Prompts Used
Each image uses carefully crafted prompts optimized for:
- **Pet accuracy**: Breed-specific characteristics
- **Art style**: Pencil sketch aesthetic
- **Quality**: Professional portrait quality
- **Consistency**: Uniform style across all images

## 📁 File Structure
```
public/images/
├── breeds/ (10 AI-generated breed portraits)
├── styles/ (4 AI-generated style examples)
├── homepage/ (2 AI-generated homepage images)
├── services/ (1 AI-generated service image)
└── gift-guides/ (5 AI-generated gift guide images)
```

## 🛠️ Troubleshooting

### Common Issues
1. **API Key Error**: Make sure OPENAI_API_KEY is set correctly
2. **Rate Limiting**: Script includes 2-second delays between requests
3. **Network Issues**: Check internet connection
4. **File Permissions**: Ensure write access to public/images/

### Manual Generation
If the script fails, you can generate images manually:
```python
python3 generate_ai_portraits.py
```

## 🎯 Next Steps After Generation

1. **Review Images**: Check quality and accuracy
2. **Commit Changes**: `git add . && git commit -m "Added AI-generated pet portraits"`
3. **Deploy**: `git push origin main`
4. **Test Live Site**: Verify images display correctly
5. **Replace Cache-Busting**: Remove `?v=2` parameters once confirmed working

## 💡 Pro Tips

1. **Quality**: DALL-E 3 generates high-quality, realistic portraits
2. **Consistency**: All prompts designed for uniform style
3. **SEO Value**: Real pet portraits improve user engagement
4. **Brand Alignment**: Matches The Family Portrait Company's style
5. **Scalability**: Easy to generate more breeds/styles as needed

## 🔄 Future Enhancements

- **More Breeds**: Add additional dog/cat breeds
- **Custom Styles**: Generate specific artistic styles
- **Seasonal Themes**: Holiday-specific portraits
- **Before/After**: Photo to portrait transformations
- **Batch Processing**: Generate multiple variations

**Ready to create professional pet portraits with AI!** 🚀




