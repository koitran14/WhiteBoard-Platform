import Navbar from "@/components/homepage/navbar";
import Section from "@/components/homepage/section";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="w-full h-full relative flex flex-col">
            <div className="w-full h-fit fixed top-0 left-0 z-50 md:px-20">
                <Navbar/>
            </div>
            <Section >
                <div  className="">
                    {children}
                </div> 
            </Section>   
            <div className="w-full">
                {/* <Footer/> */}
            </div>
        </div>
    );
}
 
export default HomePageLayout;