import React from "react";
import classnames from "classnames/bind";
import Link from "next/link";
import { KeyboardArrowDown } from "@mui/icons-material";

import { MenuItem } from "@/src/common/types";
import DropdownMenu from "@/src/components/NavigationBar/LinkItem/DropdownMenu";

import styles from "./LinkItem.module.scss";
import { usePathname } from "next/navigation";

const cx = classnames.bind(styles);

type LinkItemProps = {
    item: MenuItem;
};
export default function LinkItem({ item }: LinkItemProps): JSX.Element {
    const pathname = usePathname();

    return (
        <div
            className={cx("container", {
                selected: item.href === pathname,
            })}
        >
            <Link href={item.href} title={item.name} className={cx("link")}>
                {item.name}
            </Link>
            {item.submenu && <KeyboardArrowDown />}
            {item.submenu && <DropdownMenu items={item.submenu} />}
        </div>
    );
}
