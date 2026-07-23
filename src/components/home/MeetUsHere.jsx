import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_ADVANCE_MS = 5000;

const COUNTRIES = [
   {
    code: "SG",
    name: "Singapore",
    flag: "/meetushere/sg.svg",
    image: "/meetushere/8.avif",
    heading: "Engineering Innovation for Asia-Pacific.",
    paragraph:
      "Leveraging Singapore's world-class technology ecosystem, Tec Tha partners with organizations to deliver intelligent digital solutions that accelerate innovation, strengthen resilience, and create sustainable business growth across the Asia-Pacific region.",
    chips: ["Artificial Intelligence", "Cloud Platforms", "Enterprise Software", "Cybersecurity"],
  },
  {
  code: "EU",
  name: "Europe",
  flag: "/meetushere/eu.svg",
  image: "/meetushere/9.avif",
  heading: "Engineering the Future of European Enterprise",
  paragraph:
    "Tec Tha partners with organizations across Europe to deliver AI, cloud, cybersecurity, and enterprise technologies that strengthen resilience, accelerate innovation, and create sustainable business growth.",
  chips: [
    "Artificial Intelligence",
    "Cloud Platforms",
    "Cybersecurity",
    "Enterprise Software",
  ],
},
 
    {
    code: "AE",
    name: "United Arab Emirates",
    flag: "/meetushere/uae.svg",
    image: "/meetushere/2.avif",
    heading: "Accelerating Digital Innovation Across the UAE",
    paragraph:
      "Helping businesses and public sector organizations adopt AI, cloud, enterprise applications, and digital engineering solutions to innovate, grow, and deliver measurable impact.",
    chips: ["AI & Data Analytics", "Cloud Solutions", "Digital Engineering", "Technology Consulting"],
  },
   {
    code: "DE",
    name: "Germany",
    flag: "/meetushere/germany.svg",
    image: "/meetushere/1.avif",
    heading: "Engineering digital transformation across Germany",
    paragraph:
      "Tec Tha partners with Germany's industrial and enterprise leaders to modernize core systems, embed AI into critical operations, and build cloud and cybersecurity foundations engineered for precision and scale.",
    chips: ["AI & Automation", "Cloud Engineering", "Cybersecurity", "Enterprise Software"],
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "/meetushere/uk.svg",
    image: "/meetushere/4.avif",
    heading: "Driving Digital Transformation Across the United Kingdom",
    paragraph:
      "We partner with enterprises, public sector organizations, and high-growth businesses across the United Kingdom to accelerate digital transformation through AI, cloud modernization, cybersecurity, and enterprise engineering—delivering secure, scalable, and future-ready solutions.",
    chips: ["Cloud Modernization", "Enterprise Engineering", "Cybersecurity", "AI Solutions"],
  },
    {
    code: "AU",
    name: "Australia",
    flag: "/meetushere/au.svg",
    image: "/meetushere/7.avif",
    heading: "Empowering Australian Enterprises Through Intelligent Technology",
    paragraph:
      "Tec Tha works with Australian enterprises and institutions to modernize infrastructure, apply AI at scale, and strengthen cybersecurity posture, underpinning digital transformation built to last.",
    chips: ["Cloud & AI Solutions", "Enterprise Software", "Cybersecurity", "DATA INTELLIGENCE"],
  },
  {
    code: "US",
    name: "United States",
    flag: "/meetushere/us.svg",
    image: "/meetushere/5.avif",
    heading: "Accelerating enterprise transformation across the \nUnited States",
    paragraph:
      "Tec Tha equips enterprises across the United States with enterprise-grade AI, resilient cloud infrastructure, and advanced cybersecurity, engineered to support digital transformation at national scale.",
    chips: ["Enterprise AI", "Cloud Infrastructure", "Cybersecurity", "Digital Engineering"],
  },

  {
    code: "DE",
    name: "france",
    flag: "/meetushere/fr.svg",
    image: "/meetushere/6.avif",
    heading: "Engineering digital transformation across France",
    paragraph:
      "Tec Tha partners with France's industrial and enterprise leaders to modernize core systems, embed AI into critical operations, and build cloud and cybersecurity foundations engineered for precision and scale.",
    chips: ["AI & Automation", "Cloud Engineering", "Cybersecurity", "Enterprise Software"],
  },
 

];

