import React from "react";
import classnames from "classnames/bind";

import styles from "./EventCard.module.scss";

const cx = classnames.bind(styles);
export default function EventCard() {
    return (
        <div className={cx("container")}>
            <div>
                <div>
                    <div>Escobar</div>
                    <div>with Zerlene Cheng</div>
                </div>
                <div>
                    <div>7.45pm - 10.45pm</div>
                    <div>Friday</div>
                </div>

                <div>
                    <div>Mandopop, Cantopop, Top 40</div>
                    <div>
                        <a>GET DIRECTION</a>
                        <a>MAKE RESERVATION</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
