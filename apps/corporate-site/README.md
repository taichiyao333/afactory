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
├── public/                ← Static files served as-is (robots.txt, favicon.svg)
├── functions/             ← Cloudflare Pages Functions (Basic Auth middleware)
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
├── _astro/                ← Hashed CSS / JS / optimised images (WebP)
└── robots.txt
```

See [Cloudflare Pages deployment](#cloudflare-pages-deployment) below for the full deploy procedure.

## Cloudflare Pages deployment

### Required settings

| Field | Value |
|---|---|
| Production branch | `main` |
| Root directory | **`apps/corporate-site`** (important — see below) |
| Build command | `npm install && npm run build` |
| Build output directory | `dist` |
| Framework preset | **None** (manual config; Astro preset assumes repo root) |
| Node.js version | `22` (set via `NODE_VERSION` env var) |

> **Why Root directory must be `apps/corporate-site`**: Cloudflare Pages discovers the `functions/` directory relative to the configured Root directory. Since our Basic Auth middleware lives at `apps/corporate-site/functions/_middleware.js`, Cloudflare won't find it unless Root directory points inside the app.

### Required environment variables

Three variables must be configured in the Cloudflare Pages dashboard before the site is usable:

| Name | Purpose | When to set |
|---|---|---|
| `BASIC_AUTH_USER` | Basic Auth username | Before first public deploy. Any non-empty string. |
| `BASIC_AUTH_PASS` | Basic Auth password | Before first public deploy. Treat as a secret. |
| `SITE_URL` | Absolute origin used for canonical URLs, OG `og:url`, Twitter Card URLs | After a custom domain is connected. Until then, Astro falls back to `CF_PAGES_URL` (auto-injected by Cloudflare) so canonicals remain correct on preview URLs. |
| `NODE_VERSION` | Pin Node major version for the build | Before first deploy. Set to `22`. |

#### Setting variables in the dashboard

> **The correct dashboard path is `Settings → Variables and Secrets`** — not the older "Environment variables" entry that some legacy guides reference. Variables set under "Variables and Secrets" are exposed to **both** build-time (`process.env`) **and** Function runtime (`context.env`). Variables set in any other location may only reach the build, leaving Function runtime undefined.

1. Open the Pages project: **Dashboard → Workers & Pages → `<your-project>`**
2. Navigate to **Settings → Variables and Secrets**
3. Click **Add** and for each variable enter:
   - **Name**: e.g. `BASIC_AUTH_PASS`
   - **Value**: the actual value
   - **Type**:
     - `BASIC_AUTH_USER`, `SITE_URL`, `NODE_VERSION` → `Plaintext`
     - `BASIC_AUTH_PASS` → `Secret` (value is hidden after save and only readable from `context.env`)
   - **Environment**: tick `Production` (and `Preview` if you also gate preview deploys)
4. Click **Save**
5. **Redeploy** the project (**Deployments → latest → Retry deployment**). Variables that already existed at build time apply to *new* deploys; runtime-only changes (e.g. flipping a value) take effect on the next request after redeploy.

#### Diagnosing a 503 from the Function

If the Function returns the JSON 503 response (`"Site not configured"`), inspect the `envKeysReceived` array in the body. It lists exactly which env names are visible to the Function at runtime. If `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` are missing from that array, the variables were either set in the wrong location, set under the wrong environment scope, or the deploy that ran did not include them. Add or move them under **Variables and Secrets → Production** and redeploy.

### Basic Auth behaviour

The site is gated by `apps/corporate-site/functions/_middleware.js` which runs before any static asset is served. Its behaviour is deliberately **fail-closed**:

| State | Response | Notes |
|---|---|---|
| `BASIC_AUTH_USER` or `BASIC_AUTH_PASS` missing / empty | **503 Service Unavailable** with an explanatory message | Prevents accidental public exposure on misconfigured deploys |
| `Authorization` header missing or malformed | **401** with `WWW-Authenticate: Basic realm="Ace Factory"` — browser shows the native credential dialog | Standard HTTP Basic flow |
| Credentials do not match | **401** with the same challenge header | Username and password are compared in **constant time** to resist timing attacks |
| Credentials match | Forwarded to the static asset (normal 200 response) | |

### Enabling / disabling Basic Auth

Because the middleware is fail-closed, there are three possible states:

| Goal | How |
|---|---|
| **Gate the site (default)** | Keep `functions/_middleware.js` in the repo. Set `BASIC_AUTH_USER` and `BASIC_AUTH_PASS` in the dashboard. |
| **Keep the site locked without auth dialog** | Keep `functions/_middleware.js` but unset the env vars → all requests get 503. Useful for "indefinitely unavailable" states. |
| **Publish publicly (no auth)** | Delete `apps/corporate-site/functions/_middleware.js`, commit, and push. Cloudflare auto-redeploys without a middleware, and the site becomes public. |

Don't try to disable auth by leaving the file but manipulating env vars — there is no "off" env var. The gate lives in code, not config, to make the public/private state reviewable in version control.

### First-deploy checklist

1. Push latest `main` (this repo already has the Function and Astro config)
2. Create the Cloudflare Pages project with the settings above
3. Set `NODE_VERSION=22`, `BASIC_AUTH_USER`, `BASIC_AUTH_PASS` in **Production** and **Preview** env scopes
4. Trigger a deploy; wait for green build
5. Visit the `*.pages.dev` URL — browser should prompt for Basic Auth
6. Enter the credentials you set; the full site should load
7. (Optional) Connect a custom domain and set `SITE_URL` to its `https://` origin, then redeploy

## Roadmap

See `../../templates/ace-factory/HANDOFF.md` for the backlog. Near-term:

- Port remaining 5 venue JSONs (a / raise / nils / fujisaki / gclass)
- About / Service detail / Interview detail / News index / Recruit form pages
- Mobile responsive layout (<768px)
- Real favicon / OG image artwork
- Cloudflare Pages deploy configuration
