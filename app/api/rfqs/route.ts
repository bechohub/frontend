import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

// GET: Fetch RFQs (Filterable by status, category, or user_id)
export async function GET(request: Request) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);

        // Example filters
        const category = searchParams.get("category");
        const status = searchParams.get("status");
        const userId = searchParams.get("user_id");

        let query = supabase.from("rfqs").select("*").order("created_at", { ascending: false });

        if (category) query = query.eq("category", category);
        if (status) query = query.eq("status", status);
        if (userId) query = query.eq("user_id", userId);

        const { data, error } = await query;

        if (error) throw error;

        return NextResponse.json({ success: true, count: data.length, data });
    } catch (error: unknown) {
        console.error("API Error [RFQs]:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}

// POST: Create a new RFQ (Buyer Only)
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

        // Optional: Verify profile role
        const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();

        if (!profile || (profile.role !== "buyer" && profile.role !== "both")) {
            return NextResponse.json({ success: false, error: "Only buyers can create RFQs" }, { status: 403 });
        }

        const body = await request.json();

        // 2. Insert into RFQs
        const { data, error } = await supabase
            .from("rfqs")
            .insert({
                user_id: user.id,
                title: body.title,
                description: body.description,
                category: body.category,
                quantity: body.quantity,
                unit: body.unit,
                budget: body.budget,
                deadline: body.deadline,
                status: "open",
            })
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (error: unknown) {
        console.error("API Error [RFQs]:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
