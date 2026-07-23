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
    className={`text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 sm:mb-5 font-['Montserrat'] ${
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
    title: "Rapid Technology Evolution",
    desc: "Organizations must continuously adapt to emerging technologies while maintaining operational stability and business continuity.",
  },
  {
    icon: ShieldAlert,
    title: "Technology Investment Risks",
    desc: "Poor technology decisions can increase costs, limit scalability, and reduce long-term business value.",
  },
  {
    icon: GitBranch,
    title: "Business & IT Alignment",
    desc: "Aligning technology initiatives with strategic business objectives remains a major challenge for many organizations.",
  },
  {
    icon: Database,
    title: "Legacy Technology Constraints",
    desc: "Outdated systems reduce agility, hinder innovation, and increase operational complexity across the enterprise.",
  },
  {
    icon: Repeat,
    title: "Digital Transformation Complexity",
    desc: "Successfully executing digital transformation requires careful planning, governance, and organizational alignment.",
  },
  {
    icon: Eye,
    title: "Limited Strategic Visibility",
    desc: "Without technology roadmaps and governance, organizations struggle to prioritize innovation and future investments.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Technology Assessment",
    desc: "We evaluate your technology landscape, business goals, and digital maturity to identify strategic opportunities.",
    image: "/services/52.avif",
  },
  {
    step: "02",
    title: "Advisory Strategy",
    desc: "Our experts develop technology roadmaps aligned with business objectives, innovation, and long-term growth.",
    image: "/services/53.avif",
  },
  {
    step: "03",
    title: "Solution Planning",
    desc: "We recommend modern technology solutions, governance frameworks, and implementation strategies tailored to your organization.",
    image: "/services/54.avif",
  },
  {
    step: "04",
    title: "Implementation Guidance",
    desc: "Our consultants support technology adoption, governance, risk management, and enterprise transformation initiatives.",
    image: "/services/55.avif",
  },
  {
    step: "05",
    title: "Continuous Innovation",
    desc: "We provide ongoing strategic advisory to optimize technology investments and support continuous business innovation.",
    image: "/services/56.avif",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Technology Strategy",
    desc: "Develop strategic technology roadmaps that align innovation with business priorities and long-term growth.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation Advisory",
    desc: "Guide enterprise-wide transformation initiatives with structured planning, governance, and technology expertise.",
  },
  {
    icon: Database,
    title: "Technology Modernization",
    desc: "Modernize enterprise applications, infrastructure, and digital platforms to improve agility and operational performance.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Governance",
    desc: "Establish governance frameworks that improve security, compliance, risk management, and investment decisions.",
  },
  {
    icon: Eye,
    title: "Technology Roadmapping",
    desc: "Create future-ready technology roadmaps that support innovation, scalability, and business resilience.",
  },
  {
    icon: MessageSquare,
    title: "Executive Technology Advisory",
    desc: "Receive expert consulting and strategic guidance to maximize technology investments and business outcomes.",
  },
];

const FAQS = [
  {
    q: "What is Technology Advisory?",
    a: "Technology Advisory helps organizations align technology investments with business strategy, improve operational efficiency, and accelerate digital transformation.",
  },
  {
    q: "Why is Technology Advisory important?",
    a: "It enables organizations to make informed technology decisions, reduce risks, optimize investments, and build scalable digital capabilities.",
  },
  {
    q: "Can you help with digital transformation strategies?",
    a: "Yes. We provide strategic advisory, roadmap development, governance, and implementation guidance for enterprise digital transformation.",
  },
  {
    q: "Do you support cloud and emerging technologies?",
    a: "Absolutely. We advise on cloud adoption, AI, automation, cybersecurity, enterprise applications, and other modern technologies.",
  },
  {
    q: "Do you provide ongoing technology consulting?",
    a: "Yes. We offer continuous advisory, architecture reviews, technology optimization, and strategic consulting to support long-term business success.",
  },
];
/* ---------------------------------------------------------- */
/* Page                                                         */
/* ---------------------------------------------------------- */

const AIAgents = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen w-full bg-white text-[#0B1120] overflow-x-hidden">
      <ServiceNavbar />

      {/* ============================================================ */}
      {/* HERO — full screen cinematic                                  */}
      {/* ============================================================ */}
      <section className="relative min-h-screen h-screen sm:min-h-[720px] w-full overflow-hidden flex items-end">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/services/50.avif"
            alt="Autonomous AI agent systems"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-10 pb-16 sm:pb-20 md:pb-24 pt-28 sm:pt-32 md:pt-40">
<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0}
  className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#93A5FF] mb-4 sm:mb-6 font-['Montserrat']"
>
  Technology Advisory
</motion.p>

<motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.12}
  className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font leading-[1.1] sm:leading-[1.05] md:leading-[1.03] max-w-4xl mb-6 sm:mb-8 tracking-tight"
>
  Make smarter technology decisions with expert Technology Advisory.
</motion.h1>

<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.22}
  className="text-white/70 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8 sm:mb-10"
>
  Align business strategy with modern technology through expert advisory services that drive innovation, optimize investments, and accelerate sustainable digital transformation.
</motion.p>

<Link
  to="/contact"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors text-center"
>
  Schedule a Technology Advisory Consultation
  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
</Link>
        
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY AI AGENTS — split, floating cards                         */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
<Eyebrow>WHY TECHNOLOGY ADVISORY</Eyebrow>

<h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 tracking-tight text-[#0B1120]">
  Strategic technology decisions create lasting business value.
</h2>

<div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-5">
  <p>
    Organizations need a clear technology strategy to navigate digital transformation, optimize investments, and stay competitive in an evolving business landscape.
  </p>

  <p>
    Our Technology Advisory services help businesses align technology with strategic goals, modernize IT capabilities, strengthen governance, and accelerate innovation with confidence.
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
            <div className="relative rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden h-[240px] sm:h-[340px] md:h-[420px] lg:h-[480px]">
              <img
                src="/services/51.avif"
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
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-black">
        <div className="max-w-[1400px] mx-auto">
      
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-14 md:mb-20"
          >
<p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-500 font-semibold mb-3 sm:mb-4">
  Technology Advisory Challenges
</p>

<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight max-w-6xl">
  The technology challenges shaping modern business transformation.
</h2>
          </motion.div>
      
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
      
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
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500"
              >
      
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-3 sm:gap-4 md:gap-10 items-start md:items-center p-6 sm:p-8 md:p-10">
      
                  <div className="text-3xl sm:text-4xl md:text-6xl font text-white/10 group-hover:text-blue-500 transition">
                    0{index+1}
                  </div>
      
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">
                      {item.title}
                    </h3>
      
                    <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/70 max-w-4xl">
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
      <section className="bg-white py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
      
          {/* Heading */}
<p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
  Advisory Framework
</p>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 max-w-4xl mb-10 sm:mb-14 md:mb-20 leading-tight">
  A strategic framework for technology innovation and business growth.
</h2>
      
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-9 md:gap-10">
      
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
                    className="h-[190px] sm:h-[220px] md:h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
      
                {/* Title */}
                <h3 className="mt-5 sm:mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl font-light text-slate-900">
                  {item.title}
                </h3>
      
                {/* Description */}
                <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
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
      <section className="bg-black py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
      
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 md:gap-14 lg:gap-20">
      
            {/* Left Sticky */}
            <div className="lg:sticky lg:top-28 self-start">
<h2 className="mt-2 sm:mt-3 md:mt-5 text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">
  Comprehensive Technology Advisory services for future-ready enterprises.
</h2>

<p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
  Our Technology Advisory services help organizations modernize technology, optimize investments, strengthen governance, and build resilient digital capabilities for long-term success.
</p>
                   </div>
      
            {/* Right Cards */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
      
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
                  className="md:sticky md:top-32"
                >
                  <div className="rounded-[22px] sm:rounded-[26px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10">
      
                    <div className="flex items-center justify-between">
      
                      <span className="text-4xl sm:text-5xl md:text-7xl font-light text-white/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
      
                    </div>
      
                    <h3 className="mt-5 sm:mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl font text-white">
                      {item.title}
                    </h3>
      
                    <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
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
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:sticky md:top-32 h-fit"
          >
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.15] sm:leading-[1.1] tracking-tight text-[#0B1120]">
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
                    className="flex w-full items-center justify-between gap-4 sm:gap-6 text-left px-4 py-4 sm:px-7 sm:py-6 hover:bg-black/[0.02] transition-colors"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-[#0B1120]">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-black/10"
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
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-4 pb-5 sm:px-7 sm:pb-7 max-w-2xl">{faq.a}</p>
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
      <section className="relative py-20 sm:py-28 md:py-40 px-4 sm:px-6 md:px-10 overflow-hidden">
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
<h2 className="mt-2 sm:mt-3 md:mt-5 text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">
  Turn technology into your competitive advantage.
</h2>

<p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
  Partner with our technology advisors to build innovative strategies, accelerate digital transformation, and achieve sustainable business growth with confidence.
</p>

<Link
  to="/contact"
  className="group mt-6 sm:mt-7 md:mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
>
  Schedule a Technology Advisory Consultation
  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;