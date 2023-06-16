import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import Head from "next/head";

import IsaacYongSignature from "@/public/isaac-yong-signature.png";
import InMusicIsaacWithGuitar from "@/public/inmusic-isaac-with-guitar.jpg";
import SocialMedia from "@/src/components/SocialMedia/SocialMedia";

import styles from "./Jumbotron.module.scss";
import { Button } from "@mui/material";

const cx = classnames.bind(styles);
export default function Jumbotron(): JSX.Element {
    return (
        <>
            <Head>
                <title>
                    Isaac Yong&apos;s Official Website | 楊征宇 官方網站
                </title>
                <meta
                    name="description"
                    content="Isaac Yong (楊征宇) is a singer-songwriter from Singapore. 代表作品：《深夜》"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
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
                        width={500}
                        alt="isaac-yong-signature"
                        className={cx("logo")}
                    />

                    <div className={cx("text-container")}>
                        {/*<div className={cx("subtitle")}>*/}
                        {/*    PERFORMER · SINGER-SONGWRITER · CREATOR*/}
                        {/*</div>*/}
                        <div className={cx("subtitle")}>
                            Experience a world of musical bliss: Unleashing the
                            captivating fusion of gentle vocals, multilayered
                            fingerstyle guitar, and harmonious rhythms
                        </div>
                    </div>

                    <div className={cx("button-container")}>
                        <Button variant="contained" size="large">
                            GET IN TOUCH
                        </Button>
                    </div>

                    <SocialMedia color="grey" />
                </div>
            </div>
        </>
    );
}
