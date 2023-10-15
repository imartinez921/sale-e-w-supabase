import { SupabaseClient } from "@supabase/supabase-js"
import { catalog_data_array } from "@/app/utils/catalog-data-array";
import { client } from "@/app/api/square/square-api";

import CatalogTable from "../../components/catalog/catalog_table.jsx";
import { googleTextClient } from "../../utils/google-vertex-client";

export const dynamic = "force-dynamic";

// Uploads items from sample catalog data to Square
export async function createCatalog() {
	try {
		const response = client.catalogApi.batchUpsertCatalogObjects({
			idempotencyKey: crypto.randomUUID(),
			batches: [
				{
					objects: catalog_data_array,
				},
			],
		});
	} catch (e) {
		console.log(e);
	}
}

export async function catalogListing() {
	try {
		const response = await client.catalogApi.listCatalog();

		// console.log(response.result);
		return response.result;
	} catch (error) {
		console.log(error);
	}
}

// function to get an array of emails for the item you put on sale
async function askPalmAI(customerInfoList: any[] | null, catalogItem: string) {
	"use server"
	const MODEL_NAME = "models/text-bison-001";
	const customersData: {
		email: string,
		purchases: {}
	}[] = []

	customerInfoList?.forEach(customer => {

		const customerData = {
			email: customer?.email,
			purchases: customer?.purchases
		}

		customersData.push(customerData)
	})

	let customerStringedArray: any[] = []

	customersData.forEach(customer => {
		let stringed = JSON.stringify(customer)

		customerStringedArray.push(stringed)
	})

	let customersStringed = customerStringedArray.toString()

	const promptString = `Using this list of customer data: ${customersStringed} find out which customers buy ${catalogItem} the most and repond only with a list of their email addresses`
	// let messages = [{ content: promptString }]

	// console.log(messages)

	try {
		const stopSequences: any = [];
		const result = await googleTextClient.generateText({
			// required, which model to use to generate the result
			model: MODEL_NAME,
			// optional, 0.0 always uses the highest-probability result
			temperature: 0.0,
			// optional, how many candidate results to generate
			candidateCount: 1,
			// optional, number of most probable tokens to consider for generation
			top_k: 40,
			// optional, for nucleus sampling decoding strategy
			top_p: 0.95,
			// optional, maximum number of output tokens to generate
			max_output_tokens: 100,
			// optional, sequences at which to stop model generation
			stop_sequences: stopSequences,
			// optional, safety settings
			// safety_settings: [{ "category": "HARM_CATEGORY_DEROGATORY", "threshold": 1 }, { "category": "HARM_CATEGORY_TOXICITY", "threshold": 1 }, { "category": "HARM_CATEGORY_VIOLENCE", "threshold": 2 }, { "category": "HARM_CATEGORY_SEXUAL", "threshold": 2 }, { "category": "HARM_CATEGORY_MEDICAL", "threshold": 2 }, { "category": "HARM_CATEGORY_DANGEROUS", "threshold": 2 }],
			prompt: {
				text: promptString
			},
		})

		if (result[0]?.candidates[0]?.output === undefined) {
			console.log("No customers buy that item enough");
		} else {
			const res = result[0]?.candidates[0]?.output?.split("\n")
			let customer_emails: any = {

			}
			res.forEach((customer: string) => {
				if (!(customer in customer_emails)) {
					customer_emails[customer] = customer
				}
			}
			)

			const campaign = {
				catalog_item: catalogItem,
				emails: customer_emails
			}

			return campaign
		}
	} catch (error) {
		console.log("No customers buy that item enough");
	}
}



export default async function CatalogPage({
	supabase,
}: {
	supabase: SupabaseClient
}) {
	const catalogData = await catalogListing();
	let catalogArray: {
		name: string;
		description: string;
		price: string | null | undefined;
	}[] = [];
	catalogData?.objects?.map((catalogObject) => {
		// Skip category items
		if (catalogObject.type !== "ITEM") return;
		// Key into each item and pull out variations
		const itemData = catalogObject.itemData;
		if (itemData?.variations) {
			itemData.variations.map((variation) => {
				// console.log(variation.itemVariationData);
				const itemObject = {
					id: variation.itemVariationData?.itemId,
					name: itemData.name + " (" + variation?.itemVariationData?.name + ")" || "",
					description: itemData?.description || "",
					// This value is a BigInt so convert to string
					price: `${variation?.itemVariationData?.priceMoney?.amount}` + " USD" || "0 USD",
				};
				catalogArray.push(itemObject);
			});
		}
	});

	let customerData = await supabase.from('customers').select('*')

	return <CatalogTable data={catalogArray} palmAI={askPalmAI} customerData={customerData} />;
}
