import React, { useState } from "react";
import classnames from "classnames/bind";
import { Spotify } from "react-spotify-embed";
import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/src/components/SectionHeader";
import kkBoxLogoRGB from "@/public/social-media/kkbox-logo-rgb.png";
import qqMusicLogoRGB from "@/public/social-media/qq-music-logo-rgb.png";
import appleMusicIconRGB from "@/public/social-media/apple-music-icon-rgb.svg";

import {
    coverSongs,
    originalSongs,
} from "@/src/components/pages/home/ListenSection/constants";

import styles from "./ListenSection.module.scss";

const cx = classnames.bind(styles);

export default function ListenSection(): JSX.Element {
    // window.onSpotifyIframeApiReady
    const [spotifyLink, setSpotifyLink] = useState(originalSongs[0].link);

    return (
        <div className={cx("container")} id="music">
            <div>
                <SectionHeader
                    title="Listen"
                    noBorder
                    className={cx("header")}
                />
                <div className={cx("content-container")}>
                    <Spotify link={spotifyLink} />
                    <div className={cx("selector-container")}>
                        <div className={cx("song-list")}>
                            <h3>ORIGINAL</h3>
                            {originalSongs.map((song) => (
                                <button
                                    className={cx("button", {
                                        selected: spotifyLink === song.link,
                                    })}
                                    onClick={() => setSpotifyLink(song.link)}
                                    key={song.link}
                                >
                                    {song.title}
                                </button>
                            ))}
                        </div>

                        <div className={cx("song-list")}>
                            <h3>COVER</h3>
                            {coverSongs.map((song) => (
                                <button
                                    className={cx("button", {
                                        selected: spotifyLink === song.link,
                                    })}
                                    onClick={() => setSpotifyLink(song.link)}
                                    key={song.link}
                                >
                                    {song.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx("cta-container")}>
                    <button>
                        <Link
                            href="https://open.spotify.com/artist/1mQ2qm4xBo0bfl5NcaYdSk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LISTEN ON SPOTIFY
                        </Link>
                    </button>
                </div>
            </div>
            <div className={cx("other-platforms-container")}>
                <span>ALSO AVAILABLE ON </span>
                <span>
                    <Link
                        href="https://www.kkbox.com/sg/en/artist/KqkvPmJYQwYgmSlUIZ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={kkBoxLogoRGB}
                            alt="kk-box-logo"
                            width={60}
                            height={30}
                            className={cx("kk-box-logo")}
                        />
                    </Link>

                    <Link
                        href="https://y.qq.com/n/ryqq/singer/004AY8NX3C1ZvD"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={qqMusicLogoRGB}
                            alt="qq-music-logo"
                            width={30}
                            className={cx("qq-music-logo")}
                        />
                    </Link>

                    <Link
                        href="https://music.apple.com/us/artist/isaac-yong/1546059291"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={appleMusicIconRGB}
                            alt="apple-music-logo"
                            width={30}
                            className={cx("apple-music-logo")}
                        />
                    </Link>
                </span>
            </div>
        </div>
    );
}
