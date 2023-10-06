import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";
import { redirect } from "next/navigation";
import Link from "next/link";


export default async function Unauthenticated() {
	// Give this server component access to cookies
	const supabase = createServerComponentClient<Database>({ cookies });

	// Check if user is logged in
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (session) {
		redirect("/dashboard");
	}
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
				To continue using this app, please sign in.
			</h1>
		</>
	);
}
