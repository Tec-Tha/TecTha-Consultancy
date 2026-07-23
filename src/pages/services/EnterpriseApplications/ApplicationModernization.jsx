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
    title: "Legacy Applications",
    desc: "Outdated applications limit business agility, increase maintenance costs, and make it difficult to adopt modern technologies.",
  },
  {
    icon: ShieldAlert,
    title: "Security & Compliance Risks",
    desc: "Legacy systems often lack modern security controls, exposing businesses to cyber threats and compliance challenges.",
  },
  {
    icon: GitBranch,
    title: "Integration Complexity",
    desc: "Older applications struggle to integrate with cloud platforms, APIs, and modern enterprise systems.",
  },
  {
    icon: Database,
    title: "Performance Limitations",
    desc: "Aging applications experience slow performance, limited scalability, and reduced reliability under growing workloads.",
  },
  {
    icon: Repeat,
    title: "High Maintenance Costs",
    desc: "Maintaining legacy technologies requires significant time, specialized resources, and increasing operational expenses.",
  },
  {
    icon: Eye,
    title: "Limited Business Agility",
    desc: "Legacy platforms slow innovation and make it difficult to respond quickly to changing business demands.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Application Assessment",
    desc: "We evaluate your existing applications, architecture, and business requirements to identify modernization opportunities.",
    image: "/ERPApp/21.avif",
  },
  {
    step: "02",
    title: "Modernization Strategy",
    desc: "Our experts develop a roadmap focused on cloud adoption, scalability, security, and long-term business value.",
    image: "/ERPApp/22.avif",
  },
  {
    step: "03",
    title: "Application Transformation",
    desc: "We modernize applications through refactoring, replatforming, rehosting, or rebuilding using modern technologies.",
    image: "/ERPApp/23.avif",
  },
  {
    step: "04",
    title: "Deployment & Integration",
    desc: "Applications are securely deployed and integrated with cloud services, APIs, and enterprise platforms.",
    image: "/ERPApp/24.avif",
  },
  {
    step: "05",
    title: "Continuous Optimization",
    desc: "We continuously optimize application performance, security, scalability, and user experience for long-term success.",
    image: "/ERPApp/25.avif",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Legacy Application Modernization",
    desc: "Transform outdated applications into scalable, cloud-ready, and high-performance business solutions.",
  },
  {
    icon: Workflow,
    title: "Cloud Migration",
    desc: "Migrate enterprise applications to modern cloud environments with minimal disruption.",
  },
  {
    icon: Database,
    title: "API & System Integration",
    desc: "Connect modern applications with enterprise platforms through secure APIs and seamless integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    desc: "Strengthen applications with modern security controls, compliance standards, and secure development practices.",
  },
  {
    icon: Eye,
    title: "Performance Optimization",
    desc: "Improve application speed, scalability, availability, and user experience through continuous optimization.",
  },
  {
    icon: MessageSquare,
    title: "Modernization Consulting",
    desc: "Receive expert guidance to accelerate digital transformation through application modernization strategies.",
  },
];

const FAQS = [
  {
    q: "What is Application Modernization?",
    a: "Application Modernization is the process of upgrading legacy applications using modern technologies, cloud platforms, and architectures to improve performance, scalability, and business agility.",
  },
  {
    q: "Why should organizations modernize legacy applications?",
    a: "Modernization improves security, reduces maintenance costs, increases scalability, enhances user experience, and accelerates digital transformation.",
  },
  {
    q: "Can you modernize applications without disrupting business operations?",
    a: "Yes. We use phased modernization strategies to minimize downtime while ensuring seamless business continuity.",
  },
  {
    q: "Do you support cloud-native application modernization?",
    a: "Absolutely. We modernize applications for public, private, and hybrid cloud environments using cloud-native best practices.",
  },
  {
    q: "Do you provide post-modernization support?",
    a: "Yes. We provide continuous monitoring, optimization, maintenance, and enhancement services after deployment.",
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
            src="/ERPApp/26.avif"
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
  Application Modernization
</motion.p>

<motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.12}
  className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font leading-[1.1] sm:leading-[1.05] md:leading-[1.03] max-w-4xl mb-6 sm:mb-8 tracking-tight"
>
  Modernize legacy applications for a cloud-first future.
</motion.h1>

<motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={0.22}
  className="text-white/70 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8 sm:mb-10"
>
  Accelerate digital transformation by modernizing legacy applications with cloud-native architectures, enhanced security, improved scalability, and superior user experiences.
</motion.p>

<Link
  to="/contact"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors text-center"
>
  Schedule a Modernization Consultation
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
           <Eyebrow>WHY APPLICATION MODERNIZATION</Eyebrow>

<h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 tracking-tight text-[#0B1120]">
  Modern applications drive innovation and business growth.
</h2>

<div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-5">
  <p>
    Legacy applications often slow innovation, increase operational costs, and
    create security and scalability challenges. Modernizing these applications
    enables organizations to respond faster to changing business needs.
  </p>

  <p>
    Our Application Modernization services help transform legacy systems into
    agile, secure, and cloud-ready platforms that improve performance, reduce
    technical debt, and accelerate digital transformation.
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
                src="/ERPApp/27.avif"
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
  Modernization Challenges
</p>

<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight max-w-6xl">
  The application challenges slowing digital transformation.
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
  Modernization Framework
</p>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 max-w-4xl mb-10 sm:mb-14 md:mb-20 leading-tight">
  A proven framework for modernizing enterprise applications.
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
      
              <Eyebrow>What We Deliver</Eyebrow>
      
             <h2 className="mt-2 sm:mt-3 md:mt-5 text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">
  Comprehensive Application Modernization solutions for modern enterprises.
</h2>

<p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
  Our Application Modernization services transform legacy systems into secure,
  scalable, cloud-ready applications that drive innovation and long-term
  business success.
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
  Transform legacy applications into modern digital platforms.
</h2>

<p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
  Accelerate innovation with Application Modernization services that improve
  agility, strengthen security, optimize performance, and prepare your business
  for future growth.
</p>

<Link
  to="/contact"
  className="group mt-6 sm:mt-7 md:mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
>
  Schedule a Modernization Consultation
  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;