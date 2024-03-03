"use client"

import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import HomepageContent from "../homepage/hp-content";

export default function Homepage(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="h-full w-full relative">
           <div className={cn("w-full h-20 z-20 absolute top-0 left-0 flex items-center justify-between px-8",
                isScrolled && " shadow-md shadow-slate-200"
           )}>
                <Image 
                    alt="logo"
                    src='/logo.svg'
                    width={90}
                    height={90}
                    className="hover:animate-pulse transition duration-150"
                />
                <div className="flex flex-row gap-x-2"> 
                    <Link href="/sign-in">
                        <Button className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 hover:scale-105 transition ease-in-out hover:duration-900">
                            Get started!
                        </Button>
                    </Link>

                    <Link href="/sign-in">
                        <Button variant={"outline"}>
                            Register
                        </Button>
                    </Link>
                </div>
           </div>
           <div className="pt-20">
                <HomepageContent />
           </div>
        </div>
    )
}