import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Workflow,
  Database,
  Brain,
  Bot,
  ScrollText,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import ServiceNavbar from "../../components/layout/ServiceNavbar";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const CAPABILITIES = [
  {
    icon: Brain,
    title: "AI Strategy",
    desc: "Roadmaps that connect AI investment to measurable business outcomes, sequenced against real organizational readiness.",
    link: "/services/ai-strategy",
  },
  {
    icon: Layers,
    title: "Enterprise AI",
    desc: "Production-grade AI systems engineered for the scale, uptime, and compliance enterprise operations require.",
    link: "/services/enterprise-ai",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Custom and fine-tuned generative models built around proprietary data, not generic public endpoints.",
    link: "/services/generative-ai",
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous agents that plan, execute, and coordinate work across enterprise tools, data, and workflows.",
    link: "/services/ai-agents",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    desc: "RPA, machine learning, and orchestration combined to remove bottlenecks from high-volume operational processes.",
    link: "/services/intelligent-automation",
  },
  {
    icon: ShieldCheck,
    title: "AI Governance",
    desc: "Risk frameworks, monitoring, and audit trails that make AI deployment defensible to regulators and boards.",
    link: "/services/ai-governance",
  },
];

const CHALLENGES = [
  {
    title: "Data trapped in silos",
    desc: "Critical business data is scattered across legacy systems and departmental tools, making enterprise-wide analysis slow and unreliable.",
  },
  {
    title: "AI pilots that never scale",
    desc: "Proof-of-concept models perform well in isolation but stall before production due to weak infrastructure or unclear ownership.",
  },
  {
    title: "Manual processes limiting growth",
    desc: "Operations teams spend disproportionate time on repetitive work that automation could execute with greater accuracy.",
  },
  {
    title: "Decisions lagging behind events",
    desc: "Leadership reacts to problems after they surface in quarterly reports, rather than anticipating them in real time.",
  },
  {
    title: "Compliance risk in AI adoption",
    desc: "Rapid AI deployment without governance controls exposes the organization to regulatory and reputational risk.",
  },
  {
    title: "Fragmented technology ownership",
    desc: "Multiple vendors and disconnected roadmaps leave no single team accountable for enterprise-wide data quality.",
  },
];

const AI_PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand business goals, stakeholders, existing systems, and opportunities."
  },
  {
    step: "02",
    title: "Design",
    desc: "Architect AI solutions, data pipelines, security, and enterprise workflows."
  },
  {
    step: "03",
    title: "Develop",
    desc: "Build production-ready AI models, APIs, integrations, and automation."
  },
  {
    step: "04",
    title: "Deploy",
    desc: "Launch securely with monitoring, governance, and performance tracking."
  },
  {
    step: "05",
    title: "Optimize",
    desc: "Continuously improve models using enterprise feedback and new data."
  },
];

const METHODOLOGY = [
  { step: "01", title: "Assess", desc: "We audit existing data infrastructure, systems, and workflows to identify where AI creates the most defensible business value." },
  { step: "02", title: "Design", desc: "We architect the target data model and system design, sequenced against technical constraints and business priorities." },
  { step: "03", title: "Build", desc: "Engineering teams develop, train, and integrate solutions using agile delivery, with governance checkpoints in every sprint." },
  { step: "04", title: "Deploy", desc: "Solutions move to production with monitoring, rollback plans, and performance benchmarks in place from day one." },
  { step: "05", title: "Scale & Govern", desc: "We establish ongoing monitoring, retraining cycles, and governance reporting so performance holds as usage grows." },
];

const INDUSTRIES = [
  { name: "Financial Services", desc: "Fraud detection, credit risk modeling, and regulatory reporting automation." },
  { name: "Manufacturing", desc: "Predictive maintenance, quality inspection, and supply chain forecasting." },
  { name: "Healthcare", desc: "Clinical data analytics and compliance-aware AI deployment." },
  { name: "Retail", desc: "Demand forecasting, personalization, and inventory optimization." },
  { name: "Logistics", desc: "Route optimization, warehouse automation, and fleet intelligence." },
  { name: "Public Sector", desc: "Citizen service automation and data-driven policy planning." },
];


