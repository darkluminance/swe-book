"use client";

import Link from "next/link";
import sidebarData from "@/data/sidebar.json";
import { useCompletedPages } from "@/context/CompletedPagesContext";
import { usePathname } from "next/navigation";
import { CheckIcon, ChevronIconDown } from "./icons";
import { useState } from "react";
import { NavItem, NavSubItem } from "@/types/Sidebar";

export default function Sidebar() {
	const { isPageCompleted } = useCompletedPages();
	const currentPath = usePathname();
	const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

	const toggleSection = (title: string) => {
		setExpandedSections(prev => ({
		  ...prev,
		  [title]: !prev[title]
		}));
	};

	const isChildActive = (items: NavSubItem[]) => {
		return items.some(item => currentPath === item.href);
	};

	let globalCounter = 0;

	sidebarData.navigation.forEach((navItems: NavItem) => {
		navItems.items.forEach((item: NavSubItem) => {
			item.navSubItemIndex = globalCounter.toString().padStart(3, '0');
			globalCounter++;
		})
	});

	return (

		<div className="h-full w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white pt-8 overflow-y-auto">
			<nav className="">
				{sidebarData.navigation.map((navItems: NavItem, titleIndex: number) => {

					const hasActiveChild = isChildActive(navItems.items);
					const isExpanded = expandedSections[navItems.title] !== false && (expandedSections[navItems.title] || hasActiveChild);

					return (

						<div key={titleIndex} className="mb-4">
							<button
								onClick={() => toggleSection(navItems.title)}
								className="w-full px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center justify-between"
							>
									<span className="truncate text-sm" title={navItems.title}>{navItems.title}</span>
								<ChevronIconDown isExpanded={isExpanded} />
							</button>
							<div className={`transition-all duration-200 overflow-hidden ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
								{navItems.items.map((item: NavSubItem) => {
									const isCompleted = isPageCompleted(item.href);
									const isActive = currentPath === item.href;
									return (
										<Link
											key={item.href}
											href={item.href}
											className={`flex items-center gap-2 p-4 ${
												isActive
													? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
													: "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
											}`}
										>
											<span className="text-gray-600 dark:text-gray-400 min-w-[20px]">{item.navSubItemIndex}</span>
											<span className="flex-1 truncate text-sm" title={item.title}>{item.title}</span>

											{isCompleted && <CheckIcon />}

											{item.isPremium && (
												<span className="text-xs text-blue-600 dark:text-yellow-400 whitespace-nowrap">
													PRO
												</span>
											)}
										</Link>
									);
								})}
							</div>
						</div>

					);
				})}
			</nav>
		</div>
		
	);
}