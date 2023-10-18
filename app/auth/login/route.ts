import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// No sign-in form for now, so this will be a GET request
export async function GET(request: Request) {
	const requestUrl = new URL(request.url);

	// AuthHelper gives Route Handler access to credentials in our .env + client cookies
	const supabase = createRouteHandlerClient({ cookies });

	// Auto-Login ONE user – already added to the users table via our Supabase dashboard
	// Same info as our Square Dashboard mutual account
	const email = `${process.env.FIRST_USER_EMAIL}`;
	const password = `${process.env.FIRST_USER_PASSWORD}`;

	// Issues a JWT and returns:
	// {data: {
			// user: {id, aud: 'authenticated', email, phone, etc.}
			// session: {access_token, token_type, refresh_token, user, etc.}
	// Note session also carries a user object
	const printThis = await supabase.auth.signInWithPassword({
		email,
		password,
	});
	console.log("SUPABASE RESPONSE", printThis);

	// return NextResponse.redirect(requestUrl.origin, {
	// 	// Redirects from a POST to a GET route
	// 	status: 301,
	// });

	return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
}