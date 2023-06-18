import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import classnames from "classnames/bind";
import { Button } from "@mui/material";
import Image from "next/image";

import ComingSoon from "@/src/pages/coming-soon-backup";
import NavigationBar from "@/src/components/NavigationBar";
import Jumbotron from "@/src/components/Jumbotron";
import SectionHeader from "@/src/components/SectionHeader";
import Footer from "@/src/components/Footer";
import VideoPlayer from "@/src/components/VideoPlayer";
import AdamChanGuitars from "@/public/adam-chan-logo.png";
import LittleBandPlusLogo from "@/public/little-band-plus-logo.jpg";
import RockestraIsaacElectricGuitar from "@/public/rockestra-isaac-electric-guitar.jpeg";
import IsaacIntroPhoto from "@/public/homepage/isaac-intro-photo.png";
import YamahaLogo from "@/public/yamaha-logo.png";

import { ENABLE_COMING_SOON_REDIRECT } from "@/flags";
import styles from "@/styles/Home.module.scss";
import PartnersSection from "@/src/components/pages/home/PartnersSection";
import IntroSection from "@/src/components/pages/home/IntroSection";
import ListenSection from "@/src/components/pages/home/ListenSection";
import ServicesSection from "@/src/components/pages/home/ServicesSection";
import LatestVideoSection from "@/src/components/pages/home/LatestVideoSection";
import ArrangementSection from "@/src/components/pages/home/ArrangementSection";
import UpcomingEventsSection from "@/src/components/pages/home/UpcomingEventsSection";

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
                <NavigationBar />

                <Jumbotron />

                <IntroSection />
                <PartnersSection />
                <ServicesSection />
                <UpcomingEventsSection />
                <LatestVideoSection />
                <ListenSection />
                <ArrangementSection />

                <Footer />
            </main>
        </>
    );
}
