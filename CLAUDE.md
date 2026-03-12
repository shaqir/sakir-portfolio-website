# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React 18 + Vite 6 single-page portfolio website for a Senior iOS Engineer & AI Systems Builder. Vanilla CSS with design tokens for theming. No routing library — anchor-based smooth scrolling between sections.

## Commands

```bash
npm run dev       # Start dev server → http://localhost:3000
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint (--max-warnings 0, strict)
npm run format    # Prettier (no semicolons, single quotes, trailing commas, 100 char width)
```

There is no test framework — no Jest, Vitest, or test files exist. No CI/CD pipelines are configured.

## Architecture

**Component-per-section SPA:** `App.jsx` composes `Navbar` + 8 section components (`Hero`, `About`, `Skills`, `Projects`, `Experience`, `Achievements`, `Testimonials`, `Contact`) + `Footer`.

### Critical Rule: All content lives in `src/data/siteData.js`

**NEVER hardcode text in JSX.** The entire site is data-driven — `siteData.js` exports all content (personal info, social links, nav links, stats, about text, skills, projects, experiences, achievements, testimonials). Sections import what they need. To update content, edit `siteData.js` only.

### Path Aliases (vite.config.js)

Always use aliases — never relative paths like `../../components/`.

```
@components → src/components/    @hooks    → src/hooks/
@sections   → src/sections/      @data     → src/data/
@styles     → src/styles/        @assets   → src/assets/
```

## Design System

### Theming

Dark (default) and light themes via `[data-theme]` attribute on `<html>`. `useTheme` hook manages toggling and localStorage persistence — no other code should touch localStorage.

- **Design tokens** are CSS custom properties in `src/styles/tokens.css`
- All colors MUST use `var(--token-name)` — never hardcoded hex/rgb
- Key tokens: `--accent`, `--bg-primary`, `--bg-card`, `--text-primary`, `--text-secondary`, `--text-tertiary`, `--border`

### CSS Conventions

- **Vanilla CSS only** — no Tailwind, no CSS-in-JS, no SASS/Less
- Each component has a co-located `.css` file (e.g., `Hero.jsx` → `Hero.css`)
- BEM-ish naming: `.block__element` (e.g., `.hero__content`), `.block--modifier` (e.g., `.btn--primary`)
- Shared utility classes (`.container`, `.section`, `.btn`, `.reveal`) in `global.css`
- Mobile-first, breakpoint at `768px`
- Card pattern: `background: var(--bg-card)`, `border: 1px solid var(--border)`, `border-radius: 14-16px`
- Hover pattern: `border-color: var(--border-hover)`, `transform: translateY(-2px)`, `box-shadow: var(--shadow-card-hover)`
- Transitions: `transition: all 0.3s var(--ease-out-expo)`
- Fonts: `var(--font-display)` for headings (Inter), `var(--font-body)` for body (Inter), `var(--font-mono)` for code/labels (Fira Code)

## Component Patterns

### Section Template

Every section follows this structure. Alternating sections use `className="section section--alt"`.

```jsx
import { useScrollReveal } from '@hooks'
import { sectionData } from '@data/siteData'
import './SectionName.css'

export default function SectionName() {
  const ref = useScrollReveal()
  return (
    <section id="section-id" className="section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Label</span>
          <h2 className="section-title">Title</h2>
          <p className="section-subtitle">Subtitle</p>
        </div>
        {/* Content elements with .reveal and .reveal-delay-{1,2,3} classes */}
      </div>
    </section>
  )
}
```

When adding a new section: (1) define data in `siteData.js`, (2) create `SectionName.jsx` + `.css` in `src/sections/`, (3) import in `App.jsx`, (4) add nav link to `navLinks` in `siteData.js`.

### Scroll Reveal

`useScrollReveal` returns a ref. Attach it to the section. All `.reveal` children are animated into view via IntersectionObserver. Use `.reveal-delay-1` through `.reveal-delay-3` for staggered 100ms delays.

### Icons

- **Lucide React** for UI icons: `import { Mail, Grid2x2 } from 'lucide-react'`
- **Custom SVGs** for brands: `import { GithubIcon, LinkedInIcon, MediumIcon } from '@components/Icons'`

## Code Style

- Prettier: no semicolons, single quotes, trailing commas, 100 char print width
- Functional components only with default exports; named exports for hooks
- No prop drilling — sections import data directly from `siteData.js`
- No `useEffect` for DOM manipulation — use CSS for animations, IntersectionObserver for scroll

## Known Placeholder Content

- **Testimonials** in `siteData.js` → placeholders, not real quotes
- **Resume PDF** → needs `public/resume.pdf`, CTA in Hero is commented out
- **Project screenshots** → need adding to `src/assets/`
- **Favicon** → replace `public/favicon.svg` with personal branding

## What NOT to Do

- Don't install Tailwind, React Router, SASS, or CSS-in-JS libraries
- Don't hardcode text content in JSX — always define in `siteData.js`
- Don't use relative imports — always use path aliases
- Don't use localStorage outside of `useTheme` hook
- Don't use class components
