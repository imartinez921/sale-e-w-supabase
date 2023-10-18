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
	Button
} from "@tremor/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function CatalogTable({ data, palmAI, customerData }) {
	const supabaseClient = createClientComponentClient()

	return (
		<>
			<Title>Your Catalog</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Description</TableHeaderCell>
						<TableHeaderCell>
							Price (by bulk)
						</TableHeaderCell>
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
								<Button
									onClick={async () => {
										const campaign = await palmAI(
											customerData?.data,
											item.name
										);

										const { data, error } =
											await supabaseClient
												.from("email_campaigns")
												.insert([campaign])
												.select();
									}}
								>
									Create Sale Campaign
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
