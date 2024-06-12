"use client"

import Image from "next/image";
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";
import { TeamMember } from "./_component/team-member";
import { ValueCard } from "./_component/value-card";

import Punchline from "./_component/Punchline";
import Intro from "./_component/Introduce-member";
import WordUs from "./_component/Word-from-us";
import Value from "./_component/Value";
import GetStart from "./_component/Getstart";
import FooterAU from "./_component/Footer";
import { 
    useState,
    useEffect
} from "react";
import Lenis from '@studio-freight/lenis'

const Page = () => {

    const [dimension, setDimension] = useState({width:0, height:0});
    const { height } = dimension;

    useEffect( () => {
        const lenis = new Lenis()
    
        const raf = (time: any) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        const resize = () => {
          setDimension({width: window.innerWidth, height: window.innerHeight})
        }
    
        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();
    
        return () => {
          window.removeEventListener("resize", resize);
        }
      }, [])

    return (
        <div>
            <Punchline/>
            <Intro/>
            {/* <WordUs/> */}
            <Value/>
            <GetStart/>
            {/* <FooterAU/> */}
        </div>
    );
};

export default Page;


// "use client";

// import { Carousel } from "flowbite-react";

// export default function Page() {
//   return (
//     <div className="w-full h-full">
//       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel>
//         <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
//       </Carousel>
//     </div>
//     </div>
//   );
// };
