import React from "react";
import { Sidebar } from"../[UserID]/_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";
interface DashboardLayoutProps {
    children: React.ReactNode;
};

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {
    return (
        <div className="h-full">
            <Sidebar/>
            <div className="pl-[60px] h-full">
                <div className="flex h-full">
                    <OrgSidebar/>
                    <div className="h-full flex-1">
                        <Navbar/>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;