import { Card, Title, Text } from '@tremor/react';
import UsersTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
//   const search = searchParams.q ?? '';
//   const users = await queryBuilder
//     .selectFrom('users')
//     .select(['id', 'name', 'username', 'email'])
//     .where('name', 'like', `%${search}%`)
//     .execute();
const users = [
  {
    name: "Viola Amherd",
    numPurchases: 13,
    currTrend:  "sports",
    status: "active",
  },
  {
    name: "Simonetta Sommaruga",
    numPurchases: 21,
    currTrend:
      "personal care",
    status: "active",
  },
  {
    name: "Alain Berset",
    numPurchases: 17,
    currTrend: "clothing",
    status: "active",
  },]

  return (
		<main className="p-4 md:p-10 mx-auto max-w-7xl">
			<Title>Customers</Title>
			<Text>All customers who have a purchase history with you.</Text>
			<Card className="mt-6">
				<UsersTable users={users} />
			</Card>
            <br />
			<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
				<a
					className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
					href="http://localhost:3000/"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Go Home{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
				</a>
			</div>
		</main>
  );
}