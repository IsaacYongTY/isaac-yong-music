import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import MusicSheet from "@/public/homepage/music-sheet.jpg";
import MusicSheetBlackBg from "@/public/homepage/music-sheet-black-bg.jpg";
import MusicSheetPinkBg from "@/public/homepage/music-sheet-pink-bg.jpg";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";


import SectionHeader from "@/src/components/SectionHeader";

import styles from "./ArrangementSection.module.scss";
import Link from "next/link";
const cx = classnames.bind(styles);
export default function ArrangementSection(): JSX.Element {
    const router = useRouter();
    const handleOnClick = () => {
        router.push("/music-sheet-backup");
    };

    return (
        <div className={cx("container")}>
            <SectionHeader title="Learn My Arrangement" />
            <div className={cx("content-container")}>
                <div className={cx("text-container")}>
                    <div>
                        <p>
                            Want to skip the hassle of learning by replaying the
                            videos over and over, and learn all the minutes
                            details in my arrangement?
                        </p>

                        <p>
                            Now you can! If you have watched my video I
                            encouraged my audience to learn by ear as much as
                            possible. But sometimes we are just in a bit of a
                            time crunch, and we don&apos; know what we
                            don&apos;t know.
                        </p>

                        <p>
                            My music sheets are transcribed as close as possible
                            to what you hear in the videos, so you can learn and
                            appreciate the details that goes into the
                            arrangements. I hope they can provide you with
                            inspirations and tools in your musical journey!
                        </p>
                    </div>

                    <Button
                        variant="outlined"
                        size="large"
                        // onClick={handleOnClick}
                    >
                        <Link href="/music-sheets">Browse</Link>
                    </Button>
                </div>
                <div className={cx("image-container")}>
                    <Box sx={{ borderRadius: "16px" }}>
                        <Image
                            src={MusicSheetBlackBg}
                            alt="music-sheet-illustration"
                            width={400}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
}
