import NavButton from "../components/nav/NavButton";


export default async function Unauthenticated() {
	return (
		<>
			<NavButton buttonText="Back" path="/" />
			<h1 className="text-foreground text-2xl font-bold mb-4">
				To continue using this app, please sign in.
			</h1>
		</>
	);
}
