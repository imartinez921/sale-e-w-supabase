import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
	// Extract state string from cookies
	const stateCookie = cookies().get("state");
	const stateCheck = stateCookie ? stateCookie.value : undefined;

	// Extract state CSRF token and authorization code
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get("code");
	const paramsState = requestUrl.searchParams.get("state");

	if (code && paramsState === stateCheck) {
		console.log("CSRF token: PASS");
	} else {
		console.log("CSRF token: FAIL");
	}

	// URL to redirect to after sign in process completes
	return NextResponse.redirect(`${process.env.SANDBOX_AFTER_LOGIN_URL}`);
}
