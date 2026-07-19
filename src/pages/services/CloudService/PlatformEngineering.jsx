import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  LayoutTemplate,
  Boxes,
  Rocket,
  ShieldCheck,
  Gauge,
  Route,
  Puzzle,
  Users,
  Eye,
  Wrench,
  Plus,
} from "lucide-react";
import ServiceNavbar from "../../../components/layout/ServiceNavbar";

/* ---------------------------------------------------------- */
/* Shared motion variants                                      */
/* ---------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const Eyebrow = ({ children, dark }) => (
  <p
    className={`text-xs font-semibold uppercase tracking-[0.25em] mb-5 font-['Montserrat'] ${
      dark ? "text-[#818CF8]" : "text-[#2563EB]"
    }`}
  >
    {children}
  </p>
);

const Counter = ({ value, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/(\d+)(?!.*\d)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[1].length);
    let frame = 0;
    const totalFrames = 45;
    const step = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

/* ---------------------------------------------------------- */
/* Data                                                         */
/* ---------------------------------------------------------- */

const CHALLENGES = [
  { icon: Puzzle, title: "Every team reinvents its own tooling", desc: "Without a shared platform, teams build one-off deployment and infrastructure setups that duplicate effort." },
  { icon: Wrench, title: "Developers waiting on infrastructure requests", desc: "Simple requests like provisioning a database or environment turn into multi-day tickets to another team." },
  { icon: ShieldCheck, title: "Inconsistent security and compliance", desc: "Without standard guardrails, every team's setup carries a different, unmanaged level of risk." },
  { icon: Gauge, title: "Slow onboarding for new engineers", desc: "New hires spend weeks learning fragmented tooling before they can ship their first change." },
  { icon: Users, title: "Platform team stretched thin", desc: "A small platform team fields the same support requests repeatedly instead of building for scale." },
  { icon: Eye, title: "No visibility into what's running where", desc: "As services multiply, no one has a clear picture of what exists, who owns it, or its current state." },
];

