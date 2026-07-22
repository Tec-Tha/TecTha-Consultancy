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
    title: "Weak Identity Management",
    desc: "Manual identity management increases security risks and administrative complexity.",
  },
  {
    icon: ShieldAlert,
    title: "Unauthorized Access",
    desc: "Poor access controls expose critical systems and sensitive business data to unauthorized users.",
  },
  {
    icon: GitBranch,
    title: "Complex User Provisioning",
    desc: "Managing user onboarding, role changes, and offboarding manually leads to delays and security gaps.",
  },
  {
    icon: Database,
    title: "Lack of Access Visibility",
    desc: "Without centralized monitoring, organizations struggle to track who has access to critical resources.",
  },
  {
    icon: Repeat,
    title: "Compliance Requirements",
    desc: "Meeting regulatory standards requires strict identity governance and audit-ready access controls.",
  },
  {
    icon: Eye,
    title: "Password & Authentication Risks",
    desc: "Traditional password-based authentication increases the likelihood of credential theft and cyber attacks.",
  },
]; 

const FRAMEWORK = [
  {
    step: "01",
    title: "Identity Assessment",
    desc: "We evaluate your identity infrastructure, user lifecycle, and access policies to identify security gaps.",
    image: "/cybersecurity/30.avif",
  },
  {
    step: "02",
    title: "IAM Strategy",
    desc: "Our experts design an Identity & Access Management framework aligned with your business and compliance requirements.",
    image: "/cybersecurity/29.avif",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "We deploy identity governance, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and role-based access controls.",
    image: "/cybersecurity/28.avif",
  },
  {
    step: "04",
    title: "Monitoring & Governance",
    desc: "Continuous monitoring, access reviews, and policy enforcement ensure secure and compliant identity management.",
    image: "/cybersecurity/31.avif",
  },
  {
    step: "05",
    title: "Continuous Optimization",
    desc: "Regular assessments, user lifecycle improvements, and security enhancements keep your IAM environment future-ready.",
    image: "/cybersecurity/32.avif",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Identity Governance",
    desc: "Manage user identities, roles, permissions, and lifecycle processes from a centralized platform.",
  },
  {
    icon: Workflow,
    title: "Single Sign-On (SSO)",
    desc: "Provide secure and seamless access to multiple business applications through one authentication process.",
  },
  {
    icon: Database,
    title: "Multi-Factor Authentication (MFA)",
    desc: "Strengthen user authentication with additional security layers to reduce unauthorized access.",
  },
  {
    icon: ShieldCheck,
    title: "Privileged Access Management",
    desc: "Protect high-privilege accounts through secure access controls, monitoring, and auditing.",
  },
  {
    icon: Eye,
    title: "Access Monitoring & Analytics",
    desc: "Gain real-time visibility into user activity, access patterns, and potential security threats.",
  },
  {
    icon: MessageSquare,
    title: "IAM Consulting & Support",
    desc: "Receive expert guidance, implementation support, compliance assistance, and continuous optimization.",
  },
];

const FAQS = [
  {
    q: "What is Identity & Access Management (IAM)?",
    a: "Identity & Access Management is a security framework that manages digital identities and controls user access to business systems, applications, and sensitive information.",
  },
  {
    q: "Why is IAM important?",
    a: "IAM strengthens security by ensuring only authorized users can access business resources while improving compliance and reducing cyber risks.",
  },
  {
    q: "Does IAM support Single Sign-On and Multi-Factor Authentication?",
    a: "Yes. Modern IAM solutions include Single Sign-On (SSO), Multi-Factor Authentication (MFA), and role-based access controls for enhanced security.",
  },
  {
    q: "Can IAM integrate with our existing enterprise systems?",
    a: "Absolutely. IAM solutions integrate with cloud platforms, ERP, CRM, HR systems, Active Directory, and third-party business applications.",
  },
  {
    q: "Do you provide implementation and ongoing support?",
    a: "Yes. We provide IAM consulting, implementation, identity governance, compliance support, monitoring, and continuous optimization services.",
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
            src="/cybersecurity/27.avif"
            alt="Autonomous AI agent systems"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 pb-14 sm:pb-20 md:pb-24 pt-28 sm:pt-32 md:pt-40">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#93A5FF] mb-4 sm:mb-6 font-['Montserrat']">
           Identity & Access Management
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font leading-[1.1] sm:leading-[1.05] md:leading-[1.03] max-w-full sm:max-w-xl md:max-w-4xl mb-6 sm:mb-8 tracking-tight"
          >
           Secure identities with intelligent Identity & Access Management.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-white/70 text-base sm:text-lg md:text-xl max-w-full sm:max-w-md md:max-w-xl leading-relaxed mb-8 sm:mb-10"
          >
            Protect your organization with modern Identity & Access Management solutions that secure user identities, simplify authentication, enforce access policies, and reduce cybersecurity risks across your enterprise.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Schedule an IAM Consultation
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
            <Eyebrow>WHY IDENTITY & ACCESS MANAGEMENT</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 tracking-tight text-[#0B1120]">
              The right people should have the right access at the right time.
            </h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-5">
              <p>
               As organizations embrace cloud services, remote work, and digital transformation, managing user identities and controlling access to critical systems becomes increasingly complex and essential.
              </p>
              <p>
                Our Identity & Access Management solutions centralize identity governance, strengthen authentication, automate access management, and provide complete visibility across your digital environment.
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
                src="/cybersecurity/26.avif"
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
              Access Challenges
            </p>
      
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight max-w-6xl">
              The identity and access challenges that increase security risks.
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
           A strategic framework for modern identity and access security.
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
                Comprehensive Identity & Access Management solutions for secure enterprises.
              </h2>
      
              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
               Our IAM solutions help organizations strengthen identity security, simplify access management, improve compliance, and protect critical business resources.
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
          <img
            src=""
            alt="Enterprise agent systems"
            className="h-full w-full object-cover"
          />
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
            Protect every identity. Secure every access.
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
           Strengthen your organization's security with intelligent Identity & Access Management solutions that safeguard user identities, simplify access control, and support secure business growth.
          </p>
          <Link
            to="/contact"
             className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 transition-colors"
          >
            Schedule an IAM Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;