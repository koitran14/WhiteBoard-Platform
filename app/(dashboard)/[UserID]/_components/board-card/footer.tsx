import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterProps {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
};

export const Footer = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled,
}: FooterProps )=> {
    return (
        <div className="relative bg-white p-3">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
                {title} {/**Untitled */}
            </p>
            <p className="opacity-0 group-hover:opacity-100 
            transition-opacity text-[11px] text-muted-foreground
            truncate">
                {authorLabel}, {createdAtLabel} {/*Ex: You, about an 1 hour ago*/}
            </p>
            <button
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    "opacity-0 group-hover:opacity-100 transition-opacity absolutetop-3 right-3 text-muted-foreground hover:text-blue-600", disabled && "cursor-not-allowed opacity-75"
                )}
            >
                <Star
                    className={cn(
                        "h-4 w-4",
                        isFavorite &&"fill-blue-600 text-blue-600"
                    )}
                />
            </button>
        </div>
    );
};