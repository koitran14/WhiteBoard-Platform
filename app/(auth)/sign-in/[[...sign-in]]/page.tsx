import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page (){
    return (
        <div className=" w-full h-full px-28 flex justify-between items-center flex-row gap-x-5">
            <div className="md:block hidden">
                <Image
                    alt="login-logo"
                    src="/login-logo.svg"
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <SignIn />
            </div>
        </div>
    )
}