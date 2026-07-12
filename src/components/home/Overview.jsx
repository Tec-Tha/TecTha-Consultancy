import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Users } from "lucide-react";
import AnimatedCounter from "../shared/AnimatedCounter";

/**
 * Overview — Home Section 3
 * Two-column company overview directly beneath the logo strip. Left:
 * one large stat callout that anchors credibility. Right: the thesis
 * paragraph plus three differentiators. No cards, no icons-in-circles
 * cliché grid — just a clean editorial split.
 */

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Built for regulated industries",
    description:
      "Compliance and audit requirements are designed in from day one, not retrofitted before launch.",
  },
  {
    icon: Gauge,
    title: "Delivery measured in weeks",
    description:
      "Fixed-scope sprints with visible milestones — no multi-year roadmaps with nothing to show early.",
  },
  {
    icon: Users,
    title: "Senior engineers, not a bench",
    description:
      "The people scoping the work are the people building it, from kickoff through handover.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Overview = () => {
  return (
    <section className="bg-[color:var(--color-bg-primary)] py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Stat callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="flex flex-col justify-between rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
              Client retention
            </p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold leading-none tracking-tight text-[color:var(--color-text-primary)]">
                <AnimatedCounter from={0} to={94} suffix="%" duration={1.8} />
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
              of engagements lead to a second, unrelated project within
              eighteen months.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-[color:var(--color-border)]" />

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-bold text-[color:var(--color-text-primary)]">
                <AnimatedCounter from={0} to={19} suffix=" yrs" duration={1.6} />
              </p>
              <p className="mt-1 text-xs text-[color:var(--color-text-muted)]">
                Avg. leadership tenure
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[color:var(--color-text-primary)]">
                <AnimatedCounter from={0} to={6} duration={1.4} />
              </p>
              <p className="mt-1 text-xs text-[color:var(--color-text-muted)]">
                Industry verticals
              </p>
            </div>
          </div>
        </motion.div>

        {/* Thesis + differentiators */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            className="text-2xl font-semibold leading-snug text-[color:var(--color-text-primary)] md:text-3xl"
          >
            We're a technology consultancy built around one constraint:
            everything we recommend has to survive contact with your
            existing systems, your compliance team, and your timeline.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.18}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]"
          >
            That constraint shapes how we staff, scope, and deliver every
            engagement — fewer slide decks, more shipped systems.
          </motion.p>

          <div className="mt-12 space-y-8">
            {DIFFERENTIATORS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={0.24 + i * 0.08}
                  className="flex gap-5 border-t border-[color:var(--color-border)] pt-8 first:border-0 first:pt-0"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                    <Icon className="h-5 w-5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[color:var(--color-text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;