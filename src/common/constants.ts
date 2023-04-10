type MenuItem = {
    href: string;
    name: string;
    submenu?: MenuItem[];
};
export const menu: MenuItem[] = [
    {
        href: "/about",
        name: "About",
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
        href: "/calendar",
        name: "Calendar",
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
