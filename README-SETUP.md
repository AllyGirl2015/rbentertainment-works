# RBEW Website - Multi-Page Setup

## Site Structure

The RBEW website has been converted from a single-page to a multi-page structure:

### Pages

- **Home** (`/`) - Hero section with overview
- **About** (`/about`) - Full company history and mission
- **Projects** (`/projects`) - Portfolio overview with project cards
- **Individual Project Pages** (`/projects/[id]`) - Detailed pages for each project:
  - `/projects/realism-hit-roleplay`
  - `/projects/framestate-rp`
  - `/projects/pendant-legacy`
  - `/projects/time-police-department`
  - `/projects/virtual-guardians`
- **Meet the People** (`/meet-the-people`) - Team profiles
- **Contact** (`/contact`) - Contact form and information

## Formspree Setup

The contact form uses Formspree for form submissions. To configure:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Open `src/app/contact/page.tsx`
4. Replace `YOUR_FORM_ID` on line ~22 with your actual Formspree form ID:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```
   Change to:
   ```typescript
   const response = await fetch("https://formspree.io/f/xyzabc123", {
   ```

## SEO Optimization

The site includes comprehensive SEO features:

### Metadata
- Page-specific titles and descriptions
- Open Graph tags for social media sharing
- Twitter Card support
- Keywords and author information

### Sitemap & Robots
- `/sitemap.xml` - Auto-generated sitemap for search engines
- `/robots.txt` - Search engine crawler instructions
- Schema.org JSON-LD markup for rich results

### Performance
- Static generation where possible
- Optimized images and assets
- Proper semantic HTML structure
- Accessibility features (skip links, ARIA labels)

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment Checklist

Before deploying to production:

- [ ] Update Formspree form ID in `src/app/contact/page.tsx`
- [ ] Update domain in `src/app/layout.tsx` metadataBase
- [ ] Update domain in `src/app/sitemap.ts`
- [ ] Update domain in `src/app/robots.ts`
- [ ] Add actual logo image to `/public/RBEW_logo.jpg`
- [ ] Add Open Graph image to `/public/og-image.jpg` (1200x630px)
- [ ] Test all internal links
- [ ] Test form submission
- [ ] Verify sitemap.xml generation
- [ ] Test on mobile devices

## SEO Best Practices Implemented

✅ Unique meta titles for each page
✅ Descriptive meta descriptions (150-160 characters)
✅ Semantic HTML structure (h1, h2, nav, main, etc.)
✅ Alt text for images (when images are added)
✅ Internal linking structure
✅ Mobile-responsive design
✅ Fast page load times
✅ Schema.org structured data
✅ XML sitemap
✅ robots.txt configuration
✅ Open Graph tags
✅ Canonical URLs

## Future Enhancements

- Add blog section with dynamic routes
- Implement image optimization with next/image
- Add analytics (Google Analytics, Plausible, etc.)
- Create custom 404 and error pages
- Add loading states and Suspense boundaries
- Implement i18n for multiple languages
