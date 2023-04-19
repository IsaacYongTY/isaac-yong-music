import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import axios from "axios";

import NavigationBar from "@/src/components/NavigationBar";
import Footer from "@/src/components/Footer";

import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { MusicSheet } from "@/src/pages/api/notion/music-sheet";
import MusicSheetCard from "@/src/components/MusicSheetCard";

import styles from "./MusicSheets.module.scss";
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
                <div className={cx("subtitle")}>
                    Unfortunately, I cannot offer the music sheets for free due
                    to copyright restrictions. However, they are available for
                    purchase on MyMusicSheet, and a portion of the sales will be
                    distributed to the publishers, artists, and songwriters. By
                    supporting them, we can make a difference in the music
                    industry and help sustain the careers of talented musicians.
                    Let&apos;s play our part together!
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
