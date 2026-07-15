import {motion,useScroll,useSpring,} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";

const SERVICES = [
  {
    id: "enterprise-software",
    link: "/services/EnterpriseSoftware",
    image: "/enterprise-software.jpg",
    title: "Enterprise Software",
    short: "Custom enterprise applications built for scale and security.",
    tags: ["ERP", "CRM", "Automation", "SaaS"],
  },
  {
    id: "ai-integration",
    link: "/services/AIIntegration",
    image: "/AI Integration & Agentics.jpg",
    title: "AI Integration & Agentics",
    short: "Enterprise AI solutions that automate complex business workflows.",
    tags: ["LLM", "AI Agents", "Automation"],
  },
  {
    id: "cloud-infrastructure",
    link: "/services/CloudInfrastructure",
    image: "/cloud & Infrastructure.jpg",
    title: "Cloud & Infrastructure",
    short: "Modern cloud infrastructure with secure deployment pipelines.",
    tags: ["AWS", "GCP", "Kubernetes", "DevOps"],
  },
  {
    id: "uiux-design",
    link: "/services/UIUXDesign",
    image: "/UI UX.webp",
    title: "UI/UX & Product Design",
    short: "Human-centered product experiences for web and mobile.",
    tags: ["UX", "UI", "Research", "Prototype"],
  },
  {
    id: "brand-demand",
    link: "/services/BrandDemand",
    image: "/Brand & Demand Strategy.webp",
    title: "Brand & Demand Strategy",
    short: "Data-driven marketing strategies that generate measurable growth.",
    tags: ["Brand", "Marketing", "Leads", "Analytics"],
  },
  {
    id: "digital-advisory",
    link: "/services/DigitalAdvisory",
    image: "/Digital Advisory.webp",
    title: "Digital Advisory",
    short: "Strategic consulting for scalable digital transformation.",
    tags: ["Consulting", "Cloud", "Security", "Strategy"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand your business goals, challenges, and technical requirements before planning the solution.",
    deliverables: [
      "Business Analysis",
       "Stakeholder Workshop",
       "System Audit",
    ],
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Design a scalable, secure architecture with the right technology stack and implementation roadmap.",
    deliverables: [
      "Solution Architecture",
      "Tech Stack",
      "Roadmap",
    ],
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop high-quality software using agile practices, automation, and continuous testing.",
    deliverables: [
      "Development",
      "QA Testing",
      "CI/CD Pipeline",
    ],
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Deploy confidently with monitoring, support, and continuous improvements for long-term growth.",
    deliverables: [
      "Deployment",
      "Monitoring",
      "Support",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Services = () => {
  const timelineRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start center", "end end"],
});
const scaleY = useSpring(scrollYProgress, {
  stiffness: 120,
  damping: 25,
});
  return (
    <PageWrapper
      title="Services"
      description="Cloud, data, AI, security, platform engineering, and digital strategy consulting."
    >
      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.08}
            className="mt-1 text-[clamp(2.25rem,4.5vw,3.75rem)] font leading-[1.05] tracking-tight text-[color:var(--color-text-primary)]"
          >
            Bespoke Enterprise Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.16}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-text-secondary)]"
          >
            We design, develop, deploy, and verify complex technical systems for global operations.
          </motion.p>
        </div>
      </section>

      {/* Services card grid */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="group/cards flex gap-7 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                className="min-w-[320px] flex-shrink-0 snap-start sm:min-w-[380px] lg:min-w-[32%]"
              >
                <Link
                  to={service.link}
                  className="group relative block h-[650px] w-full overflow-hidden rounded-3xl transition-[transform,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform group-hover/cards:scale-90 hover:!scale-105 hover:z-20"
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover brightness-50 transition-all duration-700 group-hover:brightness-100 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60 transition-all duration-700 group-hover:from-black/60 group-hover:via-black/35 group-hover:to-transparent" />

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/95 to-transparent px-8 pt-24 pb-8 text-white">
                    <h3 className="text-4xl font tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-md text-white/80">
                      {service.short}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-2 font-semibold">
                      Explore Service
                      <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Process */}
<section ref={timelineRef} className="py-24">
  <div className="mx-auto max-w-5xl px-6">

    <SectionHeader
      overline="Our Process"
      title="How We Work"
      subtitle="Simple. Transparent. Efficient."
      align="center"
    />

    <div className="relative mt-20">

      {/* Background Line */}
      <div className="absolute left-6 top-0 h-full w-[2px] bg-zinc-800" />

      {/* Animated Line */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-6 top-0 h-full w-[2px] origin-top bg-[color:var(--color-brand-500)]"
      />

      <div className="space-y-16">

        {PROCESS.map((phase, i) => (
          <motion.div
            key={phase.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex gap-8"
          >

            {/* Circle */}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-500)] text-white font-bold">
              {phase.step}
            </div>

            {/* Content */}
            <div className="pb-6">
              <h3 className="text-2xl font text-[color:var(--color-text-primary)]">
                {phase.title}
              </h3>

              <p className="mt-3 max-w-xl text-[color:var(--color-text-secondary)]">
                {phase.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {phase.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-sm text-[color:var(--color-text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  </div>
</section>

      <ContactCTA />
    </PageWrapper>
  );
};

export default Services;
