import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import ServiceNavbar from "../../components/layout/ServiceNavbar";

const fadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
    },
  },
});

const CAPABILITIES = [
  {
    id: 1,
    title: "Cybersecurity Strategy",
    short:
      "Develop enterprise security strategies aligned with business objectives, risk management, and regulatory compliance.",
    image: "/cybersecurity/4.avif",
    tags: ["Strategy", "Risk", "Consulting"],
    link: "/services/CybersecurityService/cybersecurity-strategy",
  },
  {
    id: 2,
    title: "Identity & Access Management",
    short:
      "Secure digital identities with centralized authentication, authorization, and privileged access management.",
    image: "/cybersecurity/6.avif",
    tags: ["IAM", "Zero Trust", "Access Control"],
    link: "/services/CybersecurityService/identity-access-management",
  },
  {
    id: 3,
    title: "Cloud Security",
    short:
      "Protect cloud workloads with advanced security controls, continuous monitoring, and threat prevention.",
    image: "/cybersecurity/5.avif",
    tags: ["Cloud Security", "Threat Protection", "Compliance"],
    link: "/services/CybersecurityService/cloud-security",
  },
  {
    id: 4,
    title: "Governance, Risk & Compliance",
    short:
      "Strengthen governance frameworks and maintain compliance with industry regulations and security standards.",
    image: "/cybersecurity/7.avif",
    tags: ["Governance", "Risk", "Compliance"],
    link: "/services/CybersecurityService/governance-risk-compliance",
  },
  {
    id: 5,
    title: "Security Operations",
    short:
      "Detect, investigate, and respond to cyber threats through continuous monitoring and incident management.",
    image: "/cybersecurity/8.avif",
    tags: ["SOC", "Monitoring", "Incident Response"],
    link: "/services/CybersecurityService/security-operations",
  },
  {
    id: 6,
    title: "Managed Security",
    short:
      "Deliver proactive security management with 24/7 monitoring, threat detection, and operational support.",
    image: "/cybersecurity/9.avif",
    tags: ["Managed Services", "Threat Detection", "Support"],
    link: "/services/CybersecurityService/managed-security",
  },
];

const CHALLENGES = [
  {
    title: "Expanding Attack Surface",
    desc: "Hybrid environments, cloud adoption, and connected devices increase exposure to evolving cyber threats.",
  },
  {
    title: "Security Alert Overload",
    desc: "Large volumes of alerts make it difficult for security teams to identify and respond to critical incidents quickly.",
  },
  {
    title: "Delayed Incident Response",
    desc: "Without automated detection and response capabilities, cyber incidents can significantly impact business operations.",
  },
  {
    title: "Complex Compliance Requirements",
    desc: "Meeting evolving regulatory standards requires continuous governance, monitoring, and audit readiness.",
  },
  {
    title: "Third-Party Security Risks",
    desc: "Vendors and external partners introduce additional cybersecurity risks that require continuous assessment.",
  },
  {
    title: "Lack of Security Integration",
    desc: "Disconnected security processes and business operations create gaps that reduce overall cyber resilience.",
  },
];

const METHODOLOGY = [
  {
    step: "01",
    title: "Assess & Identify",
    desc: "Evaluate existing security controls, infrastructure, and vulnerabilities to understand organizational risk exposure.",
    image: "/cybersecurity/16.avif",
  },
  {
    step: "02",
    title: "Design Protection",
    desc: "Develop a security architecture aligned with business priorities, compliance requirements, and industry best practices.",
    image: "/cybersecurity/17.avif",
  },
  {
    step: "03",
    title: "Implement Controls",
    desc: "Deploy security technologies, strengthen configurations, and remediate vulnerabilities across the environment.",
    image: "/cybersecurity/18.avif",
  },
  {
    step: "04",
    title: "Monitor & Respond",
    desc: "Enable continuous threat monitoring, incident detection, and rapid response through security operations.",
    image: "/cybersecurity/19.avif",
  },
  {
    step: "05",
    title: "Optimize & Govern",
    desc: "Continuously improve security posture with governance, compliance monitoring, and ongoing risk management.",
    image: "/cybersecurity/20.avif",
  },
];

