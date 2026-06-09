"use server";

import { createClient } from "@/utils/supabase/server";

export async function signup(prevState: unknown, formData: FormData) {
    const supabase = await createClient();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string; // Optional password or set default/random
    const firstName = formData.get("firstName") as string;
    const companyName = formData.get("companyName") as string;
    const role = formData.get("role") as string;
    const category = formData.get("category") as string;
    const businessScale = formData.get("businessScale") as string;
    const gstNumber = formData.get("gstNumber") as string;

    // 1. Sign up the user
    const { error, data } = await supabase.auth.signUp({
        email,
        password: password || "TempPassword123!",
        options: {
            data: {
                first_name: firstName, // We will refine this below
                company_name: companyName,
                role: role,
                category: category,
                business_scale: businessScale,
                gst_number: gstNumber,
            },
        },
    });

    if (error) {
        // Handle "User already registered" scenario for Dual Roles
        if (error.message.includes("already registered") || error.code === "user_already_exists") {
            console.log("User exists, attempting role upgrade:", email);

            // Try to sign in to verify ownership
            const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password: password,
            });

            if (signInError) {
                return {
                    error: "This email is already registered. To add a new role (Buyer/Supplier) to your existing account, please enter your ORIGINAL password.",
                };
            }

            if (signInData.user) {
                // Fetch existing profile
                const { data: existingProfile } = await supabase
                    .from("profiles")
                    .select("role")
                    .eq("id", signInData.user.id)
                    .single();

                let newRole = role;
                if (existingProfile) {
                    // If current role is different from new role, UPGRADE to 'both'
                    if (existingProfile.role === "buyer" && role === "seller") newRole = "both";
                    else if (existingProfile.role === "seller" && role === "buyer") newRole = "both";
                    else if (existingProfile.role === "both") newRole = "both";
                    else if (existingProfile.role === role) newRole = role; // No change
                }

                // Update Profile with new role
                const { error: updateError } = await supabase.from("profiles").upsert(
                    {
                        id: signInData.user.id,
                        email: email,
                        // We update the fields to match the latest submission
                        first_name: firstName.split(" ")[0],
                        last_name: firstName.split(" ").slice(1).join(" "),
                        company_name: companyName,
                        role: newRole, // The Upgraded Role
                        category: category,
                        business_scale: businessScale,
                        gst_number: gstNumber,
                    },
                    { onConflict: "id" }
                );

                if (updateError) {
                    console.error("Profile Upgrade Error:", updateError);
                    return { error: "Failed to update profile role." };
                }

                return {
                    success: true,
                    message: "Profile updated! You now have access to both Buyer and Supplier features.",
                };
            }
        }

        console.error("Signup Error:", error);
        return { error: error.message };
    }

    if (data.user) {
        // RESILIENT FIX: Manually ensure profile exists.
        // This handles cases where the user existed in Auth (so no Trigger fired)
        // but was missing from public.profiles (due to our DB resets).

        // Split name best effort
        const nameParts = firstName.trim().split(" ");
        const realFirstName = nameParts[0];
        const realLastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        const { error: profileError } = await supabase.from("profiles").upsert(
            {
                id: data.user.id,
                email: email,
                first_name: realFirstName,
                last_name: realLastName,
                company_name: companyName,
                role: role,
                category: category,
                business_scale: businessScale,
                gst_number: gstNumber,
                // We preserve created_at if it exists, roughly
            },
            { onConflict: "id" }
        );

        if (profileError) {
            console.error("Profile Upsert Error:", profileError);
            // Don't fail the whole flow, but log it.
        }
    }

    return { success: true, message: "Account created successfully" };
}
