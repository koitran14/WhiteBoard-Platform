import Navbar from "@/components/homepage/navbar";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="w-full h-full relative">
            <div className="w-full h-fit fixed top-0 left-0 z-20">
                <Navbar/>
            </div>
            <div className="pt-28 md:px-24 px-4">
                {children}
            </div>
        </div>
    );
}
 
export default HomePageLayout;