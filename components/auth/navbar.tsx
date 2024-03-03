"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
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
            <div className={cn("w-full h-24 z-20 flex items-center bg-white justify-between px-8 transition-all duration-300 hover:shadow-md hover:shadow-slate-200",
                isScrolled && " shadow-md shadow-slate-200 backdrop-blur-md bg-transparent"
            )}>                 
                <Image 
                    alt="logo"
                    src='/logo.svg'
                    width={100}
                    height={100}
                    className="hover:animate-pulse transition duration-150"
                />
                <div className="flex flex-row gap-x-2"> 
                    <Link href="/sign-in">
                        <Button className="bg-gradient-to-r text-md from-yellow-400/90 via-orange-500 to-red-500 hover:scale-105 transition ease-in-out hover:duration-900 p-2">
                            Get started for free!
                        </Button>
                    </Link>
                </div>
        </div>
    );
}
 
export default Navbar;