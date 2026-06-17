# PT. NUSA ALAM KOMODITAS INDONESIA — Company Profile Website

Official company profile website for **PT. Nusa Alam Komoditas Indonesia**, an Indonesian wholesale trading company specializing in agricultural commodities, forestry products, energy resources, and warehousing solutions.

> 🇮🇩 Versi Bahasa Indonesia tersedia di bawah / Indonesian version available below.

---

## 🌍 Overview

PT. Nusa Alam Komoditas Indonesia connects global buyers and partners with Indonesia's vast natural commodity resources — from rice, palm oil, and timber to fuel, livestock, and cold-chain logistics.

This website serves as the company's primary digital presence for international and domestic clients.

---

## 🌿 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## 📁 Project Structure

```
nusa-alam-komoditas/
├── public/
│   ├── favicon.ico
│   └── og-image.png              # Open Graph image for SEO / social sharing
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky navbar, active-section highlight, mobile menu
│   │   │   ├── Footer.tsx        # Footer navigation, social media, copyright
│   │   │   ├── FloatingWA.tsx    # Floating WhatsApp button
│   │   │   └── ScrollToTop.tsx   # Scroll-to-top button
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Fullscreen hero, animated tagline, CTA
│   │   │   ├── Stats.tsx         # Company key statistics
│   │   │   ├── HighlightBisnis.tsx  # Preview of 4 main business categories
│   │   │   └── MitraStrip.tsx    # Client / partner logo strip
│   │   ├── about/
│   │   │   ├── CompanyProfile.tsx   # Company history & profile
│   │   │   ├── VisiMisi.tsx         # Vision, mission & values
│   │   │   ├── Manajemen.tsx        # Management team profiles
│   │   │   └── Legalitas.tsx        # Legal standing, PT registration & KBLI codes
│   │   ├── business/
│   │   │   ├── BusinessLines.tsx    # 36 KBLI business lines with category filter
│   │   │   └── BusinessCard.tsx     # Individual business line card
│   │   ├── services/
│   │   │   └── Services.tsx         # Services: wholesale trading, export, distribution
│   │   ├── warehouse/
│   │   │   ├── WarehouseHero.tsx    # Warehouse & logistics intro
│   │   │   ├── ResiGudang.tsx       # Warehouse Receipt System (KBLI 52101)
│   │   │   ├── GudangDingin.tsx     # Cold Storage (KBLI 52102)
│   │   │   └── FasilitasMap.tsx     # Warehouse facility locations
│   │   ├── news/
│   │   │   ├── NewsList.tsx         # Article list with category filter
│   │   │   └── NewsCard.tsx         # Article card component
│   │   └── contact/
│   │       ├── ContactForm.tsx      # Contact form with TypeScript validation
│   │       ├── ContactInfo.tsx      # Address, phone, email
│   │       └── MapEmbed.tsx         # Google Maps embed
│   ├── pages/
│   │   ├── Home.tsx              # Home page
│   │   ├── About.tsx             # About Us page
│   │   ├── BusinessLines.tsx     # Business Lines page
│   │   ├── Services.tsx          # Services page
│   │   ├── Warehouse.tsx         # Warehouse & Logistics page
│   │   ├── News.tsx              # News & Articles page
│   │   ├── NewsDetail.tsx        # Article detail page
│   │   ├── Contact.tsx           # Contact page
│   │   ├── Privacy.tsx           # Privacy Policy (optional)
│   │   └── NotFound.tsx          # 404 page
│   ├── data/
│   │   ├── businessLines.ts      # 36 KBLI business line data
│   │   ├── services.ts           # Company services data
│   │   ├── news.ts               # Sample news/article data
│   │   └── management.ts         # Management team data
│   ├── types/
│   │   └── index.ts              # TypeScript type definitions
│   ├── hooks/
│   │   ├── useActiveSection.ts   # Hook to detect active navbar section
│   │   └── useScrollReveal.ts    # Hook for scroll-triggered animations
│   ├── i18n/
│   │   ├── en.ts                 # English translations
│   │   └── id.ts                 # Indonesian translations
│   ├── App.tsx                   # Main router
│   ├── main.tsx
│   └── index.css                 # Tailwind directives + custom CSS
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9+, yarn, or pnpm

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/your-org/nusa-alam-komoditas.git
cd nusa-alam-komoditas

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build       # Output to dist/ folder
npm run preview     # Preview the production build locally
```

