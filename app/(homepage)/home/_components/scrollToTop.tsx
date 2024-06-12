import { Button } from "@/components/ui/button";
import { MoveUp } from "lucide-react";

export const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button 
            onClick={scrollToTop} 
            variant={"outline"}
            className="w-10 h-16 p-2 rounded-full border-black animate-bounce"
        >
            <MoveUp className="h-15 w-8"/>
        </Button>
    )
}