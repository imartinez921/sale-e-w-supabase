import { ReactNode } from "react";
import { catalog_data_array } from "@/app/utils/catalog-data-array";
import { client } from "@/app/api/square/square-api";


const uploadCatalog = async () => {
	try {
		const response = client.catalogApi.batchUpsertCatalogObjects({
			idempotencyKey: crypto.randomUUID(),
			batches: [{
				objects: catalog_data_array
			}]
		})

		console.log((await response).result)
	} catch (e) {
		console.log(e)
	}
}

export default function CatalogDetail({ children }: { children: ReactNode }) {
	uploadCatalog();

	return <main className="p-4 md:p-10 mx-auto max-w-7xl">{children}</main>;
}
