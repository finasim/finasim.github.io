# Coding Standards

-   Strict TypeScript (`strict: true` in tsconfig)
-   Functional components only, no class components
-   ESLint (`npm run lint`) — not currently enforced in CI, run locally
-   Tailwind utility classes only, no inline `style={{}}`
-   Reusable components over duplication (e.g. shared `Section` wrapper)

Prettier is listed as a dependency but has no config file and no
`format` script yet — formatting is currently manual/editor-driven.
