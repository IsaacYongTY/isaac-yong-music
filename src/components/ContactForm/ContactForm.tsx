"use client";

import React, { useState } from "react";
import classnames from "classnames/bind";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import styles from "./ContactForm.module.scss";

const cx = classnames.bind(styles);
const ContactForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const { executeRecaptcha } = useGoogleReCaptcha();

    const clearForm = () => {
        setEmail("");
        setFirstName("");
        setLastName("");
        setSubject("");
        setMessage("");
    };
    const submitForm = async () => {
        try {
            await axios.post("/api/contact", {
                email,
                firstName,
                lastName,
                subject,
                message,
            });
        } catch (err) {
            throw err;
        }
    };

    const verifyRecaptcha = async (token: string) => {
        try {
            await axios.post("/api/recaptcha/verify", {
                token,
            });
        } catch (err) {
            throw err;
        }
    };

    const handleSubmit = async () => {
        try {
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }

            const token = await executeRecaptcha("submitContactForm");

            await verifyRecaptcha(token);
            await submitForm();

            clearForm();

            enqueueSnackbar({
                message: "Your message has been sent successfully!",
                variant: "success",
            });
        } catch {
            enqueueSnackbar({
                message: "Something went wrong. Please try again later",
                variant: "error",
            });
        }
    };
    return (
        <div className={cx("container")}>
            <SnackbarProvider
                className={cx("snackbar")}
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            />

            <div className={cx("form")}>
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    value={email}
                    required
                    fullWidth
                />

                <div className={cx("name-input-container")}>
                    <TextField
                        onChange={(e) => setFirstName(e.target.value)}
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        onChange={(e) => setLastName(e.target.value)}
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        fullWidth
                        required
                    />
                </div>

                <TextField
                    onChange={(e) => setSubject(e.target.value)}
                    label="Subject"
                    variant="outlined"
                    value={subject}
                    required
                />
                <TextField
                    onChange={(e) => setMessage(e.target.value)}
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={8}
                    value={message}
                    required
                />
                <div className={cx("recaptcha-disclaimer")}>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="https://policies.google.com/privacy">
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="https://policies.google.com/terms">
                        Terms of Service
                    </a>{" "}
                    apply.
                </div>
            </div>

            <div className={cx("button-container")}>
                <Button
                    onClick={handleSubmit}
                    color="primary"
                    variant="contained"
                    size="large"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default ContactForm;
