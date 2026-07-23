# Mathan R — Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
Output goes to `dist/`.

## Deploy to Vercel (keep the same live URL)
1. Push this folder to your existing GitHub repo (the one already connected to your Vercel project), replacing its old contents.
2. Vercel auto-detects Vite. Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`.
3. Push to the branch Vercel is watching (usually `main`) — it redeploys automatically and your existing vercel.app link stays the same.
