import { motion, useScroll, useSpring } from "framer-motion";
 
/**
 * ScrollProgress — thin gradient bar fixed to the very top edge of the
 * viewport, above the Navbar in stacking order. Tracks whole-page scroll
 * progress, smoothed with a spring so it doesn't feel like it's stepping
 * frame-by-frame with Lenis's eased scroll.
 */
 
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 40,
    mass: 0.3,
  });
 
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-white"
      aria-hidden="true"
    />
  );
};
 
export default ScrollProgress;