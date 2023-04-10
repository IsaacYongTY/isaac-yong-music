import React from "react";
import classnames from "classnames/bind";

import styles from "./SectionHeader.module.scss";

const cx = classnames.bind(styles);

type SectionHeaderProps = {
    title: string;
};
export default function SectionHeader({
    title,
}: SectionHeaderProps): JSX.Element {
    return (
        <div className={cx("container")}>
            <h2>{title}</h2>
        </div>
    );
}
