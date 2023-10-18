"use client"
import {
    Button,
} from "@tremor/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CatalogTableProps } from "./CatalogTable";
import { SupabaseClient } from "@supabase/supabase-js";

interface CampaignButtonProps {
    item: { id: string; name: string; description: string; price: string | null | undefined; };
    palmAI: any;
    supabaseClient: SupabaseClient;
    customerData: any
}

export default function CampaignButton({ item, palmAI, customerData, supabaseClient }:
    CampaignButtonProps) {
    let [buttonClickable, setButtonClickable] = useState(true)
    const router = useRouter();
    return (
        <Button
            onClick={async () => {
                const campaign = await palmAI(
                    customerData?.data,
                    item.name
                );

                const { data, error } =
                    await supabaseClient
                        .from("email_campaigns")
                        .insert(campaign)
                        .select();
                router.refresh();
                setButtonClickable(false)
            }}
            disabled={buttonClickable ? false : true}
        >
            {buttonClickable ? "Create Sale Campaign" : "Sale Campaign Created"}
        </Button>
    )
}