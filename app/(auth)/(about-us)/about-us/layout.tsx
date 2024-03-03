interface AboutUsLayoutProps{
    children: React.ReactNode;
};

const AboutUsLayout = ({
    children,
}:AboutUsLayoutProps) => {
    return (
        <main className="h-full">
            <Navbar/>
            <div className="pl-[60px] h-full">

            {children}
            </div>
        </main>
    );
};

export default AboutUsLayout;