---
name: ace-factory-design
description: Use this skill to generate well-branded interfaces and assets for Ace Factory (エースファクトリー), the Kitashinchi night-entertainment brand. Covers colors, typography, fonts, photography, tone of voice, and reusable UI kit components for the corporate/venue website. Suitable for both production code and throwaway prototypes/mocks.
user-invocable: true
---

# Ace Factory — Design Skill

Read `README.md` in this directory first — it contains the brand concept, voice, visual foundations, and content fundamentals.

## When invoked

If the user invokes this skill without other guidance, ask what they want to build or design, gather a handful of focused questions, then act as an expert designer who outputs HTML artifacts **or** production code depending on need.

## Quick facts

- **Brand:** Ace Factory (エースファクトリー) — corporate operator of 6 Kitashinchi, Osaka clubs
- **Concept:** 感謝を基盤に、人と向き合う
- **Tone:** Quiet, refined, unpretentious — Kitashinchi-worthy composure
- **Palette:** strictly monochrome on black (`#000` / `#1A1A1A` / `#0D0D0D` + white/grey text) with one warm accent `#E8743C` reserved for CTAs and the Recruit band only
- **Type:** Cormorant Garamond (EN display) + Noto Serif JP (headings) + Noto Sans JP (body). Body line-height 1.9 is non-negotiable.
- **No:** shadows, gradients, emoji, urgency language, pill shapes, geometric sans for display

## How to use this skill

- For visual artifacts (slides, mocks, throwaway prototypes): copy assets out of `assets/` into the artifact and render static HTML.
- For production code: import `colors_and_type.css` tokens, reuse the JSX components under `ui_kits/corporate-site/`, and follow the rules documented in `README.md`.

## Files in this skill

| File | Purpose |
|---|---|
| `README.md` | Full brand system — voice, visuals, iconography, manifest |
| `colors_and_type.css` | CSS custom properties + semantic classes + Google-Fonts imports |
| `assets/logos/` | 6 venue wordmarks (PNG) |
| `assets/venues/` | Interior photography, hero-grade |
| `assets/people/` | Reference portraits (CEO, cast) |
| `assets/events/` | Event-poster stills |
| `preview/` | Design-system spec cards (tokens, specimens, components) |
| `ui_kits/corporate-site/` | Full Top-page recreation with reusable JSX components |

## Do

- Use two-tier section headings: an EN Cormorant wordmark with a muted JP subtitle underneath.
- Leave generous whitespace. Vertical section padding 120–160 px.
- Let dark photography do the visual work — don't overlay gradients on it.
- Use the ghost (white-border) button as the default; reserve the filled orange button for the one or two places on a page where action matters.
- Write copy in Japanese first, in です・ます form, with short sentences.

## Don't

- Don't introduce any new saturated colour, anywhere.
- Don't add shadows, glows, or drop-shadows — elevation is surface colour.
- Don't use emoji, Unicode symbol icons, or exclamation marks.
- Don't swap Cormorant or Noto for a geometric sans / generic serif.
- Don't tighten body line-height below 1.9 for JP text.
