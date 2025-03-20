import React from "react";
import CompletedCheckbox from "./CompletedCheckbox";

interface PageWrapperProps {
	children: React.ReactNode;
	title: string;
}

export default function PageWrapper({ children, title }: PageWrapperProps) {
	return (
		<div className="min-h-screen pt-8 pb-16">
			<div className="mx-auto">
				<h1 className="page-title">{title}</h1>
				<div className="space-y-6">{children}</div>
				<CompletedCheckbox />
			</div>
		</div>
	);
}
