import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";
import Link from "next/link";
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
		<>
			<Link
				href="/"
				className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
				>
					<polyline points="15 18 9 12 15 6" />
				</svg>{" "}
				Back
			</Link>
			<h1 className="text-foreground text-2xl font-bold mb-4">
				You have successfully logged in.
				<br /> Welcome to your dashboard page.
			</h1>
		</>
	);
}
