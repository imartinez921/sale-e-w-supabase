import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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
		/* <CatalogDetail children={undefined} /> COMMENTED FOR SAME REASON AS ABOVE */
	}
	// TODO?: Fetch past email campaigns data from Supabase and pass to corresponding component to render
	// I still need to add catalog test data to Supabase to test this connection
	const { data } = await supabase.from("catalog").select();

	// Testing: Pretty print result
	// return <pre>{JSON.stringify(data,null,2)}</pre>

	return (
		<>
			<h1 className="text-foreground text-2xl font-bold mb-4">
				Welcome to your dashboard page.
			</h1>
			<main>
                {/* TODO: Import viewcomponents here: pass results of above as data prop */}
            </main>
		</>
	);
}
