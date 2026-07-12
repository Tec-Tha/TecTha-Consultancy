/**
 * gsap.js — shared GSAP timeline configs, ScrollTrigger presets,
 * and reusable easing so every component speaks the same motion language.
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const EASE = {
  signal: 'cubic-bezier(0.16, 1, 0.3, 1)',
  soft: 'power2.out',
  snap: 'power3.inOut',
}

/** Default scroll-reveal: fade + rise, triggered once near viewport center. */
export function scrollReveal(target, vars = {}) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: EASE.soft,
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      ...vars,
    }
  )
}

/** Stagger a group of children in on scroll (e.g. grid cards, list items). */
export function scrollStagger(targets, vars = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: EASE.soft,
      scrollTrigger: {
        trigger: targets[0]?.parentElement || targets,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      ...vars,
    }
  )
}

/** Draw an SVG path in on scroll — used by the network-topology signature motif. */
export function drawSvgPath(pathEl, vars = {}) {
  if (!pathEl) return null
  const length = pathEl.getTotalLength()
  gsap.set(pathEl, { strokeDasharray: length, strokeDashoffset: length })
  return gsap.to(pathEl, {
    strokeDashoffset: 0,
    duration: 1.6,
    ease: EASE.snap,
    scrollTrigger: {
      trigger: pathEl,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    ...vars,
  })
}

/** Parallax a layer's y-position against scroll progress through its section. */
export function parallaxLayer(target, distance = 80, vars = {}) {
  return gsap.fromTo(
    target,
    { y: -distance / 2 },
    {
      y: distance / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      ...vars,
    }
  )
}

export { gsap, ScrollTrigger }
