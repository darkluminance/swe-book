"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	// Check for system preference and previously set theme on component mount
	useEffect(() => {
		// Check if theme is stored in localStorage
		const storedTheme = localStorage.getItem("theme");

		if (storedTheme === "dark") {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		} else if (storedTheme === "light") {
			setIsDark(false);
			document.documentElement.classList.remove("dark");
		} else {
			// If no stored preference, check system preference
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setIsDark(prefersDark);
			if (prefersDark) {
				document.documentElement.classList.add("dark");
			}
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);

		if (newTheme) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className="fixed top-4 right-4 z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all hover:scale-105"
			aria-label="Toggle theme"
		>
			{isDark ? (
				<>
					<SunIcon />
				</>
			) : (
				<>
					<MoonIcon />
				</>
			)}
		</button>
	);
}
