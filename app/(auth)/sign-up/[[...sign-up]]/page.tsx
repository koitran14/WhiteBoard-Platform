import { SignUp } from "@clerk/nextjs";

export default function Page (){
    return (
        <div className=" w-full h-full px-20 flex justify-between items-center">
            <SignUp/>
        </div>
    )}