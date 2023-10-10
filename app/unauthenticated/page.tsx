import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

import BackButton from "../components/nav/BackButton";


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
			<BackButton buttonText="Back" path="/" />
			<h1 className="text-foreground text-2xl font-bold mb-4">
				To continue using this app, please sign in.
			</h1>
		</>
	);
}
