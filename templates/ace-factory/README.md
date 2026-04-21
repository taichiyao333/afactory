# Ace Factory Design System

Design language for **Ace Factory (エースファクトリー)** — a night-entertainment company operating high-end clubs in **Kitashinchi, Osaka**. This system governs the corporate/venue website and related brand surfaces.

> **Brand concept:** 感謝を基盤に、人と向き合う — "Built on gratitude, face to face with people."
>
> **Tone:** Quiet. Refined. Unpretentious. A composure worthy of Kitashinchi — Osaka's most storied nightlife district.

---

## Sources

- **Design reference PDF** — `uploads/A_Factory_HP_Top_260417.pdf` (Top page comp, 1440×9590, dated 2026/04/17)
- **GitHub repo** — `taichiyao333/afactory` *(currently returns 409 / empty; no source code available at the time of authoring. Content and structure below were derived entirely from the comp PDF and the written brief.)*

---

## Company & product context

Ace Factory is the holding company behind six venues in Kitashinchi, Osaka:

| Venue | Since | Address (抜粋) | Phone |
|---|---|---|---|
| **CLUB A** (エース) | 2013 | 大阪市北区堂島 1-3-3 北新地西辻ビル BF | 06-6452-0810 |
| **CLUB REIMS** (ランス) | 2018 | 大阪市北区堂島 1-4-20 第2ロイヤルビル 3F | 06-4795-0810 |
| **CLUB RAISE** (レイズ) | 2022 | 大阪市北区堂島 1-2-7 パーマリィ・イン堂島 6F | 06-6458-0810 |
| **CLUB NILS** (ニルス) | 2016 | 大阪市北区曽根崎新地 1-6-13 ニューセントラルビル B1F | 06-6342-0810 |
| **FUJISAKI** (藤崎) | — | 大阪市北区堂島 1-3-3 西辻ビル 2F | 06-6343-0128 |
| **G CLASS** (ジークラス) | 2022 | 大阪市北区堂島 1-2-7 パーマリィ・イン B1F E号室 | 06-4256-8686 |

The company represents itself (corporate) and its venues (店舗) on a single shared site. Each venue also has its own microsite at `club-<name>.jp.net`.

Primary audience is twofold — **guests** (prospective visitors, returning regulars) and **recruits** (cast and full-time staff). Both flows share the same visual vocabulary; Recruit is the only surface where the orange accent is allowed to lead.

---

## What's in this system

```
.
├── README.md                 ← you are here
├── SKILL.md                  ← cross-compatible skill manifest
├── colors_and_type.css       ← tokens + semantic styles, Google-Fonts imports
├── assets/
│   ├── logos/                ← 6 venue lock-ups (ornamental, near-white)
│   ├── venues/               ← 8 interior photographs (dark, warm, cinematic)
│   ├── people/               ← CEO portrait, cast portrait (reference)
│   └── events/               ← event poster stills (Halloween, Anniversary, Setsubun)
├── preview/                  ← Design-System tab cards (tokens, specimens, components)
│   ├── colors-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   ├── components-*.html
│   └── brand-*.html
├── ui_kits/
│   └── corporate-site/       ← Top page recreation + component set
│       ├── README.md
│       ├── index.html
│       └── *.jsx
└── uploads/                  ← original reference PDF + extracted raster sources
```

---

## Content fundamentals

Copy on the site is **quiet, respectful, and Japanese-led**, with English wordmarks doing the visual lifting. Rules we follow:

### Language & voice

- **Japanese is the primary language.** Every section has a JP headline and body. English appears above the JP headline as a one- or two-word **display wordmark** (e.g. `Our Philosophy / 私たちの理念`). This two-tier pattern is a defining motif — never break it.
- **First person plural, softened.** The company speaks as *私たち* ("we") and treats the reader as an implied *あなた*. Avoid *弊社* (too stiff) or directly addressing *お客様へ*. The reader is a companion, not a customer.
- **No exclamation marks.** No emoji. No aggressive CTAs ("今すぐ" "限定" "お得"). The brand sells composure, not urgency.
- **Short sentences, long thoughts.** Paragraphs break often; sentences end with 。 and the next line starts fresh. Example cadence from the comp:
  > 人を大切にすることが価値を生み、<br>
  > その価値がまた人を惹きつけていく。
