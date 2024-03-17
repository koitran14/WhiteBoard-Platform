// "use client"
// import { UserButton } from "@clerk/nextjs";
// import {  useParams } from "next/navigation";

// export default function Dashboard(){ {/*dashboard==home */}
//     const params = useParams();

//     return (
//         <div>
//             <p>Dashboard Page for {params.UserID}</p>
//             <UserButton afterSignOutUrl="/"/>
//         </div>
//     )
// }
const DashboardPage=() => {
    return(
        <div>
            Dashboard Root Page
        </div>
    );
};

export default DashboardPage;