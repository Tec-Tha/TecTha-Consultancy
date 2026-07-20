import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Target,
  Database,
  TrendingUp,
  Search,
  ClipboardCheck,
  ListOrdered,
  Map,
  Rocket,
  FileSearch,
  Briefcase,
  ShieldCheck,
  Layers,
  Plus,
} from "lucide-react";
import ServiceNavbar from "../../../components/layout/ServiceNavbar";

/* ---------------------------------------------------------- */
/* Shared motion variants                                      */
/* ---------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.16, 1, 0.3, 1],
    },
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
  { icon: Map, title: "No AI roadmap", desc: "Initiatives move forward without a sequenced plan tying investment to business priority." },
  { icon: Rocket, title: "AI pilots that never scale", desc: "Proof-of-concept models perform well in isolation but stall before reaching production." },
  { icon: Database, title: "Disconnected data", desc: "Fragmented data across business units makes enterprise-wide AI initiatives difficult to trust." },
  { icon: Layers, title: "Legacy infrastructure", desc: "Aging systems constrain what AI capability can realistically be deployed and maintained." },
  { icon: TrendingUp, title: "Poor ROI visibility", desc: "Leadership cannot clearly trace AI spend back to measurable business outcomes." },
  { icon: ShieldCheck, title: "Governance gaps", desc: "AI adoption outpaces the risk, compliance, and oversight structures meant to control it." },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Discover",
    image: "/Ai/aii.jpg",
    desc: "We map your current data, systems, and operational workflows to establish a clear baseline before any recommendation is made.",
  },
  {
    step: "02",
    title: "Assess",
    image: "/Ai/19.jpg",
    desc: "We evaluate AI readiness across data quality, infrastructure, talent, and governance to identify what is realistically achievable.",
  },
  {
    step: "03",
    title: "Prioritize",
    image: "/Ai/20.jpg",
    desc: "Opportunities are scored against business value and delivery feasibility, so effort goes where it creates the most defensible return.",
  },
  {
    step: "04",
    title: "Roadmap",
    image: "/Ai/21.jpg",
    desc: "We sequence initiatives into a phased execution plan, aligned to budget cycles, technical dependencies, and stakeholder readiness.",
  },
  {
    step: "05",
    title: "Execute",
    image: "/Ai/22.jpg",
    desc: "Our teams support delivery from pilot through production, with governance checkpoints built into every phase of the rollout.",
  },
];

const DELIVERABLES = [
  { icon: FileSearch, title: "AI Opportunity Assessment", desc: "A structured evaluation of where AI can create measurable value across your operations." },
  { icon: Briefcase, title: "Business Case Development", desc: "Financially grounded business cases that withstand board and CFO-level scrutiny." },
  { icon: Map, title: "Executive Roadmap", desc: "A sequenced, multi-quarter plan connecting AI investment to business milestones." },
  { icon: Layers, title: "Technology Architecture", desc: "A target-state architecture defining how AI systems integrate with existing infrastructure." },
  { icon: ShieldCheck, title: "Governance Framework", desc: "Risk, compliance, and oversight structures built for defensible AI deployment at scale." },
  { icon: ClipboardCheck, title: "Implementation Plan", desc: "A detailed delivery plan covering resourcing, milestones, and success criteria." },
];



const FAQS = [
  { q: "How long does an AI strategy engagement take?", a: "A focused strategy engagement typically runs 6 to 10 weeks, from discovery through a finalized executive roadmap, depending on organizational complexity and the number of business units involved." },
  { q: "Do you require existing AI maturity to begin?", a: "No. We work with organizations at every stage, from those with no prior AI investment to those with fragmented pilots that need to be consolidated into a coherent program." },
  { q: "How is this different from a generic technology consulting engagement?", a: "Every recommendation is grounded in a documented business case, sequenced against your actual data readiness and infrastructure, not a generic industry template." },
  { q: "Will the roadmap account for our existing systems and vendors?", a: "Yes. The roadmap is built around your current technology environment and vendor relationships, identifying what to extend, replace, or leave untouched." },
  { q: "Who is involved from our organization during the engagement?", a: "Engagements typically involve executive sponsors, data and IT leadership, and relevant business unit stakeholders, aligned through structured workshops at key milestones." },
];

/* ---------------------------------------------------------- */
/* Page                                                         */
/* ---------------------------------------------------------- */

const AIStrategy = () => {
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
            src="/Ai/23.jpg"
            alt="Executive strategy meeting"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-24 pt-40">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#93A5FF] mb-6 font-['Montserrat']">
            AI Strategy
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="text-white text-4xl md:text-6xl lg:text-7xl font leading-[1.03] max-w-4xl mb-8 tracking-tight"
          >
            Build an AI roadmap that actually ships.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            We help enterprises define where AI creates measurable business
            value, then sequence the roadmap, governance, and infrastructure
            needed to get there.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Schedule Strategy Workshop
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY AI STRATEGY — split, floating cards                       */}
      {/* ============================================================ */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Eyebrow>Why AI Strategy</Eyebrow>
            <h2 className="text-3xl md:text-5xl font leading-[1.1] mb-8 tracking-tight text-[#0B1120]">
              Technology should support business strategy — not define it.
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-5">
              <p>
                Most AI initiatives fail not because the technology
                underperforms, but because they were never anchored to a
                clear business objective. Teams pursue AI because
                competitors are investing in it, not because a specific
                operational or financial outcome has been defined and
                prioritized.
              </p>
              <p>
                A credible AI strategy starts with the business problem,
                works backward to determine what data and infrastructure
                are actually required, and only then evaluates which AI
                capabilities are appropriate. This sequencing is what
                separates programs that scale from pilots that quietly
                disappear after twelve months.
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
                src="/Ai/ai6.jpeg"
                alt="Enterprise data strategy"
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
      {/* STRATEGY FRAMEWORK — large stacked image cards                */}
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
          <div className="absolute inset-0 bg-black" />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-[1000px] mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font leading-[1.05] text-white mb-8 tracking-tight">
            Turn AI ambition into an executable roadmap.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Our AI strategy consultants help enterprises prioritize
            investments, align stakeholders, and build AI programs that
            create measurable business outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
          >
            Book Strategy Workshop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIStrategy;