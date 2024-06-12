"use client"

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Section3 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true,margin: "-200px 0px" });

    return (
        <div className="relative snap-center -z-10 mt-20 md:ml-20 ml-0" ref={ref}>
                <motion.div className="w-[200%] h-[600px] p-5 shadow-md bg-[#fffcef] border border-black rounded-2xl
                    -ml-[3.8%]
                    "
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={isInView && { opacity: 1, rotate: 0 }}
                    transition={{ type:"spring", duration: 0.5, delay: 0.5}}
                >
                    <div className="relative w-full h-full -ml-20 flex">
                        {/* section 1 */}
                        <motion.div className="flex-none">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1}}
                                className="top-16 md:left-[7%] -left-2 z-10 absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                <Image 
                                    src={'/homepage/section3/char1.svg'}
                                    width={350}
                                    height={350}
                                    alt='char1'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.1}}
                            >
                                <div className="top-44 left-[15%] md:-rotate-12  absolute h-64 w-64 md:h-80 md:w-80">
                                    <Image 
                                        src={'/homepage/section3/connector.svg'}
                                        width={350}
                                        height={350}
                                        alt='char1'    
                                        className="object-fit w-full h-full"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.3}}
                                className="bottom-36 md:top-72 z-10 left-[24%] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                <Image 
                                    src={'/homepage/section3/char2.svg'}
                                    width={350}
                                    height={350}
                                    alt='char2'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.5}}
                                className="bottom-0 rotate-90 left-[35%] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                
                                <Image 
                                    src={'/homepage/section3/connector.svg'}
                                    width={350}
                                    height={350}
                                    alt='connector2'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.3}}
                                className="top-20 z-10 left-[41%] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                <Image 
                                    src={'/homepage/section3/char3.svg'}
                                    width={350}
                                    height={350}
                                    alt='char2'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.5}}
                                className="top-[20%] left-[51.5%] -rotate-[20deg] absolute h-72 w-72 md:h-84 md:w-84"
                            >
                                
                                <Image 
                                    src={'/homepage/section3/connector.svg'}
                                    width={400}
                                    height={400}
                                    alt='connector3'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>
                        </motion.div>


                        <motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.3}}
                                className="top-28 z-10 right-[28.5%] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                <Image 
                                    src={'/homepage/section3/char4.svg'}
                                    width={350}
                                    height={350}
                                    alt='char2'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.5}}
                                className="bottom-10 right-[20%] -rotate-[20deg] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                
                                <Image 
                                    src={'/homepage/section3/connector.svg'}
                                    width={350}
                                    height={350}
                                    alt='connector3'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.3}}
                                className="bottom-3 z-10 right-[12%] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                <Image 
                                    src={'/homepage/section3/char5.svg'}
                                    width={350}
                                    height={350}
                                    alt='char2'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.5}}
                                className="bottom-10 right-[3%] rotate-[90deg] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                
                                <Image 
                                    src={'/homepage/section3/connector.svg'}
                                    width={350}
                                    height={350}
                                    alt='connector3'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1.3}}
                                className="top-10 z-10 -right-[2%] absolute h-64 w-64 md:h-80 md:w-80"
                            >
                                <Image 
                                    src={'/homepage/section3/char6.svg'}
                                    width={350}
                                    height={350}
                                    alt='char2'    
                                    className="object-fit w-full h-full"
                                />
                            </motion.div>
                        </motion.div>
                    </div>


                </motion.div>

                <motion.div 
                    className="w-[200%] h-full border border-slate-600 -z-10 shadow-md rounded-2xl absolute top-4 left-[2%] md:-left-[5%] bg-[#f1f7b5]"
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={isInView && { opacity: 1, rotate: 0 }}
                    transition={{ type:"spring", duration: 0.5, delay: 0.3}}
                />
                <motion.div 
                    className="w-[200%] h-full border border-slate-600 -z-20 shadow-md rounded-2xl absolute top-8 left-0 md:-left-[6%] bg-[#ffbd59]"
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={isInView && { opacity: 1, rotate: 0 }}
                    transition={{ type:"spring", duration: 0.5, delay: 0}}
                />

            
        </div>
    );
}
 

export default Section3;