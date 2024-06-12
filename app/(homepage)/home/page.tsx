"use client"

import Features from "@/components/homepage/features";
import RevealOnScroll from "@/components/homepage/reveal-on-scroll";
import Section from "@/components/homepage/section";
import SliderInfo from "@/components/homepage/slider";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import dynamic from "next/dynamic";

import Section1 from "./_components/section1";
import  Section2  from "./_components/section2";
import { ScrollToTopButton } from "./_components/scrollToTop";
import Section3 from "./_components/section3";
import Section4 from "./_components/section4";

const HomePage = () => {

    return (
        <div className="w-full h-full flex flex-col gap-y-16 relatives ">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <div className="fixed bottom-[5%] right-[5%]">
                    <ScrollToTopButton/>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(HomePage), {ssr: false})
