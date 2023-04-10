import React, { useState } from "react";
import classnames from "classnames/bind";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

import styles from "./ContactForm.module.scss";

const cx = classnames.bind(styles);
const ContactForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        try {
            await axios.post("/api/contact", {
                email,
                firstName,
                lastName,
                subject,
                message,
            });

            enqueueSnackbar({
                message: "Your message has been sent successfully!",
                variant: "success",
            });
        } catch (err) {
            console.log(err);

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

            <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
                value={email}
                required
            />

            <div className={cx('name-input-container')}>
                <TextField
                    onChange={(e) => setFirstName(e.target.value)}
                    label="First Name"
                    variant="outlined"
                    value={lastName}
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
            <div className={cx("button-container")}>
                <Button
                    onClick={handleSubmit}
                    color="primary"
                    variant="contained"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default ContactForm;
