# GitHub Workflow

Feature branches (`feature/xyz`) → pull request → merge to `main`.
Merging to `main` triggers the deploy workflow (build + publish to
Pages) automatically — see [deployment.md](deployment.md).

Linting (`npm run lint`) is not currently run in CI; run it locally
before opening a PR.
