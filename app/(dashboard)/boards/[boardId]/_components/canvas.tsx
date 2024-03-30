"use client"

import { useState } from "react";

import { useHistory, useCanRedo, useCanUndo } from "@/liveblocks.config";
import { CanvasMode, CanvasState } from "@/types/canvas";

import { Info } from "./info"
import { Participants } from "./participants"
import { ToolBar } from "./toolbar"

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    //redo and undo by using History of liveblocks cause we're working on Liveblocks layers.
    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();



    return (
        <main
            className="h-full w-full relative bg-neutral-100 touch-none"
        >
            <Info boardId={boardId}/>
            <Participants />
            <ToolBar 
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                redo={history.redo}
                undo={history.undo}
            />
        </main>
    )
}