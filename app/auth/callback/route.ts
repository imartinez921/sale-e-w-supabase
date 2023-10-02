import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
// import type { Database } from "@/lib/database.types";
import { client } from "@/app/api/square/square-api";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
	// Extract state string from cookies
	const stateCookie = cookies().get("state");
	const stateCheck = stateCookie ? stateCookie.value : undefined;

	// Extract state CSRF token and authorization code
	const requestUrl = new URL(request.url);
	const code = requestUrl.searchParams.get("code");
	const paramsState = requestUrl.searchParams.get("state");
	const error = requestUrl.searchParams.get("error");
	const errorDescription = requestUrl.searchParams.get("error_description");

	//developer.squareup.com/docs/oauth-api/receive-and-manage-tokens#handle-the-authorization-response
	if (error) {
		return NextResponse.json({
			errorMessage: errorDescription,
		});
	}

	if (paramsState !== stateCheck) {
		return NextResponse.json({
			errorMessage: "CSRF token check failed. Please try again.",
		});
	}

	const clientId = process.env.SANDBOX_APP_ID;
	const clientSecret = process.env.SANDBOX_APP_SECRET;
	const redirectUrl = process.env.SANDBOX_APP_REDIRECT_URL;

	try {
		const response = await client.oAuthApi.obtainToken({
			clientId: clientId as string,
			clientSecret: clientSecret,
			code: code,
			grantType: 'authorization_code'
		});

		return NextResponse.json(response.result)
	} catch (error) {
		console.log(error);

		return NextResponse.json({
			errorMessage: "Authorization failed. Please try again.",
		});
	}
}

