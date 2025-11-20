# Required Images for RBEW Website

To complete the SEO setup and branding, you'll need to create and add the following images to the `/public` folder:

## Required Images

### 1. Favicon
- **File:** `favicon.ico`
- **Size:** 32x32px or 16x16px
- **Description:** Small icon shown in browser tabs
- **Location:** `/public/favicon.ico`

### 2. PWA Icons
Create two PNG versions of your logo with transparent backgrounds:

- **File:** `icon-192.png`
- **Size:** 192x192px
- **Location:** `/public/icon-192.png`

- **File:** `icon-512.png`
- **Size:** 512x512px
- **Location:** `/public/icon-512.png`

### 3. Logo
- **File:** `RBEW_logo.jpg`
- **Size:** Recommended 512x512px or larger (square)
- **Description:** Main company logo
- **Location:** `/public/RBEW_logo.jpg`
- **Usage:** Used in Schema.org markup and possibly header

### 4. Open Graph Image
- **File:** `og-image.jpg`
- **Size:** **1200x630px (EXACT - required by social media)**
- **Format:** JPG or PNG
- **Description:** Image shown when site is shared on social media (Facebook, Twitter, LinkedIn, Discord, etc.)
- **Location:** `/public/og-image.jpg`
- **Design Tips:**
  - Include RBEW branding/logo
  - Add tagline: "Where imagination is engineered"
  - Use dark space theme to match site
  - Keep text/important elements in the center (safe zone)
  - Avoid small text (it will be scaled down)

## Design Guidelines

### Color Scheme
Use the existing site colors for consistency:
- **Background:** Black (#000000)
- **Primary:** Blue (#3b82f6)
- **Secondary:** Purple (#a855f7)
- **Accent:** Cyan (#00f3ff)
- **Gradient:** Blue → Purple → Pink

### Logo Design Ideas
- Letter "R" or "RBEW" in stylized form
- Incorporate space/stars theme
- Futuristic/tech aesthetic
- Could include building blocks or construction imagery (references "Builders")

### Open Graph Image Template
```
┌─────────────────────────────────────────────┐
│                 1200 x 630                  │
│  ┌───────────────────────────────────────┐  │
│  │                                       │  │
│  │         [RBEW LOGO/BRANDING]         │  │
│  │                                       │  │
│  │  Reality Builders Entertainment      │  │
│  │            Works                      │  │
│  │                                       │  │
│  │  "Where imagination is engineered"   │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

## Quick Creation Tools

### Online Tools (Free)
- **Favicon:** [favicon.io](https://favicon.io) - Generate from text or image
- **OG Image:** [Canva](https://canva.com) - Use Social Media template (1200x630)
- **Icons:** [Squoosh](https://squoosh.app) - Resize and optimize images
- **AI Generation:** Use ChatGPT/DALL-E or Midjourney with this prompt:
  ```
  "Modern tech logo for RBEW (Reality Builders Entertainment Works), 
  futuristic design, space theme with stars and nebulas, 
  dark background with blue and purple gradients, 
  minimalist, professional, square format"
  ```

### Placeholder Images
Until you have final designs, you can use:
1. Solid color placeholders
2. Generated gradient images
3. Simple text-based logos using tools like [Logoipsum](https://logoipsum.com)

## After Adding Images

Once images are in place:
1. Restart the dev server: `npm run dev`
2. Test Open Graph: [OpenGraph.xyz](https://www.opengraph.xyz)
3. Test Twitter Cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
4. Verify favicon appears in browser tab
5. Test PWA installation on mobile

## Optional Enhancements

- **Project thumbnails:** Create 16:9 images for each project (400x225px minimum)
- **Team photos:** Add actual photos to meet-the-people page
- **Favicon variations:** Create dark/light mode versions
- **Animated logo:** SVG version for smooth scaling and potential animation
