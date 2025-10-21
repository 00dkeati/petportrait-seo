# PetPortrait.co Image Replacement Guide

## 🎯 Current Status
✅ **Placeholder images created** (20 SVG placeholders)  
✅ **Homepage updated** to use actual image references  
✅ **Build successful** - all pages working  
🔄 **Ready for real portrait images**

## 📁 Image Structure Created

```
public/images/
├── breeds/ (10 breed-specific placeholders)
│   ├── golden-retriever-traditional.jpg
│   ├── labrador-splash-sketch.jpg
│   ├── german-shepherd-traditional.jpg
│   ├── french-bulldog-throne.jpg
│   └── [6 more breeds]
├── styles/ (4 style examples)
│   ├── traditional-example.jpg
│   ├── splash-sketch-example.jpg
│   ├── throne-example.jpg
│   └── halloween-example.jpg
├── homepage/ (2 homepage images)
│   ├── hero-showcase.jpg
│   └── featured-breeds.jpg
├── services/ (1 comparison image)
│   └── portrait-comparison.jpg
└── gift-guides/ (5 gift guide images)
    ├── gifts-for-golden-retriever-owners.jpg
    ├── gifts-for-labrador-owners.jpg
    ├── gifts-for-cat-lovers.jpg
    ├── gifts-for-german-shepherd-owners.jpg
    └── gifts-for-french-bulldog-owners.jpg
```

## 🖼️ Image Sources from The Family Portrait Company

### Portrait Styles Available:
1. **Traditional Digital Portrait** (£6) - Classic, elegant style
2. **Splash & Sketch** (£9) - Watercolor + pencil combination  
3. **Pet on the Throne** (£7) - Royal/humorous style
4. **Halloween Special** (£6) - Pumpkin-themed portraits
5. **Custom Rainbow Watercolour** - Colorful artistic style

### Recommended Image Assignments:

#### Breed Images:
- **Golden Retriever**: Traditional portrait (gentle, classic)
- **Labrador Retriever**: Splash & Sketch (energetic, colorful)
- **German Shepherd**: Traditional portrait (noble, dignified)
- **French Bulldog**: Pet on Throne (playful, humorous)
- **Persian Cat**: Traditional portrait (elegant, refined)
- **Maine Coon**: Traditional portrait (majestic, large)
- **British Shorthair**: Traditional portrait (classic, round)
- **Ragdoll**: Traditional portrait (gentle, relaxed)
- **Border Collie**: Traditional portrait (intelligent, focused)
- **Siberian Husky**: Traditional portrait (striking, wolf-like)

#### Style Examples:
- **Traditional**: Classic portrait example
- **Splash & Sketch**: Colorful watercolor example
- **Throne**: Royal/humorous example
- **Halloween**: Pumpkin-themed example

## 🔄 Next Steps to Replace Placeholders:

### Step 1: Download Real Images
1. Visit [The Family Portrait Company](https://familyportraitcompany.com/)
2. Download example portraits for each style
3. Save with the exact filenames listed above

### Step 2: Optimize Images
```bash
# Recommended dimensions:
# Breed images: 800x450px (16:9 aspect ratio)
# Homepage hero: 1200x630px (OpenGraph standard)
# Style examples: 600x400px
# Gift guides: 800x450px

# Compress for web (target: <100KB per image)
# Use tools like TinyPNG, ImageOptim, or online compressors
```

### Step 3: Replace Placeholders
```bash
# Replace each placeholder SVG with real JPG/PNG
cp real-golden-retriever.jpg public/images/breeds/golden-retriever-traditional.jpg
cp real-labrador-splash.jpg public/images/breeds/labrador-splash-sketch.jpg
# ... continue for all images
```

### Step 4: Test & Deploy
```bash
npm run build  # Test build
git add .
git commit -m "Added real portrait images"
git push origin main
```

## 💡 Pro Tips:

1. **Use diverse styles** - Mix traditional with splash & sketch for visual variety
2. **High-quality previews** - Show the quality customers can expect
3. **Consistent branding** - All images should reflect The Family Portrait Company's style
4. **Fast loading** - Compress images for web performance
5. **Alt text** - Already included for accessibility

## 🎨 Image Quality Guidelines:

- **Resolution**: High enough to look crisp on retina displays
- **File size**: Under 100KB per image for fast loading
- **Format**: JPG for photos, PNG for graphics with transparency
- **Aspect ratios**: Maintain 16:9 for breed cards, 2:1 for hero images
- **Colors**: Vibrant but not oversaturated, professional look

## ✅ Current Features Working:

- ✅ All 23 pages building successfully
- ✅ Image references properly linked
- ✅ Responsive image loading
- ✅ SEO metadata with image URLs
- ✅ OpenGraph and Twitter card images
- ✅ Alt text for accessibility

**The site is ready for real images! Just replace the SVG placeholders with actual portraits from The Family Portrait Company.**


