/**
 * designTokens.js
 * Single source of truth for the visual language of the site.
 * Tailwind's config mirrors these values — update both together.
 */
export const colors = {
  ink: '#0B1220',
  inkDeep: '#080C15',
  inkRaised: '#121B2E',
  ivory: '#F5F1E8',
  ivoryDim: '#E7E1D2',
  signal: '#E8A33D',
  signalSoft: '#F2C077',
  slateblue: '#3D5A80',
  sage: '#8FA998',
}

export const typography = {
  display: '"Fraunces", ui-serif, Georgia, serif',
  body: '"Inter", ui-sans-serif, system-ui, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
  scale: {
    display1: 'clamp(3rem, 7vw, 7rem)',
    display2: 'clamp(2.25rem, 4.5vw, 4rem)',
    h1: 'clamp(2rem, 3.4vw, 3rem)',
    h2: 'clamp(1.5rem, 2.4vw, 2rem)',
    body: '1.0625rem',
    small: '0.875rem',
    label: '0.75rem',
  },
}

export const spacing = {
  sectionY: 'clamp(5rem, 10vw, 9rem)',
  gutter: 'clamp(1.5rem, 5vw, 4rem)',
}

export const motion = {
  ease: [0.16, 1, 0.3, 1], // "signal" ease — matches tailwind.config ease-signal
  durationFast: 0.4,
  durationBase: 0.7,
  durationSlow: 1.1,
}

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

export default { colors, typography, spacing, motion, breakpoints }
