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
  "Engineering\nthe Future\nof Business",

    description:
      "We partner with organizations worldwide to design intelligent technologies, accelerate digital transformation, and build secure, scalable solutions that create lasting business value",

    button: "Explore Solutions",
      to: "/Services",  
    image: "/digital.jpeg",
  },

  {
    id: 2,

    badge: "ARTIFICIAL INTELLIGENCE",

    title:
      "Engineering\nIntelligent\nDigital\nFutures.",

    description:
      "We design AI-powered platforms, enterprise software, cloud solutions, and digital ecosystems that help organizations innovate, scale, and lead with confidence.",

    button: "Discover AI",
    to: "/services/ArtificialIntelligence", 

    image: "/art.jpg",
  },

  {
    id: 3,

    badge: "ENTERPRISE SOLUTIONS",

    title:
      "Engineering\nWhat's Next.",

    description:
      "We design intelligent technologies, enterprise platforms, and secure digital solutions that help organizations innovate, scale, and lead with confidence.",

    button: "Get Started",
    to: "/Contact", 

    image: "/ai.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1];

function SplitHeadline({ text, active }) {
  const lines = text.split("\n");

  return (
    <div className="space-y-1 sm:space-y-2">

      {lines.map((line, lineIndex) => (

        <div
          key={lineIndex}
          className="overflow-visible pb-2 sm:pb-4"
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
                mr-2
                inline-block
                font-['Montserrat']
                text-[1.85rem]
                leading-[1.05]
                text-white
                xs:text-[2.1rem]
                mr-3
                sm:mr-6
                sm:text-[3.25rem]
                lg:text-[4.5rem]
                xl:text-[5.5rem]
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
      w-full
      items-center
      justify-center
      gap-3
      overflow-hidden
      rounded-full
      bg-gradient-to-r
      from-white
      to-white
      px-6
      py-3
      font-['Montserrat']
      text-sm
      font-bold
      text-black
      transition-all
      duration-500
      hover:scale-105
      hover:shadow-[0_15px_40px_rgba(37,99,235,.45)]
      sm:w-auto
      sm:px-8
      sm:py-4
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
    <section className="relative min-h-screen w-full overflow-hidden">
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

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-10 lg:py-28">

        {/* LEFT */}

        <div className="z-10">

         





          {/* Heading */}

          <div className="mt-8 sm:mt-10 lg:mt-12">

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
mt-4
max-w-xl
font-['Montserrat']
text-base
leading-7
text-gray-400
sm:mt-6
sm:leading-8
lg:mt-8
sm:text-lg
sm:leading-9
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

            <div className="mt-6 sm:mt-8 lg:mt-10">

          <PremiumButton
  to={slide.to}
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
        left-2
        top-1/2
        z-50
        -translate-y-1/2
        flex
        h-9
        w-9
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
        sm:left-4
        sm:h-11
        sm:w-11
        lg:left-8
        lg:h-14
        lg:w-14
        "

      >

        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />

      </button>





      {/* RIGHT ARROW */}

      <button

        ref={nextRef}

        className="
        absolute
        right-2
        top-1/2
        z-50
        -translate-y-1/2
        flex
        h-9
        w-9
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
        sm:right-4
        sm:h-11
        sm:w-11
        lg:right-8
        lg:h-14
        lg:w-14
        "

      >

        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />

      </button>






      {/* PAGINATION */}

      <div
        className="
        absolute
        bottom-6
        left-1/2
        z-50
        flex
        -translate-x-1/2
        gap-2
        sm:bottom-8
        sm:gap-3
        lg:bottom-12
        lg:gap-4
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
            h-1.5
            sm:h-2

            ${
              activeIndex === index

                ? "bg-blue-500 w-8 sm:w-10 lg:w-14"

                : "bg-white/20 w-4 sm:w-5 lg:w-6"

            }
            `}

          />

        ))}

      </div>
      

    </section>
    
    
  );
}