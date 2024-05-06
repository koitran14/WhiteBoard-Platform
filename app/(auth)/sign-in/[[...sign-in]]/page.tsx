import { SignIn } from "@clerk/nextjs";
import { Home } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Page (){
    return (
        <div className="relative w-full md:grid md:grid-cols-2 h-full md:px-28 px-0 flex justify-between items-center flex-row gap-x-5 bg-[#FFFCC0]">
            <div className="absolute top-10 md:left-20 left-10">
                <div className="flex flex-row gap-x-2 items-center">
                    <Link href='/' className="text-slate-800 bg-white w-10 h-10 border rounded-full flex items-center justify-center hover:text-orange-500 hover:scale-110 transition-all duration-300">
                        <Home className="w-5 h-5 "/>
                    </Link>
                </div>
            </div> 
            <div className="md:block hidden cursor-none">
                <Image
                    alt="login-logo"
                    src="/login-logo.svg"
                    width={500}
                    height={500}
                />
            </div>
            <div className="px-3 w-full h-full md:pr-4 flex items-center justify-center">
                <div className="relative z-20">
                    <div className=" rounded-2xl h-fit w-fit">
                        <SignIn />
                    </div>
                    <div className="w-full  rounded-2xl bg-orange-500 shadow-xl absolute h-full -z-20 top-7 left-7"/>
                    <div className="w-full  rounded-2xl bg-orange-300 absolute h-full -z-10 top-3.5 left-3.5"/>
                </div>
            </div>
        </div>
    )
}