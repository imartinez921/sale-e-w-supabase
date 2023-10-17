"use client";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";

interface AppLogoProps {
	width?: number;
}

export default function AppLogo({ width = 150 }: AppLogoProps) {
	return <Image priority src={logo} alt="SALE-E logo" width={width} />;
}