- **Gratitude frame.** The word *ありがとう* and the concept of *感謝* recur — it is the brand's rhetorical anchor, surfaced in the CEO's message and reflected back in hospitality language.
- **Polite form (です・ます) throughout.** Never 断定 / commanding.

### Casing & punctuation

- English display words use **Title Case** (`Our Philosophy`, `Our Service`, `Message`, `Recruit`, `News`, `Access`).
- Small English subtitles use **italic Cormorant Garamond**, often romanising a Japanese name (`Ta k e s h i A y a t a`, `S h i n g e k i n o N o a`). **Letter-spacing is deliberately loose** to feel typeset, almost decorative.
- Dates use slash format with surrounding spaces: `2026 / 04 / 26`.
- Event dates pair kanji weekdays in parentheses: `4/13(月)～17(金)`, `10/30日(木)～31(金)`.

### Microcopy samples

- CTA labels: `More`, `View All`, `募集要項はこちら`
- Nav: `About Us`, `Service`, `Interview`, `News`, `Recruit`
- Recruitment categories: `女性キャスト / Cast Recruitment`, `男性正社員 / Full-Time Staff Recruitment`
- Access headers: `CLUB A (エース)`, `CLUB REIMS (ランス)` — English wordmark + katakana reading
- Motto-style lines (vertical tategaki is used for these): `自分でいられる場所。オンリーワンの`

### What NOT to write

- Never "Book now", "Join our team!", "Hurry" — use `募集要項はこちら`, `More`, `View All`.
- Avoid stock hospitality clichés ("最高のおもてなし", "贅沢なひととき"). The comp is notable for its restraint.
- Don't overuse the accent word *上質* — it appears 2–3 times across the whole Top page, no more.

---

## Visual foundations

### Palette

A strictly **monochrome base** with a single warm accent.

- `#000000` is the page; `#1A1A1A` is a card or subtle section break; `#0D0D0D` is the deepest surface (footer).
- White (`#FFFFFF`) carries body and headings. `#A0A0A0` is the default sub-copy grey. `#6B6B6B` is for captions and low-priority meta.
- **Orange (`#E8743C`)** is used only for primary CTAs and the Recruit band. It is the single saturated colour in the system — hover drops to `#D46329`. Do not introduce any other hue (no blue, no gold, no red) without a rename.
- Borders are kept barely-there: `#2A2A2A` for standard rules, `#404040` for emphasised breaks.

### Typography

- **Display (EN):** Cormorant Garamond, 400–500, 48–72 px, 0.02em tracking. Used for all section wordmarks and headlines.
- **Heading (JP):** Noto Serif JP, 300–400, 20–28 px, line-height 1.6. Sits directly under the English display.
- **Body (JP):** Noto Sans JP, 300–400, 15–16 px, line-height **1.9**, tracking 0.04em. The generous leading is non-negotiable — it's the system's breath.
- **Sub Latin:** Cormorant Garamond italic, 13–14 px, 0.05em tracking. For romanised names and Since years.

The Cormorant/Noto Serif pairing is the brand's fingerprint — never substitute Inter, Roboto, or a geometric sans for the display line.

### Space & layout

- **Vertical section padding 120–160 px.** Crowding a section is the fastest way to kill the brand.
- **Container max-width 1200 px.** Inner horizontal padding is 24 px mobile, 48 px desktop.
- **Component gaps 24–32 px.** Cards sit on black with small gaps; the black does the work.
- Grid tends to be `1 / 2 / 3`-column depending on surface. Venue grids are `3 × 2` at desktop.

### Imagery

Every hero shot and card image shares the same look:

- **Dark ambient interiors** — warm tungsten pools, mirrored walls, velvet booths, chandeliers, lacquered black floors. See `assets/venues/*.png`.
- **Subtle warm cast** (amber/copper), never cool/blue.
- **No overlays, no gradients baked on top.** The photography is already moody; the page relies on that directly.
- **Cast portraits are cropped 3:4 vertical**, lit cleanly against neutral/dark backgrounds, make-up visible but restrained.
- **Event posters are the single place where colour is allowed** (Setsubun red, Halloween orange). These live inside card frames and don't leak into the rest of the page.

### Motion & interaction

