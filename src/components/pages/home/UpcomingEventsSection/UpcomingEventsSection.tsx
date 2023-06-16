import React from "react";
import classnames from "classnames/bind";

import styles from "./UpcomingEventsSection.module.scss";
import SectionHeader from "@/src/components/SectionHeader";

const cx = classnames.bind(styles);
export default function UpcomingEventsSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <SectionHeader title="Upcoming Events" noBorder className={cx('header')} />
            <div className={cx("content-container")}>
            </div>
        </div>
    );
}
