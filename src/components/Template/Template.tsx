import React from "react";
import classnames from "classnames/bind";

import styles from "./Template.module.scss";

const cx = classnames.bind(styles);
export default function Template(): JSX.Element {
    return <div className={cx("container")}></div>;
}
