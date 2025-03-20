"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

type CompletedPagesContextType = {
	completedPages: string[];
	markPageCompleted: (path: string) => void;
	isPageCompleted: (path: string) => boolean;
};

const CompletedPagesContext = createContext<
	CompletedPagesContextType | undefined
>(undefined);

export function CompletedPagesProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [completedPages, setCompletedPages] = useState<string[]>([]);

	// Load completed pages from localStorage on initial render
	useEffect(() => {
		const savedPages = localStorage.getItem("completedPages");
		if (savedPages) {
			setCompletedPages(JSON.parse(savedPages));
		}
	}, []);

	// Save to localStorage whenever completedPages changes
	useEffect(() => {
		localStorage.setItem("completedPages", JSON.stringify(completedPages));
	}, [completedPages]);

	const markPageCompleted = (path: string) => {
		setCompletedPages((prev) => {
			// If page is already completed, remove it (toggle behavior)
			if (prev.includes(path)) {
				return prev.filter((p) => p !== path);
			}
			// Otherwise add it to completed pages
			return [...prev, path];
		});
	};

	const isPageCompleted = (path: string) => {
		return completedPages.includes(path);
	};

	return (
		<CompletedPagesContext.Provider
			value={{ completedPages, markPageCompleted, isPageCompleted }}
		>
			{children}
		</CompletedPagesContext.Provider>
	);
}

export function useCompletedPages() {
	const context = useContext(CompletedPagesContext);
	if (context === undefined) {
		throw new Error(
			"useCompletedPages must be used within a CompletedPagesProvider"
		);
	}
	return context;
}
