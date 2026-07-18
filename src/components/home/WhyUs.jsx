
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
  h-[600vh]
  bg-white
  "
>

  {/* Sticky Container */}

  <div
    className="
    sticky
    top-0
    flex
    h-screen
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
  grid-cols-2
  items-center
  gap-8
  px-14
  "
>
    <div
  className="
  sticky
  top-0
  flex
  h-screen
  flex-col
  justify-center
"
>

  <div className="mb-8 flex items-center gap-7">

    <div className="h-[1px] w-16 bg-blue-600"/>

    <span
      className="
      font-['Montserrat']
      text-xl
      font-medium
      uppercase
      tracking-[4px]
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
      text-[90px]
      font-bold
      leading-none
      text-gray-400
      "
    >
      0{THINKING[active].id}
    </span>

    <h2
      className="
      mt-6
      

      font-['Montserrat']

      text-[60px]

      font-medium

      leading-[1.1]

      tracking-tight

      text-black
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
      mt-8

      max-w-xl

      text-xl

      leading-9

      text-gray-500
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
      h-[600px]
      w-full
      object-cover
     scale-105
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