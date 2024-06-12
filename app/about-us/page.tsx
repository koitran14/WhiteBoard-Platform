"use client"

import Image from "next/image";
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";
import { TeamMember } from "./_component/team-member";
import { ValueCard } from "./_component/value-card";





export default function Page() {
  return (
    <div className="w-full h-full">
        <section>
            <div className="w-full h-[190px] bg-orange-200 z-0 md:px-0 px-20">
            <p className="font-semibold text-7xl text-orange-300 md:px-20 lg:px-96 z-20">Who</p>
            <h1 className="font-semibold text-7xl text-orange-500 md:px-20 lg:px-96 z-20">Who</h1>
            <h2 className="font-semibold text-7xl text-orange-500 md:px-20 lg:px-96 z-20">We are</h2>
            </div>
            <div className="mb-6 text-[60px] lg:text-[80px] font-serif font-semibold uppercase leading-[1] px-0 lg:px-[19rem] py-12">
            <span className=""></span>
            <TypeAnimation
                sequence={[
                'Development...',
                2000,
                'Brainstorming...',
                2000,
                'Visualization...',
                2000,
                'Collaboration...',
                2000,
                ]}
                speed={50}
                className="text-orange-600 text-4xl px-20"
                wrapper="span"
                repeat={Infinity}
            />
            </div>
            <div>
                <div>
                    <section>
                        <div>
                            <div className="absolute bg-gray-100 h-96 w-8/12 z-[-1] -right-0"></div>
                            <div className="flex justify-center font-mono w-full h-full py-10 gap-x-3">
                                {/* Dang Khoi____________________________________________  */}
                                <div className="group relative bottom-7 overflow-hidden">
                                    {/*overlay */}
                                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 
                                                    transition-all duration-300">
                                    </div>
                                    
                                        <Image
                                            src="/src/KoiKoi22.jpg" 
                                            alt="Tran Ngoc Dang Khoi" 
                                            width={300}
                                            height={200}
                                            className="group-hover:scale-125 transition-all duration-500"
                                            />                       
                                    {/* title */}
                                    <div className="absolute -bottom-full md:left-3 lg:left-5 group-hover:bottom-24 
                                                    transition-all duration-500 z-50">
                                        <span className="text-white lg:text-xl">Trần Ngọc Đăng Khôi</span>
                                    </div>
                                    {/* title */}
                                    <div className="absolute -bottom-full md:left-3 lg:left-5 group-hover:bottom-14 
                                                    transition-all duration-700 z-50">
                                        <span className="text-white lg:text-xl">
                                            ITCSIU21197
                                        </span>
                                    </div>

                                </div>
                                {/* Quang Huy----------------------------- */}
                                <div className="group relative top-7 overflow-hidden ">
                                    {/*overlay */}
                                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 
                                                    transition-all duration-300">
                                    </div>
                                    <Link href="https://github.com/KengG1M" className="w-40 h-40">
                                        <Image 
                                            src="/src/QiQi22.jpg" 
                                            alt="Tran Phuong Quang Huy" 
                                            width={300}
                                            height={200}
                                            className="group-hover:scale-125 transition-all duration-500"
                                            />                       
                                    </Link>
                                    
                                    {/* title */}
                                    <div className="absolute -bottom-full md:left-1 lg:left-5 group-hover:bottom-24 
                                                    transition-all duration-500 z-50">
                                        <span className="text-white lg:text-xl">
                                            Trần Phương Quang Huy
                                        </span>
                                    </div>
                                    {/* title */}
                                    <div className="absolute -bottom-full md:left-1 lg:left-5 group-hover:bottom-14 
                                                    transition-all duration-700 z-50">
                                        <span className="text-white lg:text-xl">
                                            ITCSIU21071
                                        </span>
                                    </div>
                                </div>
                                <div className=" text-black md:px-2 lg:px-20 md:py-3 lg:py-10">
                                    <h1 className="py-6 font-serif font-semibold text-3xl">
                                        Introduce
                                    </h1>
                                    <p className="line-clamp-7 text-xl">
                                        We studied at Computer Science and Engineering <br />
                                        (VNU-HCM International University) which
                                        a small passionate group <br/>with mission that help people 
                                        teamworking,  brainstorming <br />and visualizing idea easily...
                                        <br />
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="">
                        <div className="py-10">
                            <div className="flex justify-center">
                                <div className=" text-5xl font-semibold bg-gradient-to-r
                                            from-orange-300 to-red-500 text-transparent bg-clip-text w-fit py-8">
                                    Our Values
                                </div>
                            </div>
                            <div className="flex gap-x-10 px-9 justify-center overflow-x-auto font-sans 
                                            text-xl text-center">
                                <div className=" border-orange-200 border-8 rounded-lg h-96 w-[350px]
                                                 bg-orange-300 shrink-0">
                                    {/* <img src="/src/practice.png" alt="" /> */}
                                    <div className="px-[90px] py-8">
                                        <Image
                                                src="/src/practice.png" 
                                                alt="" 
                                                width={150}
                                                height={150}
                                                className="hover:scale-125 transition-all duration-500"
                                                />               
                                    </div>            
                                    <span className="text-2xl font-sans font-semibold">
                                        Practice make perfect
                                    </span>
                                    <div className="text-lg py-3 px-2">
                                        Maintain a high bar for ourselves and the people we work with. 
                                        Continuous growth and development.
                                    </div>
                                </div>
                                <div className="border-orange-200 border-8 rounded-lg h-96 w-[350px] 
                                                bg-orange-300 shrink-0">
                                    <div className="px-[90px] py-8">
                                    <Image
                                                src="/src/tech.png" 
                                                alt="" 
                                                width={150}
                                                height={150}
                                                className="hover:scale-125 transition-all duration-500"
                                                />              
                                    </div>         
                                    <span className="text-2xl font-sans font-semibold">
                                        Update technology
                                    </span>
                                    <div className="text-lg py-3 px-4">
                                        Set ambitious goals, prioritise, hustle to execute and celebrate success!
                                    </div>

                                </div>
                                <div className="border-orange-200 border-8 rounded-lg h-96 w-[350px] 
                                                bg-orange-300 shrink-0">
                                    <div className="px-[90px] py-8">
                                    <Image
                                                src="/src/community.png" 
                                                alt="" 
                                                width={150}
                                                height={150}
                                                className=" hover:scale-125 transition-all duration-500 
                                                            justify-center items-center"
                                                />                       
                                    </div>
                                    <span className="text-2xl font-sans font-semibold">
                                        Community values
                                    </span>
                                    <div className=" text-lg py-3 px-2">
                                        Value good communication. Be open, honest and constructive with yourself, 
                                        with your team, and with the world.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-20">
                        <div className="flex justify-center">
                            <div className="rounded-2xl bg-orange-200 w-3/5 h-72 flex">
                                <div className="">
                                    <Image
                                        alt="/src"
                                        src="/src/sunflower2.svg"
                                        width={300}
                                        height={300}
                                        className="-top-2"
                                    />
                                </div>
                                <div className="justify-center flex flex-col items-center px-3">
                                    <h1 className="md:text-2xl lg:text-5xl font-semibold bg-gradient-to-r 
                                                from-orange-500 to-rose-500 text-transparent bg-clip-text w-fit
                                                line-clamp-1">
                                        A word from all of us
                                        </h1>
                                    <span className="h-6 w-10">        
                                    </span>
                                    <p className="md:px-3 text-center font-serif md:text-xl lg:text-3xl">
                                        Dream big, stay positive,<br /> work hard, and enjoy the journeys.    
                                    </p>
                                </div>
                                <div className="">
                                    <Image
                                        alt="/src"
                                        src="/src/sunflower1.png"
                                        width={280}
                                        height={280}
                                        className="-top-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="prose mx-auto text-center dark:prose-invert py-5 px-20">
                            <p>
                            We provide real-time connectivity to each other for discussion, 
                            brainstorming and visualizing idea enable everyone to build integrated
                            products for their project.
                            </p>

                            <p>
                            <a  href="https://github.com/koitran14/WhiteBoard-Platform" 
                                className="underline">Get in touch</a>
                            </p>
                        </div>
                        
                    </section>
                    <section>
                        <footer className="bg-amber-800 w-full h-60 flex flex-row ">
                            <div className="group flex flex-row items-center gap-x-2 px-20">
                                {/* <img    alt="logo" 
                                        loading="lazy"
                                        width="120" 
                                        height="120" 
                                        decoding="async" 
                                        data-nimg="1" 
                                        className="group-hover:animate-pulse transition duration-150" 
                                        style="color:transparent" 
                                        src="/logo.svg"> */}
                                        <Image src="/logo.svg" alt="logo" loading="lazy"
                                            width="120" 
                                            height="120" 
                                            decoding="async" 
                                            data-nimg="1" 
                                            className="group-hover:animate-pulse transition duration-150"
                                         />
                                <span className="hidden bg-gradient-to-r font-bold text-white md:inline-block 
                                                text-transparent bg-clip-text text-2xl">
                                    Sketcha
                                </span>
                            </div>
                            <div className="py-10 md:px-10 lg:px-20">
                                <div className="font-semibold font-sans md:text-xl lg:text-2xl text-white -z-50 py-3">
                                    Help and Advice
                                </div>
                                <div className=" text-gray-300 text-secondary">
                                    <ul className="hover:underline">
                                        <a href="/sign-in">Getting started</a>
                                    </ul>
                                    <ul className="hover:underline">
                                        <a href="/introduction">Introduction</a>
                                    </ul>

                                    <ul className="hover:underline">Feartures</ul>
                                </div>
                            </div>
                            <div className="py-10">
                                <div className="font-semibold font-sans md:text-xl lg:text-2xl text-white -z-50 py-3">
                                    About us
                                </div>
                                <div className="text-gray-300 text-secondary">

                                    <ul className="hover:underline">
                                        <a href="about-us">About us</a>
                                    </ul>
                                    <ul className="hover:underline">
                                        <a href="https://github.com/koitran14/WhiteBoard-Platform">GitHub</a>
                                    </ul>
                                    <ul className="flex">
                                        <p >Contact:</p>
                                        <p >
                                            <p className="px-2 hover:underline">tpqhnep001@gmail.com</p>
                                            <p className="px-2 hover:underline">tpqhnep001@gmail.com</p>
                                        </p>
                                    </ul>
                                    
                                </div>
                            </div>
                            
                        </footer>
                        <div className="w-full bg-amber-800">
                                <p className="w-full py-3 flex items-center justify-center 
                                            text-center text-sm text-slate-200">
                                    @ 2024 UnIpin, Inc. All rights reserved.
                                </p>
                        </div>
                    </section>
                </div>
            </div>
            
        </section>

        <section className="">
            <div className="py-10">
                <div className="flex justify-center">
                    <div className=" text-5xl font-semibold bg-gradient-to-r from-orange-300 to-red-500 text-transparent bg-clip-text w-fit py-8">
                    Our Values
                    </div>
                </div>
                <div className="flex gap-x-10 px-9 justify-center overflow-x-auto font-sans text-xl text-center">
                    <ValueCard
                        imageSrc="/src/practice.png"
                        title="Practice make perfect"
                        description="Maintain a high bar for ourselves and the people we work with. Continuous growth and development."
                    />
                    <ValueCard
                        imageSrc="/src/tech.png"
                        title="Update technology"
                        description="Set ambitious goals, prioritise, hustle to execute and celebrate success!"
                    />
                    <ValueCard
                        imageSrc="/src/community.png"
                        title="Community values"
                        description="Value good communication. Be open, honest and constructive with yourself, with your team, and with the world."
                    />
                </div>
            </div>
        </section>
        <section className="py-20">
            <div className="flex justify-center">
                <div className="rounded-2xl bg-orange-200 w-3/5 h-72 flex">
                    <div className="">
                        <Image
                            alt="/src"
                            src="/src/sunflower2.svg"
                            width={300}
                            height={300}
                             className="-top-2"
                        />
                    </div>
                    <div className="justify-center flex flex-col items-center px-3">
                        <h1 className="md:text-2xl lg:text-5xl font-semibold bg-gradient-to-r 
                            from-orange-500 to-rose-500 text-transparent bg-clip-text w-fit
                            line-clamp-1">
                                A word from all of us
                        </h1>
                        <span className="h-6 w-10"/>        
                        <p className="md:px-3 text-center font-serif md:text-xl lg:text-3xl">
                            Dream big, stay positive,<br /> work hard, and enjoy the journeys.    
                        </p>
                    </div>
                    <div className="">
                        <Image
                            alt="/src"
                            src="/src/sunflower1.png"
                            width={280}
                            height={280}
                            className="-top-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
