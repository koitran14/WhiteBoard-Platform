"use client"

// import { AboutUs } from "";
import { FileX, HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from 'next/link'
import {TypeAnimation} from "react-type-animation"
import {motion} from "framer-motion"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
export default function Page(){
    return (
        <div className=" w-full h-full">
            <div>
                {/* <Image
                    alt="login-login"
                    src="/login-logo.svg"
                    width={100}
                    height={100}
                /> */}
                <div>
                <section>
                        
                        <div className="w-full h-64 bg-gray-50 z-0">
                        <p className="font-semibold text-7xl text-gray-50 px-96 z-20">Who</p>
                        <p className="font-semibold text-7xl text-gray-50 px-96 z-20">Who</p>


                        <h1 className="font-semibold text-7xl text-orange-300 px-96 z-20">Who</h1>
                        <h2 className="font-semibold text-7xl text-orange-300 px-96 z-20">We are</h2>
                        </div>
                        <div className="mb-6 text-[36px] lg:text-[60px] font-serif font-semibold uppercase leading-[1] px-96 py-12">
                            <span className="text-black mr-4"></span>
                                <TypeAnimation 
                                    sequence={[
                                        'Development...',
                                        2000,
                                        'Brainstorming...',
                                        2000,
                                        'Visualization...',
                                        2000,
                                        'Colaboration...',
                                        2000,       
                                    ]}
                                    speed={50}
                                    className="text-accent text-orange-100"
                                    wrapper="span"
                                    repeat={Infinity}
                                    />
                            
                        </div>
                        <div>
                            <div className="absolute bg-gray-100 h-96 w-7/12 z-[-1] -right-0"></div>
                            <div className="flex justify-center w-full h-full py-10 gap-x-3">
                                {/* Dang Khoi____________________________________________  */}
                                <div className="group relative bottom-7 overflow-hidden border-2 
                                                border-white/50">
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
                                    <div className="absolute -bottom-full left-5 group-hover:bottom-24 
                                                    transition-all duration-500 z-50">
                                        <span className="text-white text-xl">Trần Ngọc Đăng Khôi</span>
                                    </div>
                                    {/* title */}
                                    <div className="absolute -bottom-full left-5 group-hover:bottom-14 
                                                    transition-all duration-700 z-50">
                                        <span className="text-white text-xl">
                                            ITCSIU21197
                                        </span>
                                    </div>

                                </div>
                                {/* Quang Huy----------------------------- */}
                                <div className="group relative top-7 overflow-hidden border-2 
                                                border-white/50">
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
                                    <div className="absolute -bottom-full left-5 group-hover:bottom-24 
                                                    transition-all duration-500 z-50">
                                        <span className="text-white text-xl">Trần Phương Quang Huy</span>
                                    </div>
                                    {/* title */}
                                    <div className="absolute -bottom-full left-5 group-hover:bottom-14 
                                                    transition-all duration-700 z-50">
                                        <span className="text-white text-xl">
                                            ITCSIU21071
                                        </span>
                                    </div>
                                </div>
                                <div className=" text-black px-20 py-10">
                                    <h1 className="py-6 font-serif font-semibold text-2xl">
                                        Introduce
                                    </h1>
                                    <p className="line-clamp-4">
                                        We studied at Computer Science and Engineering <br />
                                                    (VNU-HCM International University) which
                                                    a small passionate group with mission <br />that help people teamworking,  brainstorming and visualizing idea easily...
                                        <br />
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                       
                        
                    </section>
                    {/* <div>
                        <div className="w-full flex justify-center">
                        <h1 className="text-7xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text w-fit">
                            About
                        </h1>
                        </div>

                        <div className="py-10 text-center text-gray-700 text-xl">
                            We are a small passionate group with mission that help people teamworking, brainstorming and visualizing idea easily.
                        </div>
                    </div> */}
                    <section className="">
                        <div className="py-10">
                            <div className="flex justify-center">
                                <div className=" text-5xl font-semibold bg-gradient-to-r from-orange-300 to-red-500 text-transparent bg-clip-text w-fit py-8">
                                    Our Values
                                </div>
                            </div>
                            <div className="flex gap-x-14 px-9 justify-center overflow-x-auto font-sans text-xl text-center">
                                <div className=" border-orange-200 border-8 rounded-lg h-96 w-80 bg-orange-300 shrink-0">
                                    {/* <img src="/src/practice.png" alt="" /> */}
                                    <div className="px-14 py-14">
                                        <Image
                                                src="/src/practice.png" 
                                                alt="" 
                                                width={200}
                                                height={200}
                                                className="hover:scale-125 transition-all duration-500"
                                                />               
                                    </div>            
                                    <span>Practice make perfect</span>
                                </div>
                                <div className=" border-orange-200 border-8 rounded-lg h-96 w-80 bg-orange-300 shrink-0">
                                    <div className="px-14 py-14">
                                    <Image
                                                src="/src/tech.png" 
                                                alt="" 
                                                width={200}
                                                height={200}
                                                className="hover:scale-125 transition-all duration-500"
                                                />              
                                    </div>         
                                    <span>
                                        Update latest technology
                                    </span>
                                </div>
                                <div className=" border-orange-200 border-8 rounded-lg h-96 w-80 bg-orange-300 shrink-0">
                                    <div className="px-14 py-14">
                                    <Image
                                                src="/src/community.png" 
                                                alt="" 
                                                width={200}
                                                height={200}
                                                className="hover:scale-125 transition-all duration-500 justify-center items-center"
                                                />                       
                                    </div>
                                    <span>Provide value for community</span>
                                </div>
                            </div>


                        </div>

                    </section>
                    <section className="px-50">
                        <div className="flex">
                            <div className="bg-white w-1/5 h-80"></div>
                            <div className="rounded-2xl bg-orange-200 w-3/5 h-80 flex">
                                <div>
                                    <Image
                                        alt="/src"
                                        src="/src/sunflower2.svg"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="justify-center flex flex-col items-center px-20">
                                    <h1 className="text-3xl font-semibold bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text w-fit">
                                        A word from all of us
                                        </h1>
                                    <span className="h-10 w-10">        
                                    </span>
                                    <p className="text-center line-clamp-3">
                                        Tại đây tôi xin phép được nói tiếng Việt-ngôn ngữ mẹ đẻ của chúng tôi. Chúng tôi lớn lên và sinh ra tại mảnh đất hình chữ S linh thiêng. Dự án Sketcha.io lần này của tụi tôi lấy cảm hứng trên một số nguồn trên youtube và triển khai một số công nghệ phổ biến ngày nay như Next.js, TailWind, Clerk.    
                                    </p>
                                </div>
                                <div></div>
                            </div>

                            <div className="bg-white w-1/5 h-80"></div>


                        </div>
                    </section>
                    

                    <section>
                        <div className="prose mx-auto mt-14 text-center dark:prose-invert py-10 px-20">
                            <p>
                            We provide real-time connectivity to each other for discussion, 
                            brainstorming and visualizing idea enable everyone to build integrated
                            products for their project.
                            </p>
                            {/* <p>
                            Our API infrastructure is leveraged by clients ranging from
                            lenders to corporate card providers and business forecasting
                            tools, with use cases including automatic reconciliation,
                            business dashboarding.
                            </p> */}
                            <p>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="underline">Get in touch</a>
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
                                <img src="/logo.svg" alt="logo" loading="lazy"
                                        width="120" 
                                        height="120" 
                                        decoding="async" 
                                        data-nimg="1" 
                                        className="group-hover:animate-pulse transition duration-150"
                                         />
                                <span className="hidden bg-gradient-to-r font-bold text-white md:inline-block text-transparent bg-clip-text text-2xl">Sketcha</span>
                            </div>
                            <div className="py-10 px-20">
                                <div className="font-semibold font-sans text-2xl text-white -z-50 py-3">Help and Advice</div>
                                <div className="text-white text-secondary">
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
                                <div className="font-semibold font-sans text-2xl text-white -z-50 py-3">About us</div>
                                <div className="text-white text-secondary">

                                    <ul className="hover:underline">
                                        <a href="about-us">About us</a>
                                    </ul>
                                    <ul className="hover:underline">
                                        <a href="https://github.com/koitran14/WhiteBoard-Platform">GitHub</a>
                                    </ul>
                                    <ul className="hover:underline">
                                        <a href="">Contact</a>
                                    </ul>
                                    
                                </div>
                            </div>
                        </footer>
                    </section>
                    <div className="flex">
                        {/* <div className="">Trans</div>
                        <div>NightMode</div> */}
                            {/* <button className="bg-sky-500 hover:bg-sky-700 hover:ring-5 ring-cyan-950">
                            Save changes
                            </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// sua lai mau bg footer 