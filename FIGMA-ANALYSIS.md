# DigitalWolf — Step 1: Figma Analysis

**Source:** `Digital-Wolf-Common-UI` · file `8BwidY23SAFXfLjWwSPoTt` · node `13230:33919` ("Html → Body")
**Frame:** 1920 × 8847 px, single desktop artboard
**Status:** analysis only — no code generated

---

## 1. Section inventory

Thirteen sections, top to bottom. `y` is the offset inside the 8847px frame.

| #  | Section            | y range     | Root node      | Notes |
|----|--------------------|-------------|----------------|-------|
| 1  | Top Navigation     | 0 – 67      | `13230:34166`  | **width 1280**, not 1920 |
| 2  | Hero               | 135 – 736   | `13230:33987` + `13222:33254` | text col 544w @ x309; masked image 738×600 @ x853 |
| 3  | About Us           | 861 – 1386  | `13237:34489` + loose text | image 520×307 @ x342; copy @ x1019; 2 feature blocks |
| 4  | Statistics         | 1411 – 1680 | `13230:33960`  | 1271×269, 4 items @ 256w, 32 gap |
| 5  | Services header    | 1945 – 2154 | `13233:34259`  | "OUR SERVICES / What We Build Best" |
| 6  | Services card rail | 2303 – 3103 | `13233:34476`  | 1849.5×800, 5 cards 375×600, vertically staggered |
| 7  | Technologies       | 3225 – 3485 | `13253:28007` + `13253:27961` | title + 18 logos in 2 rows |
| 8  | Why Choose Us      | 3690 – 4325 | `13230:33923` + `13234:34484` | copy + CTA left; 4 cards 260w staggered right |
| 9  | Agency Process     | 4556 – 5797 | `13222:33331`  | 1303×1241, 4 numbered steps, descending stagger |
| 10 | Journey header     | 5880 – 6089 | `13272:27744`  | **verbatim duplicate of #5** |
| 11 | Journey path       | 5892 – 7221 | `13274:28072`  | dashed SVG path + 4 rotated cards |
| 12 | Contact            | 7268 – 8091 | `13249:27866`  | 1525×747, split panel + form |
| 13 | Footer / CTA       | 8286 – 8949 | `13252:27928`  | 1918×663, arc line, centred CTA, bottom bar |

---

## 2. Extracted tokens

The file has **no Figma variables** — `get_variable_defs` returns only stray imported values
(`Font Awesome 5 Brands`, `#000000`). Every token below was read off actual node properties.

### Typography

Two real families:

| Family | Weights seen | Role |
|--------|--------------|------|
| **Manrope** | 400 / 500 / 600 / 700 | all UI, body, most headings |
| **Cinzel** | 700 | display serif — section titles, footer CTA, "Contact Us" |

Strays in the Contact section only: **Nimbus Sans**, **Inter**. Treated as defects (§4.9).

| Role | Font | Size | Line-height | Tracking | Colour |
|------|------|------|-------------|----------|--------|
| Hero H1 | Manrope 500 | 80 | 88 (1.1) | −1.6 | `#e5e2e1` / `#bfc1c4` alternating lines |
| Display serif | Cinzel 700 | 60 | 57.6 (0.96) | 2 | `#e5e2e1`, accent glyph `#bfc1c4` |
| Card title | Manrope 600 | 24 | 33.6 (1.4) | 1.2 | `#e5e2e1` |
| Body large | Manrope 400 | 18 | 32.4 (1.8) | 0 | `#c4c7c5` |
| Body | Manrope 400 | 16 | 25.6 (1.6) | 0 | `#c4c7c5` |
| Eyebrow / label | Manrope 600 | 12 | 12 (1.0) | 1.2 | `#bfc1c4` |
| Nav link | Manrope 600 | 12 | 12 | 1.2 | `#c4c7c5`, active `#ffffff` |
| Button label | Manrope 700 | 12 | 12 | 1.2 | `#030303` |

### Colour

Verified against a full-render pixel scan: **99.99 % greyscale**.

| Token | Value | Use |
|-------|-------|-----|
| `bg/base` | `#000000` | page base (73 % of pixels) |
| `bg/surface` | `#080808` | card fill |
| `bg/nav` | `rgba(3,3,3,0.8)` | nav, over 6px backdrop blur |
| `border/default` | `#242424` | card + nav borders |
| `border/input` | `#232323` | form controls |
| `text/primary` | `#e5e2e1` | headings |
| `text/secondary` | `#c4c7c5` | body |
| `text/muted` | `#bfc1c4` | eyebrows, dividers, accent glyphs |
| `text/inverse` | `#030303` | on light buttons |
| `surface/invert` | `#f5f5f3` | solid light button |
| `glow` | `rgba(191,193,196,0.05)` | blurred underlay behind media |

