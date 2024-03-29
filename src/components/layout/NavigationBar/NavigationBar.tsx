"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Menu } from "@mui/icons-material";
import classnames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import IsaacYongSignature from "@/public/isaac-yong-signature.png";
import { menu } from "@/src/common/menu";
import LinkItem from "@/src/components/layout/NavigationBar/LinkItem";
import NavigationDrawer from "@/src/components/layout/NavigationDrawer";

import styles from "./NavigationBar.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
const cx = classnames.bind(styles);

type NavigationBarProps = {
    isSticky?: boolean;
};
export default function NavigationBar({
    isSticky = false,
}: NavigationBarProps): JSX.Element {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [showDrawer, setShowDrawer] = useState(false);

    const filteredMenu = useMemo(
        () => menu.filter((item) => item.isActive),
        []
    );

    // close the drawer if there is change in path
    useEffect(() => {
        setShowDrawer(false);
    }, [pathname, searchParams]);

    return (
        <div className={cx("container", { sticky: isSticky })}>
            <div className={cx("links-container", "left")}>
                {filteredMenu
                    .slice(0, Math.ceil(filteredMenu.length / 2))
                    .map((item) => (
                        <LinkItem item={item} key={item.href} />
                    ))}
            </div>

            <Link href="/">
                <Image
                    src={IsaacYongSignature}
                    width={200}
                    alt="isaac-yong-signature"
                    className={cx("signature")}
                />
            </Link>

            <div className={cx("links-container", "right")}>
                {filteredMenu
                    .slice(Math.ceil(filteredMenu.length / 2))
                    .map((item) => (
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
