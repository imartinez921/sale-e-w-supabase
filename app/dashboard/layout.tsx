"use client";

import Button from "../components/nav/button";

export const dynamic = "force-dynamic";

// Shared layout for all route segments under /dashboard
// AKA for every view a user sees after logging in
export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// Main is everything except the header and the footer
		<main>
			<nav>
				<Button buttonText="Back" />
			</nav>
			{children}
		</main>
	);
}
