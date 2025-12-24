import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ShoppingBag } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            {/* Pre-footer CTA */}
            <div className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between flex-col text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to grow your business?
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Join thousands of Indian businesses already trading securely on B2B Connect. Sign up is free.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="#"
                            className="rounded-md bg-white px-8 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Create Free Account
                        </Link>
                        <Link href="#" className="text-sm font-semibold leading-6 text-white border border-white/20 px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>


            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            {/* Simplified logo representation for footer */}
                            <div className="h-8 w-8 rounded-full bg-[#008ba3] flex items-center justify-center">
                                <span className="font-bold text-white text-xs">BC</span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                B2B Connect
                            </span>
                        </div>
                        <p className="text-sm leading-6 text-gray-400">
                            Empowering Indian MSMEs with technology. Connect, source, and grow with India&apos;s most trusted B2B marketplace.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Platform</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Browse Suppliers</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Post RFQ</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Pricing</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Success Stories</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Help Center</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Trust & Safety</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Seller Policies</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">About Us</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Careers</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Press</Link></li>
                                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">Terms of Service</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-gray-400">&copy; 2024 B2B Connect Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs leading-5 text-gray-400 hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="text-xs leading-5 text-gray-400 hover:text-white">Terms of Use</Link>
                        <Link href="#" className="text-xs leading-5 text-gray-400 hover:text-white">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
