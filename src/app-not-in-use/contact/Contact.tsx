import React from "react";
import classnames from "classnames/bind";

import ContactForm from "@/src/components/ContactForm";
import NavigationBar from "@/src/components/NavigationBar";

import styles from "./Contact.module.scss";
import Footer from "@/src/components/Footer";

const cx = classnames.bind(styles);
export default function Contact(): JSX.Element {
    return (
        <div className={cx("container")}>
            {/*<NavigationBar />*/}
            <div className={cx("content-container")}>
                <div className={cx("subtitle")}>
                    <div>
                        Collaboration or live performances for your event?
                    </div>
                    <div>
                        Write to us and we will get back to you within 3 working
                        days!
                    </div>
                </div>
                {/*<SectionHeader title="Contact" />*/}
                <div className={cx("contact-form-container")}>
                    <ContactForm />
                </div>
            </div>
            {/*<Footer />*/}
        </div>
    );
}
