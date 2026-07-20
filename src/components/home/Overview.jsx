import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

/**
 * Overview — Home Section 3
 * Two-column company overview directly beneath the logo strip. Left:
 * one large stat callout that anchors credibility. Right: the thesis
 * paragraph plus three differentiators. No cards, no icons-in-circles
 * cliché grid — just a clean editorial split.
 */

const NEWS = [
  {
    image: "/erp.jpeg",
    title: "Modern Enterprise Solutions",
    description:
      "Empowering organizations with scalable enterprise technology, intelligent automation, cloud-native platforms, and digital transformation strategies that improve operational efficiency, accelerate innovation, and drive long-term business growth across global industries.",
  },

  {
    image: "/ai.jpeg",
    title: "Enterprise AI That Delivers Real Results",
    description:
      "Harness the power of Artificial Intelligence to automate complex workflows, generate actionable business insights, improve customer experiences, and enable faster, data-driven decision-making across every level of your organization.",
  },

  {
    image: "/cloud.jpg",
    title: "Cloud Solutions Built For Scale",
    description:
      "Design, migrate, and optimize secure cloud environments that provide exceptional scalability, business continuity, operational resilience, and performance while reducing infrastructure complexity and accelerating digital innovation.",
  },

  {
    image: "/soft.jpg",
    title: "Smarter Software Engineering",
    description:
      "Develop modern, secure, and high-performance enterprise applications using agile engineering practices, scalable architectures, and user-centric design that support continuous innovation and evolving business requirements.",
  },

  {
    image: "/cyber.jpg",
    title: "Cyber Security Reinvented",
    description:
      "Protect critical digital assets with advanced cybersecurity solutions including threat detection, identity and access management, cloud security, compliance frameworks, and proactive risk management for modern enterprises.",
  },

  {
    image: "/at.jpg.jpeg",
    title: "Transforming Industries With AI",
    description:
      "Accelerate digital transformation across healthcare, banking, manufacturing, retail, logistics, education, and government through intelligent AI solutions that enhance productivity, optimize operations, and create sustainable business value.",
  },

  {
    image: "/future.jpeg",
    title: "Future Ready Technology",
    description:
      "Build future-ready digital ecosystems with next-generation technologies, cloud computing, enterprise AI, automation, cybersecurity, and data-driven innovation that prepare organizations for long-term success in a rapidly evolving world.",
  },
];

export default function Overview() {

const prevRef = useRef(null);

const nextRef = useRef(null);

return(

<section className="bg-white py-20">

  <div className="mx-auto max-w-[1450px] ">

    {/* Header */}

    <div className="mb-16 flex items-center justify-between">

      {/* Left */}

      <motion.h2

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{ duration: .6 }}

        className="
        font-['Montserrat']
        text-5xl
        font-medium
        tracking-tight
        text-black
        lg:text-6xl
        "

      >

        What's New

      </motion.h2>





      {/* Right */}

      <div className="flex items-center gap-5">

        <button

          ref={prevRef}

          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-gray-300
          transition
          hover:bg-black
          hover:text-white
          "

        >

          <ChevronLeft size={26} />

        </button>





        <button

          ref={nextRef}

          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-gray-300
          transition
          hover:bg-black
          hover:text-white
          "

        >

          <ChevronRight size={26} />

        </button>

      </div>

    </div>





    {/* Swiper Here */}
    <Swiper
  modules={[Navigation]}
  spaceBetween={35}
  slidesPerView={3}
  loop={true}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    },
  }}
>
   {NEWS.map((item, index) => (
    <SwiperSlide key={index}>
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group cursor-pointer"
  >
    {/* Image */}

    <div className="overflow-hidden rounded-xl">

      <img
        src={item.image}
        alt={item.title}
        className="
          h-[320px]
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-105
        "
      />

    </div>

    {/* Title */}

    <h3
      className="
        mt-8
        font-['Montserrat']
        text-[42px]
        font-medium
        leading-tight
        tracking-tight
        text-black
        transition
        duration-300
        group-hover:text-blue-600
      "
    >
      {item.title}
    </h3>

    {/* Description */}

    <p
      className="
        mt-5
        font-['Inter']
        text-lg
        leading-8
        text-gray-600
      "
    >
      {item.description}
    </p>

  </motion.article>
</SwiperSlide>
  ))}
</Swiper>

  </div>

</section>

)

}