# SEO Strategy

Implemented:

-   Static meta description, canonical URL, and Open Graph/Twitter Card
    tags in `index.html` (crawlers that don't execute JS still see a
    real preview card)
-   Matching dynamic tags via `SEO.tsx` + React Helmet (for if/when
    additional routes are added)
-   `public/og-image.png` — 1200×630 share card
-   `public/robots.txt` and `public/sitemap.xml`

Not yet implemented:

-   Structured data (JSON-LD, e.g. `Person` schema)
