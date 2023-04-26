import React from "react";
import classnames from "classnames/bind";

import styles from "./NavigationDrawer.module.scss";
import { Close } from "@mui/icons-material";
import { menu } from "@/src/common/constants";
import DrawerLinkItem from "@/src/components/NavigationDrawer/DrawerLinkItem";
import SocialMedia from "@/src/components/SocialMedia";
import { Drawer } from "@mui/material";

const cx = classnames.bind(styles);

type NavigationDrawerProps = {
    onClose: () => void;
    open: boolean;
};
export default function NavigationDrawer({
    open,
    onClose,
}: NavigationDrawerProps): JSX.Element {
    return (
        <Drawer
            open={open}
            anchor="right"
            onClose={onClose}
            className={cx("container")}
        >
            <div className={cx("header")}>
                <Close onClick={onClose} className={cx("close-icon")} />
            </div>
            <div className={cx("link-items-container")}>
                {menu.map((item, index) => (
                    <DrawerLinkItem item={item} key={index} />
                ))}
            </div>

            <div className={cx("social-media-container")}>
                <SocialMedia />
            </div>
        </Drawer>
    );
}
