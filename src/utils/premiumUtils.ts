import sidebarData from "@/data/sidebar.json";

export function isPremiumPage(pathname: string): boolean {
	// Clean up the pathname by removing trailing slash if present
	const cleanPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

	// Find matching navigation item by href
	const navItem = sidebarData.navigation.find((item) => {
		// Handle root path special case
		if (cleanPath === "" && item.href === "/") {
			return true;
		}
		// For other paths, match the href from sidebar
		return item.href === cleanPath;
	});

	// Return true if it's a premium page, false otherwise
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
