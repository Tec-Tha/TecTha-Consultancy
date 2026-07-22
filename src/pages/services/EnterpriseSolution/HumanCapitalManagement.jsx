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
    className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 sm:mb-5 font-['Montserrat'] ${
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
    title: "Manual HR Processes",
    desc: "Time-consuming administrative tasks reduce HR productivity, increase operational costs, and create unnecessary delays.",
  },
  {
    icon: ShieldAlert,
    title: "Fragmented Employee Data",
    desc: "Employee information spread across multiple systems makes reporting, compliance, and workforce planning difficult.",
  },
  {
    icon: GitBranch,
    title: "Inefficient Recruitment",
    desc: "Slow hiring processes and poor candidate tracking make it difficult to attract, hire, and retain top talent.",
  },
  {
    icon: Database,
    title: "Employee Engagement Challenges",
    desc: "Limited communication, feedback, and career development opportunities reduce employee satisfaction and retention.",
  },
  {
    icon: Repeat,
    title: "Compliance & Payroll Complexity",
    desc: "Managing payroll, labor regulations, and statutory compliance manually increases operational risk and administrative effort.",
  },
  {
    icon: Eye,
    title: "Limited Workforce Analytics",
    desc: "Without real-time workforce insights, organizations struggle to make informed HR and talent management decisions.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Workforce Assessment",
    desc: "We evaluate your HR processes, workforce challenges, and organizational goals to define the right Human Capital Management strategy.",
    image:
      "/ERPSol/47.avif",
  },
  {
    step: "02",
    title: "Solution Planning",
    desc: "Our experts design an HCM solution tailored to recruitment, payroll, employee engagement, and talent management requirements.",
    image:
      "/ERPSol/48.avif",
  },
  {
    step: "03",
    title: "System Integration",
    desc: "We integrate HCM with ERP, payroll, attendance, finance, and other enterprise applications for seamless workforce management.",
    image:
      "/ERPSol/49.avif",
  },
  {
    step: "04",
    title: "Deployment & Adoption",
    desc: "We implement the solution, migrate employee data, train HR teams, and ensure a smooth transition across your organization.",
    image:
      "/ERPSol/50.avif",
  },
  {
    step: "05",
    title: "Continuous Optimization",
    desc: "Ongoing support, analytics, and performance improvements ensure your HCM platform evolves with your workforce.",
    image:
      "/ERPSol/51.avif",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Recruitment & Onboarding",
    desc: "Digitize hiring, applicant tracking, onboarding, and employee documentation from a single platform.",
  },
  {
    icon: Workflow,
    title: "Payroll & Benefits Management",
    desc: "Automate payroll processing, tax calculations, employee benefits, and statutory compliance with accuracy.",
  },
  {
    icon: Database,
    title: "Performance Management",
    desc: "Monitor employee goals, performance reviews, feedback, and career development from one centralized system.",
  },
  {
    icon: ShieldCheck,
    title: "Learning & Talent Development",
    desc: "Support employee growth through training programs, certifications, and personalized learning pathways.",
  },
  {
    icon: Eye,
    title: "Workforce Analytics",
    desc: "Access real-time HR dashboards, workforce insights, productivity metrics, and strategic reporting.",
  },
  {
    icon: MessageSquare,
    title: "Employee Self-Service Portal",
    desc: "Enable employees to manage leave requests, attendance, payroll information, and personal records independently.",
  },
];

