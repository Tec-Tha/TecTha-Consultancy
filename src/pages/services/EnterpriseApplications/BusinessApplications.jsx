import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Bot,
  Workflow,
  Database,
  ShieldAlert,
  GitBranch,
  Eye,
  Zap,
  Layers,
  MessageSquare,
  ShieldCheck,
  Repeat,
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
  {
    icon: Bot,
    title: "Disconnected Business Applications",
    desc: "Multiple standalone applications create data silos, duplicate processes, and reduce operational efficiency.",
  },
  {
    icon: ShieldAlert,
    title: "Application Security Risks",
    desc: "Business applications require strong security, access controls, and compliance measures to protect sensitive business data.",
  },
  {
    icon: GitBranch,
    title: "Integration Challenges",
    desc: "Connecting business applications with existing ERP, CRM, HR, and third-party systems can be complex.",
  },
  {
    icon: Database,
    title: "Data Inconsistency",
    desc: "Inaccurate or duplicated business data impacts reporting, collaboration, and strategic decision-making.",
  },
  {
    icon: Repeat,
    title: "Scalability Limitations",
    desc: "Legacy business applications often struggle to support organizational growth and changing operational needs.",
  },
  {
    icon: Eye,
    title: "Limited Business Visibility",
    desc: "Without centralized dashboards, organizations lack real-time insights into business performance and operations.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Business Assessment",
    desc: "We analyze your business processes, applications, and operational goals to identify modernization opportunities.",
    image: "...",
  },
  {
    step: "02",
    title: "Application Strategy",
    desc: "Our experts design a business application roadmap focused on integration, automation, scalability, and user experience.",
    image: "...",
  },
  {
    step: "03",
    title: "Implementation & Integration",
    desc: "We deploy business applications and integrate them with enterprise systems to streamline workflows.",
    image: "...",
  },
  {
    step: "04",
    title: "Optimization & Support",
    desc: "Continuous monitoring, maintenance, and performance optimization ensure reliable business operations.",
    image: "...",
  },
  {
    step: "05",
    title: "Continuous Innovation",
    desc: "We enhance business applications with automation, analytics, and emerging technologies to support long-term growth.",
    image: "...",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Business Application Implementation",
    desc: "Deploy modern business applications tailored to your operational and industry requirements.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate repetitive business processes to improve efficiency, productivity, and collaboration.",
  },
  {
    icon: Database,
    title: "Enterprise Application Integration",
    desc: "Connect business applications with ERP, CRM, HR, finance, and third-party platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Application Security & Governance",
    desc: "Secure business applications with identity management, compliance controls, and governance policies.",
  },
  {
    icon: Eye,
    title: "Business Analytics",
    desc: "Gain real-time visibility into operations through dashboards, reporting, and business intelligence.",
  },
  {
    icon: MessageSquare,
    title: "Application Support & Consulting",
    desc: "Receive expert guidance, optimization services, and continuous support for business applications.",
  },
];

const FAQS = [
  {
    q: "What are Business Applications?",
    a: "Business Applications are software solutions that help organizations manage operations, finance, HR, sales, customer relationships, and other core business functions.",
  },
  {
    q: "Why are Business Applications important?",
    a: "They improve operational efficiency, automate business processes, enhance collaboration, and provide real-time insights for better decision-making.",
  },
  {
    q: "Can Business Applications integrate with existing systems?",
    a: "Yes. Modern business applications integrate seamlessly with ERP, CRM, HR, finance, and other enterprise platforms.",
  },
  {
    q: "Do you provide cloud-based Business Applications?",
    a: "Yes. We implement both cloud-based and hybrid business application solutions tailored to your business requirements.",
  },
  {
    q: "Do you provide ongoing application support?",
    a: "Absolutely. We provide monitoring, maintenance, optimization, upgrades, user support, and strategic consulting services.",
  },
];
/* ---------------------------------------------------------- */
/* Page                                                         */
/* ---------------------------------------------------------- */

const AIAgents = () => {
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
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2400&auto=format&fit=crop"
            alt="Autonomous AI agent systems"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-24 pt-40">
<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0}
  className="text-xs font-semibold uppercase tracking-[0.3em] text-[#93A5FF] mb-6 font-['Montserrat']"
>
  Business Applications
</motion.p>

<motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.12}
  className="text-white text-4xl md:text-6xl lg:text-7xl font leading-[1.03] max-w-4xl mb-8 tracking-tight"
>
  Empower business growth with intelligent Business Applications.
</motion.h1>

<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.22}
  className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
>
  Modernize business operations with integrated Business Applications that improve productivity, automate workflows, strengthen collaboration, and enable smarter decision-making.
</motion.p>

<Link
  to="/contact"
  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors"
>
  Schedule a Business Applications Consultation
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
        
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY AI AGENTS — split, floating cards                         */}
      {/* ============================================================ */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
           <Eyebrow>WHY BUSINESS APPLICATIONS</Eyebrow>

<h2 className="text-3xl md:text-5xl font leading-[1.1] mb-8 tracking-tight text-[#0B1120]">
  Connected business applications drive operational excellence.
</h2>

<div className="text-gray-600 text-lg leading-relaxed space-y-5">
  <p>
    Modern organizations rely on integrated business applications to streamline
    operations, improve collaboration, and deliver better customer experiences.
    Disconnected systems often lead to inefficiencies and limited visibility.
  </p>

  <p>
    Our Business Applications solutions unify critical business processes,
    automate workflows, and provide real-time insights that help organizations
    improve productivity and accelerate growth.
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
                src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop"
                alt="Agent guardrails and monitoring"
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
  Business Application Challenges
</p>

<h2 className="text-5xl md:text-6xl text-white font-light leading-tight max-w-6xl">
  The application challenges that slow business performance.
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
      {/* AGENT FRAMEWORK — large stacked image cards                    */}
      {/* ============================================================ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
      
          {/* Heading */}
        <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold mb-5">
  Implementation Framework
</p>

<h2 className="text-5xl font-light text-slate-900 max-w-4xl mb-20 leading-tight">
  A strategic approach to implementing modern business applications.
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
      <h2 className="mt-5 text-5xl font-light leading-tight text-white">
  Comprehensive Business Application solutions for modern enterprises.
</h2>

<p className="mt-8 text-lg leading-8 text-white/60">
  Our Business Application services deliver secure implementation, seamless
  integration, workflow automation, and continuous optimization to improve
  operational efficiency and support business growth.
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
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2400&auto=format&fit=crop"
            alt="Enterprise agent systems"
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
      <h2 className="mt-5 text-5xl font-light leading-tight text-white">
  Transform your operations with intelligent Business Applications.
</h2>

<p className="mt-8 text-lg leading-8 text-white/60">
  Accelerate productivity, streamline operations, and drive sustainable growth
  with Business Applications designed for the modern digital enterprise.
</p>

<Link
  to="/contact"
  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors"
>
  Schedule a Business Applications Consultation
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;