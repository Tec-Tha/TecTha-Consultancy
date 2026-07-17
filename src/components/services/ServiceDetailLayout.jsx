import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

/**
 * ServiceDetailLayout — shared layout used by every service detail page.
 * Accepts a `data` object with sections: hero, overview, features,
 * techStack, industries, process, whyChooseUs, faqs.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[color:var(--color-border)]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-[color:var(--color-text-primary)]"
      >
        {q}
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-[color:var(--color-text-muted)]" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-[color:var(--color-text-muted)]" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
          {a}
        </p>
      )}
    </div>
  );
};

const ServiceDetailLayout = ({ data }) => {
  const { hero, overview, features, techStack, industries, process, whyChooseUs, faqs } = data;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#080C14]">
        <img
          src={hero.image}
          alt={hero.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/60 to-transparent" />

        <div className="relative mx-auto flex max-w-4xl flex-col justify-end px-6 pb-20 pt-40">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Link
              to="/services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>

          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#818CF8]"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.18}
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.26}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="bg-[color:var(--color-bg-primary)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
            >
              <h2 className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
                {overview.heading}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                {overview.intro}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                {overview.whyNeeded}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.1}
            >
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
                  Business value
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                  {overview.businessValue}
                </p>

                {overview.useCases?.length > 0 && (
                  <>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
                      Common use cases
                    </p>
                    <ul className="mt-3 space-y-2">
                      {overview.useCases.map((uc) => (
                        <li
                          key={uc}
                          className="flex items-start gap-2.5 text-sm text-[color:var(--color-text-secondary)]"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-brand-600)]" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      {features?.length > 0 && (
        <section id="features" className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
              What we deliver
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={i * 0.07}
                    className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                      <Icon className="h-5 w-5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-[color:var(--color-text-primary)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {techStack?.length > 0 && (
        <section id="tech-stack" className="bg-[color:var(--color-bg-primary)] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Technologies we use
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] px-4 py-2 text-sm font-medium text-[color:var(--color-text-secondary)]"
                  >
                    <Icon className="h-4 w-4 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {process?.length > 0 && (
        <section id="process" className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
              How we work
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={i * 0.07}
                  className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7"
                >
                  <span className="text-3xl font-bold tracking-tight text-[color:var(--color-brand-500)]/40">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[color:var(--color-text-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries */}
      {industries?.length > 0 && (
        <section id="industries" className="bg-[color:var(--color-bg-primary)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
              Industries we serve
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={i * 0.07}
                    className="flex gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                      <Icon className="h-4.5 w-4.5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[color:var(--color-text-primary)]">
                        {industry.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                        {industry.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Why choose us */}
      {whyChooseUs?.length > 0 && (
        <section id="why-choose-us" className="bg-[color:var(--color-bg-secondary)] py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
              Why work with us
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={i * 0.07}
                    className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] dark:bg-white/5">
                      <Icon className="h-5 w-5 text-[color:var(--color-brand-600)] dark:text-[color:var(--color-brand-400)]" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-[color:var(--color-text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs?.length > 0 && (
        <section id="faqs" className="bg-[color:var(--color-bg-primary)] py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-[color:var(--color-text-primary)] md:text-3xl">
              Common questions
            </h2>
            <div className="mt-10 divide-y divide-[color:var(--color-border)] rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] px-7">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceDetailLayout;
