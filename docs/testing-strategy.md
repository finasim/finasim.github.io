# Testing Strategy

No automated test suite exists yet (no Vitest/Jest/Testing Library
configured, no test files).

Verification has been manual: `npm run build` + `tsc`/`eslint` clean
before each change, plus manual checks in-browser across light/dark
theme and mobile/desktop viewports. Accessibility has been reviewed by
hand (keyboard focus, `prefers-reduced-motion`, `lang` attributes) —
not run through automated tooling like axe or Lighthouse CI.
