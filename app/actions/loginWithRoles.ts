import { createClient } from "@/utils/supabase/client";

export async function loginWithRoles(email: string, password: string) {
  const supabase = createClient();
  // 1. Sign in
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) {
    return { error: error?.message || "Invalid credentials" };
  }
  // 2. Fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .single();
  if (profileError || !profile) {
    return { error: "Profile not found" };
  }
  // 3. Return role(s)
  if (profile.role === "both") {
    return { roles: ["buyer", "seller"], user: data.user };
  }
  if (profile.role === "buyer" || profile.role === "seller") {
    return { roles: [profile.role], user: data.user };
  }
  return { error: "Unknown role" };
}
