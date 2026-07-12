import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ParallaxLayer
 * Wraps content that should drift at a different rate than normal scroll,
 * driven by the element's own progress through the viewport (not global
 * scroll position), so it works correctly no matter where it sits on the page.
 *
 * API:
 *   <ParallaxLayer speed={0.3} direction="y">
 *     <FloatingCard />
 *   </ParallaxLayer>
 *
 * speed:     0 = locked to normal scroll, 1 = full-strength drift.
 *            Negative values drift opposite to scroll direction.
 * direction: "y" (default, vertical drift) or "x" (horizontal drift).
 *
 * For cursor-driven movement (not scroll-driven), use the useMouseParallax
 * hook directly on the element instead — this component is scroll-only.
 */
const ParallaxLayer = ({
  children,
  speed = 0.3,
  direction = "y",
  className = "",
  as: Component = motion.div,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Range travelled scales with speed; clamp to sane pixel bounds so
  // fast scroll speed values don't fling content off-frame.
  const range = Math.max(-400, Math.min(400, speed * 400));

  const offset = useTransform(scrollYProgress, [0, 1], [-range, range]);

  const style =
    direction === "x" ? { x: offset } : { y: offset };

  return (
    <Component ref={ref} style={style} className={`will-change-transform ${className}`}>
      {children}
    </Component>
  );
};

export default ParallaxLayer;