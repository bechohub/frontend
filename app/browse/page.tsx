import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Filter, ChevronDown, Search } from "lucide-react";
import SupplierCard from "../components/SupplierCard";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "../components/Animators";

export default function BrowseSuppliers() {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Filters - Hidden on mobile for now, can add toggle later */}
                    <FadeIn delay={0.1} className="hidden md:block w-64 flex-shrink-0 space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                                <Filter className="h-4 w-4" /> Filters
                            </h3>

                            {/* Category Filter */}
                            <div className="border-t border-white/10 py-4">
                                <button className="flex w-full items-center justify-between text-sm text-slate-400 hover:text-slate-300">
                                    <span className="font-medium text-white">Category</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                <div className="mt-4 space-y-2">
                                    {['Textiles', 'Electronics', 'Agriculture', 'Industrial', 'Chemicals'].map((category) => (
                                        <div key={category} className="flex items-center">
                                            <input
                                                id={`filter-${category}`}
                                                name="category"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-white/20 bg-white/5 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-950"
                                            />
                                            <label
                                                htmlFor={`filter-${category}`}
                                                className="ml-3 text-sm text-slate-400"
                                            >
                                                {category}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="border-t border-white/10 py-4">
                                <button className="flex w-full items-center justify-between text-sm text-slate-400 hover:text-slate-300">
                                    <span className="font-medium text-white">Location</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                <div className="mt-4 space-y-2">
                                    {['Gujarat', 'Maharashtra', 'Karnataka', 'Delhi'].map((loc) => (
                                        <div key={loc} className="flex items-center">
                                            <input
                                                id={`filter-${loc}`}
                                                name="location"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-white/20 bg-white/5 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-950"
                                            />
                                            <label
                                                htmlFor={`filter-${loc}`}
                                                className="ml-3 text-sm text-slate-400"
                                            >
                                                {loc}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </FadeIn>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search Header */}
                        <SlideUp delay={0.2} className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="relative w-full max-w-lg">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search className="h-5 w-5 text-slate-500" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search suppliers by name, product, or GST..."
                                    className="block w-full rounded-md border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white placeholder-slate-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-400">Sort by:</span>
                                <select className="block w-full rounded-md border-0 bg-slate-900 py-1.5 pl-3 pr-10 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-teal-600 sm:text-sm sm:leading-6">
                                    <option>Relevance</option>
                                    <option>Rating: High to Low</option>
                                    <option>Newest First</option>
                                </select>
                            </div>
                        </SlideUp>

                        {/* Suppliers Grid */}
                        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { id: 1, name: 'Sai Textiles', category: 'Textiles', location: 'Surat, Gujarat', rating: 4.8, reviews: 124, verified: true, tags: ['Cotton', 'Silk', 'Bulk'] },
                                { id: 2, name: 'TechTronix', category: 'Electronics', location: 'Bangalore, KA', rating: 4.5, reviews: 89, verified: true, tags: ['PCB', 'Resistors', 'Sensors'] },
                                { id: 3, name: 'Green Farms', category: 'Agriculture', location: 'Nashik, MH', rating: 4.9, reviews: 210, verified: true, tags: ['Organic', 'Export', 'Fresh'] },
                                { id: 4, name: 'MetalWorks India', category: 'Industrial', location: 'Pune, MH', rating: 4.2, reviews: 56, verified: false, tags: ['Steel', 'Aluminum', 'Parts'] },
                                { id: 5, name: 'ChemCo Ltd', category: 'Chemicals', location: 'Vadodara, Gujarat', rating: 4.6, reviews: 140, verified: true, tags: ['Solvents', 'Industrial', 'Bulk'] },
                                { id: 6, name: 'Fab India Exp', category: 'Textiles', location: 'Jaipur, RJ', rating: 4.7, reviews: 95, verified: true, tags: ['Prints', 'Cotton', 'Dyes'] },
                            ].map((supplier) => (
                                <StaggerItem key={supplier.id}>
                                    <SupplierCard supplier={supplier} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
