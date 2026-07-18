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
    title:"Warehouse Automation",
    image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
  },
  {
    title:"Fleet Intelligence",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzs-mVfZyEJZcPi35_G75gGOFfF8b9sSyyH3ChCRpa2VcXZ0y6GU7F2pc&s=10"
  },
  {
    title:"AI Route Planning",
    image:"https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80"
  },
  {
    title:"Supply Chain Visibility",
    image:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80"
  },
  {
    title:"Inventory Intelligence",
    image:"https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80"
  },
  {
    title:"Smart Distribution",
    image:"https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=80"
  }
];

export default function Logistics(){

return(

<>

<section className="relative flex h-screen items-center overflow-hidden bg-black">

<img
src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2200&q=80"
className="absolute inset-0 h-full w-full object-cover scale-105"
alt=""
/>

<div className="absolute inset-0 bg-black/70"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"/>

<div className="relative z-20 mx-auto w-full max-w-7xl px-8">

<motion.p
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0}
className="mb-5 uppercase tracking-[0.45em] text-blue-400"
>


</motion.p>

<motion.h1
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.15}
className="max-w-5xl text-[clamp(4rem,7vw,7rem)] font-black leading-[0.95] text-white"
>

Intelligent
<br/>
Supply Chain
<br/>
Transformation.

</motion.h1>

<motion.p
variants={fadeUp}
initial="hidden"
animate="visible"
custom={0.3}
className="mt-8 max-w-2xl text-xl leading-9 text-gray-300"
>

Transform logistics operations through AI,
warehouse automation, connected fleets,
predictive analytics and real-time supply chain visibility.

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
animate={{y:[0,12,0]}}
transition={{
repeat:Infinity,
duration:2
}}
className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
>

<ChevronDown size={42}/>

</motion.div>

</section>
      {/* ================= SMART LOGISTICS ================= */}

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
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1800&q=80"
              alt="Smart Logistics"
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


            <h2 className="mt-6 text-6xl font-bold leading-tight text-white">

              Faster Delivery.
              <br />
              Smarter
              <br />
              Operations.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

              Modern logistics organizations rely on connected supply chains,
              intelligent automation and AI-powered visibility to optimize
              warehouse operations, transportation networks and last-mile
              delivery while reducing operational costs.

            </p>

            {/* FEATURES */}

            <div className="mt-14 space-y-7">

              {[
                "AI Route Optimization",
                "Warehouse Automation",
                "Fleet Intelligence",
                "Real-Time Shipment Tracking",
                "Inventory Optimization",
                "Predictive Supply Chain Analytics",
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
            {/* ================= LOGISTICS CAPABILITIES ================= */}

      <section className="bg-[#0B0F16] py-32">

        <div className="mx-auto max-w-7xl px-8">

          {/* Header */}

          <div className="mb-16 flex items-center justify-between">

            <div>

              
              <h2 className="max-w-4xl text-6xl font-black leading-tight text-white">

                Powering Intelligent
                <br />
                Supply Chains

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

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-3xl font-bold text-white">

                        {card.title}

                      </h3>

                      <p className="mt-5 leading-8 text-gray-300">

                        Build resilient logistics ecosystems with intelligent
                        automation, AI-powered planning, connected warehouses
                        and real-time operational visibility.

                      </p>
                    </div>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
            {/* ================= FUTURE OF LOGISTICS ================= */}

      <section className="bg-[#05070B] py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="mt-6 text-6xl font-black leading-tight text-white">

              Delivering
              <br />
              Smarter Supply
              <br />
              Chains.

            </h2>


            <p className="mt-8 text-lg leading-9 text-gray-400">

              Logistics leaders are embracing AI, automation and connected
              ecosystems to improve visibility, reduce costs and deliver
              faster customer experiences. Tec Tha helps organizations
              modernize supply chain operations with scalable digital
              platforms built for global commerce.

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
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1800&q=80"
              alt="Future Logistics"
              className="h-[760px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= LOGISTICS CTA ================= */}

      <section className="relative overflow-hidden bg-[#020617] py-36">

        {/* Background */}

        <img
          src="https://images.unsplash.com/photo-1586528116493-2f1d1b8d1d8c?w=2200&q=80"
          alt="Logistics CTA"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/80" />

        {/* Gradient */}

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


            <h2 className="mx-auto max-w-5xl text-[clamp(3.5rem,6vw,6rem)] font-black leading-tight text-white">

              Build Intelligent
              <br />
              Logistics Networks
              <br />
              At Scale.

            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-300">

              Modernize your logistics ecosystem with AI-powered
              warehouse automation, real-time fleet visibility,
              predictive supply chain intelligence and cloud-native
              logistics platforms built for global operations.

            </p>

            

          </motion.div>

        </div>

      </section>

      {/* ================= CONTACT CTA ================= */}

      <ContactCTA />

    </>
  );
}