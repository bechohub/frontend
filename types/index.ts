// User Roles
export type UserRole = "buyer" | "seller" | "both" | "admin";

// Industry Categories
export type IndustryCategory =
    | "textiles"
    | "electronics"
    | "industrial"
    | "raw_materials"
    | "chemicals"
    | "food_agri"
    | "all";

// Profile Model (Matches Supabase 'profiles' table)
export interface Profile {
    id: string;
    email: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    company_name: string;
    role: UserRole;
    category?: string;
    business_scale?: string;
    gst_number?: string;
    verified?: boolean;
    rating?: number;
    created_at?: string;
}

// Seller Model (Extended for Browse Listings)
export interface Seller extends Profile {
    moq?: string;
    capacity?: string;
    tags: string[];
    image?: string;
    description: string;
    location: string;
}

// RFQ Model (Matches Supabase 'rfqs' table)
export interface RFQ {
    id: string;
    user_id: string;
    title: string;
    description: string;
    category: IndustryCategory;
    quantity: number;
    unit: string;
    budget?: number;
    deadline?: string;
    status: "open" | "closed" | "awarded";
    created_at: string;
}

// Server Action Response Generic
export interface ActionResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}
