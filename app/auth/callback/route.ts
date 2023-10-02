import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
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

	if (code) {
		// Create request to exchange authorization code for access token
		// (https://developer.squareup.com/docs/oauth-api/what-it-does#authorization-code-flow)
		const responseBody = {
			method: "POST",
			headers: {
				"Square-Version": "2023-09-25",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				client_id: clientId,
				client_secret: clientSecret,
				code: code,
				grant_type: "authorization_code",
			}),
		};
			console.log("RESPONSE BODY", responseBody);
		  const response = await fetch(
				"https://connect.squareup.com/oauth2/token", responseBody
				
			);
			console.log(response)
			const data = await response.json();
			return NextResponse.json({ data });

	}

	return NextResponse.json({
		errorMessage: "Authorization failed. Please try again.",
	});
}

