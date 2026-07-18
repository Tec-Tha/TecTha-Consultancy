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
      duration: .8,
      delay,
      ease: [0.22,1,0.36,1],
    },
  }),
};

const focusCards = [
  {
    title: "Omnichannel Commerce",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
  },
  {
    title: "Customer Experience",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80",
  },
  {
    title: "AI Personalization",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
  },
  {
    title: "Retail Analytics",
    image:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&q=80",
  },
  {
    title: "Inventory Intelligence",
    image:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=1200&q=80",
  },
  {
    title: "Digital Payments",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  },
];

export default function Retail() {

  return (

    <>

      {/* HERO */}

      <section className="relative flex h-screen items-center overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2200&q=80"
          alt="Retail"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent" />

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
            className="max-w-5xl text-[clamp(4rem,7vw,7rem)] font-black leading-[0.95] text-white"
          >
            Retail Through
            <br />
            Digital Innovation.

          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
          >

            Deliver seamless shopping experiences through AI,
            omnichannel commerce, intelligent inventory,
            digital payments and customer-first innovation.

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
          animate={{ y:[0,12,0] }}
          transition={{
            repeat:Infinity,
            duration:2
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >

          <ChevronDown size={42} />

        </motion.div>

      </section>
            {/* ================= MODERN RETAIL ================= */}

      <section className="bg-[#05070B] py-32">

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
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&q=80"
              alt="Modern Retail"
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

            <h2 className="mt-6 text-6xl font-black leading-tight text-white">

              Seamless Shopping.
              <br />
              Intelligent Commerce.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

              Retail is evolving beyond traditional storefronts. We help
              retailers create connected shopping experiences through AI,
              cloud platforms, personalized customer journeys and
              real-time business intelligence.

            </p>

            {/* FEATURES */}

            <div className="mt-14 space-y-7">

              {[
                "Omnichannel Commerce",
                "AI Product Recommendations",
                "Inventory Intelligence",
                "Smart POS Solutions",
                "Customer Loyalty Platforms",
                "Retail Analytics & Insights",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-5"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">

                    ✓

                  </div>

                  <p className="text-lg text-gray-200">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            

          </motion.div>

        </div>

      </section>
            {/* ================= RETAIL CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-32">

        <div className="mx-auto max-w-7xl px-8">

          {/* Header */}

          <div className="mb-16 flex items-center justify-between">

            <div>


              <h2 className="max-w-4xl text-6xl font-black leading-tight text-white">

                Creating Intelligent
                <br />
                Retail Experiences

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
                  whileHover={{ y: -10 }}
                  transition={{ duration: .35 }}
                  className="group cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-3xl font-bold text-white">

                        {card.title}

                      </h3>

                      <p className="mt-5 leading-8 text-gray-300">

                        Empowering retailers with connected commerce,
                        intelligent automation and data-driven customer
                        engagement across every touchpoint.

                      </p>

                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= FUTURE OF RETAIL ================= */}

      <section className="bg-[#05070B] py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              FUTURE OF RETAIL

            </span>

            <h2 className="mt-6 text-6xl font-black leading-tight text-white">

              Transforming
              <br />
              Shopping Into
              <br />
              Experiences.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

              Today's consumers expect seamless, personalized and connected
              experiences across every channel. We help retailers modernize
              operations through AI, cloud-native commerce platforms,
              intelligent inventory and customer engagement solutions that
              drive long-term business growth.

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
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1800&q=80"
              alt="Retail Innovation"
              className="h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= RETAIL CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-36">

        {/* Background */}

        <img
          src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=2200&q=80"
          alt="Retail CTA"
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

              SHAPING THE FUTURE OF RETAIL

            </p>

            <h2 className="mx-auto max-w-5xl text-[clamp(3.5rem,6vw,6rem)] font-black leading-tight text-white">

              Create Retail
              <br />
              Experiences That
              <br />
              Inspire Customers.

            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">

              Build connected commerce ecosystems with AI-powered customer
              experiences, intelligent inventory, omnichannel engagement
              and scalable retail technology platforms.

            </p>
         </motion.div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <ContactCTA />

    </>
  );
}