const total = COUNTRIES.length;

export default function MeetUsHere() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((next) => {
    setDirection(next > index || (index === total - 1 && next === 0) ? 1 : -1);
    setIndex(((next % total) + total) % total);
  }, [index]);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, index]);

  const country = COUNTRIES[index];

  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 24 : -24 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, scale: 0.98, x: dir > 0 ? -24 : 24 }),
  };

  return (
    <section
      className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#040404] text-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
      `}</style>

      {/* ambient texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(255,255,255,0.07), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-4 pt-10 pb-8 sm:px-6 sm:pt-14 sm:pb-10 md:pt-20 md:pb-16 lg:px-16">
        {/* Page header */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 md:mb-14 lg:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />
            <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/45">
              Global Presence
            </span>
            <span className="h-px w-8 bg-white/40" />
          </div>
          <h2 className="text-[10vw] font-medium leading-[0.95] tracking-tight sm:text-[7vw] lg:text-[3.6rem]">
           Trusted Across Global Markets
          </h2>
          <p className="mt-6 max-w-lg text-sm font-light leading-relaxed tracking-wide text-white/50 sm:text-base">
           
            Tec Tha partners with organizations worldwide to deliver enterprise AI, cloud transformation, cybersecurity, and digital engineering solutions that accelerate innovation, strengthen security, and drive sustainable business growth.
          </p>
        </div>

        {/* Card */}
        <div
          className="relative mx-auto w-full max-w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full max-w-full overflow-hidden rounded-[6px] border border-white/12 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.9)] md:h-[500px] lg:h-[660px]">
            {/* Prev / Next arrows — centered on the image panel on mobile, on the full card from md up (matches original desktop behavior) */}
            <button
              aria-label="Previous country"
              onClick={prev}
              className="absolute left-4 top-[110px] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md transition-colors duration-300 hover:border-white/70 hover:bg-black/70 sm:left-6 sm:top-[130px] sm:h-12 sm:w-12 md:top-1/2"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Next country"
              onClick={next}
              className="absolute right-4 top-[110px] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md transition-colors duration-300 hover:border-white/70 hover:bg-black/70 sm:right-6 sm:top-[130px] sm:h-12 sm:w-12 md:top-1/2"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={country.code}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:absolute md:inset-0"
              >
                {/* Image panel — fixed compact height + normal flow on mobile so it never overlaps the text below it; becomes the original full-bleed absolute background from md up */}
                <div className="relative h-[220px] w-full sm:h-[260px] md:absolute md:inset-0 md:h-full">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: "grayscale(0.35) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/10" />

                  {/* top row: flag + name / counter */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4 sm:p-5 md:p-9">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="h-7 w-7 shrink-0 overflow-hidden rounded-[6px] border border-white/40 bg-white/5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.8)] sm:h-8 sm:w-8 md:h-9 md:w-9">
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="truncate text-xs font-semibold uppercase tracking-[0.2em] text-white/75 md:tracking-[0.35em] md:text-sm">
                        {country.name}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-xs tracking-[0.2em] text-white/45 md:text-sm">
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* bottom text block — reflows below the image on mobile with its own background; becomes the original absolute overlay from md up */}
                <div className="relative bg-[#040404] p-4 sm:p-5 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:p-7 lg:p-12">
            <h3
  className="
    max-w-5xl
    text-xl
    sm:text-2xl
    md:text-3xl
    lg:text-[2.5rem]
    font-normal
    tracking-[-0.04em]
    leading-[0.88]
  "
>
  {country.heading}
</h3>
                  <p className="mt-3 max-w-xl text-xs font-light leading-relaxed text-white/70 sm:mt-4 sm:text-sm md:text-base">
                    {country.paragraph}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5 md:mt-6">
                    {country.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-xl border border-white/25 bg-white/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/80 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[11px] md:text-xs"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex items-center justify-center gap-2.5 sm:mt-7 md:mt-9">
          {COUNTRIES.map((c, i) => (
            <button
              key={c.code}
              aria-label={`Go to ${c.name}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === index ? "w-7 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}