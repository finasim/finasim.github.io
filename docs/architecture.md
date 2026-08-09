# Architecture

## Overview

Data-driven React SPA (single route). Content lives in `src/data/*.ts`;
components render it rather than hardcoding copy. No pages/, layouts/,
or services/ folders — those aren't needed since there's one route and
no backend calls.

Real folders: `components/{common,layout,sections,ui}`, `context`,
`data`, `hooks`, `types`.

## Principles

-   Separation of concerns (content vs. presentation)
-   Reusable UI (`Section` wrapper used by every section)
-   Accessibility (focus-visible states, reduced-motion support,
    `lang` attributes on non-English text)
-   Performance (optimized images, no unnecessary re-renders)
