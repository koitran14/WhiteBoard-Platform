"use client"

import { nanoid } from "nanoid";
import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { LiveObject } from "@liveblocks/client";

import { 
    useHistory, 
    useCanRedo, 
    useCanUndo,
    useMutation,
    useStorage,
    useOthersMapped,
    useSelf, // is a hook which commonly used w frameworks like React for building rt app. The useMutation hook is typically used for handling mutaions or updates to  data in realtime. It is often utilized in conjunction w GraphQL APIs
} from "@/liveblocks.config";
import { useDisableScrollBounce } from "@/hooks/use-disable-scroll-bounce";
import { useDeleteLayers } from "@/hooks/use-delete-layers";
import { cn, colorToCss, connectionIdToColor, findIntersectingLayersWithRectangle, penPointsToPathLayer, pointerEventToCanvasPoint, resizeBounds } from "@/lib/utils";
import { 
    Camera, 
    CanvasMode, 
    CanvasState, 
    Color, 
    LayerType,
    Point,
    Side,
    XYWH
} from "@/types/canvas";

import { Info } from "./info"
import { Participants } from "./participants"
import { ToolBar } from "./toolbar"
import { LayerPreview } from "./layer-preview";
import { CursorsPresence } from "./cursors-presence";
import { SelectionBox } from "./selection-box";
import { SelectionTools } from "./selection-tools";
import { Path } from "./path";
import { useOrganization } from "@clerk/nextjs";

