import { SignUp } from "@clerk/nextjs";

export default function Page (){
    return (
        <div className="w-full h-full flex justify-center items-center  bg-gradient-to-tr from-yellow-200 via-orange-200 to-red-200">
            <SignUp/>
        </div>
    )}