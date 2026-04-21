# Electrical-Services

Monorepo for **Bright Solutions Electrical Services** marketing site and tooling.

## Where the Next.js app lives

The deployable site is in **`electrical-services-app/`** (not the repository root).

## Vercel setup (one-time)

1. Import this GitHub repo in [Vercel](https://vercel.com).
2. **Project → Settings → General → Root Directory** → set to **`electrical-services-app`**.
3. Confirm the **Production Branch** is **`main`**.
4. Push to `main`; Vercel will build and deploy automatically.

If the live site looks outdated, the Root Directory is the most common misconfiguration.

## Updating the live site

Vercel deploys from **GitHub**, not from your laptop.

After changes are saved:

```bash
git add -A
git commit -m "Describe your change"
git push origin main
```

Until you push, production will not change.

## Local preview

```bash
cd electrical-services-app
npm install
npm run dev
```

Open the URL shown in the terminal (often `http://localhost:3000`).

## Other files

- **`index.html`** — early static mockup at repo root (optional reference).
- **`.cursor/skills/`** — Cursor agent skills for this workspace.
