import { Divider } from "@tremor/react";
import { Subtitle } from "@tremor/react";
import AvatarMini from "./AvatarMini";
import NavButton from "./NavButton";
import AppLogo from "./AppLogo";
import LogoutButton from "./LogoutButton";

export default function DashboardHeader() {
	return (
		<>
			<header className="h-24 flex items-center justify-between">
				<div className="flex box-border min-w-250 w-250 flex-none gap-2">
					<NavButton buttonText="Back" />
					<LogoutButton />
				</div>
				<div className="box-border min-w-250 w-250 flex-initial">
					<AppLogo width={250} />
				</div>
				<div className="flex flex-col gap-2 box-border items-center justify-between min-w-250 w-250 flex-none">
					<Subtitle>Contributors:</Subtitle>
					<div className="flex gap-2">
						<AvatarMini
							name="Noah Nim"
							imageUrl="https://avatars.githubusercontent.com/u/8650503?v=4"
							socialUrl="https://www.linkedin.com/in/noah-medoff-6a5490116"
						/>
						<AvatarMini
							name="Irene Martinez"
							imageUrl="https://avatars.githubusercontent.com/u/102888592?v=4"
							socialUrl="https://www.linkedin.com/in/irenemartinez921/"
						/>
						<AvatarMini
							name="Robert Lemiesz"
							imageUrl="https://imartinez921-bucket.s3.amazonaws.com/robert.jpeg"
							socialUrl="https://www.linkedin.com/in/robert-lemiesz-a8b48679/"
						/>
					</div>
				</div>
			</header>
			<Divider />
		</>
	);
}
