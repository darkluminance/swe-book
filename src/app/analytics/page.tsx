import PageWrapper from "@/components/PageWrapper";
import PremiumContent from "@/components/PremiumContent";
import { isPremiumPage } from "@/utils/premiumUtils";

export default function AnalyticsPage() {
	const isPremium = isPremiumPage("/analytics");

	const freeContent = (
		<div>
			<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
				Basic Analytics
			</h2>
			<p className="text-gray-700 dark:text-gray-300">
				Here's your basic visitor count and page views...
			</p>
		</div>
	);

	const premiumContent = (
		<div>
			<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
				Advanced Analytics
			</h2>
			<div className="space-y-4 text-gray-700 dark:text-gray-300">
				<p>Detailed user behavior analysis...</p>
				<p>Custom reports and exports...</p>
				<p>Real-time tracking data...</p>
			</div>
		</div>
	);

	return (
		<PageWrapper title="Analytics">
			<PremiumContent
				isPremium={isPremium}
				freeContent={freeContent}
				premiumContent={premiumContent}
			/>
		</PageWrapper>
	);
}
