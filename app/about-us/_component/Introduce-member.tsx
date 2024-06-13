import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn, moveIn } from "../variants.js";

import { 
    Raleway,
    Noto_Sans,
    Marcellus,
    Quicksand
    
} from "next/font/google";

import { cn } from "@/lib/utils";

import dangkhoi from "/public/about_us/dangkhoi.jpg";
import quanghuy from "/public/about_us/quanghuy.jpg";

import charDK from "/public/about_us/charDK.svg";
import charQH from "/public/about_us/charQH.svg";

const raleway = Raleway({
    subsets: ["latin"],
    weight:["400"],
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
    weight: ["300"]
});

const quicksandB = Quicksand({
    subsets: ["latin"],
    weight: ["400"]
});

const draw = {
    hidden: { pathLength: 0, opacity: 0, strokeWidth: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        strokeWidth: 0.5,  // Thêm thuộc tính strokeWidth với giá trị mong muốn
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          strokeWidth: { delay, duration: 1.5 }  // Thêm transition cho strokeWidth
        }
      };
    }
  };
  

const Intro = () => {
    return (
        <div className="bg-milkwhite">
            <   div className="relative bg-white px-[50px] pt-[158px] pb-[50px] max-w-screen min-h-screen rounded-b-[50px]">
                {/* <div>
                        <motion.svg
                                width="1808"
                                height="800"
                                viewBox="0 0 1800 800"
                                initial="hidden"
                                whileInView="show"
                                animate="visible"
                                viewport={{once: false, amount: 0.6 }}

                                className="absolute z-10"
                            > */}
                                {/* <motion.line
                                    x1="926px"
                                    y1="0px"
                                    x2="926px"
                                    y2="800px"
                                    stroke="#000"
                                    variants={draw}
                                    custom={1}
                                />
                                <motion.rect
                                    width="1801"
                                    height="798"
                                    x="-3"
                                    y="1"
                                    rx="20"
                                    stroke="#000"
                                    variants={draw}
                                    custom={3}
                                /> */}
                        {/* </motion.svg>
                </div> */}
                
                <motion.div 
                    variants={fadeIn("bottom", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className="
                    relative
                    bg-oceantext rounded-[20px] px-[100px] py-[50px] h-[80%] w-full 
                    
                ">
                    <div className="relative
                        grid grid-rows-2 grid-flow-col gap-y-[50px] 
                        content-between  
                        z-20
                    ">
                    {/* Khoi */}
                        {/* Image */}
                        <div className="items-center gap-8">   
                            <motion.div
                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                            >
                                <div className="relative rounded-l-[30px]
                                    bg-gradient-to-r from-white to-oceantext
                                    xl:w-full xl:h-fit 
                                    w-[500px] h-[250px] 
                                    mx-auto
                                    flex flex-col
                                    p-[10px]
                                    "
                                >
                                    {/* Image */}
                                    <div>
                                        <Image
                                        src={dangkhoi}
                                        alt=""
                                        width={450}
                                        className="relative rounded-[20px] "
                                        />

                                        <Image
                                        src={charDK}
                                        alt=""
                                        width={227}
                                        className="absolute 
                                            xl:left-[460px] xl:top-[-2px] 
                                            left-[190px] top-[-250px]
                                            "
                                        />
                                    </div>
                                    {/* Button */}
                                    <div className="flex flex-row gap-x-4 mt-[10px]">
                                        {/* 1 */}
                                        <div>
                                            <button className={cn(
                                                "bg-white hover:bg-oceantext text-black hover:text-milkwhite font-bold py-2 px-4 rounded-full border border-oceantext hover:border-white",
                                                raleway.className
                                            )}>
                                            
                                                <div className="flex flex-row gap-x-1">
                                                    <a href="https://www.instagram.com/khoitran1403/">Instagram</a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                </div>
                                            </button>
                                        </div>
                                        {/* 2 */}
                                        {/* <div>
                                            <button className={cn(
                                                "bg-white hover:bg-freshorange text-black hover:text-milkwhite font-bold py-2 px-4 rounded-full w-[130px]",
                                                raleway.className
                                            )}>
                                            
                                                <div className="flex flex-row gap-x-1 items-center justify-center">
                                                    <a href="sign-up">Facebook</a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                    
                                                </div>
                                            </button>
                                        </div> */}
                                        {/* 3 */}
                                        <div>
                                            <button className={cn(
                                                "bg-white hover:bg-oceantext hover:border text-black hover:text-milkwhite font-bold py-2 px-4 rounded-full border border-oceantext hover:border-white",
                                                raleway.className
                                            )}>
                                            
                                                <div className="flex flex-row gap-x-1">
                                                    <a href="https://github.com/koitran14">Github</a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                </div>
                                            </button>
                                        </div>

                                        {/* ID */}
                                        {/* <div>
                                            <button className={cn(
                                                "bg-white hover:bg-freshorange text-black hover:text-milkwhite font-bold py-2 px-4 rounded-full",
                                                quicksandB.className
                                            )}>
                                            
                                                <div className="flex flex-row gap-x-1">
                                                    | ITCSIU21071

                                                </div>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* Text's QH */}
                        <div className="justify-self-end content-end"> 
                            <motion.div
                                variants={fadeIn("left", 1.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                                className="relative mr-[50px]"
                            >
                                <h2 className={cn(
                                    "text-white xl:text-[90px] text-[50px]",
                                    quicksandB.className

                                )}>
                                    Quang Huy
                                </h2>
                                <p className={cn(
                                    "text-white xl:text-[40px] text-[20px] place-self-end",
                                    quicksandB.className
                                )}>
                                    Front-end Dev
                                </p>
                            </motion.div>
                        </div>
                        {/* Text's DK*/}
                        <div>
                            <motion.div
                                variants={fadeIn("right", 1.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                                className="relative ml-[50px] content-end"
                            >
                                <h2 className={cn(
                                    "text-white xl:text-[90px] text-[50px]",
                                    quicksandB.className

                                )}>
                                    Đăng Khôi
                                </h2>
                                <p className={cn(
                                    "relative text-white xl:text-[40px] text-[20px]",
                                    quicksandB.className
                                )}>
                                    Full-stack Dev
                                </p>
                            </motion.div>
                        </div>
                        {/* Image QH*/}
                        <div>
                            <motion.div
                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.6 }}
                            >
                                <div className="relative rounded-r-[30px]
                                    
                                    bg-gradient-to-l from-white to-oceantext

                                    xl:w-full xl:h-fit 
                                    w-[500px] h-[250px] 
                                    mx-auto
                                    flex flex-col
                                    px-[10px] pt-[10px] pb-[10px]
                                    gap-y-[10px]
"
                                >   
                                    <div className="flex flex-row gap-x-4 place-self-end">
                                        {/* 1 */}
                                        <div>
                                            <button className={cn(
                                                "bg-white hover:bg-oceantext text-black hover:text-milkwhite font-bold py-2 px-4 rounded-full border border-oceantext hover:border-white",
                                                raleway.className
                                            )}>
                                            
                                                <div className="flex flex-row gap-x-1">
                                                    <a href="https://www.instagram.com/quengqii/">Instagram</a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                </div>
                                            </button>
                                        </div>
                                        {/* 2 */}
                                        {/* <div>
                                            <button className={cn(
                                                "bg-white hover:bg-freshorange text-black hover:text-milkwhite font-bold py-2 px-4 rounded-full w-[130px]",
                                                raleway.className
                                            )}>
                                            
                                                <div className="flex flex-row gap-x-1 items-center justify-center">
                                                    <a href="sign-up">Facebook</a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                    
                                                </div>
                                            </button>
                                        </div> */}
                                        {/* 3 */}
                                        <div>
                                            <button className={cn(
                                                "bg-white hover:bg-oceantext hover:border text-black hover:text-milkwhite font-bold py-2 px-4 rounded-full border border-oceantext hover:border-white",
                                                raleway.className
                                            )}>
                                            
                                                <div className="flex flex-row gap-x-1">
                                                    <a href="https://github.com/KengG1M">Github</a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <Image
                                    src={quanghuy}
                                    alt=""
                                    width={450}
                                    className="relative rounded-[20px] place-self-end  "
                                    />

                                    <Image
                                    src={charQH}
                                    alt=""
                                    width={226}
                                    className="absolute 
                                        xl:left-[-50px] xl:top-[-1px] 
                                        left-[190px] top-[-250px]
                                        "
                                    />
                                    
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Intro;