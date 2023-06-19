import React, { ReactElement } from "react";
import classnames from "classnames/bind";

import ContactForm from "@/src/components/ContactForm";
import NavigationBar from "@/src/components/layout/NavigationBar";

import styles from "./Contact.module.scss";
import Footer from "@/src/components/layout/Footer";
import SectionHeader from "@/src/components/SectionHeader";
import WebsiteLayout from "@/src/app/(website)/layout";

const cx = classnames.bind(styles);
export default function Contact() {
    return (
        <div className={cx("container")}>
            <div className={cx("content-container")}>
                <SectionHeader title="CONTACT US" />

                <div className={cx("subtitle")}>
                    <div>
                        Collaboration or live performances for your event?
                    </div>
                    <div>
                        Write to us and we will get back to you within 3 working
                        days!
                    </div>
                </div>

                <div className={cx("contact-form-container")}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

