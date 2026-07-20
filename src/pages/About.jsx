import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Cpu,
  Globe2,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";

gsap.registerPlugin(ScrollTrigger);

/**
 * About — a monochrome editorial rebuild.
 *
 * Design system (kept deliberately small and repeated everywhere):
 *  - Ink #0B0B0C / Paper #FAFAF9 / Graphite #6B6B6E / Chalk #C9C9C7
 *  - One signature accent — Cobalt #2451FF — spent in exactly one place:
 *    the vertical thread that draws itself through the journey section.
 *    Nothing else on the page carries color.
 *  - Montserrat throughout: light/regular for editorial body copy,
 *    medium/semibold for headings, semibold uppercase + wide tracking
 *    for eyebrows and captions.
 *  - No small square cards. Rows, alternating image/text blocks, and
 *    hairline dividers carry the structure instead.
 *
 * Imagery is local asset paths under /assets/about/* — drop real
 * photography there. Nothing in this file calls out to a live URL.
 */

const INK = "#0B0B0C";
const COBALT = "#2451FF";
const ASSET_BASE = "/about";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const HERO = {
  
  eyebrow: "Who We Are",
  title: "Two decades of turning strategy into things that actually ship.",
  subtitle:
    "Tec Tha is an enterprise technology consulting practice built by engineers who stayed past the handover.",
  image: `${ASSET_BASE}/1.avif`,
};

const STORY = {
  eyebrow: "Our Story",
  title: "Started by engineers tired of watching good strategy die in implementation.",
  paragraphs: [
   "Tec Tha exists to accelerate the digital future of businesses across industries. We help organizations that have not yet embraced digital transformation confidently adopt modern technologies, enabling them to compete, innovate, and thrive in an increasingly connected world.",

  "For enterprises already operating in the digital landscape, we provide strategic technology consulting, AI-driven innovation, cloud modernization, cybersecurity, automation, and scalable engineering solutions that strengthen performance, improve customer experiences, and drive continuous business growth.",

  "Everything we build is guided by long-term partnerships rather than short-term gains. Our success is measured by the value we create for our clients, helping businesses evolve with confidence, embrace innovation responsibly, and build sustainable growth that lasts for generations."
  ],
  image: `${ASSET_BASE}/3.avif`,
};

const IMPACT_STATS = [
  { value: 11, suffix: "+", label: "Countries" },
  { value: 480, suffix: "+", label: "Enterprise Clients" },
  { value: 2100, suffix: "+", label: "Projects Delivered" },
  { value: 65000, suffix: "+", label: "Enterprise Deliveries" },
 
];

const WHO_WE_ARE = {
  eyebrow: "Who We Are",
  title: "A practice built around one unit of work: a small team that owns the outcome.",
  description:
    "We don't staff engagements with layers. A client works with the same handful of senior people from scoping to production, which means judgment calls get made by whoever has the context to make them — not whoever is next in the review chain.",
  image: `${ASSET_BASE}/4.avif`,
};

const VALUES = [
  {
    icon: Compass,
    title: "Scope for reality",
    description:
      "We recommend what survives your constraints, not what looks best in a proposal.",
  },
  {
    icon: ShieldCheck,
    title: "Own the outcome",
    description:
      "Accountability doesn't end at handover. We stay reachable long after the invoice is paid.",
  },
  {
    icon: HeartHandshake,
    title: "Say the hard thing early",
    description:
      "A difficult truth in week two is cheaper than a surprise in month eight.",
  },
  {
    icon: Sparkles,
    title: "Leave people more capable",
    description:
      "Every engagement should make your internal team more self-sufficient, not less.",
  },
];



const HUBS = [
  { city: "New York", country: "United States", focus: "Financial Services" },
  { city: "London", country: "United Kingdom", focus: "Banking & Insurance" },
  { city: "Bengaluru", country: "India", focus: "Engineering & Delivery" },
  { city: "Singapore", country: "Singapore", focus: "Data & AI" },
  { city: "Dubai", country: "UAE", focus: "Public Sector" },
  { city: "São Paulo", country: "Brazil", focus: "Retail & Consumer" },
];

