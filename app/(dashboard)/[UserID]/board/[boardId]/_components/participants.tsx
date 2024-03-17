import { Skeleton } from "@/components/ui/skeleton"

export const Participants = () => {
    return (
        <div className="top-2 right-2 bg-white h-12 absolute p-3 rounded-md flex items-center shadow-md">
            List of users
        </div>
    )
}

export const ParticipantsSkeleton = () => {
    return (
        <div className="top-2 right-2 bg-white h-12 absolute p-3 rounded-md flex items-center shadow-md w-[100px]">
           <Skeleton className="h-full w-full bg-muted-400"/>
        </div>
    )
}