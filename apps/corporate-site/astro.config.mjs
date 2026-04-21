import { defineConfig } from 'astro/config';

// Ace Factory corporate site — static output (Phase 1)
// Hosting: Cloudflare Pages (adapter to be added post-Phase-1 if SSR needed).
//
// `site` resolution order (evaluated at build time):
//   1. SITE_URL            — set explicitly in Cloudflare dashboard after the
//                            production custom domain is connected.
//   2. CF_PAGES_URL        — auto-injected by Cloudflare Pages on every build
//                            (the preview / default *.pages.dev URL). Keeps
//                            canonical URLs correct on the very first deploy.
//   3. http://localhost:4321 — local dev fallback.
const site =
  process.env.SITE_URL ||
  process.env.CF_PAGES_URL ||
  'http://localhost:4321';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  image: {
    // Default sharp-based service produces WebP from source PNGs.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
