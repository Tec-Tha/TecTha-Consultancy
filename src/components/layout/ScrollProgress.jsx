import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin progress bar fixed to the top of the viewport, tracking scroll depth.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setVisible(v > 0.01))
    return unsub
  }, [scrollYProgress])

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left bg-signal"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  )
}
