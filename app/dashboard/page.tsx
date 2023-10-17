import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import CatalogTab from "./catalog/catalog-tab";
import EmailCampaignsTab from "./recommendations/email-campaigns-tab";

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

// This is the main overview page after logging in
export default async function DashboardPage({
	children,
}: {
	children: React.ReactNode;
}) {
	// Give this server component access to user's cookies
	const supabase = createServerComponentClient({ cookies });

	// Execute all data to be passed to props here:
	// TODO?: Fetch past email campaigns data from Supabase and pass to corresponding component to render

	// Testing: Pretty print result
	// return <pre>{JSON.stringify(data,null,2)}</pre>

	// createEndpoint();
	// listGoogleEndpoints();

	return (
		// Main is everything except the header and the footer
		<main>
			<Title>Dashboard</Title>

			<TabGroup className="mt-6 p-2">
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
							{/* TODO: Need to figure out how to keep Catalog height in overview grid */}
							<Card className="h-96 overflow-y-scroll overflow-x-scroll">
								<CatalogTab supabase={supabase} />
							</Card>
							<Card className="h-96"></Card>
							<Card className="h-96"></Card>
						</Grid>
						<Card className="h-96 mt-6 overflow-y-scroll overflow-x-scroll">
							<EmailCampaignsTab supabase={supabase} />
						</Card>
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
						<div className="h-96">
							<Card className=" mt-6 h-full overflow-y-scroll">
								<CatalogTab supabase={supabase} />
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="mt-6">
							<Card className=" mt-6 h-full overflow-y-scroll">
								<EmailCampaignsTab supabase={supabase} />
							</Card>
						</div>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</main>
	);
}
