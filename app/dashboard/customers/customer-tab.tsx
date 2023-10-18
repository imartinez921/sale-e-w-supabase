"use server";

import { client } from "@/app/api/square/square-api";
import { customersCreationData } from "@/app/utils/customer-data-array";
import { SupabaseClient } from "@supabase/supabase-js";

import CustomersTable from "../../components/customers/CustomersTable";

const seedSquareCustomersAPI = async () => {
	try {
		customersCreationData.forEach(async (customer) => {
			setTimeout(async () => {
				const response = await client.customersApi.createCustomer(
					customer
				);

				console.log(response.result);
			}, 8000);
		});
	} catch (error) {
		console.log(error);
	}
};

export const listSquareCustomers = async () => {
	try {
		const response = await client.customersApi.listCustomers();
		return response.result;
	} catch (error) {
		console.log(error);
	}
};

export default async function CustomersTab({
	supabase,
}: {
	supabase: SupabaseClient;
}) {
	// seedSquareCustomersAPI();
	let customerData = await supabase.from("customers").select("*");
  console.log(customerData)
  let customersArray = [];

  customerData?.data?.forEach(customer => {
    console.log(customer.purchases)
    let customerObject = {
      id: customer.id,
      email: customer.email,
      phone_number: customer.phone_number,
      purchases: customer.purchases
    }
    customersArray.push(customerObject)})
  

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
	//       audio_equipment_speakers: Math.round(Math.random() * 100),
	//       audio_equipment_sound_systems: Math.round(Math.random() * 100),
	//       audio_equipment_amplifiers: Math.round(Math.random() * 100),
	//       music_equipment_guitar: Math.round(Math.random() * 100),
	//       music_equipment_drums: Math.round(Math.random() * 100),
	//       music_equipment_keyboard: Math.round(Math.random() * 100),
	//     }
	//   }]).select()
	// })

	return (<CustomersTable customers={customerData.data} />)
}
