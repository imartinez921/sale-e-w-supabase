"use client";

import { Button } from "@tremor/react";

export default function LoginButton() {
	return (
		<form action="/auth/login" method="get">
			<Button size="xs" variant="secondary">
				Click here to sign in as demo user
			</Button>
		</form>
	);
}
