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

		let catalogArray: {
			id: string;
			name?: string;
			description?: string;
		}[] = [];
		response.then((response) => {
			response.result.objects?.map((catalogObject) => {
				// Skip category items
				if (catalogObject.type !== "ITEM") return;
				const itemData = catalogObject.itemData;
				const itemObject = {
					id: catalogObject.id,
					name: itemData?.name || undefined,
					description: itemData?.description || undefined,
				};
				catalogArray.push(itemObject);
			});
			console.log(catalogArray);
			return catalogArray;
		});
	} catch (e) {
		console.log(e);
	}
};

export default async function CatalogPage({children}: {children: ReactNode}) {
	// const catalogData = createCatalog()
	// console.log(catalogData);
	return (
		// <CatalogTable data={catalogData} />
		<h1>This is catalog page</h1>
	)
}