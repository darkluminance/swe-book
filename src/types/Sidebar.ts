export interface NavItem {
    title: string;
    items: NavSubItem[];
}

export interface NavSubItem {
    navSubItemIndex?: string;
    title: string;
    href: string;
    isPremium?: boolean;
}

export interface CodeBoxProps {
    codeString: string;
}