const CULTURE = {
  eyebrow: "Culture",
  title: "Senior by default, not by exception",
  paragraphs: [
    "We keep teams small and staff them with people who've shipped this kind of system before — not because junior talent isn't capable, but because clients are paying for judgment under ambiguity, and that's earned, not assigned.",
    "That shapes how we hire, how engagements are staffed, and how long people tend to stay.",
  ],
  image: `${ASSET_BASE}/5.avif`,
};

const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "Trust, earned over decades",
    description:
      "Client relationships that span a decade or more aren't the exception here — they're closer to the norm.",
  },
  {
    icon: Sparkles,
    title: "Applied AI expertise",
    description:
      "We scope production AI systems with measurable guardrails, not pilots that never leave the sandbox.",
  },
  {
    icon: Lock,
    title: "Cybersecurity by default",
    description:
      "Security review isn't a gate at the end of a project. It's part of how we design the first architecture diagram.",
  },
  {
    icon: Cpu,
    title: "Engineering excellence",
    description:
      "Every engagement is staffed by people who write and review production code, not just PowerPoint.",
  },
  {
    icon: Globe2,
    title: "Global delivery, local accountability",
    description:
      "Round-the-clock delivery hubs, but one accountable lead per engagement — never a rotating cast.",
  },
];

const FEATURED = {
  eyebrow: "The Next Chapter",
  title: "Built for the next twenty years, not just the last two.",
  description:
    "The technology changes every cycle. What doesn't is the discipline of staying on an engagement long enough to be accountable for what it becomes.",
  cta: "Partner with us",
  image: `${ASSET_BASE}/6.avif`,
};



const CLOSING_CTA = {
  title: "Let's build what's next.",
  description:
    "Tell us what you're trying to ship. We'll tell you honestly whether we're the right team for it.",
  cta: "Start a conversation",
};

// ---------------------------------------------------------------------------
// Font loader — Montserrat, injected once (guarded by id).
// ---------------------------------------------------------------------------

const useMontserrat = () => {
  useEffect(() => {
    const id = "montserrat-font-link";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
};

// ---------------------------------------------------------------------------
// Count-up hook — animates a number from 0 to target the first time its
// element scrolls into view.
// ---------------------------------------------------------------------------

const useCountUp = (target, duration = 1800) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;
        hasStarted = true;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, value];
};

// ---------------------------------------------------------------------------
// Motion helpers
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Small shared primitives
// ---------------------------------------------------------------------------

const Eyebrow = ({ children, dark = false }) => (
  <span
    className={`text-xs font-semibold uppercase tracking-[0.3em] ${
      dark ? "text-white/50" : "text-[#6B6B6E]"
    }`}
  >
    {children}
  </span>
);

const HairlineDivider = ({ dark = false }) => (
  <div className={`h-px w-full ${dark ? "bg-white/10" : "bg-black/10"}`} />
);

const Stat = ({ stat }) => {
  const [ref, value] = useCountUp(stat.value);
  return (
    <div ref={ref} className="flex flex-col gap-2 py-8 md:py-0">
      <span className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {value.toLocaleString()}
        {stat.suffix}
      </span>
      <span className="text-sm font-medium uppercase tracking-[0.15em] text-white/50">
        {stat.label}
      </span>
    </div>
  );
};

const ValueRow = ({ value, index }) => {
  const Icon = value.icon;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index * 0.06}
      className="group grid grid-cols-1 items-center gap-6 border-b border-black/10 py-10 md:grid-cols-[auto_1fr_auto] md:gap-14 md:py-12"
    >
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border border-black/15">
        <Icon className="h-6 w-6 text-black" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-2xl font-medium tracking-tight text-black md:text-3xl">{value.title}</h3>
        <p className="mt-2 max-w-xl text-base font-light leading-relaxed text-[#6B6B6E]">
          {value.description}
        </p>
      </div>
      <ArrowUpRight
        className="hidden h-6 w-6 flex-shrink-0 text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black md:block"
        strokeWidth={1.5}
      />
    </motion.div>
  );
};

