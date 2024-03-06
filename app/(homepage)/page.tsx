/* eslint-disable @next/next/no-img-element */
import Features from "@/components/homepage/features";
import RevealOnScroll from "@/components/homepage/reveal-on-scroll";
import Section from "@/components/homepage/section";
import SliderInfo from "@/components/homepage/slider";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomePage() {
    const { userId } = auth();

    if (userId) redirect (`/${userId}`);

    return (
        <Section>
            <div className="overflow-x-hidden w-full h-full md:pt-5 flex flex-col gap-y-16"> 
            <div className="bg-gradient-to-r sm:px-1 px-2 from-yellow-200/50 via-amber-200/90 to-red-100/70 h-full w-full flex flex-col md:flex-row items-center gap-y-2 rounded-xl md:rounded-l-xl md:rounded-br-xl md:rounded-tr-[80px] backdrop-blur-md">
                <div className="md:w-[48%] px-3 w-full h-full flex flex-row items-center justify-center">
                    <SliderInfo />
                </div>
                <div className="w-full items-center px-1 md:px-0 md:w-[53%] rounded-xl hover:scale-[1.01] transition-all duration-500 ease-in-out">
                    <Image 
                        alt="intro"
                        src="/homepage/intro.png"
                        width={900}
                        height={500}
                        className="hover:bg-gradient-to-r p-1 hover:from-yellow-400 hover:via-orange-400 hover:to-red-600  md:rounded-bl-[80px] md:rounded-tr-[80px] rounded-xl"
                    />
                </div>           
            </div>

                <div className="w-full h-full flex flex-col gap-y-4">
                    <h1 className="w-full text-center text-slate-600 text-2xl">Developed by</h1>
                    <div className="w-full h-full inline-flex flex-nowrap ">
                        <ul className="flex w-fit items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                            <li><Image src="/homepage/tech-logo/nextjs.svg" alt="nextjs" width={200} height={200}/></li>
                            <li><Image src="/homepage/tech-logo/tailwind.svg" alt="tailwind" width={200} height={200}/></li>
                            <li><Image src="/homepage/tech-logo/mongo.svg" alt="mongo" width={200} height={200}/></li>
                            <li><Image src="/homepage/tech-logo/clerk.svg" alt="clerk" width={200} height={200}/></li>
                            <li><Image src="/homepage/tech-logo/liveblocks.svg" alt="liveblocks" width={320} height={320}/></li>
                        </ul>
                    </div>
                </div>
            <RevealOnScroll>
                <div className="w-full py-6 rounded-xl h-full flex flex-col gap-y-4 overflow-hidden">
                    <h1 className="w-full text-center py-4 text-4xl font-semibold text-orange-500">Features</h1>
                    <Features />
                </div>
            </RevealOnScroll>

        </div>
        </Section>
    )
}