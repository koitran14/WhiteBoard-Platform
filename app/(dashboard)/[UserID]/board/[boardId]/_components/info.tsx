"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { Hint } from "@/components/hint"
import { useRenameModal } from "@/store/use-rename-modal";
import { Actions } from "@/components/action"
import { Menu } from "lucide-react"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

const TabSeparator = () => {
    return (
        <div className="text-neutral-300 px-1.5">|</div>
    )
}

export const Info = () => {
    const { onOpen } = useRenameModal();

    const data = { _id:"abc", title: "test"};

    if (!data) return <InfoSkeleton />

    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Hint label="Go to boards" side="bottom" sideOffset={10}>
                <Button asChild className="px-2" variant="board">
                    <Link href="/">
                        <Image alt="logo" src={"/logo.svg"} width={40} height={40}/>
                        <span className={cn(
                            "font-semibold text-xl ml-2 text-black", font.className
                        )}>
                            Board
                        </span>
                    </Link>
                </Button>
            </Hint>
            <TabSeparator />
            <Hint label="Rename" side="bottom" sideOffset={10}>
                <Button variant="board" className="text-base font-normal px-2"
                    onClick={() => onOpen(data._id, data.title)}
                >
                    {data.title}
                </Button>
            </Hint>
            <TabSeparator />
            <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
                <div>
                    <Hint label="Main menu" side="bottom" sideOffset={10}>
                        <Button size="icon" variant="board">
                            <Menu/>
                        </Button>
                    </Hint>
                </div>
            </Actions>
        </div>
    )
}

export const InfoSkeleton = () => {
    return (
      <div 
        className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
      />
    );
};