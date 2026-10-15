# Haunted Game Night Bingo

A Halloween-themed 3x3 bingo card for a board game night. Every browser gets its own shuffled card, with "Eat a meal from Richeese Factory" always in the centre. To light up a square, the gamemaster has to enter the secret password, which is checked on the server.

## Tech
- Static HTML/CSS/JS in `public/`
- A Netlify Function (`netlify/functions/verify.mts`, served at `/api/verify`) that checks the gamemaster password
- Netlify Image CDN for the background image
- `localStorage` keeps each player's card layout and marked squares on their own device

## Run locally
```bash
npm install
netlify dev --port 8889
```

## Changing the password
Edit `GAMEMASTER_PASSWORD` in `netlify/functions/verify.mts`.
