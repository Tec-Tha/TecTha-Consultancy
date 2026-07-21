import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  HeadphonesIcon,
  ShieldCheck,
  Gauge,
  Wrench,
  Clock,
  DollarSign,
  Bell,
  LifeBuoy,
  FileCheck2,
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
  { icon: Clock, title: "No coverage outside business hours", desc: "Incidents don't wait for office hours, but most internal teams can't staff around the clock." },
  { icon: Wrench, title: "Patching and maintenance falling behind", desc: "Routine upkeep gets deprioritized against feature work, until a vulnerability or outage forces the issue." },
  { icon: DollarSign, title: "Cloud spend creeping up unnoticed", desc: "Without ongoing oversight, unused resources and inefficient configurations quietly inflate the bill." },
  { icon: Bell, title: "Alerts nobody is watching", desc: "Monitoring exists but no one owns triaging it, so real incidents get lost in the noise." },
  { icon: LifeBuoy, title: "Internal team stretched too thin", desc: "Engineers pulled into day-to-day operations have less time for the work that grows the business." },
  { icon: FileCheck2, title: "No clear accountability when something breaks", desc: "Without a defined support model, incidents become a scramble to figure out who's responsible." },
];

const FRAMEWORK = [
  { step: "01", title: "Onboard", desc: "We assess your environment, document its architecture, and integrate it into our monitoring and support systems.", image: "/cloud/24.avif" },
  { step: "02", title: "Stabilize", desc: "We resolve outstanding issues, apply overdue patches, and bring the environment to a healthy baseline.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop" },
  { step: "03", title: "Monitor", desc: "We put 24/7 monitoring and alerting in place, with clear ownership over triage and response.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" },
  { step: "04", title: "Maintain", desc: "We handle ongoing patching, backups, and routine maintenance so it never falls behind again.", image: "/cloud/25.avif" },
  { step: "05", title: "Optimize", desc: "We continuously tune performance and cost, reporting back on health and spend on a regular cadence.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop" },
];

const DELIVERABLES = [
  { icon: HeadphonesIcon, title: "24/7 Monitoring & Support", desc: "Round-the-clock coverage with a defined team responsible for triage and response." },
  { icon: Wrench, title: "Patching & Maintenance", desc: "Routine updates, backups, and system upkeep handled on a consistent schedule." },
  { icon: ShieldCheck, title: "Security & Compliance Upkeep", desc: "Ongoing enforcement of access policy, vulnerability management, and compliance controls." },
  { icon: Gauge, title: "Performance Management", desc: "Continuous tuning to keep systems fast and stable as usage and workloads change." },
  { icon: DollarSign, title: "Cost Management", desc: "Regular review of spend and resource usage to catch waste before it accumulates." },
  { icon: FileCheck2, title: "Health & Spend Reporting", desc: "Clear, recurring reports on system health, incidents, and cost, so nothing runs invisibly." },
];

const INDUSTRIES = [
  { name: "SaaS & Technology", desc: "Ongoing operations support so engineering can focus on the product.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" },
  { name: "Financial Services", desc: "Managed operations with the controls regulated environments require.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" },
  { name: "Healthcare", desc: "Continuous monitoring and maintenance for sensitive patient systems.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop" },
  { name: "E-Commerce", desc: "Always-on support built around peak traffic and seasonal demand.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" },
  { name: "Manufacturing", desc: "Managed uptime for systems tied to physical operations.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" },
  { name: "Public Sector", desc: "Reliable operations support within public accountability requirements.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" },
];

const IMPACT = [
  { value: "24/7", label: "Monitoring and Incident Coverage" },
  { value: "99.9%", label: "Average Managed Uptime" },
  { value: "30%", label: "Average Reduction in Cloud Spend" },
  { value: "50%", label: "Faster Incident Response Time" },
];

const FAQS = [
  { q: "What's the difference between managed cloud and DevOps services?", a: "DevOps is about building the pipelines and automation. Managed cloud is about running and supporting the environment day to day, including monitoring, patching, and incident response, on an ongoing basis." },
  { q: "Do you replace our internal engineering team?", a: "No. We take on the operational workload, monitoring, maintenance, and incident response, so your internal team can focus on product and growth instead of day-to-day upkeep." },
  { q: "What happens when there's an incident overnight?", a: "Our team monitors around the clock and responds according to defined response times, with escalation paths back to your team for anything that needs your input." },
  { q: "How do you help control cloud costs over time?", a: "We review resource usage and spend on a regular cadence, catching unused resources and inefficient configurations before they add up." },
  { q: "Can we start with monitoring and add more support later?", a: "Yes. Most engagements start with a defined scope and expand as needed, so you're not committing to more support than you currently need." },
];

/* ---------------------------------------------------------- */
/* Page                                                         */
/* ---------------------------------------------------------- */

const ManagedCloud = () => {
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
            src="/cloud/22.avif"
            alt="Cloud strategy and roadmap planning"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-24 pt-40">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#93A5FF] mb-6 font-['Montserrat']">
            Managed Cloud
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
                src="/cloud/23.avif"
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
            Give your cloud investment a direction, not just a budget.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Our strategists help you build the roadmap, cost model, and
            alignment that turn cloud spend into a plan the whole business
            can execute against.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors"
          >
            Schedule a Strategy Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ManagedCloud;