import React, { useMemo } from "react";
import classnames from "classnames/bind";

import styles from "./Footer.module.scss";
import SocialMedia from "@/src/components/SocialMedia";

const cx = classnames.bind(styles);
export default function Footer(): JSX.Element {
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className={cx("container")}>
            <div>
                {" "}
                Links <SocialMedia />{" "}
            </div>
            <div className={cx("copyright-container")}>
                <p>Created by Long Tails Co.</p>
                <div className={cx("copyright")}>
                    &copy; Copyright {year} Isaac Yong Music. All Rights
                    Reserved
                </div>
            </div>
        </div>
    );
}
