"use client";

import { Text, Card, Italic } from "@tremor/react";

interface AvatarProps {
	name: string;
	imageUrl: string;
	socialUrl: string;
}

export default function Avatar({ name, imageUrl, socialUrl }: AvatarProps) {
	return (
		<a href={socialUrl}>
			<Card className="flex flex-col gap-2 justify-center items-center">
				<Text>{name}</Text>
				<img
					src={imageUrl}
					alt={`"headshot of "+{name}`}
					className="avatar-image"
				/>
			</Card>
		</a>
	);
}
