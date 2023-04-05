import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";

import IsaacYongSignature from "public/isaac-yong-signature.png";
import InMusicIsaacWithGuitar from "public/inmusic-isaac-with-guitar.jpg";

import styles from "./ComingSoon.module.scss";
import {
    Facebook,
    Instagram,
    Mail,
    YouTube,
    YoutubeSearchedForTwoTone,
} from "@mui/icons-material";
import Link from "next/link";

const cx = classnames.bind(styles);
export default function ComingSoon(): JSX.Element {
    return (
        <div className={cx("container")}>
            <div className={cx("background-container")}>
                <Image
                    src={InMusicIsaacWithGuitar}
                    alt="isaac-with-guitar-inmusic"
                    fill
                />
                <div className={cx("overlay")} />
            </div>

            <div className={cx("content")}>
                <Image
                    src={IsaacYongSignature}
                    width={400}
                    alt="isaac-yong-signature"
                />

                <div className={cx("text-container")}>
                    <div className={cx("header")}>COMING SOON 2023</div>
                    <div className={cx("subtitle")}>
                        WEBSITE REVAMP IN PROGRESS
                    </div>
                </div>

                <div className={cx("social-media-container")}>
                    <Link
                        href="https://instagram.com/isaacyongmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram />
                    </Link>

                    <Link
                        href="https://youtube.com/@isaacyongmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <YouTube />
                    </Link>

                    <Link
                        href="https://facebook.com/isaacyongmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Facebook />
                    </Link>

                    <Link
                        href="mailto:contact@isaacyong.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail />
                    </Link>
                </div>
            </div>
        </div>
    );
}
