"use client"

import Punchline from "./_components/Punchline";
import Intro from "./_components/Introduce-member";
import Value from "./_components/Value";
import GetStart from "./_components/Getstart";
import { 
    useEffect,
    useRef,
} from "react";
import Lenis from '@studio-freight/lenis'
import dynamic from "next/dynamic";

type LenisScrollEvent = {
  scrollY: number;
  scrollX: number;
  velocity: number;
  direction: 'up' | 'down' | 'left' | 'right';
  progress: number;
};

const Page = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as Document;
      const scrollY = target.documentElement.scrollTop;
      const scrollX = target.documentElement.scrollLeft;
      console.log({ scrollY, scrollX });
    };
    
    const lenis = new Lenis({
      smoothWheel: true
    });

    lenis.on('scroll', (e: LenisScrollEvent) => {
      console.log(e);
    });

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [containerRef]);

  return (
    <div ref={containerRef}>
      <Punchline />
      <Intro />
      <Value />
      <GetStart />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
