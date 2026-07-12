import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

import "swiper/css";
import "swiper/css/navigation";

/**
 * Testimonials — Home Section 10
 * Single large quote per slide, oversized typography, minimal chrome.
 * One testimonial on screen at a time by design — this section asks the
 * reader to actually read one, not skim three at once.
 */

const TESTIMONIALS = [
  {
    id: "t-01",
    quote:
      "They didn't just ship the platform — they rebuilt how our engineering org makes decisions about it. Eighteen months later, that's the part that stuck.",
    name: "Meera Anand",
    role: "CTO, Northbridge Logistics",
  },
  {
    id: "t-02",
    quote:
      "We'd been told a compliant data migration would take two years. It took five months, and we passed audit on the first pass.",
    name: "David Ferro",
    role: "VP Engineering, Ferro Capital Partners",
  },
  {
    id: "t-03",
    quote:
      "The team scoped for our reality, not a generic best practice. That's rarer than it should be at this level of engagement.",
    name: "Priya Raghunathan",
    role: "Chief Data Officer, Aurellia Health Network",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[color:var(--color-bg-primary)] py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          overline="Testimonials"
          title="What it's like to work with us"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-14"
        >
          <Quote
            className="mx-auto h-10 w-10 text-[color:var(--color-brand-500)]/30"
            aria-hidden="true"
          />

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            slidesPerView={1}
            className="mt-8"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col items-center px-4 text-center sm:px-12">
                  <p className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-snug tracking-tight text-[color:var(--color-text-primary)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-sm font-semibold text-white">
                      {t.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-[color:var(--color-text-primary)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[color:var(--color-text-muted)]">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              ref={prevRef}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors duration-300 hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <span
                  key={t.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-[color:var(--color-brand-600)]"
                      : "w-1.5 bg-[color:var(--color-border)]"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <button
              ref={nextRef}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors duration-300 hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;