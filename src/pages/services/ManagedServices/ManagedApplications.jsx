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
    title: "Application Downtime",
    desc: "Unexpected outages disrupt business operations, reduce productivity, and impact customer experience.",
  },
  {
    icon: ShieldAlert,
    title: "Performance Bottlenecks",
    desc: "Poor application performance affects user satisfaction and limits operational efficiency.",
  },
  {
    icon: GitBranch,
    title: "Complex Application Landscape",
    desc: "Managing multiple enterprise applications across different platforms increases operational complexity.",
  },
  {
    icon: Database,
    title: "Maintenance & Upgrades",
    desc: "Keeping applications updated while minimizing downtime requires careful planning and expertise.",
  },
  {
    icon: Repeat,
    title: "Resource Constraints",
    desc: "Limited IT resources make it difficult to provide continuous application support and optimization.",
  },
  {
    icon: Eye,
    title: "Limited Operational Visibility",
    desc: "Without proactive monitoring, identifying issues before they impact users becomes challenging.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Application Assessment",
    desc: "We evaluate your application landscape, business requirements, and operational challenges to define the right support strategy.",
    image: "/Merge/35.avif",
  },
  {
    step: "02",
    title: "Service Planning",
    desc: "Our experts design a managed application service model tailored to your business applications and operational goals.",
    image: "/Merge/36.avif",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "We establish monitoring, maintenance, support processes, and performance management for your applications.",
    image: "/Merge/37.avif",
  },
  {
    step: "04",
    title: "Continuous Support",
    desc: "Our team provides ongoing monitoring, incident management, troubleshooting, and application enhancements.",
    image: "/Merge/38.avif",
  },
  {
    step: "05",
    title: "Optimization & Innovation",
    desc: "Continuous performance tuning, upgrades, and modernization ensure long-term application success.",
    image: "/Merge/39.avif",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Application Monitoring",
    desc: "Continuously monitor application health, availability, and performance across enterprise environments.",
  },
  {
    icon: Workflow,
    title: "Application Maintenance",
    desc: "Perform regular updates, bug fixes, patches, and preventive maintenance to ensure application stability.",
  },
  {
    icon: Database,
    title: "Performance Optimization",
    desc: "Identify bottlenecks and optimize application performance for improved user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    desc: "Protect enterprise applications with security updates, vulnerability management, and compliance best practices.",
  },
  {
    icon: Eye,
    title: "Incident & Problem Management",
    desc: "Rapidly identify, resolve, and prevent application issues to minimize business disruption.",
  },
  {
    icon: MessageSquare,
    title: "Application Support & Consulting",
    desc: "Receive expert support, modernization guidance, lifecycle management, and continuous optimization services.",
  },
];

const FAQS = [
  {
    q: "What are Managed Application Services?",
    a: "Managed Application Services provide continuous support, monitoring, maintenance, optimization, and lifecycle management for enterprise business applications.",
  },
  {
    q: "How do Managed Application Services improve business operations?",
    a: "They reduce downtime, improve application performance, strengthen security, and ensure business-critical systems remain available and reliable.",
  },
  {
    q: "Can you support third-party enterprise applications?",
    a: "Yes. We provide support for ERP, CRM, HR, finance, cloud applications, and other enterprise platforms across multiple vendors.",
  },
  {
    q: "Do you provide application modernization services?",
    a: "Absolutely. We help modernize legacy applications, optimize performance, and support cloud migration initiatives.",
  },
  {
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes. We offer continuous monitoring, maintenance, incident management, performance optimization, upgrades, and long-term application support.",
  },
];
/* ---------------------------------------------------------- */
/* Page                                                         */
/* ---------------------------------------------------------- */

