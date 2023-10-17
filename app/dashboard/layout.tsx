"use client";

import {
	Card,
	Grid,
	Title,
	Text,
	Tab,
	TabList,
	TabGroup,
	TabPanel,
	TabPanels,
} from "@tremor/react";
import Link from "next/link";

import Header from "../components/nav/Header";

export const dynamic = "force-dynamic";

// Shared layout for all route segments under /dashboard
// AKA for every view a user sees after logging in
export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col">
			<Header />
			{/* Main is everything except the header and the footer */}
			{children}
		</div>
	);
}
