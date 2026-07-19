import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const COUNTRIES = [
  {
    code: "US",
    name: "United States",
    image: "",
    flag: "",
    statement:
      "Driving digital transformation for enterprises across North America.",
  },
  {
    code: "GB",
    name: "United Kingdom",
    image: "",
    flag: "",
    statement:
      "Delivering strategic technology partnerships across the UK and Europe.",
  },
  {
    code: "DE",
    name: "Germany",
    image: "",
    flag: "",
    statement:
      "Engineering precision solutions for Europe's industrial leaders.",
  },
  {
    code: "FR",
    name: "France",
    image: "",
    flag: "",
    statement:
      "Crafting elegant digital experiences for France's leading brands.",
  },
  {
    code: "CA",
    name: "Canada",
    image: "",
    flag: "",
    statement:
      "Building resilient infrastructure for businesses across Canada.",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    image: "",
    flag: "",
    statement:
      "Powering innovation for enterprises across the Middle East.",
  },
  {
    code: "AU",
    name: "Australia",
    image: "",
    flag: "",
    statement:
      "Delivering forward-thinking solutions across Asia-Pacific markets.",
  },
];

export default function MeetUsHere() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const imageRef = useRef(null);
  const statementRef = useRef(null);
  const flagRef = useRef(null);
  const timelineRef = useRef(null);

  const itemRefs = useRef([]);
  const thumbRefs = useRef([]);
  const arrowRefs = useRef([]);

  const active = COUNTRIES[activeIndex];
  const display = COUNTRIES[displayIndex];

  useEffect(() => {
    if (activeIndex === displayIndex) return;

    if (timelineRef.current) timelineRef.current.kill();

    setIsAnimating(true);
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => setIsAnimating(false),
    });
    timelineRef.current = tl;

    tl.to(imageRef.current, { opacity: 0, scale: 1.08, duration: 0.55 })
      .to(
        [statementRef.current, flagRef.current],
        { opacity: 0, y: 12, duration: 0.35, ease: "power2.in" },
        "<"
      )
      .call(() => setDisplayIndex(activeIndex))
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.16 },
        { opacity: 1, scale: 1, duration: 1.05, ease: "power3.out" }
      )
      .fromTo(
        flagRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.65"
      )
      .fromTo(
        statementRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const goTo = (index) => {
    if (index === activeIndex || isAnimating) return;
    setActiveIndex(index);
  };

  // Clear any lingering hover styles on the item that just became active
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    const thumb = thumbRefs.current[activeIndex];
    const arrow = arrowRefs.current[activeIndex];
    if (el) gsap.set(el, { clearProps: "borderColor,backgroundColor" });
    if (thumb) gsap.set(thumb, { clearProps: "scale" });
    if (arrow) gsap.set(arrow, { clearProps: "x,opacity" });
  }, [activeIndex]);

  const handleNavHoverIn = (index) => {
    const isActive = index === activeIndex;

    gsap.to(thumbRefs.current[index], {
      scale: 1.08,
      duration: 0.55,
      ease: "power3.out",
    });
    gsap.to(arrowRefs.current[index], {
      x: 0,
      opacity: isActive ? 0.55 : 1,
      duration: 0.4,
      ease: "power3.out",
    });

    if (!isActive) {
      gsap.to(itemRefs.current[index], {
        borderColor: "rgba(255,255,255,0.35)",
        backgroundColor: "rgba(255,255,255,0.05)",
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  const handleNavHoverOut = (index) => {
    const isActive = index === activeIndex;

    gsap.to(thumbRefs.current[index], {
      scale: 1,
      duration: 0.55,
      ease: "power3.out",
    });
    gsap.to(arrowRefs.current[index], {
      x: -6,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    if (!isActive) {
      gsap.to(itemRefs.current[index], {
        borderColor: "rgba(255,255,255,0.1)",
        backgroundColor: "rgba(255,255,255,0.02)",
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.09), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col px-6 pt-24 pb-20 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
          <span className="mb-5 text-[11px] font-medium uppercase tracking-[0.45em] text-white/45">
            Global Presence
          </span>
          <h2 className="font-monstret text-[13vw] leading-[0.9] tracking-tight text-white sm:text-[9vw] lg:text-[5vw]">
            Meet Us Here
          </h2>
          <p className="mt-7 max-w-md text-sm font-light tracking-wide text-white/50 sm:text-base">
            Meet our teams and partners across global markets.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[64px_1fr_300px] lg:gap-12">
          {/* Left — vertical active country name */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative h-[520px] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active.code}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-1/2 origin-center whitespace-nowrap text-xs font-medium uppercase tracking-[0.6em] text-white/55"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "translate(-50%, -50%) rotate(180deg)",
                  }}
                >
                  {active.name}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Center — featured region */}
          <div className="relative mx-auto w-full max-w-[1180px]">
            {/* Top: left info column + clean hero image */}
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
              {/* Left side — flag, label, country name (outside the image) */}
              <div
                ref={flagRef}
                className="flex flex-row items-center gap-5 lg:w-[260px] lg:shrink-0 lg:flex-col lg:items-start lg:gap-7"
              >
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-[10px] border border-white/30 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.7)]">
                  {display.flag ? (
                    <img
                      src={display.flag}
                      alt={`${display.name} flag`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white/5 text-[9px] tracking-widest text-white/40">
                      {display.code}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/50">
                    Featured Region
                  </span>
                  <span className="font-serif text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.6rem]">
                    {display.name}
                  </span>
                </div>
              </div>

              {/* Center — large hero image, no overlay, no text */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] border border-white/10 bg-neutral-950 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] sm:aspect-[16/10] lg:aspect-[16/9] lg:flex-1">
                <img
                  ref={imageRef}
                  src={display.image}
                  alt={display.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ opacity: display.image ? 1 : 0.9 }}
                />
              </div>
            </div>

            {/* Bottom — description + Explore button, outside the image */}
            <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between lg:mt-14 lg:pl-[calc(260px+64px)] lg:pt-12">
              <p
                ref={statementRef}
                className="max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg"
              >
                {display.statement}
              </p>

            </div>
          </div>

          {/* Right — premium thumbnail country navigation */}
          <nav
            aria-label="Select region"
            className="flex gap-3 overflow-x-auto pb-4 lg:w-full lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
          >
            {COUNTRIES.map((country, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={country.code}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onClick={() => goTo(index)}
                  onMouseEnter={() => handleNavHoverIn(index)}
                  onMouseLeave={() => handleNavHoverOut(index)}
                  onFocus={() => handleNavHoverIn(index)}
                  onBlur={() => handleNavHoverOut(index)}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative flex w-[220px] shrink-0 cursor-pointer items-center gap-3.5 rounded-[16px] border py-2.5 pl-2.5 pr-4 backdrop-blur-md outline-none transition-[background-color,box-shadow] duration-500 lg:w-full ${
                    isActive
                      ? "border-white/90 bg-white/[0.08] shadow-[0_0_36px_-6px_rgba(255,255,255,0.4)]"
                      : "border-white/12 bg-white/[0.02]"
                  }`}
                >
                  {/* vertical active indicator */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-3 top-1/2 hidden -translate-y-1/2 rounded-full transition-all duration-500 ease-out lg:block ${
                      isActive
                        ? "h-10 w-[2.5px] bg-white opacity-100"
                        : "h-2 w-[2.5px] bg-white/0 opacity-0"
                    }`}
                  />

                  {/* thumbnail */}
                  <div
                    ref={(el) => (thumbRefs.current[index] = el)}
                    className={`relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-[4px] border bg-white/5 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.7)] transition-[border-color] duration-500 ${
                      isActive ? "border-white" : "border-white/20"
                    }`}
                  >
                    <img
                      src={country.image}
                      alt={country.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />

                    {/* small flag chip on the thumbnail */}
                    <div className="absolute bottom-1 left-1 flex h-[18px] w-[26px] items-center justify-center overflow-hidden rounded-[4px] border border-white/30 bg-black/50 backdrop-blur-sm">
                      {country.flag ? (
                        <img
                          src={country.flag}
                          alt=""
                          aria-hidden="true"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-[7px] font-medium tracking-widest text-white/70">
                          {country.code}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* name + reveal arrow */}
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                    <span
                      className={`truncate text-left font-medium leading-tight tracking-wide transition-colors duration-500 ${
                        isActive
                          ? "text-[15px] text-white"
                          : "text-sm text-white/55"
                      }`}
                    >
                      {country.name}
                    </span>
                    <ArrowRight
                      ref={(el) => (arrowRefs.current[index] = el)}
                      size={14}
                      strokeWidth={1.5}
                      className="shrink-0 text-white opacity-0"
                      style={{ transform: "translateX(-6px)" }}
                    />
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA */}
      
      </div>
    </section>
  );
}