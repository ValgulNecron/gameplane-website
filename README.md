# gameplane-website

Public marketing + documentation website for [Gameplane](https://github.com/ValgulNecron/Gameplane) — a Kubernetes-native game server control panel.

Live site: **https://valgulnecron.github.io/gameplane-website/**

Built with [Astro](https://astro.build), Tailwind CSS 4, and self-hosted JetBrains Mono / Geist fonts. Fully static — no client framework.

This repo is mounted as the `website/` git submodule of the main [Gameplane](https://github.com/ValgulNecron/Gameplane) repo. The visual source of truth is the **Group/Public Website** screens in the main repo's `design.pen` (Pencil); design changes happen there first, then get translated to code here.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build (served under the deploy base path) |
| `npm run check` | Type-check (`astro check`) |
| `npm run lint` | ESLint |

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yaml`. Pull requests are gated by `.github/workflows/ci.yaml` (lint, type-check, build).

The site is served under the `/gameplane-website` base path (GitHub Pages project site). All internal links go through `withBase()` from `src/lib/url.ts` — never hardcode root-relative hrefs.

### Switching to a custom domain

1. Set `CUSTOM_DOMAIN` in `src/config.ts` (the only code change).
2. Add a `public/CNAME` file containing the domain.
3. Point the domain's DNS at GitHub Pages and set the custom domain in the repo's Pages settings.

## License

AGPL-3.0-or-later, same as the main Gameplane repo.
