import PageWrapper from "@/components/PageWrapper";

export default function Home() {
	return (
		<PageWrapper title="Dashboard">
			<div>
				<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
					Welcome
				</h2>
				<p className="text-gray-700 dark:text-gray-300">
					Welcome to your Next.js application with Tailwind CSS!
				</p>
			</div>
		</PageWrapper>
	);
}
