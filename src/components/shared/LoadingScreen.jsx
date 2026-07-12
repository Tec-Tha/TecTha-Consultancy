import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

/**
 * LoadingScreen
 * Fullscreen premium intro sequence:
 *  1. Brand mark draws itself via stroke-dashoffset
 *  2. Counter animates 0 -> 100 with eased increments
 *  3. On complete, panel exits via clip-path wipe revealing the app
 *
 * Usage:
 *   const [loading, setLoading] = useState(true);
 *   <LoadingScreen onComplete={() => setLoading(false)} />
 *   <AnimatePresence>{loading && <LoadingScreen ... />}</AnimatePresence>
 */
const LoadingScreen = ({ onComplete }) => {
  const pathRef = useRef(null);
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    const counter = { value: 0 };

    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setExiting(true);
        setTimeout(() => onComplete?.(), 900);
      },
    });

    if (path) {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
      });
    }

    tl.to(
      counter,
      {
        value: 100,
        duration: 1.6,
        ease: "power1.inOut",
        onUpdate: () => setCount(Math.round(counter.value)),
      },
      path ? 0.2 : 0
    );

    tl.to({}, { duration: 0.3 });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[color:var(--color-bg-primary)] overflow-hidden"
      initial={{ clipPath: "inset(0 0 0 0)" }}
      animate={exiting ? { clipPath: "inset(0 0 100% 0)" } : { clipPath: "inset(0 0 0 0)" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-gradient-start), var(--color-gradient-end) 70%)",
        }}
      />

      {/* Brand mark */}
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        className="relative mb-8"
      >
        <path
          ref={pathRef}
          d="M48 8 L84 28 V68 L48 88 L12 68 V28 Z M48 8 V88 M12 28 L84 68 M84 28 L12 68"
          stroke="url(#loadingGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="loadingGradient" x1="0" y1="0" x2="96" y2="96">
            <stop offset="0%" stopColor="var(--color-gradient-start)" />
            <stop offset="100%" stopColor="var(--color-gradient-end)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Counter */}
      <div className="relative flex items-baseline gap-1 font-[Inter] tabular-nums">
        <span className="text-5xl font-light text-[color:var(--color-text-primary)]">
          {count}
        </span>
        <span className="text-lg font-medium text-[color:var(--color-text-muted)]">
          %
        </span>
      </div>

      {/* Overline label */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-text-muted)]"
      >
        Loading Experience
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;