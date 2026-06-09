"use client";

import React, { useState } from "react";

// Note: Client components cannot export metadata.

export default function OfferLetterPage() {
    const [type, setType] = useState("FTE"); // 'FTE' or 'Intern'
    const [name, setName] = useState("Jane Doe");
    const [role, setRole] = useState("Software Engineering Intern");
    const [equity, setEquity] = useState("");
    const [startDate, setStartDate] = useState("June 15, 2026");
    const [date, setDate] = useState("May 30, 2026");
    const [duration, setDuration] = useState("6 Months"); // For interns only

    return (
        <div className="min-h-screen bg-zinc-100 py-10 font-sans text-zinc-900 selection:bg-cyan-600/30 flex print:py-0 print:bg-white">
            <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

            {/* Control Panel (Hidden on Print) */}
            <div className="w-80 bg-white shadow-lg p-6 fixed left-0 top-0 bottom-0 print:hidden overflow-y-auto border-r border-zinc-200 z-50">
                <h2 className="text-xl font-bold mb-6 font-heading text-zinc-900 border-b border-zinc-100 pb-4">
                    Offer Details
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-2">Offer Type</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-sm cursor-pointer font-medium text-zinc-800">
                                <input
                                    type="radio"
                                    name="type"
                                    value="FTE"
                                    checked={type === "FTE"}
                                    onChange={(e) => setType(e.target.value)}
                                    className="text-cyan-600 focus:ring-cyan-600"
                                />{" "}
                                FTE
                            </label>
                            <label className="flex items-center gap-2 text-sm cursor-pointer font-medium text-zinc-800">
                                <input
                                    type="radio"
                                    name="type"
                                    value="Intern"
                                    checked={type === "Intern"}
                                    onChange={(e) => setType(e.target.value)}
                                    className="text-cyan-600 focus:ring-cyan-600"
                                />{" "}
                                Intern
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-1 mt-2">Issue Date</label>
                        <input
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border border-zinc-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all bg-zinc-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-1">Candidate Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-zinc-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all bg-zinc-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-1">Role / Job Title</label>
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full border border-zinc-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all bg-zinc-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-1">Start Date</label>
                        <input
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full border border-zinc-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all bg-zinc-50"
                        />
                    </div>
                    {type === "Intern" && (
                        <div>
                            <label className="block text-sm font-semibold text-zinc-700 mb-1">Duration</label>
                            <input
                                type="text"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                placeholder="e.g. 6 Months"
                                className="w-full border border-zinc-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all bg-zinc-50"
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 mb-1">Equity (Optional)</label>
                        <input
                            type="text"
                            value={equity}
                            onChange={(e) => setEquity(e.target.value)}
                            placeholder="e.g. 1,500 options (leave empty to hide)"
                            className="w-full border border-zinc-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-all bg-zinc-50"
                        />
                    </div>
                </div>

                <button
                    onClick={() => window.print()}
                    className="mt-8 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded shadow-lg shadow-cyan-600/30 transition-all flex justify-center items-center gap-2 group"
                >
                    <svg
                        className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                    </svg>
                    Print to PDF
                </button>
            </div>

            {/* Main Content Area (A4 Paper) */}
            <div className="flex-1 ml-0 md:ml-80 flex justify-center print:ml-0 print:p-0 print:block">
                <div className="w-[210mm] min-h-[297mm] bg-white shadow-xl px-12 py-10 print:shadow-none print:w-full print:max-w-full print:min-w-full print:h-full relative shrink-0">
                    {/* Subtle Background Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl opacity-50 pointer-events-none -mr-20 -mt-20"></div>

                    {/* Letterhead Header */}
                    <header className="flex justify-between items-end border-b-[3px] border-cyan-600 pb-4 mb-6 relative z-10">
                        <div>
                            {/* Typographic Logo */}
                            <div className="text-[40px] font-black tracking-tighter font-space text-zinc-900 leading-none">
                                becho<span className="text-cyan-600">Hub</span>
                            </div>
                            <div className="mt-3 text-[10px] font-bold text-cyan-700 tracking-[0.15em] font-sans uppercase">
                                India&apos;s Premiere B2B Network
                            </div>
                        </div>
                        <div className="text-right text-sm text-zinc-500 font-medium space-y-1">
                            <p className="text-zinc-800 font-bold text-base">bechoHub</p>
                            <p>Remote (India)</p>
                            <p>www.bechohub.com</p>
                        </div>
                    </header>

                    {/* Letter Content */}
                    <main className="text-zinc-800 text-[14px] leading-snug space-y-3 relative z-10">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="font-semibold text-zinc-900">{date}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="font-bold text-zinc-900 text-lg">{name}</p>
                        </div>

                        <div className="mt-4 mb-3">
                            <h1 className="text-xl font-bold font-heading text-zinc-900 border-l-4 border-cyan-600 pl-4 py-1 bg-cyan-50/50">
                                Subject: Offer of Employment - {role}
                            </h1>
                        </div>

                        <p>Dear {name.split(" ")[0] || "Candidate"},</p>

                        <p>
                            Following our recent discussions, we are absolutely thrilled to offer you{" "}
                            {type === "Intern" ? "an internship as a" : "the position of"}{" "}
                            <strong className="text-zinc-900 font-bold">{role}</strong> at bechoHub. We were incredibly
                            impressed by your technical acumen, problem-solving skills, and passion for building
                            scalable B2B platforms.
                        </p>

                        <p>
                            As India&apos;s premiere B2B network, we are on a mission to revolutionize how businesses
                            connect and trade. As an early member of our startup, your expertise will be instrumental in
                            driving our engineering efforts forward and shaping the future of our platform. We are
                            building a high-trust, fast-paced, and remote-first culture where you will have immense
                            ownership.
                        </p>

                        <div className="bg-zinc-50/80 border border-zinc-200 rounded-lg p-4 my-4 shadow-sm">
                            <h3 className="font-bold text-zinc-900 mb-3 font-heading text-base">
                                Key Terms of Employment:
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                    <div>
                                        <span className="font-semibold text-zinc-900">Role:</span> {role}
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                    <div>
                                        <span className="font-semibold text-zinc-900">Type:</span>{" "}
                                        {type === "Intern" ? "Internship" : "Full-Time Employee"}
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                    <div>
                                        <span className="font-semibold text-zinc-900">Start Date:</span> {startDate}
                                    </div>
                                </li>
                                {type === "Intern" && duration && (
                                    <li className="flex gap-3 items-start">
                                        <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                        <div>
                                            <span className="font-semibold text-zinc-900">Duration:</span> {duration}
                                        </div>
                                    </li>
                                )}
                                {equity && (
                                    <li className="flex gap-3 items-start">
                                        <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                        <div>
                                            <span className="font-semibold text-zinc-900">Equity:</span> {equity}{" "}
                                            Employee Stock Ownership Plan (ESOP) options, vesting over a standard 4-year
                                            schedule with a 1-year cliff.
                                        </div>
                                    </li>
                                )}
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                    <div>
                                        <span className="font-semibold text-zinc-900">Location:</span> Remote (Work from
                                        Anywhere in India)
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                    <div>
                                        <span className="font-semibold text-zinc-900">Compensation:</span> As mutually
                                        agreed upon (detailed in the upcoming employment agreement).
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <p>
                            In addition to the above, you will be part of a dynamic startup environment. We offer
                            flexible working hours, an incredible learning curve, and the opportunity to build products
                            from the ground up that will impact thousands of businesses across India.
                        </p>

                        <p>
                            Please indicate your acceptance of this offer by signing and returning a copy of this letter
                            prior to your start date.
                        </p>

                        <p>
                            {name.split(" ")[0] || "Candidate"}, we are building something truly special at bechoHub,
                            and we can&apos;t wait for you to join the team and make a massive impact!
                        </p>

                        <p className="mt-4">Warm regards,</p>

                        <div className="mt-8 pt-4 flex justify-between items-start">
                            <div>
                                <div className="relative w-56 mt-24 mb-3">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/signature.png"
                                        alt="Signature"
                                        className="absolute -bottom-4 -left-3 w-[125%] max-h-32 object-contain object-bottom mix-blend-multiply opacity-90 contrast-[1.5] grayscale"
                                    />
                                    <div className="w-full h-[1px] bg-zinc-400"></div>
                                </div>
                                <p className="font-bold text-zinc-900 text-base">Supratim Dhara</p>
                                <p className="text-sm text-zinc-500 font-medium">Co-founder & CTO</p>
                                <p className="text-sm text-cyan-700 font-medium">bechoHub</p>
                            </div>

                            <div>
                                <div className="w-56 mt-24 mb-3 h-0 border-t border-dashed border-zinc-400"></div>
                                <p className="font-bold text-zinc-900 text-base">
                                    Accepted: {name || "________________"}
                                </p>
                                <p className="text-sm text-zinc-500 font-medium mt-1">Date: ________________</p>
                            </div>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="mt-6 pt-3 border-t border-zinc-200 text-center text-xs text-zinc-400 relative z-10">
                        <p>This is a system-generated offer letter and is valid upon execution by both parties.</p>
                        <p className="mt-2 font-space tracking-[0.2em] uppercase text-zinc-300 font-bold text-[10px]">
                            bechoHub
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
