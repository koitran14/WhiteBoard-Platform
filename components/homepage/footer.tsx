const Footer = () => {
    return (
        <p className="w-full py-6 flex items-center justify-center text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} UnIpin, Inc. All rights reserved.
        </p>
    );
}
 
export default Footer;