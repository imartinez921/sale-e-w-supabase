import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateRandomState } from "oauth4webapi";

export const dynamic = "force-dynamic";

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

export async function GET() {
	// Create authorization url to redirect seller to Square auth page
	// (https://developer.squareup.com/docs/oauth-api/create-urls-for-square-authorization)
	// 	Example auth url for code flow(VS PKCE flow):
	// 		https://connect.squareup.com/oauth2/authorize?client_id={YOUR_APP_ID}
	//    & scope=CUSTOMERS_WRITE + CUSTOMERS_READ & session=false
	// 	& state=82201dd8d83d23cc8a48caf52b

	const clientId = process.env.SANDBOX_APP_ID
	const scopes = scopesArray.join("+");
	// State is a randomized string used as a CSRF token
	const state = generateRandomState();
	cookies().set("state", `${state}`);
	// Since sellers may have multiple accounts, false will make user authorize each time
	const session = false;
	const authUrl = `https://connect.squareup.com/oauth2/authorize?client_id=${clientId}&scope=${scopes}&session=${session}&state=${state}`;
	redirect(authUrl);
}
