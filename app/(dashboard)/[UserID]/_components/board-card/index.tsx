"use client"

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";

import { Skeleton } from "@/components/ui/skeleton";

import { Overlay } from "./overlay";
import { Footer } from "./footer";
import { usePathname } from "next/navigation";

interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
}

export const BoardCard = ({
    id,
    title,
    authorId,
    authorName,
    createdAt,
    imageUrl,
    orgId,
    isFavorite,
}: BoardCardProps) => {
    const pathname = usePathname();
    const { userId } = useAuth();
    const authorLabel = userId === authorId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(new Date(createdAt), {
        addSuffix: true,
    })

    return (
        <Link href={pathname + `/board/${id}`}>
            <div className="group-aspect-[100/127] border rounded-lg flex
            flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image 
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    <Overlay/>
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={() => {}}
                    disabled={false}
                />
            </div>
        </Link>
    );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full"/>
        </div>
    );
};