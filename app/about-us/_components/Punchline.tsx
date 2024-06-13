import React from "react";
import Image from "next/image";
import { 
  Raleway,
  Noto_Sans,
  Marcellus,
  Quicksand,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";

import punchline from "/public/about_us/punchline.svg";
import { motion } from "framer-motion";



const raleway = Raleway({
  subsets: ["latin"],
  weight:["300"],
});

const notosans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400"]
})

import { fadeIn, moveIn } from "../variants.js";


const Punchline = () => {
    return (
      <div className="bg-white">
        <motion.div 
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="bg-yellowsuperpastel"
        >
          <div className="bg-cover bg-center "> 
            <div className="relative pt-32 px-[80px] pb-[50px] max-w-screen min-h-screen ">
                {/* Image */}
                <div className="relative w-[98%] mx-auto">
                  <Image
                    src={punchline}
                    alt=""
                    width={1500}
                    className="relative rounded-[20px] border border-black "
                  />
                </div>
                {/* Text  */}
                <div className="relative flex flex-col mx-[200px]">

                  <div className="relative flex flex-row gap-x-10">
                    <div className={cn(
                      "lg:text-[100px] text-[90px] text-black",
                      quicksand.className
                    )}>
                      make                
                    </div>

                    <div className={cn(
                      "lg:text-[100px] text-[90px] text-milkwhite",
                      quicksand.className
                    )}>
                      <TypeAnimation
                      sequence={[
                      'it',
                      2000,
                      'brainstorming',
                      2000,
                      'visualization',
                      2000,
                      'collaboration',
                      2000,
                      ]}
                      speed={30}
                      className={cn(
                        "text-black text-[100px]",
                        quicksand.className
                      )}
                      wrapper="span"
                      repeat={Infinity}
                      />
                      
                    </div>
                  </div>
                  <div className={cn(
                    "relative top-[-30px] text-[100px]  text-black place-self-end",
                    quicksand.className
                  )}>
                    <p>
                      into reality
                    </p>
                  </div>
                </div>
                {/* Slider 2 */}
                {/* <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
                  <div>
                    <img src="../_assets/banner.png" alt="" />

                  </div>
                </div> */}
              
              {/* </Carousel> */}
            </div>
          </div>
        </motion.div>
      </div>
    );
};


export default Punchline;


// "use client";

// import { Carousel } from "flowbite-react";

// const Punchline = () => {
//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel>
//         <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
//       </Carousel>
//     </div>
//   );
// }

// export default Punchline;