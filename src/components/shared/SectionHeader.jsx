import { motion } from "framer-motion";

/**
 * SectionHeader
 * Consistent header block used at the top of every section: a tracked
 * overline label, a large title (JSX so it can carry inline gradient
 * spans or line breaks), and an optional subtitle. Reveals via a
 * left-to-right clip-path wipe as it enters the viewport.
 *
 * API:
 *   <SectionHeader
 *     overline="Services"
 *     title={<>Built for scale, <span className="text-gradient">not slides</span></>}
 *     subtitle="Every engagement starts with the problem, not the deck."
 *     align="left"
 *   />
 */
const SectionHeader = ({
  overline,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  const wipeVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {overline && (
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={wipeVariants}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-brand-500)]"
        >
          {overline}
        </motion.span>
      )}

      {title && (
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.1}
          variants={fadeUp}
          className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[color:var(--color-text-primary)]"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.2}
          variants={fadeUp}
          className="text-base leading-relaxed text-[color:var(--color-text-secondary)] sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;