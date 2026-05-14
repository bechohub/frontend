import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

// GET: Marketplace Directory (Publicly viewable)
export async function GET(request: Request) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);

        const category = searchParams.get("category");
        const minPrice = searchParams.get("min_price");
        const search = searchParams.get("search");

        let query = supabase
            .from("products")
            .select(
                `
                *,
                profiles:user_id (company_name, verified, business_scale)
            `
            )
            .eq("is_active", true)
            .order("created_at", { ascending: false });

        if (category) query = query.eq("category", category);
        if (minPrice) query = query.gte("price", parseFloat(minPrice));
        if (search) query = query.ilike("title", `%${search}%`);

        const { data, error } = await query;

        if (error) throw error;

        return NextResponse.json({ success: true, count: data.length, data });
    } catch (error: unknown) {
        console.error("API Error [Products]:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}

// POST: Add Product listing (Seller Only)
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

        const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();

        if (!profile || (profile.role !== "seller" && profile.role !== "both")) {
            return NextResponse.json({ success: false, error: "Only sellers can list products" }, { status: 403 });
        }

        const body = await request.json();

        const { data, error } = await supabase
            .from("products")
            .insert({
                user_id: user.id,
                title: body.title,
                description: body.description,
                category: body.category,
                price: body.price,
                unit: body.unit,
                images: body.images || [], // Expecting array
                moq: body.moq || 1, // Minimum Order Quantity
                is_active: true,
            })
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (error: unknown) {
        console.error("API Error [Products]:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
