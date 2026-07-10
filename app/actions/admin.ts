"use server";

export async function verifyAdminSecret(secret: string | null): Promise<boolean> {
    if (!secret) return false;
    const expectedSecret = process.env.ADMIN_SECRET_KEY || "bechomaster2026";
    return secret === expectedSecret;
}
