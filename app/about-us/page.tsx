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
            <div className="absolute bg-gray-100 h-96 w-8/12 z-[-1] -right-0"></div>
            <div className="flex flex-row justify-center font-mono w-full h-full py-10 md:px-16 px-8 gap-x-3 ">
                <div className="w-full h-full flex-row flex gap-x-2">
                    <div className="items-start flex flex-col h-full">
                        <TeamMember name="Trần Ngọc Đăng Khôi" id="ITCSIU21197" imageSrc="/src/KoiKoi22.jpg" />
                    </div>
                    <div className=" h-full flex flex-col items-end">
                        <TeamMember name="Trần Phương Quang Huy" id="KengG1M" imageSrc="/src/QiQi22.jpg" />
                    </div>
                </div>
                <div className="text-black md:px-2 lg:px-20 md:py-3 lg:py-10">
                <h1 className="py-6 font-serif font-semibold text-3xl">Introduce</h1>
                <p className="line-clamp-7 text-xl">
                    We are currently juniors at Computer Science and Engineering <br />
                    (VNU-HCM International University) which a small passionate group <br />
                    with a mission to help people collaborate, brainstorm, and visualize ideas easily...
                    <br />
                </p>
                </div>
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