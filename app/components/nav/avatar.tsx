"use client";

import { Text, Card, Italic } from "@tremor/react";

interface AvatarProps {
	name: string;
	imageUrl: string;
	socialUrl: string;
}

export default function Avatar ({ name, imageUrl, socialUrl }: AvatarProps) {
	return (
		<Card className="flex flex-col gap-2 justify-center items-center">
			<Text>{name}</Text>
			<a href={socialUrl}>
				<img
					src={imageUrl}
					alt={`"headshot of "+{name}`}
					className="avatar-image"
				/>
			</a>
		</Card>
	);
};
