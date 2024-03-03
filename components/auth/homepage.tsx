"use client"

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import HomepageContent from "../homepage/hp-content";
import Navbar from "./navbar";

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
            <HomepageContent />
            <HomepageContent /><HomepageContent /><HomepageContent /><HomepageContent /><HomepageContent />
        </div>
    )
}