import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { mapRange, prefersReducedMotion } from '../utils/helpers'

/**
 * Subtle parallax offset based on pointer position within the viewport.
 * `depth` controls travel distance in px.
 */
export function useMouseParallax(depth = 20) {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      const x = mapRange(e.clientX, 0, window.innerWidth, -depth, depth)
      const y = mapRange(e.clientY, 0, window.innerHeight, -depth, depth)
      gsap.to(el, { x, y, duration: 1.2, ease: 'power3.out' })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [depth])

  return ref
}
