import React, { useState } from "react";
import classnames from "classnames/bind";
import { Spotify } from "react-spotify-embed";

import SectionHeader from "@/src/components/SectionHeader";

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
            <SectionHeader title="Listen" noBorder className={cx("header")} />
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
        </div>
    );
}