const FAQS = [
  {
    q: "What is Human Capital Management (HCM)?",
    a: "Human Capital Management is a comprehensive approach to managing the entire employee lifecycle, including recruitment, onboarding, payroll, performance, learning, and workforce planning.",
  },
  {
    q: "Can HCM integrate with our existing ERP or payroll systems?",
    a: "Yes. Modern HCM solutions integrate seamlessly with ERP, payroll, finance, attendance, and third-party business applications.",
  },
  {
    q: "How does HCM improve employee productivity?",
    a: "By automating repetitive HR processes and providing self-service tools, HCM allows HR teams and employees to focus on strategic work instead of administrative tasks.",
  },
  {
    q: "Is Human Capital Management suitable for growing organizations?",
    a: "Absolutely. HCM solutions are scalable and support organizations as they expand their workforce and operational requirements.",
  },
  {
    q: "Do you provide implementation and ongoing support?",
    a: "Yes. We provide end-to-end implementation, employee training, technical support, continuous optimization, and long-term maintenance services.",
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
            src="/ERPSol/52.avif"
            alt="Autonomous AI agent systems"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-10 pb-14 pt-24 sm:pb-20 sm:pt-32 md:pb-24 md:pt-40">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#93A5FF] mb-4 sm:mb-6 font-['Montserrat']">
            Human Capital Management
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font leading-[1.15] sm:leading-[1.1] md:leading-[1.03] max-w-4xl mb-5 sm:mb-8 tracking-tight"
          >
            Empower your workforce with intelligent Human Capital Management solutions.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-white/70 text-sm sm:text-base md:text-xl max-w-xl leading-relaxed mb-6 sm:mb-8 md:mb-10"
          >
            We help organizations modernize HR operations through digital Human Capital Management solutions that streamline recruitment, payroll, employee engagement, performance management, and workforce planning.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Schedule an HCM Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY AI AGENTS — split, floating cards                         */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Eyebrow>WHY HUMAN CAPITAL MANAGEMENT</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.2] sm:leading-[1.15] md:leading-[1.1] mb-5 sm:mb-6 md:mb-8 tracking-tight text-[#0B1120]">
              Your people are your greatest asset. Managing them shouldn't be complicated.
            </h2>
            <div className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-5">
              <p>
                Many organizations rely on disconnected HR systems, spreadsheets, and manual processes to manage employees. This often results in administrative delays, inconsistent records, compliance risks, and reduced employee satisfaction.
              </p>
              <p>
               Human Capital Management centralizes every stage of the employee lifecycle—from recruitment and onboarding to payroll, performance, learning, and workforce analytics—creating a more productive and engaged workforce.
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
            <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden h-[240px] sm:h-[340px] md:h-[480px]">
              <img
                src="/ERPSol/53.avif"
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
            <p className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-500 font-semibold mb-3 sm:mb-4">
              Workforce Challenges
            </p>
      
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-light leading-tight max-w-6xl">
              The people management challenges that limit organizational growth.
            </h2>
          </motion.div>
      
          <div className="space-y-4 sm:space-y-6">
      
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
      
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[100px_1fr] gap-4 sm:gap-6 md:gap-10 items-center p-5 sm:p-7 md:p-10">
      
                  <div className="text-3xl sm:text-4xl md:text-6xl font text-white/10 group-hover:text-blue-500 transition">
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
      <section className="bg-white py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
      
          {/* Heading */}
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-600 text-[11px] sm:text-sm font-semibold mb-3 sm:mb-5">
            Strategy Framework
          </p>
      
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-900 max-w-4xl mb-8 sm:mb-12 md:mb-20 leading-tight">
            A proven implementation approach for successful ERP transformation.
          </h2>
      
          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
      
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
                    className="h-[180px] sm:h-[220px] md:h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
      
                {/* Title */}
                <h3 className="mt-5 sm:mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl font-light text-slate-900">
                  {item.title}
                </h3>
      
                {/* Description */}
                <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-9 text-slate-600">
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
      <section className="bg-black py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
      
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 sm:gap-14 lg:gap-20">
      
            {/* Left Sticky */}
            <div className="lg:sticky lg:top-28 self-start">
      
              <Eyebrow>What We Deliver</Eyebrow>
      
              <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-5xl font-light leading-tight text-white">
                Comprehensive ERP capabilities designed for modern enterprises.
              </h2>
      
              <p className="mt-5 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white/60">
               Our ERP solutions combine business process automation, centralized data management, and intelligent reporting to improve operational efficiency across every department.
              </p>
      
            </div>
      
            {/* Right Cards */}
            <div className="space-y-6 sm:space-y-8">
      
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
                  className="lg:sticky lg:top-32"
                >
                  <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-7 md:p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10">
      
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
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 md:gap-16">
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
                    className="flex w-full items-center justify-between gap-3 sm:gap-4 md:gap-6 text-left px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 hover:bg-black/[0.02] transition-colors"
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
                    <p className="text-slate-500 leading-relaxed px-4 sm:px-5 md:px-7 pb-4 sm:pb-5 md:pb-7 max-w-2xl">{faq.a}</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-6xl font leading-[1.2] sm:leading-[1.1] md:leading-[1.05] text-white mb-5 sm:mb-6 md:mb-8 tracking-tight">
           Build a stronger workforce with intelligent Human Capital Management.
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
           Transform your HR operations with modern HCM solutions that improve employee experience, streamline workforce management, and support sustainable business growth.
          </p>
          <Link
            to="/contact"
             className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
          >
            Schedule an HCM Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;