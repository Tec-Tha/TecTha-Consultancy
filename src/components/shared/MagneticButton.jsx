import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * MagneticButton
 * Wraps any button/link content and pulls it toward the cursor within
 * a radius, then springs back to rest on mouse leave.
 *
 * API:
 *   <MagneticButton strength={0.4}>Get in touch</MagneticButton>
 *   <MagneticButton as="a" href="/contact" strength={0.5} className="...">Talk to us</MagneticButton>
 *
 * strength: 0 - 1, how far the element travels relative to cursor offset.
 * radius:   px distance from center at which the pull begins to taper off.
 */
const MagneticButton = ({
  as: Component = "button",
  children,
  strength = 0.4,
  radius = 80,
  className = "",
  ...props
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const textX = useSpring(x, { ...springConfig, stiffness: 180 });
  const textY = useSpring(y, { ...springConfig, stiffness: 180 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

    // Taper the pull as the cursor nears the edge of the influence radius
    const falloff = Math.max(0, 1 - distance / (radius * 2.2));

    x.set(offsetX * strength * falloff);
    y.set(offsetY * strength * falloff);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative inline-block"
    >
      <Component
        className={`relative inline-flex items-center justify-center will-change-transform ${className}`}
        {...props}
      >
        <motion.span
          style={{ x: textX, y: textY }}
          className="inline-flex items-center justify-center gap-2"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  );
};

export default MagneticButton;