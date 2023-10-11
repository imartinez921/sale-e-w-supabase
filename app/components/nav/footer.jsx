import Link from "next/link";

import { Divider } from "@tremor/react";
import SupabaseLogo from "./SupabaseLogo";
import NextJsLogo from "./NextJsLogo";

export default function Footer() {
	return (
		<footer>
			<Divider />
			<div className="flex justify-center text-center text-xs">
				Powered by{" "}
				<div className="flex gap-8 justify-center items-center">
					<Link href="https://supabase.com/" target="_blank">
						<SupabaseLogo />
					</Link>
					<span className="border-l rotate-45 h-6" />
					<NextJsLogo />
				</div>
			</div>
		</footer>
	);
}
