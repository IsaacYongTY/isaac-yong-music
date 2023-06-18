import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import SectionHeader from "@/src/components/SectionHeader";

import styles from "./LatestVideoSection.module.scss";
import VideoPlayer from "@/src/components/VideoPlayer";
import { Button } from "@mui/material";

const cx = classnames.bind(styles);
export default function LatestVideoSection(): JSX.Element {
    return (
        <div className={cx("container")} id="videos">
            <SectionHeader title="Latest Video" />

            <VideoPlayer url="https://www.youtube.com/playlist?list=PL020eiw54Omc-1TCgbD2BpcxMhIp9W-jn" />

            <Button variant="outlined" size="large">
                Watch More
            </Button>
        </div>
    );
}