---

## 🏗️ Setup from Scratch

```bash
npm create vite@latest nusa-alam-komoditas -- --template react-ts
cd nusa-alam-komoditas
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional dependencies
npm install lucide-react react-router-dom react-i18next i18next
npm install -D @types/react-router-dom
```

`tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest:   '#1A3A2A',   // Deep forest green — navbar, dark sections
        earth:    '#C4873A',   // Earth amber — accents, CTA, highlights
        cream:    '#F5F0E8',   // Warm cream — light section backgrounds
        charcoal: '#1C1C1C',   // Charcoal — body text
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 🗺️ Site Navigation

| Menu (EN) | Menu (ID) | Path | Content |
|---|---|---|---|
| Home | Beranda | `/` | Hero, stats, business highlights, partner logos |
| About Us | Tentang Kami | `/about` | History, vision & mission, management, legal |
| Business Lines | Bidang Usaha | `/business` | 36 KBLI lines with category filter |
| Services | Layanan | `/services` | Wholesale trading, export/import, distribution |
| Warehouse & Logistics | Gudang & Logistik | `/warehouse` | Warehouse receipt system, cold storage |
| News | Berita | `/news` | Company updates, commodity news, industry articles |
| Contact | Kontak | `/contact` | Contact form, map, WhatsApp CTA |

### Global Components
- **Sticky Navbar** — auto-highlights active route and scroll section
- **Floating WhatsApp** — WhatsApp quick contact button on all pages
- **Scroll to Top** — back-to-top button
- **Footer** — full navigation, social media, copyright

### Additional Pages (Optional)
- `/careers` — Job openings
- `/download` — Company profile PDF download
- `/privacy-policy` — Privacy policy
- `*` → `/404` — Not found page

---

## 🌐 Internationalization (i18n)

The website targets **global audiences** and supports two languages:

| Language | Code | Status |
|---|---|---|
| English | `en` | ✅ Primary |
| Indonesian | `id` | ✅ Secondary |

Language toggle is available in the navbar. Translations are managed via `react-i18next` under `src/i18n/`.

---

## 📋 Business Lines (KBLI)

PT. Nusa Alam Komoditas Indonesia holds **36 officially registered business classifications** (KBLI):

| KBLI | Business Line | Category |
|------|--------------|----------|
| 46201 | Wholesale Rice & Secondary Crops | Agriculture |
| 46202 | Wholesale Oil-Bearing Fruits (Palm Oil, Coconut) | Agriculture |
| 46204 | Wholesale Cut Tobacco | Agriculture |
| 46205 | Wholesale Live Animals | Agriculture |
| 46206 | Wholesale Live Fish & Aquatic Biota | Agriculture |
| 46207 | Wholesale Forestry & Hunting Products | Forestry |
| 46209 | Wholesale Other Agricultural Products & Live Animals | Agriculture |
| 46710 | Wholesale Solid, Liquid & Gas Fuels | Energy |
| 46315 | Wholesale Vegetable Oils & Fats | Agriculture |
| 52101 | Warehouse Receipt System Management | Logistics |
| 52102 | Cold Storage Activities | Logistics |
| 01121 | Hybrid Rice Farming | Agriculture |
| 01122 | Inbred Rice Farming | Agriculture |
| 01139 | Other Tuber Crops Farming (Sweet Potato, Taro, Porang, etc.) | Agriculture |
| 01499 | Other Animal Husbandry & Breeding (Guinea Pig, Dog, Cat, Cricket, etc.) | Agriculture |
| 03221 | Freshwater Finfish Aquaculture (Non-Ornamental, Unprotected) | Aquaculture |
| 03223 | Freshwater Aquatic Plant Cultivation (Unprotected) | Aquaculture |
| 77392 | Rental & Leasing of Agricultural Machinery & Equipment | Rental |
| 77394 | Rental & Leasing of Office Machinery & Equipment | Rental |
| 79129 | Other Travel Agency Activities | Services |
| 82921 | Packaging of Agricultural, Forestry & Fishery Products | Logistics |
| 82922 | Packaging of Processed Food & Beverage Products | Logistics |
| 82929 | Other Packaging Activities | Logistics |
| 46738 | Wholesale Various Building Materials (Cement, Sand, Nails, Paint, etc.) | Construction |
| 46735 | Wholesale Porcelain Construction Materials (Toilets, Sinks, Tiles, etc.) | Construction |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `forest` | `#1A3A2A` | Navbar, dark section backgrounds |
| `earth` | `#C4873A` | Accents, CTA buttons, highlights |
| `cream` | `#F5F0E8` | Light section backgrounds |
| `charcoal` | `#1C1C1C` | Body text |

