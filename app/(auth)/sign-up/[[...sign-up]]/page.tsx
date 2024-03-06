import { SignUp } from "@clerk/nextjs";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Page (){
    return (
        <div className="w-full h-full flex justify-center items-center relative bg-gradient-to-tr from-yellow-200 via-orange-200 to-red-200">
            <div className="absolute top-10 md:top-8 md:left-20 left-10">
                <div className="flex flex-row gap-x-2 items-center">
                    <Link href='/' className="text-slate-500 hover:text-orange-500 hover:scale-110 transition-all duration-300">
                        <Home className="w-5 h-5 "/>
                    </Link>
                    <div className="text-xl text-slate-700">/</div>
                    <div className="text-lg font-medium text-black">Sign Up</div>
                </div>
            </div> 
            <div className="w-full h-full flex flex-col items-center justify-center px-2">
                <SignUp/>
            </div>
        </div>
    )}