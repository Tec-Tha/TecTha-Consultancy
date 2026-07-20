import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Globe2,
  PiggyBank,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  MapPin,
} from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import ContactCTA from "../components/home/ContactCTA";

/**
 * Careers — Hero · Set the pace · Hiring paths · Programs carousel ·
 * Benefits carousel · Culture · Growth carousel · Open roles · Join us
 *
 * Two distinct carousel treatments, matched to the reference:
 *  - ProgramsCarousel: tall portrait cards, image fills the card, title +
 *    description sit directly on a bottom gradient (no separate bar).
 *  - ImageCarousel: landscape cards, image on top, solid dark caption bar
 *    with a circular arrow button underneath.
 *
 * - Typography: Montserrat throughout (self-loaded via Google Fonts link).
 * - Imagery: local asset paths under /assets/careers/* — no external URLs.
 * - "Explore Careers" opens the visitor's mail client with the address,
 *   subject, and a ready-to-send body pre-filled — see MAILTO_HREF below.
 */

// ---------------------------------------------------------------------------
// Mail CTA
// ---------------------------------------------------------------------------

const CAREERS_EMAIL = "career@tectha.com";
const CAREERS_SUBJECT = "Application for Career Opportunities";
const CAREERS_BODY = [
  "Hello Tec Tha Careers Team,",
  "",
  "I'm interested in exploring career opportunities at Tec Tha and would welcome the chance to discuss open roles that match my background.",
  "",
  "I've attached my resume for your review.",
  "",
  "Name:",
  "Location:",
  "LinkedIn / Portfolio:",
  "",
  "Thank you for your time and consideration.",
  "",
  "Best regards,",
].join("\n");

