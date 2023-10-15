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
} from "@tremor/react";

export default function CatalogTable({ data, palmAI, customerData }) {
	return (
		<Card>
			<Title>Your Catalog</Title>
			<Table className="mt-5">
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Description</TableHeaderCell>
						<TableHeaderCell>Price (single OR bulk)</TableHeaderCell>
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
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
