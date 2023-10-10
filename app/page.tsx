import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import NavButton from "./components/nav/NavButton";
import LoginButton from "./components/nav/LoginButton";
import LogoutButton from "./components/nav/LogoutButton";

export const dynamic = "force-dynamic";

// TODO: Fix hydration UI error due to component structure
export default async function Index() {
	// Give this server component access to cookies
	const supabase = createServerComponentClient({ cookies });

	// Check if user is logged in
	let email = "";
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (session) {
		const {
			data: { user },
		} = await supabase.auth.getUser();
		email = user?.email ?? "";
	}

	return (
		<main>
			<div className="animate-in">
				{session ? (
					<>
						<h1>Welcome, {email}</h1>
						<NavButton buttonText="Enter Your Dashboard" />
						<LogoutButton />
					</>
				) : (
					<LoginButton />
				)}
				<h1 className="sr-only">
					Supabase and Next.js Starter Template
				</h1>
			</div>
		</main>
	);
}
