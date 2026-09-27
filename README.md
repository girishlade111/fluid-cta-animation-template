# Fluid CTA Animation Template

A Next.js landing-page hero template featuring an **expandable CTA card** with a fluid shared-layout animation (Framer Motion) over an animated WebGL shader background (GodRays + MeshGradient from Paper Shaders). Clicking the pill-shaped call-to-action button morphs it into a full contact card via smooth layout morphing.

Originally generated with [v0.app](https://v0.app); now maintained as a standalone template.

## Features

- **Expandable CTA card** — pill button morphs into a full contact form card with a smooth shared-layout (`layoutId`) transition
- **Animated shader background** — GodRays light rays + mesh gradient, rendered with `@paper-design/shaders-react`
- **Framer Motion animations** — `AnimatePresence`-driven expand/collapse, body scroll-lock while the card is open
- **Responsive design** — mobile-first layout with Tailwind CSS
- **Dark/light theme support** — `next-themes` provider with `theme-provider` component
- **Radix UI primitives** — accessible dialog, dropdown, tabs, accordion and more, ready to use
- Static-export ready — no API routes, no server actions, fully client-side

## Tech Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS 4, tailwindcss-animate, tw-animate-css
- **Animation:** framer-motion
- **Shaders:** @paper-design/shaders-react
- **UI:** Radix UI primitives, lucide-react icons, class-variance-authority, clsx, tailwind-merge
- **Forms:** react-hook-form, zod, @hookform/resolvers
- **Charts:** recharts (available as a dependency)

## Quick Start

```bash
# Install dependencies (npm recommended on this setup)
npm install --legacy-peer-deps

# Run the dev server
npm run dev
# open http://localhost:3000

# Build for production (static export)
npm run build
# static output is written to ./out
```

## Project Structure

```
app/                # Next.js App Router
  layout.tsx        # root layout (fonts, theme provider, metadata)
  page.tsx          # home page — renders the Hero
  globals.css       # Tailwind + global styles
components/
  hero.tsx          # the animated CTA hero section (main component)
  theme-provider.tsx
lib/
  utils.ts          # cn() class-merging helper
public/             # static assets / placeholder images
styles/             # extra styles
next.config.mjs     # static export (output: 'export'), unoptimized images
```

## How the CTA Animation Works

1. A pill-shaped button renders with `layoutId="cta-card"` and a blurred blue background blob.
2. Clicking it sets `isExpanded`, and Framer Motion's shared-layout engine morphs the pill into a full-size card.
3. `AnimatePresence` fades the card content in; the button scales away.
4. While expanded, `document.body` overflow is locked; clicking the X button collapses back.

## Env Vars

None required. The template runs entirely client-side.

## Deployment

The site is a fully static export (`output: 'export'` in `next.config.mjs`):

- **GitHub Pages** — build with `npm run build` and publish the `out/` folder to the `gh-pages` branch.
- **Vercel** — import the repo; no build overrides needed.
- **Any static host** (Netlify, Cloudflare Pages) — publish directory is `out/`.

Note: the GitHub Pages build uses `basePath`/`assetPrefix` for the `/<repo>` subpath in `next.config.mjs`; if you deploy to a root domain (e.g. Vercel), remove those settings.

---

Built by Girish Lade — https://ladestack.in
