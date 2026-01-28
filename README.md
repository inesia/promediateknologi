# Promedia Teknologi Website

Modern website untuk Promedia Teknologi menggunakan Next.js 14 (App Router), Tailwind CSS, dan Framer Motion.

## Fitur

- ✅ Next.js 14 dengan App Router
- ✅ Tailwind CSS untuk styling
- ✅ Framer Motion untuk animasi
- ✅ SEO optimized dengan metadata lengkap
- ✅ Semantic HTML
- ✅ Core Web Vitals optimization
- ✅ Responsive design
- ✅ Glassmorphism header effect
- ✅ Floating animations pada hero section

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Buka [http://localhost:3000](http://localhost:3000) di browser

## Build untuk Production

```bash
npm run build
npm start
```

## Struktur Project

```
├── app/
│   ├── layout.tsx      # Root layout dengan metadata SEO
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Header dengan glassmorphism
│   └── Hero.tsx        # Hero section dengan floating elements
└── public/             # Static assets
```

## Teknologi

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Inter Font** - Google Fonts
