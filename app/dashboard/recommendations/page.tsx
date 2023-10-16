"use server"
import { SupabaseClient } from "@supabase/supabase-js";
import RecommendationsTable from "../../components/recommendations/recommendations"


export default async function EmailCampaignsPage({
	supabase,
}: {
	supabase: SupabaseClient
}) {

	let campaignArray: {
		catalog_item: string;
		emails: [];
	}[] = [];

	let campaignInfo = await supabase.from('email_campaigns').select('*')

	campaignInfo?.data?.map(campaign => {
		const campaignObject = {
			catalog_item: campaign?.catalog_item,
			emails: campaign?.emails.split(",")
		}
		campaignArray.push(campaignObject)
	})

	// console.log(campaignArray)
	return <RecommendationsTable data={campaignArray} />
}
