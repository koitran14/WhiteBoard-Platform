"use client"


import Punchline from "./_components/Punchline";
import Intro from "./_components/Introduce-member";
import Value from "./_components/Value";
import GetStart from "./_components/Getstart";
import { 
    useState,
    useEffect,
    useRef
} from "react";
import Lenis from '@studio-freight/lenis'

const Page = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll',(e) => {
      console.log(e);
    });

    function raf(time : any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    
    <div ref={containerRef}>
      <Punchline />
      <Intro />
      <Value />
      <GetStart />
    </div>
  );
};

export default Page;
