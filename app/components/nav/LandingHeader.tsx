import Link from "next/link";

import { Divider, Subtitle } from "@tremor/react";
import LogoutButton from "./LogoutButton";

interface LandingHeaderProps {
  email: string;
}

export default function LandingHeader(props: LandingHeaderProps) {
  const { email } = props;
  return(
		<>
			<header className="h-12 flex items-center justify-between">
					<Subtitle>Welcome, {email}</Subtitle>
					<LogoutButton />
			</header>
			<Divider />
		</>
	);
}
