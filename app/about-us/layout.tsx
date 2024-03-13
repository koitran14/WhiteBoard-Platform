import Footer from "@/components/homepage/footer";
import Navbar from "@/components/homepage/navbar";
import Section from "@/components/homepage/section";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="w-full h-full relative flex flex-col">
            <div className="w-full h-fit fixed top-0 left-0 z-50">
                <Navbar/>
            </div>
            <Section >
                <div  className="pt-24">
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