# Performance

Done:

-   Hero image optimized (2.3 MB source photo → ~71 KB JPEG, resized to
    the actual display dimensions)
-   Self-hosted fonts (no external font-CDN round trip)
-   `fetchPriority="high"` on the hero image (it's the LCP element)

Not yet done:

-   Code splitting / lazy loading (single JS bundle, ~410 KB)
-   Bundle analysis tooling
-   No automated Lighthouse run in CI — check manually against the
    README's Lighthouse 95+ goal before major changes
