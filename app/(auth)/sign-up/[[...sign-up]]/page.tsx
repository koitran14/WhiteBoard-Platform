import { SignUp } from "@clerk/nextjs";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Page (){
    return (
        <div className="w-full h-full flex justify-center items-center relative bg-[#FFFCC0] z-20 overflow-hidden">
            <div className="absolute top-10 md:left-20 left-10 z-50">
                <div className="flex flex-row gap-x-2 items-center">
                    <Link href='/' className="text-slate-800 bg-white w-10 h-10 border rounded-full flex items-center justify-center hover:text-orange-500 hover:scale-110 transition-all duration-300">
                        <Home className="w-5 h-5 "/>
                    </Link>
                   
                </div>
            </div> 
            <div className="w-full h-full flex flex-col items-center justify-center px-2 z-30 border border-black">
                <SignUp/>
            </div>
            <div className="w-[175%] h-full absolute top-[55%] bg-orange-600 rounded-[90%] z-10"/>
            <div className="w-[175%] h-full absolute top-[52%] bg-orange-300 rounded-[90%] -z-10"/>
        </div>
    )}