"use client";

import Link from "next/link";
import sidebarData from "@/data/sidebar.json";
import { useCompletedPages } from "@/context/CompletedPagesContext";
import { usePathname } from "next/navigation";
import { CheckIcon } from "./icons";

interface NavItem {
	title: string;
	href: string;
	isPremium?: boolean;
}

export default function Sidebar() {
	const { isPageCompleted } = useCompletedPages();
	const currentPath = usePathname();

	return (
		<div className="h-full w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white pt-8">
			<nav className="">
				{sidebarData.navigation.map((item: NavItem, index: number) => {
					const isCompleted = isPageCompleted(item.href);
					const isActive = currentPath === item.href;

					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex items-center gap-2 p-4 ${
								isActive
									? "bg-gray-200 dark:bg-gray-700"
									: "hover:bg-gray-200 dark:hover:bg-gray-700"
							}`}
						>
							<span className="text-gray-500 dark:text-gray-400">{index}</span>
							<span className="flex-1">{item.title}</span>

							{isCompleted && <CheckIcon />}

							{item.isPremium && (
								<span className="text-xs text-blue-600 dark:text-yellow-400">
									PRO
								</span>
							)}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
