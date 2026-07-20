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
    title: "Cloud Misconfigurations",
    desc: "Improper cloud configurations create security vulnerabilities that expose sensitive business data.",
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity Threats",
    desc: "Organizations face increasing risks from ransomware, phishing attacks, malware, and unauthorized access.",
  },
  {
    icon: GitBranch,
    title: "Identity & Access Risks",
    desc: "Weak identity management and excessive user permissions increase the likelihood of security breaches.",
  },
  {
    icon: Database,
    title: "Data Protection Challenges",
    desc: "Securing sensitive business information across cloud platforms requires encryption, backup, and governance.",
  },
  {
    icon: Repeat,
    title: "Compliance & Regulatory Requirements",
    desc: "Meeting industry standards and regulatory frameworks demands continuous monitoring and policy enforcement.",
  },
  {
    icon: Eye,
    title: "Limited Security Visibility",
    desc: "Without centralized monitoring, organizations struggle to detect threats and respond to incidents quickly.",
  },
];

const FRAMEWORK = [
  {
    step: "01",
    title: "Security Assessment",
    desc: "We evaluate your cloud infrastructure, identify vulnerabilities, and assess security risks across your environment.",
    image: "...",
  },
  {
    step: "02",
    title: "Security Architecture",
    desc: "Our experts design a cloud security strategy aligned with your business, compliance, and operational requirements.",
    image: "...",
  },
  {
    step: "03",
    title: "Security Implementation",
    desc: "We deploy identity management, encryption, monitoring, firewall policies, and advanced threat protection controls.",
    image: "...",
  },
  {
    step: "04",
    title: "Monitoring & Response",
    desc: "Continuous monitoring, threat detection, and incident response ensure rapid identification and mitigation of security risks.",
    image: "...",
  },
  {
    step: "05",
    title: "Continuous Compliance",
    desc: "Regular security reviews, compliance audits, and ongoing optimization keep your cloud environment protected.",
    image: "...",
  },
];

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Identity & Access Management",
    desc: "Secure user identities with role-based access, multi-factor authentication, and Zero Trust principles.",
  },
  {
    icon: Workflow,
    title: "Threat Detection & Response",
    desc: "Monitor cloud environments continuously to detect, investigate, and respond to security threats.",
  },
  {
    icon: Database,
    title: "Data Protection",
    desc: "Protect sensitive information using encryption, secure backups, and data loss prevention strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    desc: "Meet industry regulations through automated compliance monitoring, auditing, and policy enforcement.",
  },
  {
    icon: Eye,
    title: "Cloud Security Monitoring",
    desc: "Gain real-time visibility into cloud assets, vulnerabilities, and security events across your infrastructure.",
  },
  {
    icon: MessageSquare,
    title: "Security Consulting & Support",
    desc: "Receive expert guidance, implementation support, continuous monitoring, and long-term security optimization.",
  },
];

const FAQS = [
  {
    q: "What is Cloud Security?",
    a: "Cloud Security is the practice of protecting cloud infrastructure, applications, data, and user identities from cyber threats, unauthorized access, and compliance risks.",
  },
  {
    q: "Why is Cloud Security important?",
    a: "Cloud Security helps organizations safeguard sensitive information, maintain business continuity, meet regulatory requirements, and reduce cybersecurity risks.",
  },
  {
    q: "Can Cloud Security integrate with our existing cloud platforms?",
    a: "Yes. Our solutions integrate with AWS, Microsoft Azure, Google Cloud, hybrid environments, and other enterprise cloud platforms.",
  },
  {
    q: "Do you provide continuous security monitoring?",
    a: "Yes. We offer 24/7 monitoring, threat detection, incident response, vulnerability assessments, and proactive security management.",
  },
  {
    q: "Do you provide implementation and ongoing support?",
    a: "Yes. We provide cloud security consulting, implementation, compliance management, monitoring, maintenance, and continuous optimization services.",
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
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#93A5FF] mb-6 font-['Montserrat']">
           Cloud Security
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="text-white text-4xl md:text-6xl lg:text-7xl font leading-[1.03] max-w-4xl mb-8 tracking-tight"
          >
           Secure your cloud infrastructure with intelligent security solutions.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            We help organizations protect cloud environments through advanced security solutions that safeguard applications, data, workloads, and digital assets while ensuring compliance and business continuity.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Schedule a Cloud Security Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
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
            <Eyebrow>WHY CLOUD SECURITY</Eyebrow>
            <h2 className="text-3xl md:text-5xl font leading-[1.1] mb-8 tracking-tight text-[#0B1120]">
              A secure cloud environment is the foundation of digital transformation.
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-5">
              <p>
                As organizations move critical workloads to the cloud, protecting sensitive data, applications, and infrastructure becomes increasingly complex. Misconfigurations, cyber threats, and compliance requirements demand a proactive security strategy.
              </p>
              <p>
                Our Cloud Security solutions provide continuous monitoring, identity protection, threat detection, compliance management, and automated security controls that reduce risk while enabling confident cloud adoption.
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
              Security Challenges
            </p>
      
            <h2 className="text-5xl md:text-6xl text-white font-light leading-tight max-w-6xl">
              The cloud security challenges that put business operations at risk.
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
           A strategic framework for securing modern cloud environments.
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
                Comprehensive cloud security solutions for modern enterprises.
              </h2>
      
              <p className="mt-8 text-lg leading-8 text-white/60">
               Our Cloud Security services protect cloud infrastructure, applications, identities, and data while helping organizations maintain compliance and operational resilience.
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
          <h2 className="text-4xl md:text-6xl font leading-[1.05] text-white mb-8 tracking-tight">
            Protect your cloud with security built for the future.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
           Strengthen your cloud security posture with intelligent solutions that protect data, applications, and infrastructure while enabling secure digital transformation.
          </p>
          <Link
            to="/contact"
             className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
          >
            Schedule a Cloud Security Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AIAgents;