const MAILTO_HREF = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
  CAREERS_SUBJECT
)}&body=${encodeURIComponent(CAREERS_BODY)}`;

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const ASSET_BASE = "/careers";

const HERO = {
  eyebrow: "Careers",
  title: "Work that ships, on teams that stay small.",
  subtitle:
    "Join a global community of innovators, engineers and problem-solvers dedicated to creating transformative technology solutions that empower businesses, inspire communities and shape the future of digital innovation.",
  image: `${ASSET_BASE}/hero.avif`,
};

const SET_THE_PACE = {
  eyebrow: "Join Us",
  title: "Set the pace",
  paragraphs: [
    "At Tec Tha, we believe that the future of technology is built by people with bold ideas, curiosity and a passion for innovation. As a global technology consulting company, we foster a culture of continuous learning, meaningful collaboration and responsible innovation, empowering every individual to solve complex challenges, embrace emerging technologies and create lasting impact across industries and communities worldwide. Here, careers are shaped through opportunity, leadership and shared success—enabling our people to grow with purpose while building a smarter, more connected future.",
    "Here, people pick up hard problems early, learn in public, and build a track record that travels — inside Tec Tha and beyond it.",
  ],
  image: `${ASSET_BASE}/set.avif`,
};

const HIRING_PATHS = [
  {
    title: "Entry Level & Internships",
    description: "Start your career journey with real client work from week one.",
    cta: "Explore",
    anchor: "#open-roles",
  },
  {
    title: "Experienced Hires",
    description: "Explore challenging, senior-scope opportunities across our hubs.",
    cta: "Explore",
    anchor: "#open-roles",
  },
];

// Portrait, gradient-overlay cards — title + short description on the image.
const PROGRAMS_CAROUSEL = [
  {
    title: "Tec Tha Rebegin",
    description: "A program that helps professionals restart their careers after a break.",
    image: `${ASSET_BASE}/rebegin.avif`,
  },
  {
    title: "Tec Tha Bridge",
    description: "Structured ramp-up for career switchers moving into tech roles.",
    image: `${ASSET_BASE}/bridge.avif`,
  },
  {
    title: "Tec Tha Sprint",
    description: "An accelerated track for high performers ready for bigger scope.",
    image: `${ASSET_BASE}/sprint.avif`,
  },
  {
    title: "Tec Tha Youth",
    description: "Campus partnerships and early-career mentorship across our hubs.",
    image: `${ASSET_BASE}/youth.avif`,
  },
];

const BENEFITS = [
  {
    icon: PiggyBank,
    title: "Equity from day one",
    description: "Every full-time hire receives equity, not just leadership.",
  },
  {
    icon: Heart,
    title: "Full health coverage",
    description: "Medical, dental, and vision covered in full for you and dependents.",
  },
  {
    icon: GraduationCap,
    title: "Learning budget",
    description: "$3,000 a year for courses, conferences, or certifications, no approval chain.",
  },
  {
    icon: Globe2,
    title: "Work from any hub",
    description: "Rotate between our six delivery hubs, or work remote within your region.",
  },
];

const CULTURE = {
  eyebrow: "Our Culture",
  title: "Cultivating collaboration beyond work",
  description:
    "Our connection with our people goes beyond the workplace — we build a culture where people show up as themselves, celebrate wins together, and look out for each other.",
  cta: "Get a glimpse",
  image: `${ASSET_BASE}/culture1.avif`,
};

// Landscape cards with a solid caption bar + arrow button underneath.
const GROWTH_CAROUSEL = [
  { title: "Learn to grow", image: `${ASSET_BASE}/learn.avif` },
  { title: "Community", image: `${ASSET_BASE}/community.avif` },
  { title: "Health and well-being", image: `${ASSET_BASE}/health.avif` },
  { title: "Innovation Culture", image: `${ASSET_BASE}/innovation.avif` }

  
];

const DEPARTMENTS = ["All", "Engineering", "Data", "Design", "Operations"];

const OPEN_ROLES = [
  { title: "Senior Software Engineer", department: "Engineering", type: "Full-time" },
  { title: "Data Analyst", department: "Data", location: "Singapore", type: "Full-time" },
  { title: "Cloud Security Architect", department: "Engineering", location: "Remote — Americas", type: "Full-time" },
  { title: "Product Manager", department: "Management", location: "London", type: "Full-time" },
  { title: "Business Developer", department: "Consultant", location: "Bengaluru", type: "Full-time" },
  { title: "AI Engineer", department: "Artifical Intelligence", location: "Remote — Global", type: "Contract" },
];

const JOIN_US_BAND = {
  title: "Join us",
  description: "Explore career opportunities at Tec Tha.",
  cta: "See open roles",
  partnerLinks: [
    { label: "Employee referral", anchor: "#open-roles" },
    { label: "Alumni network", anchor: "#open-roles" },
    { label: "Verify an offer", anchor: "#open-roles" },
  ],
};

// ---------------------------------------------------------------------------
// Font loader — injects Montserrat once, since this component can't touch
// the document <head> from a bundler config directly.
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
// Motion helpers
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Shared carousel arrow controls (theme-aware: light section vs dark section)
// ---------------------------------------------------------------------------

const CarouselControls = ({ onLeft, onRight, dark = false }) => (
  <div className="mb-8 flex items-center justify-end gap-3">
    <button
      type="button"
      onClick={onLeft}
      aria-label="Scroll left"
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 ${
        dark
          ? "border-white/25 text-white/60 hover:border-white hover:text-white"
          : "border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-text-primary)]"
      }`}
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
    <button
      type="button"
      onClick={onRight}
      aria-label="Scroll right"
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 ${
        dark
          ? "border-white/25 text-white hover:border-white"
          : "border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-text-primary)]"
      }`}
    >
      <ArrowRight className="h-4 w-4" />
    </button>
  </div>
);

// ---------------------------------------------------------------------------
// Programs carousel — tall portrait cards, image fills the card, title +
// description sit on a bottom gradient directly over the photo.
// ---------------------------------------------------------------------------

const ProgramsCarousel = ({ items, dark = false }) => {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: node.clientWidth * 0.6 * direction, behavior: "smooth" });
  };

  return (
    <div>
      <CarouselControls onLeft={() => scrollByAmount(-1)} onRight={() => scrollByAmount(1)} dark={dark} />

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="relative h-[34rem] w-72 flex-shrink-0 snap-start overflow-hidden md:w-100"
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/75">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Image carousel — image on top, solid caption bar with arrow button below.
// ---------------------------------------------------------------------------

const ImageCarousel = ({ items, cardWidthClass = "w-80", dark = false }) => {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: node.clientWidth * 0.8 * direction, behavior: "smooth" });
  };

  return (
    <div>
      <CarouselControls onLeft={() => scrollByAmount(-1)} onRight={() => scrollByAmount(1)} dark={dark} />

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div key={item.title} className={`flex-shrink-0 snap-start ${cardWidthClass}`}>
            <div className="overflow-hidden">
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover" loading="lazy" />
            </div>
            <div className="flex items-center justify-between bg-[#2b2f36] px-6 py-5">
              <span className="text-base font-medium tracking-tight text-white">{item.title}</span>
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-600)]">
                <ArrowRight className="h-4 w-4 text-white" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Benefit carousel — icon-topped cards, uppercase title, short description.
// ---------------------------------------------------------------------------

const BenefitCarousel = ({ items }) => {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: node.clientWidth * 0.8 * direction, behavior: "smooth" });
  };

  return (
    <div>
      <CarouselControls onLeft={() => scrollByAmount(-1)} onRight={() => scrollByAmount(1)} />

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="w-72 flex-shrink-0 snap-start bg-[color:var(--color-bg-secondary)] p-8"
            >
              <Icon
                className="h-9 w-9 text-[color:var(--color-brand-600)]"
                strokeWidth={1.5}
              />
              <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-[color:var(--color-text-primary)]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const Careers = () => {
  useMontserrat();

  const [activeDept, setActiveDept] = useState("All");

  const filteredRoles = useMemo(
    () =>
      activeDept === "All"
        ? OPEN_ROLES
        : OPEN_ROLES.filter((role) => role.department === activeDept),
    [activeDept]
  );

  return (
    <PageWrapper
      title="Careers"
      description="Open roles, benefits, and culture at Tec Tha's enterprise technology consulting practice."
    >
      <div style={{ fontFamily: "Montserrat" }}>
        {/* Hero */}
        <section className="relative flex min-h-[100vh] items-center overflow-hidden py-24">
          <img src={HERO.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/60" />

          <div className="relative mx-auto max-w-4xl px-6">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
            >
              {HERO.eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.08}
              className="mt-8 max-w-2xl text-[clamp(2.5rem,5vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-white"
            >
              {HERO.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.16}
              className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80"
            >
              {HERO.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.24}
              className="mt-10"
            >
              
            </motion.div>
          </div>
        </section>

        {/* Set the pace */}
        <section className="py-22 md:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
                {SET_THE_PACE.eyebrow}
              </span>
              <h2 className="mt-5 text-5xl font-medium tracking-tight text-black md:text-6xl">
                {SET_THE_PACE.title}
              </h2>
              <div className="mt-7 space-y-5">
                {SET_THE_PACE.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base font-medium leading-relaxed text-black/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.1}
            >
              <img src={SET_THE_PACE.image} alt="" className="h-96 w-full object-cover md:h-[28rem]" />
            </motion.div>
          </div>
        </section>

        {/* Entry level & lateral hiring split */}
        <section className="bg-black py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 divide-y divide-white/15 px-6 md:grid-cols-2 md:gap-0 md:divide-x md:divide-y-0">
            {HIRING_PATHS.map((path, i) => (
              <motion.div
                key={path.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i * 0.08}
                className={`pt-10 first:pt-0 md:pt-0 ${i === 1 ? "md:pl-14" : "md:pr-14"}`}
              >
                <h3 className="text-2xl font-normal  tracking-tight text-white md:text-4xl">
                  {path.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/70">
                  {path.description}
                </p>
                <a
                  href={path.anchor}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  {path.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Programs carousel — "How we shape the future" style */}
        <section className="py-14 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader overline="Growth Programs" title="How we shape the future" align="left" />
            <div className="mt-12">
              <ProgramsCarousel items={PROGRAMS_CAROUSEL} />
            </div>
          </div>
        </section>

        {/* Benefits carousel */}
        <section className="py-2 md:py-2">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader overline="Benefits" title="Unparalleled workplace benefits" align="left" />
            <div className="mt-12">
              <BenefitCarousel items={BENEFITS} />
            </div>
          </div>
        </section>

        {/* Culture callout */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative">
              <img src={CULTURE.image} alt="" className="h-[28rem] w-full object-cover md:h-[34rem]" />

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0.1}
                className="absolute right-0 top-1/2 w-[90%] max-w-md -translate-y-1/2 bg-[color:var(--color-bg-card)] p-10"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-text-muted)]">
                  {CULTURE.eyebrow}
                </span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-[color:var(--color-text-primary)]">
                  {CULTURE.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--color-text-secondary)]">
                  {CULTURE.description}
                </p>
                <button
                  type="button"
                  className="mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-text-primary)]"
                >
                  {CULTURE.cta}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-text-primary)] text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Growth carousel — "Your path to a better future" style */}
        <section className="bg-black py-24 md:py-10">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
              Your path to a better future
            </h2>
            <div className="mt-12">
              <ImageCarousel items={GROWTH_CAROUSEL} cardWidthClass="w-80" dark />
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section id="open-roles" className="py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader overline="Open Roles" title="Current openings" align="left" />

            <div className="mt-12 flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    activeDept === dept
                      ? "border-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white"
                      : "border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[color:var(--color-brand-500)]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="mt-8 divide-y divide-[color:var(--color-border)] rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)]">
              {filteredRoles.map((role) => (
                <a
                  key={role.title}
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
                    `Application: ${role.title}`
                  )}`}
                  className="group flex flex-col gap-3 p-6 transition-colors duration-200 hover:bg-[color:var(--color-bg-secondary)] sm:flex-row sm:items-center sm:justify-between sm:p-7"
                >
                  <div>
                    <p className="text-lg font-semibold text-[color:var(--color-text-primary)]">
                      {role.title}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[color:var(--color-text-muted)]">
                      <span>{role.department}</span>
                     
                      
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-primary)]">
                    Apply
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}

              {filteredRoles.length === 0 && (
                <p className="p-8 text-center text-sm text-[color:var(--color-text-muted)]">
                  No open roles in this department right now.
                </p>
              )}
            </div>

            <p className="mt-6 text-sm text-[color:var(--color-text-muted)]">
              Don't see the right fit?{" "}
              <a
                href={`mailto:${CAREERS_EMAIL}?subject=General%20Interest`}
                className="font-medium text-[color:var(--color-brand-600)] underline underline-offset-4"
              >
                Reach out anyway
              </a>
              .
            </p>
          </div>
        </section>

  <section className="bg-[#1f2322] py-24 md:py-32">
  <div className="mx-auto max-w-5xl px-6 text-center">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={0}
    >
      <h2 className="text-5xl font-light tracking-tight text-white md:text-7xl">
        With you for the long run
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
        Whether you are a client, partner, investor, or future team member,
        our commitment is to build lasting relationships through trust,
        innovation, and meaningful collaboration. Let's create the future
        together.
      </p>

      <a
        href="mailto:career@tectha.com?subject=Career%20Application&body=Dear%20Tec%20Tha%20Recruitment%20Team,%0A%0APlease%20find%20my%20resume%20attached%20for%20your%20review.%0A%0AThank%20you."
        className="mt-12 inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-4 text-base font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
      >
        Contact Us
      </a>
    </motion.div>
  </div>
</section>
              
      </div>
    </PageWrapper>
  );
};

export default Careers;