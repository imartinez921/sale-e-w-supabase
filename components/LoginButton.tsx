export default function LoginButton() {
	return (
		<form action="/auth/login" method="get">
			<button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
				Click here to sign in as demo user
			</button>
		</form>
	);
}
