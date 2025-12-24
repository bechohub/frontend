import { Star, MapPin, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { ScaleOnHover } from "../components/Animators";

interface SupplierProps {
    id: number;
    name: string;
    category: string;
    location: string;
    rating: number;
    reviews: number;
    verified: boolean;
    tags: string[];
}

export default function SupplierCard({ supplier }: { supplier: SupplierProps }) {
    return (
        <ScaleOnHover className="flex flex-col bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
            <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-500 uppercase">
                        {supplier.name.substring(0, 2)}
                    </div>
                    {supplier.verified && (
                        <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            <BadgeCheck className="h-3 w-3" /> Verified
                        </div>
                    )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#008ba3] transition-colors">{supplier.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{supplier.category}</p>

                <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-bold text-slate-900">{supplier.rating}</span>
                    <span className="text-sm text-gray-400">({supplier.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {supplier.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" /> {supplier.location}
                </div>
                <Link href="#" className="text-sm font-semibold text-[#008ba3] hover:underline">
                    Contact
                </Link>
            </div>

        </ScaleOnHover>
    );
}
