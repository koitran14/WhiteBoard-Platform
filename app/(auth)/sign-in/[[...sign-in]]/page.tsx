import { SignIn } from "@clerk/nextjs";
import { Home } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Page (){
    return (
        <div className="relative w-full md:grid md:grid-cols-2 h-full md:px-28 px-0 flex justify-between items-center flex-row gap-x-5 bg-gradient-to-tr from-yellow-200 via-orange-200 to-red-200">
            <div className="absolute top-8 left-12">
                <div className="flex flex-row gap-x-2 items-center">
                    <Link href='/' className="text-slate-600 hover:text-orange-500 hover:scale-110 transition-all duration-300">
                        <Home className="w-5 h-5 "/>
                    </Link>
                    <div className="text-xl text-slate-700">/</div>
                    <div className="text-xl text-slate-600">Sign In</div>
                </div>
            </div> 
            <div className="md:block hidden">
                <Image
                    alt="login-logo"
                    src="/login-logo.svg"
                    width={500}
                    height={500}
                />
            </div>
            <div className="w-full h-full md:pr-4 pr-0 flex items-center md:justify-end justify-center">
                <SignIn />
            </div>
        </div>
    )
}