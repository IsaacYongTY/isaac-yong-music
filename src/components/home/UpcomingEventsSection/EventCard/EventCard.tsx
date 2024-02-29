import React from "react";
import classnames from "classnames/bind";

import { EventInfo } from "../types";

import styles from "./EventCard.module.scss";

const cx = classnames.bind(styles);

type EventCardProps = {
    event: EventInfo;
};
export default function EventCard({ event }: EventCardProps) {
    return (
        <div className={cx("container")}>
            <div className={cx("row")}>
                <div className={cx("venue-container")}>
                    <div className={cx("venue")}>{event.venue}</div>
                    <div>with {event.partners.join(", ")}</div>
                </div>
                <div className={cx("date-container")}>
                    <div className={cx("date")}>{event.date}</div>
                    <div className={cx("time")}>
                        {event.startTime} - {event.endTime}
                    </div>
                </div>
            </div>

            <div className={cx("row")}>
                <div className={cx("action-container")}>
                    <a
                        href={event.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WEBSITE
                    </a>
                    <a
                        href={event.googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GET DIRECTION
                    </a>
                </div>
            </div>
        </div>
    );
}
