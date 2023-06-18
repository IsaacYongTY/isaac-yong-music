import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";

import styles from "./IntroSection.module.scss";

import IsaacIntroPhoto from "@/public/homepage/isaac-intro-photo.png";
import { Button } from "@mui/material";

const cx = classnames.bind(styles);
export default function IntroSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <div className={cx("content-container")}>
                <div className={cx("image-container")}>
                    <Image
                        src={IsaacIntroPhoto}
                        alt={"rockestra-isaac-electric-guitar"}
                        width={400}
                        // height={500}
                    />
                </div>
                <div className={cx("text-container")}>
                    <div>
                        <h1>HEY THERE! 👋</h1>
                        <p>
                            I&apos;m Isaac, a singer-songwriter, performer, and
                            content creator. My adventure into the world of
                            music kicked off pretty casually - plunking out TV
                            theme songs on the piano. Before long, I found
                            myself playing the violin in a string orchestra, and
                            then it happened - I fell head over heels for the
                            guitar! 🎸
                        </p>
                        <p>
                            I decided to dive right in and make music my life.
                            Along the way, singing and songwriting joined the
                            mix. My professional journey began with singing at
                            weddings and livening up corporate events with my
                            tunes. I get to play music, connecting people and
                            creating memories.
                        </p>
                        <p>
                            When I&apos;m not out there performing, you can
                            usually find me huddled in my studio, jamming and
                            recording both original tracks and covers.
                        </p>
                        <p>
                            I love talking about music just as much as I love
                            making it. Sharing knowledge and seeing
                            someone&apos;s eyes light up when they strum their
                            first chord is like magic to me. Whether it’s
                            through workshops, online tutorials or just a
                            friendly chat, I&apos;m all about helping others
                            catch the music bug. 🎶
                        </p>
                    </div>
                    <Button variant="outlined" size="large">
                        Learn More About Me
                    </Button>
                </div>
            </div>
        </div>
    );
}
