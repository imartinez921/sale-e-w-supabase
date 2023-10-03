import { useRouter } from "next/navigation";

interface ButtonProps {
	path?: string;
	buttonText?: string;
}

export default function Button({
	path = "/dashboard",
	buttonText = "Home",
}: ButtonProps) {
	const router = useRouter();
	return <button onClick={() => router.push(path)}>{buttonText}</button>;
}
