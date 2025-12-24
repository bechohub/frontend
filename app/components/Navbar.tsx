"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "../utils/cn";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                {/* Fallback to text if logo image is not perfect, but using image as requested */}
                <Image
                  src="/logo.png"
                  alt="B2B Connect Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-slate-800">
                B2B Connect
              </span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile, can add toggle later */}
          <div className="hidden md:flex flex-1 mx-8 max-w-2xl">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search for products, suppliers, or categories..."
                className="block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium z-50">
            <Link
              href="/browse"
              className={cn(
                "transition-colors",
                isActive('/browse') ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"
              )}
            >
              Browse Suppliers
            </Link>
            <Link
              href="/how-it-works"
              className={cn(
                "transition-colors",
                isActive('/how-it-works') ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"
              )}
            >
              How It Works
            </Link>
            <Link
              href="/login"
              className={cn(
                "transition-colors",
                isActive('/login') ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"
              )}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className={cn(
                "transition-colors",
                isActive('/signup') ? "text-teal-600 font-bold" : "text-gray-600 hover:text-teal-600"
              )}
            >
              Sign Up
            </Link>
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center rounded-md bg-[#008ba3] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#007b91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all"
            >
              Post RFQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
