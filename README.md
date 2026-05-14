# Infrastructure & Cloud Consulting — Personal Website

A clean, dark editorial website for an infrastructure and cloud solution architect. Built with vanilla HTML, CSS, and minimal JavaScript — no frameworks, no build tools, zero dependencies.

## Structure

```
/
├── index.html          # Homepage (hero, expertise, sectors, ecosystem, experience, certs, contact)
├── blog.html           # Blog listing page with tag filtering
├── style.css           # Shared stylesheet (all pages)
├── blog/
│   ├── openshift-on-nutanix.html
│   ├── entra-migration.html
│   ├── hci-dr-design.html
│   ├── vsan-vs-nutanix.html
│   ├── veeam-immutable.html
│   └── horizon-vdi-scale.html
└── README.md
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a root site, or any name for a project site)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
5. Click **Save** — your site will be live in ~60 seconds

For a custom domain (e.g. `yourdomain.com`):
- Add a `CNAME` file to the root with your domain on a single line
- Point your domain's DNS A records to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

## Adding a new blog post

1. Copy any existing file from `/blog/` as a template
2. Update: `<title>`, meta description, `.blog-meta` (date + tags), `<h1 class="post-headline">`, and the article body
3. Add the post to `blog.html` — copy an existing `.blog-card` block and update the link, `data-tags`, date, tag spans, title, and excerpt
4. Optionally link from `index.html` in the "Latest writing" section (keep to 3 most recent)

## Customisation

- **Name / mark**: Search for `Solution Architect` across all files to update the nav brand mark
- **Contact info**: Update `index.html` `#contact` section — currently shows blog URL and location
- **Stats**: Update the 4 stat numbers in `index.html` hero section (`12+`, `50+`, `12`, `6`)
- **Colours**: All colour tokens are CSS variables in `:root` in `style.css`
- **Fonts**: Google Fonts imports at top of `style.css` — Cormorant Garamond (serif) + DM Mono

## Design notes

- Dark theme, editorial aesthetic
- Cormorant Garamond + DM Mono type pairing
- Mobile responsive with hamburger nav
- Blog has client-side tag filtering (no server needed)
- No analytics, no cookies, no trackers — add if needed
