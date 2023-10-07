import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

// import type { Database } from "@/lib/database.types";

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import SupabaseLogo from "../components/SupabaseLogo";
import NextJsLogo from "../components/NextJsLogo";
import DeployButton from "../components/DeployButton";
import DashboardPage from "./dashboard/page";
import CustomerServerComponent from "./dashboard/customers/page";

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
			<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
				<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
					<DeployButton />
				</div>
			</nav>

			<div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
				<div className="flex flex-col items-center mb-4 lg:mb-12">

					{session ? (
						<>
							<h1>Welcome, {email}</h1>
							<LogoutButton />
							<div className="flex gap-8 justify-center items-center">
								<DashboardPage>

								</DashboardPage>
								{/* <CustomerServerComponent supabase={supabase} /> DO NOT UNCOMMENT THIS OR DATA WILL BE PUT IN SUPABASE WE NO LONGER NWWS */}
							</div>
						</>
					) : (
						<LoginButton />
					)}
					<h1 className="sr-only">
						Supabase and Next.js Starter Template
					</h1>
				</div>

				<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

				<div className="flex justify-center text-center text-xs">
					<p>
						Powered by{" "}
						<div className="flex gap-8 justify-center items-center">
							<Link href="https://supabase.com/" target="_blank">
								<SupabaseLogo />
							</Link>
							<span className="border-l rotate-45 h-6" />
							<NextJsLogo />
						</div>
					</p>
				</div>
			</div>
		</div>
	);
}
