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
      "/industry/61.jpg",
  },
  {
    title: "Customer Experience",
    image:
      "/industry/62.jpg",
  },
  {
    title: "AI Personalization",
    image:
      "/industry/63.jpg",
  },
  {
    title: "Retail Analytics",
    image:
      "/industry/64.jpg",
  },
  {
    title: "Inventory Intelligence",
    image:
      "/industry/65.jpg",
  },
  {
    title: "Digital Payments",
    image:
      "/industry/66.jpg",
  },
];

export default function Retail() {

  return (

    <>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

        <img
          src="/indsutry/67.jpg"
          alt="Retail"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

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
            className="max-w-5xl text-5xl font-light leading-[0.95] text-white sm:text-6xl lg:text-7xl"
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
            className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:mt-8 sm:text-lg sm:leading-9 lg:text-xl lg:leading-9"
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

      <section className="overflow-x-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-32">

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
              src="/industry/68.jpg"
              alt="Modern Retail"
              className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[480px] lg:h-[720px]"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="mt-6 text-4xl font-light leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">

              Seamless Shopping.
              <br />
              Intelligent Commerce.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Retail is evolving beyond traditional storefronts. We help
              retailers create connected shopping experiences through AI,
              cloud platforms, personalized customer journeys and
              real-time business intelligence.

            </p>

            {/* FEATURES */}

            <div className="mt-8 space-y-5 sm:mt-14 sm:space-y-7">

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

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-base font-light text-white sm:h-11 sm:w-11 sm:text-lg">

                    ✓

                  </div>

                  <p className="text-base text-gray-700 sm:text-lg">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            

          </motion.div>

        </div>

      </section>
            {/* ================= RETAIL CAPABILITIES ================= */}

      <section className="overflow-x-hidden bg-[#0B0F16] py-20 sm:py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="mb-10 flex items-start sm:mb-16 sm:items-center sm:justify-between">

            <div>


              <h2 className="max-w-4xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl">

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

                  <div className="relative h-[320px] overflow-hidden sm:h-[460px] lg:h-[560px]">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-2xl font-light text-white sm:text-3xl">

                        {card.title}

                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-300 sm:mt-5 sm:text-base sm:leading-8">

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

      <section className="overflow-x-hidden bg-[#F8FAFC] py-20 sm:py-28 lg:py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">

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

            <h2 className="mt-6 text-4xl font-light leading-tight text-[#0F172A] sm:text-5xl lg:text-7xl">

              Transforming
              <br />
              Shopping Into
              <br />
              Experiences.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

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
              src="/industry/69.jpg"
              alt="Retail Innovation"
              className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[480px] lg:h-[760px]"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= RETAIL CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-20 sm:py-28 lg:py-36">

        {/* Background */}

        <img
          src="/industry/70.jpg"
          alt="Retail CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]" />

        {/* Content */}

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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

            <h2 className="mx-auto max-w-5xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl">

              Create Retail
              <br />
              Experiences That
              <br />
              Inspire Customers.

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-300 sm:mt-10 sm:text-lg sm:leading-9 lg:text-xl lg:leading-9">

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