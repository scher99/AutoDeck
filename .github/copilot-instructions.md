# AutoDeck — Copilot Instructions

## Build & Dev Commands

```bash
npm run dev        # Dev server at localhost:5173/AutoDeck/
npm run build      # Production build → dist/ (Vite, base: /AutoDeck/)
npm run preview    # Preview built site
```

No unit test suite. E2E snapshots live in `e2e-sprint*.js` files (Playwright), run manually per sprint. QA is done by verifying `npm run build` exits 0 and visually checking slides.

## Architecture Overview

AutoDeck is a React + Framer Motion + Tailwind slide framework. The routing, theming, and slide rendering work together as follows:

**App.tsx is the routing hub.** Every presentation is a `<Route>` with its own `PresentationConfig`, slides map (`{ en: ..., he: ... }`), and optional `creationStory`. To add a new presentation, add imports + a config + a `<Route>` here.

**Slide data is separate from components.** Slides are plain TypeScript arrays in `src/slides/slides-en.ts` (and per-language equivalents). Extra presentations live in `src/slides/data/`. The `type` field on each slide object maps to a component via `src/slides/registry.ts`.

**ThemeProvider wraps HashRouter.** The `useTheme()` hook gives any engine component access to the current theme. Theme is stored in `localStorage` as `autodeck-theme`. `HashRouter` is required — GitHub Pages doesn't support path-based routing.

**CSS custom-property tokens drive all theming.** 16 tokens are set on `document.documentElement` via `[data-theme="aurora|sivania|noir"]`. Engine components should read these via Tailwind utilities or `style={{ color: 'var(--theme-accent-primary)' }}`.

## Key Conventions

### No new npm dependencies
Only use `framer-motion`, `tailwindcss`, `lucide-react`, and inline SVG. Do not install UI libraries (no shadcn/ui, no Radix).

### SVG attributes don't inherit CSS custom properties
```tsx
// WRONG — CSS vars don't work as SVG presentation attributes
<circle fill="var(--theme-accent-primary)" />

// CORRECT
<circle style={{ fill: 'var(--theme-accent-primary)' }} />
```

### Always use BASE_URL for asset paths
```tsx
// CORRECT — works for any fork with a different repo name
src={`${import.meta.env.BASE_URL}thumbnails/${entry.thumbnail}`}

// WRONG — hardcodes the repo name, breaks forks
src={`/AutoDeck/thumbnails/${entry.thumbnail}`}
```

### Animation pattern depends on scrollability
- **Static slides** (default): use `initial` + `animate` with staggered `delay`
- **Scrollable slides** (`scrollable: true`): use `whileInView` + `viewport={{ once: true }}`

### DiagramSlide edges are not optional
`edges: []` draws zero connections silently. Always provide explicit edges or set `autoEdges: true`.

### RTL is auto-detected
Languages `he`, `ar`, `fa`, `ur` automatically flip layout and reverse keyboard navigation. No manual `dir` attribute needed.

### Adding a slide type (framework contribution)
1. Create `src/slides/components/MySlide.tsx` implementing `SlideComponentProps<MySlideData>`
2. Add the interface to `src/engine/types.ts` (extend `SlideData`)
3. Register in `src/slides/registry.ts`
4. Add demo data to `src/slides/slides-en.ts` + `slides-he.ts`
5. Document in `docs/slides/`

### Adding a new theme
Add a `[data-theme="mytheme"]` block with all 16 tokens to `src/index.css`, then add the entry to `THEMES` in `src/engine/themes.ts`. No other changes needed.

### Development workflow (SDD)
Changes are tracked in `specs/backlog.md` before implementation. Slash commands (`.claude/commands/`) orchestrate sprint planning, execution, and QA. See `CLAUDE.md` for the full workflow.

## Important File Map

| Goal | Files |
|------|-------|
| Add a slide to a presentation | `src/slides/slides-en.ts` (+ other langs) |
| Add a new presentation | `src/App.tsx` + new `src/slides/data/slides-*.ts` |
| Add a slide type | `src/slides/components/` + `src/engine/types.ts` + `src/slides/registry.ts` |
| Change background effect | `src/config.ts` → `background` field |
| Change theme tokens | `src/index.css` → `[data-theme]` block |
| Add a theme | `src/index.css` + `src/engine/themes.ts` |
| Add a language | `src/config.ts` + `src/App.tsx` + new `slides-{lang}.ts` |
| Add to gallery | `src/landing/galleryConfig.ts` |
| Deploy | Push to `main` → GitHub Actions auto-deploys to GitHub Pages |
