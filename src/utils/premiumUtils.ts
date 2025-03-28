import { NavItem, NavSubItem } from "@/types/Sidebar";
import sidebarData from "@/data/sidebar.json";

export function isPremiumPage(pathname: string): boolean {
  const cleanPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  const navItem: NavSubItem | undefined = sidebarData.navigation
    .flatMap((section: NavItem) => section.items)
    .find((item: NavSubItem) => {
      if (cleanPath === "" && item.href === "/") {
        return true;
      }
      return item.href === cleanPath;
    });

  return navItem?.isPremium || false;
}

// Mock function to check if user is a premium member
// In a real app, this would check authentication status and subscription data
export function isPremiumMember(): boolean {
	// For demonstration purposes, we'll just return a fixed value
	// In a real app, this would check user auth status and subscription data

	// For now, set to false to simulate a non-premium user
	// When false, premium pages will show the pricing component
	return false;
}
