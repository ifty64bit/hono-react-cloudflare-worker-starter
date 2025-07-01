# 🌩️ Cloudflare Worker + Vite + React + SPA FullStack Template

A lightweight fullstack template using:

-   ⚡️ **Cloudflare Workers** — backend with blazing-fast edge execution
-   🧩 **Hono** — routing + type-safe API with optional RPC
-   ⚛️ **React + Vite** — modern frontend SPA
-   📁 **Single repo** — frontend and backend in one
-   📦 **TypeScript everywhere**
-   🚀 **Instant deploy** with `wrangler`

---

## 📁 Folder Structure

```
.
├── src/              # Cloudflare Worker (backend, API)
│   └── index.ts
├── web/              # Frontend (Vite + React SPA)
│   ├── index.html
│   └── src/
│       └── App.tsx
├── package.json      # Root scripts for fullstack workflow
├── wrangler.toml     # Cloudflare Worker config
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourname/yourproject.git
cd yourproject
npm install
```

## 🌐 Dev Mode

Run both frontend and backend together:

```bash
npm run dev
```

This will:

-   Start Cloudflare Worker via wrangler dev

-   Start Vite dev server via npm --prefix web run dev

## 🏗️ Build for Production

```bash
npm run build
```

This will:

-   Build backend logic (optional dry-run)

-   Build frontend React SPA into web/dist

## 🚀 Deploy to Cloudflare

```bash
npm run deploy
```

-   Deploys your Worker + SPA to Cloudflare edge

-   Static files served from web/dist

-   API routes handled under /api

## 📦 Scripts

### Script Description

`dev` Run both frontend and worker

`dev:web` Frontend only (Vite dev server)

`dev:worker` Worker only (Wrangler)

`build` Build both backend and frontend

`deploy` Deploy to Cloudflare

`cf-typegen` Generate types for environment

## 🧪 Example Routes

Route Type Description

`/` Frontend React SPA entry point

`/api/health` Backend API Health check endpoint

`/api/auth/login` Backend API Sample login route

🔒 All `/api/*` routes are handled by your Worker (run_worker_first)

## 🧠 Features

-   ✅ Full TypeScript support

-   ✅ Type-safe Hono RPC client (via hc<AppType>())

-   ✅ SPA fallback (index.html) for frontend routing

-   ✅ Dev-first workflow

-   ✅ Fast Cloudflare edge deployment

## 🧰 Tools Used

-   Cloudflare Workers

-   Wrangler

-   Hono

-   React

-   Vite
