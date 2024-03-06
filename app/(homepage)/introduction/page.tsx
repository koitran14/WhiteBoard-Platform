import { FAQ } from "@/components/homepage/faq";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function IntroPage(){
    return (
        <div className="flex flex-col gap-y-4 md:px-20 px-4 py-2">
            <div className="flex flex-row gap-x-2 items-center">
                <Link href='/'>
                    <Home className="w-5 h-5 font-light text-slate-500"/>
                </Link> 
                <ChevronRight className="w-6 h-6 text-slate-500" />
                <h1 className="text-md">Introduction</h1>
            </div>
            <div className="">
                <h1 className="text-4xl font-semibold">Introduction</h1>
                <p className="text-slate-500 sm:w-[60%] w-full">Accelerate your design process with Sketcha — build, iterate, and create at a swift pace.</p>
            </div>
            <div className=" py-3">
                <p className="text-lg  inline">
                    Welcome to <span className="w-fit inline font-semibold text-orange-500 decoration-wavy underline">Sketcha</span>, 
                    your digital canvas for seamless collaboration. 
                    Transform ideas into reality as you work together in real-time, 
                    utilizing an array of powerful tools. {' '}
                    <span className="w-fit inline text-sky-600 font-semibold">Foster innovation</span>, {' '}
                    <span className="inline w-fit font-semibold text-rose-500">enhance communication</span>, and {' '}
                    <span className="inline w-fit font-semibold text-lime-600">elevate your team &apos;s productivity</span> {' '}
                    in this dynamic online workplace.
                </p>
            </div>

            <div className="w-[50%] h-2 border-b-2 py-2"/>

            <div className="flex flex-col gap-y-1 pt-2">
                <h1 className="font-semibold text-xl">Seamless Collaboration</h1>
                <p>Sketcha provides a digital canvas where teams can collaborate in real-time, breaking down geographical barriers and fostering seamless communication.</p>
            </div>

            <div className="w-[50%] h-2 border-b-2 py-2"/>

            <div className="flex flex-col gap-y-1 pt-2">
                <h1 className="font-semibold text-xl">Powerful Tools</h1>
                <p> With a diverse set of powerful tools, Sketcha supports brainstorming, ideation, and project management, allowing you to transform ideas into actionable plans efficiently.</p>
            </div>

            <div className="w-[50%] h-2 border-b-2 py-2"/>

            <div className="flex flex-col gap-y-1 pt-2">
                <h1 className="font-semibold text-xl">Innovation Hub</h1>
                <p>Sketcha serves as an innovation hub, enabling teams to visualize and iterate on concepts quickly. It &apos;s an ideal environment for creative thinking and problem-solving.</p>
            </div>

            <div className="w-[50%] h-2 border-b-2 py-2"/>

            <div className="flex flex-col gap-y-1 pt-2">
                <h1 className="font-semibold text-xl">Enhanced Communication</h1>
                <p>The platform facilitates clear and effective communication through visual elements, making complex ideas more accessible and promoting a deeper understanding among team members.</p>
            </div>
            
            <div className="w-[50%] h-2 border-b-2 py-2"/>

            <div className="flex flex-col gap-y-1 pt-2">
                <h1 className="font-semibold text-xl">Increased Productivity</h1>
                <p>Sketcha streamlines workflows, reducing the time spent on tedious tasks and enhancing overall productivity. Its collaborative features ensure that everyone is on the same page, leading to more efficient work processes.</p>
            </div>

            <div className="w-full h-2 border-b-2 py-2"/>

            <div className=" flex flex-col gap-y-2 py-5">
                <h1 className="text-4xl font-semibold">FAQ</h1>
                <FAQ />
            </div>

            <Link href={'/about-us'} className="w-full flex items-center justify-end">
                <Button className="flex hover:scale-105 transition duration-300 ease-in-out flex-row items-center gap-x-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                    About Us 
                    <ChevronRight className="w-6 h-6"/>
                </Button>
            </Link>
        </div>
    )
}