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
  <section className="bg-white py-16 sm:py-20 lg:py-28">

    <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">

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

        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4 lg:gap-5">

          <div className="h-[2px] w-10 bg-blue-600 sm:w-12 lg:w-16"/>

          <span
            className="
            font-['Montserrat']
            text-sm
            font-medium
            uppercase
            tracking-[3px]
            text-blue-600
            sm:text-base
            sm:tracking-[4px]
            lg:text-xl
            lg:tracking-[6px]
            "
          >
            INNOVATION IN PRACTICE
          </span>

        </div>

        <h2
          className="
          font-['Montserrat']
          text-4xl
          font-medium
          leading-[1.1]
          tracking-tight
          text-black
          sm:text-5xl
          lg:text-7xl
          "
        >
          Turning Vision   Into   <br/>
        Enterprise         Reality.
        
          <br/>

        </h2>

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
  mb-10
  sm:mb-16
  lg:mb-20
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
      h-[280px]
      w-full
      object-cover
      will-change-transform
      sm:h-[360px]
      lg:h-[420px]
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
  p-6
  sm:p-10
  lg:p-16
  "
  >



  <h3
  className="
  mt-3

  font-['Montserrat']

  text-[2rem]

  font-medium

  leading-[1]

  tracking-tight

  text-white
  sm:mt-4
  sm:text-[2.8rem]
  lg:mt-5
  lg:text-[50px]
  "
  >

  {story.title}

  </h3>

  <p
  className="
  mt-4

  text-lg

  leading-[1.3]

  text-white/90
  sm:text-[1.4rem]
  lg:text-[26px]
  "
  >

  {story.subtitle}

  </p>

  <p
  className="
  mt-8

  max-w-2xl

  text-sm

  leading-7

  text-white/75
  sm:text-base
  sm:leading-8
  lg:text-lg
  lg:leading-9
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