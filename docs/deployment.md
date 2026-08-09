# Deployment

Deployed to GitHub Pages as a user site (`finasim.github.io`), which
serves from the domain root — `vite.config.ts` sets `base: "/"`
accordingly (a project-page repo would need `base: "/repo-name/"`
instead).

`.github/workflows/deploy.yml` runs on every push to `main`:

1.  `npm ci`
2.  `npm run build` (`tsc -b && vite build`)
3.  Upload `dist/` as a Pages artifact
4.  `actions/deploy-pages` publishes it

Repo setting **Settings → Pages → Build and deployment → Source** must
be `GitHub Actions`, not `Deploy from a branch` — otherwise GitHub's
legacy Pages builder serves the raw (unbuilt) source instead of this
workflow's output.
