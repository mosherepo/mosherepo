# Deployment Guide - AI Data Solutions Website

## 📋 Overview

This guide provides step-by-step instructions for deploying the AI Data Solutions website to various hosting platforms.

## 🚀 Pre-Deployment Checklist

### 1. Content Updates
- [ ] Replace all placeholder URLs (`https://www.yourcompany.com`) with your actual domain
- [ ] Update contact information (email, phone, address)
- [ ] Add real company logo and images
- [ ] Update social media links in Schema.org data
- [ ] Customize service descriptions for your business
- [ ] Add actual client testimonials and case studies

### 2. Technical Setup
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure domain DNS settings
- [ ] Create email accounts for contact form
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Create social media profiles

### 3. SEO Configuration
- [ ] Update sitemap.xml with actual URLs
- [ ] Verify robots.txt settings
- [ ] Add Google Analytics tracking code
- [ ] Add Schema.org verification codes
- [ ] Set up Google Business Profile

### 4. Assets
- [ ] Optimize all images (compress, convert to WebP)
- [ ] Create favicon (16x16, 32x32, 180x180)
- [ ] Create app icons (192x192, 512x512)
- [ ] Create Open Graph image (1200x630)
- [ ] Add alt text to all images

## 🌐 Deployment Options

### Option 1: Netlify (Recommended for Static Sites)

#### Step 1: Prepare Repository
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit - AI Data Solutions website"

# Create repository on GitHub/GitLab
# Then push
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

#### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `/` (root)
5. Click "Deploy site"

#### Step 3: Configure Custom Domain
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions
4. Netlify will automatically provision SSL certificate

#### Step 4: Configure Redirects
Create `netlify.toml` in root:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Option 2: Vercel

#### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

#### Step 2: Deploy
```bash
# Navigate to project directory
cd /path/to/ai-data-solutions-website

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Step 3: Configure Custom Domain
```bash
vercel domains add yourdomain.com
```

Follow DNS configuration instructions provided by Vercel.

#### Step 4: Configuration File
Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Option 3: GitHub Pages

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

#### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Source: Deploy from branch
4. Branch: main / (root)
5. Click Save

#### Step 3: Custom Domain
1. Add `CNAME` file to root with your domain:
   ```
   www.yourdomain.com
   ```
2. Configure DNS:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records for apex domain:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### Option 4: AWS S3 + CloudFront

#### Step 1: Create S3 Bucket
```bash
# Install AWS CLI
# Configure credentials
aws configure

# Create bucket
aws s3 mb s3://yourdomain.com

# Upload files
aws s3 sync . s3://yourdomain.com --exclude ".git/*"
```

#### Step 2: Configure S3 for Static Website
```bash
# Enable static website hosting
aws s3 website s3://yourdomain.com --index-document index.html --error-document 404.html

