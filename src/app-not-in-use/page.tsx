"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import classnames from "classnames/bind";
import { Button } from "@mui/material";
import Image from "next/image";

import ComingSoon from "@/src/pages/coming-soon";
import NavigationBar from "@/src/components/NavigationBar";
import Jumbotron from "@/src/components/Jumbotron";
import SectionHeader from "@/src/components/SectionHeader";
import AdamChanGuitars from "public/adam-chan-logo.png";
import LittleBandPlusLogo from "public/little-band-plus-logo.jpg";
import RockestraIsaacElectricGuitar from "public/rockestra-isaac-electric-guitar.jpeg";
import YamahaLogo from "public/yamaha-logo.png";

import { ENABLE_COMING_SOON_REDIRECT } from "flags";

import styles from "@/styles/Home.module.scss";
import Footer from "@/src/components/Footer";
import VideoPlayer from "@/src/components/VideoPlayer";

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

                <div className={cx("intro-container")}>
                    <SectionHeader title="Hello!" noBorder />
                    <div className={cx("content-container")}>
                        <div>
                            <Image
                                src={RockestraIsaacElectricGuitar}
                                alt={"rockestra-isaac-electric-guitar"}
                                width={400}
                                // height={500}
                            />
                        </div>
                        <div>
                            Hi! Hello! I make a living as a musician by
                            performing live music. In addition to my live
                            performances, my work also includes music
                            production, songwriting, content creation, and
                            education. I take pleasure in creating a fantastic
                            ambiance and atmosphere through my music and
                            performances. My skills involve playing the guitar
                            and singing.
                        </div>
                    </div>
                </div>

                <SectionHeader title="Performance Schedule" />
                <SectionHeader title="Events" />

                <div className={cx("video-section-container")}>
                    <SectionHeader title="Latest Release" />

                    <VideoPlayer url="https://www.youtube.com/playlist?list=PL020eiw54Omc-1TCgbD2BpcxMhIp9W-jn" />
                </div>

                <SectionHeader title="Recent Events" />

                <div className={cx("video-section-container")}>
                    <SectionHeader title="Original Songs" />

                    <VideoPlayer url="https://www.youtube.com/watch?v=e3iiac7d0m8" />
                </div>

                <SectionHeader title="Partners" />
                <div className={cx("partners-container")}>
                    <div className={cx("logo-container")}>
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
                        <Image src={YamahaLogo} height={50} alt="yamaha-logo" />
                    </div>

                    <div className={cx("button-container")}>
                        <Button variant="contained">Learn More</Button>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
