"use client";

import classnames from "classnames/bind";
import { Metadata } from "next";

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

import NavigationBar from "@/src/components/layout/NavigationBar";
import Footer from "@/src/components/layout/Footer";

import styles from "@/styles/Home.module.scss";
const cx = classnames.bind(styles);

const metadata: Metadata = {
    title: "Isaac Yong's Official Website | 楊征宇 官方網站",
    description:
        "Isaac Yong (楊征宇) is a singer-songwriter from Singapore. 代表作品：《深夜》 ",
};

export default function Home() {
    if (ENABLE_COMING_SOON_REDIRECT) {
        return <ComingSoon />;
    }

    return (
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
    );
}
