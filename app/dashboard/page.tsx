import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export default async function Dashboard() {
    // Wrap dashboard in server-side Supabase client
    // https://youtu.be/-7K6DRWfEGM?si=6amjfTk8TZFzeKyQ&t=283
    const supabase = createServerComponentClient({cookies});

    // I still need to add catalog test data to Supabase to test this connection
    const {data} = await supabase.from("catalog").select();
    // return <pre>{JSON.stringify(data,null,2)}</pre>
}