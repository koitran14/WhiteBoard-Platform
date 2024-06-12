"use client"

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BoxOfBalls } from "./technologiesBall";
import dynamic from "next/dynamic";

const Section2 = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });

    const balls = [
    { logo: '/homepage/section2/logo/1.svg', bgColor: '#FC4100' },
    { logo: '/homepage/section2/logo/2.svg', bgColor: '#FFC55A' },
    { logo: '/homepage/section2/logo/3.svg', bgColor: '#00215E' },
    { logo: '/homepage/section2/logo/4.svg', bgColor: '#2C4E80' },
    { logo: '/homepage/section2/logo/5.svg', bgColor: '#6E99D6' },
    { logo: '/homepage/section2/logo/6.svg', bgColor: '#00215E' },
];


    useEffect(() => {
        if (isInView && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isInView]);


    return (
        <div className="relative snap-center -z-10" ref={ref}>
            <motion.div className="w-[105%] md:h-[550px] h-fit p-5 shadow-md bg-[#004aad] border-2 border-slate-500 rounded-2xl
                -ml-[10%]"
                initial={{ opacity: 0, rotate: -30 }}
                animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -30 }}
                transition={{ type:"spring", duration: 0.5, delay: 0.5}}
            >
                <div className="md:grid md:grid-cols-2 flex flex-col gap-5 
                    md:justify-center items-center relative h-full w-full p-5 border-4 border-white rounded-2xl"
                >
                    <div className="relative w-full md:h-full h-[500px] ml-16 flex items-end mb-20">
                        <motion.div
                            className="absolute -top-[50%] -left-[50%] z-20"
                            initial={{ scale: 0, }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1, y: 0}}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.7 }}
                        >
                            <Image 
                                src={'/homepage/section2/heart-string.svg'}
                                width={600}
                                height={600}
                                alt="heart" 
                            />
                        </motion.div>
                    
                        <div className="relative flex flex-col gap-y-1 ml-10 w-full">
                            <h1 className="text-5xl underline decoration-wavy text-yellow-400 font-medium">technologies</h1>
                            <motion.div
                                className="absolute -top-48 left-72 z-20"
                                initial={{ scale: 0, }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.7 }}
                            >
                                <Image 
                                    src={'/homepage/section2/bubbles.svg'}
                                    width={220}
                                    height={220}
                                    alt="bubble"
                                />
                            </motion.div>
                            <div className="mt-2">
                                <p className="text-2xl text-white w-80">the tools, frameworks, and platforms crucial to our project&apos;s success.</p>
                            </div>
                        
                        </div>
                        
                    </div>

                    <div className="md:block hidden">
                        {isInView && 
                            <BoxOfBalls balls={balls} boxWidth={630} boxHeight={475} ballRadius={60} />
                        }
                    </div>

                </div>       
            </motion.div>

            <motion.div 
                className="md:w-[108%] w-[106%] h-full border border-slate-600 -z-10 shadow-md rounded-2xl absolute top-5 -left-[10.5%] md:-left-[9.5%] rotate-[4deg] bg-yellow-200"
                initial={{ opacity: 0, rotate: -30 }}
                animate={isInView ? { opacity: 1, rotate: 4 } : {}}
                transition={{ type:"spring", duration: 0.5, delay: 0}}
            />
            
        </div>
    );
}
 
export default dynamic(() => Promise.resolve(Section2), {ssr: false})
