import React from "react";
import classnames from "classnames/bind";
import Link from "next/link";

import MusicSheetCard from "./MusicSheetCard";

import { MusicSheet } from "@/src/app/(website)/music-sheets/types";
import SectionHeader from "@/src/components/SectionHeader";
import { getMusicSheets } from "@/src/app/(website)/music-sheets/api";

import styles from "./MusicSheets.module.scss";

const cx = classnames.bind(styles);

export default async function MusicSheets() {
    const musicSheets = await getMusicSheets();

    return (
        <div className={cx("container")}>
            <div className={cx("content-container")}>
                <SectionHeader title="MUSIC SHEETS" />
                <div className={cx("subtitle")}>
                    I am unable to provide the music sheets for free due to
                    copyright restrictions, but you can purchase them on{" "}
                    <Link
                        href="https://www.mymusicsheet.com/isaacyongmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MyMusicSheet
                    </Link>
                    . A percentage of the proceeds will go to the publishers,
                    artists, and songwriters, supporting talented musicians and
                    sustaining their careers. Let us play a part together in
                    supporting the musicians!
                </div>

                <div className={cx("cards-container")}>
                    {musicSheets.map((musicSheet, index) => (
                        <MusicSheetCard key={index} musicSheet={musicSheet} />
                    ))}
                </div>
            </div>
        </div>
    );
}
