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
    title: "Why Most Enterprise AI Initiatives Never Reach Production",
    excerpt:
      "The gap between experimentation and enterprise deployment is rarely the model itself. Success depends on governance, integration, and operational readiness.",
    image: "/insights1.jpg",
  },

  {
    id: "insight-02",
    category: "Cloud Strategy",
    title: "Modern Cloud Platforms Are Built for Business, Not Infrastructure",
    excerpt:
      "Organizations are moving beyond migration to create cloud-native foundations that improve resilience, scalability, and long-term innovation.",
    image: "/insights2.jpg",
  },

  {
    id: "insight-03",
    category: "Data & Intelligence",
    title: "Why Data Becomes Valuable Only When It Drives Better Decisions",
    excerpt:
      "Modern enterprises succeed when trusted data becomes accessible, actionable, and embedded into every business decision.",
    image: "/insights3.jpg",
  },
];

const Insights = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="mb-12 max-w-5xl sm:mb-16 lg:mb-20">

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
    text-4xl
    font-normal
    leading-[0.92]
    tracking-tight
    text-white
    sm:text-5xl
    lg:text-6xl
    "
  >
 Building Tomorrow Starts With Better Thinking
  </h2>

  {/* Subtitle */}

  <p
    className="
    mt-6
    max-w-3xl
    text-base
    leading-8
    text-gray-500
    sm:mt-8
    sm:text-lg
    sm:leading-9
    lg:text-[22px]
    lg:leading-10
    "
  >
   Discover research, emerging technologies, and strategic insights that help organizations anticipate change, accelerate innovation, and create sustainable competitive advantage.
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
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">

  <img
    src={article.image}
    alt={article.title}
    className="
      h-full
      w-full
      object-cover
      brightness-75
      scale-105
      transition-all
      duration-700
      ease-out
      group-hover:scale-110
      group-hover:brightness-100
    "
  />

  {/* Dark Overlay */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/50
      via-black/20
      to-transparent
    "
  />

  {/* Category Badge */}

  <div className="absolute left-6 top-6">


  </div>

</div>
                

                <h3 className="mt-4 text-2xl font-medium leading-snug text-white transition-colors duration-300 group-hover:white sm:text-3xl">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-white sm:text-[14px]">
                  {article.excerpt}
                </p>

             
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;


