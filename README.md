# Sakir Saiyed — Portfolio

A modern, responsive personal portfolio built with **React + Vite**. Clean architecture, dark/light theme, scroll animations, and fully data-driven content.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/shaqir/sakir-portfolio.git
cd sakir-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server (opens http://localhost:3000)
npm run dev
```

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start Vite dev server on port 3000 |
| `npm run build`   | Production build → `dist/`         |
| `npm run preview` | Preview production build locally   |
| `npm run lint`    | Run ESLint                         |
| `npm run format`  | Format code with Prettier          |

## Project Structure

```
sakir-portfolio/
├── public/                    # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/               # Images, icons, resume PDF
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── Icons.jsx         # Custom SVG icon components
│   ├── data/
│   │   └── siteData.js       # ★ ALL CONTENT LIVES HERE
│   ├── hooks/
│   │   ├── useTheme.js       # Dark/light mode toggle
│   │   ├── useScrollReveal.js # Intersection Observer animations
│   │   └── index.js
│   ├── sections/             # Page sections (1 per file)
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Achievements.jsx / .css
│   │   ├── Testimonials.jsx / .css
│   │   └── Contact.jsx / .css
│   ├── styles/
│   │   ├── tokens.css        # Design tokens (colors, fonts, spacing)
│   │   └── global.css        # Reset, utilities, animations
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
├── .vscode/                  # VS Code settings & extensions
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
└── vite.config.js
```

## How to Customize

### Content (the fast way)

**Edit one file: `src/data/siteData.js`**

This single file controls all portfolio content — name, title, about text, skills, projects, experience, achievements, testimonials, and contact links. Change the data, and the entire site updates.

### Design Tokens

Edit `src/styles/tokens.css` to change:
- Colors (both dark & light themes)
- Typography (font families)
- Spacing & layout
- Animation timing

### Adding a Section

1. Create `src/sections/NewSection.jsx` and `NewSection.css`
2. Import and add it to `src/App.jsx`
3. Add a nav link in `src/data/siteData.js` → `navLinks`

### Resume PDF

Drop your resume as `public/resume.pdf` and it's automatically available at `/resume.pdf`.

## AI Project Intelligence

This project ships with configuration files for every major AI coding tool:

| File | Tool | Purpose |
|------|------|---------|
| `CLAUDE.md` | Claude Code CLI | Full architecture docs, conventions, patterns, do's and don'ts |
| `.cursorrules` | Cursor IDE | Concise coding rules for inline AI suggestions |
| `.github/copilot-instructions.md` | GitHub Copilot | Project context for Copilot completions |
| `AGENTS.md` | VS Code multi-agent (v1.109+) | Instructions for VS Code AI agents |
| `.claude/settings.json` | Claude Code CLI | Allowed/denied terminal commands |
| `.editorconfig` | All editors | Consistent formatting (indent, charset, EOL) |

**How to use with Claude Code:**
```bash
cd sakir-portfolio
claude
# Claude Code automatically reads CLAUDE.md and understands the entire project
```

**How to use with Cursor:**
Open the project folder in Cursor — it automatically reads `.cursorrules`.

## Tech Stack

- **React 18** — Component architecture
- **Vite 6** — Fast dev server & optimized builds
- **Lucide React** — Beautiful icon set
- **CSS Modules (vanilla)** — Scoped styles, no runtime overhead
- **Intersection Observer** — Performant scroll animations

## Deployment

### Vercel (recommended)
```bash
npm run build
# Deploy the dist/ folder — or connect your GitHub repo to Vercel for auto-deploy
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify, or connect repo
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/sakir-portfolio/'
npm run build
# Deploy dist/ to gh-pages branch
```

## Roadmap

- [ ] Add project screenshots / demo GIFs
- [ ] Swap placeholder testimonials with real quotes
- [ ] Add resume PDF download
- [ ] Blog integration (Medium RSS or MDX)
- [ ] Analytics (Plausible / Vercel Analytics)
- [ ] Contact form (Formspree / EmailJS)
- [ ] Performance audit (Lighthouse 100)
- [ ] Accessibility audit (axe-core)

---

Built by **Sakir Saiyed** · [sakiralisaiyed.com](https://sakiralisaiyed.com)
