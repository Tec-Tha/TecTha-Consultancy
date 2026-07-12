import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

/**
 * ThemeToggle
 * Pill switch that morphs between sun and moon glyphs with spring physics
 * as the thumb slides across. Reads/writes theme via the useTheme hook,
 * which is expected to expose { theme, toggleTheme } backed by ThemeContext.
 *
 * Usage:
 *   <ThemeToggle />
 */
const springTransition = { type: "spring", stiffness: 500, damping: 30 };

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className={`relative flex h-8 w-14 items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg-secondary)] px-1 transition-colors duration-300 ${className}`}
    >
      {/* Track background glow shifts with theme */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(30,41,59,0))"
            : "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(255,255,255,0))",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Sliding thumb */}
      <motion.div
        layout
        transition={springTransition}
        animate={{ x: isDark ? 24 : 0 }}
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-bg-card)] shadow-md"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={springTransition}
              className="absolute inline-flex"
            >
              <Moon size={14} className="text-[color:var(--color-accent)]" strokeWidth={2.25} />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={springTransition}
              className="absolute inline-flex"
            >
              <Sun size={14} className="text-[color:var(--color-gold)]" strokeWidth={2.25} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;