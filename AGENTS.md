# AGENTS.md

## Architecture
- `public/index.html` is the entire frontend: one self-contained page with inline CSS and JS. There's no framework and no build step.
- `public/img/haunted-night.jpg` is the background. Load it through `/.netlify/images?url=...&fm=webp`.
- `netlify/functions/verify.mts` handles `POST /api/verify` with `{ password }` and returns `{ ok }`. The password lives only here, so it never shows up in client source.

## Decisions
- Each card belongs to one browser: the shuffled order and marked squares are saved in `localStorage` under the key `haunted-bingo-v1`. Nothing is stored on a server because cards don't need to be shared or synced. If you change the challenge list, bump the key so old cards are regenerated.
- The centre square (index 4) is always Richeese Factory. The other 8 challenges are shuffled with `crypto.getRandomValues`.
- Marked squares glow in the four ghost colours from the background art (yellow, cyan, green, red).
