  import { motion, useScroll, useTransform } from "framer-motion";
  import { useRef } from "react";

  const STORIES = [
    {
      id: 1,
      title: "Artificial Intelligence",
      subtitle: "Transforming intelligence into business advantage.",
      description:
        "From intelligent automation to predictive decision-making, we build AI solutions that enhance productivity, unlock insights, and create measurable business outcomes.",
      image: "/ai1.png",
    },

    {
      id: 2,
      title: "Cloud Engineering",
      subtitle: "Building resilient digital foundations.",
      description:
        "Our cloud platforms are designed for scalability, security, and performance—helping enterprises modernize infrastructure while accelerating innovation.",
      image: "cl1.png",
    },

    {
      id: 3,
      title: "Cyber Resilience",
      subtitle: "Protecting every digital interaction.",
      description:
        "We create secure digital ecosystems through modern security architecture, continuous monitoring, and proactive risk management.",
      image: "/cy.png",
    },
  ];

  export default function Innovation() {
    const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.12, 1]
  );

const imageY = useTransform(
  scrollYProgress,
  [0, 1],
  [80, -80]
);

return (
  <section className="bg-white py-28">

    <div className="mx-auto max-w-[1700px] px-10">

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.8
        }}

        className="max-w-5xl"

      >

        <div className="mb-8 flex items-center gap-5">

          <div className="h-[2px] w-16 bg-blue-600"/>

          <span
            className="
            font-['Montserrat']
            text-xl
            font-medium
            uppercase
            tracking-[6px]
            text-blue-600
            "
          >
            INNOVATION IN PRACTICE
          </span>

        </div>

        <h2
          className="
          font-['Montserrat']
          text-7xl
          font-medium
          leading-[1.1]
          tracking-tight
          text-black
          "
        >
          Turning Vision   Into   <br/>
        Enterprise         Reality.
        
          <br/>

        </h2>

        <p
          className="
          mt-8
          max-w-3xl
          text-[22px]
          leading-10
          text-gray-500
          "
        >
          Every breakthrough begins with curiosity,
          is refined through engineering, and delivers
          measurable business value through execution.
        </p>

      </motion.div>

      {/* STORIES */}

    <div ref={containerRef}>
  {STORIES.map((story, index) => (

  <motion.article

  key={story.id}

  initial={{
  opacity:0,
  y:80
  }}

  whileInView={{
  opacity:1,
  y:0
  }}

  viewport={{
  once:true,
  amount:.3
  }}

  transition={{
  duration:.8
  }}

  className="
  mb-20
  "

  >

  <div
  className="
  group
  relative
  overflow-hidden
  rounded-[10px]
  "
  >

  {/* IMAGE */}

  <motion.img
    src={story.image}
    alt={story.title}
    style={{
      scale: imageScale,
      y: imageY,
    }}
    className="
      h-[420px]
      w-full
      object-cover
      will-change-transform
    "
  />

  {/* OVERLAY */}

  <div
  className="
  absolute

  inset-0

  bg-gradient-to-t

  from-black

  via-black/60

  to-transparent
  "
  />

  {/* CONTENT */}

  <motion.div

  initial={{
  opacity:0,
  y:60
  }}

  whileInView={{
  opacity:1,
  y:0
  }}

  viewport={{
  once:true,
  amount:.4
  }}

  transition={{
  duration:.8,
  delay:.2
  }}

  className="
  absolute
  bottom-0
  left-0
  z-20
  max-w-3xl
  p-16
  "
  >



  <h3
  className="
  mt-5

  font-['Montserrat']

  text-[50px]

  font-medium

  leading-[1]

  tracking-tight

  text-white
  "
  >

  {story.title}

  </h3>

  <p
  className="
  mt-4

  text-[26px]

  leading-[1.3]

  text-white/90
  "
  >

  {story.subtitle}

  </p>

  <p
  className="
  mt-8

  max-w-2xl

  text-lg

  leading-9

  text-white/75
  "
  >

  {story.description}

  </p>

  </motion.div>

  </div>

  </motion.article>

  ))}
  </div>

    </div>

  </section>
    );
  }