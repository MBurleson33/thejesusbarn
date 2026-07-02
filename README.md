# The Jesus Barn
### thejesusbarn.org · Piedmont, Oklahoma

A free Christian community gathering space coming to Piedmont, Oklahoma. Built by the community, for the community, with Jesus as our guide.

---

## About

The Jesus Barn is a vision for a permanent free gathering space in Piedmont, Oklahoma — offering free coffee, Bible study, prayer, games, and more. No membership. No fee. No strings attached. Just love.

This repository contains the full website for The Jesus Barn LLC.

---

## Features

- **Homepage** — Hero, before/after barn slider, video section, community wall, get involved form, REAP Fund section, contact
- **Give Page** (`/give`) — Stripe payment integration with one-time and monthly giving, Apple Pay support, cover-the-fee checkbox
- **REAP Fund Page** (`/needs`) — Community needs nomination form, public needs wall, The REAP Fund giving section
- **Admin Panel** — Password-protected panel with tabs for Funding, Giving, Needs Wall, Signups, Community Wall, and Announcement
- **Community Wall** — Approved posts with fullscreen carousel
- **Announcement Banner** — Dismissable top banner driven by Google Sheets

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Plain HTML / CSS / JS (no frameworks) |
| Hosting | Vercel (auto-deploy from GitHub) |
| Backend | Google Apps Script + Google Sheets |
| Payments | Stripe (card, Apple Pay, Google Pay) |
| Email | Google Workspace (`hello@thejesusbarn.org`) |
| Forms | Google Apps Script (no third-party form services) |
| DNS | Namecheap |

---

## Project Structure

```
/
├── index.html              # Main site
├── give/
│   └── index.html          # Stripe donation page (/give)
├── needs/
│   └── index.html          # REAP Fund / community needs page (/needs)
├── api/
│   ├── auth.js             # Admin authentication
│   ├── verify.js           # Token verification
│   ├── donate.js           # Stripe payment intent creation
│   └── giving.js           # Stripe giving history for admin
├── images/                 # Logo, barn photos, OG image
├── 404.html                # Custom not found page
├── privacy-policy.html     # Privacy policy
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine rules
├── package.json            # Stripe npm dependency
└── vercel.json             # Vercel routing config
```

---

## Environment Variables (Vercel)

| Variable | Purpose |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key for payment processing |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `ADMIN_PASSWORD` | Admin panel password |
| `TOKEN_SALT` | Salt for admin session tokens |

---

## Domains

Primary: `thejesusbarn.org`
Redirects: `thejesusbarn.com`, `jesusbarncommunity.org`, `jesusbarncommunity.com`, `thejesusbarncommunity.org`, `thejesusbarncommunity.com`

---

## The REAP Fund

**R** — Radical Generosity · **E** — Enthusiastic Heart · **A** — Abundant Blessings · **P** — Purposeful Impact

*"Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously."* — 2 Corinthians 9:6

---

© 2026 The Jesus Barn LLC · Piedmont, Oklahoma
