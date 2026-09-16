# Manwa Partners static website

A framework-free static website built for Cloudflare Pages.

## Included

- `index.html` - homepage
- `about.html` - About page
- `pricing.html` - campaign structures
- `blog.html` - Insights page
- `404.html` - custom not-found page
- `styles.css` - responsive design and animations
- `script.js` - navigation, reveals, footer year, and contact helper
- `assets/` - logo, favicon, and social preview image
- `_headers` - Cloudflare security and caching headers
- `robots.txt` and `sitemap.xml` - SEO basics

## Before publishing

Search the project for:

`support@manwapartners.org`

Replace it if you choose another business email.

The contact form is intentionally static. It opens the visitor's email application with the form information filled in. Later, you can connect a dedicated form endpoint or Cloudflare Pages Function.

## Local preview

### VS Code

Install the **Live Server** extension, open `index.html`, then choose **Open with Live Server**.

### Or use Python

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub

```bash
git init
git add .
git commit -m "Initial Manwa Partners website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Cloudflare Pages Git integration

Recommended configuration for this static site:

- Framework preset: **None**
- Production branch: **main**
- Build command: **exit 0**
- Build output directory: **.**

Cloudflare Pages supports framework-free static HTML sites. Test the generated `*.pages.dev` URL first, then connect `manwapartners.com`.

## Positioning choice

The homepage is now focused on **Mobile Tech & Wearables**, with Mobile Tech and Wearables treated as closely related pillars. The site emphasizes smartphones, foldables, smartwatches, fitness wearables, smart rings, mobile audio, accessories, reviews, comparisons, tests, and buyer-intent YouTube content.
