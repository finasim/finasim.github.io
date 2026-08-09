# Faysal Islam Nasim Portfolio Website

> Recruiter-focused portfolio built with React, TypeScript, Vite and
> Tailwind CSS. Deployed at [finasim.github.io](https://finasim.github.io/).

## Vision

A world-class engineering portfolio focused on Salesforce Architecture
and Development.

## Goals

-   Showcase Salesforce expertise
-   Highlight architecture and integration skills
-   Present real shipped products alongside representative case studies
-   Achieve Lighthouse 95+
-   Deploy on GitHub Pages

## Tech Stack

-   React 19
-   TypeScript 6
-   Vite 8
-   Tailwind CSS v3 (PostCSS)
-   Framer Motion
-   React Router v7 (single route; used for `BrowserRouter` conventions,
    not multi-page navigation)
-   React Helmet Async
-   lucide-react + react-icons (icons)
-   clsx (conditional classNames)
-   Self-hosted fonts via `@fontsource` (Inter, Space Grotesk)

No backend, CMS, or third-party API integration — see
[docs/api-design.md](docs/api-design.md).

## Folder Structure

``` text
src/
  assets/            # images
  components/
    common/          # SEO, ThemeToggle
    layout/          # Navbar, Footer
    sections/        # Hero, About, Skills, Experience, Projects,
                      # Certifications, Contact
    ui/              # shared building blocks (Section)
  context/           # ThemeContext (dark/light mode)
  data/              # content — see Architecture below
  hooks/             # useTheme
  types/             # shared TypeScript interfaces
  App.tsx
  main.tsx
  index.css
```

## Main Sections

1.  Hero
2.  About
3.  Skills
4.  Experience
5.  Projects (Products + Case Studies)
6.  Certifications
7.  Contact

Resume download is a CTA button in Hero/Contact, not a standalone
section.

## Architecture

Data-driven: content lives in `src/data/*.ts`, components render it.

-   `profile.ts`
-   `experience.ts`
-   `certifications.ts`
-   `skills.ts`
-   `social.ts`
-   `projects.ts`

Components should render data instead of hardcoding content.

## UI Guidelines

-   Apple/Vercel inspired
-   Dark & light mode (class-based, persisted to `localStorage`)
-   Glassmorphism navbar (backdrop blur on scroll)
-   Responsive
-   Accessible (focus-visible rings, `prefers-reduced-motion` support)
-   Motion via Framer Motion, respecting reduced-motion preference

## Status

All phases below are built and deployed.

-   [x] Project setup, theme, routing, layout
-   [x] Navbar, Hero, Footer
-   [x] About, Skills, Experience
-   [x] Projects (Products + Case Studies), Certifications, Resume CTA
-   [x] Contact, SEO, GitHub Pages deployment, performance pass

See [docs/future-roadmap.md](docs/future-roadmap.md) for what's next.

## Personalization

-   Faysal Islam Nasim
-   Salesforce Developer & Platform Integration Architect
-   6+ Years Experience
-   Certifications: Platform Integration Architect, Platform Developer II,
    Platform Developer I, Administrator, Agentforce Specialist, Data Cloud
    Consultant, Marketing Cloud Email Specialist, SCRUM Team Member

## Success Criteria

Within 30 seconds a recruiter should understand: who you are, your
specialization, your certifications, your best projects, and how to
contact you.
