import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import classnames from "classnames/bind";
import dynamic from 'next/dynamic';

import ComingSoon from "@/src/pages/coming-soon";
import Header from "@/src/components/Header";
import Jumbotron from "@/src/components/Jumbotron";
import SectionHeader from "@/src/components/SectionHeader";

import { ENABLE_COMING_SOON_REDIRECT } from "flags";

import styles from "@/styles/Home.module.scss";

// dynamic needed to bypass hydration error
// Ref: https://nextjs.org/docs/messages/react-hydration-error
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
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
        return <ComingSoon />;
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

                <SectionHeader title="Performance Schedule" />
                <SectionHeader title="Events" />
                <SectionHeader title="Latest Release" />
                <ReactPlayer url="https://www.youtube.com/playlist?list=PL020eiw54Omc-1TCgbD2BpcxMhIp9W-jn" />
                <SectionHeader title="Recent Events" />
                <SectionHeader title="Original Songs" />
            </main>
        </>
    );
}
