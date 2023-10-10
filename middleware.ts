import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();

	// Create a Supabase client configured to use cookies
	const supabase = createMiddlewareClient({ req, res });

	// Refresh session if expired - required for Server Components
	// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
	const {
		data: { session },
	} = await supabase.auth.getSession();
  console.log("SESSION", session)
	
  // Check if user is logged in and redirect if necessary
	if (!session && req.url.includes("dashboard")) {
		return NextResponse.redirect("http://localhost:3000/unauthenticated");
	}
	return res;
}

