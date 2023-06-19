import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";

import SectionHeader from "@/src/components/SectionHeader";
import PlayingGuitarCloseUp from "@/public/homepage/playing-guitar-close-up.png";

import styles from "./UpcomingEventsSection.module.scss";
import EventCard from "@/src/components/home/UpcomingEventsSection/EventCard";

const cx = classnames.bind(styles);
export default function UpcomingEventsSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <SectionHeader
                title="Upcoming Events"
                noBorder
                className={cx("header")}
            />
            <div className={cx("background-image")}>
                <div className={cx("overlay")} />
                <Image
                    src={PlayingGuitarCloseUp}
                    alt="playing-guitar-close-up"
                />
            </div>
            <div className={cx("content-container")}>
                <EventCard />
            </div>
        </div>
    );
}
