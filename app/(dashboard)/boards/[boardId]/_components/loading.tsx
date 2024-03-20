import { Loader } from "lucide-react"

import { InfoSkeleton } from './info'
import { ParticipantsSkeleton } from "./participants"
import { ToolBarSkeleton } from "./toolbar"

export const CanvasLoading = () => {
    return(
        <main className="w-full h-full relative bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
            <InfoSkeleton/>
            <ParticipantsSkeleton />
            <ToolBarSkeleton />
        </main>
    )
}