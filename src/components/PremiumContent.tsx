import React from "react";
import Pricing from "./Pricing";
import { isPremiumMember } from "@/utils/premiumUtils";

interface PremiumContentProps {
	isPremium: boolean;
	freeContent: React.ReactNode;
	premiumContent: React.ReactNode;
}

export default function PremiumContent({
	isPremium,
	freeContent,
	premiumContent,
}: PremiumContentProps) {
	const isMember = isPremiumMember();

	return (
		<div className="space-y-8">
			{freeContent}
			{isPremium ? isMember ? premiumContent : <Pricing /> : null}
		</div>
	);
}
