# Its Not Scary! 🐛

An interactive picture-book web app for young children to learn about bugs in a fun, friendly way. Explore 16+ illustrated bugs, read about where they live and what they eat, listen to descriptions read aloud, and take a quiz!

## Features

- **13 animated SVG bug illustrations** — Ladybug, Butterfly, Caterpillar, Bee, Ant, Dragonfly, Firefly, Spider, Beetle, Grasshopper, Earthworm, Praying Mantis, Pill Bug
- **Detail pages** — description, habitat, diet, and fun facts for every bug
- **Read Aloud** — text-to-speech narration with voice selection (uses the Web Speech API)
- **Quiz mode** — unlocks after visiting 5 bugs; 5 multiple-choice questions
- **Progress tracker** — shows how many of the 13 bugs have been visited
- **Dark mode** — toggleable, persisted to `localStorage`
- **Responsive layout** — works on desktop, tablet, and mobile

## Share with your kids

You can use this app now by visiting: [https://itsnotscary.org](https://itsnotscary.org)

> If your kids like this and you want to add more bugs, send me an email: [hello@jaylendouglas.com](mailto:hello@jaylendouglas.com)

## Tech Stack

| | |
|---|---|
| UI | [Solid.js](https://solidjs.com) 1.9.11 |
| Routing | [@solidjs/router](https://github.com/solidjs/solid-router) 0.16.1 |
| Build | [Vite](https://vite.dev) 8 |
| Language | TypeScript 5.9 |
| Linting/Formatting | [Biome](https://biomejs.dev) |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Type-check and build for production to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Check code with Biome |
| `pnpm lint:fix` | Fix lint issues automatically |
| `pnpm lint:format` | Format all files with Biome |
| `pnpm lint:all` | Check and auto-fix both lint and formatting |

## CI/CD

GitHub Actions runs three jobs on every push and pull request to `main`:

1. **Lint** — runs `pnpm run lint:all` via Biome
2. **Build** — runs `pnpm run build` and uploads `dist/` as an artifact
3. **Deploy** *(pushes to `main` only)* — downloads the artifact and deploys via SSH