const FeatureBlock = ({ feature, index }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index * 0.06}
      className="border-t border-black/10 py-10 first:border-t-0 md:grid md:grid-cols-[minmax(0,240px)_1fr] md:gap-16 md:py-12"
    >
      <div className="flex items-center gap-4 md:block">
        <Icon className="h-7 w-7 text-black" strokeWidth={1.5} />
        <h3 className="text-xl font-medium tracking-tight text-black md:mt-5 md:text-2xl">
          {feature.title}
        </h3>
      </div>
      <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-[#6B6B6E] md:mt-0">
        {feature.description}
      </p>
    </motion.div>
  );
};

const HubRow = ({ hub, index }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    custom={index * 0.05}
    className="group flex items-baseline justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:border-white/40"
  >
    <div className="flex items-baseline gap-6">
      <span className="text-xs font-semibold text-white/30">{String(index + 1).padStart(2, "0")}</span>
      <span className="text-2xl font-medium tracking-tight text-white md:text-3xl">{hub.city}</span>
      <span className="hidden text-sm font-light text-white/40 sm:inline">{hub.country}</span>
    </div>
    <span className="text-sm font-light uppercase tracking-[0.1em] text-white/40">{hub.focus}</span>
  </motion.div>
);

const RecognitionItem = ({ item, index }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    custom={index * 0.05}
    className="border border-black/10 p-8"
  >
    <Eyebrow>{item.category}</Eyebrow>
    <h3 className="mt-4 text-xl font-medium tracking-tight text-black">{item.title}</h3>
    <p className="mt-2 text-sm font-light text-[#6B6B6E]">{item.detail}</p>
  </motion.div>
);

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const About = () => {
  useMontserrat();

  const heroSectionRef = useRef(null);
  const heroImageRef = useRef(null);

  const journeySectionRef = useRef(null);
  const journeyLineRef = useRef(null);

  // Hero parallax — background image drifts slightly slower than scroll.
  useEffect(() => {
    const section = heroSectionRef.current;
    const image = heroImageRef.current;
    if (!section || !image) return undefined;

    const tween = gsap.to(image, {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  // Journey signature thread — draws down the center line as the section
  // scrolls, the one place on the page that carries color and motion.
  useEffect(() => {
    const line = journeyLineRef.current;
    const section = journeySectionRef.current;
    if (!line || !section) return undefined;

    const tween = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 0.5,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <PageWrapper
      title="About"
      description="Story, values, and history behind Tec Tha's enterprise technology consulting practice."
    >
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="bg-[#FAFAF9]">
        {/* 1. Hero */}
        <section
          ref={heroSectionRef}
          className="relative flex h-screen min-h-[640px] items-end overflow-hidden bg-black"
        >
          <img
            ref={heroImageRef}
            src={HERO.image}
            alt=""
            className="absolute inset-0 h-[120%] w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0}
              className="block text-xs font-semibold uppercase tracking-[0.3em] text-white/45"
            >
              {HERO.breadcrumb}
            </motion.span>

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.08}
              className="mt-8 block text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            >
              {HERO.eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.16}
              className="mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-white"
            >
              {HERO.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.26}
              className="mt-7 max-w-xl text-lg font-light leading-relaxed text-white/75"
            >
              {HERO.subtitle}
            </motion.p>
          </div>
        </section>

        {/* 2. Our Story — magazine layout */}
        <section className="py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
              >
                <Eyebrow>{STORY.eyebrow}</Eyebrow>
                <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.15] tracking-tight text-black">
                  {STORY.title}
                </h2>

                <div className="mt-10 space-y-7">
                  {STORY.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg font-light leading-relaxed text-[#6B6B6E]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0.1}
                className="lg:pt-16"
              >
                <img src={STORY.image} alt="" className="h-[32rem] w-full object-cover md:h-[38rem]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Global Impact — animated counters, no cards */}
        <section className="bg-black py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow dark>Global Impact</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight text-white md:text-4xl">
              Numbers that only mean something because they compound.
            </h2>

            <div className="mt-16 grid grid-cols-2 gap-x-8 divide-y divide-white/10 md:grid-cols-5 md:divide-y-0 md:divide-x">
              {IMPACT_STATS.map((stat, i) => (
                <div key={stat.label} className={i > 0 ? "md:pl-8" : ""}>
                  <Stat stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Who We Are — full-width image, aligned text */}
        <section className="py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src={WHO_WE_ARE.image}
                alt=""
                className="h-[26rem] w-full object-cover md:h-[36rem]"
              />
            </motion.div>

            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
              >
                <Eyebrow>{WHO_WE_ARE.eyebrow}</Eyebrow>
                <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-black md:text-4xl">
                  {WHO_WE_ARE.title}
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0.08}
                className="text-lg font-light leading-relaxed text-[#6B6B6E] lg:pt-2"
              >
                {WHO_WE_ARE.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* 5. Core Values — large horizontal rows, not cards */}
        <section className="py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow>Our Core Values</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight text-black md:text-4xl">
              What we hold each other to
            </h2>

            <div className="mt-14 border-t border-black/10">
              {VALUES.map((value, i) => (
                <ValueRow key={value.title} value={value} index={i} />
              ))}
            </div>
          </div>
        </section>

      

        {/* 7. Global Presence */}
        <section className="bg-black py-28 md:py-40">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow dark>Global Presence</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight text-white md:text-4xl">
              Operating across six delivery hubs, on call for every time zone.
            </h2>

            <div className="mt-16">
              {HUBS.map((hub, i) => (
                <HubRow key={hub.city} hub={hub} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* 8. Culture — large image with floating panel */}
        <section className="py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative">
              <motion.img
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                src={CULTURE.image}
                alt=""
                className="h-[30rem] w-full object-cover md:h-[40rem]"
              />

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0.1}
                className="relative mx-4 -mt-20 max-w-lg bg-white p-10 md:absolute md:bottom-12 md:left-12 md:mx-0 md:mt-0 md:p-12"
              >
                <Eyebrow>{CULTURE.eyebrow}</Eyebrow>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-black md:text-3xl">
                  {CULTURE.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {CULTURE.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm font-light leading-relaxed text-[#6B6B6E]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 9. Why Clients Choose Tec Tha */}
        <section className="py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow>Why Clients Choose Tec Tha</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight text-black md:text-4xl">
              The reasons engagements turn into decade-long relationships
            </h2>

            <div className="mt-14">
              {WHY_CHOOSE.map((feature, i) => (
                <FeatureBlock key={feature.title} feature={feature} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* 10. Featured highlight — black campaign section */}
        <section className="relative overflow-hidden bg-black py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
              >
                <Eyebrow dark>{FEATURED.eyebrow}</Eyebrow>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-white">
                  {FEATURED.title}
                </h2>
                <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/70">
                  {FEATURED.description}
                </p>
                <a
                  href="/contact"
                  className="group mt-9 inline-flex items-center gap-2 border border-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  {FEATURED.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0.1}
              >
                <img src={FEATURED.image} alt="" className="h-80 w-full object-cover md:h-[28rem]" />
              </motion.div>
            </div>
          </div>
        </section>

   

        {/* 12. Closing CTA */}
        <section className="border-t border-black/10 py-28 md:py-36">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-black"
            >
              {CLOSING_CTA.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.08}
              className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-[#6B6B6E]"
            >
              {CLOSING_CTA.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.16}
            >
              <a
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-black/85"
              >
                {CLOSING_CTA.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;