import Section from "@/components/homepage/section";

const AuthLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="w-full h-full">
            <Section>
                {children}
            </Section>
        </div>
    );
}
 
export default AuthLayout;