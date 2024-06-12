"use client"

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Section4 = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-100px 0px" });
    const router = useRouter();

    useEffect(() => {
        document.body.style.transition = 'background-color 0.5s ease-in-out'

        if (isInView) {
            document.body.style.backgroundColor = "#00215E";
        } else {
            document.body.style.backgroundColor = "#ffffff"; 
        }

        if (isInView && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        return () => {
            document.body.style.transition = "";
            document.body.style.backgroundColor = ""; 

        };
    }, [isInView]);
    
    return (
        <motion.div 
            className="snap-center snap-mandatory w-[200%] mt-32 items-center justify-center -ml-[50%] h-[500px]  px-[25%] overflow-hidden flex flex-col relative gap-2"
            ref={ref}
        >
            <motion.div className="flex flex-col items-center justify-center w-screen h-screen mx-10 "
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ type: 'spring', duration: 0.5, delay: 0.4}}
            >

                <h2 className="text-3xl font-bold text-[#FFC55A] mt-4">Start Now</h2>

                <p className="text-white text-center mt-2">Explore our innovative features <br/>and take your experience to the next level.</p>

                <button 
                    className="bg-[#ef711d] hover:bg-[#FC4100] transition-all duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full mt-4"
                    onClick={() => router.push('/sign-in')}
                >
                    Get Started
                </button>
                <Image 
                    src="/homepage/section4/group.svg" 
                    width={600} 
                    height={300} 
                    alt="Group" 
                    className="mt-10"
                />

            </motion.div>
        </motion.div>
    );
}
 
export default dynamic(() => Promise.resolve(Section4), {ssr: false})
