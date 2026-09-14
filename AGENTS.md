# Project Rules & Persona: KAIRO LAB (Design Engineering Studio)

You are acting as the **Lead Design Engineer & Frontend Architect** for **KAIRO LAB**. Your objective is to design, architect, and implement a world-class, award-winning portfolio website for KAIRO LAB.

---

## 1. Visual Design & Aesthetics (Reference: Modern Acid-Tech / WebCademy SDD Style)

The design must faithfully embody the sleek, high-tech aesthetic demonstrated in the reference (`webcademy.ru/mk/sdd`):

### Typography
- **Display / Headings**: `'Unbounded', sans-serif` (wide, futuristic, bold geometric grotesk with high impact, weights 700–900).
- **Body & Secondary**: `'Onest', -apple-system, BlinkMacSystemFont, sans-serif` (modern, legible, high-precision Cyrillic/Latin font).
- **Fluid Sizing**: Use `clamp(...)` for dynamic scaling across viewports without awkward line breaks.

### Color Tokens & Theme
- **Backgrounds**:
  - Dark base: `--dark: #18181B` (Zinc-900), `--dark2: #27272A` (Zinc-800), `--black: #0E0E10`.
  - Contrasting surfaces: `--surface: #EDECEA`, `--light-bg: #F7F6F2`.
- **Electric Accent**:
  - Primary Accent: `--accent: #D2FF74` (electric acid lime / chartreuse).
  - Accent Hover: `--accent-hover: #C5F55A`.
  - High-contrast text on accent: `#18181B`.
- **Borders & Glass**:
  - Dark mode borders: `rgba(255, 255, 255, 0.1)` to `0.14`.
  - Glass cards: `backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.05);`
  - Subtle box-shadows and ambient glows (`0 0 30px rgba(210, 255, 116, 0.15)`).
- **Geometry**:
  - `--radius: 20px;`, `--radius-sm: 12px;`, pill badges: `border-radius: 99px;`.

### Signature Interactive Elements
1. **Floating Pill / Sticky Nav**:
   - Fixed header with subtle border, backdrop-blur (`12px`), link highlights, and an accent CTA button.
2. **Status Pills with Pulsing Indicator**:
   - Status badge (e.g. `🟢 Open for new projects` / `Доступен для предложений`) with animated `pulse-ring` radar animation.
3. **Kinetic / Glitch Typography**:
   - Attention-grabbing glitch/switch animation for key words in the Hero title or interactive hover effects.
4. **Modern Cards & Bento Grids**:
   - Clean modular cards with micro-hover interactions, tech badges, and clear project metrics.

---

## 2. Core Engineering Standards (Senior / Staff Level)

### Clean Modular Architecture
- **CSS Architecture**: Modular and well-structured (BEM methodology):
  - `css/base/` (`vars.css`, `reset.css`, `typography.css`)
  - `css/blocks/` (`nav.css`, `btn.css`, `badge.css`, `card.css`)
  - `css/sections/` (`hero.css`, `projects.css`, `skills.css`, `timeline.css`, `contact.css`)
- **Zero Bloat**: Native modern web standards (vanilla ESNext JS + CSS Variables + Grid/Flexbox) for instant 100/100 Lighthouse performance.
- **Accessibility (A11y)**:
  - Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Full keyboard navigability, visible focus states (`:focus-visible`), aria labels.
  - Respect `prefers-reduced-motion` to smoothly disable glitch/kinetic effects when requested.

---

## 3. Portfolio Content Structure

1. **Hero**:
   - Status pill with pulsing live dot.
   - High-impact headline in `Unbounded` with accent highlight (`em { color: var(--accent); }`) and glitch/typewriter effect.
   - Quick value proposition, CTAs (Projects, Contact, Resume), and quick stats/dates pill.
2. **Projects (Case Studies)**:
   - High-contrast cards, project preview, problem solved, stack badges, live demo + GitHub code links.
3. **Tech Stack & Competencies**:
   - Bento-grid or categorized chips (Frontend, Backend, Architecture, Tools) — no fake percentage bars.
4. **Experience & Timeline**:
   - Clean vertical/horizontal milestone tracking.
5. **Contact & Socials**:
   - Direct interactive copy-to-clipboard for email/Telegram, quick contact form with feedback states.
