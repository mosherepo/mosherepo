## Your Agency Website

Static, SEO-focused website for AI, Data, DevOps, ERP, Database, and Outsourcing services.

### Run locally
Use any static server. For example:

```bash
cd /workspace/website
python3 -m http.server 8080
```

Open `http://localhost:8080`.

### Deploy
- Any static host (Netlify, Vercel, S3+CloudFront, GitHub Pages)
- Ensure domain points to `https://www.youragency.com/` if using the provided canonicals

### SEO
- Per-page `<title>`, meta description, canonical
- OG/Twitter tags on Home
- robots.txt and sitemap.xml
- JSON-LD for Organization, WebSite, and Service pages

