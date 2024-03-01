import Dashboard from "@/components/auth/dashboard";
import Homepage from "@/components/auth/homepage";
import { auth } from "@clerk/nextjs";

export default function HomePage() {
    const { userId } = auth();
    return (
        <div>
            {userId ? (
                <Dashboard />
            ): (
                <Homepage />
            )}
        </div>
    )
}