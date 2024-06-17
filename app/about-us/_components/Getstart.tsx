import React from "react";
import "./styles.css";
import Image from "next/image";

import { 
    fadeIn,
    moveIn,
} from "../variants.js";
import { motion } from "framer-motion";

import { 
    Raleway,
    Noto_Sans,
    Marcellus,

} from "next/font/google";

import { cn } from "@/lib/utils";

import logo_darkblue from "/public/about_us/logo_darkblue.svg";
import logo_white from "/public/about_us/logo_white.svg";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i : any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const raleway = Raleway({
    subsets: ["latin"],
    weight:["600"],
});

const notosans = Noto_Sans({
    subsets: ["latin"],
    weight: ["300"],
});

const notosansBold = Noto_Sans({
    subsets: ["latin"],
    weight: ["400"],
});

const marcellus = Marcellus({
    subsets: ["latin"],
    weight: ["400"],
});


const GetStart = () => {
    return(
        <div className="bg-milkwhite">
            <div className="bg-halfpastelviolet rounded-t-[50px]">
                <div className="relative max-w-screen min-h-screen flex flex-col pt-24">
                    <motion.div
                        variants={moveIn("down", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                    >
                        <div className="relative drop-shadow-md border border-black bg-milkwhite w-[350px] rounded-[40px] top-[70px] pt-[40px] p-[50px] mx-auto items-center justify-center">
                            <div className="flex flex-col mx-auto justify-center items-center">
                                <Image
                                    src={logo_darkblue}
                                    alt=""
                                    width={100}
                                />
                                <p className={cn(
                                    "relative text-darkblueheavy text-[40px] top-[-20px] font-serif font-bold",
                                    raleway.className
                                )}>Sketcha </p>
                                <p className={cn(
                                    "relative text-darkblueheavy text-[18px] top-[-25px]",
                                    notosansBold.className
                                )}>
                                    your innovation
                                </p>
                            </div>

                            <div className="flex flex-col mx-auto justify-center items-center mt-[10px] mb-[10px]">
                                <button className={cn(
                                    "bg-darkblueheavy hover:bg-darkbluelight text-milkwhite hover:text-milkwhite font-bold py-2 px-4 rounded-full",
                                    raleway.className
                                )}>
                                    <div className="flex flex-row gap-x-1">
                                        <a href="sign-up" className="text-[13px]">Get started</a>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                    </div>
                                </button>
                            </div>

                            <div className="text-darkblueheavy flex flex-row gap-x-1">
                                <div className="text-[12.5px]">
                                    Already have an account? 
                                </div>
                                    <div className="hover:underline text-darkbluelight text-[12px]">
                                        <a href="sign-in">Login here...</a>
                                    </div>
                            </div>

                        </div>
                
                        
                    </motion.div>
 
                    <div className="flex flex-row">
                        <div className="absolute bg-darkblueheavy w-10/12 h-fit mx-auto rounded-t-[50px] border-x-[1px] border-t-[1px] border-black inset-x-0 bottom-0">
                            <div className="p-[40px] flex flex-row gap-x-5 justify-center">
                                <div className="flex flex-row gap-x-3 mr-20">
                                    <Image
                                        src={logo_white}
                                        alt=""
                                        width={80}
                                    />
                                    <p className={cn(
                                        " my-auto text-white text-[35px] font-serif font-bold",
                                        raleway.className
                                    )}>Sketcha </p>
                                </div>
                                <div className="flex flex-col ml-5">
                                    <div className="font-semibold font-sans lg:text-xl text-white py-3">
                                        Help and Advice
                                    </div>
                                    <div className=" text-gray-300 text-secondary text-[13px]">
                                        <ul className="hover:underline">
                                            <a href="/sign-in">Getting started</a>
                                        </ul>
                                        <ul className="hover:underline">
                                            <a href="/introduction">Introduction</a>
                                        </ul>
                                        <ul className="hover:underline">Features</ul>
                                    </div>
                                </div>
                                <div className="relative left-[40px]">
                                    <div className="font-semibold font-sans md:text-xl lg:text-xl text-white -z-50 py-3">
                                        About us
                                    </div>
                                    <div className="text-gray-300 text-secondary text-[13px]">
                                        <ul className="hover:underline">
                                            <a href="about-us">About us</a>
                                        </ul>
                                        <ul className="hover:underline">
                                            <a href="https://github.com/koitran14/WhiteBoard-Platform">GitHub</a>
                                        </ul>
                                        <ul className="flex">
                                            <p >Contact:</p>
                                            <p >
                                                <p className="px-2 hover:underline">tpqhnep001@gmail.com</p>
                                            </p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    {/* ----------------------------------------------- */}
            
            </div>
        </div>
    );
};

export default GetStart;