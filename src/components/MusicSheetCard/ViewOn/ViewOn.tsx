import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, YouTube } from "@mui/icons-material";

import SpotifyLogo from "@/public/spotify-icon-rgb-white.png";
import BilibiliWhiteLogo from "@/public/bilibili-white-icon.png";

import styles from "./ViewOn.module.scss";

const cx = classnames.bind(styles);

type ViewOnProps = {
    youTubeUrl?: string;
    spotifyUrl?: string;
    bilibiliUrl?: string;
};
export default function ViewOn({ youTubeUrl, spotifyUrl, bilibiliUrl }: ViewOnProps): JSX.Element {
    return (
        <div className={cx("container")}>
            {youTubeUrl && (
                <Link
                    href={youTubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <YouTube />
                </Link>
            )}

            {spotifyUrl && (
                <Link
                    href={spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={SpotifyLogo}
                        alt="spotify-logo"
                        width={24}
                        className={cx("spotify-logo")}
                    />
                </Link>
            )}

            {bilibiliUrl && (
                <Link
                    href={bilibiliUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={BilibiliWhiteLogo}
                        alt="bilibili-logo"
                        width={32}
                        className={cx("bilibili-logo")}
                    />
                </Link>
            )}
        </div>
    );
}
