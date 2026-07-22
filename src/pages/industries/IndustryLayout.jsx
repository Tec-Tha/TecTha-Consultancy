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

      <section className="relative h-screen overflow-hidden">

        <img
          src="/industry/19.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        <div className="relative z-20 flex h-full items-center">

          <div className="mx-auto max-w-7xl px-8">

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
              className="max-w-4xl text-5xl leading-tight text-white"
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
              className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <ChevronDown size={38}/>
        </motion.div>

      </section>
      {/* ================= INDUSTRIES GRID ================= */}

<section className="bg-[#05070B] py-32">

  <div className="mx-auto max-w-7xl px-8">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
     className="mb-24"
    >

      <h2 className="max-w-4xl text-6xl leading-tight text-white">

        Solutions Engineered
For     Every Industry.

      </h2>

      <p className="mt-4 max-w-3xl text-xl leading-9 text-gray-400">

        From healthcare and finance to manufacturing and logistics, we engineer secure, scalable digital platforms that empower organizations to innovate, transform and grow.

      </p>

    </motion.div>



    <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={30}
  slidesPerView={4.2}
  speed={800}
  breakpoints={{
    0: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  }}
>
  {industries.map((industry, index) => (
    <SwiperSlide
  key={industry.title}
  onClick={() =>
  navigate(`/industries/${industry.slug}`)
}
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
        className="group overflow-hidden bg-[#111827] cursor-pointer"
      >
        {/* IMAGE */}

        <div className="relative h-[560px] overflow-hidden">

          <img
            src={industry.image}
            alt={industry.title}
            className="h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-125"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          {/* Bottom Content */}

          <div className="absolute bottom-0 left-0 right-0 p-8">

            <h3 className="text-3xl font-light text-white">

              {industry.title}

            </h3>

            <p className="mt-4 leading-8 text-gray-300">

              {industry.desc}

            </p>

            <button className="mt-8 flex items-center gap-3 text-blue-400 transition-all duration-300 group-hover:gap-5">

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

<section className="relative overflow-hidden bg-[#030712] py-40">

  {/* Background */}

  <img
    src="/industry/20.jpg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/75" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/70 to-[#020617]/90" />

  <div className="relative z-20 mx-auto max-w-7xl px-8">

    <motion.div
      initial={{ opacity:0,y:50 }}
      whileInView={{ opacity:1,y:0 }}
      viewport={{ once:true }}
      transition={{ duration:.8 }}
      className="text-center"
    >

      <p className="mb-5 uppercase tracking-[0.45em] text-blue-400">

        LET'S BUILD THE FUTURE

      </p>

      <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.05] tracking-tight text-white">

        Ready To Transform
        <br />
        Your Industry?

      </h2>

      <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">

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