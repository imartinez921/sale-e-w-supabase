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
                    {data?.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.catalog_item}</TableCell>
                            <TableCell>
                                <List>
                                    {item.emails.map(email => <ListItem>{email}</ListItem>)}
                                </List>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}
