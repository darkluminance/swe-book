import PageWrapper from "@/components/PageWrapper";
import PremiumContent from "@/components/PremiumContent";
import { isPremiumPage } from "@/utils/premiumUtils";

export default function FeaturesPage() {
	const isPremium = isPremiumPage("/features");

	const freeContent = (
		<div>
			<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
				Basic Features
			</h2>
			<p className="text-gray-700 dark:text-gray-300">
				Access to essential features for your needs...
			</p>
		</div>
	);

	const premiumContent = (
		<div>
			<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
				Premium Features
			</h2>
			<div className="space-y-4 text-gray-700 dark:text-gray-300">
				<p>Advanced customization options...</p>
				<p>Priority support and updates...</p>
				<p>Exclusive integrations...</p>
			</div>
		</div>
	);

	return (
		<PageWrapper title="Features">
			<PremiumContent
				isPremium={isPremium}
				freeContent={freeContent}
				premiumContent={premiumContent}
			/>
		</PageWrapper>
	);
}
