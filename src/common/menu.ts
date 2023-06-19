import { MenuItem } from "@/src/common/types";

export const menu: MenuItem[] = [
    {
        href: "/about",
        name: "About",
        isActive: true,
        submenu: [
            {
                href: "/portfolio",
                name: "Portfolio",
                isActive: true,
            },
            {
                href: "/gears",
                name: "Gears",
                isActive: true,
            },
            {
                href: "/partners",
                name: "Partners",
                isActive: true,
            },
        ],
    },
    {
        href: "/#music",
        name: "Music",
        isActive: true,
    },
    {
        href: "/#videos",
        name: "Videos",
        isActive: true,
    },
    {
        href: "/events",
        name: "Events",
        isActive: false,
    },
    {
        href: "/music-sheets",
        name: "Music Sheets",
        isActive: true,
    },
    {
        href: "/events",
        name: "Services",
        isActive: true,
        submenu: [
            {
                href: "/events",
                name: "Events",
                isActive: true,
            },
            {
                href: "/consultations",
                name: "Consultations",
                isActive: true,
            },
            {
                href: "/lessons",
                name: "Lessons",
                isActive: true,
            },
        ],
    },
    {
        href: "/contact",
        name: "Contact",
        isActive: true,
    },
];
