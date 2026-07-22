import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const THINKING = [
  {
    id: 1,
    title: "Technology Should Empower Businesses Enable Organizations to Innovate and Thrive with Confidence.",
    description:
      "We transform technology into a strategic advantage that drives innovation, efficiency, and measurable business growth.",
    image: "/whyus.jpg",
  },

  {
    id: 2,
    title: "Understanding Comes Before Every Great Transformation with Deep Business Insight and a Clear Vision for the Future.",
    description:
      "Every engagement begins with listening, learning, and aligning technology with your long-term business vision.",
    image: "/wethink1.jpg",
  },

  {
    id: 3,
    title: "Innovation Delivers Its Greatest Value It Accelerates Transformation and  Sustainable Competitive Advantage..",
    description:
      "We combine strategy, design, and engineering to create digital solutions that perform reliably at enterprise scale.",
    image: "/industry.jpg",
  },

  {
    id: 4,
    title: "Building Long-Term Partnerships That Inspire Innovation and Lasting Business Value Beyond Every Engagement.",
    description:
      "Working together over the long term enables continuous innovation, sustainable growth, and lasting business value.",
    image: "/fill.avif",
  },
];
export default function HowWeThink() {

const sectionRef = useRef(null);

const [active,setActive] = useState(0);

useEffect(() => {

  const section = sectionRef.current;

  const tl = gsap.timeline({

    scrollTrigger:{

      trigger:section,

      start:"top top",

      end:"bottom bottom",

      scrub:1,

      invalidateOnRefresh:true,

      onUpdate:(self)=>{

        const progress=self.progress;

        const total=THINKING.length;

        const current=Math.min(
          total-1,
          Math.floor(progress*total)
        );

        setActive(current);

      }

    }

  });

  return()=>{

    tl.kill();

    ScrollTrigger.getAll().forEach(trigger=>trigger.kill());

  }

},[]);

return(

<section
  ref={sectionRef}
  className="
  relative
  h-[420vh]
  bg-white
  sm:h-[520vh]
  lg:h-[600vh]
  "
>

  {/* Sticky Container */}

  <div
    className="
    sticky
    top-0
    flex
    min-h-screen
    items-center
    overflow-hidden
    "
  >

  <div
  className="
  mx-auto
  grid
  h-full
  w-full
  max-w-[1900px]
  grid-cols-1
  items-center
  gap-8
  px-4
  py-12
  sm:px-6
  sm:py-16
  lg:grid-cols-2
  lg:px-14
  lg:py-0
  "
>
    <div
  className="
  sticky
  top-0
  flex
  min-h-screen
  flex-col
  justify-center
  py-8
  lg:h-screen
"
>

  <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-7">

    <div className="h-[1px] w-10 bg-blue-600 sm:w-12 lg:w-16"/>

    <span
      className="
      font-['Montserrat']
      text-lg
      font-medium
      uppercase
      tracking-[4px]
      sm:text-xl
      text-blue-800
      "
    >
      HOW WE THINK
    </span>

  </div>
<AnimatePresence mode="wait">
  <motion.div

    key={active}

    initial={{
      opacity:0,
      y:50
    }}

    animate={{
      opacity:1,
      y:0
    }}
    exit={{
  opacity:0,
  y:-40
}}

    transition={{
      duration:.7,
      ease:[0.22,1,0.36,1]
    }}

  >

    <span
      className="
      text-[3.4rem]
      font-bold
      leading-none
      sm:text-[4.5rem]
      lg:text-[90px]
      text-gray-400
      "
    >
      0{THINKING[active].id}
    </span>

    <h2
      className="
      mt-6
      

      font-['Montserrat']

      text-[2.2rem]

      font-medium

      leading-[1.1]

      tracking-tight

      text-black
      sm:text-[3rem]
      lg:text-[60px]
      "
    >

      {THINKING[active].title}

      <br/>

      <span className="text-black">

        {THINKING[active].highlight}

      </span>

    </h2>

    <p
      className="
      mt-6

      max-w-xl

      text-base

      leading-8

      text-gray-500
      sm:mt-8
      sm:text-lg
      sm:leading-9
      lg:text-xl
      lg:leading-9
      "
    >

      {THINKING[active].description}

    </p>

 </motion.div>
 </AnimatePresence>

</div>

{/* RIGHT */}

<div>

  <div className="group relative overflow-hidden rounded-[10px]">
   <AnimatePresence mode="wait">

<motion.img
key={active}

initial={{
opacity:0,
scale:1.08
}}

animate={{
opacity:1,
scale:1
}}

exit={{
opacity:0,
scale:1.08
}}

transition={{
duration:.8
}}
      src={THINKING[active].image}
      alt={THINKING[active].title}
      className="
      h-[320px]
      w-full
      object-cover
      scale-105
      sm:h-[420px]
      lg:h-[600px]
transition-transform
duration-[1800ms]
ease-out
group-hover:scale-100
      "
    />
    </AnimatePresence>

    <div
      className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/30
      via-transparent
      to-transparent
      "
    />
  </div>

</div>

      </div>

    </div>

  

</section>


)

}