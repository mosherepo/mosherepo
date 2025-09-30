## Data & AI Experts – Static Website

Production-ready static site optimized for SEO, focused on Data, AI, DevOps, ERP, Database, and Outsourcing services.

### Structure
- `index.html` – Homepage with FAQ schema and CTA form
- `services/` – AI, Data, DevOps, ERP, Database, Outsourcing pages
- `assets/css/styles.css` – Global responsive styles
- `assets/js/main.js` – Navigation toggle and contact form handler
- `assets/img/og-image.svg` – Social preview image (1200x630)
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `humans.txt`, `favicon.svg`

### Customize
1. Find/replace `www.yourdomain.com` with your domain
2. Update contact email in `index.html` and `assets/js/main.js`
3. Adjust copy per your positioning and target keywords

### Deploy
- Any static host (Netlify, Vercel, S3+CloudFront, GitHub Pages)
- Ensure `sitemap.xml` and `robots.txt` are served from the root
- Add your domain in DNS and set canonical URLs

### SEO
- Semantic HTML, fast CSS/JS, Open Graph + Twitter cards
- `FAQPage`, `Organization`, and `WebSite` structured data
- XML sitemap and robots allowlist

### Contact form
- The form posts to `/api/contact` via fetch; swap to your endpoint
- For Netlify, add `netlify` forms attributes; for serverless, provide an HTTP handler

- 👋 Hi, I’m @mosherepo
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
mosherepo/mosherepo is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
