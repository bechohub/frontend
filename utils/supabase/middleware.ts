import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // refreshing the auth token
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const url = request.nextUrl.clone();
    const isProtectedRoute =
        url.pathname.startsWith("/profile") ||
        url.pathname.startsWith("/seller") ||
        url.pathname.startsWith("/admin") ||
        url.pathname.startsWith("/rfq");

    const isAuthRoute = url.pathname.startsWith("/login") || url.pathname.startsWith("/signup");

    if (!user && isProtectedRoute) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    if (user && isProtectedRoute) {
        // Enforce RBAC via lightweight DB query
        const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();

        const role = profile?.role;

        // Enforce boundaries between /seller and /buyer
        if (url.pathname.startsWith("/seller") && role !== "seller" && role !== "both") {
            url.pathname = "/profile";
            return NextResponse.redirect(url);
        }

        // Restrict /admin access
        if (url.pathname.startsWith("/admin") && role !== "admin") {
            url.pathname = "/profile";
            return NextResponse.redirect(url);
        }
    }

    if (user && isAuthRoute) {
        url.pathname = "/profile";
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}
