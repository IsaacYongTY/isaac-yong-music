import React from "react";
import classnames from "classnames/bind";
import { Button } from "@mui/material";
import Image from "next/image";

import SectionHeader from "@/src/components/SectionHeader";
import AdamChanGuitars from "@/public/adam-chan-logo.png";
import LittleBandPlusLogo from "@/public/little-band-plus-logo.jpg";
import YamahaLogo from "@/public/yamaha-logo.png";

import styles from "./PartnersSection.module.scss";

const cx = classnames.bind(styles);
export default function PartnersSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <SectionHeader title="Partners" noBorder className={cx('header')} />
            <div className={cx("content-container")}>
                <div className={cx("logo-container")}>
                    <Image
                        src={AdamChanGuitars}
                        width={150}
                        alt="adam-chan-guitars"
                    />
                    <Image
                        src={LittleBandPlusLogo}
                        width={150}
                        alt="little-band-plus"
                    />
                    <Image src={YamahaLogo} height={50} alt="yamaha-logo" />
                </div>

                <div className={cx("button-container")}>
                    <Button variant="outlined" size="large">Learn More</Button>
                </div>
            </div>
        </div>
    );
}