const INDUSTRIES = [
  {
    title: "Financial Services",
    image: "/cybersecurity/10.avif",
    desc: "Advanced cybersecurity solutions protecting financial systems, digital transactions, and customer data.",
  },
  {
    title: "Manufacturing",
    image: "/cybersecurity/11.avif",
    desc: "Secure industrial control systems, connected factories, and operational technology environments.",
  },
  {
    title: "Healthcare",
    image: "/cybersecurity/12.avif",
    desc: "Protect patient information and healthcare systems while meeting strict regulatory requirements.",
  },
  {
    title: "Retail & E-Commerce",
    image: "/cybersecurity/13.avif",
    desc: "Safeguard payment platforms, customer information, and digital commerce against cyber threats.",
  },
  {
    title: "Logistics & Supply Chain",
    image: "/cybersecurity/14.avif",
    desc: "Strengthen cybersecurity across transportation networks, warehouses, and connected supply chains.",
  },
  {
    title: "Government & Public Sector",
    image: "/cybersecurity/15.avif",
    desc: "Secure critical infrastructure and digital public services with enterprise-grade cyber resilience.",
  },
];

const FAQS = [
  {
    q: "Why choose Tec Tha for cybersecurity services?",
    a: "Tec Tha delivers business-focused cybersecurity solutions that combine strategy, governance, threat protection, and compliance to safeguard organizations against evolving cyber risks.",
  },
  {
    q: "How long does a cybersecurity engagement typically take?",
    a: "Project timelines depend on the scope and complexity. Security assessments can be completed within weeks, while enterprise cybersecurity programs are delivered in structured phases over several months.",
  },
  {
    q: "Can you integrate with our existing security tools?",
    a: "Yes. We work with your current security infrastructure, including SIEM, firewalls, endpoint protection, and identity platforms, to maximize existing investments while enhancing overall security.",
  },
  {
    q: "How do you ensure compliance with security standards?",
    a: "We implement governance frameworks, continuous monitoring, and security controls aligned with standards such as ISO 27001, SOC 2, GDPR, and other industry-specific regulations.",
  },
  {
    q: "Do you provide ongoing managed security services?",
    a: "Yes. Our managed security services include continuous monitoring, threat detection, incident response, vulnerability management, and proactive security optimization.",
  },
];

const CyberSecurity = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-black font-['Montserrat'] overflow-x-hidden">
      <ServiceNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-10 overflow-hidden">
        <>
  {/* Background Image */}
  <motion.div
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/cybersecurity/1.avif')",
  }}
  initial={{ scale: 1.2 }}
  animate={{ scale: 1 }}
  transition={{
    duration: 2,
    ease: [0.22, 1, 0.36, 1], // Premium smooth easing
  }}
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
</>
        <div className="relative w-full max-w-[1200px] mx-auto">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mt-0 sm:-mt-10 lg:-mt-20 text-base sm:text-lg md:text-xl font uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-['Montserrat'] text-white">
            Cyber Security
          </motion.p> <hr className="border-white/40 my-4 sm:my-6" />
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.08} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font text-white leading-[1.15] sm:leading-[1.1] lg:leading-[1.05]">
            Security Built to Withstand the Next Attempt.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.16} className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-10">
            {/* incase add description use this block */}
          </motion.p>
        </div>
      </section>

      
      {/* Enterprise Vision */}
<section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white relative overflow-hidden">
  <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-40"></div>

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600 mb-4 sm:mb-6 font-semibold">
        Security Vision
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font text-black leading-tight mb-6 sm:mb-8">
        Security should adapt to the business —
        <br className="hidden sm:block" />
        not the other way around.
      </h2>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mb-4 sm:mb-6 font-['montserrat']">
        Most security programs begin with a tool decision and work backward
        toward the business risk. We reverse that order. Every engagement
        starts with how your organization actually operates and where real
        exposure lives, then works forward to the controls and monitoring
        that defend it.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
        Programs built around a single vendor's roadmap tend to leave gaps.
        Programs built around your actual risk continue to hold as threats
        and the business evolve.
      </p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full"
    >
      {/* Replace this div with <img> later */}
      <img
  src="/cybersecurity/2.avif"
  alt="Security Vision"
  className="h-[280px] sm:h-[380px] md:h-[480px] lg:h-[650px] w-full rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] object-cover"
