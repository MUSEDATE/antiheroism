# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install         # install deps
npm run dev         # local dev server (http://localhost:3000)
npm run dev:poll    # same, with WATCHPACK_POLLING=true for filesystems where fs events don't fire (network mounts, some containers)
npm run build       # static export → ./out (this is what gets deployed)
npm run lint        # next lint
```

There are no tests in this repo.

## Architecture

This is a **static-exported Next.js 14 App Router** site — a single-page marketing/manifesto site for the Antiheroism studio. The build pipeline is constrained by `output: 'export'` in `next.config.js`, which means:

- No server components doing runtime work, no API routes, no `next/image` optimization (`images.unoptimized: true`).
- Any dynamic route (e.g. `app/projects/[slug]/page.tsx`) **must** export `generateStaticParams()` so it can be prerendered at build time. The slug list comes from `projects` in `app/site-content.ts` — adding a new project there is what makes a new `/projects/<slug>/` route exist after build.
- Deployment is automated: `.github/workflows/deploy.yml` runs `npm run build` on push to `main` and publishes `./out` to GitHub Pages. The custom domain `antiheroism.com` is set via the `CNAME` file at the repo root.

### Content / page split

All site copy (nav links, vision sections, approach sections, projects, etc.) lives in `app/site-content.ts` as typed exports. Pages import from there rather than hardcoding strings. When updating copy, edit `site-content.ts`; when adding a new section/page, create the route under `app/<segment>/page.tsx` and pull data from the same file.

Routes:
- `app/page.tsx` — home, composed of hero + vision/approach/projects/contact teaser sections
- `app/vision/page.tsx`, `app/approach/page.tsx`, `app/projects/page.tsx` — long-form sections
- `app/projects/[slug]/page.tsx` — per-project page, statically generated from `projects[]`

### Shared chrome and the `HomeMotion` client component

`app/components/site-header.tsx` and `site-footer.tsx` are plain server components rendered on every page. **`app/components/home-motion.tsx` is a `'use client'` component that is rendered on every page** (not only the home page) — despite the name. It owns all client-side behavior:

- The opening logo sequence (the full-screen "ANTIHEROISM" intro). It animates the opening logo toward the hero logo's measured position via CSS variables (`--opening-target-x/y/scale`) and persists "already seen" state in `localStorage` under the key `antiheroism-opening-seen`. The flag is also read by an inline `beforeInteractive` script in `app/layout.tsx` so the opening screen is suppressed before hydration on repeat visits — keep these two in sync if you change the storage key or the suppression behavior.
- `IntersectionObserver`s that toggle `is-visible` on `.reveal-block`, `is-active` on `.story-scene`, `is-highlighted` on `.keyword-highlight`, and `is-revealed` on `.reveal-words`. New animated content needs one of these class names plus the matching CSS in `globals.css`.
- A scroll-driven transform on `.brand-image`.

If you add a new page, render `<HomeMotion />` inside it for animations to work.

The `.reveal-words` elements come from the `WordReveal` server component in `app/components/text-reveal.tsx`: it splits a string into per-word `<span>`s, each carrying a `--i` index used by `globals.css` to stagger the reveal once `HomeMotion` adds `is-revealed`. Use it (not raw markup) for word-by-word headings — see `app/page.tsx` and `app/projects/[slug]/page.tsx`.

### Styling

Tailwind is configured (`tailwind.config.js`) but the design system is mostly **hand-written CSS in `app/globals.css`** — semantic class names like `page-shell`, `frame-layout`, `story-scene`, `type-display`, `reveal-block`. Prefer extending the existing class vocabulary over introducing ad-hoc Tailwind utility soup; the visual language is opinionated and consistent. Color tokens live as CSS custom properties on `:root` (e.g. `--bg`, `--text`, `--border`).

## Gotchas

- Because of static export, any new dependency on runtime Next.js features (middleware, server actions, dynamic params without `generateStaticParams`) will break `npm run build`. Verify with a build before assuming it works.
- The `out/` directory is the build artifact consumed by GitHub Actions. Don't edit it by hand; don't rely on its current contents being fresh.
- `app/site-content.ts` is the single source of truth for the nav (`siteLinks`) — adding a route requires adding an entry there for it to appear in the header.
- The root `index.html` is a standalone, hand-written prototype of the site and is **not** part of the Next.js build or the deployed output (`out/`). It is dead weight — don't edit it expecting to change the live site; the real pages live under `app/`.
- `README.md` is partly stale (it describes an older About/Products/Contact layout and a product called "atpify" that no longer matches `site-content.ts`). Trust `site-content.ts` and this file over the README for current structure.
