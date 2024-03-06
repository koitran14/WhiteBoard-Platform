
// import { AboutUs } from "";
import { FileX, HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from 'next/link'
export default function Page(){
    return (
        <div className=" w-full h-full">
            <div className = "md:block hidden">
                {/* <Image
                    alt="login-login"
                    src="/login-logo.svg"
                    width={100}
                    height={100}
                /> */}
                <div>
                    <div>
                        <div className="w-full flex justify-center">
                        <h1 className="text-7xl font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text w-fit">
                            About
                        </h1>
                        </div>

                        <p className="py-10 text-center text-gray-700 text-xl">
                            We are a small passionate group with mission that help people teamworking, brainstorming and visualizing idea easily.
                        </p>
                    </div>
                    <section className="">
                        <div className="py-10">
                            <div className="flex justify-center">
                                <div className=" text-5xl font-semibold bg-gradient-to-r from-orange-300 to-red-500 text-transparent bg-clip-text w-fit py-8">
                                    Our Values
                                </div>
                            </div>
                            <div className="flex gap-x-14 px-9 justify-center">
                                <div className=" border-orange-200 border-8 rounded-lg h-96 w-80 bg-orange-300"></div>
                                <div className=" border-orange-200 border-8 rounded-lg h-96 w-80 bg-orange-300"></div>
                                <div className=" border-orange-200 border-8 rounded-lg h-96 w-80 bg-orange-300"></div>
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
                    <section className="py-10">
                        <div className="flex justify-center">
                            <h2 className="text-5xl font-semibold bg-gradient-to-r from-red-500 to-rose-300 text-transparent bg-clip-text w-fit py-3">
                                Dev Teams
                            </h2>
                        </div>
                        <div className="flex py-10 overflow-x-auto gap-x-3 justify-center">
                            {/* <div >
                                <Link href="https://github.com/koitran14" className="w-40 h-40">
                                        <Image 
                                            src="/src/KOIKOI.jpg" 
                                            alt="Tran Ngoc Dang Khoi" 
                                            width={300}
                                            height={200}
                                            className="border-2 rounded-md"
                                            />
                                </Link>
                                <div className="py-5 underline underline-offset-4 decoration-4 decoration-sky-600 hover:decoration-blue-400 ">
                                    Trần Ngọc Đăng Khôi
                                    <div>ITCSIU21197</div>
                                </div>
                            </div> */}

                            <button className="transition ease-in-out delay-150 bg-orange-200 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-orange-200 to-orange-300 duration-300 rounded-md">
                                <div >
                                    <Link href="https://github.com/koitran14" className="w-40 h-40">
                                            <Image 
                                                src="/src/KOIKOI.jpg" 
                                                alt="Tran Ngoc Dang Khoi" 
                                                width={300}
                                                height={200}
                                                className="border-2 rounded-md"
                                                />
                                    </Link>
                                    <div className="py-5 underline underline-offset-4 decoration-3 
                                                decoration-rose-600 
                                                hover:decoration-rose-400 ">
                                        Trần Ngọc Đăng Khôi
                                        <div>ITCSIU21197</div>
                                    </div>
                                </div>
                            </button>
                            <button className="transition ease-in-out delay-150 bg-orange-200 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-orange-200 to-orange-300 duration-300 rounded-md">
                                <div>
                                <Link href="https://github.com/KengG1M" className="w-40 h-40">
                                            <Image 
                                                src="/src/QIQI.jpg" 
                                                alt="Tran Phuong Quang Huy" 
                                                width={268}
                                                height={200}
                                                className="border-2 rounded-md"
                                                />
                                    </Link>
                                    <div className="py-5 
                                                    underline underline-offset-4 decoration-3 
                                                    decoration-rose-600 
                                                    hover:decoration-rose-400">
                                        Trần Phương Quang Huy
                                        <div> ITCSIU21071</div>
                                    </div>
                                </div>
                            </button>
                            {/* <div>
                            <Link href="https://github.com/KengG1M" className="w-40 h-40">
                                        <Image 
                                            src="/src/QIQI.jpg" 
                                            alt="Tran Phuong Quang Huy" 
                                            width={268}
                                            height={200}
                                            className="border-2 rounded-full"
                                            />
                                </Link>
                                <div className="py-5">
                                    Trần Phương Quang Huy
                                    <div> ITCSIU21071</div>
                                </div>
                            </div> */}
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
                        <div className="w-full h-full flex justify-center">
                            <div className="">Copyright © 2024 Sketcha. All rights reserved.</div>
                        </div>
                        
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