No accent hue exists. See §4.1.

### Geometry

- **Radius:** `4px` (cards) and `12px` (blurred media underlay). Buttons are square (`0`).
- **Border:** `1px` solid throughout; nav uses `border-bottom` only.
- **Dividers:** 2px tall — widths 40 / 70.65 / 96; one 1px at 101.43.
- **Card padding:** 32–33px.
- **Shadow:** none, except the Contact submit's red/cyan offset pair (§4.9).
- **Imagery:** desaturated via a white `mix-blend-saturation` overlay — all photography renders greyscale.

---

## 3. Component tree

### Primitives (`components/ui/`)
- `Eyebrow` — 12/12, 1.2 tracking, uppercase, muted
- `Divider` — `width` prop; 2px default
- `DisplayTitle` — Cinzel; supports a muted trailing glyph (`?`, `BEST`)
- `Heading` — Manrope; `level` + `size`
- `Body` — `size: 'md' | 'lg'`
- `SolidButton` — light fill, dark label
- `Surface` — `#080808` + 1px `#242424` + radius 4 (the real "card")
- `GreyscaleImage` — next/image + saturation blend + optional blurred glow underlay
- `Icon` — exported SVG sprite

### Section components (`components/sections/`)
`Navbar` · `Hero` · `About` · `Stats` · `SectionHeader` · `ServiceRail` (+`ServiceRailCard`) ·
`TechMarquee` · `WhyChooseUs` (+`ServiceMiniCard`) · `ProcessList` (+`ProcessStep`) ·
`JourneyPath` (+`JourneyCard`) · `Contact` (+`ContactForm`) · `Footer`

`SectionHeader` is shared by #5 and #10. `Surface` backs #6, #8, #11. `Stats` and `ProcessStep`
both reuse `Eyebrow` + `Divider`.

---

## 4. Discrepancies requiring a decision

Ordered by blast radius.

### 4.1 The brief's accent colour does not exist in the design
Brief specifies primary `#FF5B1F` and "ambient orange glow". A full-render scan found
**2,096 chromatic pixels out of 18,437,980 (0.011 %)** — 1,079 in the red band and 1,017 in the
cyan band, which is precisely the Contact submit button's
`shadow-[2px_2px_0_rgba(255,0,0,.3),-2px_-2px_0_rgba(0,255,255,.3)]`. There is no orange anywhere.

### 4.2 The brief's glassmorphism does not exist in the design
Brief lists 12 glass surfaces with `rgba(255,255,255,0.08)` / `blur(20px)` / radius 24.
The design's cards are **opaque `#080808` with a 1px `#242424` border at radius 4**.
The only true backdrop blur is the nav (6px). Two other blurs are *layer* blurs used as glows,
not glass.

### 4.3 Radius mismatch
Design 4px / 12px; brief 24px.

### 4.4 Background mismatch
Brief `#0E0E0E`; design `#000000` base with `#080808` surfaces.

### 4.5 Navigation is 1280 wide on a 1920 frame
`13230:34166` is 1280px with its search icon at x=1183. Dropped onto the 1920 artboard it ends
two-thirds across. The nav was clearly designed on a separate 1280 artboard.

