import React from "react";
import classnames from "classnames/bind";
import { Button } from "@mui/material";
import Link from "next/link";

import SectionHeader from "@/src/components/SectionHeader";
import VideoPlayer from "@/src/components/VideoPlayer";

import styles from "./LatestVideoSection.module.scss";

const cx = classnames.bind(styles);
export default function LatestVideoSection(): JSX.Element {
    return (
        <div className={cx("container")} id="videos">
            <SectionHeader title="Latest Video" />

            <VideoPlayer url="https://www.youtube.com/playlist?list=PL020eiw54Omc-1TCgbD2BpcxMhIp9W-jn" />

            <Button variant="outlined" size="large">
                <Link
                    href="https://youtube.com/@isaacyongmusic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Watch More on YouTube
                </Link>
            </Button>
        </div>
    );
}
