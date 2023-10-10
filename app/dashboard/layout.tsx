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
export default function DashboardLayout(props:{
	children: React.ReactNode;
	catalog: React.ReactNode;
	customers: React.ReactNode;
	inventory: React.ReactNode;
	recommendations: React.ReactNode;
}) {
	return (
		// Main is everything except the header and the footer
		<main>
			<AppLogo width={250} />
			<NavButton buttonText="Back" />
			<Title>Dashboard</Title>
			<Text>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
			</Text>

			<TabGroup className="mt-6">
				<TabList>
					<Tab>Overview</Tab>
					<Tab>Orders</Tab>
					<Tab>Customers</Tab>
					<Tab>Catalog</Tab>
					<Tab>Email Campaigns</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid
							numItemsMd={2}
							numItemsLg={3}
							className="gap-6 mt-6"
						>
							{/* Parallel routes allow for loading multiple routes at once */}
							{/* https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#convention */}
							<CatalogPage>Catalog</CatalogPage>
							<Card>
								{/* Placeholder to set height */}
								<div className="h-28" />
							</Card>
							<Card>
								{/* Placeholder to set height */}
								<div className="h-28" />
							</Card>
						</Grid>
						<div className="mt-6">
							<Card>
								<div className="h-80" />
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="mt-6">
							<Card>
								<div className="h-96" />
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="mt-6">
							<Card>
								<div className="h-96" />
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="mt-6">
							<Card>
								<CatalogPage>Catalog</CatalogPage>
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="mt-6">
							<Card>
								<div className="h-96" />
							</Card>
						</div>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</main>
	);
}
