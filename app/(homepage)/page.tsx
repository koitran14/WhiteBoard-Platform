import SliderInfo from "@/components/homepage/slider";
import { auth } from "@clerk/nextjs";
import { Brain, Brush, Users } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomePage() {
    const { userId } = auth();

    if (userId) redirect (`/${userId}`);

    return (
        <div className="w-full h-full"> 
            <div className="bg-gradient-to-r from-yellow-100 via-amber-100 to-red-200 h-full w-full flex flex-col md:flex-row items-center gap-y-2 rounded-xl md:rounded-l-xl md:rounded-br-xl md:md:rounded-tr-[80px] backdrop-blur-md">
                <div className="md:w-[47%] px-4 w-full h-full flex flex-row items-center justify-center">
                    <SliderInfo />
                </div>
                <div className="w-full px-1 md:px-0 md:w-[53%] rounded-xl hover:scale-[1.01] transition-all duration-500 ease-in-out">
                    <Image 
                        alt="intro"
                        src="/homepage/intro.png"
                        width={900}
                        height={400}
                        className="hover:bg-gradient-to-r p-1 hover:from-yellow-400 hover:via-orange-400 hover:to-red-600  md:rounded-bl-[80px] md:rounded-tr-[80px] rounded-xl"
                    />
                </div>           
            </div>
        </div>
    )
}