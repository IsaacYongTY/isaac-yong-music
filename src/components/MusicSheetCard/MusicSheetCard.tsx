import React from "react";
import classnames from "classnames/bind";

import styles from "./MusicSheetCard.module.scss";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Link,
} from "@mui/material";
import SocialMedia from "@/src/components/SocialMedia";
import { MusicSheet } from "@/src/pages/api/notion/types";
import ViewOn from "@/src/components/MusicSheetCard/ViewOn";
import {
    AddShoppingCart,
    ShoppingBag,
    ShoppingBasket,
    ShoppingCart,
} from "@mui/icons-material";

const cx = classnames.bind(styles);

type MusicSheetCardProps = {
    musicSheet: MusicSheet;
};
export default function MusicSheetCard({
    musicSheet,
}: MusicSheetCardProps): JSX.Element {
    return (
        <div className={cx("container")}>
            <Card sx={{ maxWidth: "250px" }} className={cx('card')}>
                <CardHeader
                    title={`${musicSheet.title} - ${musicSheet.artist}`}
                />

                <CardMedia
                    component="img"
                    image={
                        musicSheet.thumbnail ||
                        "https://placehold.co/200x200?text=No+Image"
                    }
                    height={250}
                />
                <CardContent className={cx("card-content-container")}>
                    <div className={cx("view-on-container")}>
                        {/*<span>VIEW ON</span>*/}
                        <ViewOn
                            youTubeUrl={musicSheet.youTubeUrl}
                            spotifyUrl={musicSheet.spotifyUrl}
                            bilibiliUrl={musicSheet.bilibiliUrl}
                        />
                    </div>

                    <div className={cx("button-container")}>
                        <Link
                            href={musicSheet.myMusicSheetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                endIcon={<ShoppingCart />}
                                variant="contained"
                            >
                                Buy
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
