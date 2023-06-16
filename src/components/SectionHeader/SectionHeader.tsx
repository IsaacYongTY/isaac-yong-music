import React from "react";
import classnames from "classnames/bind";

import styles from "./SectionHeader.module.scss";

const cx = classnames.bind(styles);

type SectionHeaderProps = {
    title: string;
    noBorder?: boolean;
    className?: string;
};
export default function SectionHeader({
    title,
    noBorder = false,
    className,
}: SectionHeaderProps): JSX.Element {
    return (
        <div className={cx("container", className, { "no-border": noBorder })}>
            {title}
        </div>
    );
}
