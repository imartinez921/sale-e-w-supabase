"use server"
import { SupabaseClient } from "@supabase/supabase-js";
import CampaignsTable from "../../components/campaigns/CampaignsTable"


export default async function EmailCampaignsTab({
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
			id: campaign?.id,
			catalog_item: campaign?.catalog_item,
			emails: campaign?.emails.split(",")
		}
		campaignArray.push(campaignObject)
	})

	return <CampaignsTable data={campaignArray} />
}
