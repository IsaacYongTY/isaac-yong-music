import React from "react";
import classnames from "classnames/bind";
import Link from "next/link";

import IsaacYongSignature from "public/isaac-yong-signature.png";
import styles from "./Header.module.scss";
import Image from "next/image";
import { menu } from "@/src/common/constants";
const cx = classnames.bind(styles);
const Header: React.FC = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("links-container")}>
                {menu.slice(0, Math.ceil(menu.length / 2)).map((item) => (
                    <Link key={item.href} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </div>

            <Link href="/">
                <Image
                    src={IsaacYongSignature}
                    width={200}
                    alt="isaac-yong-signature"
                />
            </Link>
            <div className={cx("links-container")}>
                {menu.slice(Math.ceil(menu.length / 2)).map((item) => (
                    <>
                        {item.submenu ? (
                            <div className={cx("dropdown-container")}>
                                <Link key={item.href} href={item.href}>
                                    {item.name}
                                </Link>
                                <div className={cx("dropdown-menu")}>
                                    {item.submenu.map((sub) => (
                                        <Link key={sub.href} href={sub.href}>
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={item.href} href={item.href}>
                                {item.name}
                            </Link>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Header;
