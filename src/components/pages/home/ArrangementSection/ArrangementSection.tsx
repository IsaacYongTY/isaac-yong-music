import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import SectionHeader from "@/src/components/SectionHeader";

import styles from "./ArrangementSection.module.scss";

const cx = classnames.bind(styles);
export default function ArrangementSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <SectionHeader title="Learn My Arrangement" />
        </div>
    );
}
