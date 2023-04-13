import React from "react";

import styles from "./404.module.scss";
import classnames from "classnames/bind";
import { Button } from "@mui/material";
import Link from "next/link";
import NavigationBar from "@/src/components/NavigationBar";
import Image from "next/image";

import MimoInGuitarCase from 'public/mimo-in-guitar-case.jpeg'

const cx = classnames.bind(styles);
export default function ErrorPage404(): JSX.Element {
    return (
        <div className={cx("container")}>
            <NavigationBar />
            <div className={cx("content-container")}>
                <div className={cx("error-header")}>404</div>
                <div className={cx("error-text")}>
                    Oops! We couldn&apos;t find the page you were looking for. Please
                    check the URL and try again.
                </div>

                <div className={cx('image-container')}>
                    <p>Here is a cat photo for you</p>
                    <Image src={MimoInGuitarCase} width={400} alt="mimo-cat-in-guitar-case" />
                </div>
                <Link href="/">
                    <Button variant="contained">Hello Mimo (Go Home)</Button>{" "}
                </Link>
            </div>
        </div>
    );
}
