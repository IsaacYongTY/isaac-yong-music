import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/src/components/Header";
import SocialMedia from "@/src/pages/coming-soon";
import { ENABLE_COMING_SOON_REDIRECT } from "flags";
import classnames from "classnames/bind";
import ContactForm from "@/src/components/ContactForm";
import { ThemeProvider, createTheme } from "@mui/material";
import Jumbotron from "@/src/components/Jumbotron";
import { useEffect, useState } from "react";
import SectionHeader from "@/src/components/SectionHeader";

const inter = Inter({ subsets: ["latin"] });

const cx = classnames.bind(styles);

export default function Home() {
    const [showNavigationBar, setShowNavigationBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 20) {
                setShowNavigationBar(true);
                return;
            }

            setShowNavigationBar(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (ENABLE_COMING_SOON_REDIRECT) {
        return <SocialMedia />;
    }

    return (
        <>
            <Head>
                <title>
                    Isaac Yong&apos;s Official Website | 楊征宇 官方網站
                </title>
                <meta
                    name="description"
                    content="Isaac Yong (楊征宇) is a singer-songwriter from Singapore. 代表作品：《深夜》 "
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className={cx("main")}>
                <Jumbotron />

                {showNavigationBar ? (
                    <Header isSticky={true} />
                ) : (
                    <div className={cx("header-placeholder")} />
                )}

                <SectionHeader title="Get in Touch" />

                <ContactForm />
                <ContactForm />
                <ContactForm />
            </main>
        </>
    );
}
