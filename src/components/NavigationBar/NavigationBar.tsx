"use client";

import React, { useEffect, useState } from "react";

import classnames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import IsaacYongSignature from "public/isaac-yong-signature.png";
import styles from "./NavigationBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { menu } from "@/src/common/constants";
import LinkItem from "@/src/components/NavigationBar/LinkItem";
import { Drawer } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import SocialMedia from "@/src/components/SocialMedia";
import { Close } from "@mui/icons-material";
import DrawerLinkItem from "@/src/components/DrawerLinkItem";

const cx = classnames.bind(styles);

type NavigationBarProps = {
    isSticky?: boolean;
};
export default function NavigationBar({
    isSticky = false,
}: NavigationBarProps): JSX.Element {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div className={cx("container", { sticky: isSticky })}>
            <div className={cx("links-container")}>
                {menu.slice(0, Math.ceil(menu.length / 2)).map((item) => (
                    <LinkItem item={item} key={item.href} />
                ))}
            </div>

            <Link href="/">
                <Image
                    src={IsaacYongSignature}
                    width={200}
                    alt="isaac-yong-signature"
                />
            </Link>

            <div className={cx("links-container")}>
                {menu.slice(Math.ceil(menu.length / 2)).map((item) => (
                    <LinkItem item={item} key={item.href} />
                ))}
            </div>

            <div className={cx("drawer-container")}>
                <MenuIcon
                    onClick={() => setShowDrawer(true)}
                    className={cx("menu-icon")}
                />
                <Drawer
                    open={showDrawer}
                    anchor="right"
                    onClose={() => setShowDrawer(false)}
                    className={cx("drawer")}
                >
                    <div className={cx("drawer-header")}>
                        <Close onClick={() => setShowDrawer(false)} />
                    </div>
                    <div className={cx("drawer-menu-item-container")}>
                        {menu.map((item, index) => (
                            <DrawerLinkItem item={item} key={index} />
                        ))}
                    </div>

                    <div className={cx("social-media-container")}>
                        <SocialMedia />
                    </div>
                </Drawer>
            </div>
        </div>
    );
}
