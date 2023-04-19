import React from "react";
import Link from "next/link";
import classnames from "classnames/bind";

import { MenuItem } from "@/src/common/types";

import styles from "./DropdownMenu.module.scss";

const cx = classnames.bind(styles);

type DropdownMenuProps = {
    items: MenuItem[];
};

export default function DropdownMenu({
    items,
}: DropdownMenuProps): JSX.Element {
    return (
        <div className={cx("container")}>
            <div className={cx("dropdown-menu")}>
                {items.map((sub) => (
                    <Link key={sub.href} href={sub.href} title={sub.name}>
                        {sub.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
