import React from "react";
import classnames from "classnames/bind";
import Image from "next/image";
import SectionHeader from "@/src/components/SectionHeader";

import styles from "./ServicesSection.module.scss";
import ServiceCard from "@/src/components/home/ServicesSection/ServiceCard";
import { servicesInfo } from "@/src/components/home/ServicesSection/constants";

const cx = classnames.bind(styles);
export default function ServicesSection(): JSX.Element {
    return (
        <div className={cx("container")}>
            <SectionHeader title="Services" noBorder className={cx("header")} />
            <div className={cx("content-container")}>
                {servicesInfo.map((service, index) => (
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        imageUrl={service.imageUrl}
                        reverse={(index + 1) / 2 === 1}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
