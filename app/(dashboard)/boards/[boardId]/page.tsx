"use client"

import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { CanvasLoading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    }
}

export default function BoardIdPage({
    params
}: BoardIdPageProps){
    return (
        <Room roomId={params.boardId} fallback={<CanvasLoading />}>
            <Canvas boardId={params.boardId} />
        </Room>
    )
}