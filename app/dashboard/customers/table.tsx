import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface User {
  id: number;
  name: string;
  numPurchases: string;
  currTrend: string;
  status: string;
}

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell># of Purchases</TableHeaderCell>
          <TableHeaderCell>Current Trend</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.name}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.numPurchases}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.currTrend}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
