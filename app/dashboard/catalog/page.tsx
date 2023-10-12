import { exec } from "child_process";
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

// function to ask for customer discount
async function askPalmmAI(customerInfoList: any, catalog: any) {
	const MODEL_NAME = "models/text-bison-001";
	const customerEmails: any = []

	customerInfoList.forEach((customer: { email: any; }) => {
		customerEmails.push(customer.email)
	})

	// console.log(customerEmails)

	const promptString = `Using this array of customer data: ${customerInfoList} and this array of catalog items: ${catalog}. Find out which items each customer purchases the most, then suggest items from the catalog they should buy from the catalog based on what they purchase the most of. List the customers by their email that is found in ${customerEmails}`

	// console.log(customerInfoList)

	try {
		const stopSequences: any = [];
		const result = await googleTextClient.generateText({
			// required, which model to use to generate the result
			model: MODEL_NAME,
			// optional, 0.0 always uses the highest-probability result
			temperature: 0.7,
			// optional, how many candidate results to generate
			candidateCount: 1,
			// optional, number of most probable tokens to consider for generation
			top_k: 40,
			// optional, for nucleus sampling decoding strategy
			top_p: 0.95,
			// optional, maximum number of output tokens to generate
			max_output_tokens: 1024,
			// optional, sequences at which to stop model generation
			stop_sequences: stopSequences,
			// optional, safety settings
			// safety_settings: [{ "category": "HARM_CATEGORY_DEROGATORY", "threshold": 1 }, { "category": "HARM_CATEGORY_TOXICITY", "threshold": 1 }, { "category": "HARM_CATEGORY_VIOLENCE", "threshold": 2 }, { "category": "HARM_CATEGORY_SEXUAL", "threshold": 2 }, { "category": "HARM_CATEGORY_MEDICAL", "threshold": 2 }, { "category": "HARM_CATEGORY_DANGEROUS", "threshold": 2 }],
			prompt: {
				text: promptString,
			},
		})

		console.log(result[0]?.candidates[0]?.output);
	} catch (error) {
		console.log(error)
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



	askPalmmAI(customerData?.data, catalogArray);

	return <CatalogTable data={catalogArray} />;
}
