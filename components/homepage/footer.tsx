

const Footer = () => {
    return (
        <div className="w-full h-fit flex flex-col text-slate-500/90">
            <p className="w-full py-6 flex items-center justify-center text-center text-sm ">
                &copy; {new Date().getFullYear()} UnIpin, Inc. All rights reserved.
            </p>
        </div>
    );
}
 
export default Footer;