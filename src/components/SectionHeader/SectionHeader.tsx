import React from "react";
import classnames from "classnames/bind";

import styles from "./SectionHeader.module.scss";

const cx = classnames.bind(styles);

type SectionHeaderProps = {
    title: string;
    noBorder?: boolean;
};
export default function SectionHeader({
    title,
    noBorder = false,
}: SectionHeaderProps): JSX.Element {
    return (
        <div className={cx("container", { "no-border": noBorder })}>
            {title}
        </div>
    );
}
