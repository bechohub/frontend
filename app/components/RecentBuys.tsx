"use client";

import Link from "next/link";
import { Clock, MapPin, Tag } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "./Animators";

export default function RecentBuys() {
    const requirements = [
        {
            title: "Bulk Cotton Fabric Rolls",
            qty: "2000 Meters",
            location: "Surat, Gujarat",
            time: "2h ago",
            tags: ["Textiles"],
            tagColor: "bg-orange-100 text-orange-700",
            id: 1,
        },
        {
            title: "PCB Boards (Custom Design)",
            qty: "500 Units",
            location: "Bangalore, Karnataka",
            time: "4h ago",
            tags: ["Electronics"],
            tagColor: "bg-blue-100 text-blue-700",
            id: 2,
        },
        {
            title: "Organic Spices (Export Quality)",
            qty: "100 kg",
            location: "Kochi, Kerala",
            time: "5h ago",
            tags: ["Agriculture"],
            tagColor: "bg-green-100 text-green-700",
            id: 3,
        },
        {
            title: "Steel Bearings (Series 6000)",
            qty: "1000 Pcs",
            location: "Ludhiana, Punjab",
            time: "6h ago",
            tags: ["Industrial"],
            tagColor: "bg-slate-100 text-slate-700",
            id: 4,
        },
    ];

    return (
        <div className="bg-slate-50 py-20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl font-bold text-slate-900">Recent Buy Requirements</h2>
                    <Link href="#" className="text-sm font-semibold text-[#008ba3] hover:text-[#007b91] hover:underline underline-offset-4 transition-all">
                        View All
                    </Link>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {requirements.map((req) => (
                        <StaggerItem key={req.id}>
                            <ScaleOnHover className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 uppercase ${req.tagColor}`}>
                                        {req.tags[0]}
                                    </span>
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        {req.time}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1 line-clamp-2">
                                    {req.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">Qty: {req.qty}</p>

                                <div className="flex items-center gap-1 text-xs text-gray-400 mt-auto pt-4 border-t border-gray-50">
                                    <MapPin className="h-3 w-3" />
                                    {req.location}
                                </div>
                            </ScaleOnHover>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
