"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "./nav-menu";

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
            <div className={cn("shadow-sm shadow-slate-200 w-full h-24 z-20 flex flex-row items-center bg-white justify-between px-8 md:px-16 transition-all duration-300 hover:shadow-md hover:shadow-slate-200",
                isScrolled && " backdrop-blur-md"
            )}>                 
               <div className="w-fit h-full group flex flex-row items-center gap-x-2">
                    <Image 
                        alt="logo"
                        src='/logo.svg'
                        width={120}
                        height={120}
                        className="group-hover:animate-pulse transition duration-150"
                    />
                    <span className="bg-gradient-to-r font-bold from-yellow-500 via-orange-500 to-red-600 hidden sm:inline-block text-transparent bg-clip-text text-2xl">Sketcha</span>
                </div>
                <div className="w-full md:flex hidden items-center justify-center">
                    <NavigationMenuDemo/>
                </div>
                <div className="flex flex-row gap-x-2"> 
                    <Link href="/sign-in">
                        <Button className="px-4 bg-gradient-to-r text-md from-yellow-400/90 via-orange-500 to-red-500 hover:scale-105 transition ease-in-out hover:duration-900">
                            Login
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button variant={"outline"}>
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
    );
}
 
export default Navbar;