/>

    </motion.div>

  </div>
</section>



{/* Business Reality */}
<section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-[#F8FAFC] relative overflow-hidden">

  <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-40"></div>

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full order-2 lg:order-1"
    >
      <img
  src="/cybersecurity/3.avif"
  alt="Security Reality"
  className="h-[280px] sm:h-[380px] md:h-[480px] lg:h-[650px] w-full rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] object-cover"
/>
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="order-1 lg:order-2"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600 mb-4 sm:mb-6 font">
        Business Reality
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font text-black leading-tight mb-6 sm:mb-8">
        Most enterprises don't have a tooling problem.
        <br className="hidden sm:block" />
        They have a visibility problem.
      </h2>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mb-4 sm:mb-6">
        Enterprises today run more security tools than at any point in
        history, yet breaches persist because no single team has a complete
        view of the attack surface across cloud, network, and endpoints.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
        Tec Tha treats security as enterprise infrastructure. We build
        unified visibility, tested response plans, and governed controls
        that organizations can confidently rely on to withstand real threats.
      </p>

    </motion.div>

  </div>
</section>

  
{/* Executive Challenges */}
<section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-10 bg-black">
  <div className="max-w-[1400px] mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-14 md:mb-20"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-500 font-semibold mb-3 sm:mb-4">
        Executive Challenges
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight max-w-6xl">
        The problems we're most often
        <br className="hidden sm:block" />
        brought in to solve.
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="space-y-4 sm:space-y-5 md:space-y-6">

      {CHALLENGES.map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          whileHover={{
            x: 10,
          }}
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.06]"
        >

          <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[70px_1fr] md:grid-cols-[120px_1fr_60px] items-center px-5 sm:px-7 md:px-10 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8">

            {/* Number */}
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/15 group-hover:text-blue-400 transition-all duration-500">
              0{index + 1}
            </div>

            {/* Content */}
            <div>

              <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-2 sm:mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 max-w-4xl">
                {item.desc}
              </p>

            </div>

          </div>

          {/* Bottom Line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-full"></div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

     <section className="bg-white py-14 sm:py-20 md:py-24">

  <div className="mx-auto max-w-7xl px-4 sm:px-6">

    <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
      Security Capabilities
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-light mb-8 sm:mb-12 md:mb-16">
      Six disciplines, one connected practice.
    </h2>

    <div className="group/cards flex gap-4 sm:gap-6 md:gap-7 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

      {CAPABILITIES.map((service, i) => (

        <motion.div
          key={service.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i * 0.08}
          className="min-w-[80vw] sm:min-w-[330px] flex-shrink-0 snap-start lg:min-w-[32%]"
        >

          <Link
            to={service.link}
            className="group relative block h-[420px] sm:h-[520px] md:h-[600px] lg:h-[650px] overflow-hidden transition-all duration-700 hover:scale-105"
          >

            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"/>

            <div className="absolute bottom-0 p-5 sm:p-6 md:p-8 text-white">

              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                {service.title}
              </h3>

              <p className="text-white/80 text-sm sm:text-base">
                {service.short}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">

                {service.tags.map(tag=>(
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-2 font-semibold text-sm sm:text-base">
                Explore Service
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5"/>
              </div>

            </div>

          </Link>

        </motion.div>

      ))}

    </div>

  </div>

</section>


      {/* Industry Solutions */}
      <section className="bg-white py-16 sm:py-20 md:py-28">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
      Industry Solutions
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 max-w-3xl mb-10 sm:mb-14 md:mb-20">
      Context matters. We build for your industry's constraints.
    </h2>

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-10 sm:gap-y-14 md:gap-y-20">

      {INDUSTRIES.map((industry, index) => (

        <motion.div
          key={industry.title}
          variants={fadeUp(index * 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group"
        >

          {/* Image */}
          <div className="overflow-hidden">

            <img
              src={industry.image}
              alt={industry.title}
              className="h-[200px] sm:h-[230px] md:h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

          </div>

          {/* Content */}

          <h3 className="mt-5 sm:mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl font-light text-slate-900">
            {industry.title}
          </h3>

          <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
            {industry.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* Delivery Framework */}
      <section className="bg-black py-16 sm:py-20 md:py-32">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}

    <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
      Delivery Framework
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white max-w-3xl mb-12 sm:mb-16 md:mb-24">
      A structured path from assessment to scale.
    </h2>

    <div className="space-y-16 sm:space-y-20 md:space-y-32">

      {METHODOLOGY.map((item, index) => (

        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="border-b border-white/10 pb-12 sm:pb-16 md:pb-24"
        >

          {/* Image */}

          <div className="overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              className="h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Content */}

          <div className="mt-8 sm:mt-10 md:mt-12">

            <span className="text-[48px] sm:text-[64px] md:text-[90px] font-bold text-white/10">
              {item.step}
            </span>

            <h3 className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl font-light text-white">
              {item.title}
            </h3>

            <p className="mt-4 sm:mt-6 md:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-white/70">
              {item.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

      {/* FAQs */}
      <section className="bg-white py-16 sm:py-20 md:py-32">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[420px_1fr] gap-10 sm:gap-14 lg:gap-24">

    {/* LEFT */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="lg:sticky lg:top-28 h-fit"
    >
      <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
        Frequently Asked Questions
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-slate-900">
        Common questions
        <br className="hidden sm:block" />
        from enterprise
        <br className="hidden sm:block" />
        leaders.
      </h2>

      <p className="mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-slate-500">
        Everything enterprise teams usually ask before
        starting a cyber security initiative.
      </p>

    </motion.div>

    {/* RIGHT */}

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      {FAQS.map((faq, index) => (

        <div
          key={faq.q}
          className="border-b border-slate-200 py-6 sm:py-7 md:py-8"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="w-full flex justify-between items-start gap-4 sm:gap-6 md:gap-10 text-left group"
          >

            <div className="flex gap-4 sm:gap-6 md:gap-8">

              <span className="text-blue-600 font-semibold text-base sm:text-lg w-6 sm:w-8 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-light leading-snug text-slate-900 group-hover:text-blue-600 transition">
                {faq.q}
              </h3>

            </div>

            <div
              className={`flex-shrink-0 transition duration-300 ${
                openFaq === index
                  ? "rotate-180"
                  : ""
              }`}
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

          </button>

          <motion.div
            initial={false}
            animate={{
              height: openFaq === index ? "auto" : 0,
              opacity: openFaq === index ? 1 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >

            <div className="pl-10 sm:pl-12 md:pl-16 pr-4 sm:pr-6 md:pr-8 pt-4 sm:pt-5 md:pt-6">

              <p className="text-slate-600 leading-7 sm:leading-8 md:leading-9 text-base sm:text-lg max-w-3xl">
                {faq.a}
              </p>

            </div>

          </motion.div>

        </div>

      ))}

    </motion.div>

  </div>

</section>

      {/* Enterprise CTA */}
      <section className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-32">

  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2  bg-blue-600/10 blur-[180px]" />

  <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

    <div className=" border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 sm:p-10 md:p-14 lg:p-20 backdrop-blur-xl">

      <p className="mb-4 sm:mb-5 uppercase tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm font-semibold text-blue-500">
        Cyber Security Advisory
      </p>

      <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
        Ready to close the gaps
        <br className="hidden sm:block" />
        before someone else finds them?
      </h2>

      <p className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-white/70">
        Speak with our security advisory team to identify where detection,
        response, and governance can reduce risk across your organization.
      </p>

      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6">

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-6 sm:px-7 md:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-slate-100"
        >
          Schedule a Consultation
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 px-6 sm:px-7 md:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
        >
          Explore Services
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* Footer CTA */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Explore how Threat Detection, Penetration Testing, and Identity & Access Management fit into a single connected roadmap for your organization.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors shrink-0">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
