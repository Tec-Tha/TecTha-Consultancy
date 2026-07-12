import { motion } from "framer-motion";

/**
 * TextReveal
 * Splits text into words, characters, or lines and reveals each unit with
 * a staggered fade-up as it enters the viewport. Used for hero headlines
 * and any copy that should arrive with weight rather than just fading in.
 *
 * API:
 *   <TextReveal type="words" stagger={0.04}>
 *     Built for scale, not slides
 *   </TextReveal>
 *
 *   <TextReveal type="lines" stagger={0.08}>
 *     {["We solve the problem", "before we sell the solution"]}
 *   </TextReveal>
 *
 * type:    "words" | "chars" | "lines"
 * stagger: delay in seconds between each unit
 * once:    whether the reveal fires only the first time it enters view
 */
const TextReveal = ({
  children,
  type = "words",
  stagger = 0.04,
  as: Component = "div",
  className = "",
  once = true,
}) => {
  const units = splitContent(children, type);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger },
    },
  };

  const unitVariants =
    type === "chars"
      ? {
          hidden: { opacity: 0, y: "0.4em" },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }
      : {
          hidden: { opacity: 0, y: "100%" },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          },
        };

  return (
    <Component className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        variants={container}
        className="block"
        aria-label={typeof children === "string" ? children : undefined}
      >
        {units.map((unit, i) => (
          <span
            key={i}
            className={
              type === "chars"
                ? "inline-block overflow-hidden"
                : "inline-block overflow-hidden align-top"
            }
            style={type === "lines" ? { display: "block" } : undefined}
            aria-hidden="true"
          >
            <motion.span variants={unitVariants} className="inline-block">
              {unit === " " ? "\u00A0" : unit}
              {type === "words" && i < units.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};

function splitContent(children, type) {
  if (type === "lines") {
    // Accept either an array of line strings, or a single string with \n
    if (Array.isArray(children)) return children;
    return String(children).split("\n");
  }

  const text = Array.isArray(children) ? children.join(" ") : String(children);

  if (type === "chars") {
    return text.split("");
  }

  // words
  return text.split(" ").filter(Boolean);
}

export default TextReveal;