const FRAMEWORK = [
  { step: "01", title: "Assess", desc: "We map how your engineering teams currently ship code, provision infrastructure, and where friction slows them down.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" },
  { step: "02", title: "Design Golden Paths", desc: "We define standardized, self-service workflows for the most common tasks developers repeat every day.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop" },
  { step: "03", title: "Build the Platform", desc: "We build the internal developer platform, templates, and tooling that make those golden paths real.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop" },
  { step: "04", title: "Embed Guardrails", desc: "We bake security, compliance, and cost controls into the platform itself, so good practice is the default.", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop" },
  { step: "05", title: "Support & Evolve", desc: "We help your platform team maintain and extend the platform as new needs and services emerge.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" },
];

const DELIVERABLES = [
  { icon: LayoutTemplate, title: "Internal Developer Platform", desc: "A self-service platform giving engineers the tools they need without waiting on tickets." },
  { icon: Route, title: "Golden Path Templates", desc: "Standardized, pre-approved workflows for the tasks developers do most often." },
  { icon: Boxes, title: "Infrastructure Abstractions", desc: "Simplified interfaces over complex infrastructure, so teams provision safely without deep cloud expertise." },
  { icon: ShieldCheck, title: "Built-In Guardrails", desc: "Security, compliance, and cost controls embedded directly into the platform's default paths." },
  { icon: Rocket, title: "Faster Onboarding", desc: "New engineers ship their first change in days, not weeks, using standardized tooling." },
  { icon: Gauge, title: "Platform Observability", desc: "Clear visibility into what services exist, who owns them, and how they're performing." },
];

const INDUSTRIES = [
  { name: "SaaS & Technology", desc: "Platforms that let engineering scale without scaling headcount.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" },
  { name: "Financial Services", desc: "Self-service infrastructure with compliance guardrails built in.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" },
  { name: "E-Commerce", desc: "Standardized deployment paths for teams shipping frequently.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" },
  { name: "Healthcare", desc: "Platforms enforcing consistent security across every service.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" },
  { name: "Manufacturing", desc: "Internal platforms connecting software teams to operational systems.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" },
  { name: "Logistics", desc: "Golden paths built for teams shipping across many services at once.", image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop" },
];

const IMPACT = [
  { value: "80%", label: "Fewer Infrastructure Support Tickets" },
  { value: "5x", label: "Faster New Engineer Onboarding" },
  { value: "60%", label: "Faster Time to First Deploy" },
  { value: "100%", label: "Services Covered by Standard Guardrails" },
];

const FAQS = [
  { q: "How is platform engineering different from DevOps?", a: "DevOps focuses on automating delivery pipelines for a given team. Platform engineering builds the shared, self-service foundation, tools, templates, and guardrails, that every team in the organization builds on top of." },
  { q: "Do we need a dedicated platform team for this to work?", a: "It helps, but isn't required to start. We can help you stand up the platform and either support your existing team or help you build the platform team that will own it going forward." },
  { q: "Will golden paths limit what our developers can build?", a: "No. Golden paths cover the common, repeatable cases so developers move fast by default, while still leaving room for teams to go outside the path when a task genuinely needs it." },
  { q: "How long does it take to see impact from a platform investment?", a: "Teams typically see faster onboarding and fewer support tickets within the first few months, as the first golden paths roll out and adoption grows." },
  { q: "Does this replace our existing cloud or DevOps tooling?", a: "No, it sits on top of it. The platform packages your existing infrastructure and tooling into simpler, self-service workflows rather than replacing the underlying systems." },
];

/* ---------------------------------------------------------- */
/* Page                                                         */
/* ---------------------------------------------------------- */

const PlatformEngineering = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-[#0B1120]">
      <ServiceNavbar />

      {/* ============================================================ */}
      {/* HERO — full screen cinematic                                  */}
      {/* ============================================================ */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden flex items-end">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop"
            alt="Cloud strategy and roadmap planning"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-24 pt-40">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#93A5FF] mb-6 font-['Montserrat']">
            Cloud Strategy
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="text-white text-4xl md:text-6xl lg:text-7xl font leading-[1.03] max-w-4xl mb-8 tracking-tight"
          >
            A cloud roadmap the whole business can stand behind.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            We build the roadmap, cost model, and governance framework
            that turn cloud investment into a plan engineering, finance,
            and leadership can all execute against.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Schedule a Strategy Session
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY CLOUD STRATEGY — split, floating cards                    */}
      {/* ============================================================ */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Eyebrow>Why Cloud Strategy</Eyebrow>
            <h2 className="text-3xl md:text-5xl font leading-[1.1] mb-8 tracking-tight text-[#0B1120]">
              Cloud investment without a plan is just spend.
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-5">
              <p>
                Most organizations approve cloud budgets before they have
                a real plan for where that money leads. Provider choice,
                architecture direction, and cost projections get decided
                team by team, with no shared view of the destination.
              </p>
              <p>
                A cloud strategy fixes that before a dollar is committed.
                It ties provider and architecture decisions to a real cost
                model, sequences the roadmap around business priorities,
                and gets engineering, finance, and leadership aligned on
                the same plan.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.15}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                alt="Cloud roadmap and governance"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 to-transparent" />
            </div>

            {[].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                style={{
                  position: "absolute",
                  bottom: `${24 + i * 68}px`,
                  left: i % 2 === 0 ? "-24px" : "auto",
                  right: i % 2 !== 0 ? "-24px" : "auto",
                }}
                className="rounded-2xl border border-black/5 bg-white shadow-xl px-5 py-3 flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                <span className="text-sm font-semibold text-[#0B1120]">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXECUTIVE CHALLENGES — black bg, glass cards                  */}
      {/* ============================================================ */}
      <section className="py-32 px-6 md:px-10 bg-black">
        <div className="max-w-[1400px] mx-auto">
      
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-blue-500 font-semibold mb-4">
              Strategic Challenges
            </p>
      
            <h2 className="text-5xl md:text-6xl text-white font-light leading-tight max-w-6xl">
              Why AI initiatives
              <br />
              fail before they scale.
            </h2>
          </motion.div>
      
          <div className="space-y-6">
      
            {CHALLENGES.map((item,index)=>(
      
              <motion.div
                key={item.title}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{
                  duration:0.6,
                  delay:index*0.08
                }}
                whileHover={{x:8}}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500"
              >
      
                <div className="grid md:grid-cols-[100px_1fr] gap-10 items-center p-10">
      
                  <div className="text-6xl font text-white/10 group-hover:text-blue-500 transition">
                    0{index+1}
                  </div>
      
                  <div>
                    <h3 className="text-3xl text-white mb-3">
                      {item.title}
                    </h3>
      
                    <p className="text-lg leading-8 text-white/70 max-w-4xl">
                      {item.desc}
                    </p>
                  </div>
      
                </div>
      
                <div className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-500"/>
      
              </motion.div>
      
            ))}
      
          </div>
      
        </div>
      </section>
      {/* ============================================================ */}
      {/* STRATEGY FRAMEWORK — large stacked image cards                 */}
      {/* ============================================================ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
      
          {/* Heading */}
          <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold mb-5">
            Strategy Framework
          </p>
      
          <h2 className="text-5xl font-light text-slate-900 max-w-4xl mb-20 leading-tight">
            A disciplined path from ambiguity
            <br />
            to execution.
          </h2>
      
          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      
            {FRAMEWORK.map((item, index) => (
              <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
        }}
        className="group"
      >
      
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
      
                {/* Title */}
                <h3 className="mt-8 text-4xl font-light text-slate-900">
                  {item.title}
                </h3>
      
                {/* Description */}
                <p className="mt-5 text-lg leading-9 text-slate-600">
                  {item.desc}
                </p>
      
              </motion.div>
            ))}
      
          </div>
      
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE DELIVER — white bg, icon cards                        */}
      {/* ============================================================ */}
      <section className="bg-black py-28">
        <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-[420px_1fr] gap-20">
            {/* Left Sticky */}
            <div className="lg:sticky lg:top-28 self-start">
      
              <Eyebrow>What We Deliver</Eyebrow>
      
              <h2 className="mt-5 text-5xl font-light leading-tight text-white">
                Tangible deliverables your teams can act on.
              </h2>
      
              <p className="mt-8 text-lg leading-8 text-white/60">
                Every engagement concludes with practical outputs that help
                leadership make confident decisions and accelerate execution.
              </p>
      
            </div>
      
            {/* Right Cards */}
            <div className="space-y-8">
      
              {DELIVERABLES.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  className="sticky top-32"
                >
                  <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10">
      
                    <div className="flex items-center justify-between">
      
                      <span className="text-7xl font-light text-white/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
      
                    </div>
      
                    <h3 className="mt-8 text-3xl font text-white">
                      {item.title}
                    </h3>
      
                    <p className="mt-5 text-lg leading-8 text-white/60">
                      {item.desc}
                    </p>
      
                  </div>
                </motion.div>
              ))}
      
      </div>
      </div>
      </div>
      </section>

  
      {/* ============================================================ */}
      {/* FAQ — split, accordion                                        */}
      {/* ============================================================ */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:sticky md:top-32 h-fit"
          >
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-5xl font leading-[1.1] tracking-tight text-[#0B1120]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-black/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left px-7 py-6 hover:bg-black/[0.02] transition-colors"
                  >
                    <span className="text-base md:text-lg font-semibold text-[#0B1120]">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10"
                    >
                      <Plus className="h-4 w-4 text-[#2563EB]" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 leading-relaxed px-7 pb-7 max-w-2xl">{faq.a}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA — cinematic                                         */}
      {/* ============================================================ */}
      <section className="relative py-40 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop"
            alt="Enterprise cloud strategy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-[1000px] mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font leading-[1.05] text-white mb-8 tracking-tight">
            Give your cloud investment a direction, not just a budget.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Our strategists help you build the roadmap, cost model, and
            alignment that turn cloud spend into a plan the whole business
            can execute against.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
          >
            Schedule a Strategy Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default PlatformEngineering;