import { SupabaseClient } from "@supabase/supabase-js"
import { catalog_data_array } from "@/app/utils/catalog-data-array";
import { client } from "@/app/api/square/square-api";

import CatalogTable from "../../components/catalog/catalog_table.jsx";
import { cloudLocation, predictionServiceClient, instance, prediction, aiplatform } from "../../utils/google-vertex-client";

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
async function askVertexAI(question: string) {
	const endpoint = cloudLocation

	const instanceObj = new instance.TextSentimentPredictionInstance({
		content: question,
	});
	const instanceVal = instanceObj.toValue();

	const instances = [instanceVal]
	const request = {
		endpoint,
		instances
	};

	try {
		const [response] = await predictionServiceClient.predict(request);

		console.log('Predict text sentiment analysis response:');
		console.log(`\tDeployed model id : ${response.deployedModelId}`);


	} catch (error) {
		console.error('Error making prediction:', error);
		throw error;
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

	const analysisRequest = `Using this array of customer data: ${customerData.data} and this array of catalog items: ${catalogArray}, Make a list out of the customers (using their email as their identity) purchasing habits from their most purchased items and what items they should purchase when those items are discounted based on what they purchase the most. Format the list as: phone number, most purchased: item, should buy when discounted:`

	// askVertexAI(analysisRequest)

	return <CatalogTable data={catalogArray} />;
}
