// "use client"

// import Image from "next/image";
// import Link from 'next/link';
// import { TypeAnimation } from "react-type-animation";
// import { TeamMember } from "./_component/team-member";
// import { ValueCard } from "./_component/value-card";

// import Punchline from "./_component/Punchline";
// import Intro from "./_component/Introduce-member";
// import Value from "./_component/Value";
// import GetStart from "./_component/Getstart";
// import { 
//     useState,
//     useEffect
// } from "react";
// import Lenis from '@studio-freight/lenis'

// const Page = () => {

//     const [dimension, setDimension] = useState({width:0, height:0});
//     const { height } = dimension;

//     useEffect( () => {
//         const lenis = new Lenis()
    
//         const raf = (time: any) => {
//           lenis.raf(time)
//           requestAnimationFrame(raf)
//         }
    
//         const resize = () => {
//           setDimension({width: window.innerWidth, height: window.innerHeight})
//         }
    
//         window.addEventListener("resize", resize)
//         requestAnimationFrame(raf);
//         resize();
    
//         return () => {
//           window.removeEventListener("resize", resize);
//         }
//       }, [])

//     return (
//         <div>
//             <Punchline/>
//             <Intro/>
//             <Value/>
//             <GetStart/>
//         </div>
//     );
// };
// export default Page;

"use client";

import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Punchline from "./_component/Punchline";
import Intro from "./_component/Introduce-member";
import Value from "./_component/Value.js";
import GetStart from "./_component/Getstart";

const Page = () => {
  // const [dimension, setDimension] = useState({ width: 0, height: 0 });
  // const { height } = dimension;  

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   const raf = (time : any) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   const resize = () => {
  //     setDimension({ width: window.innerWidth, height: window.innerHeight });
  //   };

  //   window.addEventListener("resize", resize);
  //   requestAnimationFrame(raf);
  //   resize();

  //   return () => {
  //     window.removeEventListener("resize", resize);
  //   };
  // }, []);

  return (
    <div>
      <Punchline />
      <Intro />
      <Value />
      <GetStart />
    </div>
  );
};

export default Page;
