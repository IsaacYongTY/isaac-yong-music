import "@/styles/globals.scss";
import Provider from "./Provider";
import React from "react";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
