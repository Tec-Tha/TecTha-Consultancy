import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  FileText,
  MessageSquare,
  ImageIcon,
  Code2,
  ShieldAlert,
  Fingerprint,
  Wand2,
  BookOpen,
  Repeat,
  ShieldCheck,
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
  { icon: Fingerprint, title: "Generic models miss your context", desc: "Off-the-shelf public models don't understand your products, tone, or internal terminology." },
  { icon: ShieldAlert, title: "Hallucination risk in regulated content", desc: "Unverified generative output creates real risk in legal, financial, or clinical contexts." },
  { icon: FileText, title: "No control over proprietary data", desc: "Sending sensitive data to public model APIs raises unresolved security and IP concerns." },
  { icon: Repeat, title: "Inconsistent output quality", desc: "Generic prompting produces inconsistent tone, format, and accuracy across use cases." },
  { icon: Code2, title: "No integration into real workflows", desc: "Generative tools exist in isolation, disconnected from the systems teams use daily." },
  { icon: ShieldCheck, title: "No governance over generated content", desc: "There is no review, audit trail, or approval process for AI-generated business content." },
];

const FRAMEWORK = [
  { step: "01", title: "Define", desc: "We identify the specific content, workflow, or interaction generative AI should improve, and the quality bar it must meet.", image: "/Ai/41.jpg" },
  { step: "02", title: "Ground", desc: "We connect the model to your proprietary data through retrieval and fine-tuning, so outputs reflect your business, not generic internet text.", image: "/Ai/50.jpg" },
  { step: "03", title: "Build", desc: "We engineer the application layer — prompts, guardrails, and interfaces — that turns a raw model into a usable business tool.", image: "/Ai/44.jpg" },
  { step: "04", title: "Evaluate", desc: "Outputs are tested against accuracy, tone, and safety benchmarks before anything reaches an end user or customer.", image: "/Ai/38.jpg" },
  { step: "05", title: "Deploy", desc: "The system goes live with monitoring, feedback loops, and human review points built in from day one.", image: "/Ai/39.jpg" },
];

const DELIVERABLES = [
  { icon: MessageSquare, title: "Custom Conversational Systems", desc: "Chat and assistant interfaces grounded in your proprietary knowledge base." },
  { icon: FileText, title: "Content Generation Pipelines", desc: "Automated drafting workflows for reports, documentation, and communications." },
  { icon: Wand2, title: "Fine-Tuned Models", desc: "Models tuned on your data for domain-specific accuracy and tone." },
  { icon: ImageIcon, title: "Multimodal Applications", desc: "Generative systems spanning text, image, and structured data outputs." },
  { icon: ShieldCheck, title: "Content Governance Layer", desc: "Review workflows and audit trails for every piece of generated output." },
  { icon: BookOpen, title: "Retrieval-Augmented Knowledge Systems", desc: "Generative outputs grounded in verified internal documentation and data." },
];


const FAQS = [
  { q: "How do you prevent hallucination in generated content?", a: "Outputs are grounded through retrieval-augmented generation against your verified data sources, with evaluation benchmarks and human review points built into the workflow before content reaches an end user." },
  { q: "Will our proprietary data be used to train public models?", a: "No. We architect systems so your data stays within your controlled environment, using private fine-tuning or retrieval methods rather than sending proprietary information to public model training pipelines." },
  { q: "Do we need our own data science team to maintain this?", a: "No. We design generative systems to be maintainable by your existing technical staff, with documentation and retraining processes that don't require a dedicated ML research team." },
  { q: "Can generative AI integrate with our existing software?", a: "Yes. We build the API and application layer needed to embed generative capability directly into your existing tools, rather than delivering a disconnected standalone interface." },
  { q: "How is generated content reviewed before publication?", a: "Every deployment includes a configurable review workflow, so generated content can be routed through human approval before it reaches customers, regulators, or the public." },
];

/* ---------------------------------------------------------- */
/* Page                                                         */
/* ---------------------------------------------------------- */

const GenerativeAI = () => {
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
            src="/Ai/35.jpg"
            alt="Generative AI systems"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-24 pt-40">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#93A5FF] mb-6 font-['Montserrat']">
            Generative AI
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="text-white text-4xl md:text-6xl lg:text-7xl font leading-[1.03] max-w-4xl mb-8 tracking-tight"
          >
            Generative models tailored to your data, not the open internet.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            We design and deploy generative AI systems grounded in your
            proprietary content, with the accuracy, tone, and governance
            enterprise use cases require.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Schedule a Use Case Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY GENERATIVE AI — split, floating cards                     */}
      {/* ============================================================ */}
      <section className="py-28 px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Eyebrow>Why Generative AI</Eyebrow>
            <h2 className="text-3xl md:text-5xl font leading-[1.1] mb-8 tracking-tight text-[#0B1120]">
              A model that doesn't know your business isn't a business tool.
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-5">
              <p>
                Public generative models are trained on the open internet,
                not on your product catalog, your compliance requirements,
                or the way your organization actually communicates. Used
                without grounding, they produce content that sounds
                plausible but is disconnected from operational reality.
              </p>
              <p>
                Enterprise-grade generative AI starts with your proprietary
                data — documents, records, product information — and builds
                retrieval and fine-tuning layers around it, so every output
                reflects what your organization actually knows, with
                review and governance built into the workflow.
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
                src="/Ai/31.avif"
                alt="Grounded generative AI"
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
              Strategic Challenges
            </p>
      
            <h2 className="text-5xl md:text-6xl text-white font-light leading-tight max-w-6xl">
              Why AI initiatives
              <br />
              fail before they scale.
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
      {/* GENERATIVE FRAMEWORK — large stacked image cards               */}
      {/* ============================================================ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
      
          {/* Heading */}
          <p className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold mb-5">
            Strategy Framework
          </p>
      
          <h2 className="text-5xl font-light text-slate-900 max-w-4xl mb-20 leading-tight">
            A disciplined path from ambiguity
            <br />
            to execution.
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
          Tangible deliverables your teams can act on.
        </h2>

        <p className="mt-8 text-lg leading-8 text-white/60">
          Every engagement concludes with practical outputs that help
          leadership make confident decisions and accelerate execution.
        </p>
      </div>

      {/* Right Cards */}
      <div className="space-y-8">
        {DELIVERABLES.map((item, index) => (
          <div
            key={item.title}
            className="sticky top-32"
          >
            <motion.div
              initial={{
                opacity: 0,
                x: 150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
            >
              <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10">

                <div className="flex items-center justify-between">
                  <span className="text-7xl font-light text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-white/60">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          </div>
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
          <div className="absolute inset-0 bg-black" />
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-[1000px] mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font leading-[1.05] text-white mb-8 tracking-tight">
            Give your teams a generative system grounded in your own data.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Our generative AI engineers help you build systems that produce
            accurate, on-brand, and governable content at enterprise scale.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
          >
            Schedule a Use Case Review
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default GenerativeAI;