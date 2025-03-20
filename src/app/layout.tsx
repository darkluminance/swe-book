import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { CompletedPagesProvider } from "@/context/CompletedPagesContext";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
				<CompletedPagesProvider>
					<ThemeToggle />
					<div className="flex">
						<aside className="fixed h-screen w-64">
							<Sidebar />
						</aside>
						<main className="ml-64 flex-1 min-h-screen">
							<div className="w-full max-w-4xl mx-auto px-4">{children}</div>
						</main>
					</div>
				</CompletedPagesProvider>
			</body>
		</html>
	);
}
