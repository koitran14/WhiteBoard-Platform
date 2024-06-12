import Footer from "@/components/homepage/footer";
import Navbar from "@/components/homepage/navbar";
import Section from "@/components/homepage/section";

const HomePageLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className="w-full h-full relative flex flex-col overflow-visible no-scrollbar snap-y snap-mandatory">
            <div className="w-full h-fit fixed top-0 left-0 z-50 md:px-20">
                <Navbar/>
            </div>
            <Section>
                <div className="pt-32 px-2 pb-5 flex flex-col w-full md:px-24 no-scrollbar overflow-scroll">
                    {children}
                </div> 
                <Footer/>
            </Section>   
        </div>
    );
}
 
export default HomePageLayout;