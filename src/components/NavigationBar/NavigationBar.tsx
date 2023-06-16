"use client";

import React, { useState } from "react";

import classnames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import IsaacYongSignature from "public/isaac-yong-signature.png";
import { menu } from "@/src/common/constants";
import LinkItem from "@/src/components/NavigationBar/LinkItem";
import { Close, Menu } from "@mui/icons-material";
import NavigationDrawer from "@/src/components/NavigationDrawer";

import styles from "./NavigationBar.module.scss";
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
                    className={cx('signature')}
                />
            </Link>

            <div className={cx("links-container")}>
                {menu.slice(Math.ceil(menu.length / 2)).map((item) => (
                    <LinkItem item={item} key={item.href} />
                ))}
            </div>

            <div className={cx("drawer-container")}>
                <Menu
                    onClick={() => setShowDrawer(true)}
                    className={cx("menu-icon")}
                />
                <NavigationDrawer
                    open={showDrawer}
                    onClose={() => setShowDrawer(false)}
                />
            </div>
        </div>
    );
}
