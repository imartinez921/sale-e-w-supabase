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

export default function CatalogTable({ data }) {
	return (
		<Card>
			<Title>Your Catalog</Title>
			<Table className="mt-5">
				<TableHead>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Description</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{catalogArray?.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.name}</TableCell>
							<TableCell>
								<Text>{item.description}</Text>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
