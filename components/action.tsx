"use client";

import { toast } from "sonner";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import { ConfirmModal } from "@/components/modals/confirm-modal";


import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRenameModal } from "@/store/use-rename-modal";
import { useState } from "react";
import { deleteBoard } from "@/actions/board";
import { useRouter } from "next/navigation";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
};

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
    const { onOpen } = useRenameModal();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onCopyLink = () => {
        navigator.clipboard.writeText(
        `${window.location.origin}/board/${id}`,
        )
        .then(() => toast.success("Link copied"))
        .catch(() => toast.error("Failed to copy link"))
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await deleteBoard(id);
            toast.success("Delete successfully.");
            router.back();
        } catch (error) {
            toast.error("Failed to delete.")
        } finally {
            setLoading(false);
        }
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem
          onClick={onCopyLink}
          className="p-3 cursor-pointer"
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-3 cursor-pointer flex-1"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board?"
          description="This will delete the board and all of its contents."
          disabled={loading}
          onConfirm={onDelete}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};