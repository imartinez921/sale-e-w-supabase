import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const supabase = createRouteHandlerClient<Database>({ cookies });

	// Returns {error: null} if successful
	const printThis = await supabase.auth.signOut();
	console.log("LOGOUT RESPONSE", printThis.error);

	return NextResponse.redirect(`${requestUrl.origin}`, {
		// Redirects from a POST to a GET route
		status: 301,
	});
}
