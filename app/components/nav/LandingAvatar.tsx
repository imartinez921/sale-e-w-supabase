"use client";

import { Text, Card } from "@tremor/react";

interface AvatarProps {
	name: string;
	imageUrl: string;
	socialUrl: string;
}

export default function LandinAvatar({ name, imageUrl, socialUrl }: AvatarProps) {
    return (
		<a href={socialUrl}>
			<img src={imageUrl} title={name} alt="" />;
		</a>
	); 
}