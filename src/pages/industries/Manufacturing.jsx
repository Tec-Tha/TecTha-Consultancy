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
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
  },
  {
    title: "Industrial IoT",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  },
  {
    title: "Predictive Maintenance",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
  },
  {
    title: "Digital Twin",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=80",
  },
  {
    title: "Automation",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80",
  },
  {
    title: "Supply Chain",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  },
];

export default function Manufacturing() {
  return (
    <>

      {/* HERO */}

      <section className="relative flex h-screen items-center overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=2200&q=80"
          alt="Manufacturing"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"></div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-8">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400"
          >
           
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="max-w-4xl text-[clamp(4rem,7vw,7rem)] font-light leading-[0.95] tracking-tight text-zinc-300"
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
            className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
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
            className="mt-12 flex gap-5"
          >

          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <ChevronDown size={42} />
        </motion.div>

      </section>
            {/* ================= SMART MANUFACTURING ================= */}

      <section className="bg-[#F8FAFC] py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden"
          >

            <img
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1800&q=80"
              alt="Smart Manufacturing"
              className="h-[720px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="mt-6 text-6xl font-light leading-tight text-[#0F172A]">

              Smart Factories.
              <br />
              Smarter Production.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Modern manufacturers are embracing Industry 4.0 technologies to
              improve production efficiency, optimize operations and deliver
              connected manufacturing ecosystems powered by AI, Industrial IoT
              and predictive analytics.

            </p>

            {/* FEATURES */}

            <div className="mt-14 space-y-7">

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
                  className="flex items-center gap-5"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-light text-white">

                    ✓

                  </div>

                  <p className="text-lg text-gray-700">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= MANUFACTURING CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-32">

        <div className="mx-auto max-w-7xl px-8">

          {/* Header */}

          <div className="mb-16 flex items-center justify-between">

            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

                MANUFACTURING CAPABILITIES

              </p>

              <h2 className="max-w-4xl text-6xl font-light leading-tight text-white">

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
            spaceBetween={30}
            slidesPerView={3.2}
            speed={900}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3.2,
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
                  className="group cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-3xl font-light text-white">

                        {card.title}

                      </h3>

                      <p className="mt-5 leading-8 text-gray-300">

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

      <section className="bg-[#F8FAFC] py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              FUTURE OF MANUFACTURING

            </span>

            <h2 className="mt-6 text-6xl font-light leading-tight text-[#0F172A]">

              Accelerating
              <br />
              Smart Factory
              <br />
              Innovation.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

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
            className="group overflow-hidden"
          >

            <img
              src="https://plus.unsplash.com/premium_photo-1661878008007-7a13bf31c14b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Manufacturing Innovation"
              className="h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= MANUFACTURING CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-36">

        {/* Background */}

        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=2200&q=80"
          alt="Manufacturing CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]" />

        {/* Content */}

        <div className="relative z-20 mx-auto max-w-7xl px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              SHAPING THE FUTURE OF MANUFACTURING

            </p>

            <h2 className="mx-auto max-w-5xl text-[clamp(3.5rem,6vw,6rem)] font-light leading-tight text-white">

              Build Intelligent
              <br />
              Manufacturing
              <br />
              At Scale.

            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">

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
      

