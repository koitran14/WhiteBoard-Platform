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
import dynamic from "next/dynamic";

const Page = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,  
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time: number) {
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

export default dynamic(() => Promise.resolve(Page), {ssr: false})
