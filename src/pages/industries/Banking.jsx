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
    title: "Digital Banking",
    image: "/industry/1.jpg",
  },
  {
    title: "Fraud Detection",
    image: "/industry/2.jpg",
  },
  {
    title: "Open Banking",
    image: "/industry/3.jpg",
  },
  {
    title: "Risk Analytics",
    image: "/industry/4.jpg",
  },
  {
    title: "Core Banking",
    image: "/industry/5.jpg",
  },
  {
    title: "Wealth Management",
    image: "/industry/6.jpg",
  },
];

export default function Banking() {
  return (
    <>
      {/* HERO */}

      <section className="relative flex h-screen items-center overflow-hidden bg-black">

        <img
          src="/industry/7.jpg"
          alt="Banking"
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
            Banking & Financial Services
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="max-w-4xl text-7xl font-light leading-[0.95] text-white"
          >
            Reinventing
            <br />
            Banking 
           
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
          >
            Deliver secure, intelligent and customer-centric financial
            experiences through AI, cloud platforms, real-time analytics and
            enterprise banking solutions.
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
            {/* ================= DIGITAL BANKING ================= */}

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
              src="/industry/8.jpg"
              alt="Digital Banking"
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

            <span className="text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

              DIGITAL BANKING

            </span>

            <h2 className="mt-6 text-6xl font-light leading-tight text-[#0F172A]">

              Secure Banking.
              <br />
              Intelligent Decisions.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Financial institutions are transforming customer experiences
              with AI-powered banking, real-time payments, fraud detection,
              cloud-native platforms and intelligent financial insights that
              improve efficiency, trust and long-term growth.

            </p>

            {/* FEATURES */}

            <div className="mt-14 space-y-7">

              {[
                "AI Fraud Detection",
                "Digital Payment Platforms",
                "Core Banking Modernization",
                "Open Banking APIs",
                "Risk & Compliance Analytics",
                "Customer Experience Automation",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-5"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-light text-white">

                    ✓

                  </div>

                  <p className="text-lg text-gray-600">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            

          </motion.div>

        </div>

      </section>
            {/* ================= FINANCIAL CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-32">

        <div className="mx-auto max-w-7xl px-8">

          {/* Header */}

          <div className="mb-16 flex items-center justify-between">

            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-blue-400">

                FINANCIAL CAPABILITIES

              </p>

              <h2 className="text-6xl font-light leading-tight text-white">

                Solutions That Power
                <br />
                Modern Banking

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
                  transition={{ duration: 0.35 }}
                  className="group cursor-pointer overflow-hidden bg-[#111827]"
                >

                  <div className="relative h-[560px] overflow-hidden">

                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-3xl font-light text-white">

                        {card.title}

                      </h3>

                      <p className="mt-5 leading-8 text-gray-300">

                        Enterprise-grade banking platforms designed to improve
                        customer trust, operational efficiency and regulatory
                        compliance.

                      </p>

                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= FUTURE OF FINANCE ================= */}

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

              FUTURE OF FINANCE

            </span>

            <h2 className="mt-6 text-6xl font-light leading-tight text-[#0F172A]">

              Banking Built
              <br />
              For The
              <br />
              Digital Era.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Financial institutions require resilient, scalable and secure
              platforms to support millions of daily transactions.
              We engineer cloud-native banking ecosystems that improve
              operational efficiency, strengthen cybersecurity and
              deliver seamless customer experiences across every channel.

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
              src="/industry/9.jpg"
              alt="Future Banking"
              className="h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= BANKING CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-36">

        {/* Background */}

        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=2200&q=80"
          alt="Banking CTA"
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

              REIMAGINE BANKING

            </p>

            <h2 className="mx-auto max-w-5xl text-7xl font-light leading-tight text-white">

              Build The Next
              <br />
              Generation Of
              <br />
              Banking.

            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">

              Empower financial institutions with secure cloud platforms,
              intelligent automation, AI-driven decision making and
              seamless digital experiences that redefine modern banking.

            </p>


          </motion.div>

        </div>

      </section>

      {/* ================= CONTACT CTA ================= */}

      <ContactCTA />

    </>
  );
}