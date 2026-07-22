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
    title: "AI Strategy",
    short:
      "Roadmaps that connect AI investment to measurable business outcomes.",
    image:"/Ai/ai.jpg",
    tags: ["Consulting", "Roadmap", "Transformation"],
    link: "/services/ArtificialIntelligence&DataAnalytics/ai-strategy",
  },
  {
    id: 2,
    title: "Enterprise AI",
    short:
      "Production-grade AI systems built for enterprise scale and security.",
    image:"/Ai/ai15.jpg",
    tags: ["Scalable", "Secure", "Enterprise"],
    link: "/services/ArtificialIntelligence&DataAnalytics/enterprise-ai",
  },
  {
    id: 3,
    title: "Generative AI",
    short:
      "Custom LLMs and GenAI solutions trained on your enterprise knowledge.",
    image:"/Ai/ai16.jpg",
    tags: ["LLM", "RAG", "GPT"],
    link: "/services/ArtificialIntelligence&DataAnalytics/generative-ai",
  },
  {
    id: 4,
    title: "AI Agents",
    short:
      "Autonomous AI agents capable of planning and executing workflows.",
    image:
"/Ai/ai3.jpg",
    tags: ["Agents", "Automation", "AI"],
    link: "/services/ArtificialIntelligence&DataAnalytics/ai-agents",
  },
  {
    id: 5,
    title: "Intelligent Automation",
    short:
      "Combine AI, RPA and workflows to automate repetitive operations.",
    image:
"/Ai/ai8.jpg",
    tags: ["RPA", "Workflow", "ML"],
    link: "/services/ArtificialIntelligence&DataAnalytics/intelligent-automation",
  },
  {
    id: 6,
    title: "AI Governance",
    short:
      "Responsible AI frameworks with compliance, monitoring and auditability.",
    image:
"/Ai/aii2.jpg",
    tags: ["Security", "Compliance", "Risk"],
    link: "/services/ArtificialIntelligence&DataAnalytics/ai-governance",
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


const METHODOLOGY = [
  {
    step: "01",
    title: "Assess",
    desc: "We audit existing data infrastructure, systems, and workflows to identify where AI creates the most defensible business value.",
    image:
"/Ai/1.jpg",
  },
  {
    step: "02",
    title: "Design",
    desc: "We architect the target data model and system design, sequenced against technical constraints and business priorities.",
    image:
"/Ai/2.jpg",
  },
  {
    step: "03",
    title: "Build",
    desc: "Engineering teams develop, train, and integrate solutions using agile delivery, with governance checkpoints in every sprint.",
    image:
"/Ai/ai4.jpeg",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "Solutions move to production with monitoring, rollback plans, and performance benchmarks in place from day one.",
    image:
"/Ai/ai1.jpg",
  },
  {
    step: "05",
    title: "Scale & Govern",
    desc: "We establish ongoing monitoring, retraining cycles, and governance reporting so performance holds as usage grows.",
    image:
"/Ai/5.jpg",
  },
];

const INDUSTRIES = [
  {
    title: "Financial Services",
    image:
"/Ai/6.jpg",
    desc: "Fraud detection, credit risk modeling, and regulatory reporting automation.",
  },
  {
    title: "Manufacturing",
    image:
"/Ai/3.jpg",
    desc: "Predictive maintenance, quality inspection, and supply chain forecasting.",
  },
  {
    title: "Healthcare",
    image:
"/Ai/aii1.jpg",
    desc: "Clinical data analytics and compliance-aware AI deployment.",
  },
  {
    title: "Retail",
    image:
"/Ai/7.jpg",
    desc: "Demand forecasting, personalization, and inventory optimization.",
  },
  {
    title: "Logistics",
    image:
"/Ai/9.jpg",
    desc: "Route optimization, warehouse automation, and fleet intelligence.",
  },
  {
    title: "Public Sector",
    image:
"/Ai/8.jpg",
    desc: "Citizen service automation and data-driven policy planning.",
  },
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

const ArtificialIntelligence = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen w-full bg-white text-black font-['Montserrat'] overflow-x-hidden">
      <ServiceNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-10 overflow-hidden">
        <>
  {/* Background Image */}
  <motion.div
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage:"url('/Ai/10.jpg')",
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
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="-mt-10 sm:-mt-14 md:-mt-20 text-sm sm:text-base md:text-xl font uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-['Montserrat'] text-white">
            Artificial Intelligence 
          </motion.p> <hr className="border-white/40 my-4 sm:my-6" />
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.08} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font text-white leading-[1.15] md:leading-[1.05]">
            Artificial Intelligence Built for Enterprise.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.16} className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-10">
            {/* incase add description use this block */}
          </motion.p>
        </div>
      </section>

      
      {/* Enterprise Vision */}
<section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-white relative overflow-hidden">
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
        Enterprise Vision
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-5xl font text-black leading-tight mb-6 sm:mb-8">
        Technology should adapt to business —
        <br className="hidden sm:block" />
        not the other way around.
      </h2>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mb-4 sm:mb-6 font-['montserrat']">
        Most enterprise technology programs begin with a platform decision and
        work backward toward the business problem. We reverse that order.
        Every engagement starts with how your organization actually makes
        decisions, then works forward to the data architecture and AI systems
        that support it.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
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
      <img
  src="/Ai/aii.jpg"
  alt="Enterprise Vision"
  className="h-[260px] sm:h-[380px] md:h-[500px] lg:h-[650px] w-full rounded-2xl sm:rounded-[32px] object-cover"
/>

    </motion.div>

  </div>
</section>



