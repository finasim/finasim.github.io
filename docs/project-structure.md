# Project Structure

``` text
src/
  assets/                     profile photo
  components/
    common/
      SEO.tsx                 per-page <Helmet> meta tags
      ThemeToggle.tsx         dark/light toggle button
    layout/
      Navbar.tsx              fixed nav, scroll-spy active link, mobile menu
      Footer.tsx              social links, copyright
    sections/                 one component per homepage section
      Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
      Projects.tsx, Certifications.tsx, Contact.tsx
    ui/
      Section.tsx             shared section wrapper (eyebrow/title/description)
  context/
    theme-context.ts          React context object + types
    ThemeContext.tsx          ThemeProvider (persists to localStorage)
  data/                       all editable content — see architecture.md
  hooks/
    useTheme.ts               reads ThemeContext
  types/
    index.ts                  shared interfaces (Project, Profile, etc.)
  App.tsx                     single "/" route, assembles sections
  main.tsx                    providers (Helmet, Theme, MotionConfig, Router)
  index.css                   Tailwind directives, focus-visible, reduced-motion
public/
  favicon.svg, og-image.png, robots.txt, sitemap.xml,
  Faysal-Islam-Nasim-Resume.pdf
```
