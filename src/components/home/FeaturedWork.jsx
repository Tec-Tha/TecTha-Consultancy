import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
 
import "swiper/css";
import "swiper/css/navigation";
 
/**
 * FeaturedWork — Home Section 8
 * Swiper carousel of case study cards. Each slide pairs a result metric
 * with the narrative behind it — proof before pitch.
 */
 
const CASE_STUDIES = [
  {
    id: "cs-01",
    client: "Northbridge Logistics",
    sector: "Supply Chain",
    metric: "38%",
    metricLabel: "faster fulfillment cycle",
    summary:
      "Replaced a decade of manual routing logic with a live optimization layer connected to warehouse, carrier, and demand data.",
    tag: "Platform Modernization",
  },
  {
    id: "cs-02",
    client: "Aurellia Health Network",
    sector: "Healthcare",
    metric: "2.1M",
    metricLabel: "patient records unified",
    summary:
      "Consolidated fragmented regional systems into a single compliant data fabric, cutting reporting time from weeks to hours.",
    tag: "Data & Compliance",
  },
  {
    id: "cs-03",
    client: "Ferro Capital Partners",
    sector: "Financial Services",
    metric: "6x",
    metricLabel: "faster risk modeling",
    summary:
      "Rebuilt the risk simulation pipeline on a distributed architecture, turning overnight runs into an intraday capability.",
    tag: "Cloud & Infrastructure",
  },
  {
    id: "cs-04",
    client: "Solace Retail Group",
    sector: "Retail",
    metric: "+22%",
    metricLabel: "conversion lift",
    summary:
      "Rearchitected the checkout and personalization stack around real-time inventory and behavioral signals.",
    tag: "Experience Engineering",
  },
];
 
const FeaturedWork = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
 
  return (
    <section className="relative bg-[color:var(--color-bg-secondary)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            overline="Featured Work"
            title={
              <>
                Results, not
                <br className="hidden sm:block" /> resumes.
              </>
            }
            subtitle="A sample of engagements where the outcome mattered more than the methodology slide."
            align="left"
          />
 
          <div className="flex shrink-0 gap-3">
            <button
              ref={prevRef}
              aria-label="Previous case study"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors duration-300 hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next case study"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-colors duration-300 hover:border-[color:var(--color-brand-500)] hover:text-[color:var(--color-brand-600)]"
            >
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
 
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <Swiper
            modules={[Navigation, Mousewheel]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            mousewheel={{ forceToAxis: true }}
            spaceBetween={28}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              1024: { slidesPerView: 2.2 },
              1280: { slidesPerView: 2.6 },
            }}
            className="!overflow-visible"
          >
            {CASE_STUDIES.map((study) => (
              <SwiperSlide key={study.id}>
                <article className="group flex h-full flex-col justify-between rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)] p-9 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(37,99,235,0.25)]">
                  <div>
                    <span className="inline-block rounded-full bg-[color:var(--color-brand-50)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-brand-600)] dark:bg-white/5 dark:text-[color:var(--color-brand-400)]">
                      {study.tag}
                    </span>
 
                    <div className="mt-8 flex items-baseline gap-3">
                      <span className="text-5xl font-bold tracking-tight text-[color:var(--color-text-primary)]">
                        {study.metric}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
                      {study.metricLabel}
                    </p>
 
                    <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                      {study.summary}
                    </p>
                  </div>
 
                  <div className="mt-10 flex items-center justify-between border-t border-[color:var(--color-border)] pt-6">
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--color-text-primary)]">
                        {study.client}
                      </p>
                      <p className="text-xs text-[color:var(--color-text-muted)]">
                        {study.sector}
                      </p>
                    </div>
                    <button
                      aria-label={`Read the ${study.client} case study`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] transition-all duration-300 group-hover:border-[color:var(--color-brand-500)] group-hover:bg-[color:var(--color-brand-600)] group-hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
 
export default FeaturedWork;