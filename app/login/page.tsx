// Currently this login page is hooked up to signup
// I know we don't need it for the app, but signup is the only function that
// adds a token to the cookies (can view in developer tools/application)

"use client";

import Messages from "./messages";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import type { Database } from "@/lib/database.types";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	// Gives Route Handler access to credentials in our .env
	// Client component already has access to cookies
	const supabase = createClientComponentClient<Database>();

	// Likely won't need signup, but leaving it here for now
	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		await supabase.auth.signUp({
			email: `${process.env.FIRST_USER_EMAIL}`,
			password: `${process.env.FIRST_USER_PASSWORD}`,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		router.refresh();
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		(e.target as HTMLInputElement).name === "email"
			? setEmail(e.target.value)
			: setPassword(e.target.value);
	};

	return (
		<div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
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

			<form
				className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
				method="get"
			>
				<label className="text-md" htmlFor="email">
					Email
				</label>
				<input
					className="rounded-md px-4 py-2 bg-inherit border mb-6"
					name="email"
					placeholder="USE DEMO LOG-IN ONLY"
					onChange={handleOnChange}
					value={email}
				/>
				<label className="text-md" htmlFor="password">
					Password
				</label>
				<input
					className="rounded-md px-4 py-2 bg-inherit border mb-6"
					type="password"
					name="password"
					placeholder="••••••••"
				/>
				<button
					className="bg-green-700 rounded px-4 py-2 text-white mb-2"
					onClick={handleSignUp}
				>
					Sign In
				</button>
				<Messages />
			</form>
		</div>
	);
}
