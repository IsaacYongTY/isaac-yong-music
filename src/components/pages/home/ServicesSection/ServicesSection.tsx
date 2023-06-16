import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import SectionHeader from "@/src/components/SectionHeader";

import styles from "./ServicesSection.module.scss";


const cx = classnames.bind(styles);
export default function ServicesSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <SectionHeader title="Services" noBorder className={cx("header")} />
            <div className={cx("content-container")}></div>
        </div>
    );
}
