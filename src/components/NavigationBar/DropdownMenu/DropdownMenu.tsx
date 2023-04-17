import React from "react";
import classnames from "classnames/bind";

import styles from "./DropdownMenu.module.scss";

const cx = classnames.bind(styles);
export default function DropdownMenu(): JSX.Element {
    return <div className={cx("container")}></div>;
};

