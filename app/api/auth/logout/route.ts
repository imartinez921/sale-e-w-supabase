import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const supabase = createRouteHandlerClient<Database>({ cookies });

	const printThis = await supabase.auth.signOut();
	console.log("LOGOUT RESPONSE", printThis);

	return NextResponse.redirect(`${requestUrl.origin}`, {
		status: 301,
	});
}
