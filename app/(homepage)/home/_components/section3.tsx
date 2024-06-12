"use client"
import { Hint } from "@/components/ui/hint";
import { 
    motion, 
    useInView, 
    useScroll,
    useTransform,
    useSpring 
} from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
  
const Section3 = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true,margin: "-200px 0px" });
    const router = useRouter();
    const ghostRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);

    useLayoutEffect(() => {
        if (ref.current) {
            setScrollRange(ref.current.clientWidth);
        }
    }, []);

    const onResize = useCallback((entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
        setViewportW(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        if (ghostRef.current) {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
        }
    }, [onResize]);

    const { scrollYProgress } = useScroll();
    const transform = useTransform(
        scrollYProgress,
        [0.4, 0.7],
        [scrollRange  , -scrollRange + viewportW ]
    );
    const physics = { damping: 5, mass: 0.27, stiffness: 10 };
    const spring = useSpring(transform, physics);
    
    return (
        <motion.section 
            className="relative snap-center -z-10 mt-20 w-full" 
            ref={ref}
            style={{ x: spring}}
        >
                <motion.div className="w-[200%] h-[600px] p-5 shadow-md bg-[#F1F7B5] border  border-black rounded-2xl overflow-x-auto no-scrollbar
                    -ml-[3.8%]
                    "
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={isInView && { opacity: 1, rotate: 0 }}
                    transition={{ type:"spring", duration: 0.5, delay: 0.5}}
                >
                    <div className="relative w-full h-full -ml-20">
                        {/* section 1 */}
                        <motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView && { opacity: 1 }}
                                transition={{ type:"spring", duration: 0.5, delay: 1}}
                                className="top-16 left-[7%] z-10 absolute h-64 w-64 md:h-80 md:w-80"
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

                        {/* section 2 */}
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
{/* 
                        <motion.div 
                            className="absolute top-10 right-[5%] py-2 px-4 bg-white z-20 border border-black rounded-3xl
                            flex flex-row gap-x-3"
                            initial={{ scale: 0, }}
                            animate={{ scale: 1.1 }}
                            transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0 }}        
                        >
                            <Hint label={"You"} side="bottom">
                                <motion.div 
                                    className="rounded-full border border-black bg-orange-400 w-[35px] h-[35px] overflow-hidden"
                                    initial={{ scale: 0, }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.3 }}        
                                >
                                    <Image
                                        src="/homepage/section1/ava1.svg"
                                        alt="ava1"
                                        width={60}
                                        height={60}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div >
                            </Hint>
                            <Hint label={"Herry"} side="bottom">
                                <motion.div
                                    className="rounded-full border border-black bg-green-400 w-[35px] h-[35px] overflow-hidden"
                                    initial={{ scale: 0, }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.5 }} 
                                >
                                    <Image
                                        src="/homepage/section1/ava2.svg"
                                        alt="ava1"
                                        width={35}
                                        height={35}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            </Hint>
                            <Hint label={"More"} side="bottom">
                                <motion.div 
                                    className="w-[35px] h-[35px] rounded-full border border-black flex items-center justify-center"
                                    initial={{ scale: 0, }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.7 }} 
                                >
                                    <p className="text-sm">+1</p>
                                </motion.div>
                            </Hint>
                        </motion.div > */}
                    

                        <div className="absolute z-40 top-6 left-[50%] flex flex-col items-center justify-center w-fit">
                            <h1 className="w-full text-center text-4xl font-medium text-orange-500">Teamwork</h1>
                            <p className="text-xl"> never be a problem with {' '}
                                <span className="text-orange-500 font-semibold">Sketcha</span>
                            </p>
                        </div>
                    </div>

                    

                </motion.div>

                <motion.div 
                    className="w-[200%] h-full border border-slate-600 -z-10 shadow-md rounded-2xl absolute top-4 left-[2%] md:-left-[5%] bg-[#FFC55A]"
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={isInView && { opacity: 1, rotate: 0 }}
                    transition={{ type:"spring", duration: 0.5, delay: 0.3}}
                />
                <motion.div 
                    className="w-[200%] h-full border border-slate-600 -z-20 shadow-md rounded-2xl absolute top-8 left-0 md:-left-[6%] bg-[#FC4100]"
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={isInView && { opacity: 1, rotate: 0 }}
                    transition={{ type:"spring", duration: 0.5, delay: 0}}
                />         
        </motion.section>
    );
}
 

export default Section3;