const AIAgents = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#0B1120]">
      <ServiceNavbar />

      {/* ============================================================ */}
      {/* HERO — full screen cinematic                                  */}
      {/* ============================================================ */}
      <section className="relative min-h-[560px] sm:min-h-[640px] h-screen w-full overflow-hidden flex items-end">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/Merge/40.avif"
            alt="Autonomous AI agent systems"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 sm:px-6 md:px-10 pb-14 sm:pb-20 md:pb-24 pt-28 sm:pt-32 md:pt-40">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#93A5FF] mb-4 sm:mb-6 font-['Montserrat']">
           Managed Application Services
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font leading-[1.1] sm:leading-[1.05] md:leading-[1.03] max-w-full sm:max-w-xl md:max-w-4xl mb-6 sm:mb-8 tracking-tight"
          >
           Maximize application performance with intelligent managed application services.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-white/70 text-base sm:text-lg md:text-xl max-w-full sm:max-w-md md:max-w-xl leading-relaxed mb-8 sm:mb-10"
          >
            Ensure your business applications remain secure, reliable, and optimized with managed application services that provide continuous monitoring, maintenance, support, upgrades, and performance optimization.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Schedule an Application Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY AI AGENTS — split, floating cards                         */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Eyebrow>WHY MANAGED APPLICATION SERVICES</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 tracking-tight text-[#0B1120]">
              Keep your business applications running at peak performance.
            </h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-5">
              <p>
               Business-critical applications require continuous monitoring, regular maintenance, timely updates, and proactive support to ensure maximum availability and operational efficiency. Managing these responsibilities internally can be costly and resource-intensive.
              </p>
              <p>
                Our Managed Application Services help organizations improve application reliability, reduce downtime, optimize performance, and enable internal teams to focus on strategic business initiatives.
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
            <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden h-[240px] sm:h-[340px] md:h-[480px] w-full">
              <img
                src="/Merge/41.avif"
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
      <section className="py-16 sm:py-20 md:py-32 px-5 sm:px-6 md:px-10 bg-black">
        <div className="max-w-[1400px] mx-auto">
      
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-500 font-semibold mb-3 sm:mb-4">
              Application Challenges
            </p>
      
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight max-w-6xl">
              The application management challenges that impact business continuity.
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
      
                <div className="grid grid-cols-1 sm:grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-3 sm:gap-6 md:gap-10 items-start sm:items-center p-6 sm:p-8 md:p-10">
      
                  <div className="text-3xl sm:text-5xl md:text-6xl font text-white/10 group-hover:text-blue-500 transition">
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
      
          {/* Heading */}
          <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
            Implementation Framework
          </p>
      
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 max-w-4xl mb-12 sm:mb-16 md:mb-20 leading-tight">
          A proactive approach to managing enterprise applications.
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
        className="group w-full"
      >
      
                {/* Image */}
                <div className="overflow-hidden rounded-xl sm:rounded-none">
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
                <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg leading-7 sm:leading-8 md:leading-9 text-slate-600">
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
      
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 sm:gap-14 lg:gap-20">
      
            {/* Left Sticky */}
            <div className="lg:sticky lg:top-28 self-start">
      
              <Eyebrow>What We Deliver</Eyebrow>
      
              <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">
                Comprehensive managed application services for modern enterprises.
              </h2>
      
              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
               Our Managed Application Services ensure business-critical applications remain secure, available, scalable, and optimized throughout their lifecycle.
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
                  <div className="rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10">
      
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
      <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 md:gap-16">
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

          <div className="space-y-3 w-full">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl sm:rounded-2xl border border-black/10 overflow-hidden w-full"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 sm:gap-6 text-left px-5 sm:px-7 py-5 sm:py-6 hover:bg-black/[0.02] transition-colors"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-[#0B1120]">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-black/10"
                    >
                      <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#2563EB]" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed px-5 sm:px-7 pb-5 sm:pb-7 max-w-2xl">{faq.a}</p>
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
      <section className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 md:px-10 overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font leading-[1.1] sm:leading-[1.05] text-white mb-6 sm:mb-8 tracking-tight">
             Keep your business applications performing at their best.
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
           Empower your organization with managed application services that improve reliability, reduce downtime, optimize performance, and support long-term business success.
          </p>
          <Link
            to="/contact"
             className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
          >
            Schedule an Application Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;