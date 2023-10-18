"use client";
import {
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableBody,
	TableCell,
	Text,
	Title,
	Button
} from "@tremor/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function CustomersTable({ customers }) {
	const supabaseClient = createClientComponentClient()

	return (
		<>
			<Title>Your Customers</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Purchases</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{customers?.map((customer) => (
						// console.log("customer", customer)
						<TableRow key={customer.id}>
							<TableCell>{customer.email}</TableCell>
							<TableCell>
								<Text>{customer.description}</Text>
							</TableCell>
							<TableCell>
								<Text>{customer.price}</Text>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
