"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Title, Bold } from "@tremor/react";

import AppLogo from "./components/nav/logo";
import Avatar from "./components/nav/Avatar";
import NavButton from "./components/nav/NavButton";
import LoginButton from "./components/nav/LoginButton";
import LogoutButton from "./components/nav/LogoutButton";

export const dynamic = "force-dynamic";

export default async function Index() {
	// Give this server component access to cookies
	const supabase = createClientComponentClient();

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
		<div className="flex flex-col items-center h-auto pt-52 pb-16">
			<AppLogo width={500} />
			<Title className="pt-8">The app that keeps your customers happy and your Square overstock low.</Title>
			{session ? (
				<>
					<h1>Welcome, {email}</h1>
					<NavButton buttonText="Enter Your Dashboard" />
					<LogoutButton />
				</>
			) : (
				<div className="my-16">
					<LoginButton />
				</div>
			)}
			<div className="flex flex-col gap-2 justify-center text-center text-xs max-w-fit">
				<Title>
					<Bold>Contributors: </Bold>
				</Title>
				<div className="flex space-x-4 ">
					<Avatar
						name="Noah Nim"
						imageUrl="https://avatars.githubusercontent.com/u/8650503?v=4"
						socialUrl="https://www.linkedin.com/in/noah-medoff-6a5490116"
					/>
					<Avatar
						name="Irene Martinez"
						imageUrl="https://avatars.githubusercontent.com/u/102888592?v=4"
						socialUrl="https://www.linkedin.com/in/irenemartinez921/"
					/>
					<Avatar
						name="Robert Lemiesz"
						imageUrl="https://media.licdn.com/dms/image/C5603AQGiCo95wjIaQw/profile-displayphoto-shrink_800_800/0/1525150606355?e=1703116800&v=beta&t=HkgMjC1yjzXnAYx-pga5xY8-HHpci68JB1PsqHSUEl4"
						socialUrl="https://www.linkedin.com/in/robert-lemiesz-a8b48679/"
					/>
				</div>
			</div>
		</div>
	);
}
