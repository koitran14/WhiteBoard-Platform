"use client"

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useMutation, useSelf } from "@/liveblocks.config";
import { Camera, Color } from "@/types/canvas";
import { memo } from "react";
import { ColorPicker } from "./color-picker";
import { useDeleteLayers } from "@/hooks/use-delete-layers";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { ArrowDown, ArrowUp, BringToFront, ClipboardPasteIcon, Copy, SendToBack, Trash2 } from "lucide-react";

interface SelectionToolsProps {
    camera: Camera;
    setLastUsedColor: (color: Color) => void;
    copyLayers: () => void;
    pasteLayers: () => void;
    canPaste: boolean;
}

export const SelectionTools = memo(({
    camera,
    setLastUsedColor,
    copyLayers,
    pasteLayers,
    canPaste,
}: SelectionToolsProps) => {

    const selection = useSelf((me) => me.presence.selection);

    const setFill = useMutation((
        { storage },
        fill: Color,
    ) => {
        const liveLayers = storage.get('layers');
        setLastUsedColor(fill);
        
        selection.forEach((id) => {
            liveLayers.get(id)?.set("fill", fill);
        })
    }, [selection, setLastUsedColor]);

    const moveToBack = useMutation((
        { storage }
    ) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        for (let i = 0;  i < arr.length; i++) {
            if (selection.includes(arr[i])){
                indices.push(i);
            }
        }
        
        for (let i = 0;  i < indices.length; i++) {
            liveLayerIds.move(indices[i], i);
        }
    }, [selection]) 

    const moveToFront = useMutation((
        { storage }
    ) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        for (let i = 0;  i < arr.length; i++) {
            if (selection.includes(arr[i])){
                indices.push(i);
            }
        }
        
        for (let i = indices.length - 1;  i >= 0; i--) {
            liveLayerIds.move(
                indices[i], 
                arr.length - 1 - (indices.length - 1 - i
            ));
        }
    }, [selection]) 

    const moveForward = useMutation((
        { storage }
    ) => {
        const liveLayerIds = storage.get("layerIds");
        const arr = liveLayerIds.toImmutable();

        for (let i = arr.length - 1; i > 0; i--)
            if (selection.includes(arr[i - 1])) 
                liveLayerIds.move(i - 1, i);

    }, [selection])

    const moveBackward = useMutation((
        { storage }
    ) => {
        const liveLayerIds = storage.get("layerIds");
        const arr = liveLayerIds.toImmutable();

        for (let i = 0; i < arr.length - 1; i++) 
            if (selection.includes(arr[i + 1])) 
                liveLayerIds.move(i + 1, i);

    }, [selection])

    const deleteLayers = useDeleteLayers();
    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) {
        return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;


    return (
        <div 
            className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
            style={{
                transform: `translate(
                    calc(${x}px - 50%),
                    calc(${y - 16}px - 100%)
                )`
            }}
        >
            <ColorPicker 
                onChange={setFill}
            />
            <div className="flex flex-col gap-y-0.5 items-center justify-center">

            <Hint label="Move forward">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={moveForward}
                    >
                        <ArrowUp />
                    </Button>
                </Hint>
                <Hint label="Move backward">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={moveBackward}
                    >
                        <ArrowDown />
                    </Button>
                </Hint>
            </div>
            <div className="flex flex-col gap-y-0.5 items-center justify-center">
                <Hint label="Bring to front">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={moveToFront}
                    >
                        <BringToFront />
                    </Button>
                </Hint>
                <Hint label="Send to back" side="bottom">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={moveToBack}
                    >
                        <SendToBack />
                    </Button>
                </Hint>
            </div>
            <div className="flex flex-col justify-center items-center pl-2 ml-2 border-l border-neutral-200">
                <Hint label="Copy">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={copyLayers}
                    >
                        <Copy />
                    </Button>
                </Hint>
                <Hint label="Paste">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={pasteLayers}
                        disabled={!canPaste}
                    >
                        <ClipboardPasteIcon/>
                    </Button>
                </Hint>
            </div>
            <div className="flex flex-col justify-center items-center pl-2 ml-2 border-l border-neutral-200">
                <Hint label="Delete">
                    <Button
                        variant="board"
                        size="icon"
                        onClick={deleteLayers}
                    >
                        <Trash2/>
                    </Button>
                </Hint>
            </div>
        </div>
    )
});

SelectionTools.displayName = "SelectionTools";