# Set bucket policy
aws s3api put-bucket-policy --bucket yourdomain.com --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::yourdomain.com/*"
  }]
}'
```

#### Step 3: Set Up CloudFront
1. Go to CloudFront console
2. Create distribution
3. Origin Domain: Select your S3 bucket
4. Redirect HTTP to HTTPS
5. Configure custom SSL certificate
6. Add custom domain (CNAME)

#### Step 4: Configure Route 53 (DNS)
1. Create hosted zone for your domain
2. Create A record pointing to CloudFront distribution
3. Update nameservers at domain registrar

### Option 5: Traditional Web Hosting (cPanel)

#### Step 1: Access cPanel
1. Login to your hosting cPanel
2. Navigate to File Manager

#### Step 2: Upload Files
1. Go to public_html directory
2. Upload all files:
   - index.html
   - styles.css
   - script.js
   - manifest.json
   - robots.txt
   - sitemap.xml
   - .htaccess (if on Apache)

#### Step 3: Configure Domain
1. Ensure domain points to your hosting
2. SSL certificate should auto-provision (Let's Encrypt)
3. Or manually install SSL from cPanel

#### Step 4: Configure .htaccess
The included `.htaccess` file should work automatically on Apache servers.

### Option 6: DigitalOcean App Platform

#### Step 1: Create App
1. Go to DigitalOcean Apps
2. Create new app
3. Connect GitHub repository
4. Configure:
   - Type: Static Site
   - Build command: (none)
   - Output directory: /

#### Step 2: Configure Custom Domain
1. Add domain in app settings
2. Configure DNS:
   - Add CNAME: `www` → your-app.ondigitalocean.app
   - Add A record for apex domain

## 🔧 Post-Deployment Configuration

### 1. SSL/HTTPS Setup

#### For Netlify/Vercel/GitHub Pages
SSL is automatic. Just ensure "Force HTTPS" is enabled in settings.

#### For Apache (cPanel/Traditional Hosting)
```apache
# Add to .htaccess (already included in provided file)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

#### For Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 2. DNS Configuration

#### A Records (for apex domain)
Point to your hosting IP:
```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 3600
```

#### CNAME Records (for www)
```
Type: CNAME
Name: www
Value: yourdomain.com
TTL: 3600
```

#### For CDN (CloudFront/Cloudflare)
```
Type: CNAME
Name: @
Value: your-cdn-url.cloudfront.net
TTL: 3600
```

### 3. Email Configuration

#### Set Up Contact Form Backend

**Option A: FormSpree (Easiest)**
1. Go to [formspree.io](https://formspree.io)
2. Create account and form
3. Update form action in index.html:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- rest of form -->
</form>
```

**Option C: Custom Backend (Node.js/Express)**
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/api/contact', async (req, res) => {
    // Email sending logic
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    
    await transporter.sendMail({
        from: req.body.email,
        to: 'contact@yourdomain.com',
        subject: 'New Contact Form Submission',
        text: req.body.message
    });
    
    res.json({ success: true });
});
```

### 4. Analytics Setup

#### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to index.html before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Google Tag Manager (Recommended)
1. Create account at [tagmanager.google.com](https://tagmanager.google.com)
2. Add GTM code to all pages:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

### 5. Search Console Setup

#### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (use domain property type)
3. Verify ownership:
   - **DNS verification**: Add TXT record
   - **HTML tag**: Add meta tag to index.html
   - **HTML file**: Upload verification file
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

#### Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Verify ownership
4. Submit sitemap

### 6. Performance Optimization

#### Image Optimization
```bash
# Install image optimization tools
npm install -g imagemin-cli imagemin-webp

# Convert images to WebP
imagemin images/*.{jpg,png} --out-dir=images --plugin=webp
```

#### Minify CSS/JS
```bash
# Install minification tools
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JS
uglifyjs script.js -o script.min.js -c -m
```

Update references in HTML to minified versions.

#### Enable CDN
Use Cloudflare for free CDN:
1. Add site to Cloudflare
2. Update nameservers at domain registrar
3. Configure cache rules
4. Enable auto-minification
5. Enable Brotli compression

## 🔒 Security Hardening

### 1. Content Security Policy
Add to HTML `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;">
```

### 2. Security Headers (Nginx)
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### 3. Rate Limiting (Nginx)
```nginx
limit_req_zone $binary_remote_addr zone=contact:10m rate=5r/m;

location /api/contact {
    limit_req zone=contact burst=3 nodelay;
}
```

### 4. DDoS Protection
- Enable Cloudflare "I'm Under Attack" mode
- Configure fail2ban on server
- Set up rate limiting

## 📊 Monitoring & Maintenance

### 1. Uptime Monitoring
Set up monitoring with:
- **UptimeRobot** (free): 50 monitors, 5-min checks
- **Pingdom**: Advanced monitoring
- **StatusCake**: Free tier available

### 2. Performance Monitoring
- **Google PageSpeed Insights**: Weekly checks
- **GTmetrix**: Automated reports
- **WebPageTest**: Detailed analysis

### 3. Error Monitoring
```javascript
// Add to script.js
window.addEventListener('error', function(e) {
    // Send to error tracking service
    fetch('/api/log-error', {
        method: 'POST',
        body: JSON.stringify({
            message: e.message,
            stack: e.error.stack,
            url: window.location.href
        })
    });
});
```

### 4. Backup Strategy
- **Daily backups**: Automated via hosting provider
- **Version control**: Git repository
- **Database backups**: If using backend (weekly)
- **Test restore**: Monthly

## 🎯 Launch Checklist

### Pre-Launch
- [ ] All content updated and proofread
- [ ] All links tested (internal and external)
- [ ] Forms tested and working
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing complete
- [ ] SSL certificate active
- [ ] 301 redirects configured
- [ ] Analytics tracking verified
- [ ] Search Console verified
- [ ] Sitemap submitted

### Launch Day
- [ ] Final backup of old site (if replacing)
- [ ] Deploy to production
- [ ] Verify DNS propagation
- [ ] Test all functionality
- [ ] Monitor error logs
- [ ] Check analytics tracking

### Post-Launch (Week 1)
- [ ] Monitor traffic and errors
- [ ] Submit to search engines
- [ ] Share on social media
- [ ] Email announcement to customers
- [ ] Monitor page speed
- [ ] Check mobile usability
- [ ] Review Search Console for issues

### Post-Launch (Month 1)
- [ ] Review analytics data
- [ ] Check keyword rankings
- [ ] Monitor backlink profile
- [ ] Update content based on feedback
- [ ] A/B test key elements
- [ ] Gather user feedback

## 🆘 Troubleshooting

### Issue: Site not loading
1. Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
2. Verify SSL certificate is active
3. Check server/hosting status
4. Review error logs

### Issue: Forms not working
1. Check form action URL
2. Verify email service configuration
3. Test with different browsers
4. Check for JavaScript errors in console

### Issue: Poor performance
1. Run PageSpeed Insights
2. Optimize images (compress, WebP format)
3. Enable caching
4. Minify CSS/JS
5. Use CDN

### Issue: Not indexed by Google
1. Verify Search Console ownership
2. Submit sitemap manually
3. Check robots.txt isn't blocking
4. Request indexing via Search Console
5. Ensure no meta noindex tags

## 📱 Mobile App (PWA)

To enable Progressive Web App features:

1. **Update manifest.json** with real icon paths
2. **Create Service Worker** (`sw.js`):
```javascript
const CACHE_NAME = 'ai-data-solutions-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

3. **Register Service Worker** in script.js (already included)

## 📞 Support

For deployment issues:
- Check hosting provider documentation
- Review error logs
- Search Stack Overflow
- Contact hosting support

## 🎉 Congratulations!

Your AI Data Solutions website is now live! Monitor performance and continuously improve based on analytics and user feedback.

---

**Last Updated**: September 30, 2025