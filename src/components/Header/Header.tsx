import React from "react";
import classnames from "classnames/bind";
import Link from "next/link";

import IsaacYongSignature from "public/isaac-yong-signature.png";
import styles from "./Header.module.scss";
import Image from "next/image";
const cx = classnames.bind(styles);
const Header: React.FC = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("links-container")}>
                <Link href="/about-me">About Me</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/music-sheet">Music Sheets</Link>
            </div>
            <Image src={IsaacYongSignature} width={200} alt="isaac-yong-signature" />
            <div className={cx("links-container")}>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;
