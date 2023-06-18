import React from "react";
import classnames from "classnames/bind";

import NavigationBar from "@/src/components/layout/NavigationBar";
import Footer from "@/src/components/layout/Footer";

import styles from "./PageTemplate.module.scss";

const cx = classnames.bind(styles);
export default function PageTemplate(): JSX.Element {
    return (
        <div className={cx("container")}>
            <NavigationBar isSticky={true} />

            <div className={cx("content-container")}></div>

            <Footer />
        </div>
    );
}
