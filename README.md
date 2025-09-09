# Sarthak Singhaniya — Portfolio

A fast, modern portfolio with interactive 3D background, smart project search, and an AI assistant widget.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion (section reveals, micro‑interactions)
- Three.js via `@react-three/fiber` and `@react-three/drei` (animated particles)

## Features
- AI mini‑chat (FAB) with quick replies and scripted answers.
- Smart Projects search: debounced, multi‑token, relevance‑sorted, match highlighting.
- Polished UI: glassmorphism, subtle silver hover glow on buttons/cards.
- Responsive and accessible. Respects `prefers-reduced-motion`.

## Getting Started
1) Install deps
```bash
npm install
```
2) Dev server
```bash
npm run dev
```
Open the printed URL (default http://localhost:5173).

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview production build locally

## Content & Customization
- Profile, skills, projects, experience: `src/data/content.js`
- AI knowledge base: `src/data/ai_knowledge.js` (bio, stack, links, etc.)
- Components: `src/components/`
- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`

### AI Chat Widget
- Component: `src/components/ChatWidget.jsx`
- FAB opens a mini‑chat with quick chips (Projects, Stack, Achievements, Resume).
- Commands supported: “projects”, “stack/skills/tools”, “experience”, “achievements/awards”, “resume”, “github”, “linkedin”.
- Programmatic open: `window.openChat()` or `window.dispatchEvent(new CustomEvent('open-chat'))`.

### Projects Search
- Debounced input (220ms), multi‑token matching across title/tech/description.
- Relevance scoring (title>tech>description) and highlighting.

## Performance Notes
- Three.js tuned for smoothness: reduced DPR, fewer particles, high‑performance context, throttled parallax.
- Avoids excessive re‑renders with memoized data and simple effects.

## Accessibility
- Keyboard focus styles and ARIA labels on interactive elements.
- Honors `prefers-reduced-motion` for animations and chat.

## SEO
- `public/sitemap.xml`, `public/robots.txt` included.
- Update social/OG tags in `index.html` if needed.

## Resume
Place a PDF at `public/resume.pdf` to enable the Resume chip/command and any buttons that reference it.

## Deployment (Netlify)
Already configured with `netlify.toml`.

Options:
1) Netlify UI: connect repo → Build command `npm run build` → Publish directory `dist`
2) CLI production deploy:
```bash
npm run build
npx netlify deploy --dir=dist --prod --message "Portfolio deploy"
```

## Troubleshooting
- PostCSS error “Unknown word” at `index.css`: ensure file starts with only Tailwind directives.
- Lint shows `@tailwind`/`@apply` unknown: that’s the editor; Tailwind handles these at build.
- Blank page after deploy: confirm publish dir is `dist/` and redirects rule forwards to `/index.html`.

## Project Structure
```
portfolio-sarthak/
├─ public/
│  ├─ robots.txt, sitemap.xml, resume.pdf (optional)
├─ src/
│  ├─ components/ (Hero, About, Projects, Skills, ChatWidget, ThreeBackground, ...)
│  ├─ data/
│  │  ├─ content.js
│  │  └─ ai_knowledge.js
│  ├─ styles/index.css
│  └─ App.jsx
├─ netlify.toml
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json
```

---
Maintained by Sarthak Singhaniya. PRs and suggestions welcome!
