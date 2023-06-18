import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import axios from "axios";
import Link from "next/link";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

import { MusicSheet } from "@/src/components/api/notion/types";
import NavigationBar from "@/src/components/NavigationBar";
import Footer from "@/src/components/Footer";
import MusicSheetCard from "@/src/components/MusicSheetCard";

import styles from "./MusicSheets.module.scss";
import SectionHeader from "@/src/components/SectionHeader";
const cx = classnames.bind(styles);

export default function MusicSheets(): JSX.Element {
    const [musicSheets, setMusicSheets] = useState<MusicSheet[]>([]);
    const fetchMusicSheets = async () => {
        try {
            const { data } = await axios.get<{ data: MusicSheet[] }>(
                "/api/notion/music-sheet"
            );

            console.log(data);
            setMusicSheets(data.data);
        } catch (err) {
            enqueueSnackbar({
                message: "Something went wrong. Please try again later",
                variant: "error",
            });
            console.log(err);
        }
    };

    useEffect(() => {
        fetchMusicSheets();
    }, []);
    return (
        <div className={cx("container")}>
            <SnackbarProvider
                className={cx("snackbar")}
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            />
            <NavigationBar isSticky={true} />

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

            <Footer />
        </div>
    );
}
