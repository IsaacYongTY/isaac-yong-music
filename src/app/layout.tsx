import "@/styles/globals.scss";
import Provider from "./Provider";
import NavigationBar from "@/src/components/layout/NavigationBar";
import Footer from "@/src/components/layout/Footer";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <NavigationBar />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
