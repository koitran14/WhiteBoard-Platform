"use client"

import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { ToolButton } from "./tool-button"
import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react"
import { Canvas } from "./canvas";

interface ToolbarProps {
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
    editable: boolean;
}

export const ToolBar = ({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo,
    editable
}: ToolbarProps) => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton 
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => setCanvasState({ mode: CanvasMode.None })}
                    isActive={
                        canvasState.mode === CanvasMode.None ||
                        canvasState.mode === CanvasMode.Translating ||
                        canvasState.mode === CanvasMode.SelectionNet ||
                        canvasState.mode === CanvasMode.Pressing ||
                        canvasState.mode === CanvasMode.Resizing 
                    }
                    isDisabled={!editable}
                />
                <ToolButton 
                    label="Text"
                    icon={Type}
                    onClick={() => setCanvasState({ 
                        mode: CanvasMode.Inserting, 
                        layerType: LayerType.Text,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Text
                    }
                    isDisabled={!editable}
                />
                <ToolButton 
                    label="Sticky Note"
                    icon={StickyNote}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting, 
                        layerType: LayerType.Note,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Note
                    }
                    isDisabled={!editable}
                />
                <ToolButton 
                    label="Rectangle"
                    icon={Square}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Rectangle,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Rectangle
                    }
                    isDisabled={!editable}
                />
                <ToolButton 
                    label="Ellipse"
                    icon={Circle}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Ellipse,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Ellipse
                    }
                    isDisabled={!editable}
                />
                <ToolButton 
                    label="Pen"
                    icon={Pencil}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Pencil,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Pencil
                    }
                    isDisabled={!editable}
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton 
                    label="Undo"
                    icon={Undo2}
                    onClick={undo}
                    isDisabled={!canUndo || !editable}
                />
                <ToolButton 
                    label="Redo"
                    icon={Redo2}
                    onClick={redo}
                    isDisabled={!canRedo || !editable}
                />
            </div>
        </div>
    )
}

export const ToolBarSkeleton = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 h-[200px] w-[52px] rounded-md shadow-md bg-white"/>
    )
}