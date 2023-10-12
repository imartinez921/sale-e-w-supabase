"use server"

import { client } from "@/app/api/square/square-api"
import { customersCreationData } from "@/app/utils/customer-data-array"
import { SupabaseClient } from "@supabase/supabase-js"

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

export const listSquareCustomers = async () => {
  try {
    const response = await client.customersApi.listCustomers();

    // console.log(response.result)
    return response.result;
  } catch (error) {
    console.log(error)
  }
}

export default async function CustomerServerComponent({
  supabase,
}: {
  supabase: SupabaseClient
}) {

  // seedSquareCustomersAPI();
  // const customerList = await listSquareCustomers();

  // customerList?.customers?.forEach(async customer => {
  //   const { data, error } = await supabase.from('customers').insert([{
  //     email: customer?.emailAddress,
  //     tele_number: customer?.phoneNumber,
  //     purchases: {
  //       tea: Math.round(Math.random() * 100),
  //       coffee: Math.round(Math.random() * 100),
  //       soda: Math.round(Math.random() * 100),
  //       television: Math.round(Math.random() * 100),
  //       video_game: Math.round(Math.random() * 100),
  //       mens_clothing: Math.round(Math.random() * 100),
  //       womens_clothing: Math.round(Math.random() * 100),
  //       nonbinary_clothing: Math.round(Math.random() * 100),
  //       candy: Math.round(Math.random() * 100),
  //       juice: Math.round(Math.random() * 100),
  //       audio_equipment: Math.round(Math.random() * 100),
  //       music_equipment: Math.round(Math.random() * 100)
  //     }
  //   }]).select()
  // })


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      This is customer page
    </main>
  );
}