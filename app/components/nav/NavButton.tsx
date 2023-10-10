"use client";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@tremor/react";

interface ButtonProps {
	path?: string;
	buttonText?: string;
}

export default function NavButton({
	path = "/dashboard",
	buttonText = "Home",
}: ButtonProps) {
	const router = useRouter();
	const currPath = usePathname();

	// Back behavior depends on whether on child page of dashboard or on dashboard itself
	path = currPath === "/dashboard" ? "/" : path;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		router.push(path);
	};

	return (
		<>
			<Button size="xs" variant="secondary" onClick={handleClick}>
				{buttonText}
			</Button>
		</>
	);
}
