import { motion } from "framer-motion";
import { Timer, GitBranch, Users2, TrendingUp } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

/**
 * WhyUs — Home Section 7
 * Alternating left/right feature rows, each paired with an abstract
 * floating illustration rather than a screenshot or stock photo. Rows
 * flip direction to keep a long section from feeling like a repeated
 * template block.
 */

const FEATURES = [
  {
    icon: Timer,
    eyebrow: "Delivery speed",
    title: "Weeks to first working system, not quarters to a proposal",
    description:
      "We scope in two-week increments with something demonstrable at the end of each one — no six-month discovery phase before you see a line of working code.",
    gradient: "from-[#2563EB] to-[#4F46E5]",
  },
  {
    icon: GitBranch,
    eyebrow: "Integration philosophy",
    title: "Built to sit inside your stack, not replace it wholesale",
    description:
      "Recommendations are constrained by what you already run in production. Rip-and-replace is a last resort, not a default posture.",
    gradient: "from-[#7C3AED] to-[#6366F1]",
  },
  {
    icon: Users2,
    eyebrow: "Team model",
    title: "The engineers who scope the work are the ones who build it",
    description:
      "No handoff between a sales team that scopes and a delivery team that inherits the scope. Continuity from kickoff to handover.",
    gradient: "from-[#3B82F6] to-[#2563EB]",
  },
  {
    icon: TrendingUp,
    eyebrow: "Long-term fit",
    title: "Measured on what happens after we leave",
    description:
      "Engagements are scoped with an exit in mind — internal teams are trained to own and extend what we build, not stay dependent on us.",
    gradient: "from-[#6D28D9] to-[#7C3AED]",
  },
];

const fadeSide = (fromRight) => ({
  hidden: { opacity: 0, x: fromRight ? 32 : -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
});

const FloatingMark = ({ gradient, reversed }) => (
  <div className="relative flex h-full min-h-[280px] items-center justify-center">
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute h-48 w-48 rounded-[2.5rem] bg-gradient-to-br ${gradient} opacity-90 ${
        reversed ? "rotate-[8deg]" : "-rotate-[8deg]"
      }`}
    />
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="absolute h-32 w-32 -translate-x-14 translate-y-16 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] backdrop-blur-sm"
    />
  </div>
);

const WhyUs = () => {
  return (
    <section className="bg-[color:var(--color-bg-secondary)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          overline="Why Choose Us"
          title={
            <>
              Four things clients mention
              <br className="hidden sm:block" /> before we ask.
            </>
          }
          subtitle="Not a values statement — patterns we hear back from clients unprompted."
          align="left"
        />

        <div className="mt-16 space-y-24 md:space-y-28">
          {FEATURES.map((feature, i) => {
            const reversed = i % 2 === 1;
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  variants={fadeSide(reversed)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                    <Icon className="h-5 w-5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]">
                    {feature.eyebrow}
                  </p>

                  <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug text-[color:var(--color-text-primary)] md:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                    {feature.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeSide(!reversed)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                >
                  <FloatingMark gradient={feature.gradient} reversed={reversed} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;