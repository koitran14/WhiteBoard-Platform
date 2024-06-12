import Section from "@/components/homepage/section";

const AuthLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="w-full h-full overflow-hidden">
            <Section>
                {children}
            </Section>
        </div>
    );
}
 
export default AuthLayout;