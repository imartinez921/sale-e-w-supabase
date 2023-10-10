"use client";

import NavButton from "../components/nav/NavButton";

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
				<NavButton buttonText="Back" />
			</nav>
			{children}
		</main>
	);
}
