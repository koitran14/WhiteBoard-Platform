import React from "react";
import "./styles.css";
import Image from "next/image";

import { 
    fadeIn,
    moveIn,
} from "../variants";
import { motion } from "framer-motion";

import { 
    Raleway,
    Noto_Sans,
    Marcellus,
    
} from "next/font/google";

import { cn } from "@/lib/utils";

import logo_darkblue from "../_assets/logo_darkblue.svg";
import logo_white from "../_assets/logo_white.svg";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
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
                        <div className="relative drop-shadow-md border border-black bg-milkwhite top-[100px] w-[400px] h-[450px] rounded-[40px] pt-[40px] p-[50px] mx-auto items-center justify-center">
                            <div className="flex flex-col mx-auto justify-center items-center">
                                <Image
                                    src={logo_darkblue}
                                    alt=""
                                    width={100}
                                />
                                <p className={cn(
                                    "relative text-darkblueheavy text-[50px] top-[-20px] font-serif font-bold",
                                    raleway.className
                                )}>Sketcha </p>
                                <p className={cn(
                                    "relative text-darkblueheavy text-[20px] top-[-25px]",
                                    notosansBold.className
                                )}>
                                    your innovation
                                </p>
                            </div>

                            <div className="flex flex-col mx-auto justify-center items-center mt-[50px] mb-[20px]">
                                <button className={cn(
                                    "bg-darkblueheavy hover:bg-darkbluelight text-milkwhite hover:text-milkwhite font-bold py-2 px-4 rounded-full",
                                    raleway.className
                                )}>
                                    <div className="flex flex-row gap-x-1">
                                        <a href="sign-up">Get started</a>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                    </div>
                                </button>
                            </div>

                            <div className="text-darkblueheavy flex flex-row gap-x-1">
                                <div>
                                    Already have an account? 
                                </div>
                                    <div className="hover:underline text-darkbluelight">
                                        <a href="sign-in">Login here...</a>
                                    </div>
                            </div>

                        </div>
                
                        
                    </motion.div>

                    {/* Texture */}
                    {/* <div className="p-[50px]">
                        <motion.svg
                            width="1800"
                            height="600"
                            viewBox="0 0 1850 600"
                            initial="hidden"
                            animate="visible"
                        > */}
                            {/* <motion.line
                                x1="50"
                                y1="600"
                                x2="1750"
                                y2="600"
                                stroke="#00cc88"
                                variants={draw}
                                custom={2}
                            /> */}
                            {/* <motion.circle
                                cx="100"
                                cy="100"
                                r="80"
                                stroke="#ff0055"
                                variants={draw}
                                custom={1}
                            /> */}
                            {/* <motion.line
                                x1="220"
                                y1="30"
                                x2="360"
                                y2="170"
                                stroke="#00cc88"
                                variants={draw}
                                custom={2}
                            /> */}
                            {/* <motion.line
                                x1="220"
                                y1="170"
                                x2="360"
                                y2="30"
                                stroke="#00cc88"
                                variants={draw}
                                custom={2.5}
                            />
                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="30"
                                rx="20"
                                stroke="#0099ff"
                                variants={draw}
                                custom={3}
                            />
                            <motion.circle
                                cx="100"
                                cy="300"
                                r="80"
                                stroke="#0099ff"
                                variants={draw}
                                custom={2}
                            />
                            <motion.line
                                x1="220"
                                y1="230"
                                x2="360"
                                y2="370"
                                stroke="#ff0055"
                                custom={3}
                                variants={draw}
                            />
                            <motion.line
                                x1="220"
                                y1="370"
                                x2="360"
                                y2="230"
                                stroke="#ff0055"
                                custom={3.5}
                                variants={draw}
                            />
                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="230"
                                rx="20"
                                stroke="#00cc88"
                                custom={4}
                                variants={draw}
                            />
                            <motion.circle
                                cx="100"
                                cy="500"
                                r="80"
                                stroke="#00cc88"
                                variants={draw}
                                custom={3}
                            />
                            <motion.line
                                x1="220"
                                y1="430"
                                x2="360"
                                y2="570"
                                stroke="#0099ff"
                                variants={draw}
                                custom={4}
                            />
                            <motion.line
                                x1="220"
                                y1="570"
                                x2="360"
                                y2="430"
                                stroke="#0099ff"
                                variants={draw}
                                custom={4.5}
                            />
                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="430"
                                rx="20"
                                stroke="#ff0055"
                                variants={draw}
                                custom={5}
                            />

                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="430"
                                rx="20"
                                stroke="#ff0055"
                                variants={draw}
                                custom={1}
                            />
                            <motion.circle
                                cx="100"
                                cy="100"
                                r="80"
                                stroke="#ff0055"
                                variants={draw}
                                custom={1}
                            />
                            <motion.line
                                x1="220"
                                y1="30"
                                x2="360"
                                y2="170"
                                stroke="#00cc88"
                                variants={draw}
                                custom={2}
                            />
                            <motion.line
                                x1="220"
                                y1="170"
                                x2="360"
                                y2="30"
                                stroke="#00cc88"
                                variants={draw}
                                custom={2.5}
                            />
                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="30"
                                rx="20"
                                stroke="#0099ff"
                                variants={draw}
                                custom={3}
                            />
                            <motion.circle
                                cx="100"
                                cy="300"
                                r="80"
                                stroke="#0099ff"
                                variants={draw}
                                custom={2}
                            />
                            <motion.line
                                x1="220"
                                y1="230"
                                x2="360"
                                y2="370"
                                stroke="#ff0055"
                                custom={3}
                                variants={draw}
                            />
                            <motion.line
                                x1="220"
                                y1="370"
                                x2="360"
                                y2="230"
                                stroke="#ff0055"
                                custom={3.5}
                                variants={draw}
                            />
                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="230"
                                rx="20"
                                stroke="#00cc88"
                                custom={4}
                                variants={draw}
                            />
                            <motion.circle
                                cx="100"
                                cy="500"
                                r="80"
                                stroke="#00cc88"
                                variants={draw}
                                custom={3}
                            />
                            <motion.line
                                x1="220"
                                y1="430"
                                x2="360"
                                y2="570"
                                stroke="#0099ff"
                                variants={draw}
                                custom={4}
                            />
                            <motion.line
                                x1="220"
                                y1="570"
                                x2="360"
                                y2="430"
                                stroke="#0099ff"
                                variants={draw}
                                custom={4.5}
                            />
                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="430"
                                rx="20"
                                stroke="#ff0055"
                                variants={draw}
                                custom={5}
                            />

                            <motion.rect
                                width="140"
                                height="140"
                                x="410"
                                y="430"
                                rx="20"
                                stroke="#ff0055"
                                variants={draw}
                                custom={1}
                            /> */}
                        {/* </motion.svg>
                    </div> */}

                    <div className="flex flex-row">
                        <div className="absolute bg-darkblueheavy w-10/12 mx-auto h-[250px] rounded-t-[50px] border-x-[1px] border-t-[1px] border-black inset-x-0 bottom-0">

                            {/* <motion.svg
                                    width="1800"
                                    height="100"
                                    viewBox="0 0 1800 600"
                                    initial="hidden"
                                    whileInView="show"
                                    animate="visible"
                                    className="absolute z-50 top-[-595px]"
                                >
                                    <motion.line
                                        x1="0"
                                        y1="600"
                                        x2="1750"
                                        y2="600"
                                        stroke="#f39c12"
                                        variants={draw}
                                        custom={2}
                                    />
                            </motion.svg> */}

                            <div className="min-h-[250px] p-[40px] flex flex-row gap-x-5">
                                <div className="flex flex-row gap-x-3 ml-[200px] mr-20">
                                    <Image
                                        src={logo_white}
                                        alt=""
                                        width={100}
                                    />
                                    <p className={cn(
                                        " my-auto text-white text-[50px] font-serif font-bold",
                                        raleway.className
                                    )}>Sketcha </p>
                                </div>
                                <div className="flex flex-col ml-5">
                                    <div className="font-semibold font-sans  lg:text-2xl text-white py-3">
                                        Help and Advice
                                    </div>
                                    <div className=" text-gray-300 text-secondary">
                                        <ul className="hover:underline">
                                            <a href="/sign-in">Getting started</a>
                                        </ul>
                                        <ul className="hover:underline">
                                            <a href="/introduction">Introduction</a>
                                        </ul>
                                        <ul className="hover:underline">Feartures</ul>
                                    </div>
                                </div>
                                <div className="relative left-[40px]">
                                    <div className="font-semibold font-sans md:text-xl lg:text-2xl text-white -z-50 py-3">
                                        About us
                                    </div>
                                    <div className="text-gray-300 text-secondary">
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
                                                {/* <p className="px-2 hover:underline">tpqhnep001@gmail.com</p> */}
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