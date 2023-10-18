"use client";

import {
	Card,
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableBody,
	TableCell,
	Text,
	Title,
	Badge,
	Button,
} from "@tremor/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import CampaignButton from "./CampaignButton";

export interface CatalogTableProps {
	data: {
		id: string;
		name: string;
		description: string;
		price: string | null | undefined;
	}[];
	palmAI: any;
	customerData: any;
}

export default function CatalogTable({ data, palmAI, customerData }: CatalogTableProps) {
	const supabaseClient = createClientComponentClient();

	return (
		<>
			<Title>Your Catalog</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Description</TableHeaderCell>
						<TableHeaderCell>Price (by bulk)</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.name}</TableCell>
							<TableCell>
								<Text>{item.description}</Text>
							</TableCell>
							<TableCell>
								<Text>{item.price}</Text>
							</TableCell>
							<TableCell>
								<CampaignButton item={item} supabaseClient={supabaseClient} palmAI={palmAI} customerData={customerData} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
