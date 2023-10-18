"use client";

import { Button } from "@tremor/react";

export default function LogoutButton() {
	return (
		<form action="/auth/logout" method="post">
			<Button size="xs" variant="secondary">
				Logout
			</Button>
		</form>
	);
}