### Typography

- **Display:** Playfair Display — hero headings & section titles
- **Body:** Inter — paragraphs, labels, UI elements

### Design Principles

- Fullscreen hero with topographic / archipelago texture, reflecting "Nusa" (island) and Indonesia's natural wealth
- Business grid grouped by category: Agriculture, Aquaculture, Construction, Energy, Forestry, Logistics, Rental, Services
- Consistent earthy palette reflecting the commodities industry

---

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Bilingual support — English & Indonesian (react-i18next)
- ✅ Multi-page routing with React Router v6
- ✅ Sticky navbar with active route & scroll section highlight
- ✅ Floating WhatsApp button on all pages
- ✅ Smooth scroll between sections
- ✅ Scroll-triggered animations (Intersection Observer)
- ✅ Business line filter by category
- ✅ Contact form with TypeScript validation
- ✅ Google Maps embed on Contact page
- ✅ SEO-ready meta tags per page
- ✅ Open Graph image for social media sharing
- ✅ `prefers-reduced-motion` support
- ✅ Keyboard accessible (WCAG 2.1 AA)

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Nginx (Self-hosted)

```nginx
server {
    listen 80;
    server_name nusaalamkomoditas.com;
    root /var/www/nusa-alam/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch: `git checkout -b feat/feature-name`
3. Commit your changes: `git commit -m "feat: add feature X"`
4. Push to branch: `git push origin feat/feature-name`
5. Open a Pull Request

---

## 📄 License

Copyright © 2025 PT. Nusa Alam Komoditas Indonesia. All rights reserved.

---

## 📞 Contact

**PT. Nusa Alam Komoditas Indonesia**  
Ruko Gading Shopping Arcade, Blok B No. 8 BJ - BH, Jalan Tanjung Duren, Tj. Duren Sel., Jakarta Barat, 11470  
🌐 [nusaalamkomoditas.com](https://nusaalamkomoditas.com)  
📧 info@nusaalamkomoditas.com  
📱 WhatsApp: [+62 817-671-2525](https://wa.me/628176712525)

---

---

# 🇮🇩 Versi Bahasa Indonesia

Website company profile resmi **PT. Nusa Alam Komoditas Indonesia**, perusahaan perdagangan besar komoditas pertanian, kehutanan, energi, dan pengelolaan gudang di Indonesia.

## Cara Menjalankan

```bash
git clone https://github.com/your-org/nusa-alam-komoditas.git
cd nusa-alam-komoditas
npm install
npm run dev
```

## Struktur Menu

| Menu | Path | Konten |
|------|------|--------|
| Beranda | `/` | Hero, statistik, highlight bisnis, logo mitra |
| Tentang Kami | `/about` | Sejarah, visi & misi, manajemen, legalitas |
| Bidang Usaha | `/business` | 36 KBLI dengan filter kategori |
| Layanan | `/services` | Perdagangan besar, ekspor/impor, distribusi |
| Gudang & Logistik | `/warehouse` | Resi gudang (52101), gudang dingin (52102) |
| Berita | `/news` | Artikel perusahaan & update industri |
| Kontak | `/contact` | Form, peta, WhatsApp CTA |

## Internasionalisasi

Website ini mendukung dua bahasa — **English (utama)** dan **Bahasa Indonesia** — dengan toggle bahasa di navbar menggunakan `react-i18next`.
