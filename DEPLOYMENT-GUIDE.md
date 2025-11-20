# 🚀 RBEW Website - Complete Deployment Guide

## ✅ Pre-Deployment Checklist

### 1. Configuration Updates

#### Update Domain URLs
Replace `https://www.rbew.com` with your actual domain in:
- [ ] `src/app/layout.tsx` - line ~20 (`metadataBase`)
- [ ] `src/app/sitemap.ts` - line ~4 (`baseUrl`)
- [ ] `src/app/robots.ts` - line ~9 (`sitemap`)
- [ ] `src/app/layout.tsx` - Schema.org markup (~line 60)

#### Formspree Setup
- [ ] Create account at [formspree.io](https://formspree.io)
- [ ] Create new form and get form ID
- [ ] Update `src/app/contact/page.tsx` line ~22:
  ```typescript
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  ```

### 2. Assets & Images

#### Required Images (See IMAGES-NEEDED.md for details)
- [ ] `/public/favicon.ico` - Browser tab icon (32x32px)
- [ ] `/public/icon-192.png` - PWA icon (192x192px) - *SVG placeholder provided*
- [ ] `/public/icon-512.png` - PWA icon (512x512px) - *SVG placeholder provided*
- [ ] `/public/RBEW_logo.jpg` - Company logo (512x512px+)
- [ ] `/public/og-image.jpg` - Social media preview (1200x630px) - *SVG placeholder provided*

**Note:** SVG placeholders are included but PNG/JPG versions recommended for better compatibility.

### 3. SEO Verification

#### Add Verification Codes (Optional but Recommended)
Update `src/app/layout.tsx` metadata (~line 40):
```typescript
verification: {
  google: 'your-google-search-console-code',
  bing: 'your-bing-webmaster-code',
}
```

#### Get Verification Codes:
- [ ] [Google Search Console](https://search.google.com/search-console)
- [ ] [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 4. Content Review

- [ ] Review all content in text files matches website
- [ ] Update project statuses if needed
- [ ] Verify all links are working
- [ ] Check Discord invite links are permanent
- [ ] Confirm email addresses are correct

### 5. Environment Variables

Create `.env.local` if needed for any API keys:
```env
# Add any API keys or sensitive data here
# This file should be in .gitignore
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Pros:** Zero-config, automatic deployments, free SSL, global CDN

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables if any
6. Deploy!

**Custom Domain Setup:**
- Add domain in Vercel dashboard
- Update DNS records as shown
- SSL certificate auto-generated

### Option 2: Netlify

1. Push code to Git repository
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

### Option 3: Self-Hosted (VPS/Cloud)

**Requirements:**
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy

**Setup:**
```bash
# Clone repository
git clone <your-repo-url>
cd rbentertainment-works

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "rbew" -- start
pm2 save
pm2 startup
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📊 Post-Deployment Tasks

### Immediate Actions
- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Verify mobile responsiveness
- [ ] Check all navigation links work
- [ ] Test 404 page

### SEO Submissions
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test Open Graph: [OpenGraph.xyz](https://www.opengraph.xyz)
- [ ] Test Twitter Cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Test structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)

### Analytics Setup (Optional)
Consider adding:
- [ ] Google Analytics or Plausible
- [ ] Hotjar for user behavior
- [ ] Sentry for error tracking

### Performance Monitoring
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Test with [GTmetrix](https://gtmetrix.com)
- [ ] Verify Core Web Vitals
- [ ] Check mobile usability

### Social Media
- [ ] Share website on Discord servers
- [ ] Post announcement with OG image preview
- [ ] Update social media bios with link

---

## 🔧 Maintenance & Updates

### Regular Updates
```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Rebuild
npm run build

# Restart (if using PM2)
pm2 restart rbew
```

### Content Updates
To update content:
1. Edit text files in root directory
2. Update corresponding page components in `src/app/`
3. Test locally: `npm run dev`
4. Commit and push changes
5. Deploy (automatic on Vercel/Netlify)

### Monitoring Checklist (Monthly)
- [ ] Check for broken links
- [ ] Update project statuses
- [ ] Review analytics data
- [ ] Check for 404 errors in logs
- [ ] Update dependencies: `npm outdated` → `npm update`
- [ ] Verify SSL certificate is valid
- [ ] Test form submissions still work

---

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Port Already in Use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
PORT=3001 npm run dev
```

**Images Not Loading:**
- Check files exist in `/public/` folder
- Verify file names match exactly (case-sensitive)
- Clear browser cache

**Form Not Submitting:**
- Verify Formspree form ID is correct
- Check browser console for errors
- Test Formspree form directly

---

## 📞 Support

If you encounter issues:
1. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
2. Review deployment platform docs (Vercel/Netlify)
3. Check GitHub issues for similar problems
4. Contact hosting support

---

## 🎉 You're Ready!

Once all checklist items are complete, your RBEW website will be:
- ✅ Fully functional multi-page site
- ✅ SEO optimized with metadata, sitemap, robots.txt
- ✅ Mobile responsive
- ✅ Contact form enabled
- ✅ Social media ready
- ✅ Accessible and fast

**Good luck with your launch! 🚀**
