import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import MusicSheetPlaceholder from "@/public/homepage/music-sheet-placeholder.jpg";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";

import SectionHeader from "@/src/components/SectionHeader";

import styles from "./ArrangementSection.module.scss";
const cx = classnames.bind(styles);
export default function ArrangementSection(): JSX.Element {
    const router = useRouter();
    const handleOnClick = () => {
        router.push("/music-sheets");
    };

    return (
        <div className={cx("container")}>
            <SectionHeader title="Learn My Arrangement" />
            <div className={cx("content-container")}>
                <div className={cx("text-container")}>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ac nisl sit amet sapien mattis condimentum sed
                        ut urna. Nulla viverra, nulla eget congue posuere, diam
                        velit aliquet ante, vel feugiat nisl purus a nibh.
                        Vivamus sem ipsum, pellentesque convallis rutrum et,
                        sollicitudin eu eros. Aenean massa dui, faucibus nec
                        pellentesque at, viverra vel ipsum. Proin ut erat
                        ligula. Proin vel ligula non ex consectetur malesuada.
                        Aenean aliquet velit sed massa pellentesque, eget
                        porttitor risus porta. Mauris euismod vel leo sed
                        posuere. Quisque vitae vestibulum turpis. In euismod
                        elit eget lacus pulvinar aliquet. Maecenas nec
                        scelerisque ligula. Vestibulum vitae scelerisque leo. Ut
                        rutrum eros nec blandit ultricies. Vivamus tempus enim
                        eu nibh laoreet accumsan maximus nec eros. Vestibulum
                        iaculis non nunc et molestie. Nulla est dolor, vehicula
                        sed enim vel, facilisis finibus justo.
                    </div>

                    <Button
                        variant="outlined"
                        size="large"
                        onClick={handleOnClick}
                    >
                        Browse
                    </Button>
                </div>
                <div className={cx("image-container")}>
                    <Box sx={{ borderRadius: "16px" }}>
                        <Image
                            src={MusicSheetPlaceholder}
                            alt="music-sheet-illustration"
                            width={400}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
}
