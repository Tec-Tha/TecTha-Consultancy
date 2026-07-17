import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Keyboard,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HERO_SLIDES = [
  {
    id: 1,

    badge: "DIGITAL TRANSFORMATION",

    title:
      "Cutting Edge\nSolutions To\nPower Your\nBusiness.",

    description:
      "Empowering businesses with modern technology, AI, and scalable digital solutions.",

    button: "Explore Services",

    image: "/digital.jpeg",
  },

  {
    id: 2,

    badge: "ARTIFICIAL INTELLIGENCE",

    title:
      "Creating\nSmarter\nBusinesses\nWith AI.",

    description:
      "Delivering enterprise AI solutions that automate, predict, and accelerate innovation.",

    button: "Discover AI",

    image: "/art.jpg",
  },

  {
    id: 3,

    badge: "ENTERPRISE SOLUTIONS",

    title:
      "Engineering\nThe Future\nOf Digital\nGrowth.",

    description:
      "Helping organizations embrace next-generation technology with confidence.",

    button: "Get Started",

    image: "/ai.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1];

function SplitHeadline({ text, active }) {
  const lines = text.split("\n");

  return (
    <div className="space-y-2">

      {lines.map((line, lineIndex) => (

        <div
          key={lineIndex}
          className="overflow-hidden"
        >

          <motion.div

            className="flex flex-wrap"

            initial="hidden"

            animate={active ? "show" : "hidden"}

            variants={{
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: lineIndex * 0.15,
                },
              },
            }}

          >

            {line.split(" ").map((word, index) => (

              <motion.span

                key={index}

                className="
                mr-6
                inline-block
                font-['Montserrat']
                text-5xl
                
                leading-none
                text-white

                sm:text-6xl

                lg:text-8xl

                xl:text-[84px]
                "

                variants={{

                  hidden: {
                    opacity: 0,
                    y: 90,
                  },

                  show: {

                    opacity: 1,

                    y: 0,

                    transition: {

                      duration: 0.9,

                      ease,

                    },

                  },

                }}

              >

                {word}

              </motion.span>

            ))}

          </motion.div>

        </div>

      ))}

    </div>
  );
}

function Reveal({
  children,
  active,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={
        active
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 35,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

function PremiumButton({
  children,
  icon: Icon,
  to = "/",
}) {
  return (
    <Link
      to={to}
      className="
      group
      relative
      inline-flex
      items-center
      gap-3
      overflow-hidden
      rounded-full
      bg-gradient-to-r
      from-blue-600
      to-cyan-500
      px-8
      py-4
      font-['Montserrat']
      text-sm
      font-semibold
      text-white
      transition-all
      duration-500
      hover:scale-105
      hover:shadow-[0_15px_40px_rgba(37,99,235,.45)]
      "
    >
      {/* Shine Effect */}

      <span
        className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/30
        to-transparent
        transition-transform
        duration-700
        group-hover:translate-x-full
        "
      />

      {/* Text */}

      <span className="relative z-10">
        {children}
      </span>

      {/* Arrow */}

      {Icon && (
        <Icon
          size={18}
          className="
          relative
          z-10
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        />
      )}
    </Link>
  );
}

function HeroSlide({ slide, active }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
  <motion.img
    src={slide.image}
    alt={slide.badge}
    initial={{ scale: 1.1 }}
    animate={{
      scale: active ? 1 : 1.1,
    }}
    transition={{
      duration: 1.5,
    }}
    className="absolute inset-0 h-full w-full object-cover"
  />


  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-18 px-6 py-28 lg:grid-cols-2 lg:px-10">

        {/* LEFT */}

        <div className="z-10">

         





          {/* Heading */}

          <div className="mt-12">

            <SplitHeadline

              text={slide.title}

              active={active}

            />

          </div>





          {/* Description */}

          <Reveal

            active={active}

            delay={0.6}

          >

            <p
             className="
mt-8
max-w-xl
font-['Montserrat']
text-lg
leading-9
text-gray-400
"
            >
              {slide.description}
            </p>

          </Reveal>





          {/* Button */}

          <Reveal

            active={active}

            delay={0.9}

          >

            <div className="mt-10">

              <PremiumButton

                icon={ArrowRight}

              >

                {slide.button}

              </PremiumButton>

            </div>

          </Reveal>

        </div>









    

      </div>

    </section>
  );
}

export default function Hero() {
  const swiperRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#050816]">

      <Swiper
        modules={[
          Navigation,
          Keyboard,
          Autoplay,
          EffectFade,
        ]}

        effect="fade"

        fadeEffect={{
          crossFade: true,
        }}

        speed={1200}

        loop

        keyboard={{
          enabled: true,
        }}

        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}

        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}

        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >

        {HERO_SLIDES.map((slide, index) => (

          <SwiperSlide key={slide.id}>

            <HeroSlide

              slide={slide}

              active={activeIndex === index}

            />

          </SwiperSlide>

        ))}

      </Swiper>





      {/* LEFT ARROW */}

      <button

        ref={prevRef}

        className="
        absolute
        left-8
        top-1/2
        z-50
        -translate-y-1/2
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/50
        backdrop-blur-xl
        transition
        duration-300
        hover:border-blue-500
        hover:bg-blue-600
        "

      >

        <ChevronLeft />

      </button>





      {/* RIGHT ARROW */}

      <button

        ref={nextRef}

        className="
        absolute
        right-8
        top-1/2
        z-50
        -translate-y-1/2
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/50
        backdrop-blur-xl
        transition
        duration-300
        hover:border-blue-500
        hover:bg-blue-600
        "

      >

        <ChevronRight />

      </button>






      {/* PAGINATION */}

      <div
        className="
        absolute
        bottom-12
        left-1/2
        z-50
        flex
        -translate-x-1/2
        gap-4
        "
      >

        {HERO_SLIDES.map((_, index) => (

          <button

            key={index}

            onClick={() => swiperRef.current.slideToLoop(index)}

            className={`
            transition-all
            duration-500
            rounded-full
            h-2

            ${
              activeIndex === index

                ? "bg-blue-500 w-14"

                : "bg-white/20 w-6"

            }
            `}

          />

        ))}

      </div>
      

    </section>
    
    
  );
}