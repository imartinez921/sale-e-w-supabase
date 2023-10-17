"use client";

import { Text, Card, Italic } from "@tremor/react";

interface AvatarProps {
	name: string;
	imageUrl: string;
	socialUrl: string;
}

export default function AvatarMini({ name, imageUrl, socialUrl }: AvatarProps) {
	return (
		<a href={socialUrl}>
			<img
				src={imageUrl}
				title={name}
				alt={`"headshot of "+{name}`}
				className="avatar-image-mini"
			/>
		</a>
	);
}
