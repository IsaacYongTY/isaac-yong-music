import React from "react";
import classnames from "classnames/bind";

import styles from "./Template.module.scss";

const cx = classnames.bind(styles);
const Template: React.FC = () => {
    return <div className={cx("container")}></div>;
};

export default Template;
