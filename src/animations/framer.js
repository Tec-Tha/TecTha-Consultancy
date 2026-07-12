/**
 * framer.js — reusable Framer Motion variants shared across components,
 * kept in sync with the "signal" ease used in gsap.js.
 */
export const EASE_SIGNAL = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SIGNAL },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE_SIGNAL } },
}

export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_SIGNAL },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_SIGNAL } },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_SIGNAL } },
}

export const navLinkHover = {
  rest: { y: 0 },
  hover: { y: -2, transition: { duration: 0.25, ease: EASE_SIGNAL } },
}

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_SIGNAL } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: EASE_SIGNAL } },
}

export const viewportOnce = { once: true, margin: '-80px' }
