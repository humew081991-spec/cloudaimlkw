# cloudaimlkw.com

Official website for **CloudAIML Kuwait** — IT Infrastructure & Cloud Consulting.

## 🌐 Live Site
[cloudaimlkw.com](https://cloudaimlkw.com)

## 🚀 Hosting
This site is hosted on **GitHub Pages** and served via a custom domain.

## 📁 Structure
```
/
├── index.html        # Main website (single-page)
├── CNAME             # Custom domain config for GitHub Pages
└── README.md
```

## ⚙️ Setup Instructions

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial site launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cloudaimlkw.com.git
git push -u origin main
```

### 2. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Source: `Deploy from a branch`
- Branch: `main` / `/ (root)`
- Click **Save**

### 3. Connect your domain
- In your domain registrar (where you bought cloudaimlkw.com), add these DNS records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

- In GitHub Pages settings, enter `cloudaimlkw.com` as your custom domain
- Check **Enforce HTTPS** (after DNS propagates, ~24hrs)

## ✏️ Customization Checklist
Before going live, update these in `index.html`:

- [ ] WhatsApp number (search `96500000000` → replace with your real number)
- [ ] Email address (`info@cloudaimlkw.com`)
- [ ] Hero stats (years, projects count)
- [ ] Contact form — wire up to Formspree or EmailJS for real submissions

## 📬 Contact Form (Free Option)
Sign up at [formspree.io](https://formspree.io), create a form, and replace the `handleSubmit` function with their endpoint.

---
Built with plain HTML/CSS/JS — no frameworks, no build step, instant deployment.