const MAX_LAYERS = 250; //maxlayer 

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({ 
    boardId,
}: CanvasProps) => {
    const layerIds = useStorage((root) => root.layerIds);

    const { membership } = useOrganization();
    const [editable, setEditable] = useState(false);
    
    useEffect(() => {
        if (membership) 
            setEditable(true);
    }, [membership]);

    useDisableScrollBounce();    

    const pencilDraft = useSelf((me) => me.presence.pencilDraft)
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    //useState()
    const [camera, setCamera] = useState<Camera>({ x: 0, y: 0});
    const [lastUsedColor, setLastUsedColor] = useState<Color>({
        r: 0,
        g: 0,
        b: 0,
    });

    //redo and undo by using History of liveblocks cause we're working on Liveblocks layers.
    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const insertLayer = useMutation((
        { storage, setMyPresence },
        layerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Text | LayerType.Note,
        position: Point,
    ) => {
        const liveLayers = storage.get("layers");

        const liveLayerIds = storage.get("layerIds");
        const layerId = nanoid();
        const layer = new LiveObject({
            type: layerType,
            x: position.x,
            y: position.y,
            height: 100,
            width: 100,
            fill: lastUsedColor,
        });

        liveLayerIds.push(layerId);
        liveLayers.set(layerId, layer);

        setMyPresence({ selection: [layerId] }, { addToHistory: true });
        setCanvasState({mode: CanvasMode.None});
    }, [lastUsedColor]);

    const translateSelectedLayers = useMutation((
        {storage, self},
        point: Point,
    ) => {
        if (canvasState.mode !== CanvasMode.Translating || !editable) {
            return;
        }

        const offset = {
            x: point.x - canvasState.current.x,
            y: point.y - canvasState.current.y,
        };

        const liveLayers = storage.get("layers");

        for(const id of self.presence.selection) {
            const layer = liveLayers.get(id);

            if(layer) {
                layer.update({
                    x: layer.get("x") + offset.x,
                    y: layer.get("y") + offset.y,
                });
            }
        }
        setCanvasState({mode: CanvasMode.Translating, current: point});
    },[canvasState, editable]);

    const unselectLayers = useMutation((
        { self, setMyPresence }
    ) => {
        if (self.presence.selection.length > 0) {
            setMyPresence({ selection: [] }, {addToHistory: true});
        }
    }, []);

    const updateSelectionNet = useMutation((
        {storage, setMyPresence},
        current: Point,
        origin: Point,
    ) => {
        const layers = storage.get("layers").toImmutable();

        if (!editable) return;

        setCanvasState({
            mode: CanvasMode.SelectionNet,
            origin,
            current,
        });

        const ids = findIntersectingLayersWithRectangle(
            layerIds,
            layers,
            origin,
            current,
        );

        setMyPresence({selection: ids});
    }, [layerIds, editable]);

    const startMultiSelection = useCallback((
        current: Point,
        origin: Point,
    ) => {
        if (!editable) return;
        
        if(
            Math.abs(current.x - origin.x) + Math.abs(current.y - origin.y) > 5
        ) {
            setCanvasState({
                mode: CanvasMode.SelectionNet,
                origin,
                current,
            });
        }
    }, [editable]);

    const continueDrawing = useMutation((
        { self, setMyPresence },
        point: Point,
        e: React.PointerEvent,
    ) => {
        const { pencilDraft } = self.presence;

        if (
            canvasState.mode !== CanvasMode.Pencil
            || e.buttons !== 1
            || pencilDraft == null
        ) {
            return;
        }

        setMyPresence({
            cursor: point,
            pencilDraft: 
                pencilDraft.length === 1 &&
                pencilDraft[0][0] === point.x &&
                pencilDraft[0][1] === point.y 
                    ? pencilDraft
                    : [...pencilDraft, [point.x, point.y, e.pressure]]
        })
    },[canvasState.mode])

    const insertPath = useMutation((
        { storage, self, setMyPresence }
    ) => {
        const liveLayers = storage.get("layers");
        const { pencilDraft } = self.presence;

        if (
            pencilDraft == null
            || pencilDraft.length < 2
            || liveLayers.size >= MAX_LAYERS
        ) {
            setMyPresence({ pencilDraft: null})
            return;
        }

        const id = nanoid();

        liveLayers.set(
            id,
            new LiveObject(penPointsToPathLayer(
                pencilDraft,
                lastUsedColor,
            )),
        )

        const liveLayerIds = storage.get("layerIds");

        liveLayerIds.push(id);

        setMyPresence({ pencilDraft: null });
        setCanvasState({ mode: CanvasMode.Pencil})
    },[ lastUsedColor ])

    const startDrawing = useMutation((
        { setMyPresence },
        point: Point,
        pressure: number,
    ) => {
        setMyPresence({
            pencilDraft: [[point.x, point.y, pressure]],
            penColor: lastUsedColor
        })
    }, [lastUsedColor])

    const resizeSelectedLayers = useMutation((
        { storage, self},
        point: Point,
    ) => {
        if(canvasState.mode !== CanvasMode.Resizing){
            return;
        }

        const bounds = resizeBounds(
            canvasState.initialBounds,
            canvasState.corner,
            point,
        );

        const liveLayers = storage.get("layers");

        const layer = liveLayers.get(self.presence.selection[0]);

        if(layer) {
            layer.update(bounds);
        };

    }, [canvasState])

    const onResizeHandlePointerDown = useCallback((
        corner: Side,
        initialBounds: XYWH,
    ) => {
        if (!editable) return;
        history.pause();
        setCanvasState({
            mode: CanvasMode.Resizing,
            initialBounds,
            corner,
        });
    }, [editable])

    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((camera) => ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }));
    }, []);

    const onPointerMove = useMutation((
        { setMyPresence }, 
        e: React.PointerEvent
    ) => {
        e.preventDefault();

        const current = pointerEventToCanvasPoint(e, camera);

        if (!editable) {
            setCanvasState({ mode: CanvasMode.None})
            if (!membership) return;
        }

        if( canvasState.mode === CanvasMode.Pressing) {
            startMultiSelection(current, canvasState.origin);
        } else if( canvasState.mode === CanvasMode.SelectionNet){
            updateSelectionNet(current, canvasState.origin);
        } else if(canvasState.mode === CanvasMode.Translating) {
            translateSelectedLayers(current);
        } else if( canvasState.mode === CanvasMode.Resizing) {
            resizeSelectedLayers(current);
        } else if (canvasState.mode === CanvasMode.Pencil) {
            continueDrawing(current, e)
        }

        setMyPresence({ cursor: current });
    }, 
    [
        continueDrawing,
        camera,
        canvasState,
        resizeSelectedLayers,
        translateSelectedLayers,
        updateSelectionNet,
        startMultiSelection,
        editable,
        membership
    ]); 

    const onPointerLeave = useMutation(({ setMyPresence }) => {
        setMyPresence({ cursor: null });
    }, []);

    const onPointerDown = useCallback((
        e: React.PointerEvent,
    ) => {
        const point = pointerEventToCanvasPoint(e, camera);

        if(canvasState.mode === CanvasMode.Inserting) {
            return;
        }

        if (canvasState.mode === CanvasMode.Pencil) {
            startDrawing(point, e.pressure);
            return;
        }

        setCanvasState({ origin: point, mode: CanvasMode.Pressing });
    }, [camera,  canvasState.mode, setCanvasState, startDrawing]);

    const onPointerUp = useMutation((
        {},
        e
    ) => {
        const point = pointerEventToCanvasPoint(e, camera);

        if(
            canvasState.mode === CanvasMode.None || 
            canvasState.mode === CanvasMode.Pressing
        ) {
            unselectLayers();
            setCanvasState({
                mode: CanvasMode.None,
            });
        } else if (canvasState.mode === CanvasMode.Pencil) {
            insertPath();
        } else if(canvasState.mode === CanvasMode.Inserting){
            insertLayer(canvasState.layerType, point);
        } else {
            setCanvasState({
                mode: CanvasMode.None,
            });
        }

        history.resume();
    }, [
        camera,
        canvasState,
        history,
        insertLayer,
        unselectLayers,
        insertPath,
        setCanvasState
    ]);

    const selections = useOthersMapped((other) => other.presence.selection);

    const onLayerPointerDown = useMutation((
        {self, setMyPresence},
        e: React.PointerEvent,
        layerId: string,
    ) => {
        if ( canvasState.mode === CanvasMode.Pencil ||
            canvasState.mode === CanvasMode.Inserting ||
            !editable
        ) {
            return;
        }

        history.pause();
        e.stopPropagation();

        const point = pointerEventToCanvasPoint(e, camera);

        if (!self.presence.selection.includes(layerId)) {
            setMyPresence({ selection: [layerId] }, { addToHistory: true })
        }

        setCanvasState({ mode: CanvasMode.Translating, current: point })
    }, [
        setCanvasState,
        camera,
        history,
        canvasState.mode,
        editable
    ])

    const layerIdsToColorSelection = useMemo(() => {
        const layerIdsToColorSelection: Record<string, string> = {};

        for (const user of selections) {
            const [connectionId, selection] = user;

            for (const layerId of selection) {
                layerIdsToColorSelection[layerId] = connectionIdToColor(connectionId)
            }
        }
        return layerIdsToColorSelection;
    }, [selections])

    // for undo/redo keystrokes
    const deleteLayers = useDeleteLayers()

    const [canPaste, setCanPaste] = useState(false);

    const copyLayers = useMutation(({ storage, self, setMyPresence }) => {
        const liveLayers = storage.get("layers");
        const selection = self.presence.selection;
    
        const copiedLayers = selection.map((layerId) => {
            const layer = liveLayers.get(layerId);
            if (layer) {
                setCanPaste(true);
                return {
                    id: nanoid(),
                    data: layer.toObject(),
                };
            }
            return null;
        }).filter((layer): layer is { id: string; data: any } => layer !== null);
    
       setMyPresence({ copiedLayers }); 
    }, []);
    
    const pasteLayers = useMutation(({ storage, self, setMyPresence }) => {
        const liveLayers = storage.get("layers");
        const liveLayerIds = storage.get("layerIds");
        const copiedLayers = self.presence.copiedLayers;
    
        if (copiedLayers && copiedLayers.length > 0) {
            const newLayerIds = copiedLayers.map((copiedLayer) => {
                const newLayer = new LiveObject({
                    ...copiedLayer.data,
                    x: copiedLayer.data.x + 10, // Offset new layers slightly for visibility
                    y: copiedLayer.data.y + 10,
                });
                const newLayerId = nanoid();
                liveLayers.set(newLayerId, newLayer);
                setCanPaste(false);
                return newLayerId;
            });
    
            newLayerIds.map((id) => liveLayerIds.push(id))
            setMyPresence({ selection: newLayerIds }); // Set the new selection
        }
    }, []);

    const selectAllLayers = useMutation((
        { storage, setMyPresence }
    ) => {
        
        const allLayerIds = [...storage.get("layerIds").toImmutable()];
        setMyPresence({ selection: allLayerIds })
    }, [])

    //interact with canvas by keyboard
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (!editable) {
                e.preventDefault();
                return;
            };

            switch (e.key) {
                case "z": {
                    if (e.ctrlKey || e.metaKey) {
                        if (e.shiftKey) {
                            history.redo();
                        } else {
                            history.undo();
                        }
                        break;
                    }
                    break;
                }
                case "Delete":
                    deleteLayers();
                    break;
                case "c": {
                    if (e.ctrlKey || e.metaKey) {
                        copyLayers();
                        break;
                    }
                    break;
                }
                case "v": {
                    if (e.ctrlKey || e.metaKey) {
                        pasteLayers();
                        break;
                    }
                    break;
                }
                case "a": {
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        selectAllLayers();
                        break;
                    }
                    break;
                }
                default:
                    break;
            }
        }
    
        window.addEventListener("keydown", onKeyDown);
    
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [copyLayers, pasteLayers, deleteLayers, history, selectAllLayers, editable]);
    
    useEffect(() => {
        if (!editable)
            unselectLayers();
    },[editable, unselectLayers]);

    return (
        <main
            className={cn("h-full w-full relative bg-neutral-100 touch-none",
                editable &&
                "bg-[url('/graph-paper.svg')] bg-opacity-20 bg-white"
            )}
        >
            <Info boardId={boardId} editable={editable} setEditable={setEditable}/>
            <Participants />
            <ToolBar 
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                redo={history.redo}
                undo={history.undo}
                editable={editable}
            />
            {editable && 
                <SelectionTools 
                    camera={camera}
                    setLastUsedColor={setLastUsedColor}
                    copyLayers={copyLayers}
                    pasteLayers={pasteLayers}
                    canPaste={canPaste}
                />
            }
            <svg
                className="h-[100vh] w-[100vw]"
                onWheel={onWheel}
                onPointerMove={onPointerMove}
                onPointerLeave={onPointerLeave}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                tabIndex={0}
            >
                <g
                    style={{
                        transform: `translate(${camera.x}px, ${camera.y}px)`
                    }}
                >
                    {layerIds?.map((layerId) => (
                        <LayerPreview
                            key = {layerId}
                            id = {layerId}
                            onLayerPointerDown={onLayerPointerDown}
                            selectionColor={layerIdsToColorSelection[layerId]}
                        />
                    ))}
                    <SelectionBox
                        onResizeHandlePointerDown={onResizeHandlePointerDown}
                    />
                    {canvasState.mode === CanvasMode. SelectionNet && canvasState. current != null && (
                        <rect
                            className="fill-blue-500/5 stroke-blue-500 stroke-1"
                            x={Math.min(canvasState.origin.x, canvasState.current.x)}
                            y={Math.min(canvasState.origin.y, canvasState.current.y)}
                            width={Math.abs(canvasState.origin.x - canvasState.current.x)}
                            height={Math.abs(canvasState.origin.y - canvasState.current.y)}
                        />
                    )}
                    <CursorsPresence />
                    {pencilDraft != null && pencilDraft.length > 0 &&
                        <Path 
                            points={pencilDraft}
                            fill={colorToCss(lastUsedColor)}
                            x={0}
                            y={0}
                        />
                    }
                </g>
            </svg>
        </main>
    );
};