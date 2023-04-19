import React, { useState } from "react";
import classnames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import IsaacYongSignature from "public/isaac-yong-signature.png";
import styles from "./NavigationBar.module.scss";
import { menu } from "@/src/common/constants";
import { useRouter } from "next/router";
import DropdownMenu from "@/src/components/NavigationBar/LinkItem/DropdownMenu";
import { Collapse, Fade } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import LinkItem from "@/src/components/NavigationBar/LinkItem";
const cx = classnames.bind(styles);

type NavigationBarProps = {
    isSticky?: boolean;
};
export default function NavigationBar({
    isSticky = false,
}: NavigationBarProps): JSX.Element {


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
        </div>
    );
}
