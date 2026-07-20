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
    heading: "Enabling next-generation enterprise technology across Singapore",
    paragraph:
      "As a regional technology hub, Singapore is where Tec Tha delivers advanced cloud, AI, and data engineering solutions that help enterprises across Asia-Pacific scale securely and intelligently.",
    chips: ["AI & Cloud", "Data Engineering", "Cybersecurity", "Digital Transformation"],
  },
  {
  code: "EU",
  name: "Europe",
  flag: "/meetushere/eu.svg",
  image: "/meetushere/9.avif",
  heading: "Accelerating digital transformation across Europe",
  paragraph:
    "Tec Tha partners with enterprises across Europe to modernize technology landscapes through AI, cloud engineering, cybersecurity, and enterprise software. We help organizations build secure, resilient, and future-ready digital ecosystems that drive innovation and sustainable growth.",
  chips: [
    "Enterprise AI",
    "Cloud Transformation",
    "Cybersecurity",
    "Digital Engineering",
  ],
},
 
    {
    code: "AE",
    name: "United Arab Emirates",
    flag: "/meetushere/uae.svg",
    image: "/meetushere/2.avif",
    heading: "Advancing enterprise and government innovation across the UAE",
    paragraph:
      "In the UAE, Tec Tha builds intelligent, secure digital infrastructure for enterprises and government institutions, combining AI, cloud, and data engineering to support ambitious national transformation agendas.",
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
    heading: "Powering enterprise innovation across the United Kingdom",
    paragraph:
      "Across the UK, Tec Tha delivers cloud modernization, data-driven intelligence, and technology consulting that help enterprises and public institutions operate with greater agility, security, and resilience.",
    chips: ["Cloud Modernization", "Data & Analytics", "Technology Consulting", "AI Solutions"],
  },
    {
    code: "AU",
    name: "Australia",
    flag: "/meetushere/au.svg",
    image: "/meetushere/7.avif",
    heading: "Delivering scalable enterprise technology across Australia",
    paragraph:
      "Tec Tha works with Australian enterprises and institutions to modernize infrastructure, apply AI at scale, and strengthen cybersecurity posture, underpinning digital transformation built to last.",
    chips: ["Cloud & AI Solutions", "Enterprise Software", "Cybersecurity", "Data Analytics"],
  },
  {
    code: "US",
    name: "United States",
    flag: "/meetushere/us.svg",
    image: "/meetushere/5.avif",
    heading: "Accelerating enterprise transformation across the United States",
    paragraph:
      "Tec Tha equips enterprises across the United States with enterprise-grade AI, resilient cloud infrastructure, and advanced cybersecurity, engineered to support digital transformation at national scale.",
    chips: ["Enterprise AI", "Cloud Infrastructure", "Cybersecurity", "Digital Engineering"],
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
      className="relative min-h-screen w-full bg-[#040404] text-white overflow-hidden"
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

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        {/* Page header */}
        <div className="mb-14 flex flex-col items-center text-center lg:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />
            <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/45">
              Global Presence
            </span>
            <span className="h-px w-8 bg-white/40" />
          </div>
          <h2 className="text-[11vw] font-medium  leading-[0.95] tracking-tight sm:text-[7vw] lg:text-[3.6rem]">
            Meet Us Here
          </h2>
          <p className="mt-6 max-w-lg text-sm font-light leading-relaxed tracking-wide text-white/50 sm:text-base">
            Tec Tha delivers AI, cloud, cybersecurity, and enterprise engineering
            for organizations across seven global markets.
          </p>
        </div>

        {/* Card */}
        <div
          className="relative mx-auto w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-[6px] border border-white/12 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.9)] sm:h-[560px] lg:h-[660px]">
            {/* Prev / Next arrows — centered against the card's own height at every breakpoint */}
            <button
              aria-label="Previous country"
              onClick={prev}
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md transition-colors duration-300 hover:border-white/70 hover:bg-black/70 sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Next country"
              onClick={next}
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md transition-colors duration-300 hover:border-white/70 hover:bg-black/70 sm:right-6 sm:h-12 sm:w-12"
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
                className="absolute inset-0"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "grayscale(0.35) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/10" />

                {/* top row: flag + name / counter */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-9">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 overflow-hidden rounded-[6px] border border-white/40 bg-white/5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.8)] sm:h-9 sm:w-9">
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 sm:text-sm">
                      {country.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] text-white/45 sm:text-sm">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* bottom text block */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-12">
            <h3
  className="
    max-w-5xl
    text-2xl
    sm:text-3xl
    lg:text-[2.5rem]
    font-normal
    tracking-[-0.04em]
    leading-[0.88]
  "
>
  {country.heading}
</h3>
                  <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/70 sm:text-base">
                    {country.paragraph}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {country.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-xl border border-white/25 bg-white/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/80 backdrop-blur-md sm:text-xs"
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
        <div className="mt-9 flex items-center justify-center gap-2.5">
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