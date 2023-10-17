"use client";

import { Button } from "@tremor/react";
import {ArrowRightIcon,
} from "@heroicons/react/solid";

export default function LoginButton() {
	return (
		<form action="/auth/login" method="get">
			<Button
				icon={ArrowRightIcon}
				size="xs"
				variant="primary"
				className="animate-bounce"
			>
				Click here to sign in as demo user
			</Button>
		</form>
	);
}
