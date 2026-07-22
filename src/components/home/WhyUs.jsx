import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------------------------------------------
   DESIGN TOKENS — matched to the reference (white bg, blue accent)
--------------------------------------------------------------- */
const PAPER = "#FFFFFF";
const INK = "#14161B";
const SLATE = "#6B7280";
const HAIRLINE = "#E7E8EC";
const ACCENT = "darkblue"; // reference blue
const ACCENT_SOFT = "#EAF0FF";

const FONT_DISPLAY = "'Montserrat', sans-serif";
const FONT_BODY = "'Montserrat', sans-serif";

const EASE = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------
   CONTENT — same four principles and graphics as before
--------------------------------------------------------------- */
const PRINCIPLES = [
  {
    num: "01",
    title: "Business First. Technology Second.",
    description:
      "Technology is valuable only when it solves business challenges, creates measurable outcomes, and enables sustainable growth.",
     image: "/whyus.jpg",
  },
  {
    num: "02",
    title: "Every Great Partnership Begins With Understanding.",
    description:
      "We listen first, align with your business objectives, and design solutions tailored to your long-term vision.",
      image: "/wethink1.jpg",
  },
  {
    num: "03",
    title: "Innovation With Purpose.",
    description:
      "We combine strategy, engineering, and intelligent technologies to build secure, scalable, and future-ready digital solutions.",
      image: "/industry.jpg",
  },
  {
    num: "04",
    title: "Success Is Built Together.",
    description:
      "We believe long-term partnerships create stronger innovation, greater resilience, and lasting business value.",
       image: "/fill.avif",
  },
];

/* ---------------------------------------------------------------
   ABSTRACT LINE-ART GRAPHICS (same visual language, larger canvas)
--------------------------------------------------------------- */
function Graphic({ type }) {
  const common = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };

  if (type === "value") {
    return (
      <svg viewBox="0 0 800 450" width="100%" height="100%">
        <line x1="70" y1="360" x2="730" y2="360" stroke={HAIRLINE} strokeWidth="1" />
        {[140, 280, 420, 560].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={360 - (i + 1) * 52}
            width="64"
            height={(i + 1) * 52}
            fill={i === 3 ? ACCENT : INK}
            opacity={i === 3 ? 1 : 0.1 + i * 0.06}
          />
        ))}
        <path d="M105 315 L305 245 L455 285 L690 130" stroke={ACCENT} strokeWidth="3" {...common} />
        <circle cx="690" cy="130" r="8" fill={ACCENT} />
      </svg>
    );
  }

  if (type === "listen") {
    return (
      <svg viewBox="0 0 800 450" width="100%" height="100%">
        <circle cx="400" cy="225" r="42" fill={INK} />
        {[100, 155, 210].map((r, i) => (
          <circle
            key={r}
            cx="400"
            cy="225"
            r={r}
            stroke={i === 2 ? ACCENT : HAIRLINE}
            strokeWidth={i === 2 ? 2 : 1}
            {...common}
          />
        ))}
        <path d="M400 190 L400 260 M365 225 L435 225" stroke={PAPER} strokeWidth="3" {...common} />
      </svg>
    );
  }

  if (type === "network") {
    const pts = [
      [230, 130],
      [560, 100],
      [660, 250],
      [420, 340],
      [150, 290],
      [400, 225],
    ];
    return (
      <svg viewBox="0 0 800 450" width="100%" height="100%">
        {pts.map(([x, y], i) =>
          pts.slice(i + 1).map(([x2, y2], j) => (
            <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={HAIRLINE} strokeWidth="1" />
          ))
        )}
        <line x1="400" y1="225" x2="660" y2="250" stroke={ACCENT} strokeWidth="2" />
        <line x1="400" y1="225" x2="230" y2="130" stroke={ACCENT} strokeWidth="2" />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 5 ? 12 : 9} fill={i === 5 ? ACCENT : INK} opacity={i === 5 ? 1 : 0.75} />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 450" width="100%" height="100%">
      <circle cx="340" cy="225" r="105" stroke={INK} strokeWidth="2" {...common} />
      <circle cx="465" cy="225" r="105" stroke={ACCENT} strokeWidth="2" {...common} />
      <line x1="120" y1="225" x2="190" y2="225" stroke={HAIRLINE} strokeWidth="1" />
      <line x1="615" y1="225" x2="685" y2="225" stroke={HAIRLINE} strokeWidth="1" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   CHEVRON ICON
--------------------------------------------------------------- */
function Chevron({ open }) {
  return (
    <motion.svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="flex-shrink-0"
    >
      <path
        d="M4 7L10 13L16 7"
        stroke={open ? ACCENT : SLATE}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/* ---------------------------------------------------------------
   ACCORDION ITEM
--------------------------------------------------------------- */
function AccordionItem({ data, index, isOpen, onToggle }) {
  return (
    <div>
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-start gap-5 md:gap-8 py-7 md:py-8 text-left"
        style={{ background: "transparent" }}
      >
        <span
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "0.02em",
            color: ACCENT,
            paddingTop: "3px",
            flexShrink: 0,
            width: "30px",
          }}
        >
          {data.num}
        </span>

        <h3
          style={{
            fontFamily: FONT_DISPLAY,
            color: INK,
            letterSpacing: "-0.005em",
            lineHeight: 1.3,
          }}
          className="flex-1 text-xl md:text-4xl font-normal pr-4"
        >
          {data.title}
        </h3>

        <span style={{ marginTop: "6px" }}>
          <Chevron open={isOpen} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pb-12 pl-0 md:pl-[46px]">
              {/* LARGE IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                style={{
                  background: `linear-gradient(160deg, ${PAPER} 0%, ${ACCENT_SOFT} 100%)`,
                  border: `1px solid ${HAIRLINE}`,
                }}
                className="w-full aspect-video rounded-2xl overflow-hidden p-8 md:p-12 mb-8"
              >
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                style={{ fontFamily: FONT_BODY, color: SLATE, lineHeight: 1.8 }}
                className="text-base md:text-lg max-w-2xl"
              >
                {data.description}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: "1px", background: HAIRLINE }} />
    </div>
  );
}

/* ---------------------------------------------------------------
   MAIN SECTION
--------------------------------------------------------------- */
export default function OurApproach() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: PAPER }} className="relative w-full py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* LEFT — sticky intro */}
        <div className="md:col-span-4">
          <div className="static md:sticky md:top-32">
            <span
              style={{
                fontFamily: FONT_BODY,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.16em",
              }}
              className="block text-xs md:text-xl uppercase mb-6"
            >
              Our Approach
            </span>

            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                color: INK,
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
              }}
              className="text-4xl md:text-5xl font-normal mb-6"
            >
              Four convictions that guide every engagement.
            </h2>

            <p
              style={{ fontFamily: FONT_BODY, color: SLATE, lineHeight: 1.75 }}
              className="text-base max-w-sm"
            >
              What we hold ourselves to, from the first conversation
              through long-term delivery.
            </p>
          </div>
        </div>

        {/* RIGHT — accordion */}
        <div className="md:col-span-8">
          <div style={{ height: "1px", background: HAIRLINE }} />
          {PRINCIPLES.map((p, i) => (
            <AccordionItem
              key={p.num}
              data={p}
              index={i}
              isOpen={active === i}
              onToggle={(idx) => setActive(active === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}