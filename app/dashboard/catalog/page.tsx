import { ReactNode } from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { catalog_data_array } from "@/app/utils/catalog-data-array";
import { client } from "@/app/api/square/square-api";

import CatalogTable from "../../components/catalog/catalog_table.jsx";
import { cloudLocation, googleClient } from "../../utils/google-vertex-client";
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
async function askForCustomerDiscounts(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).end();
	}

	const { question } = req.body;

	if (!question) {
		return res.status(400).json({ error: 'Question is required.' });
	}

	try {
		const endpoint = cloudLocation // Replace with your Vertex AI endpoint
		const request = {
			endpoint,
			instances: [{ content: question }],
		};

		const [response] = await googleClient.predict(request);
		const answer = response.predictions[0]?.content;

		console.log(res.json({ answer }))

		return res.json({ answer });
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
}

export default async function CatalogPage() {
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

	return <CatalogTable data={catalogArray} />;
}
