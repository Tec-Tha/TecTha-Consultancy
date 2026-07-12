# Vantage Point — Enterprise Website

A React + Vite marketing site for an enterprise systems consultancy, built with
Tailwind CSS, Framer Motion, GSAP (ScrollTrigger) and Lenis smooth scroll.

## Design direction
- **Palette:** ink navy background, ivory type, signal amber accent, slate blue + sage as secondary tones.
- **Type:** Fraunces (display serif) paired with Inter (body) and IBM Plex Mono (labels/data).
- **Signature element:** an animated network-topology line motif (`TextReveal` / section dividers)
  that threads through the page, drawn in on scroll — a visual metaphor for systems thinking.

## Getting started
```bash
npm install
npm run dev
```

## Structure
See the annotated folders under `src/` — `animations/` centralizes GSAP, Framer Motion and Lenis
config so every component pulls from the same motion language; `utils/designTokens.js` is the
single source of truth for colors, type and spacing referenced by JS (Tailwind config mirrors it).
