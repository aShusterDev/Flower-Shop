"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";
import { img } from "@/lib/basePath";

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only pages with a full-bleed hero get the transparent navbar
  const hasHero = pathname === "/" || pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If no hero, always show solid navbar
  const isTransparent = hasHero && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-neutral-100"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/shop"
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              About
            </Link>
          </div>

          {/* Center logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-neutral-200/50 flex-shrink-0">
              <Image
                src={img("/logo.jpg")}
                alt="Calgary Blooms"
                width={28}
                height={28}
                className="w-full h-full object-cover object-[50%_35%]"
                priority
              />
            </div>
            <span
              className={`text-[13px] font-normal tracking-[0.18em] uppercase hidden sm:block transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-neutral-800"
              }`}
            >
              Calgary Blooms
            </span>
          </Link>

          {/* Right nav — cart icon */}
          <div className="hidden md:flex items-center">
            <Link
              href="/cart"
              className={`relative p-2 transition-colors duration-300 ${
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
              aria-label="Shopping cart"
            >
              {/* Shopping bag icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-neutral-900 text-white text-[9px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ml-auto transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-neutral-600"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-100 py-6 space-y-5">
            {[
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "/cart", label: `Cart${totalItems > 0 ? ` (${totalItems})` : ""}` },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[12px] tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
