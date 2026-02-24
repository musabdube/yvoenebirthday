# Yvoune Birthday Page

This project is configured for GitHub Pages deployment using static export.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## GitHub Pages setup

1. Push this repository to GitHub.
2. In your repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Keep your default branch as `main` (workflow deploys on push to `main`).

## Deploy

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which:

- installs dependencies,
- builds the site with `next build` (`output: "export"`),
- uploads the `out` folder,
- deploys to GitHub Pages.

After deploy, your site URL will be:

`https://<your-github-username>.github.io/yvonne-birthday/`

## Notes

- Static export is enabled in [next.config.ts](next.config.ts).
- The base path for GitHub Pages is set automatically from the repository name during GitHub Actions.
