"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import classnames from "classnames/bind";

import ComingSoon from "@/src/app/coming-soon/page";
import Jumbotron from "@/src/components/home/Jumbotron";

import { ENABLE_COMING_SOON_REDIRECT } from "@/flags";
import PartnersSection from "@/src/components/home/PartnersSection";
import IntroSection from "@/src/components/home/IntroSection";
import ListenSection from "@/src/components/home/ListenSection";
import ServicesSection from "@/src/components/home/ServicesSection";
import LatestVideoSection from "@/src/components/home/LatestVideoSection";
import ArrangementSection from "@/src/components/home/ArrangementSection";
import UpcomingEventsSection from "@/src/components/home/UpcomingEventsSection";

import styles from "@/styles/Home.module.scss";
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

                <IntroSection />
                <PartnersSection />
                <ServicesSection />
                <UpcomingEventsSection />
                <LatestVideoSection />
                <ListenSection />
                <ArrangementSection />
            </main>
        </>
    );
}
