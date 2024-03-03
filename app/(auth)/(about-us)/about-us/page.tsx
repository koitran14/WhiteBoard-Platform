
// import { AboutUs } from "";
import Image from "next/image";
export default function Page(){
    return (
        <div className=" w-full h-full px-28">
            <div className = "md:block hidden">
                <Image
                    alt="login-login"
                    src="/login-logo.svg"
                    width={100}
                    height={100}
                />
                <div>
                About us

                </div>
            </div>
            
        </div>
    )
}