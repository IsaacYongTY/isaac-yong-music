import React from "react";
import classnames from "classnames/bind";
import dynamic from "next/dynamic";

// dynamic needed to bypass hydration error
// Ref: https://nextjs.org/docs/messages/react-hydration-error
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import styles from "./VideoPlayer.module.scss";

const cx = classnames.bind(styles);

type VideoPlayerProps = {
    url: string;
};
export default function VideoPlayer({ url }: VideoPlayerProps): JSX.Element {
    return (
        <div className={cx("container")}>
            <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                className={cx("react-player")}
            />
        </div>
    );
}
