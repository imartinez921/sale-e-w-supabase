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

import CatalogPage from "./catalog/page.tsx";
import NavButton from "../components/nav/NavButton";
import Link from "next/link";
import AppLogo from "../components/nav/logo";

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
		<main>{children}</main>
	);
}
