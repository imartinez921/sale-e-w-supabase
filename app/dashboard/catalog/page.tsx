import { ReactNode } from "react";
import { catalog_data_array } from "@/app/utils/catalog-data-array";
import { client } from "@/app/api/square/square-api";

import CatalogTable from "../../components/catalog/catalog_table.jsx";

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

export default async function CatalogPage({
	children,
}: {
	children: ReactNode;
}) {
	const catalogData = await catalogListing();
	let catalogArray: {
		name: string;
		description: string;
		priceMoney: { amount: number; currency: string };
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
					id: variation.itemVariationData.itemId,
					name: itemData.name + " (" + variation.itemVariationData.name + ")" || "",
					description: itemData?.description || "",
					// This value is a BigInt so convert to string
					price:
						"$" + variation?.itemVariationData.priceMoney?.amount.toString() +
							" USD" || "0 USD",
				};
				catalogArray.push(itemObject);
			});
		}
	});
	return <CatalogTable data={catalogArray} />;
}
