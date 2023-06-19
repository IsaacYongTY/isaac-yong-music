import NavigationBar from "@/src/components/layout/NavigationBar";
import Footer from "@/src/components/layout/Footer";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
    params: {
        tag: string;
        item: string;
    };
}) {
    return (
        <section>
            <NavigationBar />
            {children}
            <Footer />
        </section>
    );
}
