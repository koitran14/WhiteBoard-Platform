"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Brain, Brush, MoveRight, Users } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ProgressCircleRef {
    current: SVGSVGElement  | null;
}
  
interface ProgressContentRef {
    current: HTMLElement | null;
}

const SliderInfo = () => {
    const progressCircle = useRef<ProgressCircleRef["current"]>(null);
    const progressContent = useRef<ProgressContentRef["current"]>(null);

    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
        }
  
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <Swiper
            loop={true}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            // pagination={{
            //     clickable: true,
            //     dynamicBullets: true,
            //     dynamicMainBullets: 1,
            // }}
            modules={[Autoplay, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            speed={600}
            className='w-full h-full flex flex-col items-center justify-center'
        >
            <SwiperSlide className='w-full h-full'>
                <div className='flex items-center justify-center w-full h-full'>
                    <h1 className="text-3xl md:text-4xl inline gap-x-1  text-slate-600 py-4 px-4 md:pl-10 md:py-20 w-full h-full">
                        You need a place for {' '}
                        <span className="text-red-500 inline-flex text-4xl md:text-5xl items-center gap-x-1 font-semibold">teamworking <Users className=" w-7 h-7" /></span>
                        <span>, </span>
                        <span className="text-indigo-500 text-4xl md:text-5xl inline-flex items-center gap-x-1 font-semibold">brainstorming <Brain className="w-7 h-7 text-indigo-500"/></span>
                        
                        , and {' '} 
                        <span className="text-yellow-500 text-4xl md:text-5xl inline-flex items-center gap-x-1 font-semibold">visualizing <Brush className="w-6 h-6 text-yellow-500"/> your idea?</span>
                    </h1>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className='flex flex-col gap-y-5 md:pl-16 py-12'>
                    <div className='flex md:flex-col flex-row justify-center items-baseline gap-x-2 w-full h-full md:text-6xl text-4xl text-slate-600 '>
                        <h1>Let</h1>
                        <span className="bg-gradient-to-r font-bold from-yellow-500 via-orange-500 to-red-600 inline-block text-transparent bg-clip-text md:text-7xl text-5xl">Sketcha</span>
                        <div className='flex flex-row gap-x-2'>
                            <h1>help you</h1>
                            <span className="animate-bounce">✨</span>
                        </div>
                    </div>
                    <div className='w-full h-full md:block hidden'>
                        <Link href="/sign-in">
                            <Button className=" flex font-semibold flex-row gap-x-2 px-4 py-6 text-xl bg-gradient-to-r from-yellow-400/90 via-orange-500 to-red-500 hover:scale-105 transition ease-in-out hover:duration-900">
                                Get started
                                <MoveRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper> 
    );
}
 
export default SliderInfo;