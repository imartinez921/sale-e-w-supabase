"use server"

import { client } from "@/app/api/square/square-api"
import { customersCreationData } from "@/app/utils/customer-data-array"

const seedSquareCustomersAPI = async () => {
  try {

    customersCreationData.forEach(async customer => {

      setTimeout(async () => {
        const response = await client.customersApi.createCustomer(customer)

        console.log(response.result)
      }, 8000)
    }
    )
  } catch (error) {
    console.log(error)
  }
}

const listSquareCustomers = async () => {
  try {
    const response = await client.customersApi.listCustomers();

    console.log(response.result)
    return response.result;
  } catch (error) {
    console.log(error)
  }
}

export default async function CustomerServerComponent({
  supabase,
}: {
  supabase: any
}) {

  // seedSquareCustomersAPI();
  const customerList = listSquareCustomers();

  console.log(customerList)

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">

    </main>
  );
}