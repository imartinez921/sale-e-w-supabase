import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// from code example, unsure why type is erroring
// https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts
import type { Database } from "@/lib/database.types";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const formData = await request.formData();
	let email = String(formData.get("email"));
	let password = String(formData.get("password"));
	const supabase = createRouteHandlerClient<Database>({ cookies });

	// Enabling only ONE user, who is added to the users table thru dashboard
	// Same info as Square Dashboard mutual account
	email = `${process.env.FIRST_USER_EMAIL}`;
	password = `${process.env.FIRST_USER_PASSWORD}`;
    
	// This is supposed to be one of the log-ins that issues a JWT
	await supabase.auth.signInWithPassword({
		email,
		password,
	});

	return NextResponse.redirect(requestUrl.origin, {
		// Redirects from a POST to a GET route
		status: 301,
	});
}

// When it turns into a GET request, I'm redirecting to dashboard
// It does redirect, but I am not seeing the JWT in the cookies
export async function GET(request: NextRequest) {
	const requestUrl = new URL(request.url);
	return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
}
