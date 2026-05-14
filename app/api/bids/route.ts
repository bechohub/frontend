import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

// GET: Fetch Bids (Filterable by rfq_id, seller_id, etc.)
export async function GET(request: Request) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);

        const rfqId = searchParams.get("rfq_id");
        const sellerId = searchParams.get("seller_id");
        const status = searchParams.get("status");

        let query = supabase
            .from("bids")
            .select("*, profiles(company_name), rfqs(title)")
            .order("created_at", { ascending: false });

        if (rfqId) query = query.eq("rfq_id", rfqId);
        if (sellerId) query = query.eq("user_id", sellerId);
        if (status) query = query.eq("status", status);

        const { data, error } = await query;

        if (error) throw error;

        return NextResponse.json({ success: true, count: data.length, data });
    } catch (error: unknown) {
        console.error("API Error [Bids]:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}

// POST: Create a new Bid (Seller Only)
export async function POST(request: Request) {
    try {
        const supabase = await createClient();

        // 1. Check Auth & Role
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        // Verify profile role
        const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();

        if (!profile || (profile.role !== "seller" && profile.role !== "both")) {
            return NextResponse.json({ success: false, error: "Only sellers can create Bids" }, { status: 403 });
        }

        const body = await request.json();

        // 2. Insert into Bids
        const { data, error } = await supabase
            .from("bids")
            .insert({
                user_id: user.id,
                rfq_id: body.rfq_id,
                amount: body.amount,
                delivery_time: body.delivery_time,
                description: body.description,
                status: "pending",
            })
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (error: unknown) {
        console.error("API Error [Bids]:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
