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
                <Link href="/about-me">ABOUT</Link>
                <Link href="/music">MUSIC</Link>
                <Link href="/videos">VIDEOS</Link>
                {/*//TODO: to think of proper title*/}
                <Link href="/calendar">CALENDAR</Link>
            </div>

            <Link href="/">
                <Image
                    src={IsaacYongSignature}
                    width={200}
                    alt="isaac-yong-signature"
                />
            </Link>
            <div className={cx("links-container")}>
                {/*<Link href="/shop">SHOP</Link>*/}
                <Link href="/music-sheet">MUSIC SHEETS</Link>
                {/*//TODO: show dropdown*/}
                <div className={cx("dropdown-container")}>
                    <Link href="/contact-us">SERVICES</Link>
                    <div className={cx("dropdown-menu")}>
                        <Link href="/events">EVENTS</Link>
                        <Link href="/consultations">CONSULTATIONS</Link>
                        <Link href="/lessons">LESSONS</Link>
                    </div>
                </div>
                <Link href="/contact-us">GET IN TOUCH</Link>
                {/*<Link href="/blog">BLOG</Link>*/}
            </div>
        </div>
    );
};

export default Header;
