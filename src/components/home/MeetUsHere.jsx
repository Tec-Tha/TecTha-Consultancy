import React, {
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

/* ---------------------------------------------------------------------- */
/*  Fonts (Manrope for display, Inter for body) — injected once           */
/* ---------------------------------------------------------------------- */

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap";

function useInjectFonts() {
  useEffect(() => {
    if (document.getElementById("meet-us-here-fonts")) return;
    const link = document.createElement("link");
    link.id = "meet-us-here-fonts";
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);
}

/* ---------------------------------------------------------------------- */
/*  Data                                                                   */
/* ---------------------------------------------------------------------- */

const COUNTRIES = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    city: "Toronto",
    image:
      "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    city: "Cologne",
    image:
      "https://images.unsplash.com/photo-1554072675-66db59d9d64c?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    city: "Amsterdam",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    city: "The Alps",
    image:
      "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "norway",
    name: "Norway",
    flag: "🇳🇴",
    city: "Fjords",
    image:
      "https://images.unsplash.com/photo-1601439678777-b2b3c56fa519?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    city: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    city: "Marina Bay",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    city: "Sydney",
    image:
      "https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=900&q=80&auto=format&fit=crop",
  },
];

/* ---------------------------------------------------------------------- */
/*  Background atmosphere: grid + noise + particles + glow                */
/* ---------------------------------------------------------------------- */

const NOISE_SVG =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function Atmosphere() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 12,
        delay: Math.random() * 8,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* pure black base */}
      <div className="absolute inset-0 bg-black" />

      {/* soft radial glow */}
      <div
        className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-[0.10] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full opacity-[0.06] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {/* noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      />

      {/* floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/70"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -28, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Card                                                                   */
/* ---------------------------------------------------------------------- */

const Card = React.memo(function Card({ country }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{
        scale: 1.04,
        rotate: 2,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative mx-3 shrink-0 select-none overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-[0_10px_50px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_0_60px_-8px_rgba(255,255,255,0.18)] hover:border-white/25"
      style={{
        width: "320px",
        height: "440px",
      }}
    >
      {/* mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.14), transparent 70%)",
        }}
      />

      {/* image — 75% of card height */}
      <div className="relative h-[75%] w-full overflow-hidden">
        <img
          src={country.image}
          alt={`${country.city}, ${country.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
          draggable={false}
        />
        {/* image bottom fade into footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/30" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        {/* flag badge, top right */}
        <div className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl backdrop-blur-md transition-transform duration-500 ease-out group-hover:rotate-[14deg] group-hover:scale-110">
          <span aria-hidden="true">{country.flag}</span>
        </div>
      </div>

      {/* footer: name + arrow */}
      <div className="relative flex h-[25%] items-center justify-between border-t border-white/10 bg-black/60 px-6">
        <div className="min-w-0">
          <p
            className="truncate text-[17px] font-semibold tracking-wide text-white"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {country.name}
          </p>
          <p className="mt-0.5 text-[12px] font-light uppercase tracking-[0.16em] text-white/40">
            {country.city}
          </p>
        </div>

        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 transition-colors duration-300 group-hover:border-white/40 group-hover:bg-white">
          <ArrowUpRight
            size={18}
            strokeWidth={1.75}
            className="absolute text-white transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0 group-hover:text-black"
          />
          <ArrowUpRight
            size={18}
            strokeWidth={1.75}
            className="absolute -translate-x-6 translate-y-6 text-black opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </motion.div>
  );
});

/* ---------------------------------------------------------------------- */
/*  Infinite marquee row (GSAP powered, pause on hover)                    */
/* ---------------------------------------------------------------------- */

function MarqueeRow({ items, direction = "left", speed = 42 }) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = trackRef.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (direction === "left") {
        gsap.set(el, { xPercent: 0 });
        tweenRef.current = gsap.to(el, {
          xPercent: -50,
          duration: speed,
          ease: "none",
          repeat: -1,
        });
      } else {
        gsap.set(el, { xPercent: -50 });
        tweenRef.current = gsap.to(el, {
          xPercent: 0,
          duration: speed,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, [direction, speed, prefersReducedMotion]);

  const handleEnter = () => tweenRef.current?.pause();
  const handleLeave = () => tweenRef.current?.play();

  const doubled = useMemo(() => [...items, ...items], [items]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {doubled.map((country, i) => (
          <Card key={`${country.id}-${i}`} country={country} />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Section header                                                        */
/* ---------------------------------------------------------------------- */

function SectionHeader() {
  return (
    <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/60"
      >
        Global Footprint
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-[13vw] font-extrabold leading-none tracking-tight text-white sm:text-6xl md:text-7xl"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        MEET US HERE
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-5 max-w-xl text-base font-light text-white/50 sm:text-lg"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Partnering with organizations across the world.
      </motion.p>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Bottom CTA                                                             */
/* ---------------------------------------------------------------------- */

function BottomCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative z-10 mx-auto mt-24 flex max-w-2xl flex-col items-center px-6 text-center"
    >
      <h3
        className="text-2xl font-bold leading-snug text-white sm:text-4xl"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        Your Business Could Be Our Next Success Story
      </h3>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="group mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white px-8 py-4 text-[15px] font-semibold tracking-wide text-black shadow-[0_0_40px_-8px_rgba(255,255,255,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_-4px_rgba(255,255,255,0.55)]"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        Let's Build Together
        <ArrowUpRight
          size={18}
          strokeWidth={2.25}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </motion.button>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Main export                                                           */
/* ---------------------------------------------------------------------- */

export default function MeetUsHere() {
  useInjectFonts();

  const topRow = useMemo(() => COUNTRIES.slice(0, 6), []);
  const bottomRow = useMemo(() => COUNTRIES.slice(6), []);

  return (
    <section
      className="relative w-full overflow-hidden bg-black py-28"
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-label="Meet us here — global presence"
    >
      <Atmosphere />

      <SectionHeader />

      <div className="relative z-10 mt-16 flex flex-col gap-8">
        <MarqueeRow items={topRow} direction="left" speed={38} />
        <MarqueeRow items={bottomRow} direction="right" speed={44} />
      </div>

      <BottomCTA />
    </section>
  );
}