import { motion } from "framer-motion";
import AnimatedCounter from "../shared/AnimatedCounter";

/**
 * Statistics — Home Section 6
 * Full-bleed gradient band, deliberately placed between ServicesGrid and
 * FeaturedWork to break up two white/light sections with one dark, high-
 * contrast pause. Four counters, no icons, no cards — numbers carry it.
 */

const STATS = [
  { value: 180, suffix: "+", label: "Engagements delivered" },
  { value: 24, suffix: "", label: "Countries served" },
  { value: 94, suffix: "%", label: "Client retention rate" },
  { value: 3.2, suffix: "B", prefix: "$", label: "Client value unlocked", decimals: 1 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Statistics = () => {
  return (
    <section className="relative overflow-hidden bg-[#080C14] py-24 md:py-32">
      {/* Signature gradient wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/25 via-transparent to-[#6D28D9]/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
        >
          By the numbers
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-y-14 md:grid-cols-4 md:gap-x-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.1 + i * 0.1}
              className="border-l border-white/10 pl-6 first:border-l-0 first:pl-0 md:first:border-l md:first:pl-6"
            >
              <p className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-white">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2}
                />
              </p>
              <p className="mt-3 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;