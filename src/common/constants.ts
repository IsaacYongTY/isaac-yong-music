import { MenuItem } from "@/src/common/types";

export const menu: MenuItem[] = [
    {
        href: "/about",
        name: "About",
        submenu: [
            {
                href: "/portfolio",
                name: "Portfolio",
            },
            {
                href: "/gears",
                name: "Gears",
            },
            {
                href: "/partners",
                name: "Partners",
            },
        ],
    },
    {
        href: "/music",
        name: "Music",
    },
    {
        href: "/videos",
        name: "Videos",
    },
    {
        href: "/events",
        name: "Events",
    },
    {
        href: "/music-sheets",
        name: "Music Sheets",
    },
    {
        href: "/services",
        name: "Services",
        submenu: [
            {
                href: "/events",
                name: "Events",
            },
            {
                href: "/consultations",
                name: "Consultations",
            },
            {
                href: "/lessons",
                name: "Lessons",
            },
        ],
    },
    {
        href: "/contact",
        name: "Contact",
    },
];
