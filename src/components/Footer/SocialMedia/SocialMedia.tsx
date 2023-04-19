import React, { useState } from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, YouTube } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, Modal } from "@mui/material";

import SpotifyLogo from "@/public/spotify-icon-rgb-white.png";
import BilibiliWhiteLogo from "@/public/bilibili-white-icon.png";
import ContactForm from "@/src/components/ContactForm";

import styles from "./SocialMedia.module.scss";

const cx = classnames.bind(styles);
export default function SocialMedia(): JSX.Element {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <>
            <div className={cx("container")}>
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
                    href="https://facebook.com/isaacyongmusic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Facebook />
                </Link>

                <>
                    <Mail onClick={() => setShowContactForm(true)} />
                    <Dialog
                        open={showContactForm}
                        onClose={() => setShowContactForm(false)}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItem: "center",
                        }}
                        className={cx("modal")}
                    >
                        <DialogTitle>Get in Touch</DialogTitle>
                        <DialogContent className={cx("container")}>
                            <ContactForm />
                        </DialogContent>
                    </Dialog>
                </>

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
            </div>
        </>
    );
}