{/* Business Reality */}
<section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 bg-[#F8FAFC] relative overflow-hidden">

  <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-40"></div>

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -80, scale: 1.08 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative order-2 lg:order-1"
    >
      <img
  src="/Ai/ai14.jpg"
  alt="Enterprise Vision"
  className="h-[260px] sm:h-[380px] md:h-[500px] lg:h-[650px] w-full rounded-2xl sm:rounded-[32px] object-cover"
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

      <h2 className="text-2xl sm:text-3xl md:text-5xl font text-black leading-tight mb-6 sm:mb-8">
        Most enterprises don't have a data problem.
        <br className="hidden sm:block" />
        They have a trust problem.
      </h2>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mb-4 sm:mb-6">
        Enterprises today generate more data than at any point in history,
        yet decision-makers often rely on intuition because information is
        inconsistent, delayed, or fragmented across disconnected systems.
      </p>

      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
        Tec Tha treats AI and data as enterprise infrastructure. We build
        trusted data pipelines, governance frameworks, and intelligent systems
        that organizations can confidently rely on for mission-critical
        decisions.
      </p>

    </motion.div>

  </div>
</section>

  
{/* Executive Challenges */}
<section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-black">
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
    <div className="space-y-4 sm:space-y-6">

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

          <div className="grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr_60px] items-center px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8">

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

     <section className="bg-white py-16 sm:py-20 md:py-24">

  <div className="mx-auto max-w-7xl px-4 sm:px-6">

    <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
      Enterprise Capabilities
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
          className="min-w-[78%] sm:min-w-[330px] flex-shrink-0 snap-start lg:min-w-[32%]"
        >

          <Link
            to={service.link}
            className="group relative block h-[420px] sm:h-[520px] md:h-[650px] overflow-hidden transition-all duration-700 hover:scale-105"
          >

            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"/>

            <div className="absolute bottom-0 p-5 sm:p-6 md:p-8 text-white">

              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">
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

              <div className="mt-6 sm:mt-8 flex items-center gap-2 text-sm sm:text-base font-semibold">
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

    <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
      Industry Solutions
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 max-w-3xl mb-10 sm:mb-14 md:mb-20">
      Context matters. We build for your industry's constraints.
    </h2>

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-14 md:gap-y-20">

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
          <div className="overflow-hidden rounded-xl sm:rounded-none">

            <img
              src={industry.image}
              alt={industry.title}
              className="h-[180px] sm:h-[220px] md:h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
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
      <section className="bg-black py-16 sm:py-24 md:py-32">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}

    <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
      Delivery Framework
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white max-w-3xl mb-10 sm:mb-16 md:mb-24">
      A structured path from assessment to scale.
    </h2>

    <div className="space-y-14 sm:space-y-20 md:space-y-32">

      {METHODOLOGY.map((item, index) => (

        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="border-b border-white/10 pb-10 sm:pb-16 md:pb-24"
        >

          {/* Image */}

          <div className="overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              className="h-[220px] sm:h-[340px] md:h-[420px] lg:h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Content */}

          <div className="mt-8 sm:mt-10 md:mt-12">

            <span className="text-[50px] sm:text-[70px] md:text-[90px] font-bold text-white/10">
              {item.step}
            </span>

            <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-5xl font-light text-white">
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
      <section className="bg-white py-16 sm:py-24 md:py-32">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[420px_1fr] gap-10 sm:gap-16 lg:gap-24">

    {/* LEFT */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="lg:sticky lg:top-28 h-fit"
    >
      <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-blue-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
        Frequently Asked Questions
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-slate-900">
        Common questions
        <br className="hidden sm:block" />
        from enterprise
        <br className="hidden sm:block" />
        leaders.
      </h2>

      <p className="mt-5 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-slate-500">
        Everything enterprise teams usually ask before
        starting an AI transformation initiative.
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
          className="border-b border-slate-200 py-6 sm:py-8"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="w-full flex justify-between items-start gap-4 sm:gap-10 text-left group"
          >

            <div className="flex gap-4 sm:gap-8">

              <span className="text-blue-600 font-semibold text-base sm:text-lg w-6 sm:w-8 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-light leading-snug text-slate-900 group-hover:text-blue-600 transition">
                {faq.q}
              </h3>

            </div>

            <div
              className={`shrink-0 transition duration-300 ${
                openFaq === index
                  ? "rotate-180"
                  : ""
              }`}
            >
              <ChevronDown size={20} className="sm:hidden" />
              <ChevronDown size={24} className="hidden sm:block" />
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

            <div className="pl-10 sm:pl-16 pr-2 sm:pr-8 pt-4 sm:pt-6">

              <p className="text-slate-600 leading-7 sm:leading-9 text-base sm:text-lg max-w-3xl">
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
      <section className="relative overflow-hidden bg-black py-16 sm:py-24 md:py-32">

  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2  bg-blue-600/10 blur-[180px]" />

  <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

    <div className=" border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 sm:p-10 md:p-14 lg:p-20 backdrop-blur-xl">

      <p className="mb-3 sm:mb-5 uppercase tracking-[0.2em] sm:tracking-[0.35em] text-xs sm:text-sm font-semibold text-blue-500">
        Enterprise AI Advisory
      </p>

      <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
        Ready to turn enterprise data
        <br className="hidden sm:block" />
        into a decision advantage?
      </h2>

      <p className="mt-5 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-white/70">
        Speak with our enterprise advisory team to identify where AI,
        automation, and analytics can create measurable business value across
        your organization.
      </p>

      <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6">

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-slate-100"
        >
          Schedule a Consultation
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
        >
          Explore Services
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* Footer CTA */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Explore how AI Strategy, Enterprise AI, and Generative AI fit into a single connected roadmap for your organization.
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

export default ArtificialIntelligence;