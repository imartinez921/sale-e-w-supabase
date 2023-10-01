import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {

  // Create scopes for seller to authorize with Square
  const scopesArray = [
		"CUSTOMERS_WRITE",
		"CUSTOMERS_READ",
		"ITEMS_READ",
		"ITEMS_WRITE",
		"INVENTORY_WRITE",
		"INVENTORY_READ",
		"MERCHANT_PROFILE_WRITE",
		"MERCHANT_PROFILE_READ",
		"LOYALTY_READ",
		"LOYALTY_WRITE",
		"ORDERS_READ",
		"SUBSCRIPTIONS_READ",
		"SUBSCRIPTIONS_WRITE",
		"PAYMENTS_READ",
		"PAYMENTS_WRITE",
		"CUSTOMERS_READ",
  ];

	const requestUrl = new URL(request.url);
	const formData = await request.formData();
	const email = String(formData.get("email"));
	const password = String(formData.get("password"));
	const supabase = createRouteHandlerClient({ cookies });

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return NextResponse.redirect(
			`${requestUrl.origin}/login?error=Could not authenticate user`,
			{
				// a 301 status is required to redirect from a POST to a GET route
				status: 301,
			}
		);
	}

	return NextResponse.redirect(requestUrl.origin, {
		// a 301 status is required to redirect from a POST to a GET route
		status: 301,
	});
}
