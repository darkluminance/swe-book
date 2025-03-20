"use client";

import { usePathname } from "next/navigation";
import { useCompletedPages } from "@/context/CompletedPagesContext";

export default function CompletedCheckbox() {
	const pathname = usePathname();
	const { isPageCompleted, markPageCompleted } = useCompletedPages();
	const completed = isPageCompleted(pathname);

	return (
		<div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-6 flex justify-end">
			<label className="flex items-center gap-2 cursor-pointer">
				<input
					type="checkbox"
					checked={completed}
					onChange={() => markPageCompleted(pathname)}
					className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
				/>
				<span className="text-gray-700 dark:text-gray-300 font-medium">
					Mark as completed
				</span>
			</label>
		</div>
	);
}
