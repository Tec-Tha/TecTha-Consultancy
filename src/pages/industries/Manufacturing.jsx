import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import ContactCTA from "../../components/home/ContactCTA";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const focusCards = [
  {
    title: "Smart Factory",
    image:
      "/industry/37.jpg",
  },
  {
    title: "Industrial IoT",
    image:
      "/industry/38.jpg",
  },
  {
    title: "Predictive Maintenance",
    image:
      "/industry/39.jpg",
  },
  {
    title: "Digital Twin",
    image:
      "/industry/40.jpg",
  },
  {
    title: "Automation",
    image:
      "/industry/41.jpg",
  },
  {
    title: "Supply Chain",
    image:
      "/industry/21.jpg",
  },
];

export default function Manufacturing() {
  return (
    <>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

        <img
          src="/industry/42.jpg"
          alt="Manufacturing"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"></div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-3 sm:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-blue-400"
          >
           
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="max-w-full sm:max-w-2xl lg:max-w-7xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] sm:leading-[1] lg:leading-[0.95] tracking-tight text-zinc-300"
          >
            Building
            <br />
            Intelligent
            <br />
            Manufacturing.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-5 sm:mt-6 lg:mt-8 max-w-full sm:max-w-xl lg:max-w-2xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-300"
          >
            Empower manufacturing enterprises with Industry 4.0,
            intelligent automation, connected factories and
            AI-driven operational excellence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap gap-3 sm:gap-4 lg:gap-5"
          >

          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <ChevronDown className="h-8 w-8 sm:h-9 sm:w-9 lg:h-[42px] lg:w-[42px]" />
        </motion.div>

      </section>
            {/* ================= SMART MANUFACTURING ================= */}

      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-32">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-14 lg:gap-24 px-5 sm:px-6 lg:px-8 grid-cols-1 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group w-full overflow-hidden"
          >

            <img
              src="/industry/25.jpg"
              alt="Smart Manufacturing"
              className="h-[280px] sm:h-[380px] md:h-[460px] lg:h-[720px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="mt-4 sm:mt-5 lg:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#0F172A]">

              Smart Factories.
              <br />
              Smarter Production.

            </h2>

            <p className="mt-5 sm:mt-6 lg:mt-8 text-base sm:text-lg leading-7 sm:leading-8 lg:leading-9 text-gray-600">

              Modern manufacturers are embracing Industry 4.0 technologies to
              improve production efficiency, optimize operations and deliver
              connected manufacturing ecosystems powered by AI, Industrial IoT
              and predictive analytics.

            </p>

            {/* FEATURES */}

            <div className="mt-8 sm:mt-10 lg:mt-14 space-y-4 sm:space-y-5 lg:space-y-7">

              {[
                "Industrial IoT Integration",
                "AI Powered Quality Inspection",
                "Predictive Maintenance",
                "Digital Twin Technology",
                "Production Intelligence",
                "Connected Supply Chains",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 sm:gap-4 lg:gap-5"
                >

                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-base sm:text-lg font-light text-white">

                    ✓

                  </div>

                  <p className="text-base sm:text-lg text-gray-700">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= MANUFACTURING CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-16 sm:py-20 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="mb-10 sm:mb-12 lg:mb-16 flex flex-wrap items-center justify-between gap-4">

            <div>

              <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-blue-400">

                MANUFACTURING CAPABILITIES

              </p>

              <h2 className="max-w-full lg:max-w-4xl text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">

                Engineering Intelligent
                <br />
                Manufacturing Ecosystems

              </h2>

            </div>

          </div>

          {/* Slider */}

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1.15}
            speed={900}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
            }}
          >

            {focusCards.map((card) => (

              <SwiperSlide key={card.title}>

                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: .35,
                  }}
                  className="group w-full cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[380px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">

                        {card.title}

                      </h3>

                      <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base leading-6 sm:leading-7 lg:leading-8 text-gray-300">

                        Delivering scalable manufacturing platforms,
                        connected operations and AI-powered industrial
                        transformation for the factories of tomorrow.

                      </p>


                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= FUTURE OF MANUFACTURING ================= */}

      <section className="bg-[#F8FAFC] py-16 sm:py-24 lg:py-36">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-14 lg:gap-24 px-5 sm:px-6 lg:px-8 grid-cols-1 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-blue-400">

              FUTURE OF MANUFACTURING

            </span>

            <h2 className="mt-4 sm:mt-5 lg:mt-6 text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-[#0F172A]">

              Accelerating
              <br />
              Smart Factory
              <br />
              Innovation.

            </h2>

            <p className="mt-5 sm:mt-6 lg:mt-8 text-base sm:text-lg leading-7 sm:leading-8 lg:leading-9 text-gray-600">

              Tec Tha enables manufacturers to build resilient,
              intelligent and connected production ecosystems through
              Industrial IoT, AI-powered automation, cloud-native
              manufacturing platforms and real-time operational insights.

            </p>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group order-1 w-full overflow-hidden lg:order-2"
          >

            <img
              src="/industry/43.jpg"
              alt="Manufacturing Innovation"
              className="h-[280px] sm:h-[400px] md:h-[480px] lg:h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= MANUFACTURING CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-20 sm:py-28 lg:py-36">

        {/* Background */}

        <img
          src="/industry/24.jpg"
          alt="Manufacturing CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]" />

        {/* Content */}

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <p className="mb-3 sm:mb-4 lg:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-blue-400">

              SHAPING THE FUTURE OF MANUFACTURING

            </p>

            <h2 className="mx-auto max-w-full sm:max-w-2xl lg:max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white">

              Build Intelligent
              <br />
              Manufacturing
              <br />
              At Scale.

            </h2>

            <p className="mx-auto mt-6 sm:mt-8 lg:mt-10 max-w-full sm:max-w-xl lg:max-w-3xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-300">

              Unlock the power of Industry 4.0 with AI-driven automation,
              Industrial IoT, predictive analytics and connected production
              ecosystems that transform manufacturing operations.

            </p>
        </motion.div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <ContactCTA />

    </>
  );
}