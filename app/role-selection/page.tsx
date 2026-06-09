"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const roles = [
    {
        key: "buyer",
        title: "Buyer",
        icon: (
            <svg
                className="w-8 h-8 mb-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-3.3L17 13M7 13V6h13"
                />
            </svg>
        ),
        desc: "Browse and purchase products",
        btn: "Continue as Buyer",
    },
    {
        key: "seller",
        title: "Seller",
        icon: (
            <svg
                className="w-8 h-8 mb-2 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"
                />
            </svg>
        ),
        desc: "Manage and sell your products",
        btn: "Continue as Seller",
    },
];

export default function RoleSelection() {
    const [lastRole, setLastRole] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("lastRole");
        if (stored) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLastRole(stored);
        }
        // TODO: Fetch user roles from backend and auto-redirect if only one
        // Example: if (userRoles.length === 1) router.push(`/${userRoles[0]}`);
    }, [router]);

    const handleSelect = (role: string) => {
        localStorage.setItem("lastRole", role);
        router.push(`/${role}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Mode</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {roles.map((r) => (
                        <div
                            key={r.key}
                            className={`flex flex-col items-center border rounded-lg p-6 cursor-pointer transition shadow-sm hover:shadow-md ${lastRole === r.key ? "border-blue-600" : "border-gray-200"}`}
                            onClick={() => handleSelect(r.key)}
                        >
                            {r.icon}
                            <div className="font-semibold text-lg mb-1">{r.title}</div>
                            <div className="text-gray-500 text-sm mb-4 text-center">{r.desc}</div>
                            <button
                                className={`w-full py-2 rounded font-semibold ${r.key === "buyer" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-green-600 text-white hover:bg-green-700"}`}
                            >
                                {r.btn}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
