
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import dynamic from "next/dynamic";
import { Loader } from "lucide-react";

const HomePage = () => {
    const { userId } = auth();

    if (userId) 
        redirect (`/${userId}`)
    else redirect(`/home`)

    return (
        <div className="w-full h-full flex items-center justify-center">
            <Loader className="animate-spin"/>
        </div>
    )
}

export default dynamic(() => Promise.resolve(HomePage), {ssr: false})
