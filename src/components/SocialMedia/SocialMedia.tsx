"use client";

import React, { useState } from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { Close, Facebook, Instagram, Mail, YouTube } from "@mui/icons-material";
import { Dialog, DialogContent } from "@mui/material";

import SpotifyLogo from "@/public/spotify-icon-rgb-white.png";
import BilibiliWhiteLogo from "@/public/bilibili-white-icon.png";
import ContactForm from "@/src/components/ContactForm";

import styles from "./SocialMedia.module.scss";

const cx = classnames.bind(styles);

type SocialMediaProps = {
    color?: "grey" | "white";
};
export default function SocialMedia({ color }: SocialMediaProps): JSX.Element {
    const [showContactForm, setShowContactForm] = useState(false);

    const handleContactFormOnClose = (_: object, reason: string) => {
        console.log(reason);
        if (reason === "backdropClick" || reason !== "escapeKeyDown") {
            return;
        }

        setShowContactForm(false);
    };
    return (
        <>
            <div className={cx("container", color)}>
                <Link
                    href="https://instagram.com/isaacyongmusic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram />
                </Link>

                <Link
                    href="https://youtube.com/@isaacyongmusic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <YouTube />
                </Link>

                <Link
                    href="https://space.bilibili.com/472363645"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={BilibiliWhiteLogo}
                        alt="bilibili-logo"
                        width={32}
                        className={cx("bilibili-logo")}
                    />
                </Link>

                <Link
                    href="https://facebook.com/isaacyongmusic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Facebook />
                </Link>

                <Link
                    href="https://open.spotify.com/artist/1mQ2qm4xBo0bfl5NcaYdSk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={SpotifyLogo}
                        alt="spotify-logo"
                        width={30}
                        className={cx("spotify-logo")}
                    />
                </Link>

                <>
                    <Mail
                        onClick={() => setShowContactForm(true)}
                        sx={{ cursor: "pointer" }}
                        className={cx("mail")}
                    />
                    <Dialog
                        open={showContactForm}
                        onClose={handleContactFormOnClose}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItem: "center",
                            ".dialog-title": {
                                display: "flex",
                                justifyContent: "flex-end",
                                padding: "1.2rem",
                                svg: {
                                    color: "grey",
                                    cursor: "pointer",
                                },
                            },
                            ".subtitle": {
                                width: "100%",
                                textAlign: "center",
                                color: "#b28374",
                            },
                            ".MuiDialogContent-root": {
                                padding: "0",
                            },
                        }}
                        className={cx("modal")}
                    >
                        <div className={cx("dialog-title")}>
                            <Close onClick={() => setShowContactForm(false)} />
                        </div>

                        <div className={cx("subtitle")}>
                            <div>
                                Collaboration or live performances for your
                                event?
                            </div>
                            <div>
                                Write to us and we will get back to you within 3
                                working days!
                            </div>
                        </div>

                        <DialogContent className={cx("container")}>
                            <ContactForm />
                        </DialogContent>
                    </Dialog>
                </>
            </div>
        </>
    );
}
