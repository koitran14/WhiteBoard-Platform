"use client"
import { UserButton } from "@clerk/nextjs";
import {  useParams } from "next/navigation";

export default function Dashboard(){
    const params = useParams();

    return (
        <div>
            <p>Dashboard Page for {params.UserID}</p>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}