import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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
	// TODO: Fetch catalog data from Supabase and pass to corresponding component to render
	// TODO: Fetch customer data from Supabase and pass to corresponding component to render
	{
		/* <CustomerServerComponent supabase={supabase} /> DO NOT UNCOMMENT THIS OR DATA WILL BE PUT IN SUPABASE WE NO LONGER NWWS */
	}
	{
		/* <CatalogPage children={undefined} /> COMMENTED FOR SAME REASON AS ABOVE */
	}
	// TODO?: Fetch past email campaigns data from Supabase and pass to corresponding component to render
	// I still need to add catalog test data to Supabase to test this connection
	const { data } = await supabase.from("catalog").select();

	// Testing: Pretty print result
	// return <pre>{JSON.stringify(data,null,2)}</pre>

	return (
		<main>
			<Title>Dashboard</Title>
			<Text>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
			</Text>

			<TabGroup className="mt-6">
				<TabList>
					<Tab>Page 1</Tab>
					<Tab>Page 2</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid
							numItemsMd={2}
							numItemsLg={3}
							className="gap-6 mt-6"
						>
							<Card>
								{/* Placeholder to set height */}
								<div className="h-28" />
							</Card>
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
				</TabPanels>
			</TabGroup>
		</main>
	);
}
