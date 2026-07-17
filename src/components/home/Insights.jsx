import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

/**
 * Insights — Home Section 10
 * Editorial grid for latest articles/perspectives. Kept quiet and
 * text-forward relative to FeaturedWork — this is where the firm's point
 * of view lives, not its results.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ARTICLES = [
  {
    id: "insight-01",
    category: "AI Transformation",
    title: "Why most enterprise AI pilots never reach production",
    excerpt:
      "The gap between a working demo and a production system is almost never the model — it's everything wired around it.",
    readTime: "7 min read",
    date: "Jun 2026",
  },
  {
    id: "insight-02",
    category: "Cloud & Infrastructure",
    title: "The real cost of deferring a platform migration",
    excerpt:
      "Technical debt compounds quietly until a single incident makes the bill due all at once. A framework for pricing it early.",
    readTime: "5 min read",
    date: "May 2026",
  },
  {
    id: "insight-03",
    category: "Data Strategy",
    title: "Governance as an enabler, not a checkpoint",
    excerpt:
      "Teams that treat data governance as a gate slow themselves down twice. Building it into the pipeline instead.",
    readTime: "6 min read",
    date: "May 2026",
  },
];

const Insights = () => {
  return (
    <section className="bg-black py-24 md:py-18">
      <div className="mx-auto max-w-7xl px-6 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="mb-20 max-w-5xl">

  {/* Overline */}

  <div className="mb-8 flex items-center gap-5">

    <div className="h-[2px] w-16 bg-white" />

    <span
      className="
      font-['Montserrat']
      text-xl
      font-normal
      uppercase
      tracking-[6px]
      text-white
      "
    >
      INSIGHTS
    </span>

  </div>

  {/* Heading */}

  <h2
    className="
    font-['Montserrat']
    text-5xl
    font-normal
    leading-[0.92]
    tracking-tight
    text-white
    "
  >
    Perspectives
   
    That Shape
  
    Tomorrow.
  </h2>

  {/* Subtitle */}

  <p
    className="
    mt-8
    max-w-3xl
    text-[22px]
    leading-10
    text-gray-500
    "
  >
    Explore expert perspectives, emerging technologies, and practical
    insights that help organizations navigate change and create lasting
    business value.
  </p>

</div>
          <a
            href="/insights"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[color:var(--color-brand-600)] md:inline-flex"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i * 0.1}
              className="group flex flex-col"
            >
              <a href={`/insights/${article.id}`} className="flex h-full flex-col">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-secondary)]">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#7C3AED]/10 transition-transform duration-500 group-hover:scale-[1.03]">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text-muted)]">
                      {article.category}
                    </span>
                  </div>
                </div>

                

                <h3 className="mt-4 text-3xl font-medium leading-snug text-white transition-colors duration-300 group-hover:white">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white">
                  {article.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-normal text-white">
                  Read the piece
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        <a
          href="/insights"
          className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text-secondary)] transition-colors duration-300 hover:text-[color:var(--color-brand-600)] md:hidden"
        >
          View all insights
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};

export default Insights;