import Homepage from "@/components/auth/homepage";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function HomePage() {
    const { userId } = auth();

    if (userId) redirect (`/${userId}`);

    return (
        <div>
            <Homepage/>
        </div>
    )
}