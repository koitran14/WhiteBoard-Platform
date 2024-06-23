"use client"
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

const quicksandB = Quicksand({
  subsets: ["latin"],
  weight: ["600"]
});  

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
                <div className="relative flex flex-col mx-[150px] top-[-30px] ">

                  <div className="relative flex flex-row gap-x-10">
                    <div className={cn(
                      "lg:text-[120px] text-[90px] text-redplum font-bold",
                      quicksandB.className
                    )}>
                      make                
                    </div>

                    <div className={cn(
                      "lg:text-[120px] text-[90px] text-redplum",
                      quicksandB.className
                    )}>
                      
                      it
                    </div>
                  </div>
                  <div className={cn(
                    "relative flex flex-row text-oceantext place-self-end",
                    quicksandB.className
                  )}>
                    <div className="text-[25px] font-bold">
                        <span className="underline decoration-slice mr-[10px]">
                          Distance
                        </span>
                        
                          is no longer a hindrance to coming up with ideas together
                        
                    </div>
                    <div className="relative top-[-45px] text-[120px]">
                      <p className="flex flex-row gap-x-[30px]">
                        <p className="text-redplum">
                          into
                        </p> 
                        <span className="text-milkwhite bg-redplum">
                          <TypeAnimation
                          sequence={[
                          'reality',
                          2000,
                          
                          ]}
                          speed={30}
                          className={cn(
                            "text-milkwhite text-[120px]",
                            quicksandB.className
                          )}
                          wrapper="span"
                          repeat={Infinity}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
};


export default Punchline;

