import { defineConfig } from 'astro/config';

// Ace Factory corporate site — static output (Phase 1)
// Hosting: Cloudflare Pages (adapter to be added post-Phase-1 if SSR needed)
export default defineConfig({
  site: 'https://afactory.example.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  image: {
    // Use the default sharp-based service for WebP/AVIF conversion
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
