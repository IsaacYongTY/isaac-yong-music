import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";

import SectionHeader from "@/src/components/SectionHeader";
import PlayingGuitarCloseUp from "@/public/homepage/playing-guitar-close-up.png";

import EventCard from "@/src/components/home/UpcomingEventsSection/EventCard";
import { eventsInfo } from "@/src/components/home/UpcomingEventsSection/constants";

import styles from "./UpcomingEventsSection.module.scss";

const cx = classnames.bind(styles);

export default function UpcomingEventsSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <div className={cx("background-container")}>
                <div className={cx("image-container")}>
                    <Image
                        src={PlayingGuitarCloseUp}
                        alt="playing-guitar-close-up"
                        // height={850}
                        fill
                    />
                </div>
                <div className={cx("overlay")} />
            </div>

            <SectionHeader
                title="Upcoming Events"
                noBorder
                className={cx("header")}
            />

            <div className={cx("content-container")}>
                <div className={cx("event-card-container")}>
                    {eventsInfo.map((event, index) => (
                        <EventCard event={event} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
