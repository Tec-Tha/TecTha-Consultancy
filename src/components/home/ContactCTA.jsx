import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";

/**
 * ContactCTA — closing band for the Global Presence / Meet Us Here page.
 * Same dark, quiet "last word" treatment as the homepage ContactCTA:
 * full-bleed dark band, ambient orb motion, single decisive action.
 *
 * NOTE: layout/typography/animation unchanged from the approved version —
 * only verified for mobile (iPhone SE up) here, nothing redesigned.
 */
const ContactCTA = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black/95 py-20 sm:py-24 lg:py-28"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ambient orb — clamped smaller on mobile so it never forces horizontal scroll */}
      <motion.div
        aria-hidden="true"
        style={{ y: orbY, scale: orbScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] lg:h-[560px] lg:w-[560px]"
      />

      {/* px-4 -> px-6 raises mobile-only side padding (below the sm/640px breakpoint).
          sm:px-6 is untouched, so tablet/desktop spacing is identical to before. */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-sm"
        >
          READY TO START?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-slate-50"
        >
          Ready to Transform
          <br className="hidden sm:block" /> Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg"
        >
          Let&apos;s discuss your next digital initiative. From AI and cloud to
          enterprise engineering, we build technology that drives measurable
          business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 w-full sm:w-auto"
        >
          <MagneticButton strength={0.35}>
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-black font-semibold transition hover:bg-zinc-200 sm:w-auto"
            >
              Contact Our Team
              <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-6 text-sm text-slate-500"
        >
          Typical first response within one business day.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactCTA;