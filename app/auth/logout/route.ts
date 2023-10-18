import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const supabase = createRouteHandlerClient({ cookies });

	// Returns {error: null} if successful
	const printThis = await supabase.auth.signOut();
	console.log("LOGOUT RESPONSE", printThis.error);

	return NextResponse.redirect(`${requestUrl.origin}`, {
		// Redirects from a POST to a GET route
		status: 301,
	});
}