- **Fades and slow eases only.** No bounces, no spring overshoot, no motion-design flourishes.
- Default duration: `320ms cubic-bezier(0.22, 0.61, 0.36, 1)`.
- Hover on images: drop opacity to 0.85 or crossfade a second frame. Never scale.
- Hover on buttons: background shifts (primary → `#D46329`, ghost → white-10% fill). No shadow changes — shadows don't exist in this system.
- Press: no shrink. Either an opacity dip (0.7) or a brief background darkening.
- Link hover: underline fades in via `border-bottom`.

### Borders, shadows, radii

- **Radii are near-square.** 0 for sections, 2 px for buttons/inputs, 4 px maximum for cards. Nothing is pill-shaped. Nothing is round.
- **No drop shadows. No inner shadows. No glows.** Elevation is signalled by surface colour only (`#1A1A1A` on `#000`).
- **No gradients** anywhere except inside imported imagery. Do not invent one.
- Rules are hair-thin (`1px solid #2A2A2A`), used to separate Access entries and delimit footer bands.

### Transparency & blur

- Used extremely lightly: the nav shows a black transparent backdrop on scroll (`rgba(0,0,0,0.6)` + `backdrop-filter: blur(12px)`).
- Ghost buttons use white@10% on hover (`rgba(255,255,255,0.1)`).
- No frosted glass on content surfaces.

### Layout rules & fixed elements

- **Top nav** is fixed at 72 px desktop / 56 px mobile, transparent over hero, adds a 60% black backdrop after ~80 px of scroll.
- **Hero** is a full-bleed interior photograph, viewport-height or close to it, with the logo + a short EN/JP display pair centred or bottom-left.
- **Recruit band** is the one full-bleed orange stripe on the page. It reads as punctuation.
- **Footer** is `#0D0D0D`, hair-thin rules, venue wordmarks in a row, copyright in `#6B6B6B`.

---

## Iconography

The comp uses iconography **almost not at all** — that restraint is itself the brand voice.

- **No UI icon system.** There are no hamburgers, chevrons, search glyphs, or social icons on the Top page. Nav is type-only.
- **Wordmarks do the iconography work.** Each venue has a hand-drawn ornamental monogram (see `assets/logos/`) that functions as both logo and decorative element. These are near-white, filigree-style engravings evoking classic European club branding (REIMS, RAISE, NILS share a visual family; FUJISAKI uses a Japanese 筆 calligraphic mark; G CLASS uses fine geometry).
- **When you must use a glyph** (rare) — use **Lucide** at 1.25 px stroke, `#FFFFFF`, 20 px. This is the closest match to the brand's hair-thin, uniform-stroke feel. Import from CDN:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```
  Flagged substitution: Lucide is not native to the brand — it is chosen for consistency if utility icons become necessary (e.g. in forms).
- **No emoji.** No Unicode symbols as decoration. An Access entry lists phone numbers as plain text; there is no 📞.
- **Arrows, when needed**, are thin CSS rules or a stroked SVG chevron — never a filled glyph.

See `assets/logos/` for the full venue set:
`club_a_logo.png`, `club_reims_logo.png`, `club_raise_logo.png`, `club_nils_logo.png`, `fujisaki_logo.png`.

---

## Index / manifest

- **`colors_and_type.css`** — all tokens + semantic classes. Import anywhere.
- **`preview/`** — the cards rendered in the Design-System tab.
- **`assets/logos/`** — venue wordmarks.
- **`assets/venues/`** — interior photography (hero-grade).
- **`assets/people/`** — CEO + cast portrait references.
- **`assets/events/`** — event-poster stills (the single place where saturated colour is allowed).
- **`ui_kits/corporate-site/`** — Top-page recreation with reusable JSX components.
- **`SKILL.md`** — so this directory can be used as a Claude-Code agent skill.

---

## Caveats

- **GitHub repo is empty / inaccessible** at the time of authoring. All code patterns below are derived from the PDF comp and the written brief, not from inspecting source. If the repo is populated later, the UI kit should be re-grounded against the real components.
- **Fonts are substituted from Google Fonts** (Cormorant Garamond, Noto Serif JP, Noto Sans JP). These match the brief exactly, but if licensed desktop files exist (Adobe Fonts / Monotype), swap them in via `@font-face` and ship locally.
- Asset names in `assets/people/cast_noa.png` refer to a specific cast member ("進撃のノア / CLUB REIMS") and should be treated as reference-only — production imagery would come from a current shoot.
