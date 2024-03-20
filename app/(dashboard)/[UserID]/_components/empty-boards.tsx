"use client"

import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { createBoard } from "@/actions/board";
import { useParams } from "next/navigation";

export const EmptyBoards = () => {
    const { organization } = useOrganization();
    const [pending, setPending] = useState(false);
    const params = useParams();

    const onClick = async () => {
        if (!organization) return;
        
        try {
            setPending(true);
            const response = await createBoard(params.UserID as string,organization.id);
            toast.success("Created successfully.");
        } catch (error) {
            toast.error('Fail to create.')
        } finally {
            setPending(false);
        }
    }

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/note.svg"
                alt="Empty"
                width={110}
                height={110}
            />
            <h2 className="text-2xl font-semibold mt-6">
                    Create your first board!
            </h2>

            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your Organization! 
            </p>
            <div className="mt-6">
                <Button size="lg" disabled={pending} onClick={onClick}> 
                    Create sketcha!
                </Button>
            </div>
        </div>
    );
};