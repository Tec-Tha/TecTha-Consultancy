/**
 * helpers.js — small, dependency-free utility functions.
 */

/** Merge class name fragments, skipping falsy values. */
export function cx(...args) {
  return args.filter(Boolean).join(' ')
}

/** Clamp a number between min and max. */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/** Linear interpolation. */
export function lerp(start, end, t) {
  return start + (end - start) * t
}

/** Map a value from one range to another. */
export function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

/** Format a number with commas, e.g. 12345 -> "12,345". */
export function formatNumber(num) {
  return Math.round(num).toLocaleString('en-US')
}

/** Slugify a string for ids/anchors. */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Debounce a function by `wait` ms. */
export function debounce(fn, wait = 200) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), wait)
  }
}

/** Detect prefers-reduced-motion for gating heavy animation. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
