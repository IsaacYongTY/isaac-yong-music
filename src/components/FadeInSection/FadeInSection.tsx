import React, { ReactNode, useEffect, useRef, useState } from "react";
import classnames from "classnames/bind";

import styles from "./FadeInSection.module.scss";
import { Fade } from "@mui/material";

const cx = classnames.bind(styles);

type FadeInSectionProps = {
    children?: ReactNode;
    reverse: boolean;
};
export default function FadeInSection({
    children,
    reverse,
}: FadeInSectionProps) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // if (entry.isIntersecting) {
                setTimeout(() => {
                    setVisible(entry.isIntersecting);
                }, 100);
                // }
            });
        });

        const current = domRef.current;

        if (!current) return;

        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);
    return (
        <div
            className={cx("fade-in-section", {
                "is-visible": isVisible,
                reverse,
            })}
            ref={domRef}
        >
            <Fade in={isVisible}>
                <div>{children}</div>
            </Fade>
        </div>
    );
}
