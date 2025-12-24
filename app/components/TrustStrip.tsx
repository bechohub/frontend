import { Hexagon, Globe2, Box, ShieldCheck, Radio } from "lucide-react";

export default function TrustStrip() {
    return (
        <div className="bg-slate-50 py-8 border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                    Trusted by leading businesses & partners
                </p>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700">
                        <div className="bg-slate-300 rounded-full h-8 w-8"></div>
                        AcmeCorp
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700">
                        <Hexagon className="h-8 w-8 text-slate-400 fill-current" />
                        LogiTech
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700">
                        <Globe2 className="h-8 w-8 text-slate-400" />
                        GlobalTrade
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700">
                        <Box className="h-8 w-8 text-slate-400" />
                        IndoFab
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700">
                        <ShieldCheck className="h-8 w-8 text-slate-400" />
                        SecurePay
                    </div>

                </div>
            </div>
        </div>
    );
}