### 4.6 No consistent content grid
Section x-origins: 147, 157, 197, 309, 314, 314, 319, 333, 342, 432, 718, 1019.
Widths range 1032 → 1849. Several sections (#3, #6) overflow the 1920 frame.

### 4.7 Duplicate section header
"OUR SERVICES / What We Build Best" appears verbatim at `13233:34259` (#5) and `13272:27744` (#10),
including the same body copy.

### 4.8 The Journey section is unfinished
All four cards read "01 / DEFINE / Lorem ipsum dolor sit amet…". No real content, no distinct
step numbers or titles. A fifth card `13274:27933` is hidden.

### 4.9 The Contact form is unfinished
- 3 inputs but 4 label nodes; labels read NAME / EMAIL / **EMAIL**
- Fonts are Nimbus Sans + Inter, not Manrope/Cinzel
- Inputs are filled `#9a9a9a` light grey on a dark page
- Submit carries a red/cyan chromatic-aberration shadow

### 4.10 Copy defects
- "Our **AGYNCY PROSSECE**" → "Our Agency Process"
- Rail cards #6: "AI Automation" repeats on 3 of 5; card 5 is clipped to 173px of 375px

### 4.11 Sections in the brief that are absent from this node
Projects, Case Studies, Testimonials, Clients, Awards, Pricing, FAQ, Blog.
Only this one node was supplied.

### 4.12 No responsive frames
Desktop 1920 only. Every breakpoint from 320→4K must be derived.

---

## 5. Proposed animation map

One distinct mechanism per section, per the brief.

| Section | Mechanism | Notes |
|---------|-----------|-------|
| Loader → Hero | GSAP master timeline | 9-beat sequence from the brief |
| Hero H1 | SplitType lines + `clip-path` mask reveal | stagger 0.08, `expo.out` |
| Hero image | `clip-path` inset wipe + 1.08→1 scale | |
| Hero | mouse parallax on image + floating elements | `quickTo`, GPU transforms |
| About | image mask reveal + copy fade-up | ScrollTrigger, once |
| Stats | counter tween + icon draw | `snap: 1`, respects reduced-motion |
| Services header | word-level split reveal | Cinzel accent word offset |
| Services rail | horizontal scroll, pinned | native stagger preserved from Figma |
| Technologies | dual infinite marquee, opposing | CSS-driven, `will-change: transform` |
| Why Choose Us | staggered card entrance | matches the Figma y-offsets |
| Agency Process | pinned storytelling, step-by-step | numbers scrub opacity/scale |
| Journey path | SVG `strokeDashoffset` scrub + card pop-in | the dashed path draws with scroll |
| Contact | field-by-field fade, magnetic submit | |
| Footer | arc line draw + CTA split reveal | |

Cross-cutting: Lenis smooth scroll, custom cursor (dot + ring, hover expansion, magnetic),
page transitions, `prefers-reduced-motion` kill-switch on every timeline.

---

## 6. Asset manifest

| Asset | Source node | Export |
|-------|-------------|--------|
| Hero dashboard photo | `13222:33258` | WebP/AVIF, 738×600 @2x |
| About product photo | `13237:34492` | WebP/AVIF, 520×307 @2x |
| Service rail imagery | `13233:34285/34314/34328` | 3 distinct, 375×600 @2x |
| Service icons | `13230:33935/33942/33948/33955` | SVG ×4 |
| Stat icons | `13230:33963/33969/33975/33981` | SVG ×4 |
| Tech logos | `13253:27962…27999` | SVG ×18 |
| Card arrow / UI glyphs | various | SVG |
| Social icons | `13249:27907…27925`, `13252:27940…27958` | SVG ×3 (×2 placements) |
| Nav search icon | `13230:34180` | SVG |
| Journey dashed path | `13274:27758` | inline SVG (needed for stroke animation) |
| Footer arc | `13252:27931` | inline SVG |

Fonts: Manrope + Cinzel are both on Google Fonts → `next/font/google`, self-hosted, zero CLS.

---

## 7. Decisions taken (locked)

Resolved with the client after Step 1. These override the original brief wherever the two conflict.

| # | Question | Decision |
|---|----------|----------|
| 1 | Figma is monochrome/flat; brief specifies `#FF5B1F` + glassmorphism | **Figma wins.** Surfaces stay `#080808` / `#242424` / radius 4. The accent is scoped to interaction states only — hover hairline `rgba(255,91,31,.35)`, glow `rgba(255,91,31,.10)`, focus ring, cursor, scroll progress. Never a fill. |
| 2 | No consistent content grid in the file | **One inline utility set per section** — `mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12` — capping at the design's 1280 column, centred, gutter 20 → 32 → 48px. No wrapper class of our own: Tailwind's own class only sets a max-width, so centring and gutters have to be stated anyway. Section-internal layout, proportions and stagger are preserved exactly. |
| 3 | Unfinished content (§4.7–4.10) | **Fix defects, flag placeholders.** Typo → "Our Agency Process"; third contact field → Phone; duplicated header differentiated. Journey lorem ipsum stays visible as placeholder, with a copy-slot list handed back. Nothing invented silently. |
| 4 | Eight brief sections absent from the design (§4.11) | **Build only the 13 designed sections.** No invented layouts. |

Related: the project directory was renamed `dw-new-b:w` → `dw-new-b`. The `:` split
`PATH` (colon-delimited), so no npm script could resolve `node_modules/.bin`.

### Deviations from the brief, and why

- **Radius 4/12, not 24** — the design's squareness is load-bearing (§4.3).
- **Base `#000000`, not `#0E0E0E`** — measured, 73 % of all pixels (§4.4).
- **Glass only where Figma blurs** — the nav's 6px backdrop blur, plus new floating UI
  (mobile menu, modals) that the desktop frame does not contain.
- **Fluid type** — the file ships one 1920 frame and no other breakpoint, so every size is a
  `clamp()` that resolves to its exact Figma value at 1920.
