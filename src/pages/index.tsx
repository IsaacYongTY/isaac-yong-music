import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import classnames from "classnames/bind";
import dynamic from "next/dynamic";

import ComingSoon from "@/src/pages/coming-soon";
import NavigationBar from "@/src/components/NavigationBar";
import Jumbotron from "@/src/components/Jumbotron";
import SectionHeader from "@/src/components/SectionHeader";
import AdamChanGuitars from "public/adam-chan-logo.png";
import LittleBandPlusLogo from "public/little-band-plus-logo.jpg";
import YamahaLogo from "public/yamaha-logo.png";

import { ENABLE_COMING_SOON_REDIRECT } from "flags";

import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";

// dynamic needed to bypass hydration error
// Ref: https://nextjs.org/docs/messages/react-hydration-error
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
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
                    <NavigationBar isSticky={true} />
                ) : (
                    <div className={cx("header-placeholder")} />
                )}

                <SectionHeader title="Performance Schedule" />
                <SectionHeader title="Events" />

                <SectionHeader title="Latest Release" />
                <ReactPlayer url="https://www.youtube.com/playlist?list=PL020eiw54Omc-1TCgbD2BpcxMhIp9W-jn" />

                <SectionHeader title="Recent Events" />

                <SectionHeader title="Original Songs" />
                <ReactPlayer url="https://www.youtube.com/watch?v=e3iiac7d0m8" />

                <SectionHeader title="Partners" />
                <div className={cx('partners-container')}>
                    <div className={cx('logo-container')}>
                    <Image
                        src={AdamChanGuitars}
                        width={150}
                        alt="adam-chan-guitars"
                    />
                    <Image
                        src={LittleBandPlusLogo}
                        width={150}
                        alt="little-band-plus"
                    />
                    <Image
                        src={YamahaLogo}
                        height={50}
                        alt="yamaha-logo"
                    />
                    </div>
                    <Button variant="contained">Learn More</Button>
                </div>
            </main>
        </>
    );
}
