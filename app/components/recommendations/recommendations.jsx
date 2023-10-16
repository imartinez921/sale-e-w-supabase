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
    List,
    ListItem,
    Badge,
    Button
} from "@tremor/react";

export default function RecommendationsTable({ data }) {
    return (
        <Card>
            <Title>Your Email Campaigns</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Item Name</TableHeaderCell>
                        <TableHeaderCell>Emails</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((campaign) => {
                        const campaignKey = crypto.randomUUID();
                        return (
							<TableRow key={campaignKey}>
								<TableCell>{campaign.catalog_item}</TableCell>
								<TableCell>
									<List>
										{campaign.emails.map((email, index) => (
											<ListItem key={`${email}+"-"+${index}`}>{email}</ListItem>
										))}
									</List>
								</TableCell>
							</TableRow>
						);})}
                </TableBody>
            </Table>
        </Card>
    );
}
