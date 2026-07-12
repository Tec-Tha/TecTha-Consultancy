import { motion } from "framer-motion";
import { Cpu, Layers, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

/**
 * Innovation — Home Section 9
 * Editorial bento grid. Unlike the ServicesGrid (uniform cards, scannable),
 * this section trades symmetry for hierarchy — one cell carries the idea,
 * the rest support it. Reserved for R&D and applied-innovation content.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const FOCUS_AREAS = [
  { label: "Applied AI", value: "42" },
  { label: "Data Platforms", value: "31" },
  { label: "Cloud Infra", value: "27" },
];

const Innovation = () => {
  return (
    <section className="bg-[color:var(--color-bg-primary)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          overline="Innovation"
          title={
            <>
              Where R&amp;D earns
              <br className="hidden sm:block" /> its way into production.
            </>
          }
          subtitle="Our innovation practice exists to de-risk what's next before it reaches your roadmap."
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2">
          {/* Large feature cell */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] p-10 text-white md:col-span-4 md:row-span-2"
          >
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#6366F1]/40 to-transparent blur-3xl"
              aria-hidden="true"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-[#818CF8]" />
              Innovation Lab
            </span>

            <h3 className="mt-8 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
              Every engagement feeds a working prototype, not a slide deck.
            </h3>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-400">
              Emerging techniques are tested against real client data
              before they're recommended — if it doesn't survive contact
              with production constraints, it doesn't ship.
            </p>

            <a
              href="/about#innovation"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Inside the lab
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Focus areas cell */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-8 md:col-span-2"
          >
            <Layers className="h-6 w-6 text-[color:var(--color-brand-500)]" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
              Active focus areas
            </p>
            <ul className="mt-5 space-y-4">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area.label}
                  className="flex items-center justify-between border-b border-[color:var(--color-border)] pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-[color:var(--color-text-secondary)]">
                    {area.label}
                  </span>
                  <span className="text-lg font-semibold text-[color:var(--color-text-primary)]">
                    {area.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pull quote cell — accent font used sparingly, per type system */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.2}
            className="flex flex-col justify-between rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-secondary)] p-8 md:col-span-2"
          >
            <Cpu className="h-6 w-6 text-[color:var(--color-accent)]" />
            <p
              className="mt-5 text-xl leading-snug text-[color:var(--color-text-primary)]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              &ldquo;Prototype in weeks. Prove it in production. Decide
              after, not before.&rdquo;
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
              Lab operating principle
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;