import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";

const EVENTS = [
  {
    id: "applied-workshops",
    link: "/insights/applied-skills-workshops",
    image: "/insights/featured.avif",
    title: "TEC THA GLOBAL TECHNOLOGY SUMMIT 2026",
    short: "Hosted in Singapore, the Tec Tha Global Technology Summit 2026 brought together enterprise executives, digital transformation leaders, technology architects and innovation pioneers from across our international network. The summit served as a platform to exchange ideas on Artificial Intelligence, Cloud Computing, Enterprise Platforms and next-generation digital infrastructure while encouraging strategic collaboration between organizations shaping the future of technology. Through executive keynotes, technology showcases and leadership discussions, participants explored emerging trends and built partnerships that continue to drive innovation beyond geographical boundaries.",
    tags: ["Global Executive Keynotes", "Leadership Roundtables", "Enterprise Networking Lounge", "Technology Innovation Showcase"],
  },
  {
    id: "build-sprints",
    link: "/insights/build-sprints",
    image: "/insights/4.avif",
    title: "ENTERPRISE DIGITAL LEADERSHIP FORUM   ",
    short: "Held in the United States, the Enterprise Digital Leadership Forum welcomed senior business leaders, technology strategists and enterprise decision-makers to explore the future of intelligent organizations. The event focused on enterprise modernization, cloud transformation, AI-powered business operations and digital resilience, creating meaningful conversations around how organizations can adapt to rapidly evolving technologies while maintaining sustainable long-term growth across global markets.",
    tags: ["GLOBAL SUMMIT", "EXECUTIVE LEADERSHIP", "ARTIFICIAL INTELLIGENCE", "SINGAPORE"],
  },
  {
    id: "career-launch",
    link: "/insights/career-launch-bootcamp",
    image: "/insights/2.avif",
    title: "WORLD AI & INNOVATION CONFERENCE",
    short: "Organized in Germany, the World AI & Innovation Conference brought together researchers, AI specialists, enterprise innovators and technology partners to discuss the next generation of intelligent systems. From responsible artificial intelligence and machine learning to enterprise automation and digital engineering, the conference encouraged knowledge sharing and collaborative innovation while highlighting practical applications transforming industries across the world.",
    tags: ["DIGITAL TRANSFORMATION", "INNOVATION", "ENTERPRISE STRATEGY", "Career"],
  },
  {
    id: "industry-seminars",
    link: "/insights/industry-seminars",
    image: "/insights/6.avif",
    title: "INTERNATIONAL TECHNOLOGY PARTNERSHIP FORUM",
    short: "Hosted in France, the Global Partnership & Innovation Expo united enterprise organizations, strategic partners, technology providers and innovation leaders to strengthen international collaboration. The event showcased emerging digital solutions, collaborative business initiatives and future-focused technologies while creating opportunities for organizations to establish long-term partnerships capable of accelerating innovation across multiple industries.",
    tags: ["AI in Production", "System Design", "Practitioners"],
  },
  {
    id: "campus-outreach",
    link: "/insights/campus-outreach",
    image: "/insights/5.avif",
    title: "SMART INDUSTRY & SUSTAINABILITY FORUM",
    short: "Conducted in Japan, the Smart Industry & Sustainability Forum explored how intelligent technologies are enabling organizations to build more resilient, efficient and environmentally responsible industrial ecosystems. Industry experts, engineering leaders and innovation specialists shared transformative ideas surrounding automation, advanced manufacturing and sustainable digital operations, reinforcing the role of technology in creating long-term global impact.",
    tags: ["INDUSTRY 4.0", "SUSTAINABILITY", "SMART MANUFACTURING"],
  },
 
];


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

const Insights = () => {
  const timelineRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const featured = EVENTS[0];
  const rest = EVENTS.slice(1);

  return (
    <PageWrapper
      title="Insights"
      description="Workshops, hackathons, bootcamps, seminars and campus outreach programs from Tec Tha."
    >
      {/* ===================== 1. FULLSCREEN HERO ===================== */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-black">
        <motion.div
          style={{ y: heroImgY }}
          className="absolute inset-0 h-[140%] w-full"
        >
          <img
            src="/insights/7.avif"
            alt="Tec Tha programs"
            className="h-full w-full object-cover opacity-100"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:px-10"
        >
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="mb-6 inline-flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
          >
            <span className="h-px w-10 bg-white/50" />
            Insights &amp; Programs
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.22}
            className="max-w-4xl text-[clamp(2.75rem,7vw,4.6rem)] font-normal leading-[1.02] tracking-tight text-white"
          >
           INSIGHTS THAT INSPIRE GLOBAL PROGRESS
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.36}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/70"
          >
            From international technology summits to strategic innovation forums, discover how Tec Tha is shaping meaningful conversations and impactful collaborations across the world.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.6}
          className="absolute bottom-8 right-6 z-10 hidden text-xs uppercase tracking-[0.3em] text-white/40 md:right-10 md:block"
        >
          Scroll to explore
        </motion.div>
      </section>

      {/* ===================== 2. ABOUT INSIGHTS ===================== */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[380px] overflow-hidden rounded-2xl md:h-[520px]"
          >
            <img
              src="/insights/student.avif"
              alt="Our thought leadership"
              className="h-full w-full object-cover grayscale transition-all duration-[900ms] hover:grayscale-0"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.05}
              className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-black/40"
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.12}
              className="text-[clamp(2rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-tight text-black"
            >
              A studio for building
              <br />
              hire-ready engineers.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              className="mt-8 max-w-lg text-lg leading-relaxed text-black/55"
            >
              Through workshops, sprints and standing campus partnerships,
              we deliver forward-looking, hands-on programs at the
              intersection of industry practice and academic learning.
              Every session is built alongside working engineers and
              hiring partners, so what happens in the room mirrors what
              happens on the job.
            </motion.p>

       
          </div>
        </div>
      </section>

      {/* ===================== 3. FEATURED PROGRAM (black) ===================== */}
      <section className="bg-black py-16 md:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.05}
              className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-white/50"
            >
              <span className="h-px w-10 bg-white/40" />
              Featured Program
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.12}
              className="text-[clamp(2.25rem,4.2vw,3.75rem)] font-normal leading-[1.04] tracking-tight text-white"
            >
              {featured.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              className="mt-10 max-w-md text-lg leading-relaxed text-white/60"
            >
              {featured.short}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.26}
              className="mt-8 flex flex-wrap gap-2"
            >
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wide text-white/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.32}
            >
            
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[380px] overflow-hidden rounded-2xl md:h-[520px]"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </section>

      {/* ===================== 4. ALTERNATING SHOWCASE ===================== */}
      <section className="bg-white">
        {rest.map((event, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={event.id}
              className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 border-t border-black/[0.06] px-6 py-28 md:grid-cols-2 md:gap-20 md:px-2 md:py-18"
            >
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`relative h-[340px] overflow-hidden rounded-xl md:h-[560px] ${
                  imageLeft ? "md:order-1" : "md:order-2"
                }`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover  transition-all duration-[1200ms] "
                />
              </motion.div>

              <div className={imageLeft ? "md:order-2" : "md:order-1"}>
               

                <motion.h3
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={0.12}
                  className="text-[clamp(1.8rem,3vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-black"
                >
                  {event.title}
                </motion.h3>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={0.18}
                  className="mt-6 max-w-md text-base leading-relaxed text-black/65"
                >
                  {event.short}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={0.24}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/100"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={0.3}
                >
                 
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

   

      <ContactCTA />
    </PageWrapper>
  );
};

export default Insights;
