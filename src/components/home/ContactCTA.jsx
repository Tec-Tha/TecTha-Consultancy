import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";
 
/**
 * ContactCTA — Home Section 12
 * Full-bleed dark band closing the homepage. Large headline, single
 * decisive action, ambient gradient motion behind glass. Deliberately
 * quiet compared to the Hero: this is the "last word", not a second climax.
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
      className="relative overflow-hidden bg-[#080C14] py-28 md:py-36"
    >
      {/* Ambient gradient orbs */}
      <motion.div
        style={{ y: orbY, scale: orbScale }}
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#2563EB]/30 via-[#4F46E5]/20 to-[#7C3AED]/20 blur-[120px]"
        aria-hidden="true"
      />
 
      {/* Faint grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
 
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#818CF8]" />
          Start the conversation
        </motion.span>
 
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-slate-50"
        >
          Let&rsquo;s build what&rsquo;s
          <br className="hidden sm:block" /> next, together.
        </motion.h2>
 
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-xl text-lg text-slate-400"
        >
          Tell us where the friction is. We&rsquo;ll bring the people,
          the process, and the platform to move past it.
        </motion.p>
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10"
        >
          <MagneticButton strength={0.35}>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(99,102,241,0.6)] transition-shadow duration-300 hover:shadow-[0_0_56px_-6px_rgba(99,102,241,0.75)]"
            >
              Talk to our team
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