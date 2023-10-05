import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";
import { redirect } from "next/navigation";

// This is our logged-in user's home page
export default async function Dashboard() {
	// Following https://youtu.be/-7K6DRWfEGM?si=6amjfTk8TZFzeKyQ&t=283
	// Docs have some outdated code:
	// https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts#server-components

	// Give this server component access to cookies
	const supabase = createServerComponentClient<Database>({ cookies });

	// Check if user is logged in
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session) {
		redirect("/unauthenticated");
	}

	// TODO: Fetch catalog data from Supabase and pass to corresponding component to render
	// TODO: Fetch customer data from Supabase and pass to corresponding component to render
	// TODO?: Fetch past email campaigns data from Supabase and pass to corresponding component to render
	// I still need to add catalog test data to Supabase to test this connection
	const { data } = await supabase.from("catalog").select();
	
    // Testing: Pretty print result
	// return <pre>{JSON.stringify(data,null,2)}</pre>

	// TODO: Render corresponding components
	// TODO: Layout.tsx to place components using Tremor UI
    return (
		<h1 className="text-foreground text-2xl font-bold mb-4">
			You have successfully logged in.
			<br /> Welcome to your dashboard page.
		</h1>
	);
}
