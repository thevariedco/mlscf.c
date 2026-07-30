# Miles Café & Co. — Design System

Craft beverage catering meets QSR, aimed at a high-end "artsy" super-premium clientele. Miles Café draws on Scandinavian architecture, art-deco pattern, and mid-century retro-modern illustration. The base atmosphere is a **cream-tinted white canvas** (`--surface-canvas` #fffaf0) holding near-black ink type, dark-azure brand marks, and **hand-crafted 3D / flat-vector landscape illustration** as the dominant brand voltage. Where most food brands play it cool with clean lines and extreme minimalism, Miles leans into illustrated warmth and saturated single-color feature cards.

## Sources given

| Source | Path / link | Notes |
|---|---|---|
| Primary logo lockup (PNG, transparent) | `uploads/milescafe_co_logo_trsp.png` | 2000×2000. The only visual asset provided. All brand hexes in this system were **sampled directly from it**. |
| Written brand analysis (`Miles-Café-design-analysis`, version: alpha) | pasted into the project brief | Colors, type scale, radii, spacing, component inventory, do's/don'ts, responsive rules. This document is the component contract. |

No codebase, Figma file, deck, or font binaries were provided. Nothing here was reconstructed from memory of another brand: the mark is cropped from the supplied PNG, and every component maps to a named entry in the written analysis.

**Products represented:** one surface only — the Miles Café marketing site (long-scroll explainer pages: home, catering, menu, pricing). No app, dashboard, or docs surface was described, so none was invented. See `ui_kits/marketing_site/`.

---

## CONTENT FUNDAMENTALS

**Voice:** confident host, not salesperson. Miles speaks like a café owner who also caters your event — warm, specific, faintly wry. Craft language ("single-origin", "slow-steeped", "by hand, on site") does the persuading; adjectives don't.

**Person:** *you* for the reader, *we* for Miles. Never "I". Never third-person self-reference ("Miles Café believes…").
- ✅ "Tell us the headcount. We'll bring the bar."
- ❌ "Miles Café provides scalable beverage solutions for corporate clientele."

**Casing:** sentence case everywhere — headlines, buttons, nav, card titles. The **only** uppercase in the system is the `caption-uppercase` eyebrow label (12px / 600 / 1.5px tracking) used above section headings: `CATERING`, `OUR MENU`, `FEATURED`. Title Case is a violation.

**Headlines:** 4–9 words, one idea, no colons, no em-dash pairs. Verb-forward.
- "Have the event people will rave about."
- "Every cup, poured on site."
- "A bar that fits your floor plan."

**Body copy:** 1–3 sentences per block, 40–70 characters per line at `body-md`. Concrete nouns beat abstractions — "sixteen taps, two baristas, one folding table" not "flexible service configurations".

**Buttons & CTAs:** 2–3 words, imperative, no trailing punctuation, no "Learn more →" arrows in the label. `Get catering` · `See the menu` · `Book a tasting` · `Talk to us`.

**Numbers & units:** numerals always (`12 drinks`, `4 hrs`, `$18/guest`). Prices lead with `$`, no cents unless non-zero.

**Emoji:** never. Not in UI, not in copy, not in social captions. The illustration system carries all the warmth the brand needs.

**Punctuation quirks:** the é in *café* is always accented, including in slugs where possible. Ampersands allowed in names ("café & co.") but not in running copy.

**Things Miles never says:** "solutions", "elevate", "curated experience", "artisanal" (they'd rather show it), "premium" (the price says it), "delve", "unlock".

---

## VISUAL FOUNDATIONS

### Color
Six saturated brand hues on a cream floor — all sampled from the logo:
`--brand-orange` #e35d1e · `--brand-teal` #3394b0 · `--brand-honey` #ec8f4c · `--brand-dark-azure` #023f57 · `--brand-green` #3f704b · plus cream `--surface-card` #f5f0e0 as the low-key sixth card. Two illustration-only extras exist for artwork fidelity: `--brand-rust` #a43424 and `--brand-sky` #7bcfcf — do not use them as card fills.

Rules: **cream canvas is non-negotiable** — no cool grays, ever. Primary CTAs are near-black `--color-primary` #0a0a0a, not azure (azure is a brand/illustration color, and the featured-tier and dark-card fill). Cycle feature-card colors down a page — orange → teal → green → honey → dark-azure → cream — and never repeat a fill in adjacent cards. Text flips to white on dark-azure and green; stays ink on orange, honey, teal, and cream. Maximum two background colors per page band group.

### Type
Two roles, no third. **Display = Giaza** at weight **500**, sizes 72 / 56 / 40 / 32 px with negative tracking (−2.5 → −0.5px). **UI + body = Agrandir** (real, local) at 400/700, 16 / 14 / 13 / 12 px — the 600s in the type tokens resolve to the Text Bold cut. Width cuts (Grand, Wide, Narrow, Tight) are available but are accents, not defaults. Display never goes to 700 — the high-contrast serif reads bombastic when bolded. `title-lg` (24px/600) is the one hybrid: display family, heavier weight, used for pricing plan names. Body line-height 1.55; display 1.0–1.15. Mixing families across roles (a serif button, a sans hero) is a system violation.

### Backgrounds & imagery
Flat cream fields, full-bleed illustration, no photography of people. The signature artifact is the **mid-century flat-vector landscape** — layered hills, concentric sunset rings, a ribboning river — in the brand's exact six hues (see `assets/brand-landscape.png`). Illustration is warm, saturated, hard-edged, zero grain, zero drop shadow, no gradient meshes; the only gradient tolerated is the *stepped* concentric sun (discrete rings, not a blend). No repeating patterns or textures behind text. No noise overlays. Where real illustration isn't available yet, use a cream `--surface-soft` frame at `--radius-xl` with a hairline and a stated placeholder — do not substitute stock photography or auto-generated art.

### Layout
1280px max content width, centered, 24–32px gutters. Hero is a 7/5 split (headline left, illustration right). Feature grids 3-up desktop → 2-up tablet → 1-up mobile; pricing 4 → 2 → 1. **96px (`--space-section`) vertical rhythm between major bands** — the single most load-bearing spacing rule. Card padding: 32px on feature cards and pricing tiers, 24px on testimonial / mockup / expert cards. Nothing is fixed-position except the 64px top nav, which is sticky and stays opaque cream (no blur, no shrink-on-scroll).

### Elevation, borders, corners
No shadow system. Depth is **color contrast**: saturated card against cream canvas. Hairline `1px #e5e5e5` on inputs and light content cards; saturated cards carry no border. One shadow token exists — `--elevation-hover` `0 8px 24px rgba(2,63,87,.08)` — reserved for rare hover-lift on clickable cards. Radii: 6px badges/menu items, 8px small buttons, **12px buttons + inputs**, 16px content cards, **24px feature cards**, pill for tabs and badge pills, full for avatars.

### Motion & interaction states
Restrained and short: 120–180ms, `cubic-bezier(0.2,0,0.2,1)`; entrances use `--ease-out` with a 4–8px rise and fade, never bounce, never spring, never scale-in from 0.8. No scroll-jacking; optional slow parallax on hero illustration only.
- **Hover:** primary button → `--color-primary-active` #1f1f1f. Secondary / on-color → cream shifts to `--surface-card`. Saturated cards → `--elevation-hover` plus a 2px rise. Links → color to dark azure with an orange underline. Never opacity fades on interactive elements.
- **Press:** background darkens one step and the element translates down 1px. No scale-down.
- **Focus:** 3px teal ring at 35% (`--elevation-focus-ring`), 2px offset. Inputs additionally thicken their border to ink.
- **Disabled:** `--color-primary-disabled` #e5e5e5 fill with `--text-muted` label, `cursor: not-allowed`, no opacity trick.

### Transparency & blur
Essentially unused. No frosted glass, no scrim-over-image headers, no protection gradients — text always sits on a solid field, so it never needs one. The two sanctioned alphas are the hover shadow and the focus ring. Modal scrim, when needed: `rgba(2,63,87,0.28)`, no blur.

### Footer
Cream (`--surface-soft`), never dark. Miles deliberately closes pages warm — a dark footer breaks the warm-throughout contract.

---

## ICONOGRAPHY

The provided sources contain **no icon set** — no icon font, no sprite, no SVG folder. Substitution, flagged for review: **Lucide** (`0.454.0`, loaded from unpkg CDN), chosen for its 24×24 grid and 2px round-cap stroke, which sits closest to the logo's hard-edged flat-vector geometry. It is wrapped by `components/core/Icon.jsx`; every consumer page must load the Lucide UMD script.

Rules while the substitution stands:
- Stroke icons only, `stroke-width: 1.75`, `currentColor`, 20px in UI rows and 24px in feature cards. No filled icon variants, no duotone.
- Icons sit **beside** type at optical center, never inside colored circles or squircle chips.
- No emoji as icons. No Unicode dingbats (✓ ✕ →) in place of glyphs — use `check`, `x`, `arrow-right`.
- Illustration is not iconography: the landscape mark and future 3D artifacts are image assets, never inlined as icon SVG.

**Ask:** if Miles has a real icon set (or wants a bespoke one drawn from the logo's shape language), send it and this wrapper switches over with no consumer changes.

---

## FONTS

**Every face is now real and local — no substitutions remain.** Giaza (display serif) and Giaza Stencil live in `assets/fonts/` alongside the Agrandir pack.

| Token | Family | Cuts | Use |
|---|---|---|---|
| `--font-display` | Giaza | one weight, mapped 400–600 | Every display headline and `title-lg` |
| `--font-display-stencil` | Giaza Stencil | one weight | Packaging, signage, one-off large moments. Never body or UI. |

**Agrandir is real and local.** Nine brand-supplied cuts live in `assets/fonts/` and are declared in `tokens/fonts.css`. Width cuts are separate family names on purpose — declaring Grand/Wide/Narrow/Tight under one family would let the browser choose a width for you.

| Token | Family | Cuts | Use |
|---|---|---|---|
| `--font-sans` | Agrandir | Regular 400 · Text Bold 700 (also serves 600) · Thin Italic 100 | Everything: body, UI, buttons, nav |
| `--font-sans-grand` | Agrandir Grand | Light 300 · Heavy 800 | Oversized non-serif moments, posters, big numerals |
| `--font-sans-wide` | Agrandir Wide | Light 300 · Black Italic 900 | Tracked eyebrow caps, loud one-word statements |
| `--font-sans-narrow` | Agrandir Narrow | 400 | Dense rows — menus, price tables, metadata |
| `--font-sans-tight` | Agrandir Tight | 400 | Compact stat strings and chips |

Note: the system ships no monospace face; `--font-mono` falls back to the OS mono and is used only for token labels on specimen cards. Use `--font-sans-narrow` for brand-facing tabular text instead.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/colors.css` | Base hues sampled from the logo + semantic aliases. |
| `tokens/typography.css` | Type scale, tracking tokens, `.ds-*` type classes. |
| `tokens/spacing.css` · `radius.css` · `elevation.css` | 4px scale, radius scale, the single shadow + motion tokens. |
| `tokens/fonts.css` | Local `@font-face` rules for Giaza, Giaza Stencil and the nine Agrandir cuts + family tokens. |
| `tokens/base.css` | Document floor, heading defaults, link colors, mobile type scale. |
| `assets/fonts/` | Giaza, Giaza Stencil and nine Agrandir `.otf` cuts supplied by the brand. |
| `assets/` | `logo-lockup.png`, `logo-wordmark.png`, `logo-wordmark-cream.png`, `logo-mark.png`, `brand-landscape.png` — all cropped from the supplied PNG. |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `components/core/` | Button, TextLink, TextInput, CategoryTab, Badge, Icon |
| `components/cards/` | FeatureCard, TestimonialCard, PricingTierCard, ProductMockupCard, ExpertCard, HeroIllustrationCard |
| `components/layout/` | TopNav, HeroBand, CtaBand, Footer |
| `ui_kits/marketing_site/` | Click-through recreation: home, catering, menu, pricing. |
| `SKILL.md` | Agent-Skills entry point. |

### Intentional additions
- **`Icon`** — a thin wrapper over the substituted Lucide set. Added because the source defines no icon primitive but nav, inputs, tabs, and feature cards all need glyphs. Swap-in point for a real set later.
- **`ProductMockupCard`, `ExpertCard`, `HeroIllustrationCard`** — present in the analysis YAML's component map, built as specified.

### Known gaps
- Animation/transition specifics beyond the tokens above (illustration parallax, card entrance choreography) were declared out of scope by the source.
- Form validation states beyond focus were not extracted.
- No real 3D illustration assets exist yet; the flat-vector landscape crop stands in for hero artifacts.
