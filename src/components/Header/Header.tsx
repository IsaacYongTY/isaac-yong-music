import React from "react";
import classnames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

import IsaacYongSignature from "public/isaac-yong-signature.png";
import styles from "./Header.module.scss";
import { menu } from "@/src/common/constants";
import { useRouter } from "next/router";
const cx = classnames.bind(styles);

type HeaderProps = {
    isSticky?: boolean;
};
export default function Header({ isSticky }: HeaderProps): JSX.Element {
    const router = useRouter();
    console.log(router.asPath);
    return (
        <div className={cx("container", { sticky: isSticky })}>
            <div className={cx("links-container")}>
                {menu.slice(0, Math.ceil(menu.length / 2)).map((item) => (
                    <div
                        key={item.href}
                        className={cx("link-container", {
                            selected: router.asPath === item.href,
                        })}
                    >
                        <Link href={item.href} title={item.name}>
                            {item.name}
                        </Link>
                    </div>
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
                    <div
                        key={item.href}
                        className={cx("link-container", {
                            selected: router.asPath === item.href,
                        })}
                    >
                        <Link href={item.href} title={item.name}>
                            {item.name}
                        </Link>
                        {item.submenu && (
                            <div className={cx("dropdown-menu")}>
                                {item.submenu.map((sub) => (
                                    <Link
                                        key={sub.href}
                                        href={sub.href}
                                        title={item.name}
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
