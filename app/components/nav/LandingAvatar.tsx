"use client";

import { Text, Card } from "@tremor/react";

interface AvatarProps {
	name: string;
	imageUrl: string;
	socialUrl: string;
}

export default function LandingAvatar({ name, imageUrl, socialUrl }: AvatarProps) {
    return (
		<a href={socialUrl}>
			<Card className="flex flex-col gap-2 justify-center items-center">
				<img src={imageUrl} title={name} alt="" />;
			</Card>
		</a>
	); 
}