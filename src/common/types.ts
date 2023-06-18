export type MenuItem = {
    href: string;
    name: string;
    isActive: boolean;
    submenu?: MenuItem[];
}