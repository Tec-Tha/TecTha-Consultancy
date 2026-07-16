
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const THINKING = [
  {
    id: 1,
    title: "Technology should never be the destination.",
    highlight: "It should be the advantage.",
    description:
      "Technology creates its greatest value when it empowers people, accelerates business, and delivers meaningful outcomes.",
    image: "/images/thinking/01.jpg",
  },

  {
    id: 2,
    title: "Every solution begins",
    highlight: "with understanding.",
    description:
      "We invest time in understanding your business before designing the technology that supports it.",
    image: "/images.jpg",
  },

  {
    id: 3,
    title: "Innovation without execution",
    highlight: "has no value.",
    description:
      "Ideas become meaningful only when transformed into reliable digital experiences that people trust.",
    image: "/images/thinking/03.jpg",
  },

  {
    id: 4,
    title: "Long-term partnerships",
    highlight: "create lasting success.",
    description:
      "Our work doesn't end at launch. We continue helping businesses evolve and grow.",
    image: "/images/thinking/04.jpg",
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
  max-w-[1700px]
  grid-cols-2
  items-center
  gap-24
  px-20
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

  <div className="mb-12 flex items-center gap-5">

    <div className="h-[2px] w-16 bg-blue-600"/>

    <span
      className="
      font-['Montserrat']
      text-xl
      font-medium
      uppercase
      tracking-[6px]
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
      h-[500px]
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