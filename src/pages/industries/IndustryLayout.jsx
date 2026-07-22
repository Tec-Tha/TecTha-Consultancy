import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import healthcareImg from "../../assets/images/industries/healthcare.jpg";
import manufacturingImg from "../../assets/images/industries/manufacturing.jpg";
import retailImg from "../../assets/images/industries/retail.jpg";
import bankingImg from "../../assets/images/industries/banking.jpg";
import educationImg from "../../assets/images/industries/education.jpg";
import logisticsImg from "../../assets/images/industries/logistics.jpg";
import governmentImg from "../../assets/images/industries/government.jpg";
import professionalImg from "../../assets/images/industries/professional.jpg";

import "swiper/css";
import "swiper/css/navigation";

const industries = [
  {
    title: "Healthcare",
    slug: "healthcare",
    image: healthcareImg,
    desc: "Building intelligent digital healthcare ecosystems powered by AI.",
  },

  {
    title: "Manufacturing",
    slug: "manufacturing",
    image: manufacturingImg,
    desc: "Accelerating Industry 4.0 with automation and predictive analytics.",
  },

  {
    title: "Retail",
    slug: "retail",
    image: retailImg,
    desc: "Delivering seamless omnichannel retail experiences.",
  },

  {
    title: "Banking",
    slug: "banking",
    image: bankingImg,
    desc: "Secure banking platforms and AI-driven financial intelligence.",
  },

  {
    title: "Education",
    slug: "education",
    image: educationImg,
    desc: "Empowering digital campuses and personalized learning.",
  },

  {
    title: "Logistics",
    slug: "logistics",
    image: logisticsImg,
    desc: "Transforming global supply chains with intelligent logistics.",
  },

  {
    title: "Government",
    slug: "government",
    image: governmentImg,
    desc: "Modernizing public services with secure digital platforms.",
  },

  {
    title: "Professional Services",
    slug: "professional-services",
    image: professionalImg,
    desc: "Helping enterprises transform through consulting and innovation.",
  },
];

export default function IndustryLayout() {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO */}

      {/*
        min-h-[100dvh] is used instead of a bare min-h-screen for mobile/tablet so the
        hero never gets clipped/jumps behind mobile browser chrome (address bar, etc).
        At lg+ it falls back to min-h-screen, identical to the original desktop behavior.
      */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden lg:min-h-screen">

        <img
          src="/industry/19.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        <div className="relative z-20 flex h-full w-full items-start pt-24 pb-16 sm:pt-28 sm:pb-0 lg:pt-36 xl:pt-40">

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">

            <motion.p
              initial={{ opacity:0,y:20 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ duration:.6 }}
              className="mb-5 uppercase tracking-[0.4em] text-blue-400"
            >
              
            </motion.p>

            <motion.h1
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ duration:.7 }}
              className="max-w-4xl break-words text-4xl leading-tight text-white sm:text-6xl lg:text-7xl"
            >
              Engineering
<br />
Innovation
<br />
Delivered.
            </motion.h1>

            <motion.p
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-8 sm:text-lg sm:leading-9 lg:text-xl lg:leading-9"
            >
              We help engineering organizations
modernize operations,
adopt intelligent automation,
and build scalable digital solutions.
            </motion.p>

          </div>

        </div>

        <motion.div
          animate={{ y:[0,10,0] }}
          transition={{
            repeat:Infinity,
            duration:2
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white sm:bottom-10"
        >
          <ChevronDown size={32} className="sm:hidden" />
          <ChevronDown size={38} className="hidden sm:block" />
        </motion.div>

      </section>
      {/* ================= INDUSTRIES GRID ================= */}

<section className="w-full overflow-x-hidden bg-[#05070B] py-16 sm:py-20 lg:py-32">

  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
     className="mb-10 sm:mb-12 lg:mb-24"
    >

      <h2 className="max-w-4xl break-words text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">

        Solutions Engineered
For     Every Industry.

      </h2>

      <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-9 lg:text-xl lg:leading-9">

        From healthcare and finance to manufacturing and logistics, we engineer secure, scalable digital platforms that empower organizations to innovate, transform and grow.

      </p>

    </motion.div>



    <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={16}
  slidesPerView={1.05}
  speed={800}
  className="w-full"
  breakpoints={{
    0: {
      slidesPerView: 1.05,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }}
>
  {industries.map((industry, index) => (
    <SwiperSlide
  key={industry.title}
  onClick={() =>
  navigate(`/industries/${industry.slug}`)
}
  className="h-auto w-full"
>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.12,
          duration: 0.7,
        }}
        className="group relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[#111827] cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
      >
        <div className="flex h-full w-full flex-col overflow-hidden">
          {/* IMAGE */}

          <div className="relative h-[210px] w-full overflow-hidden sm:h-[280px] lg:h-[560px]">

            <img
              src={industry.image}
              alt={industry.title}
              className="h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-125"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent lg:block" />
          </div>

          {/* Bottom Content */}

          <div className="flex w-full min-w-0 flex-col p-4 sm:p-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:z-10 lg:p-8 lg:pt-20 lg:bg-gradient-to-t lg:from-black/90 lg:via-black/40 lg:to-transparent">

            <h3 className="break-words text-xl font-light text-white sm:text-2xl lg:text-3xl">

              {industry.title}

            </h3>

            <p className="mt-2 break-words text-sm leading-6 text-gray-300 sm:mt-4 sm:text-base sm:leading-8">

              {industry.desc}

            </p>

            <button className="mt-4 flex flex-wrap items-center gap-2 text-blue-400 transition-all duration-300 group-hover:gap-4 sm:mt-6 sm:gap-3 sm:group-hover:gap-5 lg:mt-8">

              Explore Solutions

              <ArrowRight size={18} />

            </button>

          </div>
        </div>

      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

  </div>

</section>

{/* ================= CTA SECTION ================= */}

<section className="relative w-full overflow-hidden bg-[#030712] py-16 sm:py-20 lg:py-40">

  {/* Background */}

  <img
    src="/industry/20.jpg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/70 to-[#020617]/90" />

  <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">

    <motion.div
      initial={{ opacity:0,y:50 }}
      whileInView={{ opacity:1,y:0 }}
      viewport={{ once:true }}
      transition={{ duration:.8 }}
      className="text-center"
    >

      <p className="mb-4 break-words uppercase tracking-[0.3em] text-blue-400 sm:mb-5 sm:tracking-[0.45em]">

        LET'S BUILD THE FUTURE

      </p>

      <h2 className="break-words text-3xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">

        Ready To Transform
        <br />
        Your Industry?

      </h2>

      <p className="mx-auto mt-6 max-w-3xl break-words text-base leading-7 text-gray-300 sm:mt-10 sm:text-lg sm:leading-9 lg:text-xl lg:leading-9">

        Partner with Tec Tha to modernize operations,
        accelerate innovation,
        and build secure, scalable enterprise platforms
        powered by cloud, AI and next-generation technology.

      </p>

    </motion.div>

  </div>

</section>

</>
);
}