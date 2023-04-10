import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, YouTube } from "@mui/icons-material";

import SpotifyLogo from "@/public/spotify-icon-rgb-white.png";

import styles from "./SocialMedia.module.scss";

const cx = classnames.bind(styles);
export default function SocialMedia(): JSX.Element {
    return (
        <div className={cx("container")}>
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

            <Link
                href="https://open.spotify.com/artist/1mQ2qm4xBo0bfl5NcaYdSk"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={SpotifyLogo}
                    alt="spotify-logo"
                    width={30}
                    className={cx("spotify-logo")}
                />
            </Link>
        </div>
    );
}
