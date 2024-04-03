"use client"

import { useRenameModal } from "@/store/use-rename-modal"
import { FormEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { renameBoard } from "@/actions/board";
import { usePathname, useRouter } from "next/navigation";

export const RenameModal = () => {
    const { isOpen, onClose, initialValues } = useRenameModal();
    const [title, setTitle] = useState(initialValues.title);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTitle(initialValues.title);
    },[initialValues.title]);

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            setLoading(true);
            e.preventDefault();
            await renameBoard(initialValues.id, title);
            toast.success("Board renamed.");
            onClose();
        } catch (error) {
            toast.error("Failed to renamed board.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit board title
                    </DialogTitle>
                </DialogHeader>

                <DialogDescription>
                    Enter a new title for this board.
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input 
                        disabled={loading}
                        required
                        maxLength={60}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={initialValues.title ? initialValues.title : "Board title"}
                    />
                    <DialogFooter>
                        <DialogClose>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button disabled={loading} type="submit">
                            Save 
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}