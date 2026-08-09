# Animations

Framer Motion handles fade/slide-in reveals (`whileInView`, once-only)
across every section, plus index-based delays for staggered lists
(skills, certifications, timeline items, project cards).

No page transitions — the site is a single route.

Reduced-motion is respected two ways: `<MotionConfig reducedMotion="user">`
in `main.tsx` (disables Framer Motion animations when the OS setting is
on) and a `prefers-reduced-motion` media query in `index.css` (collapses
CSS transitions/scroll-behavior).
