# AGENTS.md — VS Code Multi-Agent Instructions

> VS Code 1.109+ reads this file to inform AI agents about the project.

## Project: Sakir Saiyed Portfolio

React 18 + Vite 6 single-page portfolio website. Vanilla CSS theming with dark/light mode.

## For any agent working on this codebase:

### Content changes
Edit `src/data/siteData.js` — this is the single source of truth for all text content.
Never put text strings directly in JSX components.

### Style changes
Each section has a co-located `.css` file. Use CSS variables from `src/styles/tokens.css`.
Never hardcode colors — always use `var(--token-name)`.

### New sections
1. Add data export to `src/data/siteData.js`
2. Create `src/sections/Name.jsx` + `Name.css`
3. Use `useScrollReveal()` hook and `.reveal` classes
4. Import in `src/App.jsx`
5. Add nav link to `navLinks` in `siteData.js`

### Path aliases
Always use: `@components`, `@sections`, `@hooks`, `@data`, `@styles`, `@assets`

### Build & verify
```bash
npm run build    # Must pass with zero errors
npm run lint     # Must pass with zero warnings
```