const FAQS = [
  {
    q: "How is Tec Tha's approach to enterprise AI different from a generic AI vendor?",
    a: "We do not sell a single product and adapt your business to fit it. Every engagement starts with your data reality, existing systems, and operational constraints, and we design solutions that integrate into how your organization actually works, with governance built in from the start.",
  },
  {
    q: "How long does a typical AI or data analytics engagement take?",
    a: "A focused analytics workflow can move from assessment to production in 8 to 12 weeks. Enterprise-wide AI platforms typically run 4 to 9 months, delivered in phased releases so value is realized incrementally rather than at a single go-live date.",
  },
  {
    q: "Can you work with our existing data infrastructure and legacy systems?",
    a: "Yes. Most engagements begin by integrating with existing ERP, CRM, and legacy databases rather than replacing them outright. We assess what should be modernized, what should be wrapped with integration layers, and what should be left untouched.",
  },
  {
    q: "How do you handle AI governance and regulatory compliance?",
    a: "Governance is not a final checklist item. We build model documentation, bias testing, access controls, and audit trails into the development process itself, aligned to frameworks such as SOC 2, GDPR, and relevant industry-specific regulation.",
  },
  {
    q: "What does ongoing support look like after deployment?",
    a: "We provide structured post-deployment support including performance monitoring, retraining schedules, and quarterly business reviews, so systems continue to perform as data and business conditions evolve.",
  },
];

const EnterpriseSoftware = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-black font-['Montserrat']">
      <ServiceNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-start px-6 md:px-10 overflow-hidden">
        <>
  {/* Background Image */}
  <motion.div
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/art.jpg')",
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
        <div className="relative max-w-[1200px] mx-auto">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="-mt-20 text-xl font uppercase tracking-[0.3em] mb-6 font-['Montserrat'] text-white">
            Artificial Intelligence 
          </motion.p> <hr className="border-white/40 my-6" />
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.08} className="text-7xl md:text-6xl lg:text-7xl font text-white leading-[1.05]">
            Artificial Intelligence Built for Enterprise.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.16} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            {/* incase add description use this block */}
          </motion.p>
        </div>
      </section>

      
      {/* Enterprise Vision */}
