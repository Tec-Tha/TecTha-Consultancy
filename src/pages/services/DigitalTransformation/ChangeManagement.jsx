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
    title: "Employee Resistance to Change",
    desc: "Organizations often face resistance when introducing new technologies, processes, or business models.",
  },
  {
    icon: ShieldAlert,
    title: "Communication Gaps",
    desc: "Poor communication during transformation initiatives leads to confusion, uncertainty, and reduced employee engagement.",
  },
  {
    icon: GitBranch,
    title: "Process Adoption Challenges",
    desc: "Employees require structured guidance and training to successfully adopt new systems and workflows.",
  },
  {
    icon: Database,
    title: "Business Disruption",
    desc: "Large-scale organizational changes can disrupt operations if not planned and managed effectively.",
  },
  {
    icon: Repeat,
    title: "Leadership Alignment",
    desc: "Successful transformation requires leadership commitment and alignment across business functions.",
  },
  {
    icon: Eye,
    title: "Measuring Change Success",
    desc: "Organizations need clear metrics to evaluate adoption, engagement, and the long-term impact of transformation initiatives.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Change Assessment",
    desc: "We evaluate organizational readiness, stakeholder expectations, and business objectives to develop an effective change strategy.",
    image: "/services/59.avif",
  },
  {
    step: "02",
    title: "Change Strategy",
    desc: "Our consultants create structured communication, engagement, and adoption plans aligned with business goals.",
    image: "/services/60.avif",
  },
  {
    step: "03",
    title: "Implementation & Enablement",
    desc: "We support change execution through leadership alignment, employee training, and organizational engagement initiatives.",
    image: "/services/61.avif",
  },
  {
    step: "04",
    title: "Adoption & Monitoring",
    desc: "We monitor adoption, gather feedback, and measure organizational readiness throughout the transformation journey.",
    image: "/services/62.avif",
  },
  {
    step: "05",
    title: "Continuous Improvement",
    desc: "Ongoing optimization, coaching, and performance measurement ensure sustainable organizational change.",
    image: "/services/63.avif",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Change Strategy",
    desc: "Develop structured organizational change strategies that support successful business transformation.",
  },
  {
    icon: Workflow,
    title: "Employee Engagement",
    desc: "Strengthen employee participation through communication, collaboration, and engagement initiatives.",
  },
  {
    icon: Database,
    title: "Training & Adoption",
    desc: "Deliver user training, knowledge transfer, and adoption programs to maximize transformation success.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Leadership",
    desc: "Align leadership teams with governance frameworks and change management best practices.",
  },
  {
    icon: Eye,
    title: "Performance Measurement",
    desc: "Track adoption rates, organizational readiness, and transformation outcomes through measurable KPIs.",
  },
  {
    icon: MessageSquare,
    title: "Advisory & Support",
    desc: "Receive ongoing consulting, coaching, and strategic support throughout the change management lifecycle.",
  },
];

const FAQS = [
  {
    q: "What is Change Management?",
    a: "Change Management is a structured approach that helps organizations successfully adopt new technologies, processes, and business strategies while minimizing disruption.",
  },
  {
    q: "Why is Change Management important?",
    a: "It improves employee adoption, reduces resistance, strengthens communication, and increases the success of business transformation initiatives.",
  },
  {
    q: "Do you provide employee training?",
    a: "Yes. We deliver training, workshops, leadership coaching, and user enablement programs to support organizational change.",
  },
  {
    q: "How do you measure change success?",
    a: "We measure adoption rates, employee engagement, business performance, and transformation outcomes using defined KPIs and continuous feedback.",
  },
  {
    q: "Do you support large-scale transformation programs?",
    a: "Absolutely. We help organizations manage enterprise-wide digital transformation, organizational restructuring, and technology adoption initiatives.",
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
      <section className="relative h-screen min-h-[560px] sm:min-h-[640px] md:min-h-[720px] w-full overflow-hidden flex items-end">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/services/57.avif"
            alt="Autonomous AI agent systems"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-14 sm:pb-20 md:pb-24 pt-24 sm:pt-32 md:pt-40">
<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0}
  className="text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#93A5FF] mb-4 sm:mb-6 font-['Montserrat']"
>
  Change Management
</motion.p>

<motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.12}
  className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font leading-[1.1] md:leading-[1.03] max-w-4xl mb-5 sm:mb-6 md:mb-8 tracking-tight"
>
  Lead successful business transformation with strategic Change Management.
</motion.h1>

<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.22}
  className="text-white/70 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-6 sm:mb-8 md:mb-10"
>
  Enable your organization to embrace change through structured planning, employee engagement, leadership alignment, and transformation strategies that deliver lasting business value.
</motion.p>

<Link
  to="/contact"
  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
>
  Schedule a Change Management Consultation
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
        
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY AI AGENTS — split, floating cards                         */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white">
        <div className="w-full max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
<Eyebrow>WHY CHANGE MANAGEMENT</Eyebrow>

<h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.15] md:leading-[1.1] mb-5 sm:mb-6 md:mb-8 tracking-tight text-[#0B1120]">
  Successful transformation starts with people.
</h2>

<div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-5">
  <p>
    Business transformation extends beyond technology. Organizations must prepare employees, align leadership, and establish clear communication to ensure successful adoption of new processes and systems.
  </p>

  <p>
    Our Change Management services help organizations reduce resistance, improve adoption, strengthen collaboration, and achieve sustainable transformation with confidence.
  </p>
</div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.15}
            className="relative w-full"
          >
            <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden h-[240px] sm:h-[340px] md:h-[480px]">
              <img
                src="/services/58.avif"
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
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-black">
        <div className="w-full max-w-[1400px] mx-auto">
      
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-14 md:mb-20"
          >
<p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 font-semibold mb-3 sm:mb-4">
  Change Management Challenges
</p>

<h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-light leading-tight max-w-6xl">
  The organizational challenges that influence successful transformation.
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
      
                <div className="grid grid-cols-[44px_1fr] sm:grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-4 sm:gap-6 md:gap-10 items-start sm:items-center p-5 sm:p-7 md:p-10">
      
                  <div className="text-2xl sm:text-4xl md:text-6xl font text-white/10 group-hover:text-blue-500 transition">
                    0{index+1}
                  </div>
      
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">
                      {item.title}
                    </h3>
      
                    <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white/70 max-w-4xl">
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
      <section className="bg-white py-16 sm:py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      
          {/* Heading */}
<p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
  Change Management Framework
</p>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 max-w-4xl mb-10 sm:mb-14 md:mb-20 leading-tight">
  A structured approach to managing organizational change with confidence.
</h2>
      
          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-9 md:gap-10">
      
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
                <div className="overflow-hidden rounded-lg sm:rounded-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[180px] sm:h-[220px] md:h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 sm:gap-14 lg:gap-20">
      
            {/* Left Sticky */}
            <div className="lg:sticky lg:top-28 self-start">
<h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">
  Comprehensive Change Management services for successful transformation.
</h2>

<p className="mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
  Our Change Management services help organizations improve employee adoption,
  strengthen leadership alignment, reduce transformation risks, and build a
  culture of continuous improvement.
</p>
                   </div>
      
            {/* Right Cards */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
      
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
                  <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10">
      
                    <div className="flex items-center justify-between">
      
                      <span className="text-4xl sm:text-5xl md:text-7xl font-light text-white/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
      
                    </div>
      
                    <h3 className="mt-5 sm:mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl font text-white">
                      {item.title}
                    </h3>
      
                    <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white/60">
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
        <div className="w-full max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:sticky md:top-32 h-fit"
          >
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.15] md:leading-[1.1] tracking-tight text-[#0B1120]">
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
                    className="flex w-full items-center justify-between gap-4 sm:gap-5 md:gap-6 text-left px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 hover:bg-black/[0.02] transition-colors"
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
                    <p className="text-gray-500 leading-relaxed px-4 sm:px-5 md:px-7 pb-4 sm:pb-5 md:pb-7 max-w-2xl">{faq.a}</p>
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
          className="relative w-full max-w-[1000px] mx-auto text-center"
        >
<h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">
  Drive lasting organizational change with confidence.
</h2>

<p className="mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
  Empower your workforce, accelerate transformation, and achieve sustainable
  business success with expert Change Management consulting and execution.
</p>

<Link
  to="/contact"
  className="group mt-6 sm:mt-7 md:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
>
  Schedule a Change Management Consultation
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;