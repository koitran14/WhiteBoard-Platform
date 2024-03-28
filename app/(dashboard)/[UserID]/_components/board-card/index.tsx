"use client"

import Image from "next/image";
import { clerkClient, useAuth } from "@clerk/nextjs";
import { MoreHorizontal, Star, UsersRoundIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// import { Action } from "@/components/actions";
import { Skeleton } from "@/components/ui/skeleton";

import { Overlay } from "./overlay";
import { Footer } from "./footer";
import { Actions } from "@/components/action";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { setFavorite } from "@/actions/favorite";
import { cn } from "@/lib/utils";
// import { checkedIfFavoriteorNot } from "@/actions/favorite";

interface BoardCardProps {
    id: string;
    title: string;
    authorId: string;
    createdAt: Date;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
}

export const BoardCard = ({
    id,
    title,
    authorId,
    createdAt,
    imageUrl,
    orgId,
    isFavorite,
}: BoardCardProps) => {
    const router = useRouter();
    const params = useParams();
    const [authorLabel, setAuthorLabel] = useState(params.UserID === authorId ? "You" : "Another");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getFirstName = async(userID: string) => {
            const user = await clerkClient.users?.getUser(userID);
            setAuthorLabel(userID === authorId ? "You" : (user?.firstName|| "Teammate"))
        }
        getFirstName(params.UserID as string);
    });
    
    const createdAtLabel = formatDistanceToNow(new Date(createdAt), {
        addSuffix: true,
    })

    const toggleFavorite = async (boardId: string) => {
        try {
            setLoading(true);
            await setFavorite(params.UserID as string, boardId);            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }



// this onClick below that use when click on boardcard and get into it
    const onClick = () => {
        try {
            setLoading(true);
            router.push(`boards/${id}`);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="group aspect-[100/127] border rounded-lg flex
            flex-col justify-between overflow-hidden" onClick={onClick}>
                <div className="relative flex-1 bg-amber-50">
                    <Image 
                        src={imageUrl}
                        alt=""
                        fill
                    
                        className="object-fit"
                    />
                    <Overlay/>
                    <Actions
                        id={id}
                        title={title}
                        side="right"
                    >
                        <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
                            <MoreHorizontal
                                className="text-white opacity-75 hover:opacity-100 transition-opacity"
                            />
                        </button>
                    </Actions>
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={() => toggleFavorite(id)}
                    disabled={loading}
                />
            </div>        
    );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full"/>
        </div>
    );
};