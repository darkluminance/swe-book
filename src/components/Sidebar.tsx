"use client";

import Link from "next/link";
import sidebarData from "@/data/sidebar.json";
import { useCompletedPages } from "@/context/CompletedPagesContext";
import { usePathname } from "next/navigation";
import { CheckIcon } from "./icons";
import { useState } from "react";

interface NavTitles {
	title: string;
	items: NavItem[];
}
interface NavItem {
	title: string;
	href: string;
	isPremium?: boolean;
}

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

	const isChildActive = (items: NavItem[]) => {
		return items.some(item => currentPath === item.href);
	};

	return (
		<div className="h-full w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white pt-8 overflow-y-auto">
			<nav className="">
				{sidebarData.navigation.map((navTitles: NavTitles, titleIndex: number) => {

					const hasActiveChild = isChildActive(navTitles.items);
					const isExpanded = expandedSections[navTitles.title] !== false && (expandedSections[navTitles.title] || hasActiveChild);

					return (
						<div key={titleIndex} className="mb-4">
							<button
								onClick={() => toggleSection(navTitles.title)}
								className="w-full px-4 py-3 text-left font-medium text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-between"
							>
								<span>{navTitles.title}</span>
								<svg
									className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</button>
							<div className={`transition-all duration-200 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
								{navTitles.items.map((item: NavItem, index: number) => {
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
							</div>
						</div>
					);
				})}
			</nav>
		</div>
	);
}