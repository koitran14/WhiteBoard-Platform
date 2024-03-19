"use client"

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

// import api from convex 
// import { useApiMutation } from "@/hooks/use-api-mutation";

interface NewBoardButtonProps {
    orgId: string;
    disabled?:boolean;
};
export const NewBoardButton = ({
    orgId,
    disabled,
}: NewBoardButtonProps) => {
    // const {mutate, pending } = [] //TODO: (api) board.create by useMutation()

    const create = () => {
        const newObject: data = {
            id: 4,
            title: "Untitled",
            imageUrl: "/placeholders/1.svg",
            authorId:"Huynewadd",
            authorName:"HuyQQaddnew",
            createdAt: new Date(2024, 11, 11),
            orgId:"OrgAddNew",
            isFavorite: true,
        };
    }
    
    const onClick = () => {
        create()
            // .then((id) => {
            //     toast.success("Board created");
            //     //TODO: Redirect to /board/{id}
            // })
            // .catch(() => toast.error("Failed to create board"));

    }

    return (
        <button
            disabled={disabled}
            onClick={onClick}  
            className={cn(
                "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
                (disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed "
            )}
        >
            <div />
            <Plus
                className="h-12 ư-12 text-white stroke-1"
            /> 
            <p className="text-sm text-white font-light">New board</p>
            
        </button>
    );
};