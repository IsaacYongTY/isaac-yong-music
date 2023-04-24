import React, { useState } from "react";
import classnames from "classnames/bind";

import styles from "./DrawerLinkItem.module.scss";
import Link from "next/link";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { MenuItem } from "@/src/common/types";
import { Collapse } from "@mui/material";

const cx = classnames.bind(styles);
type DrawerLinkItemProps = {
    item: MenuItem;
};
export default function DrawerLinkItem({
    item,
}: DrawerLinkItemProps): JSX.Element {
    const [showSubmenu, setShowSubmenu] = useState(false);

    const renderArrow = () => {
        if (!item.submenu) {
            return;
        }

        if (!showSubmenu) {
            return <KeyboardArrowDown />;
        }

        return <KeyboardArrowUp />;
    };
    return (
        <div className={cx("container")} key={item.href}>
            <div
                className={cx("menu-item-container")}
                onClick={() => setShowSubmenu((prevState) => !prevState)}
            >
                <Link href={item.href}>{item.name}</Link>
                {item.submenu && renderArrow()}
            </div>
            {item.submenu && (
                <Collapse in={showSubmenu}>
                    <div className={cx("submenu-container")}>
                        {item.submenu.map((submenuItem) => (
                            <div>
                                {" "}
                                - {submenuItem.name}
                                <Link href={submenuItem.href}></Link>
                            </div>
                        ))}
                    </div>
                </Collapse>
            )}
        </div>
    );
}
