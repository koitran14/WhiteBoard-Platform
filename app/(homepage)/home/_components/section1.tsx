"use client"

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Section1 = () => {
    const router = useRouter();

    return (
        <motion.div className="w-full md:h-[550px] h-fit p-5 shadow-md bg-[#fffcef] border border-black rounded-2xl
            md:grid md:grid-cols-2 flex flex-col-reverse gap-5 md:justify-center items-center relative snap-center
        "
            initial={{ scale: 0, }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.3, delay: 0 }}        
            
        >
        <motion.div 
            className="absolute top-10 right-[5%] py-2 px-4 bg-white border border-black rounded-3xl
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
        </motion.div >
        <div className="relative w-full md:h-full h-[500px] ml-16">
            <motion.div
                className="absolute top-4 left-[190px] z-20"
                initial={{ scale: 0, }}
                animate={{ scale: 1, y: 5 }}
                exit={{ scale: 1, y: 0}}
                transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.5 }}
            >
                <Image 
                    src={'/homepage/section1/heart.svg'}
                    width={45}
                    height={45}
                    alt="heart"
                    className="rotate-[35deg] animate-pulse"
                />
            </motion.div>
            <motion.div
                className="absolute top-5 left-[190px] z-20"
                initial={{ scale: 0, }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.7 }}
            >
                <Image 
                    src={'/homepage/section1/signature.svg'}
                    width={200}
                    height={200}
                    alt="signature"
                    className=""
                />
            </motion.div>
            <motion.div
                className="absolute top-10 left-10 z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
            >
                <Image 
                    src={'/homepage/section1/boy.svg'}
                    width={200}
                    height={200}
                    alt="boy"
                />
            </motion.div>
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute top-56 left-20"
            >
                <Image 
                    src={'/homepage/section1/girl.svg'}
                    width={400}
                    height={400}
                    alt="girl"
                />
            </motion.div>
        </div>
        <div className="flex w-full md:h-full h-fit justify-center md:mt-0 mt-20 md:ml-20 ml-[20%] flex-col">
            <motion.div className="relative w-full">
                <h1 className="text-4xl underline decoration-wavy text-orange-400 font-medium">sketcha</h1>
                <motion.div
                    className="absolute -top-12 left-32 z-20"
                    initial={{ scale: 0, }}
                    animate={{ scale: 1.1, y: 5 }}
                    exit={{ scale: 1, y: 0}}
                    transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.7 }}
                >
                    <Image 
                        src={'/homepage/section1/bubble.svg'}
                        width={60}
                        height={60}
                        alt="bubble"
                        className=" "
                    />
                </motion.div>
            </motion.div>
            <div className="md:w-[60%] w-[80%]">
                <p className="text-5xl tracking-wide text-black mt-2 ">
                    <span className="text-red-600">brainstorm</span>,<br/>
                    <span className="text-blue-800">text</span>,{' '}
                    <span className="text-green-600">visualizer</span>
                </p>
                <p className="text-2xl mt-2">an ideal workplace with powerful tools for teamworking.</p>
                <Button className=" mt-4 border h-10 overflow-hidden group border-black rounded-2xl w-fit hover:bg-lime-300" 
                    variant={'outline'}
                    onClick={() => router.push('/introduction')}
                > 
                    Explore
                    <Image
                        width={200}
                        height={200}
                        src={'/homepage/section1/pointer.svg'}
                        alt="pointer"
                        className="-ml-2 group-hover:translate-x-2 transition-all duration-300"
                    />
                </Button>
           </div>
        </div>
       
        </motion.div >
    );
}

export default dynamic(() => Promise.resolve(Section1), {ssr: false})