<section className="py-28 px-6 md:px-10 bg-white relative overflow-hidden">
  <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-40"></div>

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-6 font-semibold">
        Enterprise Vision
      </p>

      <h2 className="text-5xl font text-black leading-tight mb-8">
        Technology should adapt to business —
        <br />
        not the other way around.
      </h2>

      <p className="text-gray-600 text-lg leading-9 mb-6 font-['montserrat']">
        Most enterprise technology programs begin with a platform decision and
        work backward toward the business problem. We reverse that order.
        Every engagement starts with how your organization actually makes
        decisions, then works forward to the data architecture and AI systems
        that support it.
      </p>

      <p className="text-gray-600 text-lg leading-9">
        Systems built around a vendor's roadmap tend to outlive their usefulness.
        Systems built around your operating model continue to evolve as your
        business grows.
      </p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* Replace this div with <img> later */}
      <div className="h-[650px] rounded-[32px] border border-dashed border-slate-300 bg-slate-100 flex items-center justify-center overflow-hidden">
        <span className="text-slate-500 text-lg">
          /images/enterprise-vision.jpg
        </span>
      </div>

      {/* Floating Card */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -left-8 top-10 bg-white rounded-3xl shadow-2xl p-6"
      >
        <p className="text-sm text-gray-500">AI Strategy</p>
        <h4 className="font-bold text-xl text-black">Business First</h4>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -right-8 bottom-12 bg-white rounded-3xl shadow-2xl p-6"
      >
        <p className="text-sm text-gray-500">Enterprise Ready</p>
        <h4 className="font-bold text-xl text-black">Secure & Scalable</h4>
      </motion.div>
    </motion.div>

  </div>
</section>



{/* Business Reality */}
<section className="py-28 px-6 md:px-10 bg-[#F8FAFC] relative overflow-hidden">

  <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-40"></div>

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <div className="h-[650px] rounded-[32px] border border-dashed border-slate-300 bg-slate-100 flex items-center justify-center overflow-hidden">
        <span className="text-slate-500 text-lg">
          /images/business-reality.jpg
        </span>
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-6 top-10 bg-white rounded-3xl shadow-2xl p-6"
      >
        <p className="text-sm text-gray-500">Data Quality</p>
        <h3 className="text-3xl font-bold text-blue-600">99.8%</h3>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -left-6 bottom-10 bg-white rounded-3xl shadow-2xl p-6"
      >
        <p className="text-sm text-gray-500">Live Insights</p>
        <h4 className="font-semibold text-black">
          Real-time Analytics
        </h4>
      </motion.div>
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-6 font">
        Business Reality
      </p>

      <h2 className="text-5xl font text-black leading-tight mb-8">
        Most enterprises don't have a data problem.
        <br />
        They have a trust problem.
      </h2>

      <p className="text-gray-600 text-lg leading-9 mb-6">
        Enterprises today generate more data than at any point in history,
        yet decision-makers often rely on intuition because information is
        inconsistent, delayed, or fragmented across disconnected systems.
      </p>

      <p className="text-gray-600 text-lg leading-9">
        Tec Tha treats AI and data as enterprise infrastructure. We build
        trusted data pipelines, governance frameworks, and intelligent systems
        that organizations can confidently rely on for mission-critical
        decisions.
      </p>

    </motion.div>

  </div>
</section>

  
{/* Executive Challenges */}
<section className="py-32 px-6 md:px-10 bg-black">
  <div className="max-w-[1400px] mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-blue-500 font-semibold mb-4">
        Executive Challenges
      </p>

      <h2 className="text-5xl md:text-6xl text-white font-light leading-tight max-w-6xl">
        The problems we're most often
        <br />
        brought in to solve.
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="space-y-6">

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
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.06]"
        >

          <div className="grid md:grid-cols-[120px_1fr_60px] items-center px-10 py-10 gap-8">

            {/* Number */}
            <div className="text-5xl font-bold text-white/15 group-hover:text-blue-400 transition-all duration-500">
              0{index + 1}
            </div>

            {/* Content */}
            <div>

              <h3 className="text-3xl text-white font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-lg leading-8 max-w-4xl">
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

      {/* Enterprise Capabilities */}
      <section id="capabilities" className="py-20 px-6 md:px-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">Enterprise Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl mb-14">Six disciplines, one connected practice.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap) => (
              <Link to={cap.link} key={cap.title} className="group rounded-2xl border border-white/10 p-8 hover:border-white/25 hover:bg-white/[0.03] transition-all duration-300">
                <cap.icon className="h-7 w-7 text-[#818CF8] mb-5" />
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {cap.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Process */}
<section className="py-36 px-6 md:px-10 bg-white">

  <div className="max-w-[1500px] mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold mb-5">
        Our AI Process
      </p>

      <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight max-w-4xl">
        From business challenge
        <br />
        to enterprise deployment.
      </h2>
    </motion.div>

    <div className="relative">

      {/* Line */}
      <div className="absolute left-0 top-7 w-full h-px bg-slate-200"></div>

      <div className="grid md:grid-cols-5 gap-10 relative">

        {AI_PROCESS.map((item, index) => (

          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative"
          >

            {/* Circle */}
            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg shadow-xl mb-10 relative z-10">
              {item.step}
            </div>

            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-8">
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>


      {/* Industry Solutions */}
      <section className="py-20 px-6 md:px-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">Industry Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl mb-14">Context matters. We build for your industry's constraints.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="rounded-2xl border border-white/10 p-7">
                <Database className="h-6 w-6 text-[#818CF8] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{ind.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Delivery Framework */}
      <section className="py-20 px-6 md:px-10 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">Delivery Framework</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl mb-14">A structured path from assessment to scale.</h2>
          <div className="space-y-10">
            {METHODOLOGY.map((m) => (
              <div key={m.step} className="flex gap-8 items-start">
                <span className="text-3xl font-bold text-white/20 shrink-0 w-16">{m.step}</span>
                <div className="border-l border-white/10 pl-8 pb-2">
                  <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-2xl">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-20 px-6 md:px-10 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4 font-['Montserrat']">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-14">Common questions from enterprise leaders.</h2>
          <div className="divide-y divide-white/10">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className="py-6">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-6 text-left">
                  <span className="text-lg font-semibold">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <p className="text-gray-400 leading-relaxed mt-4 max-w-3xl">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 px-6 md:px-10 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto text-center">
          <ScrollText className="h-8 w-8 text-[#818CF8] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">Ready to turn enterprise data into a decision advantage?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Speak with our enterprise advisory team about where AI and data analytics can create the most defensible value for your organization.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors">
            Schedule an enterprise consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 md:px-10 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-gray-400 text-base max-w-md">
            Explore how AI Strategy, Enterprise AI, and Generative AI fit into a single connected roadmap for your organization.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors shrink-0">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSoftware;