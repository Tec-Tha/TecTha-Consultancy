/**
 * lenis.js — smooth scroll setup, synced to GSAP's ticker so
 * ScrollTrigger stays in lockstep with Lenis's virtual scroll.
 */
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../utils/helpers'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export function initLenis() {
  if (lenisInstance || typeof window === 'undefined') return lenisInstance
  if (prefersReducedMotion()) return null

  lenisInstance = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  })

  lenisInstance.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenisInstance?.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  return lenisInstance
}

export function destroyLenis() {
  lenisInstance?.destroy()
  lenisInstance = null
}

export function getLenis() {
  return lenisInstance
}

/** Smooth-scroll to a target selector or element. */
export function scrollTo(target, options = {}) {
  lenisInstance?.scrollTo(target, { offset: -80, ...options })
}
