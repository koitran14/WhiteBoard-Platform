

const Footer = () => {
    return (
        <div className="w-full h-fit flex flex-col bg-amber-700 text-white">
            <div className="flex flex-row gap-x-2">
                <div>

                </div>

            </div>
            <p className="w-full py-6 flex items-center justify-center text-center text-sm ">
                &copy; {new Date().getFullYear()} UnIpin, Inc. All rights reserved.
            </p>
        </div>
    );
}
 
export default Footer;