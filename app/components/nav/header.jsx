"use client";

import Image from "next/image";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  
	return (
		<header>
			<Image
				priority
				src={logo}
				alt="SALE-E logo"
				width={200}
				height={50}
			/>
		</header>
	);
}
