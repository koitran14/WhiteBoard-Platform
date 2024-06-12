import React from "react";
import Image from "next/image";

import whitelogo from "../_assets/whitelogo.svg";

import { 
    Raleway,
    Noto_Sans,
    Marcellus,
    
} from "next/font/google";

import { cn } from "@/lib/utils";


const raleway = Raleway({
    subsets: ["latin"],
    weight:["600"],
});

const notosans = Noto_Sans({
    subsets: ["latin"],
    weight: ["300"],
});

const marcellus = Marcellus({
    subsets: ["latin"],
    weight: ["400"],
});

const FooterAU = () => {
    return (
        <div className="bg-darkbluelight">
            <div className="min-h-[250px] p-[50px] flex flex-row gap-x-5">
                <div className="flex flex-row gap-x-3 ml-[200px] mr-20">
                    <Image
                        src={whitelogo}
                        alt=""
                        width={100}
                    />
                    <p className={cn(
                        "relative top-[41px] text-white text-[50px] font-serif font-bold",
                        raleway.className
                    )}>Sketcha </p>
                </div>
                <div className="flex flex-col ml-5">
                    <div className="font-semibold font-sans  lg:text-2xl text-white py-3">
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
                <div className="relative left-[40px]">
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
            </div>
        </div>
    );
};

export default FooterAU;