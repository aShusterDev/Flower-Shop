"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-2xl font-light tracking-[0.2em] text-stone-800 uppercase">
              Calgary Blooms
            </span>
            <span className="text-[10px] tracking-[0.3em] text-stone-400 uppercase">
              by Nadya
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/cart"
              className="relative text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors"
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-5 bg-rose-400 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-600"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-stone-100 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900"
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900"
            >
              About
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-widest uppercase text-stone-600 hover:text-stone-900"
            >
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
