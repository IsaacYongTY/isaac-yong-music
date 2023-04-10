import React from "react";
import classnames from "classnames/bind";

import SocialMedia from "@/src/components/SocialMedia/SocialMedia";
import SectionHeader from "@/src/components/SectionHeader";
import ContactForm from "@/src/components/ContactForm";
import Header from "@/src/components/Header";

import styles from "./Contact.module.scss";

const cx = classnames.bind(styles);
export default function Contact(): JSX.Element {
    return (
        <div className={cx("container")}>
            <Header />
            <div className={cx("subtitle")}>
                <div>Collaboration or live performances for your event?</div>
                <div>
                    Write to us and we will get back to you within 3 working
                    days!
                </div>
            </div>
            {/*<SectionHeader title="Contact" />*/}
            <ContactForm />
            <SocialMedia />
        </div>
    );
}