import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

import NavButton from "./components/nav/NavButton";
import LoginButton from "./components/nav/LoginButton";
import LogoutButton from "./components/nav/LogoutButton";
import DashboardPage from "./dashboard/page";
import CustomerServerComponent from "./dashboard/customers/page";
import CatalogDetail from "./dashboard/catalog/page";

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
		<div className="w-full flex flex-col items-center">
			<div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
				<div className="flex flex-col items-center mb-4 lg:mb-12">
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

				<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
			</div>
		</div>
	);
}
