import React from "react";
import classnames from "classnames/bind";

import NavigationBar from "@/src/components/NavigationBar";
import Footer from "@/src/components/Footer";

import styles from "./EventsPage.module.scss";

const cx = classnames.bind(styles);
export default function EventsPage(): JSX.Element {
    return (
        <div className={cx("container")}>
            <NavigationBar isSticky={true} />

            <div className={cx("content-container")}>Events</div>

            <Footer />
        </div>
    );
}
