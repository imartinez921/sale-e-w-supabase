import { ReactNode } from "react";
import { catalog_data_array } from "@/app/utils/catalog-data-array";
import { client } from "@/app/api/square/square-api";

import CatalogTable from "../../components/catalog/catalog_table.jsx";

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
};

export async function catalogListing() {
	try {
		const response = await client.catalogApi.listCatalog();

		// console.log(response.result);
		return response.result;
	} catch (error) {
		console.log(error);
	}
}

export default async function CatalogPage({ children }: { children: ReactNode }) {
	const catalogData = await catalogListing();
	console.log("THIS IS CATALOG DATA START")
	catalogData?.objects?.forEach(item => {
		console.log(item?.itemData);
		// For putting it in the catalog listing tsx UI, you'd probably do something like:
		// catalogData?.objects?.map( item => {
		//(
		// <ul>
		// <li> item.name </li>
		// </ul>
		// etc etc
		//)
		// } )
	});
	return (
		// <CatalogTable data={catalogData} />
		<h1>This is catalog page</h1>
	)
}