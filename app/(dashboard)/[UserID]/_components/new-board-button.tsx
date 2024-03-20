"use client"

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { createBoard, getAllBoards } from "@/actions/board";
import { useParams } from "next/navigation";

interface NewBoardButtonProps {
    orgId: string;
    disabled?:boolean;
};
export const NewBoardButton = ({
    orgId,
    disabled,
}: NewBoardButtonProps) => {
    const params = useParams();

    const onClick = async () => {
      try {
        const response = await createBoard(params.UserID as string, orgId);
        toast.success('Created successfully.')
      } catch (error) {
        toast.error("Fail to create.");
      } 
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
                className="h-12 ư-12 text-white stroke-2"
            /> 
            <p className="text-sm text-white font-medium">New board</p>
        </button>
    );
};