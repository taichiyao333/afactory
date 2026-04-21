# Ace Factory — Corporate Site (Astro)

Production implementation of the Ace Factory corporate / venue site.

- **Stack**: Astro 5.x (static output) + TypeScript + Content Collections
- **Hosting target**: Cloudflare Pages (static, JP edge)
- **Design source**: `../../templates/ace-factory/` (single source of truth for brand tokens, assets, and content)

## Prerequisites

- **Node.js**: 20 LTS or 22 LTS (developed against 22.x)
- **Package manager**: npm (bundled with Node). Yarn / pnpm untested — stick with npm unless you know what you're doing.

## Setup

```bash
cd apps/corporate-site
npm install
npm run dev
```

Dev server runs on `http://localhost:4321`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Build static output to `dist/` |
| `npm run preview` | Preview the built output locally |
| `npm run check` | Run `astro check` (TypeScript + Content Collections schema validation) |
| `npm run astro` | Invoke the Astro CLI directly |

Run `npm run check` before every commit — it catches content schema violations (missing fields in `sites/*.json`) at build time.

## Directory structure

```
apps/corporate-site/
├── astro.config.mjs       ← Astro configuration
├── package.json
├── tsconfig.json
├── public/                ← Static files served as-is (robots.txt, favicon.ico)
└── src/
    ├── content.config.ts  ← Content Collections schema (Zod)
    ├── layouts/
    │   └── BaseLayout.astro  ← <html>/<head> wrapper, fonts, global CSS, OG/Twitter meta
    ├── styles/
    │   └── global.css        ← Imports design tokens from templates/ace-factory/
    ├── lib/
    │   └── TemplateImage.astro  ← Helper: resolves JSON asset strings to optimised images
    ├── components/           ← One .astro file per section (Nav, Hero, ...)
    └── pages/
        ├── index.astro       ← "/" — corporate top page
        └── venues/
            └── [slug].astro  ← "/venues/<slug>" — per-venue page (auto-generated)
```

## Relationship to `templates/ace-factory/`

This app is a **consumer** of the design template — it does not redefine brand assets. The template directory is the single source of truth:

| Template path | How this app uses it |
|---|---|
| `templates/ace-factory/colors_and_type.css` | `@import`ed from `src/styles/global.css` — brand tokens + font imports |
| `templates/ace-factory/content/sites/*.json` | Loaded via Content Collections `glob()` loader — venue content data |
| `templates/ace-factory/assets/` | Imported via `TemplateImage.astro` helper — resolved to optimised images at build time |
| `templates/ace-factory/ui_kits/corporate-site/*.jsx` | Design reference only — kept for visual inspection in a browser; not imported |

**Do not duplicate assets or tokens in `apps/corporate-site/`.** Always update the template first.

## Adding a new venue

The multi-venue site generation is schema-driven. To add a new venue (e.g. CLUB A):

1. Copy `templates/ace-factory/content/sites/reims.json` → `templates/ace-factory/content/sites/a.json`
2. Update all fields in the new JSON (`venue.id`, `venue.nameEn`, `hero.logo`, `hero.image`, etc.)
3. Ensure referenced assets exist under `templates/ace-factory/assets/`
4. From `apps/corporate-site/`, run:
   ```bash
   npm run check   # Validates schema — fails fast on missing fields or asset paths
   npm run build   # Generates dist/venues/a/index.html automatically
   ```

No component code changes are needed — `src/pages/venues/[slug].astro` picks up new JSON files automatically via Astro's `getStaticPaths`.

## Brand rules

Read `../../CLAUDE.md` and `../../templates/ace-factory/README.md` before any visual change. Key prohibitions:

- No new accent colors (orange `#E8743C` is the only saturated hue)
- No shadows / glows / gradients
- No pill shapes (max radius 4px for cards, 2px for buttons)
- Body `line-height: 1.9` is non-negotiable for JP text
- No emoji / Unicode symbol icons
- No urgency language ("今すぐ" / "限定" / etc.)

## Build output

`npm run build` produces a fully static site in `dist/`:

```
dist/
├── index.html
├── venues/
│   └── reims/index.html
├── _astro/                ← Hashed CSS / JS / optimised images (WebP/AVIF)
└── robots.txt
```

Deploy by pointing Cloudflare Pages at this repo with:
- **Build command**: `cd apps/corporate-site && npm install && npm run build`
- **Output directory**: `apps/corporate-site/dist`

## Roadmap

See `../../templates/ace-factory/HANDOFF.md` for the backlog. Near-term:

- Port remaining 5 venue JSONs (a / raise / nils / fujisaki / gclass)
- About / Service detail / Interview detail / News index / Recruit form pages
- Mobile responsive layout (<768px)
- Real favicon / OG image artwork
- Cloudflare Pages deploy configuration
