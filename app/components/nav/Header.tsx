import Link from "next/link";

import { Divider } from "@tremor/react";
import { Subtitle } from "@tremor/react";
import AvatarMini from "./Avatar-Mini";
import NavButton from "./NavButton";
import AppLogo from "./logo";

export default function Header() {
	return (
		<>
			<header className="h-24 flex items-center justify-between">
				<div className="w-250">
					<NavButton buttonText="Back" />
				</div>
				<AppLogo width={250} />
				<div className="flex flex-col gap-2 items-center justify-between w-250">
					<Subtitle>Contributors:</Subtitle>
                    <div className="flex">

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
						imageUrl="https://media.licdn.com/dms/image/C5603AQGiCo95wjIaQw/profile-displayphoto-shrink_800_800/0/1525150606355?e=1703116800&v=beta&t=HkgMjC1yjzXnAYx-pga5xY8-HHpci68JB1PsqHSUEl4"
						socialUrl="https://www.linkedin.com/in/robert-lemiesz-a8b48679/"
                        />
                        </div>
				</div>
			</header>
			<Divider />
		</>
	);
}
