import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";
import { redirect } from "next/navigation";


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
	return <h2>To continue using this app, please sign in.